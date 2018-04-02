// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54093){
var map__54094 = p__54093;
var map__54094__$1 = ((((!((map__54094 == null)))?((((map__54094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54094):map__54094);
var m = map__54094__$1;
var n = cljs.core.get.call(null,map__54094__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__54096_54118 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54097_54119 = null;
var count__54098_54120 = (0);
var i__54099_54121 = (0);
while(true){
if((i__54099_54121 < count__54098_54120)){
var f_54122 = cljs.core._nth.call(null,chunk__54097_54119,i__54099_54121);
cljs.core.println.call(null,"  ",f_54122);

var G__54123 = seq__54096_54118;
var G__54124 = chunk__54097_54119;
var G__54125 = count__54098_54120;
var G__54126 = (i__54099_54121 + (1));
seq__54096_54118 = G__54123;
chunk__54097_54119 = G__54124;
count__54098_54120 = G__54125;
i__54099_54121 = G__54126;
continue;
} else {
var temp__4657__auto___54127 = cljs.core.seq.call(null,seq__54096_54118);
if(temp__4657__auto___54127){
var seq__54096_54128__$1 = temp__4657__auto___54127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54096_54128__$1)){
var c__48027__auto___54129 = cljs.core.chunk_first.call(null,seq__54096_54128__$1);
var G__54130 = cljs.core.chunk_rest.call(null,seq__54096_54128__$1);
var G__54131 = c__48027__auto___54129;
var G__54132 = cljs.core.count.call(null,c__48027__auto___54129);
var G__54133 = (0);
seq__54096_54118 = G__54130;
chunk__54097_54119 = G__54131;
count__54098_54120 = G__54132;
i__54099_54121 = G__54133;
continue;
} else {
var f_54134 = cljs.core.first.call(null,seq__54096_54128__$1);
cljs.core.println.call(null,"  ",f_54134);

var G__54135 = cljs.core.next.call(null,seq__54096_54128__$1);
var G__54136 = null;
var G__54137 = (0);
var G__54138 = (0);
seq__54096_54118 = G__54135;
chunk__54097_54119 = G__54136;
count__54098_54120 = G__54137;
i__54099_54121 = G__54138;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54139 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__47188__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54139);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54139)))?cljs.core.second.call(null,arglists_54139):arglists_54139));
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
var seq__54100_54140 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54101_54141 = null;
var count__54102_54142 = (0);
var i__54103_54143 = (0);
while(true){
if((i__54103_54143 < count__54102_54142)){
var vec__54104_54144 = cljs.core._nth.call(null,chunk__54101_54141,i__54103_54143);
var name_54145 = cljs.core.nth.call(null,vec__54104_54144,(0),null);
var map__54107_54146 = cljs.core.nth.call(null,vec__54104_54144,(1),null);
var map__54107_54147__$1 = ((((!((map__54107_54146 == null)))?((((map__54107_54146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54107_54146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54107_54146):map__54107_54146);
var doc_54148 = cljs.core.get.call(null,map__54107_54147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54149 = cljs.core.get.call(null,map__54107_54147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54145);

cljs.core.println.call(null," ",arglists_54149);

if(cljs.core.truth_(doc_54148)){
cljs.core.println.call(null," ",doc_54148);
} else {
}

var G__54150 = seq__54100_54140;
var G__54151 = chunk__54101_54141;
var G__54152 = count__54102_54142;
var G__54153 = (i__54103_54143 + (1));
seq__54100_54140 = G__54150;
chunk__54101_54141 = G__54151;
count__54102_54142 = G__54152;
i__54103_54143 = G__54153;
continue;
} else {
var temp__4657__auto___54154 = cljs.core.seq.call(null,seq__54100_54140);
if(temp__4657__auto___54154){
var seq__54100_54155__$1 = temp__4657__auto___54154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54100_54155__$1)){
var c__48027__auto___54156 = cljs.core.chunk_first.call(null,seq__54100_54155__$1);
var G__54157 = cljs.core.chunk_rest.call(null,seq__54100_54155__$1);
var G__54158 = c__48027__auto___54156;
var G__54159 = cljs.core.count.call(null,c__48027__auto___54156);
var G__54160 = (0);
seq__54100_54140 = G__54157;
chunk__54101_54141 = G__54158;
count__54102_54142 = G__54159;
i__54103_54143 = G__54160;
continue;
} else {
var vec__54109_54161 = cljs.core.first.call(null,seq__54100_54155__$1);
var name_54162 = cljs.core.nth.call(null,vec__54109_54161,(0),null);
var map__54112_54163 = cljs.core.nth.call(null,vec__54109_54161,(1),null);
var map__54112_54164__$1 = ((((!((map__54112_54163 == null)))?((((map__54112_54163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54112_54163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54112_54163):map__54112_54163);
var doc_54165 = cljs.core.get.call(null,map__54112_54164__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54166 = cljs.core.get.call(null,map__54112_54164__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54162);

cljs.core.println.call(null," ",arglists_54166);

if(cljs.core.truth_(doc_54165)){
cljs.core.println.call(null," ",doc_54165);
} else {
}

var G__54167 = cljs.core.next.call(null,seq__54100_54155__$1);
var G__54168 = null;
var G__54169 = (0);
var G__54170 = (0);
seq__54100_54140 = G__54167;
chunk__54101_54141 = G__54168;
count__54102_54142 = G__54169;
i__54103_54143 = G__54170;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__54114 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54115 = null;
var count__54116 = (0);
var i__54117 = (0);
while(true){
if((i__54117 < count__54116)){
var role = cljs.core._nth.call(null,chunk__54115,i__54117);
var temp__4657__auto___54171__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54171__$1)){
var spec_54172 = temp__4657__auto___54171__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_54172));
} else {
}

var G__54173 = seq__54114;
var G__54174 = chunk__54115;
var G__54175 = count__54116;
var G__54176 = (i__54117 + (1));
seq__54114 = G__54173;
chunk__54115 = G__54174;
count__54116 = G__54175;
i__54117 = G__54176;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__54114);
if(temp__4657__auto____$1){
var seq__54114__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54114__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__54114__$1);
var G__54177 = cljs.core.chunk_rest.call(null,seq__54114__$1);
var G__54178 = c__48027__auto__;
var G__54179 = cljs.core.count.call(null,c__48027__auto__);
var G__54180 = (0);
seq__54114 = G__54177;
chunk__54115 = G__54178;
count__54116 = G__54179;
i__54117 = G__54180;
continue;
} else {
var role = cljs.core.first.call(null,seq__54114__$1);
var temp__4657__auto___54181__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54181__$2)){
var spec_54182 = temp__4657__auto___54181__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_54182));
} else {
}

var G__54183 = cljs.core.next.call(null,seq__54114__$1);
var G__54184 = null;
var G__54185 = (0);
var G__54186 = (0);
seq__54114 = G__54183;
chunk__54115 = G__54184;
count__54116 = G__54185;
i__54117 = G__54186;
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

//# sourceMappingURL=repl.js.map?rel=1521587974797
