// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__42925__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42926__i = 0, G__42926__a = new Array(arguments.length -  0);
while (G__42926__i < G__42926__a.length) {G__42926__a[G__42926__i] = arguments[G__42926__i + 0]; ++G__42926__i;}
  args = new cljs.core.IndexedSeq(G__42926__a,0,null);
} 
return G__42925__delegate.call(this,args);};
G__42925.cljs$lang$maxFixedArity = 0;
G__42925.cljs$lang$applyTo = (function (arglist__42927){
var args = cljs.core.seq(arglist__42927);
return G__42925__delegate(args);
});
G__42925.cljs$core$IFn$_invoke$arity$variadic = G__42925__delegate;
return G__42925;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42928__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42929__i = 0, G__42929__a = new Array(arguments.length -  0);
while (G__42929__i < G__42929__a.length) {G__42929__a[G__42929__i] = arguments[G__42929__i + 0]; ++G__42929__i;}
  args = new cljs.core.IndexedSeq(G__42929__a,0,null);
} 
return G__42928__delegate.call(this,args);};
G__42928.cljs$lang$maxFixedArity = 0;
G__42928.cljs$lang$applyTo = (function (arglist__42930){
var args = cljs.core.seq(arglist__42930);
return G__42928__delegate(args);
});
G__42928.cljs$core$IFn$_invoke$arity$variadic = G__42928__delegate;
return G__42928;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1526415180481
