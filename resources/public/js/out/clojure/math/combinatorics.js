// Compiled by ClojureScript 1.9.946 {}
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
var c = cljs.core.vec.call(null,cljs.core.cons.call(null,null,(function (){var iter__51593__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__52377(s__52378){
return (new cljs.core.LazySeq(null,(function (){
var s__52378__$1 = s__52378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52378__$1);
if(temp__5457__auto__){
var s__52378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52378__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52378__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52380 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52379 = (0);
while(true){
if((i__52379 < size__51592__auto__)){
var j = cljs.core._nth.call(null,c__51591__auto__,i__52379);
cljs.core.chunk_append.call(null,b__52380,((j + cnt) + (- (n + (1)))));

var G__52381 = (i__52379 + (1));
i__52379 = G__52381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52380),clojure$math$combinatorics$index_combinations_$_iter__52377.call(null,cljs.core.chunk_rest.call(null,s__52378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52380),null);
}
} else {
var j = cljs.core.first.call(null,s__52378__$2);
return cljs.core.cons.call(null,((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__52377.call(null,cljs.core.rest.call(null,s__52378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__51593__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
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
var G__52382 = cljs.core.assoc.call(null,c__$3,(j__$1 - (1)),(c__$3.call(null,j__$1) - (1)));
var G__52383 = (j__$1 - (1));
c__$3 = G__52382;
j__$1 = G__52383;
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
var G__52384 = cljs.core.conj.call(null,distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__52385 = (index__$1 + (1));
var G__52386 = (already_distributed__$1 + mi);
distribution__$1 = G__52384;
index__$1 = G__52385;
already_distributed__$1 = G__52386;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__52387 = cljs.core.peek.call(null,distribution);
var index = cljs.core.nth.call(null,vec__52387,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__52387,(1),null);
var this_and_to_the_left = cljs.core.nth.call(null,vec__52387,(2),null);
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
var vec__52390 = cljs.core.peek.call(null,distribution__$1);
var index__$1 = cljs.core.nth.call(null,vec__52390,(0),null);
var this_bucket__$1 = cljs.core.nth.call(null,vec__52390,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.call(null,vec__52390,(2),null);
var distribution__$2 = ((cljs.core._EQ_.call(null,this_bucket__$1,(1)))?cljs.core.pop.call(null,distribution__$1):cljs.core.conj.call(null,cljs.core.pop.call(null,distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.subvec.call(null,m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute.call(null,m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq.call(null,distribution__$2)){
var G__52393 = distribution__$2;
distribution__$1 = G__52393;
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
var m = cljs.core.vec.call(null,(function (){var iter__51593__auto__ = ((function (f,v,domain){
return (function clojure$math$combinatorics$multi_comb_$_iter__52394(s__52395){
return (new cljs.core.LazySeq(null,((function (f,v,domain){
return (function (){
var s__52395__$1 = s__52395;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52395__$1);
if(temp__5457__auto__){
var s__52395__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52395__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52395__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52397 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52396 = (0);
while(true){
if((i__52396 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52396);
cljs.core.chunk_append.call(null,b__52397,f.call(null,v.call(null,i)));

var G__52422 = (i__52396 + (1));
i__52396 = G__52422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52397),clojure$math$combinatorics$multi_comb_$_iter__52394.call(null,cljs.core.chunk_rest.call(null,s__52395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52397),null);
}
} else {
var i = cljs.core.first.call(null,s__52395__$2);
return cljs.core.cons.call(null,f.call(null,v.call(null,i)),clojure$math$combinatorics$multi_comb_$_iter__52394.call(null,cljs.core.rest.call(null,s__52395__$2)));
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
return iter__51593__auto__.call(null,domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions.call(null,m,t);
var iter__51593__auto__ = ((function (f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__52398(s__52399){
return (new cljs.core.LazySeq(null,((function (f,v,domain,m,qs){
return (function (){
var s__52399__$1 = s__52399;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52399__$1);
if(temp__5457__auto__){
var s__52399__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52399__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52399__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52401 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52400 = (0);
while(true){
if((i__52400 < size__51592__auto__)){
var q = cljs.core._nth.call(null,c__51591__auto__,i__52400);
cljs.core.chunk_append.call(null,b__52401,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (i__52400,q,c__51591__auto__,size__51592__auto__,b__52401,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__52398_$_iter__52402(s__52403){
return (new cljs.core.LazySeq(null,((function (i__52400,q,c__51591__auto__,size__51592__auto__,b__52401,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__52403__$1 = s__52403;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52403__$1);
if(temp__5457__auto____$1){
var s__52403__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52403__$2)){
var c__51591__auto____$1 = cljs.core.chunk_first.call(null,s__52403__$2);
var size__51592__auto____$1 = cljs.core.count.call(null,c__51591__auto____$1);
var b__52405 = cljs.core.chunk_buffer.call(null,size__51592__auto____$1);
if((function (){var i__52404 = (0);
while(true){
if((i__52404 < size__51592__auto____$1)){
var vec__52406 = cljs.core._nth.call(null,c__51591__auto____$1,i__52404);
var index = cljs.core.nth.call(null,vec__52406,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__52406,(1),null);
var _ = cljs.core.nth.call(null,vec__52406,(2),null);
cljs.core.chunk_append.call(null,b__52405,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__52423 = (i__52404 + (1));
i__52404 = G__52423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52405),clojure$math$combinatorics$multi_comb_$_iter__52398_$_iter__52402.call(null,cljs.core.chunk_rest.call(null,s__52403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52405),null);
}
} else {
var vec__52409 = cljs.core.first.call(null,s__52403__$2);
var index = cljs.core.nth.call(null,vec__52409,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__52409,(1),null);
var _ = cljs.core.nth.call(null,vec__52409,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__52398_$_iter__52402.call(null,cljs.core.rest.call(null,s__52403__$2)));
}
} else {
return null;
}
break;
}
});})(i__52400,q,c__51591__auto__,size__51592__auto__,b__52401,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(i__52400,q,c__51591__auto__,size__51592__auto__,b__52401,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__51593__auto__.call(null,q);
})()));

var G__52424 = (i__52400 + (1));
i__52400 = G__52424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52401),clojure$math$combinatorics$multi_comb_$_iter__52398.call(null,cljs.core.chunk_rest.call(null,s__52399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52401),null);
}
} else {
var q = cljs.core.first.call(null,s__52399__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (q,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__52398_$_iter__52412(s__52413){
return (new cljs.core.LazySeq(null,((function (q,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs){
return (function (){
var s__52413__$1 = s__52413;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52413__$1);
if(temp__5457__auto____$1){
var s__52413__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52413__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52413__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52415 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52414 = (0);
while(true){
if((i__52414 < size__51592__auto__)){
var vec__52416 = cljs.core._nth.call(null,c__51591__auto__,i__52414);
var index = cljs.core.nth.call(null,vec__52416,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__52416,(1),null);
var _ = cljs.core.nth.call(null,vec__52416,(2),null);
cljs.core.chunk_append.call(null,b__52415,cljs.core.repeat.call(null,this_bucket,v.call(null,index)));

var G__52425 = (i__52414 + (1));
i__52414 = G__52425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52415),clojure$math$combinatorics$multi_comb_$_iter__52398_$_iter__52412.call(null,cljs.core.chunk_rest.call(null,s__52413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52415),null);
}
} else {
var vec__52419 = cljs.core.first.call(null,s__52413__$2);
var index = cljs.core.nth.call(null,vec__52419,(0),null);
var this_bucket = cljs.core.nth.call(null,vec__52419,(1),null);
var _ = cljs.core.nth.call(null,vec__52419,(2),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,this_bucket,v.call(null,index)),clojure$math$combinatorics$multi_comb_$_iter__52398_$_iter__52412.call(null,cljs.core.rest.call(null,s__52413__$2)));
}
} else {
return null;
}
break;
}
});})(q,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs))
,null,null));
});})(q,s__52399__$2,temp__5457__auto__,f,v,domain,m,qs))
;
return iter__51593__auto__.call(null,q);
})()),clojure$math$combinatorics$multi_comb_$_iter__52398.call(null,cljs.core.rest.call(null,s__52399__$2)));
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
return iter__51593__auto__.call(null,qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec.call(null,cljs.core.reverse.call(null,items));
if((t === (0))){
var x__51665__auto__ = cljs.core.List.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
} else {
var cnt = cljs.core.count.call(null,items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.call(null,t,(1))){
var iter__51593__auto__ = ((function (cnt,v_items){
return (function clojure$math$combinatorics$combinations_$_iter__52427(s__52428){
return (new cljs.core.LazySeq(null,((function (cnt,v_items){
return (function (){
var s__52428__$1 = s__52428;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52428__$1);
if(temp__5457__auto__){
var s__52428__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52428__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52428__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52430 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52429 = (0);
while(true){
if((i__52429 < size__51592__auto__)){
var item = cljs.core._nth.call(null,c__51591__auto__,i__52429);
cljs.core.chunk_append.call(null,b__52430,(function (){var x__51665__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})());

var G__52431 = (i__52429 + (1));
i__52429 = G__52431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52430),clojure$math$combinatorics$combinations_$_iter__52427.call(null,cljs.core.chunk_rest.call(null,s__52428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52430),null);
}
} else {
var item = cljs.core.first.call(null,s__52428__$2);
return cljs.core.cons.call(null,(function (){var x__51665__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})(),clojure$math$combinatorics$combinations_$_iter__52427.call(null,cljs.core.rest.call(null,s__52428__$2)));
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
return iter__51593__auto__.call(null,cljs.core.distinct.call(null,items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_.call(null,items))){
if(cljs.core._EQ_.call(null,t,cnt)){
var x__51665__auto__ = cljs.core.seq.call(null,items);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
} else {
return cljs.core.map.call(null,((function (cnt,v_items){
return (function (p1__52426_SHARP_){
return cljs.core.map.call(null,v_items,p1__52426_SHARP_);
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
var args__51997__auto__ = [];
var len__51990__auto___52433 = arguments.length;
var i__51991__auto___52434 = (0);
while(true){
if((i__51991__auto___52434 < len__51990__auto___52433)){
args__51997__auto__.push((arguments[i__51991__auto___52434]));

var G__52435 = (i__51991__auto___52434 + (1));
i__51991__auto___52434 = G__52435;
continue;
} else {
}
break;
}

var argseq__51998__auto__ = ((((0) < args__51997__auto__.length))?(new cljs.core.IndexedSeq(args__51997__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__51998__auto__);
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
var G__52436 = (i - (1));
var G__52437 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__52436;
v_seqs__$2 = G__52437;
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

clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq52432){
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52432));
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
var G__52438 = (i - (1));
i = G__52438;
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
var G__52439 = (i - (1));
i = G__52439;
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
var G__52440 = cljs.core.assoc.call(null,v__$1,k,v__$1.call(null,l__$1),l__$1,v__$1.call(null,k));
var G__52441 = (k + (1));
var G__52442 = (l__$1 - (1));
v__$1 = G__52440;
k = G__52441;
l__$1 = G__52442;
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
var x__51665__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
} else {
return clojure.math.combinatorics.vec_lex_permutations.call(null,vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__50699__auto__ = cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,s);
if(and__50699__auto__){
var or__50711__auto__ = cljs.core.empty_QMARK_.call(null,s);
if(or__50711__auto__){
return or__50711__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._LT__EQ_,s);
}
} else {
return and__50699__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies.call(null,l);
var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,l));
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (f,v){
return (function clojure$math$combinatorics$multi_perm_$_iter__52443(s__52444){
return (new cljs.core.LazySeq(null,((function (f,v){
return (function (){
var s__52444__$1 = s__52444;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52444__$1);
if(temp__5457__auto__){
var s__52444__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52444__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52444__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52446 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52445 = (0);
while(true){
if((i__52445 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52445);
cljs.core.chunk_append.call(null,b__52446,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__52447 = (i__52445 + (1));
i__52445 = G__52447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52446),clojure$math$combinatorics$multi_perm_$_iter__52443.call(null,cljs.core.chunk_rest.call(null,s__52444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52446),null);
}
} else {
var i = cljs.core.first.call(null,s__52444__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$multi_perm_$_iter__52443.call(null,cljs.core.rest.call(null,s__52444__$2)));
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
return iter__51593__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
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
return (function (p1__52448_SHARP_){
return cljs.core.map.call(null,v,p1__52448_SHARP_);
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
var G__52449 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1);
var G__52450 = (n__$1 - (1));
acc = G__52449;
n__$1 = G__52450;
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
var G__52451 = q;
var G__52452 = cljs.core.cons.call(null,r,digits);
var G__52453 = (divisor + (1));
n__$1 = G__52451;
digits = G__52452;
divisor = G__52453;
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
var G__52454 = cljs.core.conj.call(null,acc,cljs.core.first.call(null,l__$1));
var G__52455 = cljs.core.rest.call(null,l__$1);
var G__52456 = (n__$1 - (1));
acc = G__52454;
l__$1 = G__52455;
n__$1 = G__52456;
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
var G__52457 = cljs.core.rest.call(null,indices);
var G__52458 = clojure.math.combinatorics.remove_nth.call(null,l__$1,i);
var G__52459 = cljs.core.conj.call(null,perm,item);
indices = G__52457;
l__$1 = G__52458;
perm = G__52459;
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
return cljs.core.reductions.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__51593__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__52460(s__52461){
return (new cljs.core.LazySeq(null,(function (){
var s__52461__$1 = s__52461;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52461__$1);
if(temp__5457__auto__){
var s__52461__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52461__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52461__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52463 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52462 = (0);
while(true){
if((i__52462 < size__51592__auto__)){
var vec__52464 = cljs.core._nth.call(null,c__51591__auto__,i__52462);
var k = cljs.core.nth.call(null,vec__52464,(0),null);
var v = cljs.core.nth.call(null,vec__52464,(1),null);
cljs.core.chunk_append.call(null,b__52463,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))));

var G__52470 = (i__52462 + (1));
i__52462 = G__52470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52463),clojure$math$combinatorics$initial_perm_numbers_$_iter__52460.call(null,cljs.core.chunk_rest.call(null,s__52461__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52463),null);
}
} else {
var vec__52467 = cljs.core.first.call(null,s__52461__$2);
var k = cljs.core.nth.call(null,vec__52467,(0),null);
var v = cljs.core.nth.call(null,vec__52467,(1),null);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,cljs.core.assoc.call(null,freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__52460.call(null,cljs.core.rest.call(null,s__52461__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__51593__auto__.call(null,freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if(((cljs.core.first.call(null,perm_numbers__$1) <= n)) && ((n < cljs.core.second.call(null,perm_numbers__$1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first.call(null,perm_numbers__$1))], null);
} else {
var G__52471 = cljs.core.rest.call(null,perm_numbers__$1);
var G__52472 = (index + (1));
perm_numbers__$1 = G__52471;
index = G__52472;
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
var vec__52473 = clojure.math.combinatorics.index_remainder.call(null,clojure.math.combinatorics.initial_perm_numbers.call(null,freqs__$1),n__$1);
var index = cljs.core.nth.call(null,vec__52473,(0),null);
var remainder = cljs.core.nth.call(null,vec__52473,(1),null);
var G__52476 = remainder;
var G__52477 = cljs.core.conj.call(null,digits,index);
var G__52478 = (function (){var nth_key = cljs.core.nth.call(null,cljs.core.keys.call(null,freqs__$1),index);
return clojure.math.combinatorics.dec_key.call(null,freqs__$1,nth_key);
})();
n__$1 = G__52476;
digits = G__52477;
freqs__$1 = G__52478;
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
var G__52479 = clojure.math.combinatorics.dec_key.call(null,freqs,item);
var G__52480 = cljs.core.rest.call(null,indices);
var G__52481 = cljs.core.conj.call(null,perm,item);
freqs = G__52479;
indices = G__52480;
perm = G__52481;
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
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$nth_permutation_$_iter__52482(s__52483){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__52483__$1 = s__52483;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52483__$1);
if(temp__5457__auto__){
var s__52483__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52483__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52483__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52485 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52484 = (0);
while(true){
if((i__52484 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52484);
cljs.core.chunk_append.call(null,b__52485,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__52486 = (i__52484 + (1));
i__52484 = G__52486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52485),clojure$math$combinatorics$nth_permutation_$_iter__52482.call(null,cljs.core.chunk_rest.call(null,s__52483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52485),null);
}
} else {
var i = cljs.core.first.call(null,s__52483__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_permutation_$_iter__52482.call(null,cljs.core.rest.call(null,s__52483__$2)));
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
return iter__51593__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
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
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (v,f){
return (function clojure$math$combinatorics$drop_permutations_$_iter__52487(s__52488){
return (new cljs.core.LazySeq(null,((function (v,f){
return (function (){
var s__52488__$1 = s__52488;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52488__$1);
if(temp__5457__auto__){
var s__52488__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52488__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52488__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52490 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52489 = (0);
while(true){
if((i__52489 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52489);
cljs.core.chunk_append.call(null,b__52490,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__52491 = (i__52489 + (1));
i__52489 = G__52491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52490),clojure$math$combinatorics$drop_permutations_$_iter__52487.call(null,cljs.core.chunk_rest.call(null,s__52488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52490),null);
}
} else {
var i = cljs.core.first.call(null,s__52488__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$drop_permutations_$_iter__52487.call(null,cljs.core.rest.call(null,s__52488__$2)));
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
return iter__51593__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
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
var G__52492 = n;
var G__52493 = (n - k);
n = G__52492;
k = G__52493;
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
var count_combinations_from_frequencies52494 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,t);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies52494;
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_.call(null,n);
var n__$1 = cljs.core.quot.call(null,n,(2));
if(t){
var G__52495 = n__$1;
var G__52496 = y;
var G__52497 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__52495;
y = G__52496;
z = G__52497;
continue;
} else {
if((n__$1 === (0))){
return clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
} else {
var G__52498 = n__$1;
var G__52499 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y);
var G__52500 = clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z);
n = G__52498;
y = G__52499;
z = G__52500;
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
return cljs.core.apply.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__51593__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__52501(s__52502){
return (new cljs.core.LazySeq(null,(function (){
var s__52502__$1 = s__52502;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52502__$1);
if(temp__5457__auto__){
var s__52502__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52502__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52502__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52504 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52503 = (0);
while(true){
if((i__52503 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52503);
cljs.core.chunk_append.call(null,b__52504,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i));

var G__52505 = (i__52503 + (1));
i__52503 = G__52505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52504),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__52501.call(null,cljs.core.chunk_rest.call(null,s__52502__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52504),null);
}
} else {
var i = cljs.core.first.call(null,s__52502__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_combinations_unmemoized.call(null,items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__52501.call(null,cljs.core.rest.call(null,s__52502__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__51593__auto__.call(null,cljs.core.range.call(null,(0),(cljs.core.count.call(null,items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies52506 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{return clojure.math.combinatorics.count_subsets_unmemoized.call(null,items);
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies52506;
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
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,items__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k.call(null,(cljs.core.count.call(null,items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__52507 = cljs.core.conj.call(null,comb,cljs.core.first.call(null,items__$1));
var G__52508 = cljs.core.rest.call(null,items__$1);
var G__52509 = (t__$1 - (1));
var G__52510 = n__$1;
comb = G__52507;
items__$1 = G__52508;
t__$1 = G__52509;
n__$1 = G__52510;
continue;
} else {
var G__52511 = comb;
var G__52512 = cljs.core.rest.call(null,items__$1);
var G__52513 = t__$1;
var G__52514 = (n__$1 - dc_dt);
comb = G__52511;
items__$1 = G__52512;
t__$1 = G__52513;
n__$1 = G__52514;
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
if(((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,freqs__$1))){
return cljs.core.into.call(null,comb,cljs.core.take.call(null,t__$1,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__52515(s__52516){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__52516__$1 = s__52516;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52516__$1);
if(temp__5457__auto__){
var s__52516__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52516__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52516__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52518 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52517 = (0);
while(true){
if((i__52517 < size__51592__auto__)){
var vec__52519 = cljs.core._nth.call(null,c__51591__auto__,i__52517);
var k = cljs.core.nth.call(null,vec__52519,(0),null);
var v = cljs.core.nth.call(null,vec__52519,(1),null);
cljs.core.chunk_append.call(null,b__52518,cljs.core.repeat.call(null,v,k));

var G__52525 = (i__52517 + (1));
i__52517 = G__52525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52518),clojure$math$combinatorics$nth_combination_freqs_$_iter__52515.call(null,cljs.core.chunk_rest.call(null,s__52516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52518),null);
}
} else {
var vec__52522 = cljs.core.first.call(null,s__52516__$2);
var k = cljs.core.nth.call(null,vec__52522,(0),null);
var v = cljs.core.nth.call(null,vec__52522,(1),null);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__52515.call(null,cljs.core.rest.call(null,s__52516__$2)));
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
return iter__51593__auto__.call(null,freqs__$1);
})())));
} else {
var first_key = cljs.core.first.call(null,cljs.core.keys.call(null,freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key.call(null,freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__52526 = cljs.core.conj.call(null,comb,first_key);
var G__52527 = remove_one_key;
var G__52528 = (t__$1 - (1));
var G__52529 = n__$1;
comb = G__52526;
freqs__$1 = G__52527;
t__$1 = G__52528;
n__$1 = G__52529;
continue;
} else {
var G__52530 = comb;
var G__52531 = cljs.core.dissoc.call(null,freqs__$1,first_key);
var G__52532 = t__$1;
var G__52533 = (n__$1 - dc_dt);
comb = G__52530;
freqs__$1 = G__52531;
t__$1 = G__52532;
n__$1 = G__52533;
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
var count_combinations_from_frequencies52534 = clojure.math.combinatorics.count_combinations_from_frequencies;
clojure.math.combinatorics.count_combinations_from_frequencies = cljs.core.memoize.call(null,clojure.math.combinatorics.count_combinations_from_frequencies);

try{var v = cljs.core.vec.call(null,cljs.core.distinct.call(null,items));
var f = cljs.core.frequencies.call(null,items);
var indices = cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__51593__auto__ = ((function (v,f,count_combinations_from_frequencies52534){
return (function clojure$math$combinatorics$nth_combination_$_iter__52535(s__52536){
return (new cljs.core.LazySeq(null,((function (v,f,count_combinations_from_frequencies52534){
return (function (){
var s__52536__$1 = s__52536;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52536__$1);
if(temp__5457__auto__){
var s__52536__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52536__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52536__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52538 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52537 = (0);
while(true){
if((i__52537 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52537);
cljs.core.chunk_append.call(null,b__52538,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i));

var G__52539 = (i__52537 + (1));
i__52537 = G__52539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52538),clojure$math$combinatorics$nth_combination_$_iter__52535.call(null,cljs.core.chunk_rest.call(null,s__52536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52538),null);
}
} else {
var i = cljs.core.first.call(null,s__52536__$2);
return cljs.core.cons.call(null,cljs.core.repeat.call(null,f.call(null,v.call(null,i)),i),clojure$math$combinatorics$nth_combination_$_iter__52535.call(null,cljs.core.rest.call(null,s__52536__$2)));
}
} else {
return null;
}
break;
}
});})(v,f,count_combinations_from_frequencies52534))
,null,null));
});})(v,f,count_combinations_from_frequencies52534))
;
return iter__51593__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,v)));
})());
var indices_freqs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.frequencies.call(null,indices));
return cljs.core.vec.call(null,cljs.core.map.call(null,v,clojure.math.combinatorics.nth_combination_freqs.call(null,indices_freqs,t,n)));
}finally {clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies52534;
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
var G__52540 = (size + (1));
var G__52541 = (n__$1 - num_combinations);
size = G__52540;
n__$1 = G__52541;
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
var G__52542 = cljs.core.rest.call(null,l__$1);
var G__52543 = (n + (1));
l__$1 = G__52542;
n = G__52543;
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
var G__52544 = cljs.core.rest.call(null,l__$1);
var G__52545 = clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,index,clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,clojure.math.combinatorics.factorial.call(null,n),clojure.math.combinatorics.list_index.call(null,cljs.core.sort.call(null,l__$1),cljs.core.first.call(null,l__$1))));
var G__52546 = (n - (1));
l__$1 = G__52544;
index = G__52545;
n = G__52546;
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
var G__52552 = cljs.core.rest.call(null,l__$1);
var G__52553 = cljs.core.reduce.call(null,clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__51593__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__52548(s__52549){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__52549__$1 = s__52549;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52549__$1);
if(temp__5457__auto__){
var s__52549__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52549__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52549__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52551 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52550 = (0);
while(true){
if((i__52550 < size__51592__auto__)){
var k = cljs.core._nth.call(null,c__51591__auto__,i__52550);
cljs.core.chunk_append.call(null,b__52551,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)));

var G__52555 = (i__52550 + (1));
i__52550 = G__52555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52551),clojure$math$combinatorics$permutation_index_duplicates_$_iter__52548.call(null,cljs.core.chunk_rest.call(null,s__52549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52551),null);
}
} else {
var k = cljs.core.first.call(null,s__52549__$2);
return cljs.core.cons.call(null,clojure.math.combinatorics.count_permutations_from_frequencies.call(null,clojure.math.combinatorics.dec_key.call(null,freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__52548.call(null,cljs.core.rest.call(null,s__52549__$2)));
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
return iter__51593__auto__.call(null,cljs.core.take_while.call(null,((function (l__$1,index,freqs,iter__51593__auto__){
return (function (p1__52547_SHARP_){
return (cljs.core.compare.call(null,p1__52547_SHARP_,cljs.core.first.call(null,l__$1)) < (0));
});})(l__$1,index,freqs,iter__51593__auto__))
,cljs.core.keys.call(null,freqs)));
})());
var G__52554 = clojure.math.combinatorics.dec_key.call(null,freqs,cljs.core.first.call(null,l__$1));
l__$1 = G__52552;
index = G__52553;
freqs = G__52554;
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
return cljs.core.vec.call(null,(function (){var iter__51593__auto__ = (function clojure$math$combinatorics$init_$_iter__52556(s__52557){
return (new cljs.core.LazySeq(null,(function (){
var s__52557__$1 = s__52557;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52557__$1);
if(temp__5457__auto__){
var s__52557__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52557__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52557__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52559 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52558 = (0);
while(true){
if((i__52558 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52558);
cljs.core.chunk_append.call(null,b__52559,(function (){var x__51063__auto__ = (0);
var y__51064__auto__ = (i - ((n - s) - (-1)));
return ((x__51063__auto__ > y__51064__auto__) ? x__51063__auto__ : y__51064__auto__);
})());

var G__52560 = (i__52558 + (1));
i__52558 = G__52560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52559),clojure$math$combinatorics$init_$_iter__52556.call(null,cljs.core.chunk_rest.call(null,s__52557__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52559),null);
}
} else {
var i = cljs.core.first.call(null,s__52557__$2);
return cljs.core.cons.call(null,(function (){var x__51063__auto__ = (0);
var y__51064__auto__ = (i - ((n - s) - (-1)));
return ((x__51063__auto__ > y__51064__auto__) ? x__51063__auto__ : y__51064__auto__);
})(),clojure$math$combinatorics$init_$_iter__52556.call(null,cljs.core.rest.call(null,s__52557__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__51593__auto__.call(null,cljs.core.range.call(null,(1),(n + (1))));
})());
} else {
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__52562 = arguments.length;
switch (G__52562) {
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
if((function (){var and__50699__auto__ = (cljs.core.peek.call(null,b) > cljs.core.peek.call(null,a));
if(and__50699__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek.call(null,a) < (r - (1)));
} else {
return true;
}
} else {
return and__50699__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.call(null,n,clojure.math.combinatorics.update.call(null,a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__50699__auto__ = (a.call(null,j) < b.call(null,j));
if(and__50699__auto__){
var and__50699__auto____$1 = (cljs.core.truth_(r)?(a.call(null,j) < (r - (1))):true);
if(and__50699__auto____$1){
if(cljs.core.truth_(s)){
return (((s - b.call(null,j)) - clojure.math.combinatorics.reify_bool.call(null,((a.call(null,j) + (1)) === b.call(null,j)))) <= (n - j));
} else {
return true;
}
} else {
return and__50699__auto____$1;
}
} else {
return and__50699__auto__;
}
})()){
return j;
} else {
var G__52567 = (j - (1));
j = G__52567;
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
var vec__52563 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = (b__$1.call(null,j) + clojure.math.combinatorics.reify_bool.call(null,(b__$1.call(null,j) === a__$2.call(null,j))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__50699__auto__ = s;
if(cljs.core.truth_(and__50699__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__50699__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__52568 = cljs.core.assoc.call(null,a__$2,i,new_a_i);
var G__52569 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__52570 = (i + (1));
var G__52571 = (function (){var x__51063__auto__ = current_max;
var y__51064__auto__ = (new_a_i + (1));
return ((x__51063__auto__ > y__51064__auto__) ? x__51063__auto__ : y__51064__auto__);
})();
a__$2 = G__52568;
b__$1 = G__52569;
i = G__52570;
current_max = G__52571;
continue;
} else {
var G__52572 = cljs.core.assoc.call(null,a__$2,i,(0));
var G__52573 = cljs.core.assoc.call(null,b__$1,i,current_max);
var G__52574 = (i + (1));
var G__52575 = current_max;
a__$2 = G__52572;
b__$1 = G__52573;
i = G__52574;
current_max = G__52575;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.call(null,vec__52563,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__52563,(1),null);
return clojure.math.combinatorics.growth_strings_H.call(null,n,a__$2,b__$1,r,s);
}
}
}),null,null)));
});

clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5;

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__51997__auto__ = [];
var len__51990__auto___52585 = arguments.length;
var i__51991__auto___52586 = (0);
while(true){
if((i__51991__auto___52586 < len__51990__auto___52585)){
args__51997__auto__.push((arguments[i__51991__auto___52586]));

var G__52587 = (i__51991__auto___52586 + (1));
i__51991__auto___52586 = G__52587;
continue;
} else {
}
break;
}

var argseq__51998__auto__ = ((((1) < args__51997__auto__.length))?(new cljs.core.IndexedSeq(args__51997__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__51998__auto__);
});

clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__52578){
var map__52579 = p__52578;
var map__52579__$1 = ((((!((map__52579 == null)))?((((map__52579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52579):map__52579);
var from = cljs.core.get.call(null,map__52579__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__52579__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,N,(0))){
if((((function (){var or__50711__auto__ = from;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__50711__auto__ = to;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (0);
}
})()))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__50699__auto__ = from;
if(cljs.core.truth_(and__50699__auto__)){
return (from <= (1));
} else {
return and__50699__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__50699__auto__ = to;
if(cljs.core.truth_(and__50699__auto__)){
return (to >= N);
} else {
return and__50699__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__50711__auto__ = from__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__50711__auto__ = from__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (1);
}
})() <= (function (){var or__50711__auto__ = to__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return N;
}
})())) && (((function (){var or__50711__auto__ = to__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.call(null,to__$1,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__51665__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__51665__auto__ = cljs.core.range.call(null,N);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})())));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.call(null,N,to__$1,from__$1);
var iter__51593__auto__ = ((function (growth_strings,from__$1,to__$1,map__52579,map__52579__$1,from,to){
return (function clojure$math$combinatorics$iter__52581(s__52582){
return (new cljs.core.LazySeq(null,((function (growth_strings,from__$1,to__$1,map__52579,map__52579__$1,from,to){
return (function (){
var s__52582__$1 = s__52582;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52582__$1);
if(temp__5457__auto__){
var s__52582__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52582__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52582__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52584 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52583 = (0);
while(true){
if((i__52583 < size__51592__auto__)){
var growth_string = cljs.core._nth.call(null,c__51591__auto__,i__52583);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
cljs.core.chunk_append.call(null,b__52584,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))));

var G__52588 = (i__52583 + (1));
i__52583 = G__52588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52584),clojure$math$combinatorics$iter__52581.call(null,cljs.core.chunk_rest.call(null,s__52582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52584),null);
}
} else {
var growth_string = cljs.core.first.call(null,s__52582__$2);
var groups = cljs.core.group_by.call(null,growth_string,cljs.core.range.call(null,N));
return cljs.core.cons.call(null,cljs.core.map.call(null,groups,cljs.core.range.call(null,cljs.core.count.call(null,groups))),clojure$math$combinatorics$iter__52581.call(null,cljs.core.rest.call(null,s__52582__$2)));
}
} else {
return null;
}
break;
}
});})(growth_strings,from__$1,to__$1,map__52579,map__52579__$1,from,to))
,null,null));
});})(growth_strings,from__$1,to__$1,map__52579,map__52579__$1,from,to))
;
return iter__51593__auto__.call(null,growth_strings);

}
}
}
}
}
});

clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq52576){
var G__52577 = cljs.core.first.call(null,seq52576);
var seq52576__$1 = cljs.core.next.call(null,seq52576);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__52577,seq52576__$1);
});

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__51997__auto__ = [];
var len__51990__auto___52603 = arguments.length;
var i__51991__auto___52604 = (0);
while(true){
if((i__51991__auto___52604 < len__51990__auto___52603)){
args__51997__auto__.push((arguments[i__51991__auto___52604]));

var G__52605 = (i__51991__auto___52604 + (1));
i__51991__auto___52604 = G__52605;
continue;
} else {
}
break;
}

var argseq__51998__auto__ = ((((1) < args__51997__auto__.length))?(new cljs.core.IndexedSeq(args__51997__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__51998__auto__);
});

clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec.call(null,items);
var N = cljs.core.count.call(null,items__$1);
var lex = cljs.core.apply.call(null,clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__51593__auto__ = ((function (items__$1,N,lex){
return (function clojure$math$combinatorics$iter__52591(s__52592){
return (new cljs.core.LazySeq(null,((function (items__$1,N,lex){
return (function (){
var s__52592__$1 = s__52592;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52592__$1);
if(temp__5457__auto__){
var s__52592__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52592__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52592__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52594 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52593 = (0);
while(true){
if((i__52593 < size__51592__auto__)){
var parts = cljs.core._nth.call(null,c__51591__auto__,i__52593);
cljs.core.chunk_append.call(null,b__52594,(function (){var iter__51593__auto__ = ((function (i__52593,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__52591_$_iter__52595(s__52596){
return (new cljs.core.LazySeq(null,((function (i__52593,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__52596__$1 = s__52596;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52596__$1);
if(temp__5457__auto____$1){
var s__52596__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52596__$2)){
var c__51591__auto____$1 = cljs.core.chunk_first.call(null,s__52596__$2);
var size__51592__auto____$1 = cljs.core.count.call(null,c__51591__auto____$1);
var b__52598 = cljs.core.chunk_buffer.call(null,size__51592__auto____$1);
if((function (){var i__52597 = (0);
while(true){
if((i__52597 < size__51592__auto____$1)){
var part = cljs.core._nth.call(null,c__51591__auto____$1,i__52597);
cljs.core.chunk_append.call(null,b__52598,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__52597,i__52593,part,c__51591__auto____$1,size__51592__auto____$1,b__52598,s__52596__$2,temp__5457__auto____$1,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__52597,i__52593,part,c__51591__auto____$1,size__51592__auto____$1,b__52598,s__52596__$2,temp__5457__auto____$1,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__52606 = (i__52597 + (1));
i__52597 = G__52606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52598),clojure$math$combinatorics$iter__52591_$_iter__52595.call(null,cljs.core.chunk_rest.call(null,s__52596__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52598),null);
}
} else {
var part = cljs.core.first.call(null,s__52596__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__52593,part,s__52596__$2,temp__5457__auto____$1,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__52593,part,s__52596__$2,temp__5457__auto____$1,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__52591_$_iter__52595.call(null,cljs.core.rest.call(null,s__52596__$2)));
}
} else {
return null;
}
break;
}
});})(i__52593,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(i__52593,parts,c__51591__auto__,size__51592__auto__,b__52594,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__51593__auto__.call(null,parts);
})());

var G__52607 = (i__52593 + (1));
i__52593 = G__52607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52594),clojure$math$combinatorics$iter__52591.call(null,cljs.core.chunk_rest.call(null,s__52592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52594),null);
}
} else {
var parts = cljs.core.first.call(null,s__52592__$2);
return cljs.core.cons.call(null,(function (){var iter__51593__auto__ = ((function (parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__52591_$_iter__52599(s__52600){
return (new cljs.core.LazySeq(null,((function (parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function (){
var s__52600__$1 = s__52600;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52600__$1);
if(temp__5457__auto____$1){
var s__52600__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52600__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52600__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52602 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52601 = (0);
while(true){
if((i__52601 < size__51592__auto__)){
var part = cljs.core._nth.call(null,c__51591__auto__,i__52601);
cljs.core.chunk_append.call(null,b__52602,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (i__52601,part,c__51591__auto__,size__51592__auto__,b__52602,s__52600__$2,temp__5457__auto____$1,parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(i__52601,part,c__51591__auto__,size__51592__auto__,b__52602,s__52600__$2,temp__5457__auto____$1,parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)));

var G__52608 = (i__52601 + (1));
i__52601 = G__52608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52602),clojure$math$combinatorics$iter__52591_$_iter__52599.call(null,cljs.core.chunk_rest.call(null,s__52600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52602),null);
}
} else {
var part = cljs.core.first.call(null,s__52600__$2);
return cljs.core.cons.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (part,s__52600__$2,temp__5457__auto____$1,parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.call(null,v,items__$1.call(null,o));
});})(part,s__52600__$2,temp__5457__auto____$1,parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__52591_$_iter__52599.call(null,cljs.core.rest.call(null,s__52600__$2)));
}
} else {
return null;
}
break;
}
});})(parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
,null,null));
});})(parts,s__52592__$2,temp__5457__auto__,items__$1,N,lex))
;
return iter__51593__auto__.call(null,parts);
})(),clojure$math$combinatorics$iter__52591.call(null,cljs.core.rest.call(null,s__52592__$2)));
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
return iter__51593__auto__.call(null,lex);
});

clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq52589){
var G__52590 = cljs.core.first.call(null,seq52589);
var seq52589__$1 = cljs.core.next.call(null,seq52589);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic(G__52590,seq52589__$1);
});


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__52610 = arguments.length;
switch (G__52610) {
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
var vec__52611 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.call(null,j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__52630 = (j + (1));
var G__52631 = cljs.core.assoc.call(null,c__$1,j,(j + (1)));
var G__52632 = cljs.core.assoc.call(null,u__$1,j,multiset.call(null,(j + (1))));
var G__52633 = cljs.core.assoc.call(null,v__$1,j,multiset.call(null,(j + (1))));
j = G__52630;
c__$1 = G__52631;
u__$1 = G__52632;
v__$1 = G__52633;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.call(null,vec__52611,(0),null);
var u__$1 = cljs.core.nth.call(null,vec__52611,(1),null);
var v__$1 = cljs.core.nth.call(null,vec__52611,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.call(null,f,(0),(0),(1),m);
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.call(null,n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
});

clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__52614 = (function (){var j = a;
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
var G__52634 = (j + (1));
var G__52635 = k;
var G__52636 = true;
var G__52637 = u__$2;
var G__52638 = v__$1;
var G__52639 = c__$1;
j = G__52634;
k = G__52635;
x = G__52636;
u__$1 = G__52637;
v__$1 = G__52638;
c__$1 = G__52639;
continue;
} else {
if(!(x)){
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,(function (){var x__51070__auto__ = v__$1.call(null,j);
var y__51071__auto__ = u__$2.call(null,k);
return ((x__51070__auto__ < y__51071__auto__) ? x__51070__auto__ : y__51071__auto__);
})());
var x__$1 = (u__$2.call(null,k) < v__$2.call(null,j));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__52640 = j__$1;
var G__52641 = k__$1;
var G__52642 = x__$1;
var G__52643 = u__$2;
var G__52644 = v__$2;
var G__52645 = c__$2;
j = G__52640;
k = G__52641;
x = G__52642;
u__$1 = G__52643;
v__$1 = G__52644;
c__$1 = G__52645;
continue;
} else {
var c__$2 = cljs.core.assoc.call(null,c__$1,k,c__$1.call(null,j));
var v__$2 = cljs.core.assoc.call(null,v__$1,k,u__$2.call(null,k));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__52646 = j__$1;
var G__52647 = k__$1;
var G__52648 = x;
var G__52649 = u__$2;
var G__52650 = v__$2;
var G__52651 = c__$2;
j = G__52646;
k = G__52647;
x = G__52648;
u__$1 = G__52649;
v__$1 = G__52650;
c__$1 = G__52651;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.call(null,vec__52614,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__52614,(1),null);
var c__$1 = cljs.core.nth.call(null,vec__52614,(2),null);
var j = cljs.core.nth.call(null,vec__52614,(3),null);
var k = cljs.core.nth.call(null,vec__52614,(4),null);
if(cljs.core.truth_((function (){var and__50699__auto__ = r;
if(cljs.core.truth_(and__50699__auto__)){
return ((k > b)) && (cljs.core._EQ_.call(null,l,(r - (1))));
} else {
return and__50699__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if(cljs.core.truth_((function (){var and__50699__auto__ = s;
if(cljs.core.truth_(and__50699__auto__)){
return ((k <= b)) && (((l + (1)) < s));
} else {
return and__50699__auto__;
}
})())){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.call(null,f,(l__$1 + (1)),b__$1);
var G__52652 = n;
var G__52653 = m;
var G__52654 = f__$1;
var G__52655 = c__$1;
var G__52656 = u__$1;
var G__52657 = v__$1;
var G__52658 = a__$1;
var G__52659 = b__$1;
var G__52660 = l__$1;
var G__52661 = r;
var G__52662 = s;
n = G__52652;
m = G__52653;
f = G__52654;
c = G__52655;
u = G__52656;
v = G__52657;
a = G__52658;
b = G__52659;
l = G__52660;
r = G__52661;
s = G__52662;
continue;
} else {
var part = (function (){var iter__51593__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__52617(s__52618){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__52618__$1 = s__52618;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52618__$1);
if(temp__5457__auto__){
var s__52618__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52618__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52618__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52620 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52619 = (0);
while(true){
if((i__52619 < size__51592__auto__)){
var y = cljs.core._nth.call(null,c__51591__auto__,i__52619);
cljs.core.chunk_append.call(null,b__52620,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__51593__auto__ = ((function (i__52619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__51591__auto__,size__51592__auto__,b__52620,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__52617_$_iter__52621(s__52622){
return (new cljs.core.LazySeq(null,((function (i__52619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__51591__auto__,size__51592__auto__,b__52620,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__52622__$1 = s__52622;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52622__$1);
if(temp__5457__auto____$1){
var s__52622__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52622__$2)){
var c__51591__auto____$1 = cljs.core.chunk_first.call(null,s__52622__$2);
var size__51592__auto____$1 = cljs.core.count.call(null,c__51591__auto____$1);
var b__52624 = cljs.core.chunk_buffer.call(null,size__51592__auto____$1);
if((function (){var i__52623 = (0);
while(true){
if((i__52623 < size__51592__auto____$1)){
var z = cljs.core._nth.call(null,c__51591__auto____$1,i__52623);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__52624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__52663 = (i__52623 + (1));
i__52623 = G__52663;
continue;
} else {
var G__52664 = (i__52623 + (1));
i__52623 = G__52664;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52624),clojure$math$combinatorics$iter__52617_$_iter__52621.call(null,cljs.core.chunk_rest.call(null,s__52622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52624),null);
}
} else {
var z = cljs.core.first.call(null,s__52622__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__52617_$_iter__52621.call(null,cljs.core.rest.call(null,s__52622__$2)));
} else {
var G__52665 = cljs.core.rest.call(null,s__52622__$2);
s__52622__$1 = G__52665;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__52619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__51591__auto__,size__51592__auto__,b__52620,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__52619,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__51591__auto__,size__51592__auto__,b__52620,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k))
;
return iter__51593__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})());

var G__52666 = (i__52619 + (1));
i__52619 = G__52666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52620),clojure$math$combinatorics$iter__52617.call(null,cljs.core.chunk_rest.call(null,s__52618__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52620),null);
}
} else {
var y = cljs.core.first.call(null,s__52618__$2);
return cljs.core.cons.call(null,(function (){var first_col = f.call(null,y);
var last_col = (f.call(null,(y + (1))) - (1));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__51593__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__52617_$_iter__52625(s__52626){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__52626__$1 = s__52626;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52626__$1);
if(temp__5457__auto____$1){
var s__52626__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52626__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52626__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52628 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52627 = (0);
while(true){
if((i__52627 < size__51592__auto__)){
var z = cljs.core._nth.call(null,c__51591__auto__,i__52627);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
cljs.core.chunk_append.call(null,b__52628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null));

var G__52667 = (i__52627 + (1));
i__52627 = G__52667;
continue;
} else {
var G__52668 = (i__52627 + (1));
i__52627 = G__52668;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52628),clojure$math$combinatorics$iter__52617_$_iter__52625.call(null,cljs.core.chunk_rest.call(null,s__52626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52628),null);
}
} else {
var z = cljs.core.first.call(null,s__52626__$2);
if(cljs.core.not_EQ_.call(null,v__$1.call(null,z),(0))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1.call(null,z),v__$1.call(null,z)], null),clojure$math$combinatorics$iter__52617_$_iter__52625.call(null,cljs.core.rest.call(null,s__52626__$2)));
} else {
var G__52669 = cljs.core.rest.call(null,s__52626__$2);
s__52626__$1 = G__52669;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__52618__$2,temp__5457__auto__,vec__52614,u__$1,v__$1,c__$1,j,k))
;
return iter__51593__auto__.call(null,cljs.core.range.call(null,first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__52617.call(null,cljs.core.rest.call(null,s__52618__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__52614,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__52614,u__$1,v__$1,c__$1,j,k))
;
return iter__51593__auto__.call(null,cljs.core.range.call(null,(l + (1))));
})();
return cljs.core.cons.call(null,part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__52614,u__$1,v__$1,c__$1,j,k){
return (function (){
return clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s);
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__52614,u__$1,v__$1,c__$1,j,k))
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
var G__52674 = (j - (1));
j = G__52674;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__50699__auto__ = r;
if(cljs.core.truth_(and__50699__auto__)){
return (cljs.core._EQ_.call(null,j,a)) && ((((v.call(null,j) - (1)) * (r - l)) < u.call(null,j)));
} else {
return and__50699__auto__;
}
})())){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
if((cljs.core._EQ_.call(null,j,a)) && (cljs.core._EQ_.call(null,v.call(null,j),(1)))){
return clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s);
} else {
var v__$1 = clojure.math.combinatorics.update.call(null,v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__51593__auto__ = ((function (v__$1,j){
return (function clojure$math$combinatorics$m5_$_iter__52670(s__52671){
return (new cljs.core.LazySeq(null,((function (v__$1,j){
return (function (){
var s__52671__$1 = s__52671;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52671__$1);
if(temp__5457__auto__){
var s__52671__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52671__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52671__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52673 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52672 = (0);
while(true){
if((i__52672 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52672);
cljs.core.chunk_append.call(null,b__52673,(u.call(null,i) - v__$1.call(null,i)));

var G__52675 = (i__52672 + (1));
i__52672 = G__52675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52673),clojure$math$combinatorics$m5_$_iter__52670.call(null,cljs.core.chunk_rest.call(null,s__52671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52673),null);
}
} else {
var i = cljs.core.first.call(null,s__52671__$2);
return cljs.core.cons.call(null,(u.call(null,i) - v__$1.call(null,i)),clojure$math$combinatorics$m5_$_iter__52670.call(null,cljs.core.rest.call(null,s__52671__$2)));
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
return iter__51593__auto__.call(null,cljs.core.range.call(null,a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.call(null,(j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_.call(null,ks)){
return v__$2;
} else {
var k = cljs.core.first.call(null,ks);
var G__52676 = cljs.core.rest.call(null,ks);
var G__52677 = cljs.core.assoc.call(null,v__$2,k,u.call(null,k));
ks = G__52676;
v__$2 = G__52677;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__51063__auto__ = (0);
var y__51064__auto__ = (min_partitions_after_this - diff_uv);
return ((x__51063__auto__ > y__51064__auto__) ? x__51063__auto__ : y__51064__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.call(null,amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = v__$3.call(null,k_1);
if((amount > vk)){
var G__52678 = (k_1 - (1));
var G__52679 = cljs.core.assoc.call(null,v__$3,k_1,(0));
var G__52680 = (amount - vk);
k_1 = G__52678;
v__$3 = G__52679;
amount = G__52680;
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
var args__51997__auto__ = [];
var len__51990__auto___52718 = arguments.length;
var i__51991__auto___52719 = (0);
while(true){
if((i__51991__auto___52719 < len__51990__auto___52718)){
args__51997__auto__.push((arguments[i__51991__auto___52719]));

var G__52720 = (i__51991__auto___52719 + (1));
i__51991__auto___52719 = G__52720;
continue;
} else {
}
break;
}

var argseq__51998__auto__ = ((((1) < args__51997__auto__.length))?(new cljs.core.IndexedSeq(args__51997__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__51998__auto__);
});

clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__52683){
var map__52684 = p__52683;
var map__52684__$1 = ((((!((map__52684 == null)))?((((map__52684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52684):map__52684);
var from = cljs.core.get.call(null,map__52684__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.call(null,map__52684__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),(0))){
if((((function (){var or__50711__auto__ = from;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__50711__auto__ = to;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (0);
}
})()))){
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
var from__$1 = (cljs.core.truth_((function (){var and__50699__auto__ = from;
if(cljs.core.truth_(and__50699__auto__)){
return (from <= (1));
} else {
return and__50699__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__50699__auto__ = to;
if(cljs.core.truth_(and__50699__auto__)){
return (to >= N);
} else {
return and__50699__auto__;
}
})())?null:to);
if(!((((1) <= (function (){var or__50711__auto__ = from__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (1);
}
})())) && ((((function (){var or__50711__auto__ = from__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return (1);
}
})() <= (function (){var or__50711__auto__ = to__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return N;
}
})())) && (((function (){var or__50711__auto__ = to__$1;
if(cljs.core.truth_(or__50711__auto__)){
return or__50711__auto__;
} else {
return N;
}
})() <= N))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,N,(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__51665__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__51665__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__51665__auto__ = cljs.core.first.call(null,items__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__51665__auto__);
})())));
} else {
var start_multiset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__51593__auto__ = ((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function clojure$math$combinatorics$iter__52686(s__52687){
return (new cljs.core.LazySeq(null,((function (items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (){
var s__52687__$1 = s__52687;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52687__$1);
if(temp__5457__auto__){
var s__52687__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52687__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52687__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52689 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52688 = (0);
while(true){
if((i__52688 < size__51592__auto__)){
var i = cljs.core._nth.call(null,c__51591__auto__,i__52688);
var j = (i + (1));
cljs.core.chunk_append.call(null,b__52689,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null));

var G__52721 = (i__52688 + (1));
i__52688 = G__52721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52689),clojure$math$combinatorics$iter__52686.call(null,cljs.core.chunk_rest.call(null,s__52687__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52689),null);
}
} else {
var i = cljs.core.first.call(null,s__52687__$2);
var j = (i + (1));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,freqs.call(null,ditems.call(null,i))], null),clojure$math$combinatorics$iter__52686.call(null,cljs.core.rest.call(null,s__52687__$2)));
}
} else {
return null;
}
break;
}
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,null,null));
});})(items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
;
return iter__51593__auto__.call(null,cljs.core.range.call(null,M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.call(null,start_multiset,to__$1,from__$1);
var iter__51593__auto__ = ((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function clojure$math$combinatorics$iter__52690(s__52691){
return (new cljs.core.LazySeq(null,((function (start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (){
var s__52691__$1 = s__52691;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52691__$1);
if(temp__5457__auto__){
var s__52691__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52691__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52691__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52693 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52692 = (0);
while(true){
if((i__52692 < size__51592__auto__)){
var part = cljs.core._nth.call(null,c__51591__auto__,i__52692);
cljs.core.chunk_append.call(null,b__52693,(function (){var iter__51593__auto__ = ((function (i__52692,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function clojure$math$combinatorics$iter__52690_$_iter__52694(s__52695){
return (new cljs.core.LazySeq(null,((function (i__52692,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (){
var s__52695__$1 = s__52695;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52695__$1);
if(temp__5457__auto____$1){
var s__52695__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52695__$2)){
var c__51591__auto____$1 = cljs.core.chunk_first.call(null,s__52695__$2);
var size__51592__auto____$1 = cljs.core.count.call(null,c__51591__auto____$1);
var b__52697 = cljs.core.chunk_buffer.call(null,size__51592__auto____$1);
if((function (){var i__52696 = (0);
while(true){
if((i__52696 < size__51592__auto____$1)){
var multiset = cljs.core._nth.call(null,c__51591__auto____$1,i__52696);
cljs.core.chunk_append.call(null,b__52697,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__52696,i__52692,multiset,c__51591__auto____$1,size__51592__auto____$1,b__52697,s__52695__$2,temp__5457__auto____$1,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (p__52698){
var vec__52699 = p__52698;
var index = cljs.core.nth.call(null,vec__52699,(0),null);
var numtimes = cljs.core.nth.call(null,vec__52699,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__52696,i__52692,multiset,c__51591__auto____$1,size__51592__auto____$1,b__52697,s__52695__$2,temp__5457__auto____$1,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,multiset)));

var G__52722 = (i__52696 + (1));
i__52696 = G__52722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52697),clojure$math$combinatorics$iter__52690_$_iter__52694.call(null,cljs.core.chunk_rest.call(null,s__52695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52697),null);
}
} else {
var multiset = cljs.core.first.call(null,s__52695__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__52692,multiset,s__52695__$2,temp__5457__auto____$1,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (p__52702){
var vec__52703 = p__52702;
var index = cljs.core.nth.call(null,vec__52703,(0),null);
var numtimes = cljs.core.nth.call(null,vec__52703,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__52692,multiset,s__52695__$2,temp__5457__auto____$1,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__52690_$_iter__52694.call(null,cljs.core.rest.call(null,s__52695__$2)));
}
} else {
return null;
}
break;
}
});})(i__52692,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,null,null));
});})(i__52692,part,c__51591__auto__,size__51592__auto__,b__52693,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
;
return iter__51593__auto__.call(null,part);
})());

var G__52723 = (i__52692 + (1));
i__52692 = G__52723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52693),clojure$math$combinatorics$iter__52690.call(null,cljs.core.chunk_rest.call(null,s__52691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52693),null);
}
} else {
var part = cljs.core.first.call(null,s__52691__$2);
return cljs.core.cons.call(null,(function (){var iter__51593__auto__ = ((function (part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function clojure$math$combinatorics$iter__52690_$_iter__52706(s__52707){
return (new cljs.core.LazySeq(null,((function (part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (){
var s__52707__$1 = s__52707;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__52707__$1);
if(temp__5457__auto____$1){
var s__52707__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52707__$2)){
var c__51591__auto__ = cljs.core.chunk_first.call(null,s__52707__$2);
var size__51592__auto__ = cljs.core.count.call(null,c__51591__auto__);
var b__52709 = cljs.core.chunk_buffer.call(null,size__51592__auto__);
if((function (){var i__52708 = (0);
while(true){
if((i__52708 < size__51592__auto__)){
var multiset = cljs.core._nth.call(null,c__51591__auto__,i__52708);
cljs.core.chunk_append.call(null,b__52709,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (i__52708,multiset,c__51591__auto__,size__51592__auto__,b__52709,s__52707__$2,temp__5457__auto____$1,part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (p__52710){
var vec__52711 = p__52710;
var index = cljs.core.nth.call(null,vec__52711,(0),null);
var numtimes = cljs.core.nth.call(null,vec__52711,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(i__52708,multiset,c__51591__auto__,size__51592__auto__,b__52709,s__52707__$2,temp__5457__auto____$1,part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,multiset)));

var G__52724 = (i__52708 + (1));
i__52708 = G__52724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52709),clojure$math$combinatorics$iter__52690_$_iter__52706.call(null,cljs.core.chunk_rest.call(null,s__52707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52709),null);
}
} else {
var multiset = cljs.core.first.call(null,s__52707__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (multiset,s__52707__$2,temp__5457__auto____$1,part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to){
return (function (p__52714){
var vec__52715 = p__52714;
var index = cljs.core.nth.call(null,vec__52715,(0),null);
var numtimes = cljs.core.nth.call(null,vec__52715,(1),null);
return cljs.core.repeat.call(null,numtimes,ditems.call(null,(index - (1))));
});})(multiset,s__52707__$2,temp__5457__auto____$1,part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__52690_$_iter__52706.call(null,cljs.core.rest.call(null,s__52707__$2)));
}
} else {
return null;
}
break;
}
});})(part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,null,null));
});})(part,s__52691__$2,temp__5457__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
;
return iter__51593__auto__.call(null,part);
})(),clojure$math$combinatorics$iter__52690.call(null,cljs.core.rest.call(null,s__52691__$2)));
}
} else {
return null;
}
break;
}
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
,null,null));
});})(start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__52684,map__52684__$1,from,to))
;
return iter__51593__auto__.call(null,parts);

}
}
}
});

clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1);

clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq52681){
var G__52682 = cljs.core.first.call(null,seq52681);
var seq52681__$1 = cljs.core.next.call(null,seq52681);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic(G__52682,seq52681__$1);
});

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__51997__auto__ = [];
var len__51990__auto___52727 = arguments.length;
var i__51991__auto___52728 = (0);
while(true){
if((i__51991__auto___52728 < len__51990__auto___52727)){
args__51997__auto__.push((arguments[i__51991__auto___52728]));

var G__52729 = (i__51991__auto___52728 + (1));
i__51991__auto___52728 = G__52729;
continue;
} else {
}
break;
}

var argseq__51998__auto__ = ((((1) < args__51997__auto__.length))?(new cljs.core.IndexedSeq(args__51997__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__51998__auto__);
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

clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq52725){
var G__52726 = cljs.core.first.call(null,seq52725);
var seq52725__$1 = cljs.core.next.call(null,seq52725);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic(G__52726,seq52725__$1);
});


//# sourceMappingURL=combinatorics.js.map?rel=1524608698677
