(ns yugiohcardeffect.cljs.subscriptions
  (:require [re-frame.core :as rf]))


;;TODO update to namespace'd keys
(rf/reg-sub
  :card-name
  (fn [state _]
    (:card-name state)))

;;; Tiggers ;;;;
(rf/reg-sub
  :trigger-state
  (fn [state [_]]
    (:state (:trigger state))))

(rf/reg-sub
  :trigger/quick-effect
  (fn [state [_]]
    (:trigger/quick-effect state)))

(rf/reg-sub
  :activation-limit/type
  (fn [state [_]]
    (:activation-limit/type state)))

#_(rf/reg-sub
    :activation-limit-type
    (fn [state [_]]
      (:type (:activation-limit state))))

(rf/reg-sub
  :activation-limit/state
  (fn [state [_]]
    (:activation-limit/state state)))

(rf/reg-sub
  :activation-limit/count
  (fn [state [_]]
    (:activation-limit/count state)))

#_(rf/reg-sub
    :activation-limit-count
    (fn [state [_]]
      (:count (:activation-limit state))))

(rf/reg-sub
  :timing/state
  (fn [state [_]]
    (:timing/state state)))

(rf/reg-sub
  :timing-relativity
  (fn [state [_]]
    (:relativity (:timing state))))

(rf/reg-sub
  :timing-target-indicator
  (fn [state [_]]
    (:target-indicator (:timing state))))

(rf/reg-sub
  :timing/type
  (fn [state [_]]
    (:timing/type state)))







;;; restrictions ;;;;
(rf/reg-sub
  :activation-restriction-state
  (fn [state [_]]
    (:state (:activation-restriction state))))

(rf/reg-sub
  :activation-restriction-only
  (fn [state [_]]
    (:only (:activation-restriction state))))

(rf/reg-sub
  :activation-restriction-count
  (fn [state _]
    (:count (:activation-restriction state))))

(rf/reg-sub
  :activation-restriction-type
  (fn [state _]
    (:type (:activation-restriction state))))

(rf/reg-sub
  :activation-restriction-activation
  (fn [state _]
    (:activation (:activation-restriction state))))

(rf/reg-sub
  :activation-restriction-effect-reference
  (fn [state _]
    (:effect-reference (:activation-restriction state))))

(rf/reg-sub
  :activation-restriction-restriction-level
  (fn [state _]
    (:restriction-level (:activation-restriction state))))

;;; once per ;;;;
(rf/reg-sub
  :once-per-state
  (fn [state _]
    (:state (:once-per state))))

(rf/reg-sub
  :once-per-time
  (fn [state _]
    (:time (:once-per state))))

(rf/reg-sub
  :once-per-player
  (fn [state _]
    (:player (:once-per state))))

(rf/reg-sub
  :once-per-phase
  (fn [state _]
    (:phase (:once-per state))))

(rf/reg-sub
  :once-per-include-player
  (fn [state _]
    (:include-player (:once-per state))))

