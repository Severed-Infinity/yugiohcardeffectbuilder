// Compiled by ClojureScript 1.10.238 {}
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
var _STAR_current_trace_STAR_43743 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__43744 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43745 = null;
var count__43746 = (0);
var i__43747 = (0);
while(true){
if((i__43747 < count__43746)){
var vec__43748 = cljs.core._nth.call(null,chunk__43745,i__43747);
var effect_key = cljs.core.nth.call(null,vec__43748,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43748,(1),null);
var temp__5455__auto___43764 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43764)){
var effect_fn_43765 = temp__5455__auto___43764;
effect_fn_43765.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43766 = seq__43744;
var G__43767 = chunk__43745;
var G__43768 = count__43746;
var G__43769 = (i__43747 + (1));
seq__43744 = G__43766;
chunk__43745 = G__43767;
count__43746 = G__43768;
i__43747 = G__43769;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43744);
if(temp__5457__auto__){
var seq__43744__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43744__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43744__$1);
var G__43770 = cljs.core.chunk_rest.call(null,seq__43744__$1);
var G__43771 = c__4319__auto__;
var G__43772 = cljs.core.count.call(null,c__4319__auto__);
var G__43773 = (0);
seq__43744 = G__43770;
chunk__43745 = G__43771;
count__43746 = G__43772;
i__43747 = G__43773;
continue;
} else {
var vec__43751 = cljs.core.first.call(null,seq__43744__$1);
var effect_key = cljs.core.nth.call(null,vec__43751,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43751,(1),null);
var temp__5455__auto___43774 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43774)){
var effect_fn_43775 = temp__5455__auto___43774;
effect_fn_43775.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43776 = cljs.core.next.call(null,seq__43744__$1);
var G__43777 = null;
var G__43778 = (0);
var G__43779 = (0);
seq__43744 = G__43776;
chunk__43745 = G__43777;
count__43746 = G__43778;
i__43747 = G__43779;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__43583__auto___43780 = re_frame.interop.now.call(null);
var duration__43584__auto___43781 = (end__43583__auto___43780 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43584__auto___43781,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__43583__auto___43780);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_43743;
}} else {
var seq__43754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43755 = null;
var count__43756 = (0);
var i__43757 = (0);
while(true){
if((i__43757 < count__43756)){
var vec__43758 = cljs.core._nth.call(null,chunk__43755,i__43757);
var effect_key = cljs.core.nth.call(null,vec__43758,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43758,(1),null);
var temp__5455__auto___43782 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43782)){
var effect_fn_43783 = temp__5455__auto___43782;
effect_fn_43783.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43784 = seq__43754;
var G__43785 = chunk__43755;
var G__43786 = count__43756;
var G__43787 = (i__43757 + (1));
seq__43754 = G__43784;
chunk__43755 = G__43785;
count__43756 = G__43786;
i__43757 = G__43787;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43754);
if(temp__5457__auto__){
var seq__43754__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43754__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43754__$1);
var G__43788 = cljs.core.chunk_rest.call(null,seq__43754__$1);
var G__43789 = c__4319__auto__;
var G__43790 = cljs.core.count.call(null,c__4319__auto__);
var G__43791 = (0);
seq__43754 = G__43788;
chunk__43755 = G__43789;
count__43756 = G__43790;
i__43757 = G__43791;
continue;
} else {
var vec__43761 = cljs.core.first.call(null,seq__43754__$1);
var effect_key = cljs.core.nth.call(null,vec__43761,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43761,(1),null);
var temp__5455__auto___43792 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43792)){
var effect_fn_43793 = temp__5455__auto___43792;
effect_fn_43793.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43794 = cljs.core.next.call(null,seq__43754__$1);
var G__43795 = null;
var G__43796 = (0);
var G__43797 = (0);
seq__43754 = G__43794;
chunk__43755 = G__43795;
count__43756 = G__43796;
i__43757 = G__43797;
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
var seq__43798 = cljs.core.seq.call(null,value);
var chunk__43799 = null;
var count__43800 = (0);
var i__43801 = (0);
while(true){
if((i__43801 < count__43800)){
var map__43802 = cljs.core._nth.call(null,chunk__43799,i__43801);
var map__43802__$1 = ((((!((map__43802 == null)))?(((((map__43802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43802):map__43802);
var effect = map__43802__$1;
var ms = cljs.core.get.call(null,map__43802__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43802__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43798,chunk__43799,count__43800,i__43801,map__43802,map__43802__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43798,chunk__43799,count__43800,i__43801,map__43802,map__43802__$1,effect,ms,dispatch))
,ms);
}


var G__43806 = seq__43798;
var G__43807 = chunk__43799;
var G__43808 = count__43800;
var G__43809 = (i__43801 + (1));
seq__43798 = G__43806;
chunk__43799 = G__43807;
count__43800 = G__43808;
i__43801 = G__43809;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43798);
if(temp__5457__auto__){
var seq__43798__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43798__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43798__$1);
var G__43810 = cljs.core.chunk_rest.call(null,seq__43798__$1);
var G__43811 = c__4319__auto__;
var G__43812 = cljs.core.count.call(null,c__4319__auto__);
var G__43813 = (0);
seq__43798 = G__43810;
chunk__43799 = G__43811;
count__43800 = G__43812;
i__43801 = G__43813;
continue;
} else {
var map__43804 = cljs.core.first.call(null,seq__43798__$1);
var map__43804__$1 = ((((!((map__43804 == null)))?(((((map__43804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43804):map__43804);
var effect = map__43804__$1;
var ms = cljs.core.get.call(null,map__43804__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43804__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43798,chunk__43799,count__43800,i__43801,map__43804,map__43804__$1,effect,ms,dispatch,seq__43798__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43798,chunk__43799,count__43800,i__43801,map__43804,map__43804__$1,effect,ms,dispatch,seq__43798__$1,temp__5457__auto__))
,ms);
}


var G__43814 = cljs.core.next.call(null,seq__43798__$1);
var G__43815 = null;
var G__43816 = (0);
var G__43817 = (0);
seq__43798 = G__43814;
chunk__43799 = G__43815;
count__43800 = G__43816;
i__43801 = G__43817;
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
var seq__43818 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__43819 = null;
var count__43820 = (0);
var i__43821 = (0);
while(true){
if((i__43821 < count__43820)){
var event = cljs.core._nth.call(null,chunk__43819,i__43821);
re_frame.router.dispatch.call(null,event);


var G__43822 = seq__43818;
var G__43823 = chunk__43819;
var G__43824 = count__43820;
var G__43825 = (i__43821 + (1));
seq__43818 = G__43822;
chunk__43819 = G__43823;
count__43820 = G__43824;
i__43821 = G__43825;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43818);
if(temp__5457__auto__){
var seq__43818__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43818__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43818__$1);
var G__43826 = cljs.core.chunk_rest.call(null,seq__43818__$1);
var G__43827 = c__4319__auto__;
var G__43828 = cljs.core.count.call(null,c__4319__auto__);
var G__43829 = (0);
seq__43818 = G__43826;
chunk__43819 = G__43827;
count__43820 = G__43828;
i__43821 = G__43829;
continue;
} else {
var event = cljs.core.first.call(null,seq__43818__$1);
re_frame.router.dispatch.call(null,event);


var G__43830 = cljs.core.next.call(null,seq__43818__$1);
var G__43831 = null;
var G__43832 = (0);
var G__43833 = (0);
seq__43818 = G__43830;
chunk__43819 = G__43831;
count__43820 = G__43832;
i__43821 = G__43833;
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
var seq__43834 = cljs.core.seq.call(null,value);
var chunk__43835 = null;
var count__43836 = (0);
var i__43837 = (0);
while(true){
if((i__43837 < count__43836)){
var event = cljs.core._nth.call(null,chunk__43835,i__43837);
clear_event.call(null,event);


var G__43838 = seq__43834;
var G__43839 = chunk__43835;
var G__43840 = count__43836;
var G__43841 = (i__43837 + (1));
seq__43834 = G__43838;
chunk__43835 = G__43839;
count__43836 = G__43840;
i__43837 = G__43841;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43834);
if(temp__5457__auto__){
var seq__43834__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43834__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43834__$1);
var G__43842 = cljs.core.chunk_rest.call(null,seq__43834__$1);
var G__43843 = c__4319__auto__;
var G__43844 = cljs.core.count.call(null,c__4319__auto__);
var G__43845 = (0);
seq__43834 = G__43842;
chunk__43835 = G__43843;
count__43836 = G__43844;
i__43837 = G__43845;
continue;
} else {
var event = cljs.core.first.call(null,seq__43834__$1);
clear_event.call(null,event);


var G__43846 = cljs.core.next.call(null,seq__43834__$1);
var G__43847 = null;
var G__43848 = (0);
var G__43849 = (0);
seq__43834 = G__43846;
chunk__43835 = G__43847;
count__43836 = G__43848;
i__43837 = G__43849;
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

//# sourceMappingURL=fx.js.map?rel=1524683831255
