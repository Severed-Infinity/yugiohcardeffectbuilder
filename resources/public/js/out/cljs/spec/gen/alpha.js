// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53298 = arguments.length;
var i__48360__auto___53299 = (0);
while(true){
if((i__48360__auto___53299 < len__48359__auto___53298)){
args__48366__auto__.push((arguments[i__48360__auto___53299]));

var G__53300 = (i__48360__auto___53299 + (1));
i__48360__auto___53299 = G__53300;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq53297){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53297));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53302 = arguments.length;
var i__48360__auto___53303 = (0);
while(true){
if((i__48360__auto___53303 < len__48359__auto___53302)){
args__48366__auto__.push((arguments[i__48360__auto___53303]));

var G__53304 = (i__48360__auto___53303 + (1));
i__48360__auto___53303 = G__53304;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq53301){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53301));
});

var g_QMARK__53305 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_53306 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__53305){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__53305))
,null));
var mkg_53307 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__53305,g_53306){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__53305,g_53306))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__53305,g_53306,mkg_53307){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__53305).call(null,x);
});})(g_QMARK__53305,g_53306,mkg_53307))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__53305,g_53306,mkg_53307){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_53307).call(null,gfn);
});})(g_QMARK__53305,g_53306,mkg_53307))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__53305,g_53306,mkg_53307){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_53306).call(null,generator);
});})(g_QMARK__53305,g_53306,mkg_53307))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__48452__auto___53327 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__48452__auto___53327){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53328 = arguments.length;
var i__48360__auto___53329 = (0);
while(true){
if((i__48360__auto___53329 < len__48359__auto___53328)){
args__48366__auto__.push((arguments[i__48360__auto___53329]));

var G__53330 = (i__48360__auto___53329 + (1));
i__48360__auto___53329 = G__53330;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53327))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53327){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53327),args);
});})(g__48452__auto___53327))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__48452__auto___53327){
return (function (seq53308){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53308));
});})(g__48452__auto___53327))
;


var g__48452__auto___53331 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__48452__auto___53331){
return (function cljs$spec$gen$alpha$list(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53332 = arguments.length;
var i__48360__auto___53333 = (0);
while(true){
if((i__48360__auto___53333 < len__48359__auto___53332)){
args__48366__auto__.push((arguments[i__48360__auto___53333]));

var G__53334 = (i__48360__auto___53333 + (1));
i__48360__auto___53333 = G__53334;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53331))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53331){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53331),args);
});})(g__48452__auto___53331))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__48452__auto___53331){
return (function (seq53309){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53309));
});})(g__48452__auto___53331))
;


var g__48452__auto___53335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__48452__auto___53335){
return (function cljs$spec$gen$alpha$map(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53336 = arguments.length;
var i__48360__auto___53337 = (0);
while(true){
if((i__48360__auto___53337 < len__48359__auto___53336)){
args__48366__auto__.push((arguments[i__48360__auto___53337]));

var G__53338 = (i__48360__auto___53337 + (1));
i__48360__auto___53337 = G__53338;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53335))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53335){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53335),args);
});})(g__48452__auto___53335))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__48452__auto___53335){
return (function (seq53310){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53310));
});})(g__48452__auto___53335))
;


var g__48452__auto___53339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__48452__auto___53339){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53340 = arguments.length;
var i__48360__auto___53341 = (0);
while(true){
if((i__48360__auto___53341 < len__48359__auto___53340)){
args__48366__auto__.push((arguments[i__48360__auto___53341]));

var G__53342 = (i__48360__auto___53341 + (1));
i__48360__auto___53341 = G__53342;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53339))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53339){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53339),args);
});})(g__48452__auto___53339))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__48452__auto___53339){
return (function (seq53311){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53311));
});})(g__48452__auto___53339))
;


var g__48452__auto___53343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__48452__auto___53343){
return (function cljs$spec$gen$alpha$set(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53344 = arguments.length;
var i__48360__auto___53345 = (0);
while(true){
if((i__48360__auto___53345 < len__48359__auto___53344)){
args__48366__auto__.push((arguments[i__48360__auto___53345]));

var G__53346 = (i__48360__auto___53345 + (1));
i__48360__auto___53345 = G__53346;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53343))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53343){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53343),args);
});})(g__48452__auto___53343))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__48452__auto___53343){
return (function (seq53312){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53312));
});})(g__48452__auto___53343))
;


var g__48452__auto___53347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__48452__auto___53347){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53348 = arguments.length;
var i__48360__auto___53349 = (0);
while(true){
if((i__48360__auto___53349 < len__48359__auto___53348)){
args__48366__auto__.push((arguments[i__48360__auto___53349]));

var G__53350 = (i__48360__auto___53349 + (1));
i__48360__auto___53349 = G__53350;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53347))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53347){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53347),args);
});})(g__48452__auto___53347))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__48452__auto___53347){
return (function (seq53313){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53313));
});})(g__48452__auto___53347))
;


var g__48452__auto___53351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__48452__auto___53351){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53352 = arguments.length;
var i__48360__auto___53353 = (0);
while(true){
if((i__48360__auto___53353 < len__48359__auto___53352)){
args__48366__auto__.push((arguments[i__48360__auto___53353]));

var G__53354 = (i__48360__auto___53353 + (1));
i__48360__auto___53353 = G__53354;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53351))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53351){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53351),args);
});})(g__48452__auto___53351))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__48452__auto___53351){
return (function (seq53314){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53314));
});})(g__48452__auto___53351))
;


var g__48452__auto___53355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__48452__auto___53355){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53356 = arguments.length;
var i__48360__auto___53357 = (0);
while(true){
if((i__48360__auto___53357 < len__48359__auto___53356)){
args__48366__auto__.push((arguments[i__48360__auto___53357]));

var G__53358 = (i__48360__auto___53357 + (1));
i__48360__auto___53357 = G__53358;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53355))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53355){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53355),args);
});})(g__48452__auto___53355))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__48452__auto___53355){
return (function (seq53315){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53315));
});})(g__48452__auto___53355))
;


var g__48452__auto___53359 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__48452__auto___53359){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53360 = arguments.length;
var i__48360__auto___53361 = (0);
while(true){
if((i__48360__auto___53361 < len__48359__auto___53360)){
args__48366__auto__.push((arguments[i__48360__auto___53361]));

var G__53362 = (i__48360__auto___53361 + (1));
i__48360__auto___53361 = G__53362;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53359))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53359),args);
});})(g__48452__auto___53359))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__48452__auto___53359){
return (function (seq53316){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53316));
});})(g__48452__auto___53359))
;


var g__48452__auto___53363 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__48452__auto___53363){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53364 = arguments.length;
var i__48360__auto___53365 = (0);
while(true){
if((i__48360__auto___53365 < len__48359__auto___53364)){
args__48366__auto__.push((arguments[i__48360__auto___53365]));

var G__53366 = (i__48360__auto___53365 + (1));
i__48360__auto___53365 = G__53366;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53363))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53363),args);
});})(g__48452__auto___53363))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__48452__auto___53363){
return (function (seq53317){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53317));
});})(g__48452__auto___53363))
;


var g__48452__auto___53367 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__48452__auto___53367){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53368 = arguments.length;
var i__48360__auto___53369 = (0);
while(true){
if((i__48360__auto___53369 < len__48359__auto___53368)){
args__48366__auto__.push((arguments[i__48360__auto___53369]));

var G__53370 = (i__48360__auto___53369 + (1));
i__48360__auto___53369 = G__53370;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53367))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53367){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53367),args);
});})(g__48452__auto___53367))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__48452__auto___53367){
return (function (seq53318){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53318));
});})(g__48452__auto___53367))
;


var g__48452__auto___53371 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__48452__auto___53371){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53372 = arguments.length;
var i__48360__auto___53373 = (0);
while(true){
if((i__48360__auto___53373 < len__48359__auto___53372)){
args__48366__auto__.push((arguments[i__48360__auto___53373]));

var G__53374 = (i__48360__auto___53373 + (1));
i__48360__auto___53373 = G__53374;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53371))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53371){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53371),args);
});})(g__48452__auto___53371))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__48452__auto___53371){
return (function (seq53319){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53319));
});})(g__48452__auto___53371))
;


var g__48452__auto___53375 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__48452__auto___53375){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53376 = arguments.length;
var i__48360__auto___53377 = (0);
while(true){
if((i__48360__auto___53377 < len__48359__auto___53376)){
args__48366__auto__.push((arguments[i__48360__auto___53377]));

var G__53378 = (i__48360__auto___53377 + (1));
i__48360__auto___53377 = G__53378;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53375))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53375){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53375),args);
});})(g__48452__auto___53375))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__48452__auto___53375){
return (function (seq53320){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53320));
});})(g__48452__auto___53375))
;


var g__48452__auto___53379 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__48452__auto___53379){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53380 = arguments.length;
var i__48360__auto___53381 = (0);
while(true){
if((i__48360__auto___53381 < len__48359__auto___53380)){
args__48366__auto__.push((arguments[i__48360__auto___53381]));

var G__53382 = (i__48360__auto___53381 + (1));
i__48360__auto___53381 = G__53382;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53379))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53379){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53379),args);
});})(g__48452__auto___53379))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__48452__auto___53379){
return (function (seq53321){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53321));
});})(g__48452__auto___53379))
;


var g__48452__auto___53383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__48452__auto___53383){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53384 = arguments.length;
var i__48360__auto___53385 = (0);
while(true){
if((i__48360__auto___53385 < len__48359__auto___53384)){
args__48366__auto__.push((arguments[i__48360__auto___53385]));

var G__53386 = (i__48360__auto___53385 + (1));
i__48360__auto___53385 = G__53386;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53383))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53383){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53383),args);
});})(g__48452__auto___53383))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__48452__auto___53383){
return (function (seq53322){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53322));
});})(g__48452__auto___53383))
;


var g__48452__auto___53387 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__48452__auto___53387){
return (function cljs$spec$gen$alpha$return(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53388 = arguments.length;
var i__48360__auto___53389 = (0);
while(true){
if((i__48360__auto___53389 < len__48359__auto___53388)){
args__48366__auto__.push((arguments[i__48360__auto___53389]));

var G__53390 = (i__48360__auto___53389 + (1));
i__48360__auto___53389 = G__53390;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53387))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53387){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53387),args);
});})(g__48452__auto___53387))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__48452__auto___53387){
return (function (seq53323){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53323));
});})(g__48452__auto___53387))
;


var g__48452__auto___53391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__48452__auto___53391){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53392 = arguments.length;
var i__48360__auto___53393 = (0);
while(true){
if((i__48360__auto___53393 < len__48359__auto___53392)){
args__48366__auto__.push((arguments[i__48360__auto___53393]));

var G__53394 = (i__48360__auto___53393 + (1));
i__48360__auto___53393 = G__53394;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53391))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53391){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53391),args);
});})(g__48452__auto___53391))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__48452__auto___53391){
return (function (seq53324){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53324));
});})(g__48452__auto___53391))
;


var g__48452__auto___53395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__48452__auto___53395){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53396 = arguments.length;
var i__48360__auto___53397 = (0);
while(true){
if((i__48360__auto___53397 < len__48359__auto___53396)){
args__48366__auto__.push((arguments[i__48360__auto___53397]));

var G__53398 = (i__48360__auto___53397 + (1));
i__48360__auto___53397 = G__53398;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53395))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53395){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53395),args);
});})(g__48452__auto___53395))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__48452__auto___53395){
return (function (seq53325){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53325));
});})(g__48452__auto___53395))
;


var g__48452__auto___53399 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__48452__auto___53399){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53400 = arguments.length;
var i__48360__auto___53401 = (0);
while(true){
if((i__48360__auto___53401 < len__48359__auto___53400)){
args__48366__auto__.push((arguments[i__48360__auto___53401]));

var G__53402 = (i__48360__auto___53401 + (1));
i__48360__auto___53401 = G__53402;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48452__auto___53399))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48452__auto___53399){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48452__auto___53399),args);
});})(g__48452__auto___53399))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__48452__auto___53399){
return (function (seq53326){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53326));
});})(g__48452__auto___53399))
;

var g__48465__auto___53424 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__48465__auto___53424){
return (function cljs$spec$gen$alpha$any(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53425 = arguments.length;
var i__48360__auto___53426 = (0);
while(true){
if((i__48360__auto___53426 < len__48359__auto___53425)){
args__48366__auto__.push((arguments[i__48360__auto___53426]));

var G__53427 = (i__48360__auto___53426 + (1));
i__48360__auto___53426 = G__53427;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53424))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53424){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53424);
});})(g__48465__auto___53424))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__48465__auto___53424){
return (function (seq53403){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53403));
});})(g__48465__auto___53424))
;


var g__48465__auto___53428 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__48465__auto___53428){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53429 = arguments.length;
var i__48360__auto___53430 = (0);
while(true){
if((i__48360__auto___53430 < len__48359__auto___53429)){
args__48366__auto__.push((arguments[i__48360__auto___53430]));

var G__53431 = (i__48360__auto___53430 + (1));
i__48360__auto___53430 = G__53431;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53428))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53428){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53428);
});})(g__48465__auto___53428))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__48465__auto___53428){
return (function (seq53404){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53404));
});})(g__48465__auto___53428))
;


var g__48465__auto___53432 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__48465__auto___53432){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53433 = arguments.length;
var i__48360__auto___53434 = (0);
while(true){
if((i__48360__auto___53434 < len__48359__auto___53433)){
args__48366__auto__.push((arguments[i__48360__auto___53434]));

var G__53435 = (i__48360__auto___53434 + (1));
i__48360__auto___53434 = G__53435;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53432))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53432){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53432);
});})(g__48465__auto___53432))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__48465__auto___53432){
return (function (seq53405){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53405));
});})(g__48465__auto___53432))
;


var g__48465__auto___53436 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__48465__auto___53436){
return (function cljs$spec$gen$alpha$char(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53437 = arguments.length;
var i__48360__auto___53438 = (0);
while(true){
if((i__48360__auto___53438 < len__48359__auto___53437)){
args__48366__auto__.push((arguments[i__48360__auto___53438]));

var G__53439 = (i__48360__auto___53438 + (1));
i__48360__auto___53438 = G__53439;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53436))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53436){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53436);
});})(g__48465__auto___53436))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__48465__auto___53436){
return (function (seq53406){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53406));
});})(g__48465__auto___53436))
;


var g__48465__auto___53440 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__48465__auto___53440){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53441 = arguments.length;
var i__48360__auto___53442 = (0);
while(true){
if((i__48360__auto___53442 < len__48359__auto___53441)){
args__48366__auto__.push((arguments[i__48360__auto___53442]));

var G__53443 = (i__48360__auto___53442 + (1));
i__48360__auto___53442 = G__53443;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53440))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53440){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53440);
});})(g__48465__auto___53440))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__48465__auto___53440){
return (function (seq53407){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53407));
});})(g__48465__auto___53440))
;


var g__48465__auto___53444 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__48465__auto___53444){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53445 = arguments.length;
var i__48360__auto___53446 = (0);
while(true){
if((i__48360__auto___53446 < len__48359__auto___53445)){
args__48366__auto__.push((arguments[i__48360__auto___53446]));

var G__53447 = (i__48360__auto___53446 + (1));
i__48360__auto___53446 = G__53447;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53444))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53444){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53444);
});})(g__48465__auto___53444))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__48465__auto___53444){
return (function (seq53408){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53408));
});})(g__48465__auto___53444))
;


var g__48465__auto___53448 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__48465__auto___53448){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53449 = arguments.length;
var i__48360__auto___53450 = (0);
while(true){
if((i__48360__auto___53450 < len__48359__auto___53449)){
args__48366__auto__.push((arguments[i__48360__auto___53450]));

var G__53451 = (i__48360__auto___53450 + (1));
i__48360__auto___53450 = G__53451;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53448))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53448){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53448);
});})(g__48465__auto___53448))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__48465__auto___53448){
return (function (seq53409){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53409));
});})(g__48465__auto___53448))
;


var g__48465__auto___53452 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__48465__auto___53452){
return (function cljs$spec$gen$alpha$double(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53453 = arguments.length;
var i__48360__auto___53454 = (0);
while(true){
if((i__48360__auto___53454 < len__48359__auto___53453)){
args__48366__auto__.push((arguments[i__48360__auto___53454]));

var G__53455 = (i__48360__auto___53454 + (1));
i__48360__auto___53454 = G__53455;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53452))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53452){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53452);
});})(g__48465__auto___53452))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__48465__auto___53452){
return (function (seq53410){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53410));
});})(g__48465__auto___53452))
;


var g__48465__auto___53456 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__48465__auto___53456){
return (function cljs$spec$gen$alpha$int(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53457 = arguments.length;
var i__48360__auto___53458 = (0);
while(true){
if((i__48360__auto___53458 < len__48359__auto___53457)){
args__48366__auto__.push((arguments[i__48360__auto___53458]));

var G__53459 = (i__48360__auto___53458 + (1));
i__48360__auto___53458 = G__53459;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53456))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53456){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53456);
});})(g__48465__auto___53456))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__48465__auto___53456){
return (function (seq53411){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53411));
});})(g__48465__auto___53456))
;


var g__48465__auto___53460 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__48465__auto___53460){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53461 = arguments.length;
var i__48360__auto___53462 = (0);
while(true){
if((i__48360__auto___53462 < len__48359__auto___53461)){
args__48366__auto__.push((arguments[i__48360__auto___53462]));

var G__53463 = (i__48360__auto___53462 + (1));
i__48360__auto___53462 = G__53463;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53460))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53460){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53460);
});})(g__48465__auto___53460))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__48465__auto___53460){
return (function (seq53412){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53412));
});})(g__48465__auto___53460))
;


var g__48465__auto___53464 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__48465__auto___53464){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53465 = arguments.length;
var i__48360__auto___53466 = (0);
while(true){
if((i__48360__auto___53466 < len__48359__auto___53465)){
args__48366__auto__.push((arguments[i__48360__auto___53466]));

var G__53467 = (i__48360__auto___53466 + (1));
i__48360__auto___53466 = G__53467;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53464))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53464){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53464);
});})(g__48465__auto___53464))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__48465__auto___53464){
return (function (seq53413){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53413));
});})(g__48465__auto___53464))
;


var g__48465__auto___53468 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__48465__auto___53468){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53469 = arguments.length;
var i__48360__auto___53470 = (0);
while(true){
if((i__48360__auto___53470 < len__48359__auto___53469)){
args__48366__auto__.push((arguments[i__48360__auto___53470]));

var G__53471 = (i__48360__auto___53470 + (1));
i__48360__auto___53470 = G__53471;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53468))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53468){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53468);
});})(g__48465__auto___53468))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__48465__auto___53468){
return (function (seq53414){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53414));
});})(g__48465__auto___53468))
;


var g__48465__auto___53472 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__48465__auto___53472){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53473 = arguments.length;
var i__48360__auto___53474 = (0);
while(true){
if((i__48360__auto___53474 < len__48359__auto___53473)){
args__48366__auto__.push((arguments[i__48360__auto___53474]));

var G__53475 = (i__48360__auto___53474 + (1));
i__48360__auto___53474 = G__53475;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53472))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53472){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53472);
});})(g__48465__auto___53472))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__48465__auto___53472){
return (function (seq53415){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53415));
});})(g__48465__auto___53472))
;


var g__48465__auto___53476 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__48465__auto___53476){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53477 = arguments.length;
var i__48360__auto___53478 = (0);
while(true){
if((i__48360__auto___53478 < len__48359__auto___53477)){
args__48366__auto__.push((arguments[i__48360__auto___53478]));

var G__53479 = (i__48360__auto___53478 + (1));
i__48360__auto___53478 = G__53479;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53476))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53476){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53476);
});})(g__48465__auto___53476))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__48465__auto___53476){
return (function (seq53416){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53416));
});})(g__48465__auto___53476))
;


var g__48465__auto___53480 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__48465__auto___53480){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53481 = arguments.length;
var i__48360__auto___53482 = (0);
while(true){
if((i__48360__auto___53482 < len__48359__auto___53481)){
args__48366__auto__.push((arguments[i__48360__auto___53482]));

var G__53483 = (i__48360__auto___53482 + (1));
i__48360__auto___53482 = G__53483;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53480))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53480){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53480);
});})(g__48465__auto___53480))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__48465__auto___53480){
return (function (seq53417){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53417));
});})(g__48465__auto___53480))
;


var g__48465__auto___53484 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__48465__auto___53484){
return (function cljs$spec$gen$alpha$string(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53485 = arguments.length;
var i__48360__auto___53486 = (0);
while(true){
if((i__48360__auto___53486 < len__48359__auto___53485)){
args__48366__auto__.push((arguments[i__48360__auto___53486]));

var G__53487 = (i__48360__auto___53486 + (1));
i__48360__auto___53486 = G__53487;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53484))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53484){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53484);
});})(g__48465__auto___53484))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__48465__auto___53484){
return (function (seq53418){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53418));
});})(g__48465__auto___53484))
;


var g__48465__auto___53488 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__48465__auto___53488){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53489 = arguments.length;
var i__48360__auto___53490 = (0);
while(true){
if((i__48360__auto___53490 < len__48359__auto___53489)){
args__48366__auto__.push((arguments[i__48360__auto___53490]));

var G__53491 = (i__48360__auto___53490 + (1));
i__48360__auto___53490 = G__53491;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53488))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53488){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53488);
});})(g__48465__auto___53488))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__48465__auto___53488){
return (function (seq53419){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53419));
});})(g__48465__auto___53488))
;


var g__48465__auto___53492 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__48465__auto___53492){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53493 = arguments.length;
var i__48360__auto___53494 = (0);
while(true){
if((i__48360__auto___53494 < len__48359__auto___53493)){
args__48366__auto__.push((arguments[i__48360__auto___53494]));

var G__53495 = (i__48360__auto___53494 + (1));
i__48360__auto___53494 = G__53495;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53492))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53492){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53492);
});})(g__48465__auto___53492))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__48465__auto___53492){
return (function (seq53420){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53420));
});})(g__48465__auto___53492))
;


var g__48465__auto___53496 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__48465__auto___53496){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53497 = arguments.length;
var i__48360__auto___53498 = (0);
while(true){
if((i__48360__auto___53498 < len__48359__auto___53497)){
args__48366__auto__.push((arguments[i__48360__auto___53498]));

var G__53499 = (i__48360__auto___53498 + (1));
i__48360__auto___53498 = G__53499;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53496))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53496){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53496);
});})(g__48465__auto___53496))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__48465__auto___53496){
return (function (seq53421){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53421));
});})(g__48465__auto___53496))
;


var g__48465__auto___53500 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__48465__auto___53500){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53501 = arguments.length;
var i__48360__auto___53502 = (0);
while(true){
if((i__48360__auto___53502 < len__48359__auto___53501)){
args__48366__auto__.push((arguments[i__48360__auto___53502]));

var G__53503 = (i__48360__auto___53502 + (1));
i__48360__auto___53502 = G__53503;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53500))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53500){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53500);
});})(g__48465__auto___53500))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__48465__auto___53500){
return (function (seq53422){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53422));
});})(g__48465__auto___53500))
;


var g__48465__auto___53504 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__48465__auto___53504){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53505 = arguments.length;
var i__48360__auto___53506 = (0);
while(true){
if((i__48360__auto___53506 < len__48359__auto___53505)){
args__48366__auto__.push((arguments[i__48360__auto___53506]));

var G__53507 = (i__48360__auto___53506 + (1));
i__48360__auto___53506 = G__53507;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});})(g__48465__auto___53504))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48465__auto___53504){
return (function (args){
return cljs.core.deref.call(null,g__48465__auto___53504);
});})(g__48465__auto___53504))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__48465__auto___53504){
return (function (seq53423){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53423));
});})(g__48465__auto___53504))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__48366__auto__ = [];
var len__48359__auto___53510 = arguments.length;
var i__48360__auto___53511 = (0);
while(true){
if((i__48360__auto___53511 < len__48359__auto___53510)){
args__48366__auto__.push((arguments[i__48360__auto___53511]));

var G__53512 = (i__48360__auto___53511 + (1));
i__48360__auto___53511 = G__53512;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((0) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__48367__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__53508_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__53508_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq53509){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53509));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__53513_SHARP_){
return (new Date(p1__53513_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521587973110
