// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__43605){
var map__43606 = p__43605;
var map__43606__$1 = ((((!((map__43606 == null)))?(((((map__43606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43606):map__43606);
var operation = cljs.core.get.call(null,map__43606__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__43606__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__43606__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__43606__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__43608_43620 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__43609_43621 = null;
var count__43610_43622 = (0);
var i__43611_43623 = (0);
while(true){
if((i__43611_43623 < count__43610_43622)){
var vec__43612_43624 = cljs.core._nth.call(null,chunk__43609_43621,i__43611_43623);
var k_43625 = cljs.core.nth.call(null,vec__43612_43624,(0),null);
var cb_43626 = cljs.core.nth.call(null,vec__43612_43624,(1),null);
try{cb_43626.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e43615){var e_43627 = e43615;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_43625,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_43627);
}

var G__43628 = seq__43608_43620;
var G__43629 = chunk__43609_43621;
var G__43630 = count__43610_43622;
var G__43631 = (i__43611_43623 + (1));
seq__43608_43620 = G__43628;
chunk__43609_43621 = G__43629;
count__43610_43622 = G__43630;
i__43611_43623 = G__43631;
continue;
} else {
var temp__5457__auto___43632 = cljs.core.seq.call(null,seq__43608_43620);
if(temp__5457__auto___43632){
var seq__43608_43633__$1 = temp__5457__auto___43632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43608_43633__$1)){
var c__4319__auto___43634 = cljs.core.chunk_first.call(null,seq__43608_43633__$1);
var G__43635 = cljs.core.chunk_rest.call(null,seq__43608_43633__$1);
var G__43636 = c__4319__auto___43634;
var G__43637 = cljs.core.count.call(null,c__4319__auto___43634);
var G__43638 = (0);
seq__43608_43620 = G__43635;
chunk__43609_43621 = G__43636;
count__43610_43622 = G__43637;
i__43611_43623 = G__43638;
continue;
} else {
var vec__43616_43639 = cljs.core.first.call(null,seq__43608_43633__$1);
var k_43640 = cljs.core.nth.call(null,vec__43616_43639,(0),null);
var cb_43641 = cljs.core.nth.call(null,vec__43616_43639,(1),null);
try{cb_43641.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e43619){var e_43642 = e43619;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_43640,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_43642);
}

var G__43643 = cljs.core.next.call(null,seq__43608_43633__$1);
var G__43644 = null;
var G__43645 = (0);
var G__43646 = (0);
seq__43608_43620 = G__43643;
chunk__43609_43621 = G__43644;
count__43610_43622 = G__43645;
i__43611_43623 = G__43646;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1524683830303
