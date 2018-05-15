// Compiled by ClojureScript 1.10.238 {}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 * to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__43856(s__43857){
return (new cljs.core.LazySeq(null,(function (){
var s__43857__$1 = s__43857;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43857__$1);
if(temp__5457__auto__){
var s__43857__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43857__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43857__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43859 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43858 = (0);
while(true){
if((i__43858 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__43858);
cljs.core.chunk_append.call(null,b__43859,((j + cnt) + (- (n + (1)))));

var G__43860 = (i__43858 + (1));
i__43858 = G__43860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43859),clojure$math$combinatorics$index_combinations_$_iter__43856.call(null,cljs.core.chunk_rest.call(null,s__43857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43859),null);
}
} else {
var j = cljs.core.first.call(null,s__43857__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__43856.call(null,cljs.core.rest.call(null,s__43857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})()));
var iter_comb = ((function (c){
return (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,j,(c__$1.call(null,j) - (1)));
if((c__$2.call(null,j) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.call(null,j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__43861 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__43862 = (j__$1 - (1));
c__$3 = G__43861;
j__$1 = G__43862;
continue;
}
break;
}
}
}
});})(c))
;
var step = ((function (c,iter_comb){
return (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons.call(null,cljs.core.rseq.call(null,cljs.core.subvec.call(null,c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,((function (c,iter_comb){
return (function (){
var next_step = iter_comb.call(null,c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step.call(null,next_step.call(null,(0)),next_step.call(null,(1)));
} else {
return null;
}
});})(c,iter_comb))
,null,null)));
});})(c,iter_comb))
;
return step.call(null,c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count.call(null,m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = m.call(null,index__$1);
if((quantity_to_distribute <= mi)){
return cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__43863 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__43864 = (index__$1 + (1));
var G__43865 = (already_distributed__$1 + mi);
distribution__$1 = G__43863;
index__$1 = G__43864;
already_distributed__$1 = G__43865;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__43866 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__43866,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43866,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__43866,(2),null);
if((index < (cljs.core.count.call(null,m) - (1)))){
if(cljs.core._EQ_.call(null,this_bucket,(1))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
}
} else {
if(cljs.core._EQ_.call(null,this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop.call(null,distribution);
while(true){
var vec__43869 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__43869,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__43869,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__43869,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__43872 = distribution__$2;
distribution__$1 = G__43872;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons.call(null,distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = clojure.math.combinatorics.next_distribution.call(null,m,t,distribution);
if(cljs.core.truth_(temp__5457__auto__)){
var next_step = temp__5457__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step.call(null,next_step);
} else {
return null;
}
}),null,null)));
});
return step.call(null,clojure.math.combinatorics.distribute.call(null,m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var domain = cljs.core.range.call(null,cljs.core.count.call(null,v));
var m = cljs.core.vec.call(null,(function (){var iter__4292__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__43873(s__43874){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__43874__$1 = s__43874;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43874__$1);
if(temp__5457__auto__){
var s__43874__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43874__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43874__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43876 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43875 = (0);
while(true){
if((i__43875 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43875);
cljs.core.chunk_append.call(null,b__43876,f.call(null,v.call(null,i)));

var G__43901 = (i__43875 + (1));
i__43875 = G__43901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43876),clojure$math$combinatorics$multi_comb_$_iter__43873.call(null,cljs.core.chunk_rest.call(null,s__43874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43876),null);
}
} else {
var i = cljs.core.first.call(null,s__43874__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__43873.call(null,cljs.core.rest.call(null,s__43874__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain))
,null,null));
});})(f,v,domain))
;
return iter__4292__auto__.call(null,domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions.call(null,m,t);
var iter__4292__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43877(s__43878){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__43878__$1 = s__43878;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43878__$1);
if(temp__5457__auto__){
var s__43878__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43878__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43878__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43880 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43879 = (0);
while(true){
if((i__43879 < size__4291__auto__)){
var q = cljs.core._nth.call(null,c__4290__auto__,i__43879);
cljs.core.chunk_append.call(null,b__43880,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (i__43879,q,c__4290__auto__,size__4291__auto__,b__43880,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43877_$_iter__43881(s__43882){
return (new cljs.core.LazySeq(null,((function (i__43879,q,c__4290__auto__,size__4291__auto__,b__43880,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__43882__$1 = s__43882;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43882__$1);
if(temp__5457__auto____$1){
var s__43882__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43882__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__43882__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__43884 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__43883 = (0);
while(true){
if((i__43883 < size__4291__auto____$1)){
var vec__43885 = cljs.core._nth.call(null,c__4290__auto____$1,i__43883);
var index = cljs.core.nth.call(null,vec__43885,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43885,(1),null);
var _ = cljs.core.nth.call(null,vec__43885,(2),null);
cljs.core.chunk_append.call(null,b__43884,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__43902 = (i__43883 + (1));
i__43883 = G__43902;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43884),clojure$math$combinatorics$multi_comb_$_iter__43877_$_iter__43881.call(null,cljs.core.chunk_rest.call(null,s__43882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43884),null);
}
} else {
var vec__43888 = cljs.core.first.call(null,s__43882__$2);
var index = cljs.core.nth.call(null,vec__43888,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43888,(1),null);
var _ = cljs.core.nth.call(null,vec__43888,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__43877_$_iter__43881.call(null,cljs.core.rest.call(null,s__43882__$2)));
}
} else {
return null;
}
break;
}
});})(i__43879,q,c__4290__auto__,size__4291__auto__,b__43880,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(i__43879,q,c__4290__auto__,size__4291__auto__,b__43880,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__4292__auto__.call(null,q);
})()));

var G__43903 = (i__43879 + (1));
i__43879 = G__43903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43880),clojure$math$combinatorics$multi_comb_$_iter__43877.call(null,cljs.core.chunk_rest.call(null,s__43878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43880),null);
}
} else {
var q = cljs.core.first.call(null,s__43878__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (q,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43877_$_iter__43891(s__43892){
return (new cljs.core.LazySeq(null,((function (q,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__43892__$1 = s__43892;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43892__$1);
if(temp__5457__auto____$1){
var s__43892__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43892__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43892__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43894 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43893 = (0);
while(true){
if((i__43893 < size__4291__auto__)){
var vec__43895 = cljs.core._nth.call(null,c__4290__auto__,i__43893);
var index = cljs.core.nth.call(null,vec__43895,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43895,(1),null);
var _ = cljs.core.nth.call(null,vec__43895,(2),null);
cljs.core.chunk_append.call(null,b__43894,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__43904 = (i__43893 + (1));
i__43893 = G__43904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43894),clojure$math$combinatorics$multi_comb_$_iter__43877_$_iter__43891.call(null,cljs.core.chunk_rest.call(null,s__43892__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43894),null);
}
} else {
var vec__43898 = cljs.core.first.call(null,s__43892__$2);
var index = cljs.core.nth.call(null,vec__43898,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43898,(1),null);
var _ = cljs.core.nth.call(null,vec__43898,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__43877_$_iter__43891.call(null,cljs.core.rest.call(null,s__43892__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__43878__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__4292__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__43877.call(null,cljs.core.rest.call(null,s__43878__$2)));
}
} else {
return null;
}
break;
}
});})(f,v,domain,m,qs))
,null,null));
});})(f,v,domain,m,qs))
;
return iter__4292__auto__.call(null,qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__4292__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__43906(s__43907){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__43907__$1 = s__43907;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43907__$1);
if(temp__5457__auto__){
var s__43907__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43907__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43907__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43909 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43908 = (0);
while(true){
if((i__43908 < size__4291__auto__)){
var item = cljs.core._nth.call(null,c__4290__auto__,i__43908);
cljs.core.chunk_append.call(null,b__43909,(new cljs.core.List(null,item,null,(1),null)));

var G__43910 = (i__43908 + (1));
i__43908 = G__43910;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43909),clojure$math$combinatorics$combinations_$_iter__43906.call(null,cljs.core.chunk_rest.call(null,s__43907__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43909),null);
}
} else {
var item = cljs.core.first.call(null,s__43907__$2);
return cljs.core.cons.call(null,(new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__43906.call(null,cljs.core.rest.call(null,s__43907__$2)));
}
} else {
return null;
}
break;
}
});})(cnt,v_items))
,null,null));
});})(cnt,v_items))
;
return iter__4292__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
return (new cljs.core.List(null,cljs.core.seq.call(null,items),null,(1),null));
} else {
return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__43905_SHARP_){
return cljs.core.map.call(null,v_items,p1__43905_SHARP_);
});})(cnt,v_items))
,clojure.math.combinatorics.index_combinations.call(null,t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb.call(null,items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),clojure.math.combinatorics.unchunk.call(null,cljs.core.rest.call(null,s)));
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return cljs.core.mapcat.call(null,(function (n){
return clojure.math.combinatorics.combinations.call(null,items,n);
}),clojure.math.combinatorics.unchunk.call(null,cljs.core.range.call(null,(cljs.core.count.call(null,items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43912 = arguments.length;
var i__4500__auto___43913 = (0);
while(true){
if((i__4500__auto___43913 < len__4499__auto___43912)){
args__4502__auto__.push((arguments[i__4500__auto___43913]));

var G__43914 = (i__4500__auto___43913 + (1));
i__4500__auto___43913 = G__43914;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function clojure$math$combinatorics$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__43915 = (i - (1));
var G__43916 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__43915;
v_seqs__$2 = G__43916;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return clojure$math$combinatorics$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq43911){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43911));
});

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.call(null,clojure.math.combinatorics.cartesian_product,cljs.core.take.call(null,n,cljs.core.repeat.call(null,items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count.call(null,v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
if((v.call(null,i) < v.call(null,(i + (1))))){
return i;
} else {
var G__43917 = (i - (1));
i = G__43917;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = v.call(null,j);
var l = (function (){var i = (len - (1));
while(true){
if((vj < v.call(null,i))){
return i;
} else {
var G__43918 = (i - (1));
i = G__43918;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.call(null,v,j,v.call(null,l),l,vj);
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__43919 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__43920 = (k + (1));
var G__43921 = (l__$1 - (1));
v__$1 = G__43919;
k = G__43920;
l__$1 = G__43921;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,v,(new cljs.core.LazySeq(null,(function (){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.iter_perm.call(null,v));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec.call(null,cljs.core.sort.call(null,c));
if((cljs.core.count.call(null,vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__3911__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__3911__auto__){
var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__3911__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__43922(s__43923){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__43923__$1 = s__43923;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43923__$1);
if(temp__5457__auto__){
var s__43923__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43923__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43923__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43925 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43924 = (0);
while(true){
if((i__43924 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43924);
cljs.core.chunk_append.call(null,b__43925,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43926 = (i__43924 + (1));
i__43924 = G__43926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43925),clojure$math$combinatorics$multi_perm_$_iter__43922.call(null,cljs.core.chunk_rest.call(null,s__43923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43925),null);
}
} else {
var i = cljs.core.first.call(null,s__43923__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__43922.call(null,cljs.core.rest.call(null,s__43923__$2)));
}
} else {
return null;
}
break;
}
});})(f,v))
,null,null));
});})(f,v))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.lex_permutations.call(null,indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 * (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
return clojure.math.combinatorics.lex_permutations.call(null,items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
return cljs.core.map.call(null,((function (v){
return (function (p1__43927_SHARP_){
return cljs.core.map.call(null,v,p1__43927_SHARP_);
});})(v))
,clojure.math.combinatorics.lex_permutations.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v))));
} else {
return clojure.math.combinatorics.multi_perm.call(null,items);

}
}
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__43928 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__43929 = (n__$1 - (1));
acc = G__43928;
n__$1 = G__43929;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_.call(null,n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if(!((n < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot.call(null,n__$1,divisor);
var r = cljs.core.rem.call(null,n__$1,divisor);
var G__43930 = q;
var G__43931 = cljs.core.cons.call(null,r,digits);
var G__43932 = (divisor + (1));
n__$1 = G__43930;
digits = G__43931;
divisor = G__43932;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,acc,cljs.core.rest.call(null,l__$1));
} else {
var G__43933 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__43934 = cljs.core.rest.call(null,l__$1);
var G__43935 = (n__$1 - (1));
acc = G__43933;
l__$1 = G__43934;
n__$1 = G__43935;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l)),"permutations.")),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count.call(null,l);
var fact_nums = clojure.math.combinatorics.factorial_numbers.call(null,n);
var indices = cljs.core.concat.call(null,cljs.core.repeat.call(null,(length - cljs.core.count.call(null,fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,l__$1,i);
var G__43936 = cljs.core.rest.call(null,indices);
var G__43937 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__43938 = cljs.core.conj.call(null,perm,item);
indices = G__43936;
l__$1 = G__43937;
perm = G__43938;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals.call(null,freqs);
return cljs.core.reduce.call(null,cljs.core._SLASH_,clojure.math.combinatorics.factorial.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,counts)),cljs.core.map.call(null,clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,l))){
return clojure.math.combinatorics.factorial.call(null,cljs.core.count.call(null,l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.frequencies.call(null,l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__43939(s__43940){
return (new cljs.core.LazySeq(null,(function (){
var s__43940__$1 = s__43940;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43940__$1);
if(temp__5457__auto__){
var s__43940__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43940__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43940__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43942 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43941 = (0);
while(true){
if((i__43941 < size__4291__auto__)){
var vec__43943 = cljs.core._nth.call(null,c__4290__auto__,i__43941);
var k = cljs.core.nth.call(null,vec__43943,(0),null);
var v = cljs.core.nth.call(null,vec__43943,(1),null);
cljs.core.chunk_append.call(null,b__43942,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__43949 = (i__43941 + (1));
i__43941 = G__43949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43942),clojure$math$combinatorics$initial_perm_numbers_$_iter__43939.call(null,cljs.core.chunk_rest.call(null,s__43940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43942),null);
}
} else {
var vec__43946 = cljs.core.first.call(null,s__43940__$2);
var k = cljs.core.nth.call(null,vec__43946,(0),null);
var v = cljs.core.nth.call(null,vec__43946,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__43939.call(null,cljs.core.rest.call(null,s__43940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__43950 = cljs.core.rest.call(null,perm_numbers__$1);
var G__43951 = (index + (1));
perm_numbers__$1 = G__43950;
index = G__43951;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.call(null,(1),m.call(null,k))){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.call(null,digits,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,freqs__$1)),(0)));
} else {
var vec__43952 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__43952,(0),null);
var remainder = cljs.core.nth.call(null,vec__43952,(1),null);
var G__43955 = remainder;
var G__43956 = cljs.core.conj.call(null,digits,index);
var G__43957 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__43955;
digits = G__43956;
freqs__$1 = G__43957;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations.call(null,l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_permutations.call(null,l),"permutations.")),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates.call(null,n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,indices)){
return perm;
} else {
var i = cljs.core.first.call(null,indices);
var item = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs),i);
var G__43958 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__43959 = cljs.core.rest.call(null,indices);
var G__43960 = cljs.core.conj.call(null,perm,item);
freqs = G__43958;
indices = G__43959;
perm = G__43960;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.vec.call(null,cljs.core.map.call(null,v,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__43961(s__43962){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__43962__$1 = s__43962;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43962__$1);
if(temp__5457__auto__){
var s__43962__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43962__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43962__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43964 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43963 = (0);
while(true){
if((i__43963 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43963);
cljs.core.chunk_append.call(null,b__43964,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43965 = (i__43963 + (1));
i__43963 = G__43965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43964),clojure$math$combinatorics$nth_permutation_$_iter__43961.call(null,cljs.core.chunk_rest.call(null,s__43962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43964),null);
}
} else {
var i = cljs.core.first.call(null,s__43962__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__43961.call(null,cljs.core.rest.call(null,s__43962__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations.call(null,items);
} else {
if(cljs.core._EQ_.call(null,n,clojure.math.combinatorics.count_permutations.call(null,items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_.call(null,items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_distinct.call(null,items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
var v = cljs.core.vec.call(null,items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct.call(null,cljs.core.range.call(null,cljs.core.count.call(null,items)),n);
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,perm_indices));
} else {
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__43966(s__43967){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__43967__$1 = s__43967;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43967__$1);
if(temp__5457__auto__){
var s__43967__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43967__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43967__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43969 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43968 = (0);
while(true){
if((i__43968 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43968);
cljs.core.chunk_append.call(null,b__43969,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43970 = (i__43968 + (1));
i__43968 = G__43970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43969),clojure$math$combinatorics$drop_permutations_$_iter__43966.call(null,cljs.core.chunk_rest.call(null,s__43967__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43969),null);
}
} else {
var i = cljs.core.first.call(null,s__43967__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__43966.call(null,cljs.core.rest.call(null,s__43967__$2)));
}
} else {
return null;
}
break;
}
});})(v,f))
,null,null));
});})(v,f))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations.call(null,clojure.math.combinatorics.nth_permutation_duplicates.call(null,indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,k,(1))){
return n;
} else {
if((k > cljs.core.quot.call(null,n,(2)))){
var G__43971 = n;
var G__43972 = (n - k);
n = G__43971;
k = G__43972;
continue;
} else {
return (cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,((n - k) + (1)),(n + (1)))) / cljs.core.apply.call(null,clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.call(null,(1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals.call(null,freqs);
var sum = cljs.core.apply.call(null,cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.call(null,t,(1))){
return cljs.core.count.call(null,freqs);
} else {
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.call(null,t,sum)){
return (1);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs)));
return clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1))),clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.call(null,freqs,cljs.core.first.call(null,cljs.core.keys.call(null,freqs))),t));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.n_take_k.call(null,cljs.core.count.call(null,items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies.call(null,items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies43973 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43973;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__43974 = n__$1;
var G__43975 = y;
var G__43976 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__43974;
y = G__43975;
z = G__43976;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__43977 = n__$1;
var G__43978 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__43979 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__43977;
y = G__43978;
z = G__43979;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_.call(null,items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.expt_int.call(null,(2),cljs.core.count.call(null,items));
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43980(s__43981){
return (new cljs.core.LazySeq(null,(function (){
var s__43981__$1 = s__43981;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43981__$1);
if(temp__5457__auto__){
var s__43981__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43981__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43981__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43983 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43982 = (0);
while(true){
if((i__43982 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43982);
cljs.core.chunk_append.call(null,b__43983,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__43984 = (i__43982 + (1));
i__43982 = G__43984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43983),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43980.call(null,cljs.core.chunk_rest.call(null,s__43981__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43983),null);
}
} else {
var i = cljs.core.first.call(null,s__43981__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43980.call(null,cljs.core.rest.call(null,s__43981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies43985 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43985;
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1)))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__43986 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__43987 = cljs.core.rest.call(null,items__$1);
var G__43988 = (t__$1 - (1));
var G__43989 = n__$1;
comb = G__43986;
items__$1 = G__43987;
t__$1 = G__43988;
n__$1 = G__43989;
continue;
} else {
var G__43990 = comb;
var G__43991 = cljs.core.rest.call(null,items__$1);
var G__43992 = t__$1;
var G__43993 = (n__$1 - dc_dt);
comb = G__43990;
items__$1 = G__43991;
t__$1 = G__43992;
n__$1 = G__43993;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1)))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__43994(s__43995){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__43995__$1 = s__43995;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43995__$1);
if(temp__5457__auto__){
var s__43995__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43995__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43995__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43997 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43996 = (0);
while(true){
if((i__43996 < size__4291__auto__)){
var vec__43998 = cljs.core._nth.call(null,c__4290__auto__,i__43996);
var k = cljs.core.nth.call(null,vec__43998,(0),null);
var v = cljs.core.nth.call(null,vec__43998,(1),null);
cljs.core.chunk_append.call(null,b__43997,cljs.core.repeat.call(null,v,k));

var G__44004 = (i__43996 + (1));
i__43996 = G__44004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43997),clojure$math$combinatorics$nth_combination_freqs_$_iter__43994.call(null,cljs.core.chunk_rest.call(null,s__43995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43997),null);
}
} else {
var vec__44001 = cljs.core.first.call(null,s__43995__$2);
var k = cljs.core.nth.call(null,vec__44001,(0),null);
var v = cljs.core.nth.call(null,vec__44001,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__43994.call(null,cljs.core.rest.call(null,s__43995__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4292__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__44005 = cljs.core.conj.call(null,comb,first_key);
var G__44006 = remove_one_key;
var G__44007 = (t__$1 - (1));
var G__44008 = n__$1;
comb = G__44005;
freqs__$1 = G__44006;
t__$1 = G__44007;
n__$1 = G__44008;
continue;
} else {
var G__44009 = comb;
var G__44010 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__44011 = t__$1;
var G__44012 = (n__$1 - dc_dt);
comb = G__44009;
freqs__$1 = G__44010;
t__$1 = G__44011;
n__$1 = G__44012;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations.call(null,items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t),"combinations.")),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.nth_combination_distinct.call(null,items,t,n);
} else {
var count_combinations_from_frequencies44013 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (v,f,count_combinations_from_frequencies44013){
return (function clojure$math$combinatorics$nth_combination_$_iter__44014(s__44015){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies44013){
return (function (){
var s__44015__$1 = s__44015;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44015__$1);
if(temp__5457__auto__){
var s__44015__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44015__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44015__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44017 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44016 = (0);
while(true){
if((i__44016 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44016);
cljs.core.chunk_append.call(null,b__44017,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__44018 = (i__44016 + (1));
i__44016 = G__44018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44017),clojure$math$combinatorics$nth_combination_$_iter__44014.call(null,cljs.core.chunk_rest.call(null,s__44015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44017),null);
}
} else {
var i = cljs.core.first.call(null,s__44015__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__44014.call(null,cljs.core.rest.call(null,s__44015__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies44013))
,null,null));
});})(v,f,count_combinations_from_frequencies44013))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies44013;
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets.call(null,items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.print_str.call(null,n,"is too large. Input has only",clojure.math.combinatorics.count_subsets.call(null,items),"subsets.")),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations.call(null,items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination.call(null,items,size,n__$1);
} else {
var G__44019 = (size + (1));
var G__44020 = (n__$1 - num_combinations);
size = G__44019;
n__$1 = G__44020;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq.call(null,l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.call(null,item,cljs.core.first.call(null,l__$1))){
return n;
} else {
var G__44021 = cljs.core.rest.call(null,l__$1);
var G__44022 = (n + (1));
l__$1 = G__44021;
n = G__44022;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count.call(null,l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__44023 = cljs.core.rest.call(null,l__$1);
var G__44024 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__44025 = (n - (1));
l__$1 = G__44023;
index = G__44024;
n = G__44025;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,l__$1));
while(true){
if(cljs.core.empty_QMARK_.call(null,l__$1)){
return index;
} else {
var G__44031 = cljs.core.rest.call(null,l__$1);
var G__44032 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4292__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__44027(s__44028){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__44028__$1 = s__44028;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44028__$1);
if(temp__5457__auto__){
var s__44028__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44028__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44028__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44030 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44029 = (0);
while(true){
if((i__44029 < size__4291__auto__)){
var k = cljs.core._nth.call(null,c__4290__auto__,i__44029);
cljs.core.chunk_append.call(null,b__44030,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__44034 = (i__44029 + (1));
i__44029 = G__44034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44030),clojure$math$combinatorics$permutation_index_duplicates_$_iter__44027.call(null,cljs.core.chunk_rest.call(null,s__44028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44030),null);
}
} else {
var k = cljs.core.first.call(null,s__44028__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__44027.call(null,cljs.core.rest.call(null,s__44028__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4292__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__4292__auto__){
return (function (p1__44026_SHARP_){
return (cljs.core.compare.call(null,p1__44026_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__4292__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__44033 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__44031;
index = G__44032;
freqs = G__44033;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return clojure.math.combinatorics.permutation_index_distinct.call(null,items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates.call(null,items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = vec.call(null,index);
return cljs.core.assoc.call(null,vec,index,f.call(null,item));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$init_$_iter__44035(s__44036){
return (new cljs.core.LazySeq(null,(function (){
var s__44036__$1 = s__44036;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44036__$1);
if(temp__5457__auto__){
var s__44036__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44036__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44036__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44038 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44037 = (0);
while(true){
if((i__44037 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44037);
cljs.core.chunk_append.call(null,b__44038,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (i - ((n - s) - (-1)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());

var G__44039 = (i__44037 + (1));
i__44037 = G__44039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44038),clojure$math$combinatorics$init_$_iter__44035.call(null,cljs.core.chunk_rest.call(null,s__44036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44038),null);
}
} else {
var i = cljs.core.first.call(null,s__44036__$2);
return cljs.core.cons.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (i - ((n - s) - (-1)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),clojure$math$combinatorics$init_$_iter__44035.call(null,cljs.core.rest.call(null,s__44036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__44041 = arguments.length;
switch (G__44041) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.init.call(null,n,s),cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(1))),r,s);
});

clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons.call(null,a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__3911__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__3911__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__3911__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__3911__auto__ = (a.call(null,j) < b.call(null,j));
if(and__3911__auto__){
var and__3911__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__3911__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - clojure.math.combinatorics.reify_bool.call(null,((a.call(null,j) + (1)) === b.call(null,j)))) <= (n - j));
} else {
return true;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})()){
return j;
} else {
var G__44046 = (j - (1));
j = G__44046;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update.call(null,a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - (b.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,cljs.core._EQ_.call(null,a__$1.call(null,j),b.call(null,j))))):null);
var vec__44042 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,(b__$1.call(null,j) === a__$2.call(null,j))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = s;
if(cljs.core.truth_(and__3911__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__3911__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__44047 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__44048 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__44049 = (i + (1));
var G__44050 = (function (){var x__4006__auto__ = current_max;
var y__4007__auto__ = (new_a_i + (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
a__$2 = G__44047;
b__$1 = G__44048;
i = G__44049;
current_max = G__44050;
continue;
} else {
var G__44051 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__44052 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__44053 = (i + (1));
var G__44054 = current_max;
a__$2 = G__44051;
b__$1 = G__44052;
i = G__44053;
current_max = G__44054;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__44042,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__44042,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44064 = arguments.length;
var i__4500__auto___44065 = (0);
while(true){
if((i__4500__auto___44065 < len__4499__auto___44064)){
args__4502__auto__.push((arguments[i__4500__auto___44065]));

var G__44066 = (i__4500__auto___44065 + (1));
i__4500__auto___44065 = G__44066;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__44057){
var map__44058 = p__44057;
var map__44058__$1 = ((((!((map__44058 == null)))?(((((map__44058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44058):map__44058);
var from = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__44058__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,N,(0))){
if(((((function (){var or__3922__auto__ = from;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__3922__auto__ = to;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = from;
if(cljs.core.truth_(and__3911__auto__)){
return (from <= (1));
} else {
return and__3911__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = to;
if(cljs.core.truth_(and__3911__auto__)){
return (to >= N);
} else {
return and__3911__auto__;
}
})())?null:to);
if(!(((((1) <= (function (){var or__3922__auto__ = from__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__3922__auto__ = from__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})() <= (function (){var or__3922__auto__ = to__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return N;
}
})())) && (((function (){var or__3922__auto__ = to__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return N;
}
})() <= N))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.range.call(null,N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__4292__auto__ = ((function (growth_strings,from__$1,to__$1,map__44058,map__44058__$1,from,to){
return (function clojure$math$combinatorics$iter__44060(s__44061){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__44058,map__44058__$1,from,to){
return (function (){
var s__44061__$1 = s__44061;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44061__$1);
if(temp__5457__auto__){
var s__44061__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44061__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44061__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44063 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44062 = (0);
while(true){
if((i__44062 < size__4291__auto__)){
var growth_string = cljs.core._nth.call(null,c__4290__auto__,i__44062);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__44063,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__44067 = (i__44062 + (1));
i__44062 = G__44067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44063),clojure$math$combinatorics$iter__44060.call(null,cljs.core.chunk_rest.call(null,s__44061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44063),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__44061__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__44060.call(null,cljs.core.rest.call(null,s__44061__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__44058,map__44058__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__44058,map__44058__$1,from,to))
;
return iter__4292__auto__.call(null,growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq44055){
var G__44056 = cljs.core.first.call(null,seq44055);
var seq44055__$1 = cljs.core.next.call(null,seq44055);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44056,seq44055__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44082 = arguments.length;
var i__4500__auto___44083 = (0);
while(true){
if((i__4500__auto___44083 < len__4499__auto___44082)){
args__4502__auto__.push((arguments[i__4500__auto___44083]));

var G__44084 = (i__4500__auto___44083 + (1));
i__4500__auto___44083 = G__44084;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4292__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__44070(s__44071){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__44071__$1 = s__44071;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44071__$1);
if(temp__5457__auto__){
var s__44071__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44071__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44071__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44073 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44072 = (0);
while(true){
if((i__44072 < size__4291__auto__)){
var parts = cljs.core._nth.call(null,c__4290__auto__,i__44072);
cljs.core.chunk_append.call(null,b__44073,(function (){var iter__4292__auto__ = ((function (i__44072,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__44070_$_iter__44074(s__44075){
return (new cljs.core.LazySeq(null,((function (i__44072,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__44075__$1 = s__44075;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44075__$1);
if(temp__5457__auto____$1){
var s__44075__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44075__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__44075__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__44077 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__44076 = (0);
while(true){
if((i__44076 < size__4291__auto____$1)){
var part = cljs.core._nth.call(null,c__4290__auto____$1,i__44076);
cljs.core.chunk_append.call(null,b__44077,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__44076,i__44072,part,c__4290__auto____$1,size__4291__auto____$1,b__44077,s__44075__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__44076,i__44072,part,c__4290__auto____$1,size__4291__auto____$1,b__44077,s__44075__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__44085 = (i__44076 + (1));
i__44076 = G__44085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44077),clojure$math$combinatorics$iter__44070_$_iter__44074.call(null,cljs.core.chunk_rest.call(null,s__44075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44077),null);
}
} else {
var part = cljs.core.first.call(null,s__44075__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__44072,part,s__44075__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__44072,part,s__44075__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__44070_$_iter__44074.call(null,cljs.core.rest.call(null,s__44075__$2)));
}
} else {
return null;
}
break;
}
});})(i__44072,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(i__44072,parts,c__4290__auto__,size__4291__auto__,b__44073,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__4292__auto__.call(null,parts);
})());

var G__44086 = (i__44072 + (1));
i__44072 = G__44086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44073),clojure$math$combinatorics$iter__44070.call(null,cljs.core.chunk_rest.call(null,s__44071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44073),null);
}
} else {
var parts = cljs.core.first.call(null,s__44071__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__44070_$_iter__44078(s__44079){
return (new cljs.core.LazySeq(null,((function (parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__44079__$1 = s__44079;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44079__$1);
if(temp__5457__auto____$1){
var s__44079__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44079__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44079__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44081 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44080 = (0);
while(true){
if((i__44080 < size__4291__auto__)){
var part = cljs.core._nth.call(null,c__4290__auto__,i__44080);
cljs.core.chunk_append.call(null,b__44081,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__44080,part,c__4290__auto__,size__4291__auto__,b__44081,s__44079__$2,temp__5457__auto____$1,parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__44080,part,c__4290__auto__,size__4291__auto__,b__44081,s__44079__$2,temp__5457__auto____$1,parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__44087 = (i__44080 + (1));
i__44080 = G__44087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44081),clojure$math$combinatorics$iter__44070_$_iter__44078.call(null,cljs.core.chunk_rest.call(null,s__44079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44081),null);
}
} else {
var part = cljs.core.first.call(null,s__44079__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__44079__$2,temp__5457__auto____$1,parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__44079__$2,temp__5457__auto____$1,parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__44070_$_iter__44078.call(null,cljs.core.rest.call(null,s__44079__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__44071__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__4292__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__44070.call(null,cljs.core.rest.call(null,s__44071__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,N,lex))
,null,null));
});})(items__$1,N,lex))
;
return iter__4292__auto__.call(null,lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq44068){
var G__44069 = cljs.core.first.call(null,seq44068);
var seq44068__$1 = cljs.core.next.call(null,seq44068);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44069,seq44068__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__44089 = arguments.length;
switch (G__44089) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,multiset));
var m = cljs.core.count.call(null,multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__44090 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__44109 = (j + (1));
var G__44110 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__44111 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__44112 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__44109;
c__$1 = G__44110;
u__$1 = G__44111;
v__$1 = G__44112;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__44090,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__44090,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__44090,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__44093 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.call(null,u__$1,k,(u__$1.call(null,j) - v__$1.call(null,j)));
if(cljs.core._EQ_.call(null,u__$2.call(null,k),(0))){
var G__44113 = (j + (1));
var G__44114 = k;
var G__44115 = true;
var G__44116 = u__$2;
var G__44117 = v__$1;
var G__44118 = c__$1;
j = G__44113;
k = G__44114;
x = G__44115;
u__$1 = G__44116;
v__$1 = G__44117;
c__$1 = G__44118;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__4009__auto__ = v__$1.call(null,j);
var y__4010__auto__ = u__$2.call(null,k);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__44119 = j__$1;
var G__44120 = k__$1;
var G__44121 = x__$1;
var G__44122 = u__$2;
var G__44123 = v__$2;
var G__44124 = c__$2;
j = G__44119;
k = G__44120;
x = G__44121;
u__$1 = G__44122;
v__$1 = G__44123;
c__$1 = G__44124;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__44125 = j__$1;
var G__44126 = k__$1;
var G__44127 = x;
var G__44128 = u__$2;
var G__44129 = v__$2;
var G__44130 = c__$2;
j = G__44125;
k = G__44126;
x = G__44127;
u__$1 = G__44128;
v__$1 = G__44129;
c__$1 = G__44130;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__44093,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__44093,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__44093,(2),null);
var j = cljs.core.nth.call(null,vec__44093,(3),null);
var k = cljs.core.nth.call(null,vec__44093,(4),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = r;
if(cljs.core.truth_(and__3911__auto__)){
return (((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1)))));
} else {
return and__3911__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = s;
if(cljs.core.truth_(and__3911__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__3911__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__44131 = n;
var G__44132 = m;
var G__44133 = f__$1;
var G__44134 = c__$1;
var G__44135 = u__$1;
var G__44136 = v__$1;
var G__44137 = a__$1;
var G__44138 = b__$1;
var G__44139 = l__$1;
var G__44140 = r;
var G__44141 = s;
n = G__44131;
m = G__44132;
f = G__44133;
c = G__44134;
u = G__44135;
v = G__44136;
a = G__44137;
b = G__44138;
l = G__44139;
r = G__44140;
s = G__44141;
continue;
} else {
var part = (function (){var iter__4292__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__44096(s__44097){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__44097__$1 = s__44097;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44097__$1);
if(temp__5457__auto__){
var s__44097__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44097__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44097__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44099 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44098 = (0);
while(true){
if((i__44098 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__44098);
cljs.core.chunk_append.call(null,b__44099,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (i__44098,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44099,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__44096_$_iter__44100(s__44101){
return (new cljs.core.LazySeq(null,((function (i__44098,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44099,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__44101__$1 = s__44101;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44101__$1);
if(temp__5457__auto____$1){
var s__44101__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44101__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__44101__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__44103 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__44102 = (0);
while(true){
if((i__44102 < size__4291__auto____$1)){
var z = cljs.core._nth.call(null,c__4290__auto____$1,i__44102);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__44103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__44142 = (i__44102 + (1));
i__44102 = G__44142;
continue;
} else {
var G__44143 = (i__44102 + (1));
i__44102 = G__44143;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44103),clojure$math$combinatorics$iter__44096_$_iter__44100.call(null,cljs.core.chunk_rest.call(null,s__44101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44103),null);
}
} else {
var z = cljs.core.first.call(null,s__44101__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__44096_$_iter__44100.call(null,cljs.core.rest.call(null,s__44101__$2)));
} else {
var G__44144 = cljs.core.rest.call(null,s__44101__$2);
s__44101__$1 = G__44144;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__44098,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44099,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__44098,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44099,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__44145 = (i__44098 + (1));
i__44098 = G__44145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44099),clojure$math$combinatorics$iter__44096.call(null,cljs.core.chunk_rest.call(null,s__44097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44099),null);
}
} else {
var y = cljs.core.first.call(null,s__44097__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__44096_$_iter__44104(s__44105){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__44105__$1 = s__44105;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44105__$1);
if(temp__5457__auto____$1){
var s__44105__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44105__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44105__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44107 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44106 = (0);
while(true){
if((i__44106 < size__4291__auto__)){
var z = cljs.core._nth.call(null,c__4290__auto__,i__44106);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__44107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__44146 = (i__44106 + (1));
i__44106 = G__44146;
continue;
} else {
var G__44147 = (i__44106 + (1));
i__44106 = G__44147;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44107),clojure$math$combinatorics$iter__44096_$_iter__44104.call(null,cljs.core.chunk_rest.call(null,s__44105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44107),null);
}
} else {
var z = cljs.core.first.call(null,s__44105__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__44096_$_iter__44104.call(null,cljs.core.rest.call(null,s__44105__$2)));
} else {
var G__44148 = cljs.core.rest.call(null,s__44105__$2);
s__44105__$1 = G__44148;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44097__$2,temp__5457__auto__,vec__44093,u__$1,v__$1,c__$1,j,k))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__44096.call(null,cljs.core.rest.call(null,s__44097__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__44093,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__44093,u__$1,v__$1,c__$1,j,k))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__44093,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__44093,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
});

clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11;

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.call(null,v.call(null,j),(0))){
return j;
} else {
var G__44153 = (j - (1));
j = G__44153;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = r;
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j))));
} else {
return and__3911__auto__;
}
})())){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if(((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1))))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = clojure.math.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__4292__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__44149(s__44150){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__44150__$1 = s__44150;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44150__$1);
if(temp__5457__auto__){
var s__44150__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44150__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44150__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44152 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44151 = (0);
while(true){
if((i__44151 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44151);
cljs.core.chunk_append.call(null,b__44152,(u.call(null,i) - v__$1.call(null,i)));

var G__44154 = (i__44151 + (1));
i__44151 = G__44154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44152),clojure$math$combinatorics$m5_$_iter__44149.call(null,cljs.core.chunk_rest.call(null,s__44150__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44152),null);
}
} else {
var i = cljs.core.first.call(null,s__44150__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__44149.call(null,cljs.core.rest.call(null,s__44150__$2)));
}
} else {
return null;
}
break;
}
});})(v__$1,j))
,null,null));
});})(v__$1,j))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__44155 = cljs.core.rest.call(null,ks);
var G__44156 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__44155;
v__$2 = G__44156;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__44157 = (k_1 - (1));
var G__44158 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__44159 = (amount - vk);
k_1 = G__44157;
v__$3 = G__44158;
amount = G__44159;
continue;
} else {
return cljs.core.assoc.call(null,v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.call(null,l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = f.call(null,l__$1);
return clojure.math.combinatorics.m5.call(null,n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44197 = arguments.length;
var i__4500__auto___44198 = (0);
while(true){
if((i__4500__auto___44198 < len__4499__auto___44197)){
args__4502__auto__.push((arguments[i__4500__auto___44198]));

var G__44199 = (i__4500__auto___44198 + (1));
i__4500__auto___44198 = G__44199;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__44162){
var map__44163 = p__44162;
var map__44163__$1 = ((((!((map__44163 == null)))?(((((map__44163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44163):map__44163);
var from = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if(((((function (){var or__3922__auto__ = from;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__3922__auto__ = to;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec.call(null,items);
var ditems = cljs.core.vec.call(null,cljs.core.distinct.call(null,items__$1));
var freqs = cljs.core.frequencies.call(null,items__$1);
var N = cljs.core.count.call(null,items__$1);
var M = cljs.core.count.call(null,ditems);
var from__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = from;
if(cljs.core.truth_(and__3911__auto__)){
return (from <= (1));
} else {
return and__3911__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = to;
if(cljs.core.truth_(and__3911__auto__)){
return (to >= N);
} else {
return and__3911__auto__;
}
})())?null:to);
if(!(((((1) <= (function (){var or__3922__auto__ = from__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__3922__auto__ = from__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})() <= (function (){var or__3922__auto__ = to__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return N;
}
})())) && (((function (){var or__3922__auto__ = to__$1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return N;
}
})() <= N))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function clojure$math$combinatorics$iter__44165(s__44166){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (){
var s__44166__$1 = s__44166;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44166__$1);
if(temp__5457__auto__){
var s__44166__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44166__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44166__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44168 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44167 = (0);
while(true){
if((i__44167 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44167);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__44168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__44200 = (i__44167 + (1));
i__44167 = G__44200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44168),clojure$math$combinatorics$iter__44165.call(null,cljs.core.chunk_rest.call(null,s__44166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44168),null);
}
} else {
var i = cljs.core.first.call(null,s__44166__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__44165.call(null,cljs.core.rest.call(null,s__44166__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__4292__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function clojure$math$combinatorics$iter__44169(s__44170){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (){
var s__44170__$1 = s__44170;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44170__$1);
if(temp__5457__auto__){
var s__44170__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44170__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44170__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44172 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44171 = (0);
while(true){
if((i__44171 < size__4291__auto__)){
var part = cljs.core._nth.call(null,c__4290__auto__,i__44171);
cljs.core.chunk_append.call(null,b__44172,(function (){var iter__4292__auto__ = ((function (i__44171,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function clojure$math$combinatorics$iter__44169_$_iter__44173(s__44174){
return (new cljs.core.LazySeq(null,((function (i__44171,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (){
var s__44174__$1 = s__44174;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44174__$1);
if(temp__5457__auto____$1){
var s__44174__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44174__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__44174__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__44176 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__44175 = (0);
while(true){
if((i__44175 < size__4291__auto____$1)){
var multiset = cljs.core._nth.call(null,c__4290__auto____$1,i__44175);
cljs.core.chunk_append.call(null,b__44176,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__44175,i__44171,multiset,c__4290__auto____$1,size__4291__auto____$1,b__44176,s__44174__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (p__44177){
var vec__44178 = p__44177;
var index = cljs.core.nth.call(null,vec__44178,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44178,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__44175,i__44171,multiset,c__4290__auto____$1,size__4291__auto____$1,b__44176,s__44174__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,multiset)));

var G__44201 = (i__44175 + (1));
i__44175 = G__44201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44176),clojure$math$combinatorics$iter__44169_$_iter__44173.call(null,cljs.core.chunk_rest.call(null,s__44174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44176),null);
}
} else {
var multiset = cljs.core.first.call(null,s__44174__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__44171,multiset,s__44174__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (p__44181){
var vec__44182 = p__44181;
var index = cljs.core.nth.call(null,vec__44182,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44182,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__44171,multiset,s__44174__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__44169_$_iter__44173.call(null,cljs.core.rest.call(null,s__44174__$2)));
}
} else {
return null;
}
break;
}
});})(i__44171,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,null,null));
});})(i__44171,part,c__4290__auto__,size__4291__auto__,b__44172,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
;
return iter__4292__auto__.call(null,part);
})());

var G__44202 = (i__44171 + (1));
i__44171 = G__44202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44172),clojure$math$combinatorics$iter__44169.call(null,cljs.core.chunk_rest.call(null,s__44170__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44172),null);
}
} else {
var part = cljs.core.first.call(null,s__44170__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function clojure$math$combinatorics$iter__44169_$_iter__44185(s__44186){
return (new cljs.core.LazySeq(null,((function (part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (){
var s__44186__$1 = s__44186;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44186__$1);
if(temp__5457__auto____$1){
var s__44186__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44186__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44186__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44188 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44187 = (0);
while(true){
if((i__44187 < size__4291__auto__)){
var multiset = cljs.core._nth.call(null,c__4290__auto__,i__44187);
cljs.core.chunk_append.call(null,b__44188,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__44187,multiset,c__4290__auto__,size__4291__auto__,b__44188,s__44186__$2,temp__5457__auto____$1,part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (p__44189){
var vec__44190 = p__44189;
var index = cljs.core.nth.call(null,vec__44190,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44190,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__44187,multiset,c__4290__auto__,size__4291__auto__,b__44188,s__44186__$2,temp__5457__auto____$1,part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,multiset)));

var G__44203 = (i__44187 + (1));
i__44187 = G__44203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44188),clojure$math$combinatorics$iter__44169_$_iter__44185.call(null,cljs.core.chunk_rest.call(null,s__44186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44188),null);
}
} else {
var multiset = cljs.core.first.call(null,s__44186__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__44186__$2,temp__5457__auto____$1,part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to){
return (function (p__44193){
var vec__44194 = p__44193;
var index = cljs.core.nth.call(null,vec__44194,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44194,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__44186__$2,temp__5457__auto____$1,part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__44169_$_iter__44185.call(null,cljs.core.rest.call(null,s__44186__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,null,null));
});})(part,s__44170__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
;
return iter__4292__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__44169.call(null,cljs.core.rest.call(null,s__44170__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44163,map__44163__$1,from,to))
;
return iter__4292__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq44160){
var G__44161 = cljs.core.first.call(null,seq44160);
var seq44160__$1 = cljs.core.next.call(null,seq44160);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44161,seq44160__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44206 = arguments.length;
var i__4500__auto___44207 = (0);
while(true){
if((i__4500__auto___44207 < len__4499__auto___44206)){
args__4502__auto__.push((arguments[i__4500__auto___44207]));

var G__44208 = (i__4500__auto___44207 + (1));
i__4500__auto___44207 = G__44208;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.call(null,clojure.math.combinatorics.partitions_M,items,args);

}
}
});

clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq44204){
var G__44205 = cljs.core.first.call(null,seq44204);
var seq44204__$1 = cljs.core.next.call(null,seq44204);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44205,seq44204__$1);
});


//# sourceMappingURL=combinatorics.js.map?rel=1526415185825
