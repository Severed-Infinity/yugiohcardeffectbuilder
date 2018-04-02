// Compiled by ClojureScript 1.9.946 {}
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
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e54381){if((e54381 instanceof Error)){
var e = e54381;
return "Error: Unable to stringify";
} else {
throw e54381;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__54384 = arguments.length;
switch (G__54384) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__54382_SHARP_){
if(typeof p1__54382_SHARP_ === 'string'){
return p1__54382_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__54382_SHARP_);
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
var args__48366__auto__ = [];
var len__48359__auto___54387 = arguments.length;
var i__48360__auto___54388 = (0);
while(true){
if((i__48360__auto___54388 < len__48359__auto___54387)){
args__48366__auto__.push((arguments[i__48360__auto___54388]));

var G__54389 = (i__48360__auto___54388 + (1));
i__48360__auto___54388 = G__54389;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54386){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54386));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__48366__auto__ = [];
var len__48359__auto___54391 = arguments.length;
var i__48360__auto___54392 = (0);
while(true){
if((i__48360__auto___54392 < len__48359__auto___54391)){
args__48366__auto__.push((arguments[i__48360__auto___54392]));

var G__54393 = (i__48360__auto___54392 + (1));
i__48360__auto___54392 = G__54393;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54390){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54390));
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
if((b === true) || (b === false)){
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
if((b === true) || (b === false)){
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54394){
var map__54395 = p__54394;
var map__54395__$1 = ((((!((map__54395 == null)))?((((map__54395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54395):map__54395);
var message = cljs.core.get.call(null,map__54395__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54395__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__47188__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__47176__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__47176__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__47176__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
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
var c__50541__auto___54474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___54474,ch){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___54474,ch){
return (function (state_54446){
var state_val_54447 = (state_54446[(1)]);
if((state_val_54447 === (7))){
var inst_54442 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
var statearr_54448_54475 = state_54446__$1;
(statearr_54448_54475[(2)] = inst_54442);

(statearr_54448_54475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (1))){
var state_54446__$1 = state_54446;
var statearr_54449_54476 = state_54446__$1;
(statearr_54449_54476[(2)] = null);

(statearr_54449_54476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (4))){
var inst_54399 = (state_54446[(7)]);
var inst_54399__$1 = (state_54446[(2)]);
var state_54446__$1 = (function (){var statearr_54450 = state_54446;
(statearr_54450[(7)] = inst_54399__$1);

return statearr_54450;
})();
if(cljs.core.truth_(inst_54399__$1)){
var statearr_54451_54477 = state_54446__$1;
(statearr_54451_54477[(1)] = (5));

} else {
var statearr_54452_54478 = state_54446__$1;
(statearr_54452_54478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (15))){
var inst_54406 = (state_54446[(8)]);
var inst_54421 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54406);
var inst_54422 = cljs.core.first.call(null,inst_54421);
var inst_54423 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54422);
var inst_54424 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54423)].join('');
var inst_54425 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54424);
var state_54446__$1 = state_54446;
var statearr_54453_54479 = state_54446__$1;
(statearr_54453_54479[(2)] = inst_54425);

(statearr_54453_54479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (13))){
var inst_54430 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
var statearr_54454_54480 = state_54446__$1;
(statearr_54454_54480[(2)] = inst_54430);

(statearr_54454_54480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (6))){
var state_54446__$1 = state_54446;
var statearr_54455_54481 = state_54446__$1;
(statearr_54455_54481[(2)] = null);

(statearr_54455_54481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (17))){
var inst_54428 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
var statearr_54456_54482 = state_54446__$1;
(statearr_54456_54482[(2)] = inst_54428);

(statearr_54456_54482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (3))){
var inst_54444 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54446__$1,inst_54444);
} else {
if((state_val_54447 === (12))){
var inst_54405 = (state_54446[(9)]);
var inst_54419 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54405,opts);
var state_54446__$1 = state_54446;
if(cljs.core.truth_(inst_54419)){
var statearr_54457_54483 = state_54446__$1;
(statearr_54457_54483[(1)] = (15));

} else {
var statearr_54458_54484 = state_54446__$1;
(statearr_54458_54484[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (2))){
var state_54446__$1 = state_54446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54446__$1,(4),ch);
} else {
if((state_val_54447 === (11))){
var inst_54406 = (state_54446[(8)]);
var inst_54411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54412 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54406);
var inst_54413 = cljs.core.async.timeout.call(null,(1000));
var inst_54414 = [inst_54412,inst_54413];
var inst_54415 = (new cljs.core.PersistentVector(null,2,(5),inst_54411,inst_54414,null));
var state_54446__$1 = state_54446;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54446__$1,(14),inst_54415);
} else {
if((state_val_54447 === (9))){
var inst_54406 = (state_54446[(8)]);
var inst_54432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54433 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54406);
var inst_54434 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54433);
var inst_54435 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54434)].join('');
var inst_54436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54435);
var state_54446__$1 = (function (){var statearr_54459 = state_54446;
(statearr_54459[(10)] = inst_54432);

return statearr_54459;
})();
var statearr_54460_54485 = state_54446__$1;
(statearr_54460_54485[(2)] = inst_54436);

(statearr_54460_54485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (5))){
var inst_54399 = (state_54446[(7)]);
var inst_54401 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54402 = (new cljs.core.PersistentArrayMap(null,2,inst_54401,null));
var inst_54403 = (new cljs.core.PersistentHashSet(null,inst_54402,null));
var inst_54404 = figwheel.client.focus_msgs.call(null,inst_54403,inst_54399);
var inst_54405 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54404);
var inst_54406 = cljs.core.first.call(null,inst_54404);
var inst_54407 = figwheel.client.autoload_QMARK_.call(null);
var state_54446__$1 = (function (){var statearr_54461 = state_54446;
(statearr_54461[(9)] = inst_54405);

(statearr_54461[(8)] = inst_54406);

return statearr_54461;
})();
if(cljs.core.truth_(inst_54407)){
var statearr_54462_54486 = state_54446__$1;
(statearr_54462_54486[(1)] = (8));

} else {
var statearr_54463_54487 = state_54446__$1;
(statearr_54463_54487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (14))){
var inst_54417 = (state_54446[(2)]);
var state_54446__$1 = state_54446;
var statearr_54464_54488 = state_54446__$1;
(statearr_54464_54488[(2)] = inst_54417);

(statearr_54464_54488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (16))){
var state_54446__$1 = state_54446;
var statearr_54465_54489 = state_54446__$1;
(statearr_54465_54489[(2)] = null);

(statearr_54465_54489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (10))){
var inst_54438 = (state_54446[(2)]);
var state_54446__$1 = (function (){var statearr_54466 = state_54446;
(statearr_54466[(11)] = inst_54438);

return statearr_54466;
})();
var statearr_54467_54490 = state_54446__$1;
(statearr_54467_54490[(2)] = null);

(statearr_54467_54490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54447 === (8))){
var inst_54405 = (state_54446[(9)]);
var inst_54409 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54405,opts);
var state_54446__$1 = state_54446;
if(cljs.core.truth_(inst_54409)){
var statearr_54468_54491 = state_54446__$1;
(statearr_54468_54491[(1)] = (11));

} else {
var statearr_54469_54492 = state_54446__$1;
(statearr_54469_54492[(1)] = (12));

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
});})(c__50541__auto___54474,ch))
;
return ((function (switch__50453__auto__,c__50541__auto___54474,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50454__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50454__auto____0 = (function (){
var statearr_54470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54470[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50454__auto__);

(statearr_54470[(1)] = (1));

return statearr_54470;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50454__auto____1 = (function (state_54446){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_54446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e54471){if((e54471 instanceof Object)){
var ex__50457__auto__ = e54471;
var statearr_54472_54493 = state_54446;
(statearr_54472_54493[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54494 = state_54446;
state_54446 = G__54494;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50454__auto__ = function(state_54446){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50454__auto____1.call(this,state_54446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50454__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50454__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___54474,ch))
})();
var state__50543__auto__ = (function (){var statearr_54473 = f__50542__auto__.call(null);
(statearr_54473[(6)] = c__50541__auto___54474);

return statearr_54473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___54474,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54495_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54495_SHARP_));
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
var base_path_54499 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54499){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54497 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54498 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_54497,_STAR_print_fn_STAR_54498,sb,base_path_54499){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_54497,_STAR_print_fn_STAR_54498,sb,base_path_54499))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54498;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54497;
}}catch (e54496){if((e54496 instanceof Error)){
var e = e54496;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54499], null));
} else {
var e = e54496;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_54499))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54500){
var map__54501 = p__54500;
var map__54501__$1 = ((((!((map__54501 == null)))?((((map__54501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54501):map__54501);
var opts = map__54501__$1;
var build_id = cljs.core.get.call(null,map__54501__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54501,map__54501__$1,opts,build_id){
return (function (p__54503){
var vec__54504 = p__54503;
var seq__54505 = cljs.core.seq.call(null,vec__54504);
var first__54506 = cljs.core.first.call(null,seq__54505);
var seq__54505__$1 = cljs.core.next.call(null,seq__54505);
var map__54507 = first__54506;
var map__54507__$1 = ((((!((map__54507 == null)))?((((map__54507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54507):map__54507);
var msg = map__54507__$1;
var msg_name = cljs.core.get.call(null,map__54507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54505__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54504,seq__54505,first__54506,seq__54505__$1,map__54507,map__54507__$1,msg,msg_name,_,map__54501,map__54501__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54504,seq__54505,first__54506,seq__54505__$1,map__54507,map__54507__$1,msg,msg_name,_,map__54501,map__54501__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54501,map__54501__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54509){
var vec__54510 = p__54509;
var seq__54511 = cljs.core.seq.call(null,vec__54510);
var first__54512 = cljs.core.first.call(null,seq__54511);
var seq__54511__$1 = cljs.core.next.call(null,seq__54511);
var map__54513 = first__54512;
var map__54513__$1 = ((((!((map__54513 == null)))?((((map__54513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54513):map__54513);
var msg = map__54513__$1;
var msg_name = cljs.core.get.call(null,map__54513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54511__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54515){
var map__54516 = p__54515;
var map__54516__$1 = ((((!((map__54516 == null)))?((((map__54516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54516):map__54516);
var on_compile_warning = cljs.core.get.call(null,map__54516__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54516__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54516,map__54516__$1,on_compile_warning,on_compile_fail){
return (function (p__54518){
var vec__54519 = p__54518;
var seq__54520 = cljs.core.seq.call(null,vec__54519);
var first__54521 = cljs.core.first.call(null,seq__54520);
var seq__54520__$1 = cljs.core.next.call(null,seq__54520);
var map__54522 = first__54521;
var map__54522__$1 = ((((!((map__54522 == null)))?((((map__54522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54522):map__54522);
var msg = map__54522__$1;
var msg_name = cljs.core.get.call(null,map__54522__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54520__$1;
var pred__54524 = cljs.core._EQ_;
var expr__54525 = msg_name;
if(cljs.core.truth_(pred__54524.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54525))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54524.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54525))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54516,map__54516__$1,on_compile_warning,on_compile_fail))
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
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__,msg_hist,msg_names,msg){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__,msg_hist,msg_names,msg){
return (function (state_54614){
var state_val_54615 = (state_54614[(1)]);
if((state_val_54615 === (7))){
var inst_54534 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54534)){
var statearr_54616_54663 = state_54614__$1;
(statearr_54616_54663[(1)] = (8));

} else {
var statearr_54617_54664 = state_54614__$1;
(statearr_54617_54664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (20))){
var inst_54608 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54618_54665 = state_54614__$1;
(statearr_54618_54665[(2)] = inst_54608);

(statearr_54618_54665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (27))){
var inst_54604 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54619_54666 = state_54614__$1;
(statearr_54619_54666[(2)] = inst_54604);

(statearr_54619_54666[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (1))){
var inst_54527 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54527)){
var statearr_54620_54667 = state_54614__$1;
(statearr_54620_54667[(1)] = (2));

} else {
var statearr_54621_54668 = state_54614__$1;
(statearr_54621_54668[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (24))){
var inst_54606 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54622_54669 = state_54614__$1;
(statearr_54622_54669[(2)] = inst_54606);

(statearr_54622_54669[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (4))){
var inst_54612 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54614__$1,inst_54612);
} else {
if((state_val_54615 === (15))){
var inst_54610 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54623_54670 = state_54614__$1;
(statearr_54623_54670[(2)] = inst_54610);

(statearr_54623_54670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (21))){
var inst_54563 = (state_54614[(2)]);
var inst_54564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54564);
var state_54614__$1 = (function (){var statearr_54624 = state_54614;
(statearr_54624[(7)] = inst_54563);

return statearr_54624;
})();
var statearr_54625_54671 = state_54614__$1;
(statearr_54625_54671[(2)] = inst_54565);

(statearr_54625_54671[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (31))){
var inst_54593 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54593)){
var statearr_54626_54672 = state_54614__$1;
(statearr_54626_54672[(1)] = (34));

} else {
var statearr_54627_54673 = state_54614__$1;
(statearr_54627_54673[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (32))){
var inst_54602 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54628_54674 = state_54614__$1;
(statearr_54628_54674[(2)] = inst_54602);

(statearr_54628_54674[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (33))){
var inst_54589 = (state_54614[(2)]);
var inst_54590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54591 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54590);
var state_54614__$1 = (function (){var statearr_54629 = state_54614;
(statearr_54629[(8)] = inst_54589);

return statearr_54629;
})();
var statearr_54630_54675 = state_54614__$1;
(statearr_54630_54675[(2)] = inst_54591);

(statearr_54630_54675[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (13))){
var inst_54548 = figwheel.client.heads_up.clear.call(null);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(16),inst_54548);
} else {
if((state_val_54615 === (22))){
var inst_54569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54570 = figwheel.client.heads_up.append_warning_message.call(null,inst_54569);
var state_54614__$1 = state_54614;
var statearr_54631_54676 = state_54614__$1;
(statearr_54631_54676[(2)] = inst_54570);

(statearr_54631_54676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (36))){
var inst_54600 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54632_54677 = state_54614__$1;
(statearr_54632_54677[(2)] = inst_54600);

(statearr_54632_54677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (29))){
var inst_54580 = (state_54614[(2)]);
var inst_54581 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54582 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54581);
var state_54614__$1 = (function (){var statearr_54633 = state_54614;
(statearr_54633[(9)] = inst_54580);

return statearr_54633;
})();
var statearr_54634_54678 = state_54614__$1;
(statearr_54634_54678[(2)] = inst_54582);

(statearr_54634_54678[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (6))){
var inst_54529 = (state_54614[(10)]);
var state_54614__$1 = state_54614;
var statearr_54635_54679 = state_54614__$1;
(statearr_54635_54679[(2)] = inst_54529);

(statearr_54635_54679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (28))){
var inst_54576 = (state_54614[(2)]);
var inst_54577 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54578 = figwheel.client.heads_up.display_warning.call(null,inst_54577);
var state_54614__$1 = (function (){var statearr_54636 = state_54614;
(statearr_54636[(11)] = inst_54576);

return statearr_54636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(29),inst_54578);
} else {
if((state_val_54615 === (25))){
var inst_54574 = figwheel.client.heads_up.clear.call(null);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(28),inst_54574);
} else {
if((state_val_54615 === (34))){
var inst_54595 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(37),inst_54595);
} else {
if((state_val_54615 === (17))){
var inst_54554 = (state_54614[(2)]);
var inst_54555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54556 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54555);
var state_54614__$1 = (function (){var statearr_54637 = state_54614;
(statearr_54637[(12)] = inst_54554);

return statearr_54637;
})();
var statearr_54638_54680 = state_54614__$1;
(statearr_54638_54680[(2)] = inst_54556);

(statearr_54638_54680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (3))){
var inst_54546 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54546)){
var statearr_54639_54681 = state_54614__$1;
(statearr_54639_54681[(1)] = (13));

} else {
var statearr_54640_54682 = state_54614__$1;
(statearr_54640_54682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (12))){
var inst_54542 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54641_54683 = state_54614__$1;
(statearr_54641_54683[(2)] = inst_54542);

(statearr_54641_54683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (2))){
var inst_54529 = (state_54614[(10)]);
var inst_54529__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54614__$1 = (function (){var statearr_54642 = state_54614;
(statearr_54642[(10)] = inst_54529__$1);

return statearr_54642;
})();
if(cljs.core.truth_(inst_54529__$1)){
var statearr_54643_54684 = state_54614__$1;
(statearr_54643_54684[(1)] = (5));

} else {
var statearr_54644_54685 = state_54614__$1;
(statearr_54644_54685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (23))){
var inst_54572 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54572)){
var statearr_54645_54686 = state_54614__$1;
(statearr_54645_54686[(1)] = (25));

} else {
var statearr_54646_54687 = state_54614__$1;
(statearr_54646_54687[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (35))){
var state_54614__$1 = state_54614;
var statearr_54647_54688 = state_54614__$1;
(statearr_54647_54688[(2)] = null);

(statearr_54647_54688[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (19))){
var inst_54567 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54567)){
var statearr_54648_54689 = state_54614__$1;
(statearr_54648_54689[(1)] = (22));

} else {
var statearr_54649_54690 = state_54614__$1;
(statearr_54649_54690[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (11))){
var inst_54538 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54650_54691 = state_54614__$1;
(statearr_54650_54691[(2)] = inst_54538);

(statearr_54650_54691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (9))){
var inst_54540 = figwheel.client.heads_up.clear.call(null);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(12),inst_54540);
} else {
if((state_val_54615 === (5))){
var inst_54531 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54614__$1 = state_54614;
var statearr_54651_54692 = state_54614__$1;
(statearr_54651_54692[(2)] = inst_54531);

(statearr_54651_54692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (14))){
var inst_54558 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54558)){
var statearr_54652_54693 = state_54614__$1;
(statearr_54652_54693[(1)] = (18));

} else {
var statearr_54653_54694 = state_54614__$1;
(statearr_54653_54694[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (26))){
var inst_54584 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54614__$1 = state_54614;
if(cljs.core.truth_(inst_54584)){
var statearr_54654_54695 = state_54614__$1;
(statearr_54654_54695[(1)] = (30));

} else {
var statearr_54655_54696 = state_54614__$1;
(statearr_54655_54696[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (16))){
var inst_54550 = (state_54614[(2)]);
var inst_54551 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54552 = figwheel.client.heads_up.display_exception.call(null,inst_54551);
var state_54614__$1 = (function (){var statearr_54656 = state_54614;
(statearr_54656[(13)] = inst_54550);

return statearr_54656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(17),inst_54552);
} else {
if((state_val_54615 === (30))){
var inst_54586 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54587 = figwheel.client.heads_up.display_warning.call(null,inst_54586);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(33),inst_54587);
} else {
if((state_val_54615 === (10))){
var inst_54544 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54657_54697 = state_54614__$1;
(statearr_54657_54697[(2)] = inst_54544);

(statearr_54657_54697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (18))){
var inst_54560 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54561 = figwheel.client.heads_up.display_exception.call(null,inst_54560);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(21),inst_54561);
} else {
if((state_val_54615 === (37))){
var inst_54597 = (state_54614[(2)]);
var state_54614__$1 = state_54614;
var statearr_54658_54698 = state_54614__$1;
(statearr_54658_54698[(2)] = inst_54597);

(statearr_54658_54698[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54615 === (8))){
var inst_54536 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54614__$1 = state_54614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54614__$1,(11),inst_54536);
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
});})(c__50541__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50453__auto__,c__50541__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto____0 = (function (){
var statearr_54659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54659[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto__);

(statearr_54659[(1)] = (1));

return statearr_54659;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto____1 = (function (state_54614){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_54614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e54660){if((e54660 instanceof Object)){
var ex__50457__auto__ = e54660;
var statearr_54661_54699 = state_54614;
(statearr_54661_54699[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54700 = state_54614;
state_54614 = G__54700;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto__ = function(state_54614){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto____1.call(this,state_54614);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__,msg_hist,msg_names,msg))
})();
var state__50543__auto__ = (function (){var statearr_54662 = f__50542__auto__.call(null);
(statearr_54662[(6)] = c__50541__auto__);

return statearr_54662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__,msg_hist,msg_names,msg))
);

return c__50541__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__50541__auto___54729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___54729,ch){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___54729,ch){
return (function (state_54715){
var state_val_54716 = (state_54715[(1)]);
if((state_val_54716 === (1))){
var state_54715__$1 = state_54715;
var statearr_54717_54730 = state_54715__$1;
(statearr_54717_54730[(2)] = null);

(statearr_54717_54730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54716 === (2))){
var state_54715__$1 = state_54715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54715__$1,(4),ch);
} else {
if((state_val_54716 === (3))){
var inst_54713 = (state_54715[(2)]);
var state_54715__$1 = state_54715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54715__$1,inst_54713);
} else {
if((state_val_54716 === (4))){
var inst_54703 = (state_54715[(7)]);
var inst_54703__$1 = (state_54715[(2)]);
var state_54715__$1 = (function (){var statearr_54718 = state_54715;
(statearr_54718[(7)] = inst_54703__$1);

return statearr_54718;
})();
if(cljs.core.truth_(inst_54703__$1)){
var statearr_54719_54731 = state_54715__$1;
(statearr_54719_54731[(1)] = (5));

} else {
var statearr_54720_54732 = state_54715__$1;
(statearr_54720_54732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54716 === (5))){
var inst_54703 = (state_54715[(7)]);
var inst_54705 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54703);
var state_54715__$1 = state_54715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54715__$1,(8),inst_54705);
} else {
if((state_val_54716 === (6))){
var state_54715__$1 = state_54715;
var statearr_54721_54733 = state_54715__$1;
(statearr_54721_54733[(2)] = null);

(statearr_54721_54733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54716 === (7))){
var inst_54711 = (state_54715[(2)]);
var state_54715__$1 = state_54715;
var statearr_54722_54734 = state_54715__$1;
(statearr_54722_54734[(2)] = inst_54711);

(statearr_54722_54734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54716 === (8))){
var inst_54707 = (state_54715[(2)]);
var state_54715__$1 = (function (){var statearr_54723 = state_54715;
(statearr_54723[(8)] = inst_54707);

return statearr_54723;
})();
var statearr_54724_54735 = state_54715__$1;
(statearr_54724_54735[(2)] = null);

(statearr_54724_54735[(1)] = (2));


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
});})(c__50541__auto___54729,ch))
;
return ((function (switch__50453__auto__,c__50541__auto___54729,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50454__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50454__auto____0 = (function (){
var statearr_54725 = [null,null,null,null,null,null,null,null,null];
(statearr_54725[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50454__auto__);

(statearr_54725[(1)] = (1));

return statearr_54725;
});
var figwheel$client$heads_up_plugin_$_state_machine__50454__auto____1 = (function (state_54715){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_54715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e54726){if((e54726 instanceof Object)){
var ex__50457__auto__ = e54726;
var statearr_54727_54736 = state_54715;
(statearr_54727_54736[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54737 = state_54715;
state_54715 = G__54737;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50454__auto__ = function(state_54715){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50454__auto____1.call(this,state_54715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50454__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50454__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___54729,ch))
})();
var state__50543__auto__ = (function (){var statearr_54728 = f__50542__auto__.call(null);
(statearr_54728[(6)] = c__50541__auto___54729);

return statearr_54728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___54729,ch))
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
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__){
return (function (state_54743){
var state_val_54744 = (state_54743[(1)]);
if((state_val_54744 === (1))){
var inst_54738 = cljs.core.async.timeout.call(null,(3000));
var state_54743__$1 = state_54743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54743__$1,(2),inst_54738);
} else {
if((state_val_54744 === (2))){
var inst_54740 = (state_54743[(2)]);
var inst_54741 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54743__$1 = (function (){var statearr_54745 = state_54743;
(statearr_54745[(7)] = inst_54740);

return statearr_54745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54743__$1,inst_54741);
} else {
return null;
}
}
});})(c__50541__auto__))
;
return ((function (switch__50453__auto__,c__50541__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50454__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50454__auto____0 = (function (){
var statearr_54746 = [null,null,null,null,null,null,null,null];
(statearr_54746[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50454__auto__);

(statearr_54746[(1)] = (1));

return statearr_54746;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50454__auto____1 = (function (state_54743){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_54743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e54747){if((e54747 instanceof Object)){
var ex__50457__auto__ = e54747;
var statearr_54748_54750 = state_54743;
(statearr_54748_54750[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54751 = state_54743;
state_54743 = G__54751;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50454__auto__ = function(state_54743){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50454__auto____1.call(this,state_54743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50454__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50454__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__))
})();
var state__50543__auto__ = (function (){var statearr_54749 = f__50542__auto__.call(null);
(statearr_54749[(6)] = c__50541__auto__);

return statearr_54749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__))
);

return c__50541__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54758){
var state_val_54759 = (state_54758[(1)]);
if((state_val_54759 === (1))){
var inst_54752 = cljs.core.async.timeout.call(null,(2000));
var state_54758__$1 = state_54758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54758__$1,(2),inst_54752);
} else {
if((state_val_54759 === (2))){
var inst_54754 = (state_54758[(2)]);
var inst_54755 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_54756 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54755);
var state_54758__$1 = (function (){var statearr_54760 = state_54758;
(statearr_54760[(7)] = inst_54754);

return statearr_54760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54758__$1,inst_54756);
} else {
return null;
}
}
});})(c__50541__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__50453__auto__,c__50541__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto____0 = (function (){
var statearr_54761 = [null,null,null,null,null,null,null,null];
(statearr_54761[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto__);

(statearr_54761[(1)] = (1));

return statearr_54761;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto____1 = (function (state_54758){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_54758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e54762){if((e54762 instanceof Object)){
var ex__50457__auto__ = e54762;
var statearr_54763_54765 = state_54758;
(statearr_54763_54765[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54766 = state_54758;
state_54758 = G__54766;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto__ = function(state_54758){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto____1.call(this,state_54758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__,figwheel_version,temp__4657__auto__))
})();
var state__50543__auto__ = (function (){var statearr_54764 = f__50542__auto__.call(null);
(statearr_54764[(6)] = c__50541__auto__);

return statearr_54764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__,figwheel_version,temp__4657__auto__))
);

return c__50541__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54767){
var map__54768 = p__54767;
var map__54768__$1 = ((((!((map__54768 == null)))?((((map__54768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54768):map__54768);
var file = cljs.core.get.call(null,map__54768__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54768__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54768__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54770 = "";
var G__54770__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54770),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__54770);
var G__54770__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54770__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54770__$1);
if(cljs.core.truth_((function (){var and__47176__auto__ = line;
if(cljs.core.truth_(and__47176__auto__)){
return column;
} else {
return and__47176__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54770__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__54770__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54771){
var map__54772 = p__54771;
var map__54772__$1 = ((((!((map__54772 == null)))?((((map__54772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54772):map__54772);
var ed = map__54772__$1;
var formatted_exception = cljs.core.get.call(null,map__54772__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54772__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54772__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54774_54778 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54775_54779 = null;
var count__54776_54780 = (0);
var i__54777_54781 = (0);
while(true){
if((i__54777_54781 < count__54776_54780)){
var msg_54782 = cljs.core._nth.call(null,chunk__54775_54779,i__54777_54781);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54782);

var G__54783 = seq__54774_54778;
var G__54784 = chunk__54775_54779;
var G__54785 = count__54776_54780;
var G__54786 = (i__54777_54781 + (1));
seq__54774_54778 = G__54783;
chunk__54775_54779 = G__54784;
count__54776_54780 = G__54785;
i__54777_54781 = G__54786;
continue;
} else {
var temp__4657__auto___54787 = cljs.core.seq.call(null,seq__54774_54778);
if(temp__4657__auto___54787){
var seq__54774_54788__$1 = temp__4657__auto___54787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54774_54788__$1)){
var c__48027__auto___54789 = cljs.core.chunk_first.call(null,seq__54774_54788__$1);
var G__54790 = cljs.core.chunk_rest.call(null,seq__54774_54788__$1);
var G__54791 = c__48027__auto___54789;
var G__54792 = cljs.core.count.call(null,c__48027__auto___54789);
var G__54793 = (0);
seq__54774_54778 = G__54790;
chunk__54775_54779 = G__54791;
count__54776_54780 = G__54792;
i__54777_54781 = G__54793;
continue;
} else {
var msg_54794 = cljs.core.first.call(null,seq__54774_54788__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54794);

var G__54795 = cljs.core.next.call(null,seq__54774_54788__$1);
var G__54796 = null;
var G__54797 = (0);
var G__54798 = (0);
seq__54774_54778 = G__54795;
chunk__54775_54779 = G__54796;
count__54776_54780 = G__54797;
i__54777_54781 = G__54798;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54799){
var map__54800 = p__54799;
var map__54800__$1 = ((((!((map__54800 == null)))?((((map__54800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54800):map__54800);
var w = map__54800__$1;
var message = cljs.core.get.call(null,map__54800__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__47176__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__47176__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__47176__auto__;
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
var seq__54802 = cljs.core.seq.call(null,plugins);
var chunk__54803 = null;
var count__54804 = (0);
var i__54805 = (0);
while(true){
if((i__54805 < count__54804)){
var vec__54806 = cljs.core._nth.call(null,chunk__54803,i__54805);
var k = cljs.core.nth.call(null,vec__54806,(0),null);
var plugin = cljs.core.nth.call(null,vec__54806,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54812 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54802,chunk__54803,count__54804,i__54805,pl_54812,vec__54806,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54812.call(null,msg_hist);
});})(seq__54802,chunk__54803,count__54804,i__54805,pl_54812,vec__54806,k,plugin))
);
} else {
}

var G__54813 = seq__54802;
var G__54814 = chunk__54803;
var G__54815 = count__54804;
var G__54816 = (i__54805 + (1));
seq__54802 = G__54813;
chunk__54803 = G__54814;
count__54804 = G__54815;
i__54805 = G__54816;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54802);
if(temp__4657__auto__){
var seq__54802__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54802__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__54802__$1);
var G__54817 = cljs.core.chunk_rest.call(null,seq__54802__$1);
var G__54818 = c__48027__auto__;
var G__54819 = cljs.core.count.call(null,c__48027__auto__);
var G__54820 = (0);
seq__54802 = G__54817;
chunk__54803 = G__54818;
count__54804 = G__54819;
i__54805 = G__54820;
continue;
} else {
var vec__54809 = cljs.core.first.call(null,seq__54802__$1);
var k = cljs.core.nth.call(null,vec__54809,(0),null);
var plugin = cljs.core.nth.call(null,vec__54809,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54821 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54802,chunk__54803,count__54804,i__54805,pl_54821,vec__54809,k,plugin,seq__54802__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54821.call(null,msg_hist);
});})(seq__54802,chunk__54803,count__54804,i__54805,pl_54821,vec__54809,k,plugin,seq__54802__$1,temp__4657__auto__))
);
} else {
}

var G__54822 = cljs.core.next.call(null,seq__54802__$1);
var G__54823 = null;
var G__54824 = (0);
var G__54825 = (0);
seq__54802 = G__54822;
chunk__54803 = G__54823;
count__54804 = G__54824;
i__54805 = G__54825;
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
var G__54827 = arguments.length;
switch (G__54827) {
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

var seq__54828_54833 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54829_54834 = null;
var count__54830_54835 = (0);
var i__54831_54836 = (0);
while(true){
if((i__54831_54836 < count__54830_54835)){
var msg_54837 = cljs.core._nth.call(null,chunk__54829_54834,i__54831_54836);
figwheel.client.socket.handle_incoming_message.call(null,msg_54837);

var G__54838 = seq__54828_54833;
var G__54839 = chunk__54829_54834;
var G__54840 = count__54830_54835;
var G__54841 = (i__54831_54836 + (1));
seq__54828_54833 = G__54838;
chunk__54829_54834 = G__54839;
count__54830_54835 = G__54840;
i__54831_54836 = G__54841;
continue;
} else {
var temp__4657__auto___54842 = cljs.core.seq.call(null,seq__54828_54833);
if(temp__4657__auto___54842){
var seq__54828_54843__$1 = temp__4657__auto___54842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54828_54843__$1)){
var c__48027__auto___54844 = cljs.core.chunk_first.call(null,seq__54828_54843__$1);
var G__54845 = cljs.core.chunk_rest.call(null,seq__54828_54843__$1);
var G__54846 = c__48027__auto___54844;
var G__54847 = cljs.core.count.call(null,c__48027__auto___54844);
var G__54848 = (0);
seq__54828_54833 = G__54845;
chunk__54829_54834 = G__54846;
count__54830_54835 = G__54847;
i__54831_54836 = G__54848;
continue;
} else {
var msg_54849 = cljs.core.first.call(null,seq__54828_54843__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54849);

var G__54850 = cljs.core.next.call(null,seq__54828_54843__$1);
var G__54851 = null;
var G__54852 = (0);
var G__54853 = (0);
seq__54828_54833 = G__54850;
chunk__54829_54834 = G__54851;
count__54830_54835 = G__54852;
i__54831_54836 = G__54853;
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
var args__48366__auto__ = [];
var len__48359__auto___54858 = arguments.length;
var i__48360__auto___54859 = (0);
while(true){
if((i__48360__auto___54859 < len__48359__auto___54858)){
args__48366__auto__.push((arguments[i__48360__auto___54859]));

var G__54860 = (i__48360__auto___54859 + (1));
i__48360__auto___54859 = G__54860;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54855){
var map__54856 = p__54855;
var map__54856__$1 = ((((!((map__54856 == null)))?((((map__54856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54856):map__54856);
var opts = map__54856__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54854){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54854));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54861){if((e54861 instanceof Error)){
var e = e54861;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54861;

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
return (function (p__54862){
var map__54863 = p__54862;
var map__54863__$1 = ((((!((map__54863 == null)))?((((map__54863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54863):map__54863);
var msg_name = cljs.core.get.call(null,map__54863__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521587975526
