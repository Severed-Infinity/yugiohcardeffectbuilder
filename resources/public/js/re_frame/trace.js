// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35867){
var map__35868 = p__35867;
var map__35868__$1 = ((((!((map__35868 == null)))?(((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35868):map__35868);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__35870_35884 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35871_35885 = null;
var count__35872_35886 = (0);
var i__35873_35887 = (0);
while(true){
if((i__35873_35887 < count__35872_35886)){
var vec__35874_35888 = chunk__35871_35885.cljs$core$IIndexed$_nth$arity$2(null,i__35873_35887);
var k_35889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874_35888,(0),null);
var cb_35890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35874_35888,(1),null);
try{var G__35878_35891 = cljs.core.deref(re_frame.trace.traces);
(cb_35890.cljs$core$IFn$_invoke$arity$1 ? cb_35890.cljs$core$IFn$_invoke$arity$1(G__35878_35891) : cb_35890.call(null,G__35878_35891));
}catch (e35877){var e_35892 = e35877;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35889,"while storing",cljs.core.deref(re_frame.trace.traces),e_35892], 0));
}

var G__35893 = seq__35870_35884;
var G__35894 = chunk__35871_35885;
var G__35895 = count__35872_35886;
var G__35896 = (i__35873_35887 + (1));
seq__35870_35884 = G__35893;
chunk__35871_35885 = G__35894;
count__35872_35886 = G__35895;
i__35873_35887 = G__35896;
continue;
} else {
var temp__5457__auto___35897 = cljs.core.seq(seq__35870_35884);
if(temp__5457__auto___35897){
var seq__35870_35898__$1 = temp__5457__auto___35897;
if(cljs.core.chunked_seq_QMARK_(seq__35870_35898__$1)){
var c__4319__auto___35899 = cljs.core.chunk_first(seq__35870_35898__$1);
var G__35900 = cljs.core.chunk_rest(seq__35870_35898__$1);
var G__35901 = c__4319__auto___35899;
var G__35902 = cljs.core.count(c__4319__auto___35899);
var G__35903 = (0);
seq__35870_35884 = G__35900;
chunk__35871_35885 = G__35901;
count__35872_35886 = G__35902;
i__35873_35887 = G__35903;
continue;
} else {
var vec__35879_35904 = cljs.core.first(seq__35870_35898__$1);
var k_35905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35879_35904,(0),null);
var cb_35906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35879_35904,(1),null);
try{var G__35883_35907 = cljs.core.deref(re_frame.trace.traces);
(cb_35906.cljs$core$IFn$_invoke$arity$1 ? cb_35906.cljs$core$IFn$_invoke$arity$1(G__35883_35907) : cb_35906.call(null,G__35883_35907));
}catch (e35882){var e_35908 = e35882;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35905,"while storing",cljs.core.deref(re_frame.trace.traces),e_35908], 0));
}

var G__35909 = cljs.core.next(seq__35870_35898__$1);
var G__35910 = null;
var G__35911 = (0);
var G__35912 = (0);
seq__35870_35884 = G__35909;
chunk__35871_35885 = G__35910;
count__35872_35886 = G__35911;
i__35873_35887 = G__35912;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
