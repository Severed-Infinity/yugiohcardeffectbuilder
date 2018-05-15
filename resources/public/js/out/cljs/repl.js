// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50964){
var map__50965 = p__50964;
var map__50965__$1 = ((((!((map__50965 == null)))?(((((map__50965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50965):map__50965);
var m = map__50965__$1;
var n = cljs.core.get.call(null,map__50965__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50965__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50967_50989 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50968_50990 = null;
var count__50969_50991 = (0);
var i__50970_50992 = (0);
while(true){
if((i__50970_50992 < count__50969_50991)){
var f_50993 = cljs.core._nth.call(null,chunk__50968_50990,i__50970_50992);
cljs.core.println.call(null,"  ",f_50993);


var G__50994 = seq__50967_50989;
var G__50995 = chunk__50968_50990;
var G__50996 = count__50969_50991;
var G__50997 = (i__50970_50992 + (1));
seq__50967_50989 = G__50994;
chunk__50968_50990 = G__50995;
count__50969_50991 = G__50996;
i__50970_50992 = G__50997;
continue;
} else {
var temp__5457__auto___50998 = cljs.core.seq.call(null,seq__50967_50989);
if(temp__5457__auto___50998){
var seq__50967_50999__$1 = temp__5457__auto___50998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50967_50999__$1)){
var c__4319__auto___51000 = cljs.core.chunk_first.call(null,seq__50967_50999__$1);
var G__51001 = cljs.core.chunk_rest.call(null,seq__50967_50999__$1);
var G__51002 = c__4319__auto___51000;
var G__51003 = cljs.core.count.call(null,c__4319__auto___51000);
var G__51004 = (0);
seq__50967_50989 = G__51001;
chunk__50968_50990 = G__51002;
count__50969_50991 = G__51003;
i__50970_50992 = G__51004;
continue;
} else {
var f_51005 = cljs.core.first.call(null,seq__50967_50999__$1);
cljs.core.println.call(null,"  ",f_51005);


var G__51006 = cljs.core.next.call(null,seq__50967_50999__$1);
var G__51007 = null;
var G__51008 = (0);
var G__51009 = (0);
seq__50967_50989 = G__51006;
chunk__50968_50990 = G__51007;
count__50969_50991 = G__51008;
i__50970_50992 = G__51009;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51010 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51010);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51010)))?cljs.core.second.call(null,arglists_51010):arglists_51010));
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
var seq__50971_51011 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50972_51012 = null;
var count__50973_51013 = (0);
var i__50974_51014 = (0);
while(true){
if((i__50974_51014 < count__50973_51013)){
var vec__50975_51015 = cljs.core._nth.call(null,chunk__50972_51012,i__50974_51014);
var name_51016 = cljs.core.nth.call(null,vec__50975_51015,(0),null);
var map__50978_51017 = cljs.core.nth.call(null,vec__50975_51015,(1),null);
var map__50978_51018__$1 = ((((!((map__50978_51017 == null)))?(((((map__50978_51017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50978_51017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50978_51017):map__50978_51017);
var doc_51019 = cljs.core.get.call(null,map__50978_51018__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51020 = cljs.core.get.call(null,map__50978_51018__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51016);

cljs.core.println.call(null," ",arglists_51020);

if(cljs.core.truth_(doc_51019)){
cljs.core.println.call(null," ",doc_51019);
} else {
}


var G__51021 = seq__50971_51011;
var G__51022 = chunk__50972_51012;
var G__51023 = count__50973_51013;
var G__51024 = (i__50974_51014 + (1));
seq__50971_51011 = G__51021;
chunk__50972_51012 = G__51022;
count__50973_51013 = G__51023;
i__50974_51014 = G__51024;
continue;
} else {
var temp__5457__auto___51025 = cljs.core.seq.call(null,seq__50971_51011);
if(temp__5457__auto___51025){
var seq__50971_51026__$1 = temp__5457__auto___51025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50971_51026__$1)){
var c__4319__auto___51027 = cljs.core.chunk_first.call(null,seq__50971_51026__$1);
var G__51028 = cljs.core.chunk_rest.call(null,seq__50971_51026__$1);
var G__51029 = c__4319__auto___51027;
var G__51030 = cljs.core.count.call(null,c__4319__auto___51027);
var G__51031 = (0);
seq__50971_51011 = G__51028;
chunk__50972_51012 = G__51029;
count__50973_51013 = G__51030;
i__50974_51014 = G__51031;
continue;
} else {
var vec__50980_51032 = cljs.core.first.call(null,seq__50971_51026__$1);
var name_51033 = cljs.core.nth.call(null,vec__50980_51032,(0),null);
var map__50983_51034 = cljs.core.nth.call(null,vec__50980_51032,(1),null);
var map__50983_51035__$1 = ((((!((map__50983_51034 == null)))?(((((map__50983_51034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50983_51034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50983_51034):map__50983_51034);
var doc_51036 = cljs.core.get.call(null,map__50983_51035__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51037 = cljs.core.get.call(null,map__50983_51035__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51033);

cljs.core.println.call(null," ",arglists_51037);

if(cljs.core.truth_(doc_51036)){
cljs.core.println.call(null," ",doc_51036);
} else {
}


var G__51038 = cljs.core.next.call(null,seq__50971_51026__$1);
var G__51039 = null;
var G__51040 = (0);
var G__51041 = (0);
seq__50971_51011 = G__51038;
chunk__50972_51012 = G__51039;
count__50973_51013 = G__51040;
i__50974_51014 = G__51041;
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

var seq__50985 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50986 = null;
var count__50987 = (0);
var i__50988 = (0);
while(true){
if((i__50988 < count__50987)){
var role = cljs.core._nth.call(null,chunk__50986,i__50988);
var temp__5457__auto___51042__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___51042__$1)){
var spec_51043 = temp__5457__auto___51042__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51043));
} else {
}


var G__51044 = seq__50985;
var G__51045 = chunk__50986;
var G__51046 = count__50987;
var G__51047 = (i__50988 + (1));
seq__50985 = G__51044;
chunk__50986 = G__51045;
count__50987 = G__51046;
i__50988 = G__51047;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__50985);
if(temp__5457__auto____$1){
var seq__50985__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50985__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50985__$1);
var G__51048 = cljs.core.chunk_rest.call(null,seq__50985__$1);
var G__51049 = c__4319__auto__;
var G__51050 = cljs.core.count.call(null,c__4319__auto__);
var G__51051 = (0);
seq__50985 = G__51048;
chunk__50986 = G__51049;
count__50987 = G__51050;
i__50988 = G__51051;
continue;
} else {
var role = cljs.core.first.call(null,seq__50985__$1);
var temp__5457__auto___51052__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___51052__$2)){
var spec_51053 = temp__5457__auto___51052__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_51053));
} else {
}


var G__51054 = cljs.core.next.call(null,seq__50985__$1);
var G__51055 = null;
var G__51056 = (0);
var G__51057 = (0);
seq__50985 = G__51054;
chunk__50986 = G__51055;
count__50987 = G__51056;
i__50988 = G__51057;
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

//# sourceMappingURL=repl.js.map?rel=1526415201122
