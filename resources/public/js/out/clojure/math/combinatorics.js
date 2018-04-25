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
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__43852(s__43853){
return (new cljs.core.LazySeq(null,(function (){
var s__43853__$1 = s__43853;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43853__$1);
if(temp__5457__auto__){
var s__43853__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43853__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43853__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43855 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43854 = (0);
while(true){
if((i__43854 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__43854);
cljs.core.chunk_append.call(null,b__43855,((j + cnt) + (- (n + (1)))));

var G__43856 = (i__43854 + (1));
i__43854 = G__43856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43855),clojure$math$combinatorics$index_combinations_$_iter__43852.call(null,cljs.core.chunk_rest.call(null,s__43853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43855),null);
}
} else {
var j = cljs.core.first.call(null,s__43853__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__43852.call(null,cljs.core.rest.call(null,s__43853__$2)));
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
var G__43857 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__43858 = (j__$1 - (1));
c__$3 = G__43857;
j__$1 = G__43858;
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
var G__43859 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__43860 = (index__$1 + (1));
var G__43861 = (already_distributed__$1 + mi);
distribution__$1 = G__43859;
index__$1 = G__43860;
already_distributed__$1 = G__43861;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__43862 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__43862,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43862,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__43862,(2),null);
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
var vec__43865 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__43865,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__43865,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__43865,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__43868 = distribution__$2;
distribution__$1 = G__43868;
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
return (function clojure$math$combinatorics$multi_comb_$_iter__43869(s__43870){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__43870__$1 = s__43870;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43870__$1);
if(temp__5457__auto__){
var s__43870__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43870__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43870__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43872 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43871 = (0);
while(true){
if((i__43871 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43871);
cljs.core.chunk_append.call(null,b__43872,f.call(null,v.call(null,i)));

var G__43897 = (i__43871 + (1));
i__43871 = G__43897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43872),clojure$math$combinatorics$multi_comb_$_iter__43869.call(null,cljs.core.chunk_rest.call(null,s__43870__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43872),null);
}
} else {
var i = cljs.core.first.call(null,s__43870__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__43869.call(null,cljs.core.rest.call(null,s__43870__$2)));
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
return (function clojure$math$combinatorics$multi_comb_$_iter__43873(s__43874){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
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
var q = cljs.core._nth.call(null,c__4290__auto__,i__43875);
cljs.core.chunk_append.call(null,b__43876,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (i__43875,q,c__4290__auto__,size__4291__auto__,b__43876,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43873_$_iter__43877(s__43878){
return (new cljs.core.LazySeq(null,((function (i__43875,q,c__4290__auto__,size__4291__auto__,b__43876,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__43878__$1 = s__43878;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43878__$1);
if(temp__5457__auto____$1){
var s__43878__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43878__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__43878__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__43880 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__43879 = (0);
while(true){
if((i__43879 < size__4291__auto____$1)){
var vec__43881 = cljs.core._nth.call(null,c__4290__auto____$1,i__43879);
var index = cljs.core.nth.call(null,vec__43881,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43881,(1),null);
var _ = cljs.core.nth.call(null,vec__43881,(2),null);
cljs.core.chunk_append.call(null,b__43880,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__43898 = (i__43879 + (1));
i__43879 = G__43898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43880),clojure$math$combinatorics$multi_comb_$_iter__43873_$_iter__43877.call(null,cljs.core.chunk_rest.call(null,s__43878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43880),null);
}
} else {
var vec__43884 = cljs.core.first.call(null,s__43878__$2);
var index = cljs.core.nth.call(null,vec__43884,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43884,(1),null);
var _ = cljs.core.nth.call(null,vec__43884,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__43873_$_iter__43877.call(null,cljs.core.rest.call(null,s__43878__$2)));
}
} else {
return null;
}
break;
}
});})(i__43875,q,c__4290__auto__,size__4291__auto__,b__43876,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(i__43875,q,c__4290__auto__,size__4291__auto__,b__43876,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__4292__auto__.call(null,q);
})()));

var G__43899 = (i__43875 + (1));
i__43875 = G__43899;
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
var q = cljs.core.first.call(null,s__43874__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (q,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__43873_$_iter__43887(s__43888){
return (new cljs.core.LazySeq(null,((function (q,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__43888__$1 = s__43888;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__43888__$1);
if(temp__5457__auto____$1){
var s__43888__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43888__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43888__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43890 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43889 = (0);
while(true){
if((i__43889 < size__4291__auto__)){
var vec__43891 = cljs.core._nth.call(null,c__4290__auto__,i__43889);
var index = cljs.core.nth.call(null,vec__43891,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43891,(1),null);
var _ = cljs.core.nth.call(null,vec__43891,(2),null);
cljs.core.chunk_append.call(null,b__43890,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__43900 = (i__43889 + (1));
i__43889 = G__43900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43890),clojure$math$combinatorics$multi_comb_$_iter__43873_$_iter__43887.call(null,cljs.core.chunk_rest.call(null,s__43888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43890),null);
}
} else {
var vec__43894 = cljs.core.first.call(null,s__43888__$2);
var index = cljs.core.nth.call(null,vec__43894,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__43894,(1),null);
var _ = cljs.core.nth.call(null,vec__43894,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__43873_$_iter__43887.call(null,cljs.core.rest.call(null,s__43888__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__43874__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__4292__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__43873.call(null,cljs.core.rest.call(null,s__43874__$2)));
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
return (function clojure$math$combinatorics$combinations_$_iter__43902(s__43903){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__43903__$1 = s__43903;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43903__$1);
if(temp__5457__auto__){
var s__43903__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43903__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43903__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43905 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43904 = (0);
while(true){
if((i__43904 < size__4291__auto__)){
var item = cljs.core._nth.call(null,c__4290__auto__,i__43904);
cljs.core.chunk_append.call(null,b__43905,(new cljs.core.List(null,item,null,(1),null)));

var G__43906 = (i__43904 + (1));
i__43904 = G__43906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43905),clojure$math$combinatorics$combinations_$_iter__43902.call(null,cljs.core.chunk_rest.call(null,s__43903__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43905),null);
}
} else {
var item = cljs.core.first.call(null,s__43903__$2);
return cljs.core.cons.call(null,(new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__43902.call(null,cljs.core.rest.call(null,s__43903__$2)));
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
return (function (p1__43901_SHARP_){
return cljs.core.map.call(null,v_items,p1__43901_SHARP_);
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
var len__4499__auto___43908 = arguments.length;
var i__4500__auto___43909 = (0);
while(true){
if((i__4500__auto___43909 < len__4499__auto___43908)){
args__4502__auto__.push((arguments[i__4500__auto___43909]));

var G__43910 = (i__4500__auto___43909 + (1));
i__4500__auto___43909 = G__43910;
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
var G__43911 = (i - (1));
var G__43912 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__43911;
v_seqs__$2 = G__43912;
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
clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq43907){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43907));
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
var G__43913 = (i - (1));
i = G__43913;
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
var G__43914 = (i - (1));
i = G__43914;
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
var G__43915 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__43916 = (k + (1));
var G__43917 = (l__$1 - (1));
v__$1 = G__43915;
k = G__43916;
l__$1 = G__43917;
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
return (function clojure$math$combinatorics$multi_perm_$_iter__43918(s__43919){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__43919__$1 = s__43919;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43919__$1);
if(temp__5457__auto__){
var s__43919__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43919__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43919__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43921 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43920 = (0);
while(true){
if((i__43920 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43920);
cljs.core.chunk_append.call(null,b__43921,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43922 = (i__43920 + (1));
i__43920 = G__43922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43921),clojure$math$combinatorics$multi_perm_$_iter__43918.call(null,cljs.core.chunk_rest.call(null,s__43919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43921),null);
}
} else {
var i = cljs.core.first.call(null,s__43919__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__43918.call(null,cljs.core.rest.call(null,s__43919__$2)));
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
return (function (p1__43923_SHARP_){
return cljs.core.map.call(null,v,p1__43923_SHARP_);
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
var G__43924 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__43925 = (n__$1 - (1));
acc = G__43924;
n__$1 = G__43925;
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
var G__43926 = q;
var G__43927 = cljs.core.cons.call(null,r,digits);
var G__43928 = (divisor + (1));
n__$1 = G__43926;
digits = G__43927;
divisor = G__43928;
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
var G__43929 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__43930 = cljs.core.rest.call(null,l__$1);
var G__43931 = (n__$1 - (1));
acc = G__43929;
l__$1 = G__43930;
n__$1 = G__43931;
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
var G__43932 = cljs.core.rest.call(null,indices);
var G__43933 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__43934 = cljs.core.conj.call(null,perm,item);
indices = G__43932;
l__$1 = G__43933;
perm = G__43934;
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
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__43935(s__43936){
return (new cljs.core.LazySeq(null,(function (){
var s__43936__$1 = s__43936;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43936__$1);
if(temp__5457__auto__){
var s__43936__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43936__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43936__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43938 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43937 = (0);
while(true){
if((i__43937 < size__4291__auto__)){
var vec__43939 = cljs.core._nth.call(null,c__4290__auto__,i__43937);
var k = cljs.core.nth.call(null,vec__43939,(0),null);
var v = cljs.core.nth.call(null,vec__43939,(1),null);
cljs.core.chunk_append.call(null,b__43938,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__43945 = (i__43937 + (1));
i__43937 = G__43945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43938),clojure$math$combinatorics$initial_perm_numbers_$_iter__43935.call(null,cljs.core.chunk_rest.call(null,s__43936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43938),null);
}
} else {
var vec__43942 = cljs.core.first.call(null,s__43936__$2);
var k = cljs.core.nth.call(null,vec__43942,(0),null);
var v = cljs.core.nth.call(null,vec__43942,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__43935.call(null,cljs.core.rest.call(null,s__43936__$2)));
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
var G__43946 = cljs.core.rest.call(null,perm_numbers__$1);
var G__43947 = (index + (1));
perm_numbers__$1 = G__43946;
index = G__43947;
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
var vec__43948 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__43948,(0),null);
var remainder = cljs.core.nth.call(null,vec__43948,(1),null);
var G__43951 = remainder;
var G__43952 = cljs.core.conj.call(null,digits,index);
var G__43953 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__43951;
digits = G__43952;
freqs__$1 = G__43953;
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
var G__43954 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__43955 = cljs.core.rest.call(null,indices);
var G__43956 = cljs.core.conj.call(null,perm,item);
freqs = G__43954;
indices = G__43955;
perm = G__43956;
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
return (function clojure$math$combinatorics$nth_permutation_$_iter__43957(s__43958){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__43958__$1 = s__43958;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43958__$1);
if(temp__5457__auto__){
var s__43958__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43958__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43958__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43960 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43959 = (0);
while(true){
if((i__43959 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43959);
cljs.core.chunk_append.call(null,b__43960,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43961 = (i__43959 + (1));
i__43959 = G__43961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43960),clojure$math$combinatorics$nth_permutation_$_iter__43957.call(null,cljs.core.chunk_rest.call(null,s__43958__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43960),null);
}
} else {
var i = cljs.core.first.call(null,s__43958__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__43957.call(null,cljs.core.rest.call(null,s__43958__$2)));
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
return (function clojure$math$combinatorics$drop_permutations_$_iter__43962(s__43963){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__43963__$1 = s__43963;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43963__$1);
if(temp__5457__auto__){
var s__43963__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43963__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43963__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43965 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43964 = (0);
while(true){
if((i__43964 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43964);
cljs.core.chunk_append.call(null,b__43965,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__43966 = (i__43964 + (1));
i__43964 = G__43966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43965),clojure$math$combinatorics$drop_permutations_$_iter__43962.call(null,cljs.core.chunk_rest.call(null,s__43963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43965),null);
}
} else {
var i = cljs.core.first.call(null,s__43963__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__43962.call(null,cljs.core.rest.call(null,s__43963__$2)));
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
var G__43967 = n;
var G__43968 = (n - k);
n = G__43967;
k = G__43968;
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
var count_combinations_from_frequencies43969 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43969;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__43970 = n__$1;
var G__43971 = y;
var G__43972 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__43970;
y = G__43971;
z = G__43972;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__43973 = n__$1;
var G__43974 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__43975 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__43973;
y = G__43974;
z = G__43975;
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
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43976(s__43977){
return (new cljs.core.LazySeq(null,(function (){
var s__43977__$1 = s__43977;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43977__$1);
if(temp__5457__auto__){
var s__43977__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43977__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43977__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43979 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43978 = (0);
while(true){
if((i__43978 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__43978);
cljs.core.chunk_append.call(null,b__43979,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__43980 = (i__43978 + (1));
i__43978 = G__43980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43979),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43976.call(null,cljs.core.chunk_rest.call(null,s__43977__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43979),null);
}
} else {
var i = cljs.core.first.call(null,s__43977__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__43976.call(null,cljs.core.rest.call(null,s__43977__$2)));
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
var count_combinations_from_frequencies43981 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies43981;
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
var G__43982 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__43983 = cljs.core.rest.call(null,items__$1);
var G__43984 = (t__$1 - (1));
var G__43985 = n__$1;
comb = G__43982;
items__$1 = G__43983;
t__$1 = G__43984;
n__$1 = G__43985;
continue;
} else {
var G__43986 = comb;
var G__43987 = cljs.core.rest.call(null,items__$1);
var G__43988 = t__$1;
var G__43989 = (n__$1 - dc_dt);
comb = G__43986;
items__$1 = G__43987;
t__$1 = G__43988;
n__$1 = G__43989;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__43990(s__43991){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__43991__$1 = s__43991;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__43991__$1);
if(temp__5457__auto__){
var s__43991__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43991__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__43991__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__43993 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__43992 = (0);
while(true){
if((i__43992 < size__4291__auto__)){
var vec__43994 = cljs.core._nth.call(null,c__4290__auto__,i__43992);
var k = cljs.core.nth.call(null,vec__43994,(0),null);
var v = cljs.core.nth.call(null,vec__43994,(1),null);
cljs.core.chunk_append.call(null,b__43993,cljs.core.repeat.call(null,v,k));

var G__44000 = (i__43992 + (1));
i__43992 = G__44000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43993),clojure$math$combinatorics$nth_combination_freqs_$_iter__43990.call(null,cljs.core.chunk_rest.call(null,s__43991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43993),null);
}
} else {
var vec__43997 = cljs.core.first.call(null,s__43991__$2);
var k = cljs.core.nth.call(null,vec__43997,(0),null);
var v = cljs.core.nth.call(null,vec__43997,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__43990.call(null,cljs.core.rest.call(null,s__43991__$2)));
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
var G__44001 = cljs.core.conj.call(null,comb,first_key);
var G__44002 = remove_one_key;
var G__44003 = (t__$1 - (1));
var G__44004 = n__$1;
comb = G__44001;
freqs__$1 = G__44002;
t__$1 = G__44003;
n__$1 = G__44004;
continue;
} else {
var G__44005 = comb;
var G__44006 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__44007 = t__$1;
var G__44008 = (n__$1 - dc_dt);
comb = G__44005;
freqs__$1 = G__44006;
t__$1 = G__44007;
n__$1 = G__44008;
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
var count_combinations_from_frequencies44009 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__4292__auto__ = ((function (v,f,count_combinations_from_frequencies44009){
return (function clojure$math$combinatorics$nth_combination_$_iter__44010(s__44011){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies44009){
return (function (){
var s__44011__$1 = s__44011;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44011__$1);
if(temp__5457__auto__){
var s__44011__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44011__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44011__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44013 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44012 = (0);
while(true){
if((i__44012 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44012);
cljs.core.chunk_append.call(null,b__44013,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__44014 = (i__44012 + (1));
i__44012 = G__44014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44013),clojure$math$combinatorics$nth_combination_$_iter__44010.call(null,cljs.core.chunk_rest.call(null,s__44011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44013),null);
}
} else {
var i = cljs.core.first.call(null,s__44011__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__44010.call(null,cljs.core.rest.call(null,s__44011__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies44009))
,null,null));
});})(v,f,count_combinations_from_frequencies44009))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies44009;
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
var G__44015 = (size + (1));
var G__44016 = (n__$1 - num_combinations);
size = G__44015;
n__$1 = G__44016;
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
var G__44017 = cljs.core.rest.call(null,l__$1);
var G__44018 = (n + (1));
l__$1 = G__44017;
n = G__44018;
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
var G__44019 = cljs.core.rest.call(null,l__$1);
var G__44020 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__44021 = (n - (1));
l__$1 = G__44019;
index = G__44020;
n = G__44021;
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
var G__44027 = cljs.core.rest.call(null,l__$1);
var G__44028 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4292__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__44023(s__44024){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__44024__$1 = s__44024;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44024__$1);
if(temp__5457__auto__){
var s__44024__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44024__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44024__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44026 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44025 = (0);
while(true){
if((i__44025 < size__4291__auto__)){
var k = cljs.core._nth.call(null,c__4290__auto__,i__44025);
cljs.core.chunk_append.call(null,b__44026,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__44030 = (i__44025 + (1));
i__44025 = G__44030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44026),clojure$math$combinatorics$permutation_index_duplicates_$_iter__44023.call(null,cljs.core.chunk_rest.call(null,s__44024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44026),null);
}
} else {
var k = cljs.core.first.call(null,s__44024__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__44023.call(null,cljs.core.rest.call(null,s__44024__$2)));
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
return (function (p1__44022_SHARP_){
return (cljs.core.compare.call(null,p1__44022_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__4292__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__44029 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__44027;
index = G__44028;
freqs = G__44029;
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
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function clojure$math$combinatorics$init_$_iter__44031(s__44032){
return (new cljs.core.LazySeq(null,(function (){
var s__44032__$1 = s__44032;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44032__$1);
if(temp__5457__auto__){
var s__44032__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44032__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44032__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44034 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44033 = (0);
while(true){
if((i__44033 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44033);
cljs.core.chunk_append.call(null,b__44034,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (i - ((n - s) - (-1)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})());

var G__44035 = (i__44033 + (1));
i__44033 = G__44035;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44034),clojure$math$combinatorics$init_$_iter__44031.call(null,cljs.core.chunk_rest.call(null,s__44032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44034),null);
}
} else {
var i = cljs.core.first.call(null,s__44032__$2);
return cljs.core.cons.call(null,(function (){var x__4006__auto__ = (0);
var y__4007__auto__ = (i - ((n - s) - (-1)));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})(),clojure$math$combinatorics$init_$_iter__44031.call(null,cljs.core.rest.call(null,s__44032__$2)));
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
var G__44037 = arguments.length;
switch (G__44037) {
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
var G__44042 = (j - (1));
j = G__44042;
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
var vec__44038 = (function (){var a__$2 = a__$1;
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
var G__44043 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__44044 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__44045 = (i + (1));
var G__44046 = (function (){var x__4006__auto__ = current_max;
var y__4007__auto__ = (new_a_i + (1));
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
a__$2 = G__44043;
b__$1 = G__44044;
i = G__44045;
current_max = G__44046;
continue;
} else {
var G__44047 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__44048 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__44049 = (i + (1));
var G__44050 = current_max;
a__$2 = G__44047;
b__$1 = G__44048;
i = G__44049;
current_max = G__44050;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__44038,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__44038,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44060 = arguments.length;
var i__4500__auto___44061 = (0);
while(true){
if((i__4500__auto___44061 < len__4499__auto___44060)){
args__4502__auto__.push((arguments[i__4500__auto___44061]));

var G__44062 = (i__4500__auto___44061 + (1));
i__4500__auto___44061 = G__44062;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__44053){
var map__44054 = p__44053;
var map__44054__$1 = ((((!((map__44054 == null)))?(((((map__44054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44054):map__44054);
var from = cljs.core.get.call(null,map__44054__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__44054__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__4292__auto__ = ((function (growth_strings,from__$1,to__$1,map__44054,map__44054__$1,from,to){
return (function clojure$math$combinatorics$iter__44056(s__44057){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__44054,map__44054__$1,from,to){
return (function (){
var s__44057__$1 = s__44057;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44057__$1);
if(temp__5457__auto__){
var s__44057__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44057__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44057__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44059 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44058 = (0);
while(true){
if((i__44058 < size__4291__auto__)){
var growth_string = cljs.core._nth.call(null,c__4290__auto__,i__44058);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__44059,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__44063 = (i__44058 + (1));
i__44058 = G__44063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44059),clojure$math$combinatorics$iter__44056.call(null,cljs.core.chunk_rest.call(null,s__44057__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44059),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__44057__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__44056.call(null,cljs.core.rest.call(null,s__44057__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__44054,map__44054__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__44054,map__44054__$1,from,to))
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
clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq44051){
var G__44052 = cljs.core.first.call(null,seq44051);
var seq44051__$1 = cljs.core.next.call(null,seq44051);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44052,seq44051__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44078 = arguments.length;
var i__4500__auto___44079 = (0);
while(true){
if((i__4500__auto___44079 < len__4499__auto___44078)){
args__4502__auto__.push((arguments[i__4500__auto___44079]));

var G__44080 = (i__4500__auto___44079 + (1));
i__4500__auto___44079 = G__44080;
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
return (function clojure$math$combinatorics$iter__44066(s__44067){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__44067__$1 = s__44067;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44067__$1);
if(temp__5457__auto__){
var s__44067__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44067__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44067__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44069 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44068 = (0);
while(true){
if((i__44068 < size__4291__auto__)){
var parts = cljs.core._nth.call(null,c__4290__auto__,i__44068);
cljs.core.chunk_append.call(null,b__44069,(function (){var iter__4292__auto__ = ((function (i__44068,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__44066_$_iter__44070(s__44071){
return (new cljs.core.LazySeq(null,((function (i__44068,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__44071__$1 = s__44071;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44071__$1);
if(temp__5457__auto____$1){
var s__44071__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44071__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__44071__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__44073 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__44072 = (0);
while(true){
if((i__44072 < size__4291__auto____$1)){
var part = cljs.core._nth.call(null,c__4290__auto____$1,i__44072);
cljs.core.chunk_append.call(null,b__44073,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__44072,i__44068,part,c__4290__auto____$1,size__4291__auto____$1,b__44073,s__44071__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__44072,i__44068,part,c__4290__auto____$1,size__4291__auto____$1,b__44073,s__44071__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__44081 = (i__44072 + (1));
i__44072 = G__44081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44073),clojure$math$combinatorics$iter__44066_$_iter__44070.call(null,cljs.core.chunk_rest.call(null,s__44071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44073),null);
}
} else {
var part = cljs.core.first.call(null,s__44071__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__44068,part,s__44071__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__44068,part,s__44071__$2,temp__5457__auto____$1,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__44066_$_iter__44070.call(null,cljs.core.rest.call(null,s__44071__$2)));
}
} else {
return null;
}
break;
}
});})(i__44068,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(i__44068,parts,c__4290__auto__,size__4291__auto__,b__44069,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__4292__auto__.call(null,parts);
})());

var G__44082 = (i__44068 + (1));
i__44068 = G__44082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44069),clojure$math$combinatorics$iter__44066.call(null,cljs.core.chunk_rest.call(null,s__44067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44069),null);
}
} else {
var parts = cljs.core.first.call(null,s__44067__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__44066_$_iter__44074(s__44075){
return (new cljs.core.LazySeq(null,((function (parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__44075__$1 = s__44075;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44075__$1);
if(temp__5457__auto____$1){
var s__44075__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44075__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44075__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44077 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44076 = (0);
while(true){
if((i__44076 < size__4291__auto__)){
var part = cljs.core._nth.call(null,c__4290__auto__,i__44076);
cljs.core.chunk_append.call(null,b__44077,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__44076,part,c__4290__auto__,size__4291__auto__,b__44077,s__44075__$2,temp__5457__auto____$1,parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__44076,part,c__4290__auto__,size__4291__auto__,b__44077,s__44075__$2,temp__5457__auto____$1,parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__44083 = (i__44076 + (1));
i__44076 = G__44083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44077),clojure$math$combinatorics$iter__44066_$_iter__44074.call(null,cljs.core.chunk_rest.call(null,s__44075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44077),null);
}
} else {
var part = cljs.core.first.call(null,s__44075__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__44075__$2,temp__5457__auto____$1,parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__44075__$2,temp__5457__auto____$1,parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__44066_$_iter__44074.call(null,cljs.core.rest.call(null,s__44075__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__44067__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__4292__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__44066.call(null,cljs.core.rest.call(null,s__44067__$2)));
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
clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq44064){
var G__44065 = cljs.core.first.call(null,seq44064);
var seq44064__$1 = cljs.core.next.call(null,seq44064);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44065,seq44064__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__44085 = arguments.length;
switch (G__44085) {
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
var vec__44086 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__44105 = (j + (1));
var G__44106 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__44107 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__44108 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__44105;
c__$1 = G__44106;
u__$1 = G__44107;
v__$1 = G__44108;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__44086,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__44086,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__44086,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__44089 = (function (){var j = a;
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
var G__44109 = (j + (1));
var G__44110 = k;
var G__44111 = true;
var G__44112 = u__$2;
var G__44113 = v__$1;
var G__44114 = c__$1;
j = G__44109;
k = G__44110;
x = G__44111;
u__$1 = G__44112;
v__$1 = G__44113;
c__$1 = G__44114;
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
var G__44115 = j__$1;
var G__44116 = k__$1;
var G__44117 = x__$1;
var G__44118 = u__$2;
var G__44119 = v__$2;
var G__44120 = c__$2;
j = G__44115;
k = G__44116;
x = G__44117;
u__$1 = G__44118;
v__$1 = G__44119;
c__$1 = G__44120;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__44121 = j__$1;
var G__44122 = k__$1;
var G__44123 = x;
var G__44124 = u__$2;
var G__44125 = v__$2;
var G__44126 = c__$2;
j = G__44121;
k = G__44122;
x = G__44123;
u__$1 = G__44124;
v__$1 = G__44125;
c__$1 = G__44126;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__44089,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__44089,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__44089,(2),null);
var j = cljs.core.nth.call(null,vec__44089,(3),null);
var k = cljs.core.nth.call(null,vec__44089,(4),null);
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
var G__44127 = n;
var G__44128 = m;
var G__44129 = f__$1;
var G__44130 = c__$1;
var G__44131 = u__$1;
var G__44132 = v__$1;
var G__44133 = a__$1;
var G__44134 = b__$1;
var G__44135 = l__$1;
var G__44136 = r;
var G__44137 = s;
n = G__44127;
m = G__44128;
f = G__44129;
c = G__44130;
u = G__44131;
v = G__44132;
a = G__44133;
b = G__44134;
l = G__44135;
r = G__44136;
s = G__44137;
continue;
} else {
var part = (function (){var iter__4292__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__44092(s__44093){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__44093__$1 = s__44093;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44093__$1);
if(temp__5457__auto__){
var s__44093__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44093__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44093__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44095 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44094 = (0);
while(true){
if((i__44094 < size__4291__auto__)){
var y = cljs.core._nth.call(null,c__4290__auto__,i__44094);
cljs.core.chunk_append.call(null,b__44095,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (i__44094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44095,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__44092_$_iter__44096(s__44097){
return (new cljs.core.LazySeq(null,((function (i__44094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44095,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__44097__$1 = s__44097;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44097__$1);
if(temp__5457__auto____$1){
var s__44097__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44097__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__44097__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__44099 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__44098 = (0);
while(true){
if((i__44098 < size__4291__auto____$1)){
var z = cljs.core._nth.call(null,c__4290__auto____$1,i__44098);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__44099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__44138 = (i__44098 + (1));
i__44098 = G__44138;
continue;
} else {
var G__44139 = (i__44098 + (1));
i__44098 = G__44139;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44099),clojure$math$combinatorics$iter__44092_$_iter__44096.call(null,cljs.core.chunk_rest.call(null,s__44097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44099),null);
}
} else {
var z = cljs.core.first.call(null,s__44097__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__44092_$_iter__44096.call(null,cljs.core.rest.call(null,s__44097__$2)));
} else {
var G__44140 = cljs.core.rest.call(null,s__44097__$2);
s__44097__$1 = G__44140;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__44094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44095,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__44094,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4290__auto__,size__4291__auto__,b__44095,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__44141 = (i__44094 + (1));
i__44094 = G__44141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44095),clojure$math$combinatorics$iter__44092.call(null,cljs.core.chunk_rest.call(null,s__44093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44095),null);
}
} else {
var y = cljs.core.first.call(null,s__44093__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__44092_$_iter__44100(s__44101){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__44101__$1 = s__44101;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44101__$1);
if(temp__5457__auto____$1){
var s__44101__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44101__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44101__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44103 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44102 = (0);
while(true){
if((i__44102 < size__4291__auto__)){
var z = cljs.core._nth.call(null,c__4290__auto__,i__44102);
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44103),clojure$math$combinatorics$iter__44092_$_iter__44100.call(null,cljs.core.chunk_rest.call(null,s__44101__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44103),null);
}
} else {
var z = cljs.core.first.call(null,s__44101__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__44092_$_iter__44100.call(null,cljs.core.rest.call(null,s__44101__$2)));
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
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__44093__$2,temp__5457__auto__,vec__44089,u__$1,v__$1,c__$1,j,k))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__44092.call(null,cljs.core.rest.call(null,s__44093__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__44089,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__44089,u__$1,v__$1,c__$1,j,k))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__44089,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__44089,u__$1,v__$1,c__$1,j,k))
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
var G__44149 = (j - (1));
j = G__44149;
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
return (function clojure$math$combinatorics$m5_$_iter__44145(s__44146){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__44146__$1 = s__44146;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44146__$1);
if(temp__5457__auto__){
var s__44146__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44146__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44146__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44148 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44147 = (0);
while(true){
if((i__44147 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44147);
cljs.core.chunk_append.call(null,b__44148,(u.call(null,i) - v__$1.call(null,i)));

var G__44150 = (i__44147 + (1));
i__44147 = G__44150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44148),clojure$math$combinatorics$m5_$_iter__44145.call(null,cljs.core.chunk_rest.call(null,s__44146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44148),null);
}
} else {
var i = cljs.core.first.call(null,s__44146__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__44145.call(null,cljs.core.rest.call(null,s__44146__$2)));
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
var G__44151 = cljs.core.rest.call(null,ks);
var G__44152 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__44151;
v__$2 = G__44152;
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
var G__44153 = (k_1 - (1));
var G__44154 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__44155 = (amount - vk);
k_1 = G__44153;
v__$3 = G__44154;
amount = G__44155;
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
var len__4499__auto___44193 = arguments.length;
var i__4500__auto___44194 = (0);
while(true){
if((i__4500__auto___44194 < len__4499__auto___44193)){
args__4502__auto__.push((arguments[i__4500__auto___44194]));

var G__44195 = (i__4500__auto___44194 + (1));
i__4500__auto___44194 = G__44195;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__44158){
var map__44159 = p__44158;
var map__44159__$1 = ((((!((map__44159 == null)))?(((((map__44159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44159):map__44159);
var from = cljs.core.get.call(null,map__44159__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__44159__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4292__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function clojure$math$combinatorics$iter__44161(s__44162){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (){
var s__44162__$1 = s__44162;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44162__$1);
if(temp__5457__auto__){
var s__44162__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44162__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44162__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44164 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44163 = (0);
while(true){
if((i__44163 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__44163);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__44164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__44196 = (i__44163 + (1));
i__44163 = G__44196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44164),clojure$math$combinatorics$iter__44161.call(null,cljs.core.chunk_rest.call(null,s__44162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44164),null);
}
} else {
var i = cljs.core.first.call(null,s__44162__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__44161.call(null,cljs.core.rest.call(null,s__44162__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__4292__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function clojure$math$combinatorics$iter__44165(s__44166){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
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
var part = cljs.core._nth.call(null,c__4290__auto__,i__44167);
cljs.core.chunk_append.call(null,b__44168,(function (){var iter__4292__auto__ = ((function (i__44167,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function clojure$math$combinatorics$iter__44165_$_iter__44169(s__44170){
return (new cljs.core.LazySeq(null,((function (i__44167,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (){
var s__44170__$1 = s__44170;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44170__$1);
if(temp__5457__auto____$1){
var s__44170__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44170__$2)){
var c__4290__auto____$1 = cljs.core.chunk_first.call(null,s__44170__$2);
var size__4291__auto____$1 = cljs.core.count.call(null,c__4290__auto____$1);
var b__44172 = cljs.core.chunk_buffer.call(null,size__4291__auto____$1);
if((function (){var i__44171 = (0);
while(true){
if((i__44171 < size__4291__auto____$1)){
var multiset = cljs.core._nth.call(null,c__4290__auto____$1,i__44171);
cljs.core.chunk_append.call(null,b__44172,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__44171,i__44167,multiset,c__4290__auto____$1,size__4291__auto____$1,b__44172,s__44170__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (p__44173){
var vec__44174 = p__44173;
var index = cljs.core.nth.call(null,vec__44174,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44174,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__44171,i__44167,multiset,c__4290__auto____$1,size__4291__auto____$1,b__44172,s__44170__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,multiset)));

var G__44197 = (i__44171 + (1));
i__44171 = G__44197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44172),clojure$math$combinatorics$iter__44165_$_iter__44169.call(null,cljs.core.chunk_rest.call(null,s__44170__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44172),null);
}
} else {
var multiset = cljs.core.first.call(null,s__44170__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__44167,multiset,s__44170__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (p__44177){
var vec__44178 = p__44177;
var index = cljs.core.nth.call(null,vec__44178,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44178,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__44167,multiset,s__44170__$2,temp__5457__auto____$1,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__44165_$_iter__44169.call(null,cljs.core.rest.call(null,s__44170__$2)));
}
} else {
return null;
}
break;
}
});})(i__44167,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,null,null));
});})(i__44167,part,c__4290__auto__,size__4291__auto__,b__44168,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
;
return iter__4292__auto__.call(null,part);
})());

var G__44198 = (i__44167 + (1));
i__44167 = G__44198;
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
var part = cljs.core.first.call(null,s__44166__$2);
return cljs.core.cons.call(null,(function (){var iter__4292__auto__ = ((function (part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function clojure$math$combinatorics$iter__44165_$_iter__44181(s__44182){
return (new cljs.core.LazySeq(null,((function (part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (){
var s__44182__$1 = s__44182;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__44182__$1);
if(temp__5457__auto____$1){
var s__44182__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44182__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__44182__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__44184 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__44183 = (0);
while(true){
if((i__44183 < size__4291__auto__)){
var multiset = cljs.core._nth.call(null,c__4290__auto__,i__44183);
cljs.core.chunk_append.call(null,b__44184,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__44183,multiset,c__4290__auto__,size__4291__auto__,b__44184,s__44182__$2,temp__5457__auto____$1,part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (p__44185){
var vec__44186 = p__44185;
var index = cljs.core.nth.call(null,vec__44186,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44186,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__44183,multiset,c__4290__auto__,size__4291__auto__,b__44184,s__44182__$2,temp__5457__auto____$1,part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,multiset)));

var G__44199 = (i__44183 + (1));
i__44183 = G__44199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44184),clojure$math$combinatorics$iter__44165_$_iter__44181.call(null,cljs.core.chunk_rest.call(null,s__44182__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44184),null);
}
} else {
var multiset = cljs.core.first.call(null,s__44182__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__44182__$2,temp__5457__auto____$1,part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to){
return (function (p__44189){
var vec__44190 = p__44189;
var index = cljs.core.nth.call(null,vec__44190,(0),null);
var numtimes = cljs.core.nth.call(null,vec__44190,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__44182__$2,temp__5457__auto____$1,part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__44165_$_iter__44181.call(null,cljs.core.rest.call(null,s__44182__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,null,null));
});})(part,s__44166__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
;
return iter__4292__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__44165.call(null,cljs.core.rest.call(null,s__44166__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__44159,map__44159__$1,from,to))
;
return iter__4292__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq44156){
var G__44157 = cljs.core.first.call(null,seq44156);
var seq44156__$1 = cljs.core.next.call(null,seq44156);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44157,seq44156__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44202 = arguments.length;
var i__4500__auto___44203 = (0);
while(true){
if((i__4500__auto___44203 < len__4499__auto___44202)){
args__4502__auto__.push((arguments[i__4500__auto___44203]));

var G__44204 = (i__4500__auto___44203 + (1));
i__4500__auto___44203 = G__44204;
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
clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq44200){
var G__44201 = cljs.core.first.call(null,seq44200);
var seq44200__$1 = cljs.core.next.call(null,seq44200);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44201,seq44200__$1);
});


//# sourceMappingURL=combinatorics.js.map?rel=1524683832692
