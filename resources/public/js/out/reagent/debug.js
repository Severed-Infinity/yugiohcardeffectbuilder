// Compiled by ClojureScript 1.9.946 {}
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
var G__49447__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49448__i = 0, G__49448__a = new Array(arguments.length -  0);
while (G__49448__i < G__49448__a.length) {G__49448__a[G__49448__i] = arguments[G__49448__i + 0]; ++G__49448__i;}
  args = new cljs.core.IndexedSeq(G__49448__a,0,null);
} 
return G__49447__delegate.call(this,args);};
G__49447.cljs$lang$maxFixedArity = 0;
G__49447.cljs$lang$applyTo = (function (arglist__49449){
var args = cljs.core.seq(arglist__49449);
return G__49447__delegate(args);
});
G__49447.cljs$core$IFn$_invoke$arity$variadic = G__49447__delegate;
return G__49447;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49450__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__49450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49451__i = 0, G__49451__a = new Array(arguments.length -  0);
while (G__49451__i < G__49451__a.length) {G__49451__a[G__49451__i] = arguments[G__49451__i + 0]; ++G__49451__i;}
  args = new cljs.core.IndexedSeq(G__49451__a,0,null);
} 
return G__49450__delegate.call(this,args);};
G__49450.cljs$lang$maxFixedArity = 0;
G__49450.cljs$lang$applyTo = (function (arglist__49452){
var args = cljs.core.seq(arglist__49452);
return G__49450__delegate(args);
});
G__49450.cljs$core$IFn$_invoke$arity$variadic = G__49450__delegate;
return G__49450;
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

//# sourceMappingURL=debug.js.map?rel=1521587774197
