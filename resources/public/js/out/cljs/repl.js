// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50960){
var map__50961 = p__50960;
var map__50961__$1 = ((((!((map__50961 == null)))?(((((map__50961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50961):map__50961);
var m = map__50961__$1;
var n = cljs.core.get.call(null,map__50961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50963_50985 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50964_50986 = null;
var count__50965_50987 = (0);
var i__50966_50988 = (0);
while(true){
if((i__50966_50988 < count__50965_50987)){
var f_50989 = cljs.core._nth.call(null,chunk__50964_50986,i__50966_50988);
cljs.core.println.call(null,"  ",f_50989);


var G__50990 = seq__50963_50985;
var G__50991 = chunk__50964_50986;
var G__50992 = count__50965_50987;
var G__50993 = (i__50966_50988 + (1));
seq__50963_50985 = G__50990;
chunk__50964_50986 = G__50991;
count__50965_50987 = G__50992;
i__50966_50988 = G__50993;
continue;
} else {
var temp__5457__auto___50994 = cljs.core.seq.call(null,seq__50963_50985);
if(temp__5457__auto___50994){
var seq__50963_50995__$1 = temp__5457__auto___50994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50963_50995__$1)){
var c__4319__auto___50996 = cljs.core.chunk_first.call(null,seq__50963_50995__$1);
var G__50997 = cljs.core.chunk_rest.call(null,seq__50963_50995__$1);
var G__50998 = c__4319__auto___50996;
var G__50999 = cljs.core.count.call(null,c__4319__auto___50996);
var G__51000 = (0);
seq__50963_50985 = G__50997;
chunk__50964_50986 = G__50998;
count__50965_50987 = G__50999;
i__50966_50988 = G__51000;
continue;
} else {
var f_51001 = cljs.core.first.call(null,seq__50963_50995__$1);
cljs.core.println.call(null,"  ",f_51001);


var G__51002 = cljs.core.next.call(null,seq__50963_50995__$1);
var G__51003 = null;
var G__51004 = (0);
var G__51005 = (0);
seq__50963_50985 = G__51002;
chunk__50964_50986 = G__51003;
count__50965_50987 = G__51004;
i__50966_50988 = G__51005;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51006 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51006);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51006)))?cljs.core.second.call(null,arglists_51006):arglists_51006));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50967_51007 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50968_51008 = null;
var count__50969_51009 = (0);
var i__50970_51010 = (0);
while(true){
if((i__50970_51010 < count__50969_51009)){
var vec__50971_51011 = cljs.core._nth.call(null,chunk__50968_51008,i__50970_51010);
var name_51012 = cljs.core.nth.call(null,vec__50971_51011,(0),null);
var map__50974_51013 = cljs.core.nth.call(null,vec__50971_51011,(1),null);
var map__50974_51014__$1 = ((((!((map__50974_51013 == null)))?(((((map__50974_51013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50974_51013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50974_51013):map__50974_51013);
var doc_51015 = cljs.core.get.call(null,map__50974_51014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51016 = cljs.core.get.call(null,map__50974_51014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51012);

cljs.core.println.call(null," ",arglists_51016);

if(cljs.core.truth_(doc_51015)){
cljs.core.println.call(null," ",doc_51015);
} else {
}


var G__51017 = seq__50967_51007;
var G__51018 = chunk__50968_51008;
var G__51019 = count__50969_51009;
var G__51020 = (i__50970_51010 + (1));
seq__50967_51007 = G__51017;
chunk__50968_51008 = G__51018;
count__50969_51009 = G__51019;
i__50970_51010 = G__51020;
continue;
} else {
var temp__5457__auto___51021 = cljs.core.seq.call(null,seq__50967_51007);
if(temp__5457__auto___51021){
var seq__50967_51022__$1 = temp__5457__auto___51021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50967_51022__$1)){
var c__4319__auto___51023 = cljs.core.chunk_first.call(null,seq__50967_51022__$1);
var G__51024 = cljs.core.chunk_rest.call(null,seq__50967_51022__$1);
var G__51025 = c__4319__auto___51023;
var G__51026 = cljs.core.count.call(null,c__4319__auto___51023);
var G__51027 = (0);
seq__50967_51007 = G__51024;
chunk__50968_51008 = G__51025;
count__50969_51009 = G__51026;
i__50970_51010 = G__51027;
continue;
} else {
var vec__50976_51028 = cljs.core.first.call(null,seq__50967_51022__$1);
var name_51029 = cljs.core.nth.call(null,vec__50976_51028,(0),null);
var map__50979_51030 = cljs.core.nth.call(null,vec__50976_51028,(1),null);
var map__50979_51031__$1 = ((((!((map__50979_51030 == null)))?(((((map__50979_51030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50979_51030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50979_51030):map__50979_51030);
var doc_51032 = cljs.core.get.call(null,map__50979_51031__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51033 = cljs.core.get.call(null,map__50979_51031__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51029);

cljs.core.println.call(null," ",arglists_51033);

if(cljs.core.truth_(doc_51032)){
cljs.core.println.call(null," ",doc_51032);
} else {
}


var G__51034 = cljs.core.next.call(null,seq__50967_51022__$1);
var G__51035 = null;
var G__51036 = (0);
var G__51037 = (0);
seq__50967_51007 = G__51034;
chunk__50968_51008 = G__51035;
count__50969_51009 = G__51036;
i__50970_51010 = G__51037;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__50981 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50982 = null;
var count__50983 = (0);
var i__50984 = (0);
while(true){
if((i__50984 < count__50983)){
var role = cljs.core._nth.call(null,chunk__50982,i__50984);
var temp__5457__auto___51038__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___51038__$1)){
var spec_51039 = temp__5457__auto___51038__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51039));
} else {
}


var G__51040 = seq__50981;
var G__51041 = chunk__50982;
var G__51042 = count__50983;
var G__51043 = (i__50984 + (1));
seq__50981 = G__51040;
chunk__50982 = G__51041;
count__50983 = G__51042;
i__50984 = G__51043;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__50981);
if(temp__5457__auto____$1){
var seq__50981__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50981__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50981__$1);
var G__51044 = cljs.core.chunk_rest.call(null,seq__50981__$1);
var G__51045 = c__4319__auto__;
var G__51046 = cljs.core.count.call(null,c__4319__auto__);
var G__51047 = (0);
seq__50981 = G__51044;
chunk__50982 = G__51045;
count__50983 = G__51046;
i__50984 = G__51047;
continue;
} else {
var role = cljs.core.first.call(null,seq__50981__$1);
var temp__5457__auto___51048__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___51048__$2)){
var spec_51049 = temp__5457__auto___51048__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51049));
} else {
}


var G__51050 = cljs.core.next.call(null,seq__50981__$1);
var G__51051 = null;
var G__51052 = (0);
var G__51053 = (0);
seq__50981 = G__51050;
chunk__50982 = G__51051;
count__50983 = G__51052;
i__50984 = G__51053;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1524683842623
