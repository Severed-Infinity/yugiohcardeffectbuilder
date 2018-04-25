(defproject yugiohcardeffectbuilder "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [org.clojure/math.combinatorics "0.1.4"]

                 [hiccup "1.0.5"]
                 [aleph "0.4.4"]
                 [bidi "2.1.3"]
                 [yada "1.2.11"]
                 [aero "1.1.3"]

                 [reagent "0.8.0-alpha2"]
                 [re-frame "0.10.5"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.15"]]
  :min-lein-version "2.8.1"
  :main yugiohcardeffect.clj.core
  :target-path "target/%s"
  :resource-paths ["resources"]
  :cljsbuild {:builds [{; The path to the top-level ClojureScript source directory:
                        :source-paths ["src/"]
                        :id "main"
                        :figwheel true
                        ; The standard ClojureScript compiler options:
                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {:main yugiohcardeffect.cljs.builder
                                   :output-to "resources/public/js/main.js"  ; default: target/cljsbuild-main.js
                                   :optimizations :none
                                   :pretty-print true}}]}
  :figwheel {:ring-handler yugiohcardeffect.clj.core/main}
  :profiles {:uberjar {:aot :all}})
