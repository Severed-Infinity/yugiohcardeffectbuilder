(ns yugiohcardeffect.clj.core
  (:require [yada.yada :as yada]
            [yada.resources.classpath-resource :refer [new-classpath-resource]]
            [clojure.java.io :refer [file resource]]
            [aero.core :refer [read-config]]))

(def config (read-config "config.edn"))
config

;; doesn't hold any result, just produces one
(defn resource-routes []
  (yada/listener
    ["/"
     [["" (yada/handler (file "app.html"))]
      ["resources/public/" (assoc (new-classpath-resource "public") :id :yugioheffectbuilder.resources/static)]]]
    ;;TODO environmental inputs
    {:port (:port config)}))

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
#_(println @server2)

(defn -main []
  (start!))

#_(start!)
#_(stop!)
#_(reload!)
#_(println @server)



































;(def state
;  (atom {:once-per :no}))
;
;(def once-per
;  [:fieldset
;   [:legend "Once Per..."]
;   [:select {:name "once-per-option"}
;    [:option {:name "no" :value "no" :on-change (fn [_] (swap! @state assoc :once-per :no))} "no"]
;    [:option {:name "once-per" :value "once per" :on-change (fn [_] (swap! @state assoc :once-per :once-per))} "Once per "]]
;   (when (= :once-per (get-in @state [:once-per]))
;     [:span " Time "]
;     [:select {:name "time"}
;      [:option {:name "turn"} "turn"]
;      [:option {:name "phase"} "phase"]])
;
;   [:span " output "]
;   [:output {:name "output" :value "none"}]])

;(def triggers
;  [:fieldset
;   [:legend "Trigger(s)"]
;   [:span "Optional? "]
;   [:select {:name "optional"}
;    [:option {:value "no" :selected true} "no"]
;    [:option {:value "when"} "when"]
;    [:option {:value "if"} "if"]
;    [:option {:value "during"} "during"]]
;   [:input {:type "text" :name "trigger-text"}]
;   [:br]
;   [:span " Quick Effect? "]
;   [:input {:type "checkbox" :name "quick-effect"}]])
;
;(def ignitions
;  [:fieldset
;   [:legend "Ignition(s)"]
;   [:input {:type "text" :name "ignition-text"}]])
;
;(def effects
;  [:fieldset
;   [:legend "Effects(s)"]
;   [:span "Optional? "]
;   [:input {:type "checkbox" :name "optional"}]
;   [:span " Conditional? "]
;   [:input {:type "checkbox" :name "conditional"}]
;   [:input {:type "text" :name "effect-text"}]
;   [:span " Conditional Restriction? "]
;   [:input {:type "text" :name "conditional-restriction"}]
;
;   [:span " Limit use? "]
;   [:select {:name "only-once-per"}
;    [:option {:value "no"} "no"]
;    [:option {:value "activate"} "activate"]
;    [:option {:value "use"} "use"]]
;   [:span " Time "]
;   [:select {:name "time"}
;    [:option {:value "turn"} "turn"]
;    [:option {:value "phase"} "phase"]]
;
;   [:br]
;   [:span " Restrict to all? "]
;   [:select {:name "once-per"}
;    [:option {:value "no"} "no"]
;    [:option {:value "once-per"} "Once per "]
;    [:option {:value "only-once-per"} "Only once per "]]
;   [:span " Time "]
;   [:select {:name "time"}
;    [:option {:value "turn"} "turn"]
;    [:option {:value "phase"} "phase"]]])

