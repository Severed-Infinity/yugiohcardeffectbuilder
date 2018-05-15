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
var _STAR_current_trace_STAR_43747 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__43748 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43749 = null;
var count__43750 = (0);
var i__43751 = (0);
while(true){
if((i__43751 < count__43750)){
var vec__43752 = cljs.core._nth.call(null,chunk__43749,i__43751);
var effect_key = cljs.core.nth.call(null,vec__43752,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43752,(1),null);
var temp__5455__auto___43768 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43768)){
var effect_fn_43769 = temp__5455__auto___43768;
effect_fn_43769.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43770 = seq__43748;
var G__43771 = chunk__43749;
var G__43772 = count__43750;
var G__43773 = (i__43751 + (1));
seq__43748 = G__43770;
chunk__43749 = G__43771;
count__43750 = G__43772;
i__43751 = G__43773;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43748);
if(temp__5457__auto__){
var seq__43748__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43748__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43748__$1);
var G__43774 = cljs.core.chunk_rest.call(null,seq__43748__$1);
var G__43775 = c__4319__auto__;
var G__43776 = cljs.core.count.call(null,c__4319__auto__);
var G__43777 = (0);
seq__43748 = G__43774;
chunk__43749 = G__43775;
count__43750 = G__43776;
i__43751 = G__43777;
continue;
} else {
var vec__43755 = cljs.core.first.call(null,seq__43748__$1);
var effect_key = cljs.core.nth.call(null,vec__43755,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43755,(1),null);
var temp__5455__auto___43778 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43778)){
var effect_fn_43779 = temp__5455__auto___43778;
effect_fn_43779.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43780 = cljs.core.next.call(null,seq__43748__$1);
var G__43781 = null;
var G__43782 = (0);
var G__43783 = (0);
seq__43748 = G__43780;
chunk__43749 = G__43781;
count__43750 = G__43782;
i__43751 = G__43783;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__43587__auto___43784 = re_frame.interop.now.call(null);
var duration__43588__auto___43785 = (end__43587__auto___43784 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__43588__auto___43785,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__43587__auto___43784);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_43747;
}} else {
var seq__43758 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__43759 = null;
var count__43760 = (0);
var i__43761 = (0);
while(true){
if((i__43761 < count__43760)){
var vec__43762 = cljs.core._nth.call(null,chunk__43759,i__43761);
var effect_key = cljs.core.nth.call(null,vec__43762,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43762,(1),null);
var temp__5455__auto___43786 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43786)){
var effect_fn_43787 = temp__5455__auto___43786;
effect_fn_43787.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43788 = seq__43758;
var G__43789 = chunk__43759;
var G__43790 = count__43760;
var G__43791 = (i__43761 + (1));
seq__43758 = G__43788;
chunk__43759 = G__43789;
count__43760 = G__43790;
i__43761 = G__43791;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43758);
if(temp__5457__auto__){
var seq__43758__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43758__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43758__$1);
var G__43792 = cljs.core.chunk_rest.call(null,seq__43758__$1);
var G__43793 = c__4319__auto__;
var G__43794 = cljs.core.count.call(null,c__4319__auto__);
var G__43795 = (0);
seq__43758 = G__43792;
chunk__43759 = G__43793;
count__43760 = G__43794;
i__43761 = G__43795;
continue;
} else {
var vec__43765 = cljs.core.first.call(null,seq__43758__$1);
var effect_key = cljs.core.nth.call(null,vec__43765,(0),null);
var effect_value = cljs.core.nth.call(null,vec__43765,(1),null);
var temp__5455__auto___43796 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___43796)){
var effect_fn_43797 = temp__5455__auto___43796;
effect_fn_43797.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__43798 = cljs.core.next.call(null,seq__43758__$1);
var G__43799 = null;
var G__43800 = (0);
var G__43801 = (0);
seq__43758 = G__43798;
chunk__43759 = G__43799;
count__43760 = G__43800;
i__43761 = G__43801;
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
var seq__43802 = cljs.core.seq.call(null,value);
var chunk__43803 = null;
var count__43804 = (0);
var i__43805 = (0);
while(true){
if((i__43805 < count__43804)){
var map__43806 = cljs.core._nth.call(null,chunk__43803,i__43805);
var map__43806__$1 = ((((!((map__43806 == null)))?(((((map__43806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43806):map__43806);
var effect = map__43806__$1;
var ms = cljs.core.get.call(null,map__43806__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43806__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43802,chunk__43803,count__43804,i__43805,map__43806,map__43806__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43802,chunk__43803,count__43804,i__43805,map__43806,map__43806__$1,effect,ms,dispatch))
,ms);
}


var G__43810 = seq__43802;
var G__43811 = chunk__43803;
var G__43812 = count__43804;
var G__43813 = (i__43805 + (1));
seq__43802 = G__43810;
chunk__43803 = G__43811;
count__43804 = G__43812;
i__43805 = G__43813;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43802);
if(temp__5457__auto__){
var seq__43802__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43802__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43802__$1);
var G__43814 = cljs.core.chunk_rest.call(null,seq__43802__$1);
var G__43815 = c__4319__auto__;
var G__43816 = cljs.core.count.call(null,c__4319__auto__);
var G__43817 = (0);
seq__43802 = G__43814;
chunk__43803 = G__43815;
count__43804 = G__43816;
i__43805 = G__43817;
continue;
} else {
var map__43808 = cljs.core.first.call(null,seq__43802__$1);
var map__43808__$1 = ((((!((map__43808 == null)))?(((((map__43808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43808):map__43808);
var effect = map__43808__$1;
var ms = cljs.core.get.call(null,map__43808__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__43808__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__43802,chunk__43803,count__43804,i__43805,map__43808,map__43808__$1,effect,ms,dispatch,seq__43802__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__43802,chunk__43803,count__43804,i__43805,map__43808,map__43808__$1,effect,ms,dispatch,seq__43802__$1,temp__5457__auto__))
,ms);
}


var G__43818 = cljs.core.next.call(null,seq__43802__$1);
var G__43819 = null;
var G__43820 = (0);
var G__43821 = (0);
seq__43802 = G__43818;
chunk__43803 = G__43819;
count__43804 = G__43820;
i__43805 = G__43821;
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
var seq__43822 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__43823 = null;
var count__43824 = (0);
var i__43825 = (0);
while(true){
if((i__43825 < count__43824)){
var event = cljs.core._nth.call(null,chunk__43823,i__43825);
re_frame.router.dispatch.call(null,event);


var G__43826 = seq__43822;
var G__43827 = chunk__43823;
var G__43828 = count__43824;
var G__43829 = (i__43825 + (1));
seq__43822 = G__43826;
chunk__43823 = G__43827;
count__43824 = G__43828;
i__43825 = G__43829;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43822);
if(temp__5457__auto__){
var seq__43822__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43822__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43822__$1);
var G__43830 = cljs.core.chunk_rest.call(null,seq__43822__$1);
var G__43831 = c__4319__auto__;
var G__43832 = cljs.core.count.call(null,c__4319__auto__);
var G__43833 = (0);
seq__43822 = G__43830;
chunk__43823 = G__43831;
count__43824 = G__43832;
i__43825 = G__43833;
continue;
} else {
var event = cljs.core.first.call(null,seq__43822__$1);
re_frame.router.dispatch.call(null,event);


var G__43834 = cljs.core.next.call(null,seq__43822__$1);
var G__43835 = null;
var G__43836 = (0);
var G__43837 = (0);
seq__43822 = G__43834;
chunk__43823 = G__43835;
count__43824 = G__43836;
i__43825 = G__43837;
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
var seq__43838 = cljs.core.seq.call(null,value);
var chunk__43839 = null;
var count__43840 = (0);
var i__43841 = (0);
while(true){
if((i__43841 < count__43840)){
var event = cljs.core._nth.call(null,chunk__43839,i__43841);
clear_event.call(null,event);


var G__43842 = seq__43838;
var G__43843 = chunk__43839;
var G__43844 = count__43840;
var G__43845 = (i__43841 + (1));
seq__43838 = G__43842;
chunk__43839 = G__43843;
count__43840 = G__43844;
i__43841 = G__43845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__43838);
if(temp__5457__auto__){
var seq__43838__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43838__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43838__$1);
var G__43846 = cljs.core.chunk_rest.call(null,seq__43838__$1);
var G__43847 = c__4319__auto__;
var G__43848 = cljs.core.count.call(null,c__4319__auto__);
var G__43849 = (0);
seq__43838 = G__43846;
chunk__43839 = G__43847;
count__43840 = G__43848;
i__43841 = G__43849;
continue;
} else {
var event = cljs.core.first.call(null,seq__43838__$1);
clear_event.call(null,event);


var G__43850 = cljs.core.next.call(null,seq__43838__$1);
var G__43851 = null;
var G__43852 = (0);
var G__43853 = (0);
seq__43838 = G__43850;
chunk__43839 = G__43851;
count__43840 = G__43852;
i__43841 = G__43853;
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

//# sourceMappingURL=fx.js.map?rel=1526415185036
