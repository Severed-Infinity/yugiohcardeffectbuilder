// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35144__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35145__i = 0, G__35145__a = new Array(arguments.length -  0);
while (G__35145__i < G__35145__a.length) {G__35145__a[G__35145__i] = arguments[G__35145__i + 0]; ++G__35145__i;}
  args = new cljs.core.IndexedSeq(G__35145__a,0,null);
} 
return G__35144__delegate.call(this,args);};
G__35144.cljs$lang$maxFixedArity = 0;
G__35144.cljs$lang$applyTo = (function (arglist__35146){
var args = cljs.core.seq(arglist__35146);
return G__35144__delegate(args);
});
G__35144.cljs$core$IFn$_invoke$arity$variadic = G__35144__delegate;
return G__35144;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35147__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35148__i = 0, G__35148__a = new Array(arguments.length -  0);
while (G__35148__i < G__35148__a.length) {G__35148__a[G__35148__i] = arguments[G__35148__i + 0]; ++G__35148__i;}
  args = new cljs.core.IndexedSeq(G__35148__a,0,null);
} 
return G__35147__delegate.call(this,args);};
G__35147.cljs$lang$maxFixedArity = 0;
G__35147.cljs$lang$applyTo = (function (arglist__35149){
var args = cljs.core.seq(arglist__35149);
return G__35147__delegate(args);
});
G__35147.cljs$core$IFn$_invoke$arity$variadic = G__35147__delegate;
return G__35147;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
