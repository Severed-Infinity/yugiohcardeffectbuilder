(ns ^:figwheel-always yugiohcardeffect.cljs.builder
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [cljs.pprint :refer [pprint]]
            [yugiohcardeffect.cljs.events]
            [yugiohcardeffect.cljs.subscriptions]
            [clojure.math.combinatorics :as combo]
            [clojure.string :refer [join]]))

(enable-console-print!)

;;;;;;;;;;;;; VIEWS ;;;;;;;;;;;;

(defn event [e dispatch]
  (.preventDefault e)
  dispatch)

(defn activation-limits
  "builder for the once per… portion of the view"
  []
  [:fieldset
   ;;TODO offer to turn on and off as an option
   [:legend "Activation limiters - Once per… trigger portion, also known as how often."]
   [:p "The activation limiter options get more specific as you go down the list."]
   [:select {:name      "activation-limit-count"
             :on-change #(event % (rf/dispatch [:activation-limit-count-update (keyword (.. % -target -value))]))}
    [:option {:name  "once"
              :value :once}
     "Once"]
    [:option {:name  "twice"
              :value :twice}
     "Twice"]
    [:option {:name  "thrice"
              :value :thrice}
     "Thrice"]
    [:option {:name  "four"
              :value :four-times}
     "Four Times"]
    [:option {:name  "five"
              :value :five-times}
     "Five Times"]
    [:option {:name  "six"
              :value :six-times}
     "Six Times"]
    [:option {:name  "seven"
              :value :seven-times}
     "Seven Times"]
    [:option {:name  "eight"
              :value :eight-times}
     "Eight Times"]
    [:option {:name  "nine"
              :value :nine-times}
     "Nine Times"]
    [:option {:name  "ten"
              :value :ten-times}
     "Ten Times"]]
   [:span " per "]
   [:select {:name         "activation-limit-options"
             :defaultValue :turn
             :on-change    #(event % @(rf/dispatch [:activation-limit-type-update (keyword (.. % -target -value))]))}
    ;;FIXME make sure I've all actions, phase, and steps covered. turn, phase, step, action(summons?) in that order
    [:option {:name  "once-per-duel"
              :value :duel}
     "duel"]
    [:option {:name  "once-per-turn"
              :value :turn}
     "turn"]
    [:option {:name  "once-per-opponents-turn"
              :value :opponents-turn}
     "opponent's turn"]
    ;;Not used on existing cards but here for consistency sake.
    [:option {:name  "once-per-draw-phase"
              :value :draw-phase}
     "Draw Phase"]
    [:option {:name  "once-per-standby-phase"
              :value :standby-phase}
     "Standby Phase"]
    [:option {:name  "once-per-main-phase"
              :value :main-phase}
     "Main Phase"]
    [:option {:name  "once-per-main-phase-1"
              :value :main-phase-1}
     "Main Phase 1"]
    [:option {:name  "once-per-main-phase-2"
              :value :main-phase-2}
     "Main Phase 2"]
    [:option {:name  "once-per-end-phase"
              :value :end-phase}
     "End Phase"]
    [:option {:name  "once-per-battle-phase"
              :value :battle-phase}
     "Battle Phase"]
    [:option {:name  "once-per-damage-step"
              :value :damage-step}
     "Damage Step"]
    [:option {:name  "once-per-battle"
              :value :battle}
     "battle"]
    [:option {:name  "once-per-chain"
              :value :chain}
     "chain"]
    [:option {:name  "once-per-damage-calculation"
              :value :damage-calculation}
     "damage calculations"]]
   [:p "needs to be updated dynamically, with tips?"]])

(defn timing-limits
  "builder for the timing (e.g. during the…) portion of the view"
  []
  [:fieldset
   [:legend "Timing limiters - During… trigger portion, also known as when"]
   [:select {:name "timing-relativity-options"
             :on-change #(event % @(rf/dispatch [:timing-relativity-update (keyword (.. % -target -value))]))}
    [:option {:name "during"
              :value :during}
     "During"]
    [:option {:name "before"
              :value :before}
     "Before"]
    [:option {:name "after"
              :value :after}
     "After"]
    [:option {:name "at-the-start-of"
              :value :at-the-start-of}
     "At the start of"]
    [:option {:name "at-the-end-of"
              :value :at-the-end-of}
     "At the end of"]]])

(defn trigger
  "View for all trigger components"
  []
  [:fieldset
   [:legend "Effect triggers - enable? "
    [:input {:type      "checkbox"
             :name      "enable-trigger"
             :checked   @(rf/subscribe [:trigger-state])
             :on-change #(event % (rf/dispatch [:trigger-state-update (.. % -target -checked)]))}]]
   (when (true? @(rf/subscribe [:trigger-state]))
     [:div
      (activation-limits)
      (timing-limits)])])

;;TODO change name when done
;;TODO help descriptions of what each options do as a text box beside them
(defn activation-conditions
  "Provides the options available for creating a once per 'something' effect"
  []
  [:fieldset
   [:legend "Activation Condition "]
   [:select {:name      "once-per-option"
             :on-change #(event % (rf/dispatch [:once-per-state-update (keyword (.. % -target -value))]))}
    [:option {:name  "none"
              :value :none}
     "None"]
    [:option {:name  "once-per"
              :value :once-per}
     "Once per "]]
   ;[:button {:on-click #(event % (rf/dispatch [:once-per-state-update :once-per]))}
   ;   "change"]]

   (when (or
           (= @(rf/subscribe [:once-per-time]) :turn)
           (= @(rf/subscribe [:once-per-include-player]) true))
     [:span " Player: "
      [:select {:name      "who"
                :on-change #(event % (rf/dispatch [:once-per-player-update (keyword (.. % -target -value))]))}
       [:option {:name  "any"
                 :value :any}
        "any"]
       [:option {:name  "turn"
                 :value :your}
        "your"]
       [:option {:name  "phase"
                 :value :opponents}
        "opponent's"]]])

   (when (= @(rf/subscribe [:once-per-time]) :phase)
     [:span " Phase: "
      [:select {:name      "phase"
                :on-change #(event % (rf/dispatch [:once-per-phase-update (keyword (.. % -target -value))]))}
       [:option {:name  "any"
                 :value :any}
        "any"]
       [:option {:name  "draw"
                 :value :draw}
        "draw"]
       [:option {:name  "standby"
                 :value :standby}
        "standby"]
       [:option {:name  "main-phase"
                 :value :main-phase}
        "main phase"]
       [:option {:name  "main-phase-1"
                 :value :main-phase-1}
        "main phase 1"]
       [:option {:name  "main-phase-2"
                 :value :main-phase-2}
        "main phase 2"]
       [:option {:name  "battle-phase"
                 :value :battle-phase}
        "battle phase"]
       [:option {:name  "battle-phase"
                 :value :battle-phase}
        "battle phase"]
       [:option {:name  "end-phase"
                 :value :end-phase}
        "end phase"]]])

   (when (= @(rf/subscribe [:once-per-state]) :once-per)
     [:span " Time: "
      [:select {:name      "time"
                :on-change #(event % (rf/dispatch [:once-per-time-update (keyword (.. % -target -value))]))}
       [:option {:name  "turn"
                 :value :turn}
        "turn"]
       [:option {:name  "phase"
                 :value :phase}
        "phase"]]
      (when (= @(rf/subscribe [:once-per-time]) :phase)
        [:span " Include Player? "
         [:input {:type      "checkbox"
                  :name      "include-player"
                  :checked   @(rf/subscribe [:once-per-include-player])
                  :on-change #(event % (rf/dispatch [:once-per-include-player-update (.. % -target -checked)]))}]])])])

(defn view-activation-condition-effect
  "Returns the textual version of the effect as it is being built"
  []
  (when (= @(rf/subscribe [:once-per-state]) :once-per)
    [:p "Once"
     ;;FIXME are these triggers?
     (case @(rf/subscribe [:once-per-include-player])
       true (case @(rf/subscribe [:once-per-player])
              :any " per "
              :your " per turn, during your "
              :opponents " per turn, during your opponent's ")
       false " per ")
     (case @(rf/subscribe [:once-per-time])
       :turn "turn"
       :phase (str (name
                     (case @(rf/subscribe [:once-per-phase])
                       :any "phase"
                       :draw "draw phase"
                       :standby "standby phase"
                       :main-phase "main phase"
                       :main-phase-1 "main phase 1"
                       :main-phase-2 "main phase 2"
                       :battle-phase "battle phase"
                       :end-phase "end phase"))))
     ;;TODO triggers go here
     ": "
     ;;TODO ignitions go here
     "; "
     ;;TODO effect goes here
     ". "]))

(defn limit-activation
  "Provides the options available for creating a once per 'something' effect"
  []
  [:div
   [:span "Limit Activation? "
    [:input {:type      :checkbox
             :name      "activation-restriction"
             :checked   @(rf/subscribe [:activation-restriction-state])
             :on-change #(event % (rf/dispatch [:activation-restriction-state-update (.. % -target -checked)]))}]]
   (when (= @(rf/subscribe [:activation-restriction-state]) true)
     [:fieldset
      [:legend "Limit Activation"]
      ;[:span "Only "]
      ;[:input {:type      :checkbox
      ;         :name      "only"
      ;         :checked   @(rf/subscribe [:activation-restriction-only])
      ;         :on-change #(event % (rf/dispatch [:activation-restriction-only-update (.. % -target -checked)]))}]]


      [:select {:name      "activation-count"
                :on-change #(event % (rf/dispatch [:activation-restriction-count-update (keyword (.. % -target -value))]))}
       [:option {:name  "once"
                 :value :once}
        "Once"]
       [:option {:name  "twice"
                 :value :twice}
        "Twice"]
       [:option {:name  "thrice"
                 :value :thrice}
        "Thrice"]
       [:option {:name  "four"
                 :value :four-times}
        "Four Times"]
       [:option {:name  "five"
                 :value :five-times}
        "Five Times"]
       [:option {:name  "six"
                 :value :six-times}
        "Six Times"]
       [:option {:name  "seven"
                 :value :seven-times}
        "Seven Times"]
       [:option {:name  "eight"
                 :value :eight-times}
        "Eight Times"]
       [:option {:name  "nine"
                 :value :nine-times}
        "Nine Times"]
       [:option {:name  "ten"
                 :value :ten-times}
        "Ten Times"]]


      [:span " per "
       [:select {:name      "type"
                 :on-change #(event % (rf/dispatch [:activation-restriction-type-update (keyword (.. % -target -value))]))}
        [:option {:name  "turn"
                  :value :turn}
         "turn"]
        [:option {:name  "turn"
                  :value :duel}
         "duel"]]]


      (when (= @(rf/subscribe [:activation-restriction-only]) true))
      [:span " you can "
       [:select {:name      "activation"
                 :on-change #(event % (rf/dispatch [:activation-restriction-activation-update (keyword (.. % -target -value))]))}
        [:option {:name  "activate"
                  :value :activate}
         "activate"]
        [:option {:name  "use"
                  :value :use}
         "use"]]
       " "

       (when (not (= @(rf/subscribe [:activation-restriction-restriction-level]) :1-of-this-card))
         [:select {:name      "effect-reference"
                   :on-change #(event % (rf/dispatch [:activation-restriction-effect-reference-update (keyword (.. % -target -value))]))}
          [:option {:name  "this-effect"
                    :value :this-effect}
           "this effect"]
          [:option {:name  "the-effect"
                    :value :the-effect}
           "the effect"]
          ;;TODO this part is more complicated will most likely need multiple run overs
          [:option {:name  "one-of"
                    :value :1-of-these-effects}
           "1 of these effects"]])


       [:select {:name      "restriction-level"
                 :on-change #(event % (rf/dispatch [:activation-restriction-restriction-level-update (keyword (.. % -target -value))]))}
        [:option {:name  "this-card"
                  :value :this-card}
         "of \"" @(rf/subscribe [:card-name]) "\""]
        [:option {:name  "1-of-this-card"
                  :value :1-of-this-card}
         "1 \"" @(rf/subscribe [:card-name]) "\""]
        [:option {:name  "for-all-cards"
                  :value :for-all-cards}
         "for all cards"]]]])])

(defn view-effect
  "Returns the textual version of the effect as it is being built"
  []
  [:p
   (when (= @(rf/subscribe [:activation-restriction-state]) true)
     (let [card-name @(rf/subscribe [:card-name])
           count (name @(rf/subscribe [:activation-restriction-count]))
           only? @(rf/subscribe [:activation-restriction-only])
           activation (name @(rf/subscribe [:activation-restriction-activation]))
           effect-reference (name @(rf/subscribe [:activation-restriction-effect-reference]))
           restriction-level @(rf/subscribe [:activation-restriction-restriction-level])]
       (case @(rf/subscribe [:activation-restriction-type])
         :turn (str "You can only "
                    activation " "
                    (when (not (= restriction-level :1-of-this-card))
                      (str effect-reference " "))
                    (case restriction-level
                      :this-card (str "of \"" card-name "\"")
                      :1-of-this-card (str 1 " \"" card-name "\"")
                      :for-all-cards "")
                    " "
                    count " per turn.")
         ;(str (string/capitalize count) " per turn"))
         :duel (str "You can only " activation " " effect-reference " " restriction-level " " count " per duel."))))])

(defn app-view []
  [:h1 "YuGiOh Card Effect Builder"]
  [:form
   [:span "Card Name "]
   [:input {:type      "text"
            :name      "card-name"
            :value     @(rf/subscribe [:card-name])
            :on-change #(event % (rf/dispatch [:card-name-update (.. % -target -value)]))}]

   (trigger)
   #_(activation-conditions)
   #_(view-activation-condition-effect)
   #_(limit-activation)
   #_(view-effect)

   [:pre (with-out-str (pprint @re-frame.db/app-db))]

   [:h2 "Examples & Explanations"]
   [:section
    [:h3 "Activation Conditions"]
    [:h4 "When (a.k.a once per turn)"]
    [:p
     ;; TODO examples
     [:strong "Put examples here"]
     "this should automagically appear. it would seem safari doesn't work with figwheel"]

    [:h4 "Trigger(s)"]
    [:p
     ;; TODO examples
     [:strong "Put examples here"]]]

   [:section
    [:h3 "Limited Activation"]
    [:h4 "These are separate from the \"Once per turn/phase\" or \"during your phase\"."]
    [:p
     [:strong "You can only activate this effect of \"gell\" once per turn."]
     " - Means this specific effect of this specific \"gell\" card can only be activated (if it is negated, can't be activated again)."
     [:br] [:br]
     [:strong "You can only use 1 of these effects of \"gell\" once per turn."]
     " - Means you can only use (if negated, can be activated again) 1 effect from a list of effects of this specific \"gell\" card."
     [:br] [:br]
     [:strong "You can only use 1 \"gell\" twice per turn."]
     " - Means you can only use (play)(if negated, can be activated again) 1 copy of the gell card up to 2 time in one turn."
     [:br]
     "Would make more sense to say 2 once per turn rather than 1 twice per turn."
     [:br] [:br]
     [:strong "(You can only gain this effect once per turn.)"]
     " - Means you can only use this specific effect once per turn, regardless of how many cards have the effect."
     [:br]
     "Usually used in instances where you are trying to do some mechanic that is normally restricted to once per turn,
     such as an additional normal summon, pendulum summon, or battle phase, especially in instances where the effect lacks a cost.
      Normally wrapped in brackets () indicate its a condition and not an effect."
     [:br] [:br]
     [:strong "Each player can only activate the effect of \"gell\" once per duel."]
     " - Means each play can use the effect (\"the\" is used instances where only one effect exists on the card) of this specific \"gell\" card can only be activated (if it is negated, can't be activated again) once during an entire duel."
     [:br]
     "This type of effect is usually used in instances where you recover a card for nothing, say from the graveyard without paying a cost,
     or activating a really powerful effects, or cards, that could change the outcome of the duel in an instance."
     [:br]
     "You can replace an instance of \"once per turn\" with \"once per duel\" in these contexts."
     [:br]
     "\"Each player\" can replace \"You\" to imply you can both use the effect but the restriction is applied individually."]]])

(defn list-all [items]
  (transduce
    (comp (map combo/permutations)
          cat)
    conj
    []
    (rest (sort-by count (combo/subsets items)))))

(defn keywords-list
  [keywords]
  (transduce
    (comp
      (map (partial join ","))
      (map #(assoc {:name "keywords" :content ""} :content %))
      (map #(identity [:meta %])))
    conj
    (list-all keywords)))

(defn ^:export load []
  (do
    (rf/dispatch-sync [:initialize])
    (r/render-component [app-view] (.getElementById js/document "app"))
    (js/console.log "loaded")))

(defn ^:export gen-keywords
  []
  (do
    (map
      (.appendChild (.getElementsByTagName js/document "head"))
      (keywords-list ["YuGiOh" "custom"]))))
