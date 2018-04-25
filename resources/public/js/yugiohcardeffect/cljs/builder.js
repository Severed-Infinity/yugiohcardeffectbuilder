// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('yugiohcardeffect.cljs.builder');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljs.pprint');
goog.require('yugiohcardeffect.cljs.events');
goog.require('yugiohcardeffect.cljs.subscriptions');
goog.require('clojure.math.combinatorics');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
yugiohcardeffect.cljs.builder.event = (function yugiohcardeffect$cljs$builder$event(e,dispatch){
e.preventDefault();

return dispatch;
});
/**
 * builder for the once per… portion of the view
 */
yugiohcardeffect.cljs.builder.activation_limits = (function yugiohcardeffect$cljs$builder$activation_limits(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,"Activation limiters - Once per\u2026 trigger portion, also known as how often."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The activation limiter options get more specific as you go down the list."], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"activation-limit-count",cljs.core.cst$kw$on_DASH_change,(function (p1__38317_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38317_SHARP_,(function (){var G__38319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_limit_DASH_count_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38317_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38319) : re_frame.core.dispatch.call(null,G__38319));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once",cljs.core.cst$kw$value,cljs.core.cst$kw$once], null),"Once"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"twice",cljs.core.cst$kw$value,cljs.core.cst$kw$twice], null),"Twice"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"thrice",cljs.core.cst$kw$value,cljs.core.cst$kw$thrice], null),"Thrice"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"four",cljs.core.cst$kw$value,cljs.core.cst$kw$four_DASH_times], null),"Four Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"five",cljs.core.cst$kw$value,cljs.core.cst$kw$five_DASH_times], null),"Five Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"six",cljs.core.cst$kw$value,cljs.core.cst$kw$six_DASH_times], null),"Six Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"seven",cljs.core.cst$kw$value,cljs.core.cst$kw$seven_DASH_times], null),"Seven Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"eight",cljs.core.cst$kw$value,cljs.core.cst$kw$eight_DASH_times], null),"Eight Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"nine",cljs.core.cst$kw$value,cljs.core.cst$kw$nine_DASH_times], null),"Nine Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"ten",cljs.core.cst$kw$value,cljs.core.cst$kw$ten_DASH_times], null),"Ten Times"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," per "], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"activation-limit-options",cljs.core.cst$kw$defaultValue,cljs.core.cst$kw$turn,cljs.core.cst$kw$on_DASH_change,(function (p1__38318_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38318_SHARP_,cljs.core.deref((function (){var G__38320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_limit_DASH_type_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38318_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38320) : re_frame.core.dispatch.call(null,G__38320));
})()));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-duel",cljs.core.cst$kw$value,cljs.core.cst$kw$duel], null),"duel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-turn",cljs.core.cst$kw$value,cljs.core.cst$kw$turn], null),"turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-opponents-turn",cljs.core.cst$kw$value,cljs.core.cst$kw$opponents_DASH_turn], null),"opponent's turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-draw-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$draw_DASH_phase], null),"Draw Phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-standby-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$standby_DASH_phase], null),"Standby Phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-main-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$main_DASH_phase], null),"Main Phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-main-phase-1",cljs.core.cst$kw$value,cljs.core.cst$kw$main_DASH_phase_DASH_1], null),"Main Phase 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-main-phase-2",cljs.core.cst$kw$value,cljs.core.cst$kw$main_DASH_phase_DASH_2], null),"Main Phase 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-end-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$end_DASH_phase], null),"End Phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-battle-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$battle_DASH_phase], null),"Battle Phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-damage-step",cljs.core.cst$kw$value,cljs.core.cst$kw$damage_DASH_step], null),"Damage Step"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-battle",cljs.core.cst$kw$value,cljs.core.cst$kw$battle], null),"battle"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-chain",cljs.core.cst$kw$value,cljs.core.cst$kw$chain], null),"chain"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-damage-calculation",cljs.core.cst$kw$value,cljs.core.cst$kw$damage_DASH_calculation], null),"damage calculations"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"needs to be updated dynamically, with tips?"], null)], null);
});
/**
 * builder for the timing (e.g. during the…) portion of the view
 */
yugiohcardeffect.cljs.builder.timing_limits = (function yugiohcardeffect$cljs$builder$timing_limits(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,"Timing limiters - During\u2026 trigger portion, also known as when"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"timing-relativity-options",cljs.core.cst$kw$on_DASH_change,(function (p1__38321_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38321_SHARP_,cljs.core.deref((function (){var G__38322 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timing_DASH_relativity_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38321_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38322) : re_frame.core.dispatch.call(null,G__38322));
})()));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"during",cljs.core.cst$kw$value,cljs.core.cst$kw$during], null),"During"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"before",cljs.core.cst$kw$value,cljs.core.cst$kw$before], null),"Before"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"after",cljs.core.cst$kw$value,cljs.core.cst$kw$after], null),"After"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"at-the-start-of",cljs.core.cst$kw$value,cljs.core.cst$kw$at_DASH_the_DASH_start_DASH_of], null),"At the start of"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"at-the-end-of",cljs.core.cst$kw$value,cljs.core.cst$kw$at_DASH_the_DASH_end_DASH_of], null),"At the end of"], null)], null)], null);
});
/**
 * View for all trigger components
 */
yugiohcardeffect.cljs.builder.trigger = (function yugiohcardeffect$cljs$builder$trigger(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,"Effect triggers - enable? ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,"enable-trigger",cljs.core.cst$kw$checked,cljs.core.deref((function (){var G__38324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trigger_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38324) : re_frame.core.subscribe.call(null,G__38324));
})()),cljs.core.cst$kw$on_DASH_change,(function (p1__38323_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38323_SHARP_,(function (){var G__38325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trigger_DASH_state_DASH_update,p1__38323_SHARP_.target.checked], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38325) : re_frame.core.dispatch.call(null,G__38325));
})());
})], null)], null)], null),((cljs.core.deref((function (){var G__38326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trigger_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38326) : re_frame.core.subscribe.call(null,G__38326));
})()) === true)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,yugiohcardeffect.cljs.builder.activation_limits(),yugiohcardeffect.cljs.builder.timing_limits()], null):null)], null);
});
/**
 * Provides the options available for creating a once per 'something' effect
 */
yugiohcardeffect.cljs.builder.activation_conditions = (function yugiohcardeffect$cljs$builder$activation_conditions(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,"Activation Condition "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per-option",cljs.core.cst$kw$on_DASH_change,(function (p1__38327_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38327_SHARP_,(function (){var G__38332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_state_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38327_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38332) : re_frame.core.dispatch.call(null,G__38332));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"none",cljs.core.cst$kw$value,cljs.core.cst$kw$none], null),"None"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once-per",cljs.core.cst$kw$value,cljs.core.cst$kw$once_DASH_per], null),"Once per "], null)], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38335 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38335) : re_frame.core.subscribe.call(null,G__38335));
})()),cljs.core.cst$kw$turn)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38336 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38336) : re_frame.core.subscribe.call(null,G__38336));
})()),true))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Player: ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"who",cljs.core.cst$kw$on_DASH_change,(function (p1__38328_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38328_SHARP_,(function (){var G__38337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_player_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38328_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38337) : re_frame.core.dispatch.call(null,G__38337));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"any",cljs.core.cst$kw$value,cljs.core.cst$kw$any], null),"any"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"turn",cljs.core.cst$kw$value,cljs.core.cst$kw$your], null),"your"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"phase",cljs.core.cst$kw$value,cljs.core.cst$kw$opponents], null),"opponent's"], null)], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38338 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38338) : re_frame.core.subscribe.call(null,G__38338));
})()),cljs.core.cst$kw$phase))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Phase: ",new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"phase",cljs.core.cst$kw$on_DASH_change,(function (p1__38329_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38329_SHARP_,(function (){var G__38339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_phase_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38329_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38339) : re_frame.core.dispatch.call(null,G__38339));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"any",cljs.core.cst$kw$value,cljs.core.cst$kw$any], null),"any"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"draw",cljs.core.cst$kw$value,cljs.core.cst$kw$draw], null),"draw"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"standby",cljs.core.cst$kw$value,cljs.core.cst$kw$standby], null),"standby"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"main-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$main_DASH_phase], null),"main phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"main-phase-1",cljs.core.cst$kw$value,cljs.core.cst$kw$main_DASH_phase_DASH_1], null),"main phase 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"main-phase-2",cljs.core.cst$kw$value,cljs.core.cst$kw$main_DASH_phase_DASH_2], null),"main phase 2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"battle-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$battle_DASH_phase], null),"battle phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"battle-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$battle_DASH_phase], null),"battle phase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"end-phase",cljs.core.cst$kw$value,cljs.core.cst$kw$end_DASH_phase], null),"end phase"], null)], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38340) : re_frame.core.subscribe.call(null,G__38340));
})()),cljs.core.cst$kw$once_DASH_per))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Time: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"time",cljs.core.cst$kw$on_DASH_change,(function (p1__38330_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38330_SHARP_,(function (){var G__38341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38330_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38341) : re_frame.core.dispatch.call(null,G__38341));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"turn",cljs.core.cst$kw$value,cljs.core.cst$kw$turn], null),"turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"phase",cljs.core.cst$kw$value,cljs.core.cst$kw$phase], null),"phase"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38342) : re_frame.core.subscribe.call(null,G__38342));
})()),cljs.core.cst$kw$phase))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Include Player? ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,"include-player",cljs.core.cst$kw$checked,cljs.core.deref((function (){var G__38343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38343) : re_frame.core.subscribe.call(null,G__38343));
})()),cljs.core.cst$kw$on_DASH_change,(function (p1__38331_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38331_SHARP_,(function (){var G__38344 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player_DASH_update,p1__38331_SHARP_.target.checked], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38344) : re_frame.core.dispatch.call(null,G__38344));
})());
})], null)], null)], null):null)], null):null)], null);
});
/**
 * Returns the textual version of the effect as it is being built
 */
yugiohcardeffect.cljs.builder.view_activation_condition_effect = (function yugiohcardeffect$cljs$builder$view_activation_condition_effect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38345 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38345) : re_frame.core.subscribe.call(null,G__38345));
})()),cljs.core.cst$kw$once_DASH_per)){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Once",(function (){var G__38346 = cljs.core.deref((function (){var G__38347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38347) : re_frame.core.subscribe.call(null,G__38347));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__38346)){
var G__38348 = cljs.core.deref((function (){var G__38349 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_player], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38349) : re_frame.core.subscribe.call(null,G__38349));
})());
var G__38348__$1 = (((G__38348 instanceof cljs.core.Keyword))?G__38348.fqn:null);
switch (G__38348__$1) {
case "any":
return " per ";

break;
case "your":
return " per turn, during your ";

break;
case "opponents":
return " per turn, during your opponent's ";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38348__$1)].join('')));

}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__38346)){
return " per ";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38346)].join('')));

}
}
})(),(function (){var G__38350 = cljs.core.deref((function (){var G__38351 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38351) : re_frame.core.subscribe.call(null,G__38351));
})());
var G__38350__$1 = (((G__38350 instanceof cljs.core.Keyword))?G__38350.fqn:null);
switch (G__38350__$1) {
case "turn":
return "turn";

break;
case "phase":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name((function (){var G__38352 = cljs.core.deref((function (){var G__38353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_phase], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38353) : re_frame.core.subscribe.call(null,G__38353));
})());
var G__38352__$1 = (((G__38352 instanceof cljs.core.Keyword))?G__38352.fqn:null);
switch (G__38352__$1) {
case "any":
return "phase";

break;
case "draw":
return "draw phase";

break;
case "standby":
return "standby phase";

break;
case "main-phase":
return "main phase";

break;
case "main-phase-1":
return "main phase 1";

break;
case "main-phase-2":
return "main phase 2";

break;
case "battle-phase":
return "battle phase";

break;
case "end-phase":
return "end phase";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38352__$1)].join('')));

}
})()))].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38350__$1)].join('')));

}
})(),": ","; ",". "], null);
} else {
return null;
}
});
/**
 * Provides the options available for creating a once per 'something' effect
 */
yugiohcardeffect.cljs.builder.limit_activation = (function yugiohcardeffect$cljs$builder$limit_activation(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Limit Activation? ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$name,"activation-restriction",cljs.core.cst$kw$checked,cljs.core.deref((function (){var G__38363 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38363) : re_frame.core.subscribe.call(null,G__38363));
})()),cljs.core.cst$kw$on_DASH_change,(function (p1__38357_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38357_SHARP_,(function (){var G__38364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_state_DASH_update,p1__38357_SHARP_.target.checked], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38364) : re_frame.core.dispatch.call(null,G__38364));
})());
})], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38365) : re_frame.core.subscribe.call(null,G__38365));
})()),true))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$legend,"Limit Activation"], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"activation-count",cljs.core.cst$kw$on_DASH_change,(function (p1__38358_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38358_SHARP_,(function (){var G__38366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_count_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38358_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38366) : re_frame.core.dispatch.call(null,G__38366));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"once",cljs.core.cst$kw$value,cljs.core.cst$kw$once], null),"Once"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"twice",cljs.core.cst$kw$value,cljs.core.cst$kw$twice], null),"Twice"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"thrice",cljs.core.cst$kw$value,cljs.core.cst$kw$thrice], null),"Thrice"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"four",cljs.core.cst$kw$value,cljs.core.cst$kw$four_DASH_times], null),"Four Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"five",cljs.core.cst$kw$value,cljs.core.cst$kw$five_DASH_times], null),"Five Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"six",cljs.core.cst$kw$value,cljs.core.cst$kw$six_DASH_times], null),"Six Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"seven",cljs.core.cst$kw$value,cljs.core.cst$kw$seven_DASH_times], null),"Seven Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"eight",cljs.core.cst$kw$value,cljs.core.cst$kw$eight_DASH_times], null),"Eight Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"nine",cljs.core.cst$kw$value,cljs.core.cst$kw$nine_DASH_times], null),"Nine Times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"ten",cljs.core.cst$kw$value,cljs.core.cst$kw$ten_DASH_times], null),"Ten Times"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," per ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"type",cljs.core.cst$kw$on_DASH_change,(function (p1__38359_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38359_SHARP_,(function (){var G__38367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_type_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38359_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38367) : re_frame.core.dispatch.call(null,G__38367));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"turn",cljs.core.cst$kw$value,cljs.core.cst$kw$turn], null),"turn"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"turn",cljs.core.cst$kw$value,cljs.core.cst$kw$duel], null),"duel"], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38368 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_only], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38368) : re_frame.core.subscribe.call(null,G__38368));
})()),true))?null:null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," you can ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"activation",cljs.core.cst$kw$on_DASH_change,(function (p1__38360_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38360_SHARP_,(function (){var G__38369 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_activation_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38360_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38369) : re_frame.core.dispatch.call(null,G__38369));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"activate",cljs.core.cst$kw$value,cljs.core.cst$kw$activate], null),"activate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"use",cljs.core.cst$kw$value,cljs.core.cst$kw$use], null),"use"], null)], null)," ",((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_restriction_DASH_level], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38370) : re_frame.core.subscribe.call(null,G__38370));
})()),cljs.core.cst$kw$1_DASH_of_DASH_this_DASH_card)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"effect-reference",cljs.core.cst$kw$on_DASH_change,(function (p1__38361_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38361_SHARP_,(function (){var G__38371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_effect_DASH_reference_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38361_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38371) : re_frame.core.dispatch.call(null,G__38371));
})());
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"this-effect",cljs.core.cst$kw$value,cljs.core.cst$kw$this_DASH_effect], null),"this effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"the-effect",cljs.core.cst$kw$value,cljs.core.cst$kw$the_DASH_effect], null),"the effect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"one-of",cljs.core.cst$kw$value,cljs.core.cst$kw$1_DASH_of_DASH_these_DASH_effects], null),"1 of these effects"], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"restriction-level",cljs.core.cst$kw$on_DASH_change,(function (p1__38362_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38362_SHARP_,(function (){var G__38372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_restriction_DASH_level_DASH_update,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__38362_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38372) : re_frame.core.dispatch.call(null,G__38372));
})());
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"this-card",cljs.core.cst$kw$value,cljs.core.cst$kw$this_DASH_card], null),"of \"",cljs.core.deref((function (){var G__38373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38373) : re_frame.core.subscribe.call(null,G__38373));
})()),"\""], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"1-of-this-card",cljs.core.cst$kw$value,cljs.core.cst$kw$1_DASH_of_DASH_this_DASH_card], null),"1 \"",cljs.core.deref((function (){var G__38374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38374) : re_frame.core.subscribe.call(null,G__38374));
})()),"\""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"for-all-cards",cljs.core.cst$kw$value,cljs.core.cst$kw$for_DASH_all_DASH_cards], null),"for all cards"], null)], null)], null)], null):null)], null);
});
/**
 * Returns the textual version of the effect as it is being built
 */
yugiohcardeffect.cljs.builder.view_effect = (function yugiohcardeffect$cljs$builder$view_effect(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__38375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38375) : re_frame.core.subscribe.call(null,G__38375));
})()),true))?(function (){var card_name = cljs.core.deref((function (){var G__38376 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38376) : re_frame.core.subscribe.call(null,G__38376));
})());
var count = cljs.core.name(cljs.core.deref((function (){var G__38377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_count], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38377) : re_frame.core.subscribe.call(null,G__38377));
})()));
var only_QMARK_ = cljs.core.deref((function (){var G__38378 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_only], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38378) : re_frame.core.subscribe.call(null,G__38378));
})());
var activation = cljs.core.name(cljs.core.deref((function (){var G__38379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_activation], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38379) : re_frame.core.subscribe.call(null,G__38379));
})()));
var effect_reference = cljs.core.name(cljs.core.deref((function (){var G__38380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_effect_DASH_reference], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38380) : re_frame.core.subscribe.call(null,G__38380));
})()));
var restriction_level = cljs.core.deref((function (){var G__38381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_restriction_DASH_level], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38381) : re_frame.core.subscribe.call(null,G__38381));
})());
var G__38382 = cljs.core.deref((function (){var G__38383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_type], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38383) : re_frame.core.subscribe.call(null,G__38383));
})());
var G__38382__$1 = (((G__38382 instanceof cljs.core.Keyword))?G__38382.fqn:null);
switch (G__38382__$1) {
case "turn":
return ["You can only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(activation)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(restriction_level,cljs.core.cst$kw$1_DASH_of_DASH_this_DASH_card)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(effect_reference)," "].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38384 = restriction_level;
var G__38384__$1 = (((G__38384 instanceof cljs.core.Keyword))?G__38384.fqn:null);
switch (G__38384__$1) {
case "this-card":
return ["of \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_name),"\""].join('');

break;
case "1-of-this-card":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((1))," \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_name),"\""].join('');

break;
case "for-all-cards":
return "";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38384__$1)].join('')));

}
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)," per turn."].join('');

break;
case "duel":
return ["You can only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(activation)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(effect_reference)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(restriction_level)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)," per duel."].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38382__$1)].join('')));

}
})():null)], null);
});
yugiohcardeffect.cljs.builder.app_view = (function yugiohcardeffect$cljs$builder$app_view(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"YuGiOh custom card effects - builder"], null);

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Card Name "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$name,"card-name",cljs.core.cst$kw$value,cljs.core.deref((function (){var G__38388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__38388) : re_frame.core.subscribe.call(null,G__38388));
})()),cljs.core.cst$kw$on_DASH_change,(function (p1__38387_SHARP_){
return yugiohcardeffect.cljs.builder.event(p1__38387_SHARP_,(function (){var G__38389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name_DASH_update,p1__38387_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38389) : re_frame.core.dispatch.call(null,G__38389));
})());
})], null)], null),yugiohcardeffect.cljs.builder.trigger(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,(function (){var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38390_38392 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38391_38393 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38390_38392,_STAR_print_fn_STAR_38391_38393,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_38390_38392,_STAR_print_fn_STAR_38391_38393,sb__4430__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.db.app_db));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38391_38393;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38390_38392;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Examples & Explanations"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Activation Conditions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"When (a.k.a once per turn)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Put examples here"], null),"this should automagically appear. it would seem safari doesn't work with figwheel"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"Trigger(s)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Put examples here"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Limited Activation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,"These are separate from the \"Once per turn/phase\" or \"during your phase\"."], null),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"You can only activate this effect of \"gell\" once per turn."], null)," - Means this specific effect of this specific \"gell\" card can only be activated (if it is negated, can't be activated again).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"You can only use 1 of these effects of \"gell\" once per turn."], null)," - Means you can only use (if negated, can be activated again) 1 effect from a list of effects of this specific \"gell\" card.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"You can only use 1 \"gell\" twice per turn."], null)," - Means you can only use (play)(if negated, can be activated again) 1 copy of the gell card up to 2 time in one turn.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Would make more sense to say 2 once per turn rather than 1 twice per turn.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"(You can only gain this effect once per turn.)"], null)," - Means you can only use this specific effect once per turn, regardless of how many cards have the effect.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"Usually used in instances where you are trying to do some mechanic that is normally restricted to once per turn,\n     such as an additional normal summon, pendulum summon, or battle phase, especially in instances where the effect lacks a cost.\n      Normally wrapped in brackets () indicate its a condition and not an effect.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"Each player can only activate the effect of \"gell\" once per duel."], null)," - Means each play can use the effect (\"the\" is used instances where only one effect exists on the card) of this specific \"gell\" card can only be activated (if it is negated, can't be activated again) once during an entire duel.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"This type of effect is usually used in instances where you recover a card for nothing, say from the graveyard without paying a cost,\n     or activating a really powerful effects, or cards, that could change the outcome of the duel in an instance.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"You can replace an instance of \"once per turn\" with \"once per duel\" in these contexts.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),"\"Each player\" can replace \"You\" to imply you can both use the effect but the restriction is applied individually."], null)], null)], null);
});
yugiohcardeffect.cljs.builder.list_all = (function yugiohcardeffect$cljs$builder$list_all(items){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.math.combinatorics.permutations),cljs.core.cat),cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.rest(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,clojure.math.combinatorics.subsets(items))));
});
yugiohcardeffect.cljs.builder.keywords_list = (function yugiohcardeffect$cljs$builder$keywords_list(keywords){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,",")),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38394_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"keywords",cljs.core.cst$kw$content,""], null),cljs.core.cst$kw$content,p1__38394_SHARP_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38395_SHARP_){
return cljs.core.identity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta,p1__38395_SHARP_], null));
}))),cljs.core.conj,yugiohcardeffect.cljs.builder.list_all(keywords));
});
yugiohcardeffect.cljs.builder.load = (function yugiohcardeffect$cljs$builder$load(){
var G__38396_38399 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__38396_38399) : re_frame.core.dispatch_sync.call(null,G__38396_38399));

var G__38397_38400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yugiohcardeffect.cljs.builder.app_view], null);
var G__38398_38401 = document.getElementById("app");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__38397_38400,G__38398_38401) : reagent.core.render_component.call(null,G__38397_38400,G__38398_38401));

return console.log("loaded");
});
goog.exportSymbol('yugiohcardeffect.cljs.builder.load', yugiohcardeffect.cljs.builder.load);
yugiohcardeffect.cljs.builder.gen_keywords = (function yugiohcardeffect$cljs$builder$gen_keywords(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(document.getElementsByTagName("head").appendChild(),yugiohcardeffect.cljs.builder.keywords_list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YuGiOh","custom"], null)));
});
goog.exportSymbol('yugiohcardeffect.cljs.builder.gen_keywords', yugiohcardeffect.cljs.builder.gen_keywords);
