// Compiled by ClojureScript 1.9.946 {}
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
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__50427){
var map__50428 = p__50427;
var map__50428__$1 = ((((!((map__50428 == null)))?((((map__50428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50428):map__50428);
var operation = cljs.core.get.call(null,map__50428__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__50428__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__50428__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__50428__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__47188__auto__ = child_of;
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
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
var seq__50430_50442 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__50431_50443 = null;
var count__50432_50444 = (0);
var i__50433_50445 = (0);
while(true){
if((i__50433_50445 < count__50432_50444)){
var vec__50434_50446 = cljs.core._nth.call(null,chunk__50431_50443,i__50433_50445);
var k_50447 = cljs.core.nth.call(null,vec__50434_50446,(0),null);
var cb_50448 = cljs.core.nth.call(null,vec__50434_50446,(1),null);
try{cb_50448.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e50437){var e_50449 = e50437;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_50447,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_50449);
}
var G__50450 = seq__50430_50442;
var G__50451 = chunk__50431_50443;
var G__50452 = count__50432_50444;
var G__50453 = (i__50433_50445 + (1));
seq__50430_50442 = G__50450;
chunk__50431_50443 = G__50451;
count__50432_50444 = G__50452;
i__50433_50445 = G__50453;
continue;
} else {
var temp__4657__auto___50454 = cljs.core.seq.call(null,seq__50430_50442);
if(temp__4657__auto___50454){
var seq__50430_50455__$1 = temp__4657__auto___50454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50430_50455__$1)){
var c__48027__auto___50456 = cljs.core.chunk_first.call(null,seq__50430_50455__$1);
var G__50457 = cljs.core.chunk_rest.call(null,seq__50430_50455__$1);
var G__50458 = c__48027__auto___50456;
var G__50459 = cljs.core.count.call(null,c__48027__auto___50456);
var G__50460 = (0);
seq__50430_50442 = G__50457;
chunk__50431_50443 = G__50458;
count__50432_50444 = G__50459;
i__50433_50445 = G__50460;
continue;
} else {
var vec__50438_50461 = cljs.core.first.call(null,seq__50430_50455__$1);
var k_50462 = cljs.core.nth.call(null,vec__50438_50461,(0),null);
var cb_50463 = cljs.core.nth.call(null,vec__50438_50461,(1),null);
try{cb_50463.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e50441){var e_50464 = e50441;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_50462,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_50464);
}
var G__50465 = cljs.core.next.call(null,seq__50430_50455__$1);
var G__50466 = null;
var G__50467 = (0);
var G__50468 = (0);
seq__50430_50442 = G__50465;
chunk__50431_50443 = G__50466;
count__50432_50444 = G__50467;
i__50433_50445 = G__50468;
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

//# sourceMappingURL=trace.js.map?rel=1521587776025
