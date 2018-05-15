// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e51252){if((e51252 instanceof Error)){
var e = e51252;
return "Error: Unable to stringify";
} else {
throw e51252;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51255 = arguments.length;
switch (G__51255) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51253_SHARP_){
if(typeof p1__51253_SHARP_ === 'string'){
return p1__51253_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51253_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___51258 = arguments.length;
var i__4500__auto___51259 = (0);
while(true){
if((i__4500__auto___51259 < len__4499__auto___51258)){
args__4502__auto__.push((arguments[i__4500__auto___51259]));

var G__51260 = (i__4500__auto___51259 + (1));
i__4500__auto___51259 = G__51260;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51257){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51257));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___51262 = arguments.length;
var i__4500__auto___51263 = (0);
while(true){
if((i__4500__auto___51263 < len__4499__auto___51262)){
args__4502__auto__.push((arguments[i__4500__auto___51263]));

var G__51264 = (i__4500__auto___51263 + (1));
i__4500__auto___51263 = G__51264;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51261){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51261));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51265){
var map__51266 = p__51265;
var map__51266__$1 = ((((!((map__51266 == null)))?(((((map__51266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51266):map__51266);
var message = cljs.core.get.call(null,map__51266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51266__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__48192__auto___51345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___51345,ch){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___51345,ch){
return (function (state_51317){
var state_val_51318 = (state_51317[(1)]);
if((state_val_51318 === (7))){
var inst_51313 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51319_51346 = state_51317__$1;
(statearr_51319_51346[(2)] = inst_51313);

(statearr_51319_51346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (1))){
var state_51317__$1 = state_51317;
var statearr_51320_51347 = state_51317__$1;
(statearr_51320_51347[(2)] = null);

(statearr_51320_51347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (4))){
var inst_51270 = (state_51317[(7)]);
var inst_51270__$1 = (state_51317[(2)]);
var state_51317__$1 = (function (){var statearr_51321 = state_51317;
(statearr_51321[(7)] = inst_51270__$1);

return statearr_51321;
})();
if(cljs.core.truth_(inst_51270__$1)){
var statearr_51322_51348 = state_51317__$1;
(statearr_51322_51348[(1)] = (5));

} else {
var statearr_51323_51349 = state_51317__$1;
(statearr_51323_51349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (15))){
var inst_51277 = (state_51317[(8)]);
var inst_51292 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51277);
var inst_51293 = cljs.core.first.call(null,inst_51292);
var inst_51294 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51293);
var inst_51295 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51294)].join('');
var inst_51296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51295);
var state_51317__$1 = state_51317;
var statearr_51324_51350 = state_51317__$1;
(statearr_51324_51350[(2)] = inst_51296);

(statearr_51324_51350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (13))){
var inst_51301 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51325_51351 = state_51317__$1;
(statearr_51325_51351[(2)] = inst_51301);

(statearr_51325_51351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (6))){
var state_51317__$1 = state_51317;
var statearr_51326_51352 = state_51317__$1;
(statearr_51326_51352[(2)] = null);

(statearr_51326_51352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (17))){
var inst_51299 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51327_51353 = state_51317__$1;
(statearr_51327_51353[(2)] = inst_51299);

(statearr_51327_51353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (3))){
var inst_51315 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51317__$1,inst_51315);
} else {
if((state_val_51318 === (12))){
var inst_51276 = (state_51317[(9)]);
var inst_51290 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51276,opts);
var state_51317__$1 = state_51317;
if(cljs.core.truth_(inst_51290)){
var statearr_51328_51354 = state_51317__$1;
(statearr_51328_51354[(1)] = (15));

} else {
var statearr_51329_51355 = state_51317__$1;
(statearr_51329_51355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (2))){
var state_51317__$1 = state_51317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51317__$1,(4),ch);
} else {
if((state_val_51318 === (11))){
var inst_51277 = (state_51317[(8)]);
var inst_51282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51283 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51277);
var inst_51284 = cljs.core.async.timeout.call(null,(1000));
var inst_51285 = [inst_51283,inst_51284];
var inst_51286 = (new cljs.core.PersistentVector(null,2,(5),inst_51282,inst_51285,null));
var state_51317__$1 = state_51317;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51317__$1,(14),inst_51286);
} else {
if((state_val_51318 === (9))){
var inst_51277 = (state_51317[(8)]);
var inst_51303 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51304 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51277);
var inst_51305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51304);
var inst_51306 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51305)].join('');
var inst_51307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51306);
var state_51317__$1 = (function (){var statearr_51330 = state_51317;
(statearr_51330[(10)] = inst_51303);

return statearr_51330;
})();
var statearr_51331_51356 = state_51317__$1;
(statearr_51331_51356[(2)] = inst_51307);

(statearr_51331_51356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (5))){
var inst_51270 = (state_51317[(7)]);
var inst_51272 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51273 = (new cljs.core.PersistentArrayMap(null,2,inst_51272,null));
var inst_51274 = (new cljs.core.PersistentHashSet(null,inst_51273,null));
var inst_51275 = figwheel.client.focus_msgs.call(null,inst_51274,inst_51270);
var inst_51276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51275);
var inst_51277 = cljs.core.first.call(null,inst_51275);
var inst_51278 = figwheel.client.autoload_QMARK_.call(null);
var state_51317__$1 = (function (){var statearr_51332 = state_51317;
(statearr_51332[(9)] = inst_51276);

(statearr_51332[(8)] = inst_51277);

return statearr_51332;
})();
if(cljs.core.truth_(inst_51278)){
var statearr_51333_51357 = state_51317__$1;
(statearr_51333_51357[(1)] = (8));

} else {
var statearr_51334_51358 = state_51317__$1;
(statearr_51334_51358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (14))){
var inst_51288 = (state_51317[(2)]);
var state_51317__$1 = state_51317;
var statearr_51335_51359 = state_51317__$1;
(statearr_51335_51359[(2)] = inst_51288);

(statearr_51335_51359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (16))){
var state_51317__$1 = state_51317;
var statearr_51336_51360 = state_51317__$1;
(statearr_51336_51360[(2)] = null);

(statearr_51336_51360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (10))){
var inst_51309 = (state_51317[(2)]);
var state_51317__$1 = (function (){var statearr_51337 = state_51317;
(statearr_51337[(11)] = inst_51309);

return statearr_51337;
})();
var statearr_51338_51361 = state_51317__$1;
(statearr_51338_51361[(2)] = null);

(statearr_51338_51361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51318 === (8))){
var inst_51276 = (state_51317[(9)]);
var inst_51280 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51276,opts);
var state_51317__$1 = state_51317;
if(cljs.core.truth_(inst_51280)){
var statearr_51339_51362 = state_51317__$1;
(statearr_51339_51362[(1)] = (11));

} else {
var statearr_51340_51363 = state_51317__$1;
(statearr_51340_51363[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48192__auto___51345,ch))
;
return ((function (switch__48102__auto__,c__48192__auto___51345,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48103__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48103__auto____0 = (function (){
var statearr_51341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51341[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48103__auto__);

(statearr_51341[(1)] = (1));

return statearr_51341;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48103__auto____1 = (function (state_51317){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_51317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e51342){if((e51342 instanceof Object)){
var ex__48106__auto__ = e51342;
var statearr_51343_51364 = state_51317;
(statearr_51343_51364[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51365 = state_51317;
state_51317 = G__51365;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48103__auto__ = function(state_51317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48103__auto____1.call(this,state_51317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48103__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48103__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___51345,ch))
})();
var state__48194__auto__ = (function (){var statearr_51344 = f__48193__auto__.call(null);
(statearr_51344[(6)] = c__48192__auto___51345);

return statearr_51344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___51345,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51366_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51366_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51370 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51370){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51369 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51368,_STAR_print_fn_STAR_51369,sb,base_path_51370){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_51368,_STAR_print_fn_STAR_51369,sb,base_path_51370))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51369;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51368;
}}catch (e51367){if((e51367 instanceof Error)){
var e = e51367;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51370], null));
} else {
var e = e51367;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_51370))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51371){
var map__51372 = p__51371;
var map__51372__$1 = ((((!((map__51372 == null)))?(((((map__51372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51372):map__51372);
var opts = map__51372__$1;
var build_id = cljs.core.get.call(null,map__51372__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51372,map__51372__$1,opts,build_id){
return (function (p__51374){
var vec__51375 = p__51374;
var seq__51376 = cljs.core.seq.call(null,vec__51375);
var first__51377 = cljs.core.first.call(null,seq__51376);
var seq__51376__$1 = cljs.core.next.call(null,seq__51376);
var map__51378 = first__51377;
var map__51378__$1 = ((((!((map__51378 == null)))?(((((map__51378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51378):map__51378);
var msg = map__51378__$1;
var msg_name = cljs.core.get.call(null,map__51378__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51376__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51375,seq__51376,first__51377,seq__51376__$1,map__51378,map__51378__$1,msg,msg_name,_,map__51372,map__51372__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51375,seq__51376,first__51377,seq__51376__$1,map__51378,map__51378__$1,msg,msg_name,_,map__51372,map__51372__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51372,map__51372__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51380){
var vec__51381 = p__51380;
var seq__51382 = cljs.core.seq.call(null,vec__51381);
var first__51383 = cljs.core.first.call(null,seq__51382);
var seq__51382__$1 = cljs.core.next.call(null,seq__51382);
var map__51384 = first__51383;
var map__51384__$1 = ((((!((map__51384 == null)))?(((((map__51384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51384):map__51384);
var msg = map__51384__$1;
var msg_name = cljs.core.get.call(null,map__51384__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51382__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51386){
var map__51387 = p__51386;
var map__51387__$1 = ((((!((map__51387 == null)))?(((((map__51387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51387):map__51387);
var on_compile_warning = cljs.core.get.call(null,map__51387__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51387__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51387,map__51387__$1,on_compile_warning,on_compile_fail){
return (function (p__51389){
var vec__51390 = p__51389;
var seq__51391 = cljs.core.seq.call(null,vec__51390);
var first__51392 = cljs.core.first.call(null,seq__51391);
var seq__51391__$1 = cljs.core.next.call(null,seq__51391);
var map__51393 = first__51392;
var map__51393__$1 = ((((!((map__51393 == null)))?(((((map__51393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51393):map__51393);
var msg = map__51393__$1;
var msg_name = cljs.core.get.call(null,map__51393__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51391__$1;
var pred__51395 = cljs.core._EQ_;
var expr__51396 = msg_name;
if(cljs.core.truth_(pred__51395.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51396))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51395.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51396))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51387,map__51387__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__,msg_hist,msg_names,msg){
return (function (state_51485){
var state_val_51486 = (state_51485[(1)]);
if((state_val_51486 === (7))){
var inst_51405 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51405)){
var statearr_51487_51534 = state_51485__$1;
(statearr_51487_51534[(1)] = (8));

} else {
var statearr_51488_51535 = state_51485__$1;
(statearr_51488_51535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (20))){
var inst_51479 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51489_51536 = state_51485__$1;
(statearr_51489_51536[(2)] = inst_51479);

(statearr_51489_51536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (27))){
var inst_51475 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51490_51537 = state_51485__$1;
(statearr_51490_51537[(2)] = inst_51475);

(statearr_51490_51537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (1))){
var inst_51398 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51398)){
var statearr_51491_51538 = state_51485__$1;
(statearr_51491_51538[(1)] = (2));

} else {
var statearr_51492_51539 = state_51485__$1;
(statearr_51492_51539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (24))){
var inst_51477 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51493_51540 = state_51485__$1;
(statearr_51493_51540[(2)] = inst_51477);

(statearr_51493_51540[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (4))){
var inst_51483 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51485__$1,inst_51483);
} else {
if((state_val_51486 === (15))){
var inst_51481 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51494_51541 = state_51485__$1;
(statearr_51494_51541[(2)] = inst_51481);

(statearr_51494_51541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (21))){
var inst_51434 = (state_51485[(2)]);
var inst_51435 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51436 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51435);
var state_51485__$1 = (function (){var statearr_51495 = state_51485;
(statearr_51495[(7)] = inst_51434);

return statearr_51495;
})();
var statearr_51496_51542 = state_51485__$1;
(statearr_51496_51542[(2)] = inst_51436);

(statearr_51496_51542[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (31))){
var inst_51464 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51464)){
var statearr_51497_51543 = state_51485__$1;
(statearr_51497_51543[(1)] = (34));

} else {
var statearr_51498_51544 = state_51485__$1;
(statearr_51498_51544[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (32))){
var inst_51473 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51499_51545 = state_51485__$1;
(statearr_51499_51545[(2)] = inst_51473);

(statearr_51499_51545[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (33))){
var inst_51460 = (state_51485[(2)]);
var inst_51461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51462 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51461);
var state_51485__$1 = (function (){var statearr_51500 = state_51485;
(statearr_51500[(8)] = inst_51460);

return statearr_51500;
})();
var statearr_51501_51546 = state_51485__$1;
(statearr_51501_51546[(2)] = inst_51462);

(statearr_51501_51546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (13))){
var inst_51419 = figwheel.client.heads_up.clear.call(null);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(16),inst_51419);
} else {
if((state_val_51486 === (22))){
var inst_51440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51441 = figwheel.client.heads_up.append_warning_message.call(null,inst_51440);
var state_51485__$1 = state_51485;
var statearr_51502_51547 = state_51485__$1;
(statearr_51502_51547[(2)] = inst_51441);

(statearr_51502_51547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (36))){
var inst_51471 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51503_51548 = state_51485__$1;
(statearr_51503_51548[(2)] = inst_51471);

(statearr_51503_51548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (29))){
var inst_51451 = (state_51485[(2)]);
var inst_51452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51453 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51452);
var state_51485__$1 = (function (){var statearr_51504 = state_51485;
(statearr_51504[(9)] = inst_51451);

return statearr_51504;
})();
var statearr_51505_51549 = state_51485__$1;
(statearr_51505_51549[(2)] = inst_51453);

(statearr_51505_51549[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (6))){
var inst_51400 = (state_51485[(10)]);
var state_51485__$1 = state_51485;
var statearr_51506_51550 = state_51485__$1;
(statearr_51506_51550[(2)] = inst_51400);

(statearr_51506_51550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (28))){
var inst_51447 = (state_51485[(2)]);
var inst_51448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51449 = figwheel.client.heads_up.display_warning.call(null,inst_51448);
var state_51485__$1 = (function (){var statearr_51507 = state_51485;
(statearr_51507[(11)] = inst_51447);

return statearr_51507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(29),inst_51449);
} else {
if((state_val_51486 === (25))){
var inst_51445 = figwheel.client.heads_up.clear.call(null);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(28),inst_51445);
} else {
if((state_val_51486 === (34))){
var inst_51466 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(37),inst_51466);
} else {
if((state_val_51486 === (17))){
var inst_51425 = (state_51485[(2)]);
var inst_51426 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51427 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51426);
var state_51485__$1 = (function (){var statearr_51508 = state_51485;
(statearr_51508[(12)] = inst_51425);

return statearr_51508;
})();
var statearr_51509_51551 = state_51485__$1;
(statearr_51509_51551[(2)] = inst_51427);

(statearr_51509_51551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (3))){
var inst_51417 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51417)){
var statearr_51510_51552 = state_51485__$1;
(statearr_51510_51552[(1)] = (13));

} else {
var statearr_51511_51553 = state_51485__$1;
(statearr_51511_51553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (12))){
var inst_51413 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51512_51554 = state_51485__$1;
(statearr_51512_51554[(2)] = inst_51413);

(statearr_51512_51554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (2))){
var inst_51400 = (state_51485[(10)]);
var inst_51400__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51485__$1 = (function (){var statearr_51513 = state_51485;
(statearr_51513[(10)] = inst_51400__$1);

return statearr_51513;
})();
if(cljs.core.truth_(inst_51400__$1)){
var statearr_51514_51555 = state_51485__$1;
(statearr_51514_51555[(1)] = (5));

} else {
var statearr_51515_51556 = state_51485__$1;
(statearr_51515_51556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (23))){
var inst_51443 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51443)){
var statearr_51516_51557 = state_51485__$1;
(statearr_51516_51557[(1)] = (25));

} else {
var statearr_51517_51558 = state_51485__$1;
(statearr_51517_51558[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (35))){
var state_51485__$1 = state_51485;
var statearr_51518_51559 = state_51485__$1;
(statearr_51518_51559[(2)] = null);

(statearr_51518_51559[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (19))){
var inst_51438 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51438)){
var statearr_51519_51560 = state_51485__$1;
(statearr_51519_51560[(1)] = (22));

} else {
var statearr_51520_51561 = state_51485__$1;
(statearr_51520_51561[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (11))){
var inst_51409 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51521_51562 = state_51485__$1;
(statearr_51521_51562[(2)] = inst_51409);

(statearr_51521_51562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (9))){
var inst_51411 = figwheel.client.heads_up.clear.call(null);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(12),inst_51411);
} else {
if((state_val_51486 === (5))){
var inst_51402 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51485__$1 = state_51485;
var statearr_51522_51563 = state_51485__$1;
(statearr_51522_51563[(2)] = inst_51402);

(statearr_51522_51563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (14))){
var inst_51429 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51429)){
var statearr_51523_51564 = state_51485__$1;
(statearr_51523_51564[(1)] = (18));

} else {
var statearr_51524_51565 = state_51485__$1;
(statearr_51524_51565[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (26))){
var inst_51455 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51485__$1 = state_51485;
if(cljs.core.truth_(inst_51455)){
var statearr_51525_51566 = state_51485__$1;
(statearr_51525_51566[(1)] = (30));

} else {
var statearr_51526_51567 = state_51485__$1;
(statearr_51526_51567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (16))){
var inst_51421 = (state_51485[(2)]);
var inst_51422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51423 = figwheel.client.heads_up.display_exception.call(null,inst_51422);
var state_51485__$1 = (function (){var statearr_51527 = state_51485;
(statearr_51527[(13)] = inst_51421);

return statearr_51527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(17),inst_51423);
} else {
if((state_val_51486 === (30))){
var inst_51457 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51458 = figwheel.client.heads_up.display_warning.call(null,inst_51457);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(33),inst_51458);
} else {
if((state_val_51486 === (10))){
var inst_51415 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51528_51568 = state_51485__$1;
(statearr_51528_51568[(2)] = inst_51415);

(statearr_51528_51568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (18))){
var inst_51431 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51432 = figwheel.client.heads_up.display_exception.call(null,inst_51431);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(21),inst_51432);
} else {
if((state_val_51486 === (37))){
var inst_51468 = (state_51485[(2)]);
var state_51485__$1 = state_51485;
var statearr_51529_51569 = state_51485__$1;
(statearr_51529_51569[(2)] = inst_51468);

(statearr_51529_51569[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51486 === (8))){
var inst_51407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51485__$1 = state_51485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51485__$1,(11),inst_51407);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48192__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48102__auto__,c__48192__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto____0 = (function (){
var statearr_51530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51530[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto__);

(statearr_51530[(1)] = (1));

return statearr_51530;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto____1 = (function (state_51485){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_51485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e51531){if((e51531 instanceof Object)){
var ex__48106__auto__ = e51531;
var statearr_51532_51570 = state_51485;
(statearr_51532_51570[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51571 = state_51485;
state_51485 = G__51571;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto__ = function(state_51485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto____1.call(this,state_51485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__,msg_hist,msg_names,msg))
})();
var state__48194__auto__ = (function (){var statearr_51533 = f__48193__auto__.call(null);
(statearr_51533[(6)] = c__48192__auto__);

return statearr_51533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__,msg_hist,msg_names,msg))
);

return c__48192__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48192__auto___51600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___51600,ch){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___51600,ch){
return (function (state_51586){
var state_val_51587 = (state_51586[(1)]);
if((state_val_51587 === (1))){
var state_51586__$1 = state_51586;
var statearr_51588_51601 = state_51586__$1;
(statearr_51588_51601[(2)] = null);

(statearr_51588_51601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51587 === (2))){
var state_51586__$1 = state_51586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51586__$1,(4),ch);
} else {
if((state_val_51587 === (3))){
var inst_51584 = (state_51586[(2)]);
var state_51586__$1 = state_51586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51586__$1,inst_51584);
} else {
if((state_val_51587 === (4))){
var inst_51574 = (state_51586[(7)]);
var inst_51574__$1 = (state_51586[(2)]);
var state_51586__$1 = (function (){var statearr_51589 = state_51586;
(statearr_51589[(7)] = inst_51574__$1);

return statearr_51589;
})();
if(cljs.core.truth_(inst_51574__$1)){
var statearr_51590_51602 = state_51586__$1;
(statearr_51590_51602[(1)] = (5));

} else {
var statearr_51591_51603 = state_51586__$1;
(statearr_51591_51603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51587 === (5))){
var inst_51574 = (state_51586[(7)]);
var inst_51576 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51574);
var state_51586__$1 = state_51586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51586__$1,(8),inst_51576);
} else {
if((state_val_51587 === (6))){
var state_51586__$1 = state_51586;
var statearr_51592_51604 = state_51586__$1;
(statearr_51592_51604[(2)] = null);

(statearr_51592_51604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51587 === (7))){
var inst_51582 = (state_51586[(2)]);
var state_51586__$1 = state_51586;
var statearr_51593_51605 = state_51586__$1;
(statearr_51593_51605[(2)] = inst_51582);

(statearr_51593_51605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51587 === (8))){
var inst_51578 = (state_51586[(2)]);
var state_51586__$1 = (function (){var statearr_51594 = state_51586;
(statearr_51594[(8)] = inst_51578);

return statearr_51594;
})();
var statearr_51595_51606 = state_51586__$1;
(statearr_51595_51606[(2)] = null);

(statearr_51595_51606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__48192__auto___51600,ch))
;
return ((function (switch__48102__auto__,c__48192__auto___51600,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48103__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48103__auto____0 = (function (){
var statearr_51596 = [null,null,null,null,null,null,null,null,null];
(statearr_51596[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48103__auto__);

(statearr_51596[(1)] = (1));

return statearr_51596;
});
var figwheel$client$heads_up_plugin_$_state_machine__48103__auto____1 = (function (state_51586){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_51586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e51597){if((e51597 instanceof Object)){
var ex__48106__auto__ = e51597;
var statearr_51598_51607 = state_51586;
(statearr_51598_51607[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51608 = state_51586;
state_51586 = G__51608;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48103__auto__ = function(state_51586){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48103__auto____1.call(this,state_51586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48103__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48103__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___51600,ch))
})();
var state__48194__auto__ = (function (){var statearr_51599 = f__48193__auto__.call(null);
(statearr_51599[(6)] = c__48192__auto___51600);

return statearr_51599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___51600,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__){
return (function (state_51614){
var state_val_51615 = (state_51614[(1)]);
if((state_val_51615 === (1))){
var inst_51609 = cljs.core.async.timeout.call(null,(3000));
var state_51614__$1 = state_51614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51614__$1,(2),inst_51609);
} else {
if((state_val_51615 === (2))){
var inst_51611 = (state_51614[(2)]);
var inst_51612 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51614__$1 = (function (){var statearr_51616 = state_51614;
(statearr_51616[(7)] = inst_51611);

return statearr_51616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51614__$1,inst_51612);
} else {
return null;
}
}
});})(c__48192__auto__))
;
return ((function (switch__48102__auto__,c__48192__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48103__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48103__auto____0 = (function (){
var statearr_51617 = [null,null,null,null,null,null,null,null];
(statearr_51617[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48103__auto__);

(statearr_51617[(1)] = (1));

return statearr_51617;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48103__auto____1 = (function (state_51614){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_51614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e51618){if((e51618 instanceof Object)){
var ex__48106__auto__ = e51618;
var statearr_51619_51621 = state_51614;
(statearr_51619_51621[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51622 = state_51614;
state_51614 = G__51622;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48103__auto__ = function(state_51614){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48103__auto____1.call(this,state_51614);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48103__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48103__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__))
})();
var state__48194__auto__ = (function (){var statearr_51620 = f__48193__auto__.call(null);
(statearr_51620[(6)] = c__48192__auto__);

return statearr_51620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__))
);

return c__48192__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__,figwheel_version,temp__5457__auto__){
return (function (state_51629){
var state_val_51630 = (state_51629[(1)]);
if((state_val_51630 === (1))){
var inst_51623 = cljs.core.async.timeout.call(null,(2000));
var state_51629__$1 = state_51629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51629__$1,(2),inst_51623);
} else {
if((state_val_51630 === (2))){
var inst_51625 = (state_51629[(2)]);
var inst_51626 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51627 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51626);
var state_51629__$1 = (function (){var statearr_51631 = state_51629;
(statearr_51631[(7)] = inst_51625);

return statearr_51631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51629__$1,inst_51627);
} else {
return null;
}
}
});})(c__48192__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__48102__auto__,c__48192__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto____0 = (function (){
var statearr_51632 = [null,null,null,null,null,null,null,null];
(statearr_51632[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto__);

(statearr_51632[(1)] = (1));

return statearr_51632;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto____1 = (function (state_51629){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_51629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e51633){if((e51633 instanceof Object)){
var ex__48106__auto__ = e51633;
var statearr_51634_51636 = state_51629;
(statearr_51634_51636[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51637 = state_51629;
state_51629 = G__51637;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto__ = function(state_51629){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto____1.call(this,state_51629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__,figwheel_version,temp__5457__auto__))
})();
var state__48194__auto__ = (function (){var statearr_51635 = f__48193__auto__.call(null);
(statearr_51635[(6)] = c__48192__auto__);

return statearr_51635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__,figwheel_version,temp__5457__auto__))
);

return c__48192__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51638){
var map__51639 = p__51638;
var map__51639__$1 = ((((!((map__51639 == null)))?(((((map__51639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51639):map__51639);
var file = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51641 = "";
var G__51641__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51641),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51641);
var G__51641__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51641__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51641__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51641__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51641__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51642){
var map__51643 = p__51642;
var map__51643__$1 = ((((!((map__51643 == null)))?(((((map__51643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51643):map__51643);
var ed = map__51643__$1;
var formatted_exception = cljs.core.get.call(null,map__51643__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51643__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51643__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51645_51649 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51646_51650 = null;
var count__51647_51651 = (0);
var i__51648_51652 = (0);
while(true){
if((i__51648_51652 < count__51647_51651)){
var msg_51653 = cljs.core._nth.call(null,chunk__51646_51650,i__51648_51652);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51653);


var G__51654 = seq__51645_51649;
var G__51655 = chunk__51646_51650;
var G__51656 = count__51647_51651;
var G__51657 = (i__51648_51652 + (1));
seq__51645_51649 = G__51654;
chunk__51646_51650 = G__51655;
count__51647_51651 = G__51656;
i__51648_51652 = G__51657;
continue;
} else {
var temp__5457__auto___51658 = cljs.core.seq.call(null,seq__51645_51649);
if(temp__5457__auto___51658){
var seq__51645_51659__$1 = temp__5457__auto___51658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51645_51659__$1)){
var c__4319__auto___51660 = cljs.core.chunk_first.call(null,seq__51645_51659__$1);
var G__51661 = cljs.core.chunk_rest.call(null,seq__51645_51659__$1);
var G__51662 = c__4319__auto___51660;
var G__51663 = cljs.core.count.call(null,c__4319__auto___51660);
var G__51664 = (0);
seq__51645_51649 = G__51661;
chunk__51646_51650 = G__51662;
count__51647_51651 = G__51663;
i__51648_51652 = G__51664;
continue;
} else {
var msg_51665 = cljs.core.first.call(null,seq__51645_51659__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51665);


var G__51666 = cljs.core.next.call(null,seq__51645_51659__$1);
var G__51667 = null;
var G__51668 = (0);
var G__51669 = (0);
seq__51645_51649 = G__51666;
chunk__51646_51650 = G__51667;
count__51647_51651 = G__51668;
i__51648_51652 = G__51669;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51670){
var map__51671 = p__51670;
var map__51671__$1 = ((((!((map__51671 == null)))?(((((map__51671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51671):map__51671);
var w = map__51671__$1;
var message = cljs.core.get.call(null,map__51671__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51673 = cljs.core.seq.call(null,plugins);
var chunk__51674 = null;
var count__51675 = (0);
var i__51676 = (0);
while(true){
if((i__51676 < count__51675)){
var vec__51677 = cljs.core._nth.call(null,chunk__51674,i__51676);
var k = cljs.core.nth.call(null,vec__51677,(0),null);
var plugin = cljs.core.nth.call(null,vec__51677,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51683 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51673,chunk__51674,count__51675,i__51676,pl_51683,vec__51677,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51683.call(null,msg_hist);
});})(seq__51673,chunk__51674,count__51675,i__51676,pl_51683,vec__51677,k,plugin))
);
} else {
}


var G__51684 = seq__51673;
var G__51685 = chunk__51674;
var G__51686 = count__51675;
var G__51687 = (i__51676 + (1));
seq__51673 = G__51684;
chunk__51674 = G__51685;
count__51675 = G__51686;
i__51676 = G__51687;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51673);
if(temp__5457__auto__){
var seq__51673__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51673__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__51673__$1);
var G__51688 = cljs.core.chunk_rest.call(null,seq__51673__$1);
var G__51689 = c__4319__auto__;
var G__51690 = cljs.core.count.call(null,c__4319__auto__);
var G__51691 = (0);
seq__51673 = G__51688;
chunk__51674 = G__51689;
count__51675 = G__51690;
i__51676 = G__51691;
continue;
} else {
var vec__51680 = cljs.core.first.call(null,seq__51673__$1);
var k = cljs.core.nth.call(null,vec__51680,(0),null);
var plugin = cljs.core.nth.call(null,vec__51680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51692 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51673,chunk__51674,count__51675,i__51676,pl_51692,vec__51680,k,plugin,seq__51673__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51692.call(null,msg_hist);
});})(seq__51673,chunk__51674,count__51675,i__51676,pl_51692,vec__51680,k,plugin,seq__51673__$1,temp__5457__auto__))
);
} else {
}


var G__51693 = cljs.core.next.call(null,seq__51673__$1);
var G__51694 = null;
var G__51695 = (0);
var G__51696 = (0);
seq__51673 = G__51693;
chunk__51674 = G__51694;
count__51675 = G__51695;
i__51676 = G__51696;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51698 = arguments.length;
switch (G__51698) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51699_51704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51700_51705 = null;
var count__51701_51706 = (0);
var i__51702_51707 = (0);
while(true){
if((i__51702_51707 < count__51701_51706)){
var msg_51708 = cljs.core._nth.call(null,chunk__51700_51705,i__51702_51707);
figwheel.client.socket.handle_incoming_message.call(null,msg_51708);


var G__51709 = seq__51699_51704;
var G__51710 = chunk__51700_51705;
var G__51711 = count__51701_51706;
var G__51712 = (i__51702_51707 + (1));
seq__51699_51704 = G__51709;
chunk__51700_51705 = G__51710;
count__51701_51706 = G__51711;
i__51702_51707 = G__51712;
continue;
} else {
var temp__5457__auto___51713 = cljs.core.seq.call(null,seq__51699_51704);
if(temp__5457__auto___51713){
var seq__51699_51714__$1 = temp__5457__auto___51713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51699_51714__$1)){
var c__4319__auto___51715 = cljs.core.chunk_first.call(null,seq__51699_51714__$1);
var G__51716 = cljs.core.chunk_rest.call(null,seq__51699_51714__$1);
var G__51717 = c__4319__auto___51715;
var G__51718 = cljs.core.count.call(null,c__4319__auto___51715);
var G__51719 = (0);
seq__51699_51704 = G__51716;
chunk__51700_51705 = G__51717;
count__51701_51706 = G__51718;
i__51702_51707 = G__51719;
continue;
} else {
var msg_51720 = cljs.core.first.call(null,seq__51699_51714__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51720);


var G__51721 = cljs.core.next.call(null,seq__51699_51714__$1);
var G__51722 = null;
var G__51723 = (0);
var G__51724 = (0);
seq__51699_51704 = G__51721;
chunk__51700_51705 = G__51722;
count__51701_51706 = G__51723;
i__51702_51707 = G__51724;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___51729 = arguments.length;
var i__4500__auto___51730 = (0);
while(true){
if((i__4500__auto___51730 < len__4499__auto___51729)){
args__4502__auto__.push((arguments[i__4500__auto___51730]));

var G__51731 = (i__4500__auto___51730 + (1));
i__4500__auto___51730 = G__51731;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51726){
var map__51727 = p__51726;
var map__51727__$1 = ((((!((map__51727 == null)))?(((((map__51727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51727):map__51727);
var opts = map__51727__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51725){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51725));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51732){if((e51732 instanceof Error)){
var e = e51732;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51732;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51733){
var map__51734 = p__51733;
var map__51734__$1 = ((((!((map__51734 == null)))?(((((map__51734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51734):map__51734);
var msg_name = cljs.core.get.call(null,map__51734__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1526415202363
