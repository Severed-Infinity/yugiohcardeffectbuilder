// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__37801){
var vec__37802 = p__37801;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37802,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__37805 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37805,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__37809 = arguments.length;
switch (G__37809) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__37811_37835 = clojure.data.equality_partition;
var G__37812_37836 = "null";
var G__37813_37837 = ((function (G__37811_37835,G__37812_37836){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__37811_37835,G__37812_37836))
;
goog.object.set(G__37811_37835,G__37812_37836,G__37813_37837);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__37814_37838 = clojure.data.equality_partition;
var G__37815_37839 = "string";
var G__37816_37840 = ((function (G__37814_37838,G__37815_37839){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__37814_37838,G__37815_37839))
;
goog.object.set(G__37814_37838,G__37815_37839,G__37816_37840);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__37817_37841 = clojure.data.equality_partition;
var G__37818_37842 = "number";
var G__37819_37843 = ((function (G__37817_37841,G__37818_37842){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__37817_37841,G__37818_37842))
;
goog.object.set(G__37817_37841,G__37818_37842,G__37819_37843);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__37820_37844 = clojure.data.equality_partition;
var G__37821_37845 = "array";
var G__37822_37846 = ((function (G__37820_37844,G__37821_37845){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__37820_37844,G__37821_37845))
;
goog.object.set(G__37820_37844,G__37821_37845,G__37822_37846);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__37823_37847 = clojure.data.equality_partition;
var G__37824_37848 = "function";
var G__37825_37849 = ((function (G__37823_37847,G__37824_37848){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__37823_37847,G__37824_37848))
;
goog.object.set(G__37823_37847,G__37824_37848,G__37825_37849);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__37826_37850 = clojure.data.equality_partition;
var G__37827_37851 = "boolean";
var G__37828_37852 = ((function (G__37826_37850,G__37827_37851){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__37826_37850,G__37827_37851))
;
goog.object.set(G__37826_37850,G__37827_37851,G__37828_37852);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__37829_37853 = clojure.data.equality_partition;
var G__37830_37854 = "_";
var G__37831_37855 = ((function (G__37829_37853,G__37830_37854){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__37829_37853,G__37830_37854))
;
goog.object.set(G__37829_37853,G__37830_37854,G__37831_37855);
goog.object.set(clojure.data.Diff,"null",true);

var G__37856_37880 = clojure.data.diff_similar;
var G__37857_37881 = "null";
var G__37858_37882 = ((function (G__37856_37880,G__37857_37881){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37856_37880,G__37857_37881))
;
goog.object.set(G__37856_37880,G__37857_37881,G__37858_37882);

goog.object.set(clojure.data.Diff,"string",true);

var G__37859_37883 = clojure.data.diff_similar;
var G__37860_37884 = "string";
var G__37861_37885 = ((function (G__37859_37883,G__37860_37884){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37859_37883,G__37860_37884))
;
goog.object.set(G__37859_37883,G__37860_37884,G__37861_37885);

goog.object.set(clojure.data.Diff,"number",true);

var G__37862_37886 = clojure.data.diff_similar;
var G__37863_37887 = "number";
var G__37864_37888 = ((function (G__37862_37886,G__37863_37887){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37862_37886,G__37863_37887))
;
goog.object.set(G__37862_37886,G__37863_37887,G__37864_37888);

goog.object.set(clojure.data.Diff,"array",true);

var G__37865_37889 = clojure.data.diff_similar;
var G__37866_37890 = "array";
var G__37867_37891 = ((function (G__37865_37889,G__37866_37890){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__37865_37889,G__37866_37890))
;
goog.object.set(G__37865_37889,G__37866_37890,G__37867_37891);

goog.object.set(clojure.data.Diff,"function",true);

var G__37868_37892 = clojure.data.diff_similar;
var G__37869_37893 = "function";
var G__37870_37894 = ((function (G__37868_37892,G__37869_37893){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37868_37892,G__37869_37893))
;
goog.object.set(G__37868_37892,G__37869_37893,G__37870_37894);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__37871_37895 = clojure.data.diff_similar;
var G__37872_37896 = "boolean";
var G__37873_37897 = ((function (G__37871_37895,G__37872_37896){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37871_37895,G__37872_37896))
;
goog.object.set(G__37871_37895,G__37872_37896,G__37873_37897);

goog.object.set(clojure.data.Diff,"_",true);

var G__37874_37898 = clojure.data.diff_similar;
var G__37875_37899 = "_";
var G__37876_37900 = ((function (G__37874_37898,G__37875_37899){
return (function (a,b){
var fexpr__37878 = (function (){var G__37879 = clojure.data.equality_partition(a);
var G__37879__$1 = (((G__37879 instanceof cljs.core.Keyword))?G__37879.fqn:null);
switch (G__37879__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37879__$1)].join('')));

}
})();
return (fexpr__37878.cljs$core$IFn$_invoke$arity$2 ? fexpr__37878.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__37878.call(null,a,b));
});})(G__37874_37898,G__37875_37899))
;
goog.object.set(G__37874_37898,G__37875_37899,G__37876_37900);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
