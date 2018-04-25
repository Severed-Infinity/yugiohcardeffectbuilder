// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_36012 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));

try{try{var seq__36013 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__36014 = null;
var count__36015 = (0);
var i__36016 = (0);
while(true){
if((i__36016 < count__36015)){
var vec__36017 = chunk__36014.cljs$core$IIndexed$_nth$arity$2(null,i__36016);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,(1),null);
var temp__5455__auto___36033 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___36033)){
var effect_fn_36034 = temp__5455__auto___36033;
(effect_fn_36034.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36034.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36034.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36035 = seq__36013;
var G__36036 = chunk__36014;
var G__36037 = count__36015;
var G__36038 = (i__36016 + (1));
seq__36013 = G__36035;
chunk__36014 = G__36036;
count__36015 = G__36037;
i__36016 = G__36038;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36013);
if(temp__5457__auto__){
var seq__36013__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36013__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36013__$1);
var G__36039 = cljs.core.chunk_rest(seq__36013__$1);
var G__36040 = c__4319__auto__;
var G__36041 = cljs.core.count(c__4319__auto__);
var G__36042 = (0);
seq__36013 = G__36039;
chunk__36014 = G__36040;
count__36015 = G__36041;
i__36016 = G__36042;
continue;
} else {
var vec__36020 = cljs.core.first(seq__36013__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36020,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36020,(1),null);
var temp__5455__auto___36043 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___36043)){
var effect_fn_36044 = temp__5455__auto___36043;
(effect_fn_36044.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36044.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36044.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36045 = cljs.core.next(seq__36013__$1);
var G__36046 = null;
var G__36047 = (0);
var G__36048 = (0);
seq__36013 = G__36045;
chunk__36014 = G__36046;
count__36015 = G__36047;
i__36016 = G__36048;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35845__auto___36049 = re_frame.interop.now();
var duration__35846__auto___36050 = (end__35845__auto___36049 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__35846__auto___36050,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35845__auto___36049);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_36012;
}} else {
var seq__36023 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__36024 = null;
var count__36025 = (0);
var i__36026 = (0);
while(true){
if((i__36026 < count__36025)){
var vec__36027 = chunk__36024.cljs$core$IIndexed$_nth$arity$2(null,i__36026);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36027,(1),null);
var temp__5455__auto___36051 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___36051)){
var effect_fn_36052 = temp__5455__auto___36051;
(effect_fn_36052.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36052.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36052.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36053 = seq__36023;
var G__36054 = chunk__36024;
var G__36055 = count__36025;
var G__36056 = (i__36026 + (1));
seq__36023 = G__36053;
chunk__36024 = G__36054;
count__36025 = G__36055;
i__36026 = G__36056;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36023);
if(temp__5457__auto__){
var seq__36023__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36023__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36023__$1);
var G__36057 = cljs.core.chunk_rest(seq__36023__$1);
var G__36058 = c__4319__auto__;
var G__36059 = cljs.core.count(c__4319__auto__);
var G__36060 = (0);
seq__36023 = G__36057;
chunk__36024 = G__36058;
count__36025 = G__36059;
i__36026 = G__36060;
continue;
} else {
var vec__36030 = cljs.core.first(seq__36023__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36030,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36030,(1),null);
var temp__5455__auto___36061 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___36061)){
var effect_fn_36062 = temp__5455__auto___36061;
(effect_fn_36062.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36062.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36062.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36063 = cljs.core.next(seq__36023__$1);
var G__36064 = null;
var G__36065 = (0);
var G__36066 = (0);
seq__36023 = G__36063;
chunk__36024 = G__36064;
count__36025 = G__36065;
i__36026 = G__36066;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__36067 = cljs.core.seq(value);
var chunk__36068 = null;
var count__36069 = (0);
var i__36070 = (0);
while(true){
if((i__36070 < count__36069)){
var map__36071 = chunk__36068.cljs$core$IIndexed$_nth$arity$2(null,i__36070);
var map__36071__$1 = ((((!((map__36071 == null)))?(((((map__36071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36071):map__36071);
var effect = map__36071__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36071__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__36067,chunk__36068,count__36069,i__36070,map__36071,map__36071__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__36067,chunk__36068,count__36069,i__36070,map__36071,map__36071__$1,effect,ms,dispatch))
,ms);
}


var G__36075 = seq__36067;
var G__36076 = chunk__36068;
var G__36077 = count__36069;
var G__36078 = (i__36070 + (1));
seq__36067 = G__36075;
chunk__36068 = G__36076;
count__36069 = G__36077;
i__36070 = G__36078;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36067);
if(temp__5457__auto__){
var seq__36067__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36067__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36067__$1);
var G__36079 = cljs.core.chunk_rest(seq__36067__$1);
var G__36080 = c__4319__auto__;
var G__36081 = cljs.core.count(c__4319__auto__);
var G__36082 = (0);
seq__36067 = G__36079;
chunk__36068 = G__36080;
count__36069 = G__36081;
i__36070 = G__36082;
continue;
} else {
var map__36073 = cljs.core.first(seq__36067__$1);
var map__36073__$1 = ((((!((map__36073 == null)))?(((((map__36073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36073):map__36073);
var effect = map__36073__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36073__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__36067,chunk__36068,count__36069,i__36070,map__36073,map__36073__$1,effect,ms,dispatch,seq__36067__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__36067,chunk__36068,count__36069,i__36070,map__36073,map__36073__$1,effect,ms,dispatch,seq__36067__$1,temp__5457__auto__))
,ms);
}


var G__36083 = cljs.core.next(seq__36067__$1);
var G__36084 = null;
var G__36085 = (0);
var G__36086 = (0);
seq__36067 = G__36083;
chunk__36068 = G__36084;
count__36069 = G__36085;
i__36070 = G__36086;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__36087 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36088 = null;
var count__36089 = (0);
var i__36090 = (0);
while(true){
if((i__36090 < count__36089)){
var event = chunk__36088.cljs$core$IIndexed$_nth$arity$2(null,i__36090);
re_frame.router.dispatch(event);


var G__36091 = seq__36087;
var G__36092 = chunk__36088;
var G__36093 = count__36089;
var G__36094 = (i__36090 + (1));
seq__36087 = G__36091;
chunk__36088 = G__36092;
count__36089 = G__36093;
i__36090 = G__36094;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36087);
if(temp__5457__auto__){
var seq__36087__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36087__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36087__$1);
var G__36095 = cljs.core.chunk_rest(seq__36087__$1);
var G__36096 = c__4319__auto__;
var G__36097 = cljs.core.count(c__4319__auto__);
var G__36098 = (0);
seq__36087 = G__36095;
chunk__36088 = G__36096;
count__36089 = G__36097;
i__36090 = G__36098;
continue;
} else {
var event = cljs.core.first(seq__36087__$1);
re_frame.router.dispatch(event);


var G__36099 = cljs.core.next(seq__36087__$1);
var G__36100 = null;
var G__36101 = (0);
var G__36102 = (0);
seq__36087 = G__36099;
chunk__36088 = G__36100;
count__36089 = G__36101;
i__36090 = G__36102;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__36103 = cljs.core.seq(value);
var chunk__36104 = null;
var count__36105 = (0);
var i__36106 = (0);
while(true){
if((i__36106 < count__36105)){
var event = chunk__36104.cljs$core$IIndexed$_nth$arity$2(null,i__36106);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__36107 = seq__36103;
var G__36108 = chunk__36104;
var G__36109 = count__36105;
var G__36110 = (i__36106 + (1));
seq__36103 = G__36107;
chunk__36104 = G__36108;
count__36105 = G__36109;
i__36106 = G__36110;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36103);
if(temp__5457__auto__){
var seq__36103__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36103__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36103__$1);
var G__36111 = cljs.core.chunk_rest(seq__36103__$1);
var G__36112 = c__4319__auto__;
var G__36113 = cljs.core.count(c__4319__auto__);
var G__36114 = (0);
seq__36103 = G__36111;
chunk__36104 = G__36112;
count__36105 = G__36113;
i__36106 = G__36114;
continue;
} else {
var event = cljs.core.first(seq__36103__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__36115 = cljs.core.next(seq__36103__$1);
var G__36116 = null;
var G__36117 = (0);
var G__36118 = (0);
seq__36103 = G__36115;
chunk__36104 = G__36116;
count__36105 = G__36117;
i__36106 = G__36118;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
