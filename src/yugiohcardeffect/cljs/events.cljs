(ns yugiohcardeffect.cljs.events
  (:require [re-frame.core :as rf]))

;;TODO change to namespace'd values
(rf/reg-event-db
  :initialize
  (fn [state _]
    ;{:once-per :no}
    (-> state
        (assoc-in [:card-name] "")
        (assoc-in [:trigger :state] false)
        (assoc :trigger/quick-effect false)
        (assoc :activation-limit/state false)
        (assoc :activation-limit/type :turn)
        #_(assoc-in [:activation-limit :type] :turn)
        (assoc :activation-limit/count :none)
        #_(assoc-in [:activation-limit :count] :none)
        (assoc :timing/state false)
        (assoc-in [:timing :relativity] :none)
        (assoc-in [:timing :target-indicator] :the)
        (assoc :timing/type :main-phase)
        #_(assoc-in [:timing :type] :main-phase)


        #_((assoc-in [:activation-restriction :state] false
            (assoc-in [:activation-restriction :only] false)
            (assoc-in [:activation-restriction :count] :once)
            (assoc-in [:activation-restriction :type] :turn)
            (assoc-in [:activation-restriction :activation] :activate)
            (assoc-in [:activation-restriction :effect-reference] :this-effect)
            (assoc-in [:activation-restriction :restriction-level] :this-card)
            (assoc-in [:once-per :state] :none)
            (assoc-in [:once-per :count] :once)
            (assoc-in [:once-per :player] :any)
            (assoc-in [:once-per :phase] :any)
            (assoc-in [:once-per :include-player] false)
            (assoc-in [:once-per :time] :off))))))

(rf/reg-event-db
  :card-name-update
  (fn [state [_ name]]
    (assoc-in state [:card-name] name)))

;;; Triggers ;;;;

(rf/reg-event-db
  :trigger-state-update
  (fn [state [_ active]]
    (assoc-in state [:trigger :state] active)))

(rf/reg-event-db
  :trigger/quick-effect-update
  (fn [state [_ value]]
    (assoc state :trigger/quick-effect value)))

(rf/reg-event-db
  :activation-limit/state-update
  (fn [state [_ value]]
    (assoc state :activation-limit/state value)))

(rf/reg-event-db
  :activation-limit/type-update
  (fn [state [_ value]]
    (assoc state :activation-limit/type value)))

#_(rf/reg-event-db
    :activation-limit-type-update
    (fn [state [_ value]]
      (assoc-in state [:activation-limit :type] value)))

(rf/reg-event-db
  :activation-limit/count-update
  (fn [state [_ value]]
    (assoc state :activation-limit/count value)))

#_(rf/reg-event-db
    :activation-limit-count-update
    (fn [state [_ value]]
      (assoc-in state [:activation-limit :count] value)))

(rf/reg-event-db
  :timing/state-update
  (fn [state [_ value]]
    (assoc state :timing/state value)))

(rf/reg-event-db
  :timing-relativity-update
  (fn [state [_ value]]
    (assoc-in state [:timing :relativity] value)))

(rf/reg-event-db
  :timing-target-indicator-update
  (fn [state [_ value]]
    (assoc-in state [:timing :target-indicator] value)))

(rf/reg-event-db
  :timing/type-update
  (fn [state [_ value]]
    (assoc state :timing/type value)))

#_(rf/reg-event-db
    :timing-type-update
    (fn [state [_ value]]
      (assoc-in state [:timing :type] value)))





;;; activation restrictions ;;;
(rf/reg-event-db
  :activation-restriction-state-update
  (fn [state [_ active]]
    (assoc-in state [:activation-restriction :state] active)))

(rf/reg-event-db
  :activation-restriction-only-update
  (fn [state [_ active]]
    (assoc-in state [:activation-restriction :only] active)))

(rf/reg-event-db
  :activation-restriction-count-update
  (fn [state [_ count]]
    (assoc-in state [:activation-restriction :count] count)))

(rf/reg-event-db
  :activation-restriction-type-update
  (fn [state [_ type]]
    (when (= type :duel)
      (rf/dispatch [:activation-restriction-only-update true]))
    (assoc-in state [:activation-restriction :type] type)))

(rf/reg-event-db
  :activation-restriction-activation-update
  (fn [state [_ active]]
    (assoc-in state [:activation-restriction :activation] active)))

(rf/reg-event-db
  :activation-restriction-effect-reference-update
  (fn [state [_ reference]]
    (assoc-in state [:activation-restriction :effect-reference] reference)))

(rf/reg-event-db
  :activation-restriction-restriction-level-update
  (fn [state [_ level]]
    (assoc-in state [:activation-restriction :restriction-level] level)))

;;; once per ;;;
(rf/reg-event-db
  :once-per-state-update
  (fn [state [_ once-per-state]]
    (do
      (case once-per-state
        :none (rf/dispatch [:once-per-time-update :none])
        :once-per (rf/dispatch [:once-per-time-update :turn])))
    ;(rf/dispatch [:once-per-who-update :any])
    ;(rf/dispatch [:once-per-phase-update :any]))
    (assoc-in state [:once-per :state] once-per-state)))

(rf/reg-event-db
  :once-per-time-update
  (fn [state [_ time]]
    (do
      (case time
        :phase (rf/dispatch [:once-per-player-update :any])
        :turn (do (rf/dispatch [:once-per-phase-update :any])
                  (rf/dispatch [:once-per-include-player-update false]))
        :none (do (rf/dispatch [:once-per-player-update :any])
                  (rf/dispatch [:once-per-phase-update :any]))))
    (assoc-in state [:once-per :time] time)))

(rf/reg-event-db
  :once-per-player-update
  (fn [state [_ who]]
    (do
      (case who
        :any (rf/dispatch [:once-per-include-player-update false])
        :your (rf/dispatch [:once-per-include-player-update true])
        :opponents (rf/dispatch [:once-per-include-player-update true])))
    (assoc-in state [:once-per :player] who)))

(rf/reg-event-db
  :once-per-phase-update
  (fn [state [_ phase]]
    (assoc-in state [:once-per :phase] phase)))

(rf/reg-event-db
  :once-per-include-player-update
  (fn [state [_ include]]
    (assoc-in state [:once-per :include-player] include)))

