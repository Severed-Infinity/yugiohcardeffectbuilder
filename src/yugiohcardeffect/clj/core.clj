(ns yugiohcardeffect.clj.core
  (:require [yada.yada :as yada]
            [yada.resources.classpath-resource :refer [new-classpath-resource]]
            [clojure.java.io :refer [file resource]]
            [clojure.string :refer [join]]
            [clojure.data.json :as json]
            [cljs.pprint :refer [pprint]]
            [aero.core :refer [read-config]]
            [clj-http.client :as client]
            [clojure.java.io :refer [output-stream writer reader]]
            [clojure.edn :as edn])
  (:import (java.io OutputStream)))

#_(require '(clojure.java [io :refer [output-stream writer reader]]))
#_(require '(clojure [edn :as edn]))

(def config (read-config "config.edn"))
#_config

;; doesn't hold any result, just produces one
(defn resource-routes []
  (yada/listener
    ["/"
     [["" (yada/handler (file "app.html"))]
      ["resources/public/" (assoc (new-classpath-resource "public") :id :yugioheffectbuilder.resources/static)]]]
    ;;TODO environmental inputs
    {:port (Integer. (:port config))}))

;;;;; ATOM Variant ;;;;;;;
(defonce server (atom nil))

(defn start! []
  (if (nil? @server)
    (do
      (println "Starting server...")
      (reset! server (resource-routes)))
    (do
      (println "Server already running.")
      @server)))

(defn stop! []
  (when (:close @server)
    (do
      (println "Closing server...")
      (reset! server ((:close @server))))))

(defn reload! []
  (do
    (println "Reloading server...")
    (stop!)
    (start!)))

(comment
  ;;;; AGENT Variant ;;;;;;;
  (defonce server2 (agent {}))

  (add-watch
    server2
    :starting
    (fn [key server2 old new]
      (when (empty? old)
        (if (any? (agent-error server2))
          (do
            (prn key 'failed 'with (agent-error server2))
            (restart-agent server2 old))
          (prn key new)))))

  (add-watch
    server2
    :stopping
    (fn [key server2 old new]
      (when (not (empty? old))
        (if (any? (agent-error server2))
          (prn key 'failed 'with (agent-error server2))
          (prn key new)))))

  (defn start2 []
    (let [routes (resource-routes)]
      (send server2 merge routes)
      (when (any? (agent-error server2))
        (do
          ((:close routes))
          (prn (agent-error server2))
          (restart-agent server2 @server2)))))

  #_(start2)

  (defn stop2 []
    (when (:close @server2)
      (send server2
            (do
              (println "Closing 2...")
              ((:close @server2)) {}))))
  #_(stop2)

  (defn reload2 []
    (do
      (stop2)
      (start2)))
  #_(reload2)

  #_(println (:close @server2))
  #_(agent-error server2)
  #_(restart-agent server2 @server2)
  #_(println @server2))

(defn -main []
  (start!))

#_(start!)
#_(stop!)
#_(reload!)
#_(println @server)




;https://www.ygohub.com/api/all_cards
;https://www.ygohub.com/api/card_info?name=
(comment
  (def cards-list (promise))

  (deliver
    cards-list
    (:cards
      (json/read-str
        (:body
          (client/get "https://www.ygohub.com/api/all_cards"))
        :key-fn keyword)))

  (count @cards-list)

  (def card-effects (promise))

  ;;FIXME WORKS but 8000 requests is to much to handle
  (def get-effects
    ;(take 5)
    (doall
      (pmap
        (fn [name]
          (json/read-str
            (:body
              (client/get
                (str "https://www.ygohub.com/api/card_info?name=" name)))
            ;{:async? true}
            ;(fn [response] response)
            ;(fn [exception] (.getMessage exception))))
            :key-fn keyword))
        @cards-list)))

  (deliver
    card-effects
    get-effects)

  (count @card-effects)

  (json/read-str
    (:body (client/get (str "https://www.ygohub.com/api/card_info?name=" (first @cards-list))))
    ;{:async? true}
    ;(fn [response] (:body response))
    ;(fn [exception] (.getMessage exception))))
    :key-fn keyword)



  ;;updated version with help from community
  ;;HINT oh yeah this will always fetch, doesn't save
  (defn get-card-list!
    []
    (-> "http://www.ygohub.com/api/all_cards"
        (client/get {:as        :json
                     :insecure? true})
        :body
        (get :cards)))

  (def card-list (get-card-list!))

  (def card-effects (atom ()))

  (def errors (atom ()))
  (add-watch errors :error-alert (fn [& error] (println "Error: " error)))

  (defn get-card-effects-async
    [name]
    (client/get (str "https://www.ygohub.com/api/card_info")
                {:async? true
                 :as     :json
                 :query-params {:name name}}
                (fn [response] (swap! card-effects conj (:body response)))
                (fn [exception] (swap! errors conj [name (.getMessage exception)]))))

  (def req-count (atom 0))

  ;;FIXME at 7393 it runs out of memory at 750MB
  (def cards-request
    ;; Put it in a future so we can check the status from the repl
    (future
      (client/with-async-connection-pool
        {:timeout 5 :threads 20 :insecure? true :default-per-route 20}
        (doseq [card card-list]
          (get-card-effects-async card)
          (swap! req-count inc)
          (Thread/sleep 500)))
      (println "All Done!")))

  (println @req-count)

  (count @card-effects)
  (pprint @card-effects)
  (spit "card-effects.edn" (with-out-str (pprint @card-effects)))

  (pprint (slurp "yugioh-card-effects.edn"))

  (with-open [writer (writer "yugioh-card-effects.edn" :append true)]
    (binding [*out* writer]
      (doseq [card @card-effects]
        (pr writer card))))

  (def temp [])
  (with-open [reader (reader "yugioh-card-effects.edn")]
    (into temp (map edn/read (lazy-seq reader))))

  (when (realized? cards-request)
    (deref cards-request)))
