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
}catch (e51248){if((e51248 instanceof Error)){
var e = e51248;
return "Error: Unable to stringify";
} else {
throw e51248;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51251 = arguments.length;
switch (G__51251) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51249_SHARP_){
if(typeof p1__51249_SHARP_ === 'string'){
return p1__51249_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51249_SHARP_);
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
var len__4499__auto___51254 = arguments.length;
var i__4500__auto___51255 = (0);
while(true){
if((i__4500__auto___51255 < len__4499__auto___51254)){
args__4502__auto__.push((arguments[i__4500__auto___51255]));

var G__51256 = (i__4500__auto___51255 + (1));
i__4500__auto___51255 = G__51256;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51253){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51253));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
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
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51257){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51257));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51261){
var map__51262 = p__51261;
var map__51262__$1 = ((((!((map__51262 == null)))?(((((map__51262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51262):map__51262);
var message = cljs.core.get.call(null,map__51262__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51262__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__48188__auto___51341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___51341,ch){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___51341,ch){
return (function (state_51313){
var state_val_51314 = (state_51313[(1)]);
if((state_val_51314 === (7))){
var inst_51309 = (state_51313[(2)]);
var state_51313__$1 = state_51313;
var statearr_51315_51342 = state_51313__$1;
(statearr_51315_51342[(2)] = inst_51309);

(statearr_51315_51342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (1))){
var state_51313__$1 = state_51313;
var statearr_51316_51343 = state_51313__$1;
(statearr_51316_51343[(2)] = null);

(statearr_51316_51343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (4))){
var inst_51266 = (state_51313[(7)]);
var inst_51266__$1 = (state_51313[(2)]);
var state_51313__$1 = (function (){var statearr_51317 = state_51313;
(statearr_51317[(7)] = inst_51266__$1);

return statearr_51317;
})();
if(cljs.core.truth_(inst_51266__$1)){
var statearr_51318_51344 = state_51313__$1;
(statearr_51318_51344[(1)] = (5));

} else {
var statearr_51319_51345 = state_51313__$1;
(statearr_51319_51345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (15))){
var inst_51273 = (state_51313[(8)]);
var inst_51288 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51273);
var inst_51289 = cljs.core.first.call(null,inst_51288);
var inst_51290 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51289);
var inst_51291 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51290)].join('');
var inst_51292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51291);
var state_51313__$1 = state_51313;
var statearr_51320_51346 = state_51313__$1;
(statearr_51320_51346[(2)] = inst_51292);

(statearr_51320_51346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (13))){
var inst_51297 = (state_51313[(2)]);
var state_51313__$1 = state_51313;
var statearr_51321_51347 = state_51313__$1;
(statearr_51321_51347[(2)] = inst_51297);

(statearr_51321_51347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (6))){
var state_51313__$1 = state_51313;
var statearr_51322_51348 = state_51313__$1;
(statearr_51322_51348[(2)] = null);

(statearr_51322_51348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (17))){
var inst_51295 = (state_51313[(2)]);
var state_51313__$1 = state_51313;
var statearr_51323_51349 = state_51313__$1;
(statearr_51323_51349[(2)] = inst_51295);

(statearr_51323_51349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (3))){
var inst_51311 = (state_51313[(2)]);
var state_51313__$1 = state_51313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51313__$1,inst_51311);
} else {
if((state_val_51314 === (12))){
var inst_51272 = (state_51313[(9)]);
var inst_51286 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51272,opts);
var state_51313__$1 = state_51313;
if(cljs.core.truth_(inst_51286)){
var statearr_51324_51350 = state_51313__$1;
(statearr_51324_51350[(1)] = (15));

} else {
var statearr_51325_51351 = state_51313__$1;
(statearr_51325_51351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (2))){
var state_51313__$1 = state_51313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51313__$1,(4),ch);
} else {
if((state_val_51314 === (11))){
var inst_51273 = (state_51313[(8)]);
var inst_51278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51279 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51273);
var inst_51280 = cljs.core.async.timeout.call(null,(1000));
var inst_51281 = [inst_51279,inst_51280];
var inst_51282 = (new cljs.core.PersistentVector(null,2,(5),inst_51278,inst_51281,null));
var state_51313__$1 = state_51313;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51313__$1,(14),inst_51282);
} else {
if((state_val_51314 === (9))){
var inst_51273 = (state_51313[(8)]);
var inst_51299 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51300 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51273);
var inst_51301 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51300);
var inst_51302 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51301)].join('');
var inst_51303 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51302);
var state_51313__$1 = (function (){var statearr_51326 = state_51313;
(statearr_51326[(10)] = inst_51299);

return statearr_51326;
})();
var statearr_51327_51352 = state_51313__$1;
(statearr_51327_51352[(2)] = inst_51303);

(statearr_51327_51352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (5))){
var inst_51266 = (state_51313[(7)]);
var inst_51268 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51269 = (new cljs.core.PersistentArrayMap(null,2,inst_51268,null));
var inst_51270 = (new cljs.core.PersistentHashSet(null,inst_51269,null));
var inst_51271 = figwheel.client.focus_msgs.call(null,inst_51270,inst_51266);
var inst_51272 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51271);
var inst_51273 = cljs.core.first.call(null,inst_51271);
var inst_51274 = figwheel.client.autoload_QMARK_.call(null);
var state_51313__$1 = (function (){var statearr_51328 = state_51313;
(statearr_51328[(9)] = inst_51272);

(statearr_51328[(8)] = inst_51273);

return statearr_51328;
})();
if(cljs.core.truth_(inst_51274)){
var statearr_51329_51353 = state_51313__$1;
(statearr_51329_51353[(1)] = (8));

} else {
var statearr_51330_51354 = state_51313__$1;
(statearr_51330_51354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (14))){
var inst_51284 = (state_51313[(2)]);
var state_51313__$1 = state_51313;
var statearr_51331_51355 = state_51313__$1;
(statearr_51331_51355[(2)] = inst_51284);

(statearr_51331_51355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (16))){
var state_51313__$1 = state_51313;
var statearr_51332_51356 = state_51313__$1;
(statearr_51332_51356[(2)] = null);

(statearr_51332_51356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (10))){
var inst_51305 = (state_51313[(2)]);
var state_51313__$1 = (function (){var statearr_51333 = state_51313;
(statearr_51333[(11)] = inst_51305);

return statearr_51333;
})();
var statearr_51334_51357 = state_51313__$1;
(statearr_51334_51357[(2)] = null);

(statearr_51334_51357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51314 === (8))){
var inst_51272 = (state_51313[(9)]);
var inst_51276 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51272,opts);
var state_51313__$1 = state_51313;
if(cljs.core.truth_(inst_51276)){
var statearr_51335_51358 = state_51313__$1;
(statearr_51335_51358[(1)] = (11));

} else {
var statearr_51336_51359 = state_51313__$1;
(statearr_51336_51359[(1)] = (12));

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
});})(c__48188__auto___51341,ch))
;
return ((function (switch__48098__auto__,c__48188__auto___51341,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48099__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48099__auto____0 = (function (){
var statearr_51337 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51337[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48099__auto__);

(statearr_51337[(1)] = (1));

return statearr_51337;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48099__auto____1 = (function (state_51313){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_51313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e51338){if((e51338 instanceof Object)){
var ex__48102__auto__ = e51338;
var statearr_51339_51360 = state_51313;
(statearr_51339_51360[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51361 = state_51313;
state_51313 = G__51361;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48099__auto__ = function(state_51313){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48099__auto____1.call(this,state_51313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48099__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48099__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___51341,ch))
})();
var state__48190__auto__ = (function (){var statearr_51340 = f__48189__auto__.call(null);
(statearr_51340[(6)] = c__48188__auto___51341);

return statearr_51340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___51341,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51362_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51362_SHARP_));
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
var base_path_51366 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51366){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_51364 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_51365 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_51364,_STAR_print_fn_STAR_51365,sb,base_path_51366){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_51364,_STAR_print_fn_STAR_51365,sb,base_path_51366))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_51365;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_51364;
}}catch (e51363){if((e51363 instanceof Error)){
var e = e51363;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51366], null));
} else {
var e = e51363;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_51366))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51367){
var map__51368 = p__51367;
var map__51368__$1 = ((((!((map__51368 == null)))?(((((map__51368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51368):map__51368);
var opts = map__51368__$1;
var build_id = cljs.core.get.call(null,map__51368__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51368,map__51368__$1,opts,build_id){
return (function (p__51370){
var vec__51371 = p__51370;
var seq__51372 = cljs.core.seq.call(null,vec__51371);
var first__51373 = cljs.core.first.call(null,seq__51372);
var seq__51372__$1 = cljs.core.next.call(null,seq__51372);
var map__51374 = first__51373;
var map__51374__$1 = ((((!((map__51374 == null)))?(((((map__51374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51374):map__51374);
var msg = map__51374__$1;
var msg_name = cljs.core.get.call(null,map__51374__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51372__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51371,seq__51372,first__51373,seq__51372__$1,map__51374,map__51374__$1,msg,msg_name,_,map__51368,map__51368__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51371,seq__51372,first__51373,seq__51372__$1,map__51374,map__51374__$1,msg,msg_name,_,map__51368,map__51368__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51368,map__51368__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51376){
var vec__51377 = p__51376;
var seq__51378 = cljs.core.seq.call(null,vec__51377);
var first__51379 = cljs.core.first.call(null,seq__51378);
var seq__51378__$1 = cljs.core.next.call(null,seq__51378);
var map__51380 = first__51379;
var map__51380__$1 = ((((!((map__51380 == null)))?(((((map__51380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51380):map__51380);
var msg = map__51380__$1;
var msg_name = cljs.core.get.call(null,map__51380__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51378__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51382){
var map__51383 = p__51382;
var map__51383__$1 = ((((!((map__51383 == null)))?(((((map__51383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51383):map__51383);
var on_compile_warning = cljs.core.get.call(null,map__51383__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51383__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51383,map__51383__$1,on_compile_warning,on_compile_fail){
return (function (p__51385){
var vec__51386 = p__51385;
var seq__51387 = cljs.core.seq.call(null,vec__51386);
var first__51388 = cljs.core.first.call(null,seq__51387);
var seq__51387__$1 = cljs.core.next.call(null,seq__51387);
var map__51389 = first__51388;
var map__51389__$1 = ((((!((map__51389 == null)))?(((((map__51389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51389):map__51389);
var msg = map__51389__$1;
var msg_name = cljs.core.get.call(null,map__51389__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51387__$1;
var pred__51391 = cljs.core._EQ_;
var expr__51392 = msg_name;
if(cljs.core.truth_(pred__51391.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51392))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51391.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51392))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51383,map__51383__$1,on_compile_warning,on_compile_fail))
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
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__,msg_hist,msg_names,msg){
return (function (state_51481){
var state_val_51482 = (state_51481[(1)]);
if((state_val_51482 === (7))){
var inst_51401 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51401)){
var statearr_51483_51530 = state_51481__$1;
(statearr_51483_51530[(1)] = (8));

} else {
var statearr_51484_51531 = state_51481__$1;
(statearr_51484_51531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (20))){
var inst_51475 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51485_51532 = state_51481__$1;
(statearr_51485_51532[(2)] = inst_51475);

(statearr_51485_51532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (27))){
var inst_51471 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51486_51533 = state_51481__$1;
(statearr_51486_51533[(2)] = inst_51471);

(statearr_51486_51533[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (1))){
var inst_51394 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51394)){
var statearr_51487_51534 = state_51481__$1;
(statearr_51487_51534[(1)] = (2));

} else {
var statearr_51488_51535 = state_51481__$1;
(statearr_51488_51535[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (24))){
var inst_51473 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51489_51536 = state_51481__$1;
(statearr_51489_51536[(2)] = inst_51473);

(statearr_51489_51536[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (4))){
var inst_51479 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51481__$1,inst_51479);
} else {
if((state_val_51482 === (15))){
var inst_51477 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51490_51537 = state_51481__$1;
(statearr_51490_51537[(2)] = inst_51477);

(statearr_51490_51537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (21))){
var inst_51430 = (state_51481[(2)]);
var inst_51431 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51432 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51431);
var state_51481__$1 = (function (){var statearr_51491 = state_51481;
(statearr_51491[(7)] = inst_51430);

return statearr_51491;
})();
var statearr_51492_51538 = state_51481__$1;
(statearr_51492_51538[(2)] = inst_51432);

(statearr_51492_51538[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (31))){
var inst_51460 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51460)){
var statearr_51493_51539 = state_51481__$1;
(statearr_51493_51539[(1)] = (34));

} else {
var statearr_51494_51540 = state_51481__$1;
(statearr_51494_51540[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (32))){
var inst_51469 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51495_51541 = state_51481__$1;
(statearr_51495_51541[(2)] = inst_51469);

(statearr_51495_51541[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (33))){
var inst_51456 = (state_51481[(2)]);
var inst_51457 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51458 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51457);
var state_51481__$1 = (function (){var statearr_51496 = state_51481;
(statearr_51496[(8)] = inst_51456);

return statearr_51496;
})();
var statearr_51497_51542 = state_51481__$1;
(statearr_51497_51542[(2)] = inst_51458);

(statearr_51497_51542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (13))){
var inst_51415 = figwheel.client.heads_up.clear.call(null);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(16),inst_51415);
} else {
if((state_val_51482 === (22))){
var inst_51436 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51437 = figwheel.client.heads_up.append_warning_message.call(null,inst_51436);
var state_51481__$1 = state_51481;
var statearr_51498_51543 = state_51481__$1;
(statearr_51498_51543[(2)] = inst_51437);

(statearr_51498_51543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (36))){
var inst_51467 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51499_51544 = state_51481__$1;
(statearr_51499_51544[(2)] = inst_51467);

(statearr_51499_51544[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (29))){
var inst_51447 = (state_51481[(2)]);
var inst_51448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51449 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51448);
var state_51481__$1 = (function (){var statearr_51500 = state_51481;
(statearr_51500[(9)] = inst_51447);

return statearr_51500;
})();
var statearr_51501_51545 = state_51481__$1;
(statearr_51501_51545[(2)] = inst_51449);

(statearr_51501_51545[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (6))){
var inst_51396 = (state_51481[(10)]);
var state_51481__$1 = state_51481;
var statearr_51502_51546 = state_51481__$1;
(statearr_51502_51546[(2)] = inst_51396);

(statearr_51502_51546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (28))){
var inst_51443 = (state_51481[(2)]);
var inst_51444 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51445 = figwheel.client.heads_up.display_warning.call(null,inst_51444);
var state_51481__$1 = (function (){var statearr_51503 = state_51481;
(statearr_51503[(11)] = inst_51443);

return statearr_51503;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(29),inst_51445);
} else {
if((state_val_51482 === (25))){
var inst_51441 = figwheel.client.heads_up.clear.call(null);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(28),inst_51441);
} else {
if((state_val_51482 === (34))){
var inst_51462 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(37),inst_51462);
} else {
if((state_val_51482 === (17))){
var inst_51421 = (state_51481[(2)]);
var inst_51422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51423 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51422);
var state_51481__$1 = (function (){var statearr_51504 = state_51481;
(statearr_51504[(12)] = inst_51421);

return statearr_51504;
})();
var statearr_51505_51547 = state_51481__$1;
(statearr_51505_51547[(2)] = inst_51423);

(statearr_51505_51547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (3))){
var inst_51413 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51413)){
var statearr_51506_51548 = state_51481__$1;
(statearr_51506_51548[(1)] = (13));

} else {
var statearr_51507_51549 = state_51481__$1;
(statearr_51507_51549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (12))){
var inst_51409 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51508_51550 = state_51481__$1;
(statearr_51508_51550[(2)] = inst_51409);

(statearr_51508_51550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (2))){
var inst_51396 = (state_51481[(10)]);
var inst_51396__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51481__$1 = (function (){var statearr_51509 = state_51481;
(statearr_51509[(10)] = inst_51396__$1);

return statearr_51509;
})();
if(cljs.core.truth_(inst_51396__$1)){
var statearr_51510_51551 = state_51481__$1;
(statearr_51510_51551[(1)] = (5));

} else {
var statearr_51511_51552 = state_51481__$1;
(statearr_51511_51552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (23))){
var inst_51439 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51439)){
var statearr_51512_51553 = state_51481__$1;
(statearr_51512_51553[(1)] = (25));

} else {
var statearr_51513_51554 = state_51481__$1;
(statearr_51513_51554[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (35))){
var state_51481__$1 = state_51481;
var statearr_51514_51555 = state_51481__$1;
(statearr_51514_51555[(2)] = null);

(statearr_51514_51555[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (19))){
var inst_51434 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51434)){
var statearr_51515_51556 = state_51481__$1;
(statearr_51515_51556[(1)] = (22));

} else {
var statearr_51516_51557 = state_51481__$1;
(statearr_51516_51557[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (11))){
var inst_51405 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51517_51558 = state_51481__$1;
(statearr_51517_51558[(2)] = inst_51405);

(statearr_51517_51558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (9))){
var inst_51407 = figwheel.client.heads_up.clear.call(null);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(12),inst_51407);
} else {
if((state_val_51482 === (5))){
var inst_51398 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51481__$1 = state_51481;
var statearr_51518_51559 = state_51481__$1;
(statearr_51518_51559[(2)] = inst_51398);

(statearr_51518_51559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (14))){
var inst_51425 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51425)){
var statearr_51519_51560 = state_51481__$1;
(statearr_51519_51560[(1)] = (18));

} else {
var statearr_51520_51561 = state_51481__$1;
(statearr_51520_51561[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (26))){
var inst_51451 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51481__$1 = state_51481;
if(cljs.core.truth_(inst_51451)){
var statearr_51521_51562 = state_51481__$1;
(statearr_51521_51562[(1)] = (30));

} else {
var statearr_51522_51563 = state_51481__$1;
(statearr_51522_51563[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (16))){
var inst_51417 = (state_51481[(2)]);
var inst_51418 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51419 = figwheel.client.heads_up.display_exception.call(null,inst_51418);
var state_51481__$1 = (function (){var statearr_51523 = state_51481;
(statearr_51523[(13)] = inst_51417);

return statearr_51523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(17),inst_51419);
} else {
if((state_val_51482 === (30))){
var inst_51453 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51454 = figwheel.client.heads_up.display_warning.call(null,inst_51453);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(33),inst_51454);
} else {
if((state_val_51482 === (10))){
var inst_51411 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51524_51564 = state_51481__$1;
(statearr_51524_51564[(2)] = inst_51411);

(statearr_51524_51564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (18))){
var inst_51427 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51428 = figwheel.client.heads_up.display_exception.call(null,inst_51427);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(21),inst_51428);
} else {
if((state_val_51482 === (37))){
var inst_51464 = (state_51481[(2)]);
var state_51481__$1 = state_51481;
var statearr_51525_51565 = state_51481__$1;
(statearr_51525_51565[(2)] = inst_51464);

(statearr_51525_51565[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51482 === (8))){
var inst_51403 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51481__$1 = state_51481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51481__$1,(11),inst_51403);
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
});})(c__48188__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48098__auto__,c__48188__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto____0 = (function (){
var statearr_51526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51526[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto__);

(statearr_51526[(1)] = (1));

return statearr_51526;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto____1 = (function (state_51481){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_51481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e51527){if((e51527 instanceof Object)){
var ex__48102__auto__ = e51527;
var statearr_51528_51566 = state_51481;
(statearr_51528_51566[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51567 = state_51481;
state_51481 = G__51567;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto__ = function(state_51481){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto____1.call(this,state_51481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__,msg_hist,msg_names,msg))
})();
var state__48190__auto__ = (function (){var statearr_51529 = f__48189__auto__.call(null);
(statearr_51529[(6)] = c__48188__auto__);

return statearr_51529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__,msg_hist,msg_names,msg))
);

return c__48188__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48188__auto___51596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___51596,ch){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___51596,ch){
return (function (state_51582){
var state_val_51583 = (state_51582[(1)]);
if((state_val_51583 === (1))){
var state_51582__$1 = state_51582;
var statearr_51584_51597 = state_51582__$1;
(statearr_51584_51597[(2)] = null);

(statearr_51584_51597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51583 === (2))){
var state_51582__$1 = state_51582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51582__$1,(4),ch);
} else {
if((state_val_51583 === (3))){
var inst_51580 = (state_51582[(2)]);
var state_51582__$1 = state_51582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51582__$1,inst_51580);
} else {
if((state_val_51583 === (4))){
var inst_51570 = (state_51582[(7)]);
var inst_51570__$1 = (state_51582[(2)]);
var state_51582__$1 = (function (){var statearr_51585 = state_51582;
(statearr_51585[(7)] = inst_51570__$1);

return statearr_51585;
})();
if(cljs.core.truth_(inst_51570__$1)){
var statearr_51586_51598 = state_51582__$1;
(statearr_51586_51598[(1)] = (5));

} else {
var statearr_51587_51599 = state_51582__$1;
(statearr_51587_51599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51583 === (5))){
var inst_51570 = (state_51582[(7)]);
var inst_51572 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51570);
var state_51582__$1 = state_51582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51582__$1,(8),inst_51572);
} else {
if((state_val_51583 === (6))){
var state_51582__$1 = state_51582;
var statearr_51588_51600 = state_51582__$1;
(statearr_51588_51600[(2)] = null);

(statearr_51588_51600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51583 === (7))){
var inst_51578 = (state_51582[(2)]);
var state_51582__$1 = state_51582;
var statearr_51589_51601 = state_51582__$1;
(statearr_51589_51601[(2)] = inst_51578);

(statearr_51589_51601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51583 === (8))){
var inst_51574 = (state_51582[(2)]);
var state_51582__$1 = (function (){var statearr_51590 = state_51582;
(statearr_51590[(8)] = inst_51574);

return statearr_51590;
})();
var statearr_51591_51602 = state_51582__$1;
(statearr_51591_51602[(2)] = null);

(statearr_51591_51602[(1)] = (2));


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
});})(c__48188__auto___51596,ch))
;
return ((function (switch__48098__auto__,c__48188__auto___51596,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48099__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48099__auto____0 = (function (){
var statearr_51592 = [null,null,null,null,null,null,null,null,null];
(statearr_51592[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48099__auto__);

(statearr_51592[(1)] = (1));

return statearr_51592;
});
var figwheel$client$heads_up_plugin_$_state_machine__48099__auto____1 = (function (state_51582){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_51582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e51593){if((e51593 instanceof Object)){
var ex__48102__auto__ = e51593;
var statearr_51594_51603 = state_51582;
(statearr_51594_51603[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51604 = state_51582;
state_51582 = G__51604;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48099__auto__ = function(state_51582){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48099__auto____1.call(this,state_51582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48099__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48099__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___51596,ch))
})();
var state__48190__auto__ = (function (){var statearr_51595 = f__48189__auto__.call(null);
(statearr_51595[(6)] = c__48188__auto___51596);

return statearr_51595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___51596,ch))
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
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__){
return (function (state_51610){
var state_val_51611 = (state_51610[(1)]);
if((state_val_51611 === (1))){
var inst_51605 = cljs.core.async.timeout.call(null,(3000));
var state_51610__$1 = state_51610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51610__$1,(2),inst_51605);
} else {
if((state_val_51611 === (2))){
var inst_51607 = (state_51610[(2)]);
var inst_51608 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51610__$1 = (function (){var statearr_51612 = state_51610;
(statearr_51612[(7)] = inst_51607);

return statearr_51612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51610__$1,inst_51608);
} else {
return null;
}
}
});})(c__48188__auto__))
;
return ((function (switch__48098__auto__,c__48188__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48099__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48099__auto____0 = (function (){
var statearr_51613 = [null,null,null,null,null,null,null,null];
(statearr_51613[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48099__auto__);

(statearr_51613[(1)] = (1));

return statearr_51613;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48099__auto____1 = (function (state_51610){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_51610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e51614){if((e51614 instanceof Object)){
var ex__48102__auto__ = e51614;
var statearr_51615_51617 = state_51610;
(statearr_51615_51617[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51618 = state_51610;
state_51610 = G__51618;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48099__auto__ = function(state_51610){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48099__auto____1.call(this,state_51610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48099__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48099__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__))
})();
var state__48190__auto__ = (function (){var statearr_51616 = f__48189__auto__.call(null);
(statearr_51616[(6)] = c__48188__auto__);

return statearr_51616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__))
);

return c__48188__auto__;
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
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__,figwheel_version,temp__5457__auto__){
return (function (state_51625){
var state_val_51626 = (state_51625[(1)]);
if((state_val_51626 === (1))){
var inst_51619 = cljs.core.async.timeout.call(null,(2000));
var state_51625__$1 = state_51625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51625__$1,(2),inst_51619);
} else {
if((state_val_51626 === (2))){
var inst_51621 = (state_51625[(2)]);
var inst_51622 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51623 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51622);
var state_51625__$1 = (function (){var statearr_51627 = state_51625;
(statearr_51627[(7)] = inst_51621);

return statearr_51627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51625__$1,inst_51623);
} else {
return null;
}
}
});})(c__48188__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__48098__auto__,c__48188__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto____0 = (function (){
var statearr_51628 = [null,null,null,null,null,null,null,null];
(statearr_51628[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto__);

(statearr_51628[(1)] = (1));

return statearr_51628;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto____1 = (function (state_51625){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_51625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e51629){if((e51629 instanceof Object)){
var ex__48102__auto__ = e51629;
var statearr_51630_51632 = state_51625;
(statearr_51630_51632[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51633 = state_51625;
state_51625 = G__51633;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto__ = function(state_51625){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto____1.call(this,state_51625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__,figwheel_version,temp__5457__auto__))
})();
var state__48190__auto__ = (function (){var statearr_51631 = f__48189__auto__.call(null);
(statearr_51631[(6)] = c__48188__auto__);

return statearr_51631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__,figwheel_version,temp__5457__auto__))
);

return c__48188__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51634){
var map__51635 = p__51634;
var map__51635__$1 = ((((!((map__51635 == null)))?(((((map__51635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51635):map__51635);
var file = cljs.core.get.call(null,map__51635__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51635__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51635__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51637 = "";
var G__51637__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51637),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51637);
var G__51637__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51637__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51637__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51637__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51637__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51638){
var map__51639 = p__51638;
var map__51639__$1 = ((((!((map__51639 == null)))?(((((map__51639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51639):map__51639);
var ed = map__51639__$1;
var formatted_exception = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51641_51645 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51642_51646 = null;
var count__51643_51647 = (0);
var i__51644_51648 = (0);
while(true){
if((i__51644_51648 < count__51643_51647)){
var msg_51649 = cljs.core._nth.call(null,chunk__51642_51646,i__51644_51648);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51649);


var G__51650 = seq__51641_51645;
var G__51651 = chunk__51642_51646;
var G__51652 = count__51643_51647;
var G__51653 = (i__51644_51648 + (1));
seq__51641_51645 = G__51650;
chunk__51642_51646 = G__51651;
count__51643_51647 = G__51652;
i__51644_51648 = G__51653;
continue;
} else {
var temp__5457__auto___51654 = cljs.core.seq.call(null,seq__51641_51645);
if(temp__5457__auto___51654){
var seq__51641_51655__$1 = temp__5457__auto___51654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51641_51655__$1)){
var c__4319__auto___51656 = cljs.core.chunk_first.call(null,seq__51641_51655__$1);
var G__51657 = cljs.core.chunk_rest.call(null,seq__51641_51655__$1);
var G__51658 = c__4319__auto___51656;
var G__51659 = cljs.core.count.call(null,c__4319__auto___51656);
var G__51660 = (0);
seq__51641_51645 = G__51657;
chunk__51642_51646 = G__51658;
count__51643_51647 = G__51659;
i__51644_51648 = G__51660;
continue;
} else {
var msg_51661 = cljs.core.first.call(null,seq__51641_51655__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51661);


var G__51662 = cljs.core.next.call(null,seq__51641_51655__$1);
var G__51663 = null;
var G__51664 = (0);
var G__51665 = (0);
seq__51641_51645 = G__51662;
chunk__51642_51646 = G__51663;
count__51643_51647 = G__51664;
i__51644_51648 = G__51665;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51666){
var map__51667 = p__51666;
var map__51667__$1 = ((((!((map__51667 == null)))?(((((map__51667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51667):map__51667);
var w = map__51667__$1;
var message = cljs.core.get.call(null,map__51667__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__51669 = cljs.core.seq.call(null,plugins);
var chunk__51670 = null;
var count__51671 = (0);
var i__51672 = (0);
while(true){
if((i__51672 < count__51671)){
var vec__51673 = cljs.core._nth.call(null,chunk__51670,i__51672);
var k = cljs.core.nth.call(null,vec__51673,(0),null);
var plugin = cljs.core.nth.call(null,vec__51673,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51679 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51669,chunk__51670,count__51671,i__51672,pl_51679,vec__51673,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51679.call(null,msg_hist);
});})(seq__51669,chunk__51670,count__51671,i__51672,pl_51679,vec__51673,k,plugin))
);
} else {
}


var G__51680 = seq__51669;
var G__51681 = chunk__51670;
var G__51682 = count__51671;
var G__51683 = (i__51672 + (1));
seq__51669 = G__51680;
chunk__51670 = G__51681;
count__51671 = G__51682;
i__51672 = G__51683;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__51669);
if(temp__5457__auto__){
var seq__51669__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51669__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__51669__$1);
var G__51684 = cljs.core.chunk_rest.call(null,seq__51669__$1);
var G__51685 = c__4319__auto__;
var G__51686 = cljs.core.count.call(null,c__4319__auto__);
var G__51687 = (0);
seq__51669 = G__51684;
chunk__51670 = G__51685;
count__51671 = G__51686;
i__51672 = G__51687;
continue;
} else {
var vec__51676 = cljs.core.first.call(null,seq__51669__$1);
var k = cljs.core.nth.call(null,vec__51676,(0),null);
var plugin = cljs.core.nth.call(null,vec__51676,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51688 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51669,chunk__51670,count__51671,i__51672,pl_51688,vec__51676,k,plugin,seq__51669__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51688.call(null,msg_hist);
});})(seq__51669,chunk__51670,count__51671,i__51672,pl_51688,vec__51676,k,plugin,seq__51669__$1,temp__5457__auto__))
);
} else {
}


var G__51689 = cljs.core.next.call(null,seq__51669__$1);
var G__51690 = null;
var G__51691 = (0);
var G__51692 = (0);
seq__51669 = G__51689;
chunk__51670 = G__51690;
count__51671 = G__51691;
i__51672 = G__51692;
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
var G__51694 = arguments.length;
switch (G__51694) {
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

var seq__51695_51700 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51696_51701 = null;
var count__51697_51702 = (0);
var i__51698_51703 = (0);
while(true){
if((i__51698_51703 < count__51697_51702)){
var msg_51704 = cljs.core._nth.call(null,chunk__51696_51701,i__51698_51703);
figwheel.client.socket.handle_incoming_message.call(null,msg_51704);


var G__51705 = seq__51695_51700;
var G__51706 = chunk__51696_51701;
var G__51707 = count__51697_51702;
var G__51708 = (i__51698_51703 + (1));
seq__51695_51700 = G__51705;
chunk__51696_51701 = G__51706;
count__51697_51702 = G__51707;
i__51698_51703 = G__51708;
continue;
} else {
var temp__5457__auto___51709 = cljs.core.seq.call(null,seq__51695_51700);
if(temp__5457__auto___51709){
var seq__51695_51710__$1 = temp__5457__auto___51709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51695_51710__$1)){
var c__4319__auto___51711 = cljs.core.chunk_first.call(null,seq__51695_51710__$1);
var G__51712 = cljs.core.chunk_rest.call(null,seq__51695_51710__$1);
var G__51713 = c__4319__auto___51711;
var G__51714 = cljs.core.count.call(null,c__4319__auto___51711);
var G__51715 = (0);
seq__51695_51700 = G__51712;
chunk__51696_51701 = G__51713;
count__51697_51702 = G__51714;
i__51698_51703 = G__51715;
continue;
} else {
var msg_51716 = cljs.core.first.call(null,seq__51695_51710__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51716);


var G__51717 = cljs.core.next.call(null,seq__51695_51710__$1);
var G__51718 = null;
var G__51719 = (0);
var G__51720 = (0);
seq__51695_51700 = G__51717;
chunk__51696_51701 = G__51718;
count__51697_51702 = G__51719;
i__51698_51703 = G__51720;
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
var len__4499__auto___51725 = arguments.length;
var i__4500__auto___51726 = (0);
while(true){
if((i__4500__auto___51726 < len__4499__auto___51725)){
args__4502__auto__.push((arguments[i__4500__auto___51726]));

var G__51727 = (i__4500__auto___51726 + (1));
i__4500__auto___51726 = G__51727;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51722){
var map__51723 = p__51722;
var map__51723__$1 = ((((!((map__51723 == null)))?(((((map__51723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51723):map__51723);
var opts = map__51723__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51721){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51721));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51728){if((e51728 instanceof Error)){
var e = e51728;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51728;

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
return (function (p__51729){
var map__51730 = p__51729;
var map__51730__$1 = ((((!((map__51730 == null)))?(((((map__51730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51730):map__51730);
var msg_name = cljs.core.get.call(null,map__51730__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1524683843267
