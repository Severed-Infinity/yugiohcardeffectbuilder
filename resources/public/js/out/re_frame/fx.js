// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_50565 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__50566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__50567 = null;
var count__50568 = (0);
var i__50569 = (0);
while(true){
if((i__50569 < count__50568)){
var vec__50570 = cljs.core._nth.call(null,chunk__50567,i__50569);
var effect_key = cljs.core.nth.call(null,vec__50570,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50570,(1),null);
var temp__4655__auto___50586 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50586)){
var effect_fn_50587 = temp__4655__auto___50586;
effect_fn_50587.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50588 = seq__50566;
var G__50589 = chunk__50567;
var G__50590 = count__50568;
var G__50591 = (i__50569 + (1));
seq__50566 = G__50588;
chunk__50567 = G__50589;
count__50568 = G__50590;
i__50569 = G__50591;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50566);
if(temp__4657__auto__){
var seq__50566__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50566__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__50566__$1);
var G__50592 = cljs.core.chunk_rest.call(null,seq__50566__$1);
var G__50593 = c__48027__auto__;
var G__50594 = cljs.core.count.call(null,c__48027__auto__);
var G__50595 = (0);
seq__50566 = G__50592;
chunk__50567 = G__50593;
count__50568 = G__50594;
i__50569 = G__50595;
continue;
} else {
var vec__50573 = cljs.core.first.call(null,seq__50566__$1);
var effect_key = cljs.core.nth.call(null,vec__50573,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50573,(1),null);
var temp__4655__auto___50596 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50596)){
var effect_fn_50597 = temp__4655__auto___50596;
effect_fn_50597.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50598 = cljs.core.next.call(null,seq__50566__$1);
var G__50599 = null;
var G__50600 = (0);
var G__50601 = (0);
seq__50566 = G__50598;
chunk__50567 = G__50599;
count__50568 = G__50600;
i__50569 = G__50601;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__50405__auto___50602 = re_frame.interop.now.call(null);
var duration__50406__auto___50603 = (end__50405__auto___50602 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__50406__auto___50603,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__50405__auto___50602);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_50565;
}} else {
var seq__50576 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__50577 = null;
var count__50578 = (0);
var i__50579 = (0);
while(true){
if((i__50579 < count__50578)){
var vec__50580 = cljs.core._nth.call(null,chunk__50577,i__50579);
var effect_key = cljs.core.nth.call(null,vec__50580,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50580,(1),null);
var temp__4655__auto___50604 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50604)){
var effect_fn_50605 = temp__4655__auto___50604;
effect_fn_50605.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50606 = seq__50576;
var G__50607 = chunk__50577;
var G__50608 = count__50578;
var G__50609 = (i__50579 + (1));
seq__50576 = G__50606;
chunk__50577 = G__50607;
count__50578 = G__50608;
i__50579 = G__50609;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50576);
if(temp__4657__auto__){
var seq__50576__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50576__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__50576__$1);
var G__50610 = cljs.core.chunk_rest.call(null,seq__50576__$1);
var G__50611 = c__48027__auto__;
var G__50612 = cljs.core.count.call(null,c__48027__auto__);
var G__50613 = (0);
seq__50576 = G__50610;
chunk__50577 = G__50611;
count__50578 = G__50612;
i__50579 = G__50613;
continue;
} else {
var vec__50583 = cljs.core.first.call(null,seq__50576__$1);
var effect_key = cljs.core.nth.call(null,vec__50583,(0),null);
var effect_value = cljs.core.nth.call(null,vec__50583,(1),null);
var temp__4655__auto___50614 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___50614)){
var effect_fn_50615 = temp__4655__auto___50614;
effect_fn_50615.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__50616 = cljs.core.next.call(null,seq__50576__$1);
var G__50617 = null;
var G__50618 = (0);
var G__50619 = (0);
seq__50576 = G__50616;
chunk__50577 = G__50617;
count__50578 = G__50618;
i__50579 = G__50619;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__50620 = cljs.core.seq.call(null,value);
var chunk__50621 = null;
var count__50622 = (0);
var i__50623 = (0);
while(true){
if((i__50623 < count__50622)){
var map__50624 = cljs.core._nth.call(null,chunk__50621,i__50623);
var map__50624__$1 = ((((!((map__50624 == null)))?((((map__50624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50624):map__50624);
var effect = map__50624__$1;
var ms = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50624__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50620,chunk__50621,count__50622,i__50623,map__50624,map__50624__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50620,chunk__50621,count__50622,i__50623,map__50624,map__50624__$1,effect,ms,dispatch))
,ms);
}

var G__50628 = seq__50620;
var G__50629 = chunk__50621;
var G__50630 = count__50622;
var G__50631 = (i__50623 + (1));
seq__50620 = G__50628;
chunk__50621 = G__50629;
count__50622 = G__50630;
i__50623 = G__50631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50620);
if(temp__4657__auto__){
var seq__50620__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50620__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__50620__$1);
var G__50632 = cljs.core.chunk_rest.call(null,seq__50620__$1);
var G__50633 = c__48027__auto__;
var G__50634 = cljs.core.count.call(null,c__48027__auto__);
var G__50635 = (0);
seq__50620 = G__50632;
chunk__50621 = G__50633;
count__50622 = G__50634;
i__50623 = G__50635;
continue;
} else {
var map__50626 = cljs.core.first.call(null,seq__50620__$1);
var map__50626__$1 = ((((!((map__50626 == null)))?((((map__50626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50626):map__50626);
var effect = map__50626__$1;
var ms = cljs.core.get.call(null,map__50626__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__50626__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__50620,chunk__50621,count__50622,i__50623,map__50626,map__50626__$1,effect,ms,dispatch,seq__50620__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__50620,chunk__50621,count__50622,i__50623,map__50626,map__50626__$1,effect,ms,dispatch,seq__50620__$1,temp__4657__auto__))
,ms);
}

var G__50636 = cljs.core.next.call(null,seq__50620__$1);
var G__50637 = null;
var G__50638 = (0);
var G__50639 = (0);
seq__50620 = G__50636;
chunk__50621 = G__50637;
count__50622 = G__50638;
i__50623 = G__50639;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__50640 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__50641 = null;
var count__50642 = (0);
var i__50643 = (0);
while(true){
if((i__50643 < count__50642)){
var event = cljs.core._nth.call(null,chunk__50641,i__50643);
re_frame.router.dispatch.call(null,event);

var G__50644 = seq__50640;
var G__50645 = chunk__50641;
var G__50646 = count__50642;
var G__50647 = (i__50643 + (1));
seq__50640 = G__50644;
chunk__50641 = G__50645;
count__50642 = G__50646;
i__50643 = G__50647;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50640);
if(temp__4657__auto__){
var seq__50640__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50640__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__50640__$1);
var G__50648 = cljs.core.chunk_rest.call(null,seq__50640__$1);
var G__50649 = c__48027__auto__;
var G__50650 = cljs.core.count.call(null,c__48027__auto__);
var G__50651 = (0);
seq__50640 = G__50648;
chunk__50641 = G__50649;
count__50642 = G__50650;
i__50643 = G__50651;
continue;
} else {
var event = cljs.core.first.call(null,seq__50640__$1);
re_frame.router.dispatch.call(null,event);

var G__50652 = cljs.core.next.call(null,seq__50640__$1);
var G__50653 = null;
var G__50654 = (0);
var G__50655 = (0);
seq__50640 = G__50652;
chunk__50641 = G__50653;
count__50642 = G__50654;
i__50643 = G__50655;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__50656 = cljs.core.seq.call(null,value);
var chunk__50657 = null;
var count__50658 = (0);
var i__50659 = (0);
while(true){
if((i__50659 < count__50658)){
var event = cljs.core._nth.call(null,chunk__50657,i__50659);
clear_event.call(null,event);

var G__50660 = seq__50656;
var G__50661 = chunk__50657;
var G__50662 = count__50658;
var G__50663 = (i__50659 + (1));
seq__50656 = G__50660;
chunk__50657 = G__50661;
count__50658 = G__50662;
i__50659 = G__50663;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50656);
if(temp__4657__auto__){
var seq__50656__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50656__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__50656__$1);
var G__50664 = cljs.core.chunk_rest.call(null,seq__50656__$1);
var G__50665 = c__48027__auto__;
var G__50666 = cljs.core.count.call(null,c__48027__auto__);
var G__50667 = (0);
seq__50656 = G__50664;
chunk__50657 = G__50665;
count__50658 = G__50666;
i__50659 = G__50667;
continue;
} else {
var event = cljs.core.first.call(null,seq__50656__$1);
clear_event.call(null,event);

var G__50668 = cljs.core.next.call(null,seq__50656__$1);
var G__50669 = null;
var G__50670 = (0);
var G__50671 = (0);
seq__50656 = G__50668;
chunk__50657 = G__50669;
count__50658 = G__50670;
i__50659 = G__50671;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1521587776495
