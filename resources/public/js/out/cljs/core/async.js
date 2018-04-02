// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50587 = arguments.length;
switch (G__50587) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async50588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50588 = (function (f,blockable,meta50589){
this.f = f;
this.blockable = blockable;
this.meta50589 = meta50589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50590,meta50589__$1){
var self__ = this;
var _50590__$1 = this;
return (new cljs.core.async.t_cljs$core$async50588(self__.f,self__.blockable,meta50589__$1));
});

cljs.core.async.t_cljs$core$async50588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50590){
var self__ = this;
var _50590__$1 = this;
return self__.meta50589;
});

cljs.core.async.t_cljs$core$async50588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async50588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50589","meta50589",-1239359807,null)], null);
});

cljs.core.async.t_cljs$core$async50588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50588";

cljs.core.async.t_cljs$core$async50588.cljs$lang$ctorPrWriter = (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async50588");
});

cljs.core.async.__GT_t_cljs$core$async50588 = (function cljs$core$async$__GT_t_cljs$core$async50588(f__$1,blockable__$1,meta50589){
return (new cljs.core.async.t_cljs$core$async50588(f__$1,blockable__$1,meta50589));
});

}

return (new cljs.core.async.t_cljs$core$async50588(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50594 = arguments.length;
switch (G__50594) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50597 = arguments.length;
switch (G__50597) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50600 = arguments.length;
switch (G__50600) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50602 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50602);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_50602,ret){
return (function (){
return fn1.call(null,val_50602);
});})(val_50602,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50604 = arguments.length;
switch (G__50604) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__48135__auto___50606 = n;
var x_50607 = (0);
while(true){
if((x_50607 < n__48135__auto___50606)){
(a[x_50607] = (0));

var G__50608 = (x_50607 + (1));
x_50607 = G__50608;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__50609 = (i + (1));
i = G__50609;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async50610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50610 = (function (flag,meta50611){
this.flag = flag;
this.meta50611 = meta50611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50612,meta50611__$1){
var self__ = this;
var _50612__$1 = this;
return (new cljs.core.async.t_cljs$core$async50610(self__.flag,meta50611__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50612){
var self__ = this;
var _50612__$1 = this;
return self__.meta50611;
});})(flag))
;

cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50610.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50610.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50611","meta50611",-1233052002,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50610";

cljs.core.async.t_cljs$core$async50610.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async50610");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async50610 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50610(flag__$1,meta50611){
return (new cljs.core.async.t_cljs$core$async50610(flag__$1,meta50611));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50610(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async50613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50613 = (function (flag,cb,meta50614){
this.flag = flag;
this.cb = cb;
this.meta50614 = meta50614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50615,meta50614__$1){
var self__ = this;
var _50615__$1 = this;
return (new cljs.core.async.t_cljs$core$async50613(self__.flag,self__.cb,meta50614__$1));
});

cljs.core.async.t_cljs$core$async50613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50615){
var self__ = this;
var _50615__$1 = this;
return self__.meta50614;
});

cljs.core.async.t_cljs$core$async50613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async50613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50614","meta50614",-734066975,null)], null);
});

cljs.core.async.t_cljs$core$async50613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50613";

cljs.core.async.t_cljs$core$async50613.cljs$lang$ctorPrWriter = (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async50613");
});

cljs.core.async.__GT_t_cljs$core$async50613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50613(flag__$1,cb__$1,meta50614){
return (new cljs.core.async.t_cljs$core$async50613(flag__$1,cb__$1,meta50614));
});

}

return (new cljs.core.async.t_cljs$core$async50613(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50616_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50616_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50617_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50617_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__47188__auto__ = wport;
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50618 = (i + (1));
i = G__50618;
continue;
}
} else {
return null;
}
break;
}
})();
var or__47188__auto__ = ret;
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__47176__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__47176__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__47176__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__48366__auto__ = [];
var len__48359__auto___50624 = arguments.length;
var i__48360__auto___50625 = (0);
while(true){
if((i__48360__auto___50625 < len__48359__auto___50624)){
args__48366__auto__.push((arguments[i__48360__auto___50625]));

var G__50626 = (i__48360__auto___50625 + (1));
i__48360__auto___50625 = G__50626;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((1) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48367__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50621){
var map__50622 = p__50621;
var map__50622__$1 = ((((!((map__50622 == null)))?((((map__50622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50622):map__50622);
var opts = map__50622__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50619){
var G__50620 = cljs.core.first.call(null,seq50619);
var seq50619__$1 = cljs.core.next.call(null,seq50619);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50620,seq50619__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50628 = arguments.length;
switch (G__50628) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50541__auto___50674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___50674){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___50674){
return (function (state_50652){
var state_val_50653 = (state_50652[(1)]);
if((state_val_50653 === (7))){
var inst_50648 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50654_50675 = state_50652__$1;
(statearr_50654_50675[(2)] = inst_50648);

(statearr_50654_50675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (1))){
var state_50652__$1 = state_50652;
var statearr_50655_50676 = state_50652__$1;
(statearr_50655_50676[(2)] = null);

(statearr_50655_50676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (4))){
var inst_50631 = (state_50652[(7)]);
var inst_50631__$1 = (state_50652[(2)]);
var inst_50632 = (inst_50631__$1 == null);
var state_50652__$1 = (function (){var statearr_50656 = state_50652;
(statearr_50656[(7)] = inst_50631__$1);

return statearr_50656;
})();
if(cljs.core.truth_(inst_50632)){
var statearr_50657_50677 = state_50652__$1;
(statearr_50657_50677[(1)] = (5));

} else {
var statearr_50658_50678 = state_50652__$1;
(statearr_50658_50678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (13))){
var state_50652__$1 = state_50652;
var statearr_50659_50679 = state_50652__$1;
(statearr_50659_50679[(2)] = null);

(statearr_50659_50679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (6))){
var inst_50631 = (state_50652[(7)]);
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50652__$1,(11),to,inst_50631);
} else {
if((state_val_50653 === (3))){
var inst_50650 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50652__$1,inst_50650);
} else {
if((state_val_50653 === (12))){
var state_50652__$1 = state_50652;
var statearr_50660_50680 = state_50652__$1;
(statearr_50660_50680[(2)] = null);

(statearr_50660_50680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (2))){
var state_50652__$1 = state_50652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50652__$1,(4),from);
} else {
if((state_val_50653 === (11))){
var inst_50641 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
if(cljs.core.truth_(inst_50641)){
var statearr_50661_50681 = state_50652__$1;
(statearr_50661_50681[(1)] = (12));

} else {
var statearr_50662_50682 = state_50652__$1;
(statearr_50662_50682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (9))){
var state_50652__$1 = state_50652;
var statearr_50663_50683 = state_50652__$1;
(statearr_50663_50683[(2)] = null);

(statearr_50663_50683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (5))){
var state_50652__$1 = state_50652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50664_50684 = state_50652__$1;
(statearr_50664_50684[(1)] = (8));

} else {
var statearr_50665_50685 = state_50652__$1;
(statearr_50665_50685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (14))){
var inst_50646 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50666_50686 = state_50652__$1;
(statearr_50666_50686[(2)] = inst_50646);

(statearr_50666_50686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (10))){
var inst_50638 = (state_50652[(2)]);
var state_50652__$1 = state_50652;
var statearr_50667_50687 = state_50652__$1;
(statearr_50667_50687[(2)] = inst_50638);

(statearr_50667_50687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50653 === (8))){
var inst_50635 = cljs.core.async.close_BANG_.call(null,to);
var state_50652__$1 = state_50652;
var statearr_50668_50688 = state_50652__$1;
(statearr_50668_50688[(2)] = inst_50635);

(statearr_50668_50688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___50674))
;
return ((function (switch__50453__auto__,c__50541__auto___50674){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_50669 = [null,null,null,null,null,null,null,null];
(statearr_50669[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_50669[(1)] = (1));

return statearr_50669;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_50652){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50670){if((e50670 instanceof Object)){
var ex__50457__auto__ = e50670;
var statearr_50671_50689 = state_50652;
(statearr_50671_50689[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50690 = state_50652;
state_50652 = G__50690;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_50652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_50652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___50674))
})();
var state__50543__auto__ = (function (){var statearr_50672 = f__50542__auto__.call(null);
(statearr_50672[(6)] = c__50541__auto___50674);

return statearr_50672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___50674))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__50691){
var vec__50692 = p__50691;
var v = cljs.core.nth.call(null,vec__50692,(0),null);
var p = cljs.core.nth.call(null,vec__50692,(1),null);
var job = vec__50692;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__50541__auto___50863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___50863,res,vec__50692,v,p,job,jobs,results){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___50863,res,vec__50692,v,p,job,jobs,results){
return (function (state_50699){
var state_val_50700 = (state_50699[(1)]);
if((state_val_50700 === (1))){
var state_50699__$1 = state_50699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50699__$1,(2),res,v);
} else {
if((state_val_50700 === (2))){
var inst_50696 = (state_50699[(2)]);
var inst_50697 = cljs.core.async.close_BANG_.call(null,res);
var state_50699__$1 = (function (){var statearr_50701 = state_50699;
(statearr_50701[(7)] = inst_50696);

return statearr_50701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50699__$1,inst_50697);
} else {
return null;
}
}
});})(c__50541__auto___50863,res,vec__50692,v,p,job,jobs,results))
;
return ((function (switch__50453__auto__,c__50541__auto___50863,res,vec__50692,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0 = (function (){
var statearr_50702 = [null,null,null,null,null,null,null,null];
(statearr_50702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__);

(statearr_50702[(1)] = (1));

return statearr_50702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1 = (function (state_50699){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50703){if((e50703 instanceof Object)){
var ex__50457__auto__ = e50703;
var statearr_50704_50864 = state_50699;
(statearr_50704_50864[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50865 = state_50699;
state_50699 = G__50865;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = function(state_50699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1.call(this,state_50699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___50863,res,vec__50692,v,p,job,jobs,results))
})();
var state__50543__auto__ = (function (){var statearr_50705 = f__50542__auto__.call(null);
(statearr_50705[(6)] = c__50541__auto___50863);

return statearr_50705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___50863,res,vec__50692,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50706){
var vec__50707 = p__50706;
var v = cljs.core.nth.call(null,vec__50707,(0),null);
var p = cljs.core.nth.call(null,vec__50707,(1),null);
var job = vec__50707;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__48135__auto___50866 = n;
var __50867 = (0);
while(true){
if((__50867 < n__48135__auto___50866)){
var G__50710_50868 = type;
var G__50710_50869__$1 = (((G__50710_50868 instanceof cljs.core.Keyword))?G__50710_50868.fqn:null);
switch (G__50710_50869__$1) {
case "compute":
var c__50541__auto___50871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50867,c__50541__auto___50871,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (__50867,c__50541__auto___50871,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async){
return (function (state_50723){
var state_val_50724 = (state_50723[(1)]);
if((state_val_50724 === (1))){
var state_50723__$1 = state_50723;
var statearr_50725_50872 = state_50723__$1;
(statearr_50725_50872[(2)] = null);

(statearr_50725_50872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (2))){
var state_50723__$1 = state_50723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50723__$1,(4),jobs);
} else {
if((state_val_50724 === (3))){
var inst_50721 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50723__$1,inst_50721);
} else {
if((state_val_50724 === (4))){
var inst_50713 = (state_50723[(2)]);
var inst_50714 = process.call(null,inst_50713);
var state_50723__$1 = state_50723;
if(cljs.core.truth_(inst_50714)){
var statearr_50726_50873 = state_50723__$1;
(statearr_50726_50873[(1)] = (5));

} else {
var statearr_50727_50874 = state_50723__$1;
(statearr_50727_50874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (5))){
var state_50723__$1 = state_50723;
var statearr_50728_50875 = state_50723__$1;
(statearr_50728_50875[(2)] = null);

(statearr_50728_50875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (6))){
var state_50723__$1 = state_50723;
var statearr_50729_50876 = state_50723__$1;
(statearr_50729_50876[(2)] = null);

(statearr_50729_50876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50724 === (7))){
var inst_50719 = (state_50723[(2)]);
var state_50723__$1 = state_50723;
var statearr_50730_50877 = state_50723__$1;
(statearr_50730_50877[(2)] = inst_50719);

(statearr_50730_50877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50867,c__50541__auto___50871,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async))
;
return ((function (__50867,switch__50453__auto__,c__50541__auto___50871,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0 = (function (){
var statearr_50731 = [null,null,null,null,null,null,null];
(statearr_50731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__);

(statearr_50731[(1)] = (1));

return statearr_50731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1 = (function (state_50723){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50732){if((e50732 instanceof Object)){
var ex__50457__auto__ = e50732;
var statearr_50733_50878 = state_50723;
(statearr_50733_50878[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50879 = state_50723;
state_50723 = G__50879;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = function(state_50723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1.call(this,state_50723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__;
})()
;})(__50867,switch__50453__auto__,c__50541__auto___50871,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async))
})();
var state__50543__auto__ = (function (){var statearr_50734 = f__50542__auto__.call(null);
(statearr_50734[(6)] = c__50541__auto___50871);

return statearr_50734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(__50867,c__50541__auto___50871,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async))
);


break;
case "async":
var c__50541__auto___50880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50867,c__50541__auto___50880,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (__50867,c__50541__auto___50880,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async){
return (function (state_50747){
var state_val_50748 = (state_50747[(1)]);
if((state_val_50748 === (1))){
var state_50747__$1 = state_50747;
var statearr_50749_50881 = state_50747__$1;
(statearr_50749_50881[(2)] = null);

(statearr_50749_50881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50748 === (2))){
var state_50747__$1 = state_50747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50747__$1,(4),jobs);
} else {
if((state_val_50748 === (3))){
var inst_50745 = (state_50747[(2)]);
var state_50747__$1 = state_50747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50747__$1,inst_50745);
} else {
if((state_val_50748 === (4))){
var inst_50737 = (state_50747[(2)]);
var inst_50738 = async.call(null,inst_50737);
var state_50747__$1 = state_50747;
if(cljs.core.truth_(inst_50738)){
var statearr_50750_50882 = state_50747__$1;
(statearr_50750_50882[(1)] = (5));

} else {
var statearr_50751_50883 = state_50747__$1;
(statearr_50751_50883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50748 === (5))){
var state_50747__$1 = state_50747;
var statearr_50752_50884 = state_50747__$1;
(statearr_50752_50884[(2)] = null);

(statearr_50752_50884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50748 === (6))){
var state_50747__$1 = state_50747;
var statearr_50753_50885 = state_50747__$1;
(statearr_50753_50885[(2)] = null);

(statearr_50753_50885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50748 === (7))){
var inst_50743 = (state_50747[(2)]);
var state_50747__$1 = state_50747;
var statearr_50754_50886 = state_50747__$1;
(statearr_50754_50886[(2)] = inst_50743);

(statearr_50754_50886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50867,c__50541__auto___50880,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async))
;
return ((function (__50867,switch__50453__auto__,c__50541__auto___50880,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0 = (function (){
var statearr_50755 = [null,null,null,null,null,null,null];
(statearr_50755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__);

(statearr_50755[(1)] = (1));

return statearr_50755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1 = (function (state_50747){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50756){if((e50756 instanceof Object)){
var ex__50457__auto__ = e50756;
var statearr_50757_50887 = state_50747;
(statearr_50757_50887[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50888 = state_50747;
state_50747 = G__50888;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = function(state_50747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1.call(this,state_50747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__;
})()
;})(__50867,switch__50453__auto__,c__50541__auto___50880,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async))
})();
var state__50543__auto__ = (function (){var statearr_50758 = f__50542__auto__.call(null);
(statearr_50758[(6)] = c__50541__auto___50880);

return statearr_50758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(__50867,c__50541__auto___50880,G__50710_50868,G__50710_50869__$1,n__48135__auto___50866,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50710_50869__$1)].join('')));

}

var G__50889 = (__50867 + (1));
__50867 = G__50889;
continue;
} else {
}
break;
}

var c__50541__auto___50890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___50890,jobs,results,process,async){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___50890,jobs,results,process,async){
return (function (state_50780){
var state_val_50781 = (state_50780[(1)]);
if((state_val_50781 === (1))){
var state_50780__$1 = state_50780;
var statearr_50782_50891 = state_50780__$1;
(statearr_50782_50891[(2)] = null);

(statearr_50782_50891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (2))){
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50780__$1,(4),from);
} else {
if((state_val_50781 === (3))){
var inst_50778 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50780__$1,inst_50778);
} else {
if((state_val_50781 === (4))){
var inst_50761 = (state_50780[(7)]);
var inst_50761__$1 = (state_50780[(2)]);
var inst_50762 = (inst_50761__$1 == null);
var state_50780__$1 = (function (){var statearr_50783 = state_50780;
(statearr_50783[(7)] = inst_50761__$1);

return statearr_50783;
})();
if(cljs.core.truth_(inst_50762)){
var statearr_50784_50892 = state_50780__$1;
(statearr_50784_50892[(1)] = (5));

} else {
var statearr_50785_50893 = state_50780__$1;
(statearr_50785_50893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (5))){
var inst_50764 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50780__$1 = state_50780;
var statearr_50786_50894 = state_50780__$1;
(statearr_50786_50894[(2)] = inst_50764);

(statearr_50786_50894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (6))){
var inst_50766 = (state_50780[(8)]);
var inst_50761 = (state_50780[(7)]);
var inst_50766__$1 = cljs.core.async.chan.call(null,(1));
var inst_50767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50768 = [inst_50761,inst_50766__$1];
var inst_50769 = (new cljs.core.PersistentVector(null,2,(5),inst_50767,inst_50768,null));
var state_50780__$1 = (function (){var statearr_50787 = state_50780;
(statearr_50787[(8)] = inst_50766__$1);

return statearr_50787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50780__$1,(8),jobs,inst_50769);
} else {
if((state_val_50781 === (7))){
var inst_50776 = (state_50780[(2)]);
var state_50780__$1 = state_50780;
var statearr_50788_50895 = state_50780__$1;
(statearr_50788_50895[(2)] = inst_50776);

(statearr_50788_50895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50781 === (8))){
var inst_50766 = (state_50780[(8)]);
var inst_50771 = (state_50780[(2)]);
var state_50780__$1 = (function (){var statearr_50789 = state_50780;
(statearr_50789[(9)] = inst_50771);

return statearr_50789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50780__$1,(9),results,inst_50766);
} else {
if((state_val_50781 === (9))){
var inst_50773 = (state_50780[(2)]);
var state_50780__$1 = (function (){var statearr_50790 = state_50780;
(statearr_50790[(10)] = inst_50773);

return statearr_50790;
})();
var statearr_50791_50896 = state_50780__$1;
(statearr_50791_50896[(2)] = null);

(statearr_50791_50896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___50890,jobs,results,process,async))
;
return ((function (switch__50453__auto__,c__50541__auto___50890,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0 = (function (){
var statearr_50792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50792[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__);

(statearr_50792[(1)] = (1));

return statearr_50792;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1 = (function (state_50780){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50793){if((e50793 instanceof Object)){
var ex__50457__auto__ = e50793;
var statearr_50794_50897 = state_50780;
(statearr_50794_50897[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50898 = state_50780;
state_50780 = G__50898;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = function(state_50780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1.call(this,state_50780);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___50890,jobs,results,process,async))
})();
var state__50543__auto__ = (function (){var statearr_50795 = f__50542__auto__.call(null);
(statearr_50795[(6)] = c__50541__auto___50890);

return statearr_50795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___50890,jobs,results,process,async))
);


var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__,jobs,results,process,async){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__,jobs,results,process,async){
return (function (state_50833){
var state_val_50834 = (state_50833[(1)]);
if((state_val_50834 === (7))){
var inst_50829 = (state_50833[(2)]);
var state_50833__$1 = state_50833;
var statearr_50835_50899 = state_50833__$1;
(statearr_50835_50899[(2)] = inst_50829);

(statearr_50835_50899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (20))){
var state_50833__$1 = state_50833;
var statearr_50836_50900 = state_50833__$1;
(statearr_50836_50900[(2)] = null);

(statearr_50836_50900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (1))){
var state_50833__$1 = state_50833;
var statearr_50837_50901 = state_50833__$1;
(statearr_50837_50901[(2)] = null);

(statearr_50837_50901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (4))){
var inst_50798 = (state_50833[(7)]);
var inst_50798__$1 = (state_50833[(2)]);
var inst_50799 = (inst_50798__$1 == null);
var state_50833__$1 = (function (){var statearr_50838 = state_50833;
(statearr_50838[(7)] = inst_50798__$1);

return statearr_50838;
})();
if(cljs.core.truth_(inst_50799)){
var statearr_50839_50902 = state_50833__$1;
(statearr_50839_50902[(1)] = (5));

} else {
var statearr_50840_50903 = state_50833__$1;
(statearr_50840_50903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (15))){
var inst_50811 = (state_50833[(8)]);
var state_50833__$1 = state_50833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50833__$1,(18),to,inst_50811);
} else {
if((state_val_50834 === (21))){
var inst_50824 = (state_50833[(2)]);
var state_50833__$1 = state_50833;
var statearr_50841_50904 = state_50833__$1;
(statearr_50841_50904[(2)] = inst_50824);

(statearr_50841_50904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (13))){
var inst_50826 = (state_50833[(2)]);
var state_50833__$1 = (function (){var statearr_50842 = state_50833;
(statearr_50842[(9)] = inst_50826);

return statearr_50842;
})();
var statearr_50843_50905 = state_50833__$1;
(statearr_50843_50905[(2)] = null);

(statearr_50843_50905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (6))){
var inst_50798 = (state_50833[(7)]);
var state_50833__$1 = state_50833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50833__$1,(11),inst_50798);
} else {
if((state_val_50834 === (17))){
var inst_50819 = (state_50833[(2)]);
var state_50833__$1 = state_50833;
if(cljs.core.truth_(inst_50819)){
var statearr_50844_50906 = state_50833__$1;
(statearr_50844_50906[(1)] = (19));

} else {
var statearr_50845_50907 = state_50833__$1;
(statearr_50845_50907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (3))){
var inst_50831 = (state_50833[(2)]);
var state_50833__$1 = state_50833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50833__$1,inst_50831);
} else {
if((state_val_50834 === (12))){
var inst_50808 = (state_50833[(10)]);
var state_50833__$1 = state_50833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50833__$1,(14),inst_50808);
} else {
if((state_val_50834 === (2))){
var state_50833__$1 = state_50833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50833__$1,(4),results);
} else {
if((state_val_50834 === (19))){
var state_50833__$1 = state_50833;
var statearr_50846_50908 = state_50833__$1;
(statearr_50846_50908[(2)] = null);

(statearr_50846_50908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (11))){
var inst_50808 = (state_50833[(2)]);
var state_50833__$1 = (function (){var statearr_50847 = state_50833;
(statearr_50847[(10)] = inst_50808);

return statearr_50847;
})();
var statearr_50848_50909 = state_50833__$1;
(statearr_50848_50909[(2)] = null);

(statearr_50848_50909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (9))){
var state_50833__$1 = state_50833;
var statearr_50849_50910 = state_50833__$1;
(statearr_50849_50910[(2)] = null);

(statearr_50849_50910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (5))){
var state_50833__$1 = state_50833;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50850_50911 = state_50833__$1;
(statearr_50850_50911[(1)] = (8));

} else {
var statearr_50851_50912 = state_50833__$1;
(statearr_50851_50912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (14))){
var inst_50811 = (state_50833[(8)]);
var inst_50813 = (state_50833[(11)]);
var inst_50811__$1 = (state_50833[(2)]);
var inst_50812 = (inst_50811__$1 == null);
var inst_50813__$1 = cljs.core.not.call(null,inst_50812);
var state_50833__$1 = (function (){var statearr_50852 = state_50833;
(statearr_50852[(8)] = inst_50811__$1);

(statearr_50852[(11)] = inst_50813__$1);

return statearr_50852;
})();
if(inst_50813__$1){
var statearr_50853_50913 = state_50833__$1;
(statearr_50853_50913[(1)] = (15));

} else {
var statearr_50854_50914 = state_50833__$1;
(statearr_50854_50914[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (16))){
var inst_50813 = (state_50833[(11)]);
var state_50833__$1 = state_50833;
var statearr_50855_50915 = state_50833__$1;
(statearr_50855_50915[(2)] = inst_50813);

(statearr_50855_50915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (10))){
var inst_50805 = (state_50833[(2)]);
var state_50833__$1 = state_50833;
var statearr_50856_50916 = state_50833__$1;
(statearr_50856_50916[(2)] = inst_50805);

(statearr_50856_50916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (18))){
var inst_50816 = (state_50833[(2)]);
var state_50833__$1 = state_50833;
var statearr_50857_50917 = state_50833__$1;
(statearr_50857_50917[(2)] = inst_50816);

(statearr_50857_50917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50834 === (8))){
var inst_50802 = cljs.core.async.close_BANG_.call(null,to);
var state_50833__$1 = state_50833;
var statearr_50858_50918 = state_50833__$1;
(statearr_50858_50918[(2)] = inst_50802);

(statearr_50858_50918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto__,jobs,results,process,async))
;
return ((function (switch__50453__auto__,c__50541__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0 = (function (){
var statearr_50859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__);

(statearr_50859[(1)] = (1));

return statearr_50859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1 = (function (state_50833){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50860){if((e50860 instanceof Object)){
var ex__50457__auto__ = e50860;
var statearr_50861_50919 = state_50833;
(statearr_50861_50919[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50920 = state_50833;
state_50833 = G__50920;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__ = function(state_50833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1.call(this,state_50833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__,jobs,results,process,async))
})();
var state__50543__auto__ = (function (){var statearr_50862 = f__50542__auto__.call(null);
(statearr_50862[(6)] = c__50541__auto__);

return statearr_50862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__,jobs,results,process,async))
);

return c__50541__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50922 = arguments.length;
switch (G__50922) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50925 = arguments.length;
switch (G__50925) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50928 = arguments.length;
switch (G__50928) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__50541__auto___50977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___50977,tc,fc){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___50977,tc,fc){
return (function (state_50954){
var state_val_50955 = (state_50954[(1)]);
if((state_val_50955 === (7))){
var inst_50950 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_50956_50978 = state_50954__$1;
(statearr_50956_50978[(2)] = inst_50950);

(statearr_50956_50978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (1))){
var state_50954__$1 = state_50954;
var statearr_50957_50979 = state_50954__$1;
(statearr_50957_50979[(2)] = null);

(statearr_50957_50979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (4))){
var inst_50931 = (state_50954[(7)]);
var inst_50931__$1 = (state_50954[(2)]);
var inst_50932 = (inst_50931__$1 == null);
var state_50954__$1 = (function (){var statearr_50958 = state_50954;
(statearr_50958[(7)] = inst_50931__$1);

return statearr_50958;
})();
if(cljs.core.truth_(inst_50932)){
var statearr_50959_50980 = state_50954__$1;
(statearr_50959_50980[(1)] = (5));

} else {
var statearr_50960_50981 = state_50954__$1;
(statearr_50960_50981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (13))){
var state_50954__$1 = state_50954;
var statearr_50961_50982 = state_50954__$1;
(statearr_50961_50982[(2)] = null);

(statearr_50961_50982[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (6))){
var inst_50931 = (state_50954[(7)]);
var inst_50937 = p.call(null,inst_50931);
var state_50954__$1 = state_50954;
if(cljs.core.truth_(inst_50937)){
var statearr_50962_50983 = state_50954__$1;
(statearr_50962_50983[(1)] = (9));

} else {
var statearr_50963_50984 = state_50954__$1;
(statearr_50963_50984[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (3))){
var inst_50952 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50954__$1,inst_50952);
} else {
if((state_val_50955 === (12))){
var state_50954__$1 = state_50954;
var statearr_50964_50985 = state_50954__$1;
(statearr_50964_50985[(2)] = null);

(statearr_50964_50985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (2))){
var state_50954__$1 = state_50954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50954__$1,(4),ch);
} else {
if((state_val_50955 === (11))){
var inst_50931 = (state_50954[(7)]);
var inst_50941 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50954__$1,(8),inst_50941,inst_50931);
} else {
if((state_val_50955 === (9))){
var state_50954__$1 = state_50954;
var statearr_50965_50986 = state_50954__$1;
(statearr_50965_50986[(2)] = tc);

(statearr_50965_50986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (5))){
var inst_50934 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50935 = cljs.core.async.close_BANG_.call(null,fc);
var state_50954__$1 = (function (){var statearr_50966 = state_50954;
(statearr_50966[(8)] = inst_50934);

return statearr_50966;
})();
var statearr_50967_50987 = state_50954__$1;
(statearr_50967_50987[(2)] = inst_50935);

(statearr_50967_50987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (14))){
var inst_50948 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
var statearr_50968_50988 = state_50954__$1;
(statearr_50968_50988[(2)] = inst_50948);

(statearr_50968_50988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (10))){
var state_50954__$1 = state_50954;
var statearr_50969_50989 = state_50954__$1;
(statearr_50969_50989[(2)] = fc);

(statearr_50969_50989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50955 === (8))){
var inst_50943 = (state_50954[(2)]);
var state_50954__$1 = state_50954;
if(cljs.core.truth_(inst_50943)){
var statearr_50970_50990 = state_50954__$1;
(statearr_50970_50990[(1)] = (12));

} else {
var statearr_50971_50991 = state_50954__$1;
(statearr_50971_50991[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___50977,tc,fc))
;
return ((function (switch__50453__auto__,c__50541__auto___50977,tc,fc){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_50972 = [null,null,null,null,null,null,null,null,null];
(statearr_50972[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_50972[(1)] = (1));

return statearr_50972;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_50954){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_50954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e50973){if((e50973 instanceof Object)){
var ex__50457__auto__ = e50973;
var statearr_50974_50992 = state_50954;
(statearr_50974_50992[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50993 = state_50954;
state_50954 = G__50993;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_50954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_50954);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___50977,tc,fc))
})();
var state__50543__auto__ = (function (){var statearr_50975 = f__50542__auto__.call(null);
(statearr_50975[(6)] = c__50541__auto___50977);

return statearr_50975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___50977,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__){
return (function (state_51014){
var state_val_51015 = (state_51014[(1)]);
if((state_val_51015 === (7))){
var inst_51010 = (state_51014[(2)]);
var state_51014__$1 = state_51014;
var statearr_51016_51034 = state_51014__$1;
(statearr_51016_51034[(2)] = inst_51010);

(statearr_51016_51034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (1))){
var inst_50994 = init;
var state_51014__$1 = (function (){var statearr_51017 = state_51014;
(statearr_51017[(7)] = inst_50994);

return statearr_51017;
})();
var statearr_51018_51035 = state_51014__$1;
(statearr_51018_51035[(2)] = null);

(statearr_51018_51035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (4))){
var inst_50997 = (state_51014[(8)]);
var inst_50997__$1 = (state_51014[(2)]);
var inst_50998 = (inst_50997__$1 == null);
var state_51014__$1 = (function (){var statearr_51019 = state_51014;
(statearr_51019[(8)] = inst_50997__$1);

return statearr_51019;
})();
if(cljs.core.truth_(inst_50998)){
var statearr_51020_51036 = state_51014__$1;
(statearr_51020_51036[(1)] = (5));

} else {
var statearr_51021_51037 = state_51014__$1;
(statearr_51021_51037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (6))){
var inst_50997 = (state_51014[(8)]);
var inst_51001 = (state_51014[(9)]);
var inst_50994 = (state_51014[(7)]);
var inst_51001__$1 = f.call(null,inst_50994,inst_50997);
var inst_51002 = cljs.core.reduced_QMARK_.call(null,inst_51001__$1);
var state_51014__$1 = (function (){var statearr_51022 = state_51014;
(statearr_51022[(9)] = inst_51001__$1);

return statearr_51022;
})();
if(inst_51002){
var statearr_51023_51038 = state_51014__$1;
(statearr_51023_51038[(1)] = (8));

} else {
var statearr_51024_51039 = state_51014__$1;
(statearr_51024_51039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (3))){
var inst_51012 = (state_51014[(2)]);
var state_51014__$1 = state_51014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51014__$1,inst_51012);
} else {
if((state_val_51015 === (2))){
var state_51014__$1 = state_51014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51014__$1,(4),ch);
} else {
if((state_val_51015 === (9))){
var inst_51001 = (state_51014[(9)]);
var inst_50994 = inst_51001;
var state_51014__$1 = (function (){var statearr_51025 = state_51014;
(statearr_51025[(7)] = inst_50994);

return statearr_51025;
})();
var statearr_51026_51040 = state_51014__$1;
(statearr_51026_51040[(2)] = null);

(statearr_51026_51040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (5))){
var inst_50994 = (state_51014[(7)]);
var state_51014__$1 = state_51014;
var statearr_51027_51041 = state_51014__$1;
(statearr_51027_51041[(2)] = inst_50994);

(statearr_51027_51041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (10))){
var inst_51008 = (state_51014[(2)]);
var state_51014__$1 = state_51014;
var statearr_51028_51042 = state_51014__$1;
(statearr_51028_51042[(2)] = inst_51008);

(statearr_51028_51042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51015 === (8))){
var inst_51001 = (state_51014[(9)]);
var inst_51004 = cljs.core.deref.call(null,inst_51001);
var state_51014__$1 = state_51014;
var statearr_51029_51043 = state_51014__$1;
(statearr_51029_51043[(2)] = inst_51004);

(statearr_51029_51043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto__))
;
return ((function (switch__50453__auto__,c__50541__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50454__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50454__auto____0 = (function (){
var statearr_51030 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51030[(0)] = cljs$core$async$reduce_$_state_machine__50454__auto__);

(statearr_51030[(1)] = (1));

return statearr_51030;
});
var cljs$core$async$reduce_$_state_machine__50454__auto____1 = (function (state_51014){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51031){if((e51031 instanceof Object)){
var ex__50457__auto__ = e51031;
var statearr_51032_51044 = state_51014;
(statearr_51032_51044[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51045 = state_51014;
state_51014 = G__51045;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50454__auto__ = function(state_51014){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50454__auto____1.call(this,state_51014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50454__auto____0;
cljs$core$async$reduce_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50454__auto____1;
return cljs$core$async$reduce_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__))
})();
var state__50543__auto__ = (function (){var statearr_51033 = f__50542__auto__.call(null);
(statearr_51033[(6)] = c__50541__auto__);

return statearr_51033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__))
);

return c__50541__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__,f__$1){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__,f__$1){
return (function (state_51051){
var state_val_51052 = (state_51051[(1)]);
if((state_val_51052 === (1))){
var inst_51046 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_51051__$1 = state_51051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51051__$1,(2),inst_51046);
} else {
if((state_val_51052 === (2))){
var inst_51048 = (state_51051[(2)]);
var inst_51049 = f__$1.call(null,inst_51048);
var state_51051__$1 = state_51051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51051__$1,inst_51049);
} else {
return null;
}
}
});})(c__50541__auto__,f__$1))
;
return ((function (switch__50453__auto__,c__50541__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50454__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50454__auto____0 = (function (){
var statearr_51053 = [null,null,null,null,null,null,null];
(statearr_51053[(0)] = cljs$core$async$transduce_$_state_machine__50454__auto__);

(statearr_51053[(1)] = (1));

return statearr_51053;
});
var cljs$core$async$transduce_$_state_machine__50454__auto____1 = (function (state_51051){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51054){if((e51054 instanceof Object)){
var ex__50457__auto__ = e51054;
var statearr_51055_51057 = state_51051;
(statearr_51055_51057[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51058 = state_51051;
state_51051 = G__51058;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50454__auto__ = function(state_51051){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50454__auto____1.call(this,state_51051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50454__auto____0;
cljs$core$async$transduce_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50454__auto____1;
return cljs$core$async$transduce_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__,f__$1))
})();
var state__50543__auto__ = (function (){var statearr_51056 = f__50542__auto__.call(null);
(statearr_51056[(6)] = c__50541__auto__);

return statearr_51056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__,f__$1))
);

return c__50541__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51060 = arguments.length;
switch (G__51060) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__){
return (function (state_51085){
var state_val_51086 = (state_51085[(1)]);
if((state_val_51086 === (7))){
var inst_51067 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51087_51108 = state_51085__$1;
(statearr_51087_51108[(2)] = inst_51067);

(statearr_51087_51108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (1))){
var inst_51061 = cljs.core.seq.call(null,coll);
var inst_51062 = inst_51061;
var state_51085__$1 = (function (){var statearr_51088 = state_51085;
(statearr_51088[(7)] = inst_51062);

return statearr_51088;
})();
var statearr_51089_51109 = state_51085__$1;
(statearr_51089_51109[(2)] = null);

(statearr_51089_51109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (4))){
var inst_51062 = (state_51085[(7)]);
var inst_51065 = cljs.core.first.call(null,inst_51062);
var state_51085__$1 = state_51085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51085__$1,(7),ch,inst_51065);
} else {
if((state_val_51086 === (13))){
var inst_51079 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51090_51110 = state_51085__$1;
(statearr_51090_51110[(2)] = inst_51079);

(statearr_51090_51110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (6))){
var inst_51070 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51070)){
var statearr_51091_51111 = state_51085__$1;
(statearr_51091_51111[(1)] = (8));

} else {
var statearr_51092_51112 = state_51085__$1;
(statearr_51092_51112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (3))){
var inst_51083 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51085__$1,inst_51083);
} else {
if((state_val_51086 === (12))){
var state_51085__$1 = state_51085;
var statearr_51093_51113 = state_51085__$1;
(statearr_51093_51113[(2)] = null);

(statearr_51093_51113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (2))){
var inst_51062 = (state_51085[(7)]);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51062)){
var statearr_51094_51114 = state_51085__$1;
(statearr_51094_51114[(1)] = (4));

} else {
var statearr_51095_51115 = state_51085__$1;
(statearr_51095_51115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (11))){
var inst_51076 = cljs.core.async.close_BANG_.call(null,ch);
var state_51085__$1 = state_51085;
var statearr_51096_51116 = state_51085__$1;
(statearr_51096_51116[(2)] = inst_51076);

(statearr_51096_51116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (9))){
var state_51085__$1 = state_51085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51097_51117 = state_51085__$1;
(statearr_51097_51117[(1)] = (11));

} else {
var statearr_51098_51118 = state_51085__$1;
(statearr_51098_51118[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (5))){
var inst_51062 = (state_51085[(7)]);
var state_51085__$1 = state_51085;
var statearr_51099_51119 = state_51085__$1;
(statearr_51099_51119[(2)] = inst_51062);

(statearr_51099_51119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (10))){
var inst_51081 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51100_51120 = state_51085__$1;
(statearr_51100_51120[(2)] = inst_51081);

(statearr_51100_51120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (8))){
var inst_51062 = (state_51085[(7)]);
var inst_51072 = cljs.core.next.call(null,inst_51062);
var inst_51062__$1 = inst_51072;
var state_51085__$1 = (function (){var statearr_51101 = state_51085;
(statearr_51101[(7)] = inst_51062__$1);

return statearr_51101;
})();
var statearr_51102_51121 = state_51085__$1;
(statearr_51102_51121[(2)] = null);

(statearr_51102_51121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto__))
;
return ((function (switch__50453__auto__,c__50541__auto__){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_51103 = [null,null,null,null,null,null,null,null];
(statearr_51103[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_51103[(1)] = (1));

return statearr_51103;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_51085){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51104){if((e51104 instanceof Object)){
var ex__50457__auto__ = e51104;
var statearr_51105_51122 = state_51085;
(statearr_51105_51122[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51123 = state_51085;
state_51085 = G__51123;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_51085){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_51085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__))
})();
var state__50543__auto__ = (function (){var statearr_51106 = f__50542__auto__.call(null);
(statearr_51106[(6)] = c__50541__auto__);

return statearr_51106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__))
);

return c__50541__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__47871__auto__ = (((_ == null))?null:_);
var m__47872__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,_);
} else {
var m__47872__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__47872__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m,ch);
} else {
var m__47872__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m);
} else {
var m__47872__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async51124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51124 = (function (ch,cs,meta51125){
this.ch = ch;
this.cs = cs;
this.meta51125 = meta51125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51126,meta51125__$1){
var self__ = this;
var _51126__$1 = this;
return (new cljs.core.async.t_cljs$core$async51124(self__.ch,self__.cs,meta51125__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51126){
var self__ = this;
var _51126__$1 = this;
return self__.meta51125;
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51125","meta51125",2004635105,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51124";

cljs.core.async.t_cljs$core$async51124.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async51124");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async51124 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51124(ch__$1,cs__$1,meta51125){
return (new cljs.core.async.t_cljs$core$async51124(ch__$1,cs__$1,meta51125));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51124(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__50541__auto___51346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___51346,cs,m,dchan,dctr,done){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___51346,cs,m,dchan,dctr,done){
return (function (state_51261){
var state_val_51262 = (state_51261[(1)]);
if((state_val_51262 === (7))){
var inst_51257 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51263_51347 = state_51261__$1;
(statearr_51263_51347[(2)] = inst_51257);

(statearr_51263_51347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (20))){
var inst_51160 = (state_51261[(7)]);
var inst_51172 = cljs.core.first.call(null,inst_51160);
var inst_51173 = cljs.core.nth.call(null,inst_51172,(0),null);
var inst_51174 = cljs.core.nth.call(null,inst_51172,(1),null);
var state_51261__$1 = (function (){var statearr_51264 = state_51261;
(statearr_51264[(8)] = inst_51173);

return statearr_51264;
})();
if(cljs.core.truth_(inst_51174)){
var statearr_51265_51348 = state_51261__$1;
(statearr_51265_51348[(1)] = (22));

} else {
var statearr_51266_51349 = state_51261__$1;
(statearr_51266_51349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (27))){
var inst_51209 = (state_51261[(9)]);
var inst_51204 = (state_51261[(10)]);
var inst_51129 = (state_51261[(11)]);
var inst_51202 = (state_51261[(12)]);
var inst_51209__$1 = cljs.core._nth.call(null,inst_51202,inst_51204);
var inst_51210 = cljs.core.async.put_BANG_.call(null,inst_51209__$1,inst_51129,done);
var state_51261__$1 = (function (){var statearr_51267 = state_51261;
(statearr_51267[(9)] = inst_51209__$1);

return statearr_51267;
})();
if(cljs.core.truth_(inst_51210)){
var statearr_51268_51350 = state_51261__$1;
(statearr_51268_51350[(1)] = (30));

} else {
var statearr_51269_51351 = state_51261__$1;
(statearr_51269_51351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (1))){
var state_51261__$1 = state_51261;
var statearr_51270_51352 = state_51261__$1;
(statearr_51270_51352[(2)] = null);

(statearr_51270_51352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (24))){
var inst_51160 = (state_51261[(7)]);
var inst_51179 = (state_51261[(2)]);
var inst_51180 = cljs.core.next.call(null,inst_51160);
var inst_51138 = inst_51180;
var inst_51139 = null;
var inst_51140 = (0);
var inst_51141 = (0);
var state_51261__$1 = (function (){var statearr_51271 = state_51261;
(statearr_51271[(13)] = inst_51179);

(statearr_51271[(14)] = inst_51141);

(statearr_51271[(15)] = inst_51139);

(statearr_51271[(16)] = inst_51138);

(statearr_51271[(17)] = inst_51140);

return statearr_51271;
})();
var statearr_51272_51353 = state_51261__$1;
(statearr_51272_51353[(2)] = null);

(statearr_51272_51353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (39))){
var state_51261__$1 = state_51261;
var statearr_51276_51354 = state_51261__$1;
(statearr_51276_51354[(2)] = null);

(statearr_51276_51354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (4))){
var inst_51129 = (state_51261[(11)]);
var inst_51129__$1 = (state_51261[(2)]);
var inst_51130 = (inst_51129__$1 == null);
var state_51261__$1 = (function (){var statearr_51277 = state_51261;
(statearr_51277[(11)] = inst_51129__$1);

return statearr_51277;
})();
if(cljs.core.truth_(inst_51130)){
var statearr_51278_51355 = state_51261__$1;
(statearr_51278_51355[(1)] = (5));

} else {
var statearr_51279_51356 = state_51261__$1;
(statearr_51279_51356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (15))){
var inst_51141 = (state_51261[(14)]);
var inst_51139 = (state_51261[(15)]);
var inst_51138 = (state_51261[(16)]);
var inst_51140 = (state_51261[(17)]);
var inst_51156 = (state_51261[(2)]);
var inst_51157 = (inst_51141 + (1));
var tmp51273 = inst_51139;
var tmp51274 = inst_51138;
var tmp51275 = inst_51140;
var inst_51138__$1 = tmp51274;
var inst_51139__$1 = tmp51273;
var inst_51140__$1 = tmp51275;
var inst_51141__$1 = inst_51157;
var state_51261__$1 = (function (){var statearr_51280 = state_51261;
(statearr_51280[(14)] = inst_51141__$1);

(statearr_51280[(15)] = inst_51139__$1);

(statearr_51280[(16)] = inst_51138__$1);

(statearr_51280[(17)] = inst_51140__$1);

(statearr_51280[(18)] = inst_51156);

return statearr_51280;
})();
var statearr_51281_51357 = state_51261__$1;
(statearr_51281_51357[(2)] = null);

(statearr_51281_51357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (21))){
var inst_51183 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51285_51358 = state_51261__$1;
(statearr_51285_51358[(2)] = inst_51183);

(statearr_51285_51358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (31))){
var inst_51209 = (state_51261[(9)]);
var inst_51213 = done.call(null,null);
var inst_51214 = cljs.core.async.untap_STAR_.call(null,m,inst_51209);
var state_51261__$1 = (function (){var statearr_51286 = state_51261;
(statearr_51286[(19)] = inst_51213);

return statearr_51286;
})();
var statearr_51287_51359 = state_51261__$1;
(statearr_51287_51359[(2)] = inst_51214);

(statearr_51287_51359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (32))){
var inst_51201 = (state_51261[(20)]);
var inst_51204 = (state_51261[(10)]);
var inst_51202 = (state_51261[(12)]);
var inst_51203 = (state_51261[(21)]);
var inst_51216 = (state_51261[(2)]);
var inst_51217 = (inst_51204 + (1));
var tmp51282 = inst_51201;
var tmp51283 = inst_51202;
var tmp51284 = inst_51203;
var inst_51201__$1 = tmp51282;
var inst_51202__$1 = tmp51283;
var inst_51203__$1 = tmp51284;
var inst_51204__$1 = inst_51217;
var state_51261__$1 = (function (){var statearr_51288 = state_51261;
(statearr_51288[(20)] = inst_51201__$1);

(statearr_51288[(10)] = inst_51204__$1);

(statearr_51288[(12)] = inst_51202__$1);

(statearr_51288[(22)] = inst_51216);

(statearr_51288[(21)] = inst_51203__$1);

return statearr_51288;
})();
var statearr_51289_51360 = state_51261__$1;
(statearr_51289_51360[(2)] = null);

(statearr_51289_51360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (40))){
var inst_51229 = (state_51261[(23)]);
var inst_51233 = done.call(null,null);
var inst_51234 = cljs.core.async.untap_STAR_.call(null,m,inst_51229);
var state_51261__$1 = (function (){var statearr_51290 = state_51261;
(statearr_51290[(24)] = inst_51233);

return statearr_51290;
})();
var statearr_51291_51361 = state_51261__$1;
(statearr_51291_51361[(2)] = inst_51234);

(statearr_51291_51361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (33))){
var inst_51220 = (state_51261[(25)]);
var inst_51222 = cljs.core.chunked_seq_QMARK_.call(null,inst_51220);
var state_51261__$1 = state_51261;
if(inst_51222){
var statearr_51292_51362 = state_51261__$1;
(statearr_51292_51362[(1)] = (36));

} else {
var statearr_51293_51363 = state_51261__$1;
(statearr_51293_51363[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (13))){
var inst_51150 = (state_51261[(26)]);
var inst_51153 = cljs.core.async.close_BANG_.call(null,inst_51150);
var state_51261__$1 = state_51261;
var statearr_51294_51364 = state_51261__$1;
(statearr_51294_51364[(2)] = inst_51153);

(statearr_51294_51364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (22))){
var inst_51173 = (state_51261[(8)]);
var inst_51176 = cljs.core.async.close_BANG_.call(null,inst_51173);
var state_51261__$1 = state_51261;
var statearr_51295_51365 = state_51261__$1;
(statearr_51295_51365[(2)] = inst_51176);

(statearr_51295_51365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (36))){
var inst_51220 = (state_51261[(25)]);
var inst_51224 = cljs.core.chunk_first.call(null,inst_51220);
var inst_51225 = cljs.core.chunk_rest.call(null,inst_51220);
var inst_51226 = cljs.core.count.call(null,inst_51224);
var inst_51201 = inst_51225;
var inst_51202 = inst_51224;
var inst_51203 = inst_51226;
var inst_51204 = (0);
var state_51261__$1 = (function (){var statearr_51296 = state_51261;
(statearr_51296[(20)] = inst_51201);

(statearr_51296[(10)] = inst_51204);

(statearr_51296[(12)] = inst_51202);

(statearr_51296[(21)] = inst_51203);

return statearr_51296;
})();
var statearr_51297_51366 = state_51261__$1;
(statearr_51297_51366[(2)] = null);

(statearr_51297_51366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (41))){
var inst_51220 = (state_51261[(25)]);
var inst_51236 = (state_51261[(2)]);
var inst_51237 = cljs.core.next.call(null,inst_51220);
var inst_51201 = inst_51237;
var inst_51202 = null;
var inst_51203 = (0);
var inst_51204 = (0);
var state_51261__$1 = (function (){var statearr_51298 = state_51261;
(statearr_51298[(20)] = inst_51201);

(statearr_51298[(10)] = inst_51204);

(statearr_51298[(12)] = inst_51202);

(statearr_51298[(27)] = inst_51236);

(statearr_51298[(21)] = inst_51203);

return statearr_51298;
})();
var statearr_51299_51367 = state_51261__$1;
(statearr_51299_51367[(2)] = null);

(statearr_51299_51367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (43))){
var state_51261__$1 = state_51261;
var statearr_51300_51368 = state_51261__$1;
(statearr_51300_51368[(2)] = null);

(statearr_51300_51368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (29))){
var inst_51245 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51301_51369 = state_51261__$1;
(statearr_51301_51369[(2)] = inst_51245);

(statearr_51301_51369[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (44))){
var inst_51254 = (state_51261[(2)]);
var state_51261__$1 = (function (){var statearr_51302 = state_51261;
(statearr_51302[(28)] = inst_51254);

return statearr_51302;
})();
var statearr_51303_51370 = state_51261__$1;
(statearr_51303_51370[(2)] = null);

(statearr_51303_51370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (6))){
var inst_51193 = (state_51261[(29)]);
var inst_51192 = cljs.core.deref.call(null,cs);
var inst_51193__$1 = cljs.core.keys.call(null,inst_51192);
var inst_51194 = cljs.core.count.call(null,inst_51193__$1);
var inst_51195 = cljs.core.reset_BANG_.call(null,dctr,inst_51194);
var inst_51200 = cljs.core.seq.call(null,inst_51193__$1);
var inst_51201 = inst_51200;
var inst_51202 = null;
var inst_51203 = (0);
var inst_51204 = (0);
var state_51261__$1 = (function (){var statearr_51304 = state_51261;
(statearr_51304[(20)] = inst_51201);

(statearr_51304[(10)] = inst_51204);

(statearr_51304[(12)] = inst_51202);

(statearr_51304[(29)] = inst_51193__$1);

(statearr_51304[(21)] = inst_51203);

(statearr_51304[(30)] = inst_51195);

return statearr_51304;
})();
var statearr_51305_51371 = state_51261__$1;
(statearr_51305_51371[(2)] = null);

(statearr_51305_51371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (28))){
var inst_51201 = (state_51261[(20)]);
var inst_51220 = (state_51261[(25)]);
var inst_51220__$1 = cljs.core.seq.call(null,inst_51201);
var state_51261__$1 = (function (){var statearr_51306 = state_51261;
(statearr_51306[(25)] = inst_51220__$1);

return statearr_51306;
})();
if(inst_51220__$1){
var statearr_51307_51372 = state_51261__$1;
(statearr_51307_51372[(1)] = (33));

} else {
var statearr_51308_51373 = state_51261__$1;
(statearr_51308_51373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (25))){
var inst_51204 = (state_51261[(10)]);
var inst_51203 = (state_51261[(21)]);
var inst_51206 = (inst_51204 < inst_51203);
var inst_51207 = inst_51206;
var state_51261__$1 = state_51261;
if(cljs.core.truth_(inst_51207)){
var statearr_51309_51374 = state_51261__$1;
(statearr_51309_51374[(1)] = (27));

} else {
var statearr_51310_51375 = state_51261__$1;
(statearr_51310_51375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (34))){
var state_51261__$1 = state_51261;
var statearr_51311_51376 = state_51261__$1;
(statearr_51311_51376[(2)] = null);

(statearr_51311_51376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (17))){
var state_51261__$1 = state_51261;
var statearr_51312_51377 = state_51261__$1;
(statearr_51312_51377[(2)] = null);

(statearr_51312_51377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (3))){
var inst_51259 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51261__$1,inst_51259);
} else {
if((state_val_51262 === (12))){
var inst_51188 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51313_51378 = state_51261__$1;
(statearr_51313_51378[(2)] = inst_51188);

(statearr_51313_51378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (2))){
var state_51261__$1 = state_51261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51261__$1,(4),ch);
} else {
if((state_val_51262 === (23))){
var state_51261__$1 = state_51261;
var statearr_51314_51379 = state_51261__$1;
(statearr_51314_51379[(2)] = null);

(statearr_51314_51379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (35))){
var inst_51243 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51315_51380 = state_51261__$1;
(statearr_51315_51380[(2)] = inst_51243);

(statearr_51315_51380[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (19))){
var inst_51160 = (state_51261[(7)]);
var inst_51164 = cljs.core.chunk_first.call(null,inst_51160);
var inst_51165 = cljs.core.chunk_rest.call(null,inst_51160);
var inst_51166 = cljs.core.count.call(null,inst_51164);
var inst_51138 = inst_51165;
var inst_51139 = inst_51164;
var inst_51140 = inst_51166;
var inst_51141 = (0);
var state_51261__$1 = (function (){var statearr_51316 = state_51261;
(statearr_51316[(14)] = inst_51141);

(statearr_51316[(15)] = inst_51139);

(statearr_51316[(16)] = inst_51138);

(statearr_51316[(17)] = inst_51140);

return statearr_51316;
})();
var statearr_51317_51381 = state_51261__$1;
(statearr_51317_51381[(2)] = null);

(statearr_51317_51381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (11))){
var inst_51160 = (state_51261[(7)]);
var inst_51138 = (state_51261[(16)]);
var inst_51160__$1 = cljs.core.seq.call(null,inst_51138);
var state_51261__$1 = (function (){var statearr_51318 = state_51261;
(statearr_51318[(7)] = inst_51160__$1);

return statearr_51318;
})();
if(inst_51160__$1){
var statearr_51319_51382 = state_51261__$1;
(statearr_51319_51382[(1)] = (16));

} else {
var statearr_51320_51383 = state_51261__$1;
(statearr_51320_51383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (9))){
var inst_51190 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51321_51384 = state_51261__$1;
(statearr_51321_51384[(2)] = inst_51190);

(statearr_51321_51384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (5))){
var inst_51136 = cljs.core.deref.call(null,cs);
var inst_51137 = cljs.core.seq.call(null,inst_51136);
var inst_51138 = inst_51137;
var inst_51139 = null;
var inst_51140 = (0);
var inst_51141 = (0);
var state_51261__$1 = (function (){var statearr_51322 = state_51261;
(statearr_51322[(14)] = inst_51141);

(statearr_51322[(15)] = inst_51139);

(statearr_51322[(16)] = inst_51138);

(statearr_51322[(17)] = inst_51140);

return statearr_51322;
})();
var statearr_51323_51385 = state_51261__$1;
(statearr_51323_51385[(2)] = null);

(statearr_51323_51385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (14))){
var state_51261__$1 = state_51261;
var statearr_51324_51386 = state_51261__$1;
(statearr_51324_51386[(2)] = null);

(statearr_51324_51386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (45))){
var inst_51251 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51325_51387 = state_51261__$1;
(statearr_51325_51387[(2)] = inst_51251);

(statearr_51325_51387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (26))){
var inst_51193 = (state_51261[(29)]);
var inst_51247 = (state_51261[(2)]);
var inst_51248 = cljs.core.seq.call(null,inst_51193);
var state_51261__$1 = (function (){var statearr_51326 = state_51261;
(statearr_51326[(31)] = inst_51247);

return statearr_51326;
})();
if(inst_51248){
var statearr_51327_51388 = state_51261__$1;
(statearr_51327_51388[(1)] = (42));

} else {
var statearr_51328_51389 = state_51261__$1;
(statearr_51328_51389[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (16))){
var inst_51160 = (state_51261[(7)]);
var inst_51162 = cljs.core.chunked_seq_QMARK_.call(null,inst_51160);
var state_51261__$1 = state_51261;
if(inst_51162){
var statearr_51329_51390 = state_51261__$1;
(statearr_51329_51390[(1)] = (19));

} else {
var statearr_51330_51391 = state_51261__$1;
(statearr_51330_51391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (38))){
var inst_51240 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51331_51392 = state_51261__$1;
(statearr_51331_51392[(2)] = inst_51240);

(statearr_51331_51392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (30))){
var state_51261__$1 = state_51261;
var statearr_51332_51393 = state_51261__$1;
(statearr_51332_51393[(2)] = null);

(statearr_51332_51393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (10))){
var inst_51141 = (state_51261[(14)]);
var inst_51139 = (state_51261[(15)]);
var inst_51149 = cljs.core._nth.call(null,inst_51139,inst_51141);
var inst_51150 = cljs.core.nth.call(null,inst_51149,(0),null);
var inst_51151 = cljs.core.nth.call(null,inst_51149,(1),null);
var state_51261__$1 = (function (){var statearr_51333 = state_51261;
(statearr_51333[(26)] = inst_51150);

return statearr_51333;
})();
if(cljs.core.truth_(inst_51151)){
var statearr_51334_51394 = state_51261__$1;
(statearr_51334_51394[(1)] = (13));

} else {
var statearr_51335_51395 = state_51261__$1;
(statearr_51335_51395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (18))){
var inst_51186 = (state_51261[(2)]);
var state_51261__$1 = state_51261;
var statearr_51336_51396 = state_51261__$1;
(statearr_51336_51396[(2)] = inst_51186);

(statearr_51336_51396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (42))){
var state_51261__$1 = state_51261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51261__$1,(45),dchan);
} else {
if((state_val_51262 === (37))){
var inst_51220 = (state_51261[(25)]);
var inst_51129 = (state_51261[(11)]);
var inst_51229 = (state_51261[(23)]);
var inst_51229__$1 = cljs.core.first.call(null,inst_51220);
var inst_51230 = cljs.core.async.put_BANG_.call(null,inst_51229__$1,inst_51129,done);
var state_51261__$1 = (function (){var statearr_51337 = state_51261;
(statearr_51337[(23)] = inst_51229__$1);

return statearr_51337;
})();
if(cljs.core.truth_(inst_51230)){
var statearr_51338_51397 = state_51261__$1;
(statearr_51338_51397[(1)] = (39));

} else {
var statearr_51339_51398 = state_51261__$1;
(statearr_51339_51398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51262 === (8))){
var inst_51141 = (state_51261[(14)]);
var inst_51140 = (state_51261[(17)]);
var inst_51143 = (inst_51141 < inst_51140);
var inst_51144 = inst_51143;
var state_51261__$1 = state_51261;
if(cljs.core.truth_(inst_51144)){
var statearr_51340_51399 = state_51261__$1;
(statearr_51340_51399[(1)] = (10));

} else {
var statearr_51341_51400 = state_51261__$1;
(statearr_51341_51400[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___51346,cs,m,dchan,dctr,done))
;
return ((function (switch__50453__auto__,c__50541__auto___51346,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50454__auto__ = null;
var cljs$core$async$mult_$_state_machine__50454__auto____0 = (function (){
var statearr_51342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51342[(0)] = cljs$core$async$mult_$_state_machine__50454__auto__);

(statearr_51342[(1)] = (1));

return statearr_51342;
});
var cljs$core$async$mult_$_state_machine__50454__auto____1 = (function (state_51261){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51343){if((e51343 instanceof Object)){
var ex__50457__auto__ = e51343;
var statearr_51344_51401 = state_51261;
(statearr_51344_51401[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51402 = state_51261;
state_51261 = G__51402;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50454__auto__ = function(state_51261){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50454__auto____1.call(this,state_51261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50454__auto____0;
cljs$core$async$mult_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50454__auto____1;
return cljs$core$async$mult_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___51346,cs,m,dchan,dctr,done))
})();
var state__50543__auto__ = (function (){var statearr_51345 = f__50542__auto__.call(null);
(statearr_51345[(6)] = c__50541__auto___51346);

return statearr_51345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___51346,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51404 = arguments.length;
switch (G__51404) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m,ch);
} else {
var m__47872__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m,ch);
} else {
var m__47872__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m);
} else {
var m__47872__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m,state_map);
} else {
var m__47872__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__47871__auto__ = (((m == null))?null:m);
var m__47872__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,m,mode);
} else {
var m__47872__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__48366__auto__ = [];
var len__48359__auto___51416 = arguments.length;
var i__48360__auto___51417 = (0);
while(true){
if((i__48360__auto___51417 < len__48359__auto___51416)){
args__48366__auto__.push((arguments[i__48360__auto___51417]));

var G__51418 = (i__48360__auto___51417 + (1));
i__48360__auto___51417 = G__51418;
continue;
} else {
}
break;
}

var argseq__48367__auto__ = ((((3) < args__48366__auto__.length))?(new cljs.core.IndexedSeq(args__48366__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48367__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51410){
var map__51411 = p__51410;
var map__51411__$1 = ((((!((map__51411 == null)))?((((map__51411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51411):map__51411);
var opts = map__51411__$1;
var statearr_51413_51419 = state;
(statearr_51413_51419[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__51411,map__51411__$1,opts){
return (function (val){
var statearr_51414_51420 = state;
(statearr_51414_51420[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51411,map__51411__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_51415_51421 = state;
(statearr_51415_51421[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51406){
var G__51407 = cljs.core.first.call(null,seq51406);
var seq51406__$1 = cljs.core.next.call(null,seq51406);
var G__51408 = cljs.core.first.call(null,seq51406__$1);
var seq51406__$2 = cljs.core.next.call(null,seq51406__$1);
var G__51409 = cljs.core.first.call(null,seq51406__$2);
var seq51406__$3 = cljs.core.next.call(null,seq51406__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51407,G__51408,G__51409,seq51406__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async51422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51422 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta51423){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta51423 = meta51423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51424,meta51423__$1){
var self__ = this;
var _51424__$1 = this;
return (new cljs.core.async.t_cljs$core$async51422(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta51423__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51424){
var self__ = this;
var _51424__$1 = this;
return self__.meta51423;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta51423","meta51423",1396320857,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51422.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51422.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51422";

cljs.core.async.t_cljs$core$async51422.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async51422");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51422 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51422(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51423){
return (new cljs.core.async.t_cljs$core$async51422(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta51423));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51422(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50541__auto___51586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___51586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___51586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51526){
var state_val_51527 = (state_51526[(1)]);
if((state_val_51527 === (7))){
var inst_51441 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
var statearr_51528_51587 = state_51526__$1;
(statearr_51528_51587[(2)] = inst_51441);

(statearr_51528_51587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (20))){
var inst_51453 = (state_51526[(7)]);
var state_51526__$1 = state_51526;
var statearr_51529_51588 = state_51526__$1;
(statearr_51529_51588[(2)] = inst_51453);

(statearr_51529_51588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (27))){
var state_51526__$1 = state_51526;
var statearr_51530_51589 = state_51526__$1;
(statearr_51530_51589[(2)] = null);

(statearr_51530_51589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (1))){
var inst_51428 = (state_51526[(8)]);
var inst_51428__$1 = calc_state.call(null);
var inst_51430 = (inst_51428__$1 == null);
var inst_51431 = cljs.core.not.call(null,inst_51430);
var state_51526__$1 = (function (){var statearr_51531 = state_51526;
(statearr_51531[(8)] = inst_51428__$1);

return statearr_51531;
})();
if(inst_51431){
var statearr_51532_51590 = state_51526__$1;
(statearr_51532_51590[(1)] = (2));

} else {
var statearr_51533_51591 = state_51526__$1;
(statearr_51533_51591[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (24))){
var inst_51500 = (state_51526[(9)]);
var inst_51486 = (state_51526[(10)]);
var inst_51477 = (state_51526[(11)]);
var inst_51500__$1 = inst_51477.call(null,inst_51486);
var state_51526__$1 = (function (){var statearr_51534 = state_51526;
(statearr_51534[(9)] = inst_51500__$1);

return statearr_51534;
})();
if(cljs.core.truth_(inst_51500__$1)){
var statearr_51535_51592 = state_51526__$1;
(statearr_51535_51592[(1)] = (29));

} else {
var statearr_51536_51593 = state_51526__$1;
(statearr_51536_51593[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (4))){
var inst_51444 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51444)){
var statearr_51537_51594 = state_51526__$1;
(statearr_51537_51594[(1)] = (8));

} else {
var statearr_51538_51595 = state_51526__$1;
(statearr_51538_51595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (15))){
var inst_51471 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51471)){
var statearr_51539_51596 = state_51526__$1;
(statearr_51539_51596[(1)] = (19));

} else {
var statearr_51540_51597 = state_51526__$1;
(statearr_51540_51597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (21))){
var inst_51476 = (state_51526[(12)]);
var inst_51476__$1 = (state_51526[(2)]);
var inst_51477 = cljs.core.get.call(null,inst_51476__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51478 = cljs.core.get.call(null,inst_51476__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51479 = cljs.core.get.call(null,inst_51476__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51526__$1 = (function (){var statearr_51541 = state_51526;
(statearr_51541[(12)] = inst_51476__$1);

(statearr_51541[(11)] = inst_51477);

(statearr_51541[(13)] = inst_51478);

return statearr_51541;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51526__$1,(22),inst_51479);
} else {
if((state_val_51527 === (31))){
var inst_51508 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51508)){
var statearr_51542_51598 = state_51526__$1;
(statearr_51542_51598[(1)] = (32));

} else {
var statearr_51543_51599 = state_51526__$1;
(statearr_51543_51599[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (32))){
var inst_51485 = (state_51526[(14)]);
var state_51526__$1 = state_51526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51526__$1,(35),out,inst_51485);
} else {
if((state_val_51527 === (33))){
var inst_51476 = (state_51526[(12)]);
var inst_51453 = inst_51476;
var state_51526__$1 = (function (){var statearr_51544 = state_51526;
(statearr_51544[(7)] = inst_51453);

return statearr_51544;
})();
var statearr_51545_51600 = state_51526__$1;
(statearr_51545_51600[(2)] = null);

(statearr_51545_51600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (13))){
var inst_51453 = (state_51526[(7)]);
var inst_51460 = inst_51453.cljs$lang$protocol_mask$partition0$;
var inst_51461 = (inst_51460 & (64));
var inst_51462 = inst_51453.cljs$core$ISeq$;
var inst_51463 = (cljs.core.PROTOCOL_SENTINEL === inst_51462);
var inst_51464 = (inst_51461) || (inst_51463);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51464)){
var statearr_51546_51601 = state_51526__$1;
(statearr_51546_51601[(1)] = (16));

} else {
var statearr_51547_51602 = state_51526__$1;
(statearr_51547_51602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (22))){
var inst_51486 = (state_51526[(10)]);
var inst_51485 = (state_51526[(14)]);
var inst_51484 = (state_51526[(2)]);
var inst_51485__$1 = cljs.core.nth.call(null,inst_51484,(0),null);
var inst_51486__$1 = cljs.core.nth.call(null,inst_51484,(1),null);
var inst_51487 = (inst_51485__$1 == null);
var inst_51488 = cljs.core._EQ_.call(null,inst_51486__$1,change);
var inst_51489 = (inst_51487) || (inst_51488);
var state_51526__$1 = (function (){var statearr_51548 = state_51526;
(statearr_51548[(10)] = inst_51486__$1);

(statearr_51548[(14)] = inst_51485__$1);

return statearr_51548;
})();
if(cljs.core.truth_(inst_51489)){
var statearr_51549_51603 = state_51526__$1;
(statearr_51549_51603[(1)] = (23));

} else {
var statearr_51550_51604 = state_51526__$1;
(statearr_51550_51604[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (36))){
var inst_51476 = (state_51526[(12)]);
var inst_51453 = inst_51476;
var state_51526__$1 = (function (){var statearr_51551 = state_51526;
(statearr_51551[(7)] = inst_51453);

return statearr_51551;
})();
var statearr_51552_51605 = state_51526__$1;
(statearr_51552_51605[(2)] = null);

(statearr_51552_51605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (29))){
var inst_51500 = (state_51526[(9)]);
var state_51526__$1 = state_51526;
var statearr_51553_51606 = state_51526__$1;
(statearr_51553_51606[(2)] = inst_51500);

(statearr_51553_51606[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (6))){
var state_51526__$1 = state_51526;
var statearr_51554_51607 = state_51526__$1;
(statearr_51554_51607[(2)] = false);

(statearr_51554_51607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (28))){
var inst_51496 = (state_51526[(2)]);
var inst_51497 = calc_state.call(null);
var inst_51453 = inst_51497;
var state_51526__$1 = (function (){var statearr_51555 = state_51526;
(statearr_51555[(7)] = inst_51453);

(statearr_51555[(15)] = inst_51496);

return statearr_51555;
})();
var statearr_51556_51608 = state_51526__$1;
(statearr_51556_51608[(2)] = null);

(statearr_51556_51608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (25))){
var inst_51522 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
var statearr_51557_51609 = state_51526__$1;
(statearr_51557_51609[(2)] = inst_51522);

(statearr_51557_51609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (34))){
var inst_51520 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
var statearr_51558_51610 = state_51526__$1;
(statearr_51558_51610[(2)] = inst_51520);

(statearr_51558_51610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (17))){
var state_51526__$1 = state_51526;
var statearr_51559_51611 = state_51526__$1;
(statearr_51559_51611[(2)] = false);

(statearr_51559_51611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (3))){
var state_51526__$1 = state_51526;
var statearr_51560_51612 = state_51526__$1;
(statearr_51560_51612[(2)] = false);

(statearr_51560_51612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (12))){
var inst_51524 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51526__$1,inst_51524);
} else {
if((state_val_51527 === (2))){
var inst_51428 = (state_51526[(8)]);
var inst_51433 = inst_51428.cljs$lang$protocol_mask$partition0$;
var inst_51434 = (inst_51433 & (64));
var inst_51435 = inst_51428.cljs$core$ISeq$;
var inst_51436 = (cljs.core.PROTOCOL_SENTINEL === inst_51435);
var inst_51437 = (inst_51434) || (inst_51436);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51437)){
var statearr_51561_51613 = state_51526__$1;
(statearr_51561_51613[(1)] = (5));

} else {
var statearr_51562_51614 = state_51526__$1;
(statearr_51562_51614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (23))){
var inst_51485 = (state_51526[(14)]);
var inst_51491 = (inst_51485 == null);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51491)){
var statearr_51563_51615 = state_51526__$1;
(statearr_51563_51615[(1)] = (26));

} else {
var statearr_51564_51616 = state_51526__$1;
(statearr_51564_51616[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (35))){
var inst_51511 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
if(cljs.core.truth_(inst_51511)){
var statearr_51565_51617 = state_51526__$1;
(statearr_51565_51617[(1)] = (36));

} else {
var statearr_51566_51618 = state_51526__$1;
(statearr_51566_51618[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (19))){
var inst_51453 = (state_51526[(7)]);
var inst_51473 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51453);
var state_51526__$1 = state_51526;
var statearr_51567_51619 = state_51526__$1;
(statearr_51567_51619[(2)] = inst_51473);

(statearr_51567_51619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (11))){
var inst_51453 = (state_51526[(7)]);
var inst_51457 = (inst_51453 == null);
var inst_51458 = cljs.core.not.call(null,inst_51457);
var state_51526__$1 = state_51526;
if(inst_51458){
var statearr_51568_51620 = state_51526__$1;
(statearr_51568_51620[(1)] = (13));

} else {
var statearr_51569_51621 = state_51526__$1;
(statearr_51569_51621[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (9))){
var inst_51428 = (state_51526[(8)]);
var state_51526__$1 = state_51526;
var statearr_51570_51622 = state_51526__$1;
(statearr_51570_51622[(2)] = inst_51428);

(statearr_51570_51622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (5))){
var state_51526__$1 = state_51526;
var statearr_51571_51623 = state_51526__$1;
(statearr_51571_51623[(2)] = true);

(statearr_51571_51623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (14))){
var state_51526__$1 = state_51526;
var statearr_51572_51624 = state_51526__$1;
(statearr_51572_51624[(2)] = false);

(statearr_51572_51624[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (26))){
var inst_51486 = (state_51526[(10)]);
var inst_51493 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51486);
var state_51526__$1 = state_51526;
var statearr_51573_51625 = state_51526__$1;
(statearr_51573_51625[(2)] = inst_51493);

(statearr_51573_51625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (16))){
var state_51526__$1 = state_51526;
var statearr_51574_51626 = state_51526__$1;
(statearr_51574_51626[(2)] = true);

(statearr_51574_51626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (38))){
var inst_51516 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
var statearr_51575_51627 = state_51526__$1;
(statearr_51575_51627[(2)] = inst_51516);

(statearr_51575_51627[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (30))){
var inst_51486 = (state_51526[(10)]);
var inst_51477 = (state_51526[(11)]);
var inst_51478 = (state_51526[(13)]);
var inst_51503 = cljs.core.empty_QMARK_.call(null,inst_51477);
var inst_51504 = inst_51478.call(null,inst_51486);
var inst_51505 = cljs.core.not.call(null,inst_51504);
var inst_51506 = (inst_51503) && (inst_51505);
var state_51526__$1 = state_51526;
var statearr_51576_51628 = state_51526__$1;
(statearr_51576_51628[(2)] = inst_51506);

(statearr_51576_51628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (10))){
var inst_51428 = (state_51526[(8)]);
var inst_51449 = (state_51526[(2)]);
var inst_51450 = cljs.core.get.call(null,inst_51449,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51451 = cljs.core.get.call(null,inst_51449,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51452 = cljs.core.get.call(null,inst_51449,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51453 = inst_51428;
var state_51526__$1 = (function (){var statearr_51577 = state_51526;
(statearr_51577[(7)] = inst_51453);

(statearr_51577[(16)] = inst_51450);

(statearr_51577[(17)] = inst_51452);

(statearr_51577[(18)] = inst_51451);

return statearr_51577;
})();
var statearr_51578_51629 = state_51526__$1;
(statearr_51578_51629[(2)] = null);

(statearr_51578_51629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (18))){
var inst_51468 = (state_51526[(2)]);
var state_51526__$1 = state_51526;
var statearr_51579_51630 = state_51526__$1;
(statearr_51579_51630[(2)] = inst_51468);

(statearr_51579_51630[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (37))){
var state_51526__$1 = state_51526;
var statearr_51580_51631 = state_51526__$1;
(statearr_51580_51631[(2)] = null);

(statearr_51580_51631[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51527 === (8))){
var inst_51428 = (state_51526[(8)]);
var inst_51446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51428);
var state_51526__$1 = state_51526;
var statearr_51581_51632 = state_51526__$1;
(statearr_51581_51632[(2)] = inst_51446);

(statearr_51581_51632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___51586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50453__auto__,c__50541__auto___51586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50454__auto__ = null;
var cljs$core$async$mix_$_state_machine__50454__auto____0 = (function (){
var statearr_51582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51582[(0)] = cljs$core$async$mix_$_state_machine__50454__auto__);

(statearr_51582[(1)] = (1));

return statearr_51582;
});
var cljs$core$async$mix_$_state_machine__50454__auto____1 = (function (state_51526){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51583){if((e51583 instanceof Object)){
var ex__50457__auto__ = e51583;
var statearr_51584_51633 = state_51526;
(statearr_51584_51633[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51634 = state_51526;
state_51526 = G__51634;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50454__auto__ = function(state_51526){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50454__auto____1.call(this,state_51526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50454__auto____0;
cljs$core$async$mix_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50454__auto____1;
return cljs$core$async$mix_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___51586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__50543__auto__ = (function (){var statearr_51585 = f__50542__auto__.call(null);
(statearr_51585[(6)] = c__50541__auto___51586);

return statearr_51585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___51586,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__47871__auto__ = (((p == null))?null:p);
var m__47872__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__47872__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__47871__auto__ = (((p == null))?null:p);
var m__47872__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,p,v,ch);
} else {
var m__47872__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51636 = arguments.length;
switch (G__51636) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__47871__auto__ = (((p == null))?null:p);
var m__47872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,p);
} else {
var m__47872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__47871__auto__ = (((p == null))?null:p);
var m__47872__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__47871__auto__)]);
if(!((m__47872__auto__ == null))){
return m__47872__auto__.call(null,p,v);
} else {
var m__47872__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__47872__auto____$1 == null))){
return m__47872__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51640 = arguments.length;
switch (G__51640) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__47188__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__47188__auto__,mults){
return (function (p1__51638_SHARP_){
if(cljs.core.truth_(p1__51638_SHARP_.call(null,topic))){
return p1__51638_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51638_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__47188__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51641 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51642){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51642 = meta51642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51643,meta51642__$1){
var self__ = this;
var _51643__$1 = this;
return (new cljs.core.async.t_cljs$core$async51641(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51642__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51643){
var self__ = this;
var _51643__$1 = this;
return self__.meta51642;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51642","meta51642",-2118740142,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51641";

cljs.core.async.t_cljs$core$async51641.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async51641");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async51641 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51642){
return (new cljs.core.async.t_cljs$core$async51641(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51642));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51641(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50541__auto___51761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___51761,mults,ensure_mult,p){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___51761,mults,ensure_mult,p){
return (function (state_51715){
var state_val_51716 = (state_51715[(1)]);
if((state_val_51716 === (7))){
var inst_51711 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51717_51762 = state_51715__$1;
(statearr_51717_51762[(2)] = inst_51711);

(statearr_51717_51762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (20))){
var state_51715__$1 = state_51715;
var statearr_51718_51763 = state_51715__$1;
(statearr_51718_51763[(2)] = null);

(statearr_51718_51763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (1))){
var state_51715__$1 = state_51715;
var statearr_51719_51764 = state_51715__$1;
(statearr_51719_51764[(2)] = null);

(statearr_51719_51764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (24))){
var inst_51694 = (state_51715[(7)]);
var inst_51703 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51694);
var state_51715__$1 = state_51715;
var statearr_51720_51765 = state_51715__$1;
(statearr_51720_51765[(2)] = inst_51703);

(statearr_51720_51765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (4))){
var inst_51646 = (state_51715[(8)]);
var inst_51646__$1 = (state_51715[(2)]);
var inst_51647 = (inst_51646__$1 == null);
var state_51715__$1 = (function (){var statearr_51721 = state_51715;
(statearr_51721[(8)] = inst_51646__$1);

return statearr_51721;
})();
if(cljs.core.truth_(inst_51647)){
var statearr_51722_51766 = state_51715__$1;
(statearr_51722_51766[(1)] = (5));

} else {
var statearr_51723_51767 = state_51715__$1;
(statearr_51723_51767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (15))){
var inst_51688 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51724_51768 = state_51715__$1;
(statearr_51724_51768[(2)] = inst_51688);

(statearr_51724_51768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (21))){
var inst_51708 = (state_51715[(2)]);
var state_51715__$1 = (function (){var statearr_51725 = state_51715;
(statearr_51725[(9)] = inst_51708);

return statearr_51725;
})();
var statearr_51726_51769 = state_51715__$1;
(statearr_51726_51769[(2)] = null);

(statearr_51726_51769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (13))){
var inst_51670 = (state_51715[(10)]);
var inst_51672 = cljs.core.chunked_seq_QMARK_.call(null,inst_51670);
var state_51715__$1 = state_51715;
if(inst_51672){
var statearr_51727_51770 = state_51715__$1;
(statearr_51727_51770[(1)] = (16));

} else {
var statearr_51728_51771 = state_51715__$1;
(statearr_51728_51771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (22))){
var inst_51700 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
if(cljs.core.truth_(inst_51700)){
var statearr_51729_51772 = state_51715__$1;
(statearr_51729_51772[(1)] = (23));

} else {
var statearr_51730_51773 = state_51715__$1;
(statearr_51730_51773[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (6))){
var inst_51696 = (state_51715[(11)]);
var inst_51646 = (state_51715[(8)]);
var inst_51694 = (state_51715[(7)]);
var inst_51694__$1 = topic_fn.call(null,inst_51646);
var inst_51695 = cljs.core.deref.call(null,mults);
var inst_51696__$1 = cljs.core.get.call(null,inst_51695,inst_51694__$1);
var state_51715__$1 = (function (){var statearr_51731 = state_51715;
(statearr_51731[(11)] = inst_51696__$1);

(statearr_51731[(7)] = inst_51694__$1);

return statearr_51731;
})();
if(cljs.core.truth_(inst_51696__$1)){
var statearr_51732_51774 = state_51715__$1;
(statearr_51732_51774[(1)] = (19));

} else {
var statearr_51733_51775 = state_51715__$1;
(statearr_51733_51775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (25))){
var inst_51705 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51734_51776 = state_51715__$1;
(statearr_51734_51776[(2)] = inst_51705);

(statearr_51734_51776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (17))){
var inst_51670 = (state_51715[(10)]);
var inst_51679 = cljs.core.first.call(null,inst_51670);
var inst_51680 = cljs.core.async.muxch_STAR_.call(null,inst_51679);
var inst_51681 = cljs.core.async.close_BANG_.call(null,inst_51680);
var inst_51682 = cljs.core.next.call(null,inst_51670);
var inst_51656 = inst_51682;
var inst_51657 = null;
var inst_51658 = (0);
var inst_51659 = (0);
var state_51715__$1 = (function (){var statearr_51735 = state_51715;
(statearr_51735[(12)] = inst_51658);

(statearr_51735[(13)] = inst_51681);

(statearr_51735[(14)] = inst_51656);

(statearr_51735[(15)] = inst_51659);

(statearr_51735[(16)] = inst_51657);

return statearr_51735;
})();
var statearr_51736_51777 = state_51715__$1;
(statearr_51736_51777[(2)] = null);

(statearr_51736_51777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (3))){
var inst_51713 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51715__$1,inst_51713);
} else {
if((state_val_51716 === (12))){
var inst_51690 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51737_51778 = state_51715__$1;
(statearr_51737_51778[(2)] = inst_51690);

(statearr_51737_51778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (2))){
var state_51715__$1 = state_51715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51715__$1,(4),ch);
} else {
if((state_val_51716 === (23))){
var state_51715__$1 = state_51715;
var statearr_51738_51779 = state_51715__$1;
(statearr_51738_51779[(2)] = null);

(statearr_51738_51779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (19))){
var inst_51696 = (state_51715[(11)]);
var inst_51646 = (state_51715[(8)]);
var inst_51698 = cljs.core.async.muxch_STAR_.call(null,inst_51696);
var state_51715__$1 = state_51715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51715__$1,(22),inst_51698,inst_51646);
} else {
if((state_val_51716 === (11))){
var inst_51670 = (state_51715[(10)]);
var inst_51656 = (state_51715[(14)]);
var inst_51670__$1 = cljs.core.seq.call(null,inst_51656);
var state_51715__$1 = (function (){var statearr_51739 = state_51715;
(statearr_51739[(10)] = inst_51670__$1);

return statearr_51739;
})();
if(inst_51670__$1){
var statearr_51740_51780 = state_51715__$1;
(statearr_51740_51780[(1)] = (13));

} else {
var statearr_51741_51781 = state_51715__$1;
(statearr_51741_51781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (9))){
var inst_51692 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51742_51782 = state_51715__$1;
(statearr_51742_51782[(2)] = inst_51692);

(statearr_51742_51782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (5))){
var inst_51653 = cljs.core.deref.call(null,mults);
var inst_51654 = cljs.core.vals.call(null,inst_51653);
var inst_51655 = cljs.core.seq.call(null,inst_51654);
var inst_51656 = inst_51655;
var inst_51657 = null;
var inst_51658 = (0);
var inst_51659 = (0);
var state_51715__$1 = (function (){var statearr_51743 = state_51715;
(statearr_51743[(12)] = inst_51658);

(statearr_51743[(14)] = inst_51656);

(statearr_51743[(15)] = inst_51659);

(statearr_51743[(16)] = inst_51657);

return statearr_51743;
})();
var statearr_51744_51783 = state_51715__$1;
(statearr_51744_51783[(2)] = null);

(statearr_51744_51783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (14))){
var state_51715__$1 = state_51715;
var statearr_51748_51784 = state_51715__$1;
(statearr_51748_51784[(2)] = null);

(statearr_51748_51784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (16))){
var inst_51670 = (state_51715[(10)]);
var inst_51674 = cljs.core.chunk_first.call(null,inst_51670);
var inst_51675 = cljs.core.chunk_rest.call(null,inst_51670);
var inst_51676 = cljs.core.count.call(null,inst_51674);
var inst_51656 = inst_51675;
var inst_51657 = inst_51674;
var inst_51658 = inst_51676;
var inst_51659 = (0);
var state_51715__$1 = (function (){var statearr_51749 = state_51715;
(statearr_51749[(12)] = inst_51658);

(statearr_51749[(14)] = inst_51656);

(statearr_51749[(15)] = inst_51659);

(statearr_51749[(16)] = inst_51657);

return statearr_51749;
})();
var statearr_51750_51785 = state_51715__$1;
(statearr_51750_51785[(2)] = null);

(statearr_51750_51785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (10))){
var inst_51658 = (state_51715[(12)]);
var inst_51656 = (state_51715[(14)]);
var inst_51659 = (state_51715[(15)]);
var inst_51657 = (state_51715[(16)]);
var inst_51664 = cljs.core._nth.call(null,inst_51657,inst_51659);
var inst_51665 = cljs.core.async.muxch_STAR_.call(null,inst_51664);
var inst_51666 = cljs.core.async.close_BANG_.call(null,inst_51665);
var inst_51667 = (inst_51659 + (1));
var tmp51745 = inst_51658;
var tmp51746 = inst_51656;
var tmp51747 = inst_51657;
var inst_51656__$1 = tmp51746;
var inst_51657__$1 = tmp51747;
var inst_51658__$1 = tmp51745;
var inst_51659__$1 = inst_51667;
var state_51715__$1 = (function (){var statearr_51751 = state_51715;
(statearr_51751[(12)] = inst_51658__$1);

(statearr_51751[(17)] = inst_51666);

(statearr_51751[(14)] = inst_51656__$1);

(statearr_51751[(15)] = inst_51659__$1);

(statearr_51751[(16)] = inst_51657__$1);

return statearr_51751;
})();
var statearr_51752_51786 = state_51715__$1;
(statearr_51752_51786[(2)] = null);

(statearr_51752_51786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (18))){
var inst_51685 = (state_51715[(2)]);
var state_51715__$1 = state_51715;
var statearr_51753_51787 = state_51715__$1;
(statearr_51753_51787[(2)] = inst_51685);

(statearr_51753_51787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51716 === (8))){
var inst_51658 = (state_51715[(12)]);
var inst_51659 = (state_51715[(15)]);
var inst_51661 = (inst_51659 < inst_51658);
var inst_51662 = inst_51661;
var state_51715__$1 = state_51715;
if(cljs.core.truth_(inst_51662)){
var statearr_51754_51788 = state_51715__$1;
(statearr_51754_51788[(1)] = (10));

} else {
var statearr_51755_51789 = state_51715__$1;
(statearr_51755_51789[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___51761,mults,ensure_mult,p))
;
return ((function (switch__50453__auto__,c__50541__auto___51761,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_51756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51756[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_51756[(1)] = (1));

return statearr_51756;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_51715){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51757){if((e51757 instanceof Object)){
var ex__50457__auto__ = e51757;
var statearr_51758_51790 = state_51715;
(statearr_51758_51790[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51791 = state_51715;
state_51715 = G__51791;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_51715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_51715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___51761,mults,ensure_mult,p))
})();
var state__50543__auto__ = (function (){var statearr_51759 = f__50542__auto__.call(null);
(statearr_51759[(6)] = c__50541__auto___51761);

return statearr_51759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___51761,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51793 = arguments.length;
switch (G__51793) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51796 = arguments.length;
switch (G__51796) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51799 = arguments.length;
switch (G__51799) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__50541__auto___51866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___51866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___51866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51838){
var state_val_51839 = (state_51838[(1)]);
if((state_val_51839 === (7))){
var state_51838__$1 = state_51838;
var statearr_51840_51867 = state_51838__$1;
(statearr_51840_51867[(2)] = null);

(statearr_51840_51867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (1))){
var state_51838__$1 = state_51838;
var statearr_51841_51868 = state_51838__$1;
(statearr_51841_51868[(2)] = null);

(statearr_51841_51868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (4))){
var inst_51802 = (state_51838[(7)]);
var inst_51804 = (inst_51802 < cnt);
var state_51838__$1 = state_51838;
if(cljs.core.truth_(inst_51804)){
var statearr_51842_51869 = state_51838__$1;
(statearr_51842_51869[(1)] = (6));

} else {
var statearr_51843_51870 = state_51838__$1;
(statearr_51843_51870[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (15))){
var inst_51834 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
var statearr_51844_51871 = state_51838__$1;
(statearr_51844_51871[(2)] = inst_51834);

(statearr_51844_51871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (13))){
var inst_51827 = cljs.core.async.close_BANG_.call(null,out);
var state_51838__$1 = state_51838;
var statearr_51845_51872 = state_51838__$1;
(statearr_51845_51872[(2)] = inst_51827);

(statearr_51845_51872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (6))){
var state_51838__$1 = state_51838;
var statearr_51846_51873 = state_51838__$1;
(statearr_51846_51873[(2)] = null);

(statearr_51846_51873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (3))){
var inst_51836 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51838__$1,inst_51836);
} else {
if((state_val_51839 === (12))){
var inst_51824 = (state_51838[(8)]);
var inst_51824__$1 = (state_51838[(2)]);
var inst_51825 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51824__$1);
var state_51838__$1 = (function (){var statearr_51847 = state_51838;
(statearr_51847[(8)] = inst_51824__$1);

return statearr_51847;
})();
if(cljs.core.truth_(inst_51825)){
var statearr_51848_51874 = state_51838__$1;
(statearr_51848_51874[(1)] = (13));

} else {
var statearr_51849_51875 = state_51838__$1;
(statearr_51849_51875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (2))){
var inst_51801 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51802 = (0);
var state_51838__$1 = (function (){var statearr_51850 = state_51838;
(statearr_51850[(7)] = inst_51802);

(statearr_51850[(9)] = inst_51801);

return statearr_51850;
})();
var statearr_51851_51876 = state_51838__$1;
(statearr_51851_51876[(2)] = null);

(statearr_51851_51876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (11))){
var inst_51802 = (state_51838[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51838,(10),Object,null,(9));
var inst_51811 = chs__$1.call(null,inst_51802);
var inst_51812 = done.call(null,inst_51802);
var inst_51813 = cljs.core.async.take_BANG_.call(null,inst_51811,inst_51812);
var state_51838__$1 = state_51838;
var statearr_51852_51877 = state_51838__$1;
(statearr_51852_51877[(2)] = inst_51813);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (9))){
var inst_51802 = (state_51838[(7)]);
var inst_51815 = (state_51838[(2)]);
var inst_51816 = (inst_51802 + (1));
var inst_51802__$1 = inst_51816;
var state_51838__$1 = (function (){var statearr_51853 = state_51838;
(statearr_51853[(7)] = inst_51802__$1);

(statearr_51853[(10)] = inst_51815);

return statearr_51853;
})();
var statearr_51854_51878 = state_51838__$1;
(statearr_51854_51878[(2)] = null);

(statearr_51854_51878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (5))){
var inst_51822 = (state_51838[(2)]);
var state_51838__$1 = (function (){var statearr_51855 = state_51838;
(statearr_51855[(11)] = inst_51822);

return statearr_51855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51838__$1,(12),dchan);
} else {
if((state_val_51839 === (14))){
var inst_51824 = (state_51838[(8)]);
var inst_51829 = cljs.core.apply.call(null,f,inst_51824);
var state_51838__$1 = state_51838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51838__$1,(16),out,inst_51829);
} else {
if((state_val_51839 === (16))){
var inst_51831 = (state_51838[(2)]);
var state_51838__$1 = (function (){var statearr_51856 = state_51838;
(statearr_51856[(12)] = inst_51831);

return statearr_51856;
})();
var statearr_51857_51879 = state_51838__$1;
(statearr_51857_51879[(2)] = null);

(statearr_51857_51879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (10))){
var inst_51806 = (state_51838[(2)]);
var inst_51807 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51838__$1 = (function (){var statearr_51858 = state_51838;
(statearr_51858[(13)] = inst_51806);

return statearr_51858;
})();
var statearr_51859_51880 = state_51838__$1;
(statearr_51859_51880[(2)] = inst_51807);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51838__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51839 === (8))){
var inst_51820 = (state_51838[(2)]);
var state_51838__$1 = state_51838;
var statearr_51860_51881 = state_51838__$1;
(statearr_51860_51881[(2)] = inst_51820);

(statearr_51860_51881[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___51866,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50453__auto__,c__50541__auto___51866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_51861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51861[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_51861[(1)] = (1));

return statearr_51861;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_51838){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51862){if((e51862 instanceof Object)){
var ex__50457__auto__ = e51862;
var statearr_51863_51882 = state_51838;
(statearr_51863_51882[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51883 = state_51838;
state_51838 = G__51883;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_51838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_51838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___51866,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__50543__auto__ = (function (){var statearr_51864 = f__50542__auto__.call(null);
(statearr_51864[(6)] = c__50541__auto___51866);

return statearr_51864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___51866,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51886 = arguments.length;
switch (G__51886) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50541__auto___51940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___51940,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___51940,out){
return (function (state_51918){
var state_val_51919 = (state_51918[(1)]);
if((state_val_51919 === (7))){
var inst_51897 = (state_51918[(7)]);
var inst_51898 = (state_51918[(8)]);
var inst_51897__$1 = (state_51918[(2)]);
var inst_51898__$1 = cljs.core.nth.call(null,inst_51897__$1,(0),null);
var inst_51899 = cljs.core.nth.call(null,inst_51897__$1,(1),null);
var inst_51900 = (inst_51898__$1 == null);
var state_51918__$1 = (function (){var statearr_51920 = state_51918;
(statearr_51920[(7)] = inst_51897__$1);

(statearr_51920[(8)] = inst_51898__$1);

(statearr_51920[(9)] = inst_51899);

return statearr_51920;
})();
if(cljs.core.truth_(inst_51900)){
var statearr_51921_51941 = state_51918__$1;
(statearr_51921_51941[(1)] = (8));

} else {
var statearr_51922_51942 = state_51918__$1;
(statearr_51922_51942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (1))){
var inst_51887 = cljs.core.vec.call(null,chs);
var inst_51888 = inst_51887;
var state_51918__$1 = (function (){var statearr_51923 = state_51918;
(statearr_51923[(10)] = inst_51888);

return statearr_51923;
})();
var statearr_51924_51943 = state_51918__$1;
(statearr_51924_51943[(2)] = null);

(statearr_51924_51943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (4))){
var inst_51888 = (state_51918[(10)]);
var state_51918__$1 = state_51918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51918__$1,(7),inst_51888);
} else {
if((state_val_51919 === (6))){
var inst_51914 = (state_51918[(2)]);
var state_51918__$1 = state_51918;
var statearr_51925_51944 = state_51918__$1;
(statearr_51925_51944[(2)] = inst_51914);

(statearr_51925_51944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (3))){
var inst_51916 = (state_51918[(2)]);
var state_51918__$1 = state_51918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51918__$1,inst_51916);
} else {
if((state_val_51919 === (2))){
var inst_51888 = (state_51918[(10)]);
var inst_51890 = cljs.core.count.call(null,inst_51888);
var inst_51891 = (inst_51890 > (0));
var state_51918__$1 = state_51918;
if(cljs.core.truth_(inst_51891)){
var statearr_51927_51945 = state_51918__$1;
(statearr_51927_51945[(1)] = (4));

} else {
var statearr_51928_51946 = state_51918__$1;
(statearr_51928_51946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (11))){
var inst_51888 = (state_51918[(10)]);
var inst_51907 = (state_51918[(2)]);
var tmp51926 = inst_51888;
var inst_51888__$1 = tmp51926;
var state_51918__$1 = (function (){var statearr_51929 = state_51918;
(statearr_51929[(10)] = inst_51888__$1);

(statearr_51929[(11)] = inst_51907);

return statearr_51929;
})();
var statearr_51930_51947 = state_51918__$1;
(statearr_51930_51947[(2)] = null);

(statearr_51930_51947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (9))){
var inst_51898 = (state_51918[(8)]);
var state_51918__$1 = state_51918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51918__$1,(11),out,inst_51898);
} else {
if((state_val_51919 === (5))){
var inst_51912 = cljs.core.async.close_BANG_.call(null,out);
var state_51918__$1 = state_51918;
var statearr_51931_51948 = state_51918__$1;
(statearr_51931_51948[(2)] = inst_51912);

(statearr_51931_51948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (10))){
var inst_51910 = (state_51918[(2)]);
var state_51918__$1 = state_51918;
var statearr_51932_51949 = state_51918__$1;
(statearr_51932_51949[(2)] = inst_51910);

(statearr_51932_51949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51919 === (8))){
var inst_51897 = (state_51918[(7)]);
var inst_51898 = (state_51918[(8)]);
var inst_51888 = (state_51918[(10)]);
var inst_51899 = (state_51918[(9)]);
var inst_51902 = (function (){var cs = inst_51888;
var vec__51893 = inst_51897;
var v = inst_51898;
var c = inst_51899;
return ((function (cs,vec__51893,v,c,inst_51897,inst_51898,inst_51888,inst_51899,state_val_51919,c__50541__auto___51940,out){
return (function (p1__51884_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51884_SHARP_);
});
;})(cs,vec__51893,v,c,inst_51897,inst_51898,inst_51888,inst_51899,state_val_51919,c__50541__auto___51940,out))
})();
var inst_51903 = cljs.core.filterv.call(null,inst_51902,inst_51888);
var inst_51888__$1 = inst_51903;
var state_51918__$1 = (function (){var statearr_51933 = state_51918;
(statearr_51933[(10)] = inst_51888__$1);

return statearr_51933;
})();
var statearr_51934_51950 = state_51918__$1;
(statearr_51934_51950[(2)] = null);

(statearr_51934_51950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___51940,out))
;
return ((function (switch__50453__auto__,c__50541__auto___51940,out){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_51935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51935[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_51935[(1)] = (1));

return statearr_51935;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_51918){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51936){if((e51936 instanceof Object)){
var ex__50457__auto__ = e51936;
var statearr_51937_51951 = state_51918;
(statearr_51937_51951[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51952 = state_51918;
state_51918 = G__51952;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_51918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_51918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___51940,out))
})();
var state__50543__auto__ = (function (){var statearr_51938 = f__50542__auto__.call(null);
(statearr_51938[(6)] = c__50541__auto___51940);

return statearr_51938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___51940,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51954 = arguments.length;
switch (G__51954) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50541__auto___51999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___51999,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___51999,out){
return (function (state_51978){
var state_val_51979 = (state_51978[(1)]);
if((state_val_51979 === (7))){
var inst_51960 = (state_51978[(7)]);
var inst_51960__$1 = (state_51978[(2)]);
var inst_51961 = (inst_51960__$1 == null);
var inst_51962 = cljs.core.not.call(null,inst_51961);
var state_51978__$1 = (function (){var statearr_51980 = state_51978;
(statearr_51980[(7)] = inst_51960__$1);

return statearr_51980;
})();
if(inst_51962){
var statearr_51981_52000 = state_51978__$1;
(statearr_51981_52000[(1)] = (8));

} else {
var statearr_51982_52001 = state_51978__$1;
(statearr_51982_52001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (1))){
var inst_51955 = (0);
var state_51978__$1 = (function (){var statearr_51983 = state_51978;
(statearr_51983[(8)] = inst_51955);

return statearr_51983;
})();
var statearr_51984_52002 = state_51978__$1;
(statearr_51984_52002[(2)] = null);

(statearr_51984_52002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (4))){
var state_51978__$1 = state_51978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51978__$1,(7),ch);
} else {
if((state_val_51979 === (6))){
var inst_51973 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
var statearr_51985_52003 = state_51978__$1;
(statearr_51985_52003[(2)] = inst_51973);

(statearr_51985_52003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (3))){
var inst_51975 = (state_51978[(2)]);
var inst_51976 = cljs.core.async.close_BANG_.call(null,out);
var state_51978__$1 = (function (){var statearr_51986 = state_51978;
(statearr_51986[(9)] = inst_51975);

return statearr_51986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51978__$1,inst_51976);
} else {
if((state_val_51979 === (2))){
var inst_51955 = (state_51978[(8)]);
var inst_51957 = (inst_51955 < n);
var state_51978__$1 = state_51978;
if(cljs.core.truth_(inst_51957)){
var statearr_51987_52004 = state_51978__$1;
(statearr_51987_52004[(1)] = (4));

} else {
var statearr_51988_52005 = state_51978__$1;
(statearr_51988_52005[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (11))){
var inst_51955 = (state_51978[(8)]);
var inst_51965 = (state_51978[(2)]);
var inst_51966 = (inst_51955 + (1));
var inst_51955__$1 = inst_51966;
var state_51978__$1 = (function (){var statearr_51989 = state_51978;
(statearr_51989[(8)] = inst_51955__$1);

(statearr_51989[(10)] = inst_51965);

return statearr_51989;
})();
var statearr_51990_52006 = state_51978__$1;
(statearr_51990_52006[(2)] = null);

(statearr_51990_52006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (9))){
var state_51978__$1 = state_51978;
var statearr_51991_52007 = state_51978__$1;
(statearr_51991_52007[(2)] = null);

(statearr_51991_52007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (5))){
var state_51978__$1 = state_51978;
var statearr_51992_52008 = state_51978__$1;
(statearr_51992_52008[(2)] = null);

(statearr_51992_52008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (10))){
var inst_51970 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
var statearr_51993_52009 = state_51978__$1;
(statearr_51993_52009[(2)] = inst_51970);

(statearr_51993_52009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (8))){
var inst_51960 = (state_51978[(7)]);
var state_51978__$1 = state_51978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51978__$1,(11),out,inst_51960);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___51999,out))
;
return ((function (switch__50453__auto__,c__50541__auto___51999,out){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_51994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51994[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_51994[(1)] = (1));

return statearr_51994;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_51978){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_51978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e51995){if((e51995 instanceof Object)){
var ex__50457__auto__ = e51995;
var statearr_51996_52010 = state_51978;
(statearr_51996_52010[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52011 = state_51978;
state_51978 = G__52011;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_51978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_51978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___51999,out))
})();
var state__50543__auto__ = (function (){var statearr_51997 = f__50542__auto__.call(null);
(statearr_51997[(6)] = c__50541__auto___51999);

return statearr_51997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___51999,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52013 = (function (f,ch,meta52014){
this.f = f;
this.ch = ch;
this.meta52014 = meta52014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52015,meta52014__$1){
var self__ = this;
var _52015__$1 = this;
return (new cljs.core.async.t_cljs$core$async52013(self__.f,self__.ch,meta52014__$1));
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52015){
var self__ = this;
var _52015__$1 = this;
return self__.meta52014;
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async52016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52016 = (function (f,ch,meta52014,_,fn1,meta52017){
this.f = f;
this.ch = ch;
this.meta52014 = meta52014;
this._ = _;
this.fn1 = fn1;
this.meta52017 = meta52017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52018,meta52017__$1){
var self__ = this;
var _52018__$1 = this;
return (new cljs.core.async.t_cljs$core$async52016(self__.f,self__.ch,self__.meta52014,self__._,self__.fn1,meta52017__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async52016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52018){
var self__ = this;
var _52018__$1 = this;
return self__.meta52017;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async52016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__52012_SHARP_){
return f1.call(null,(((p1__52012_SHARP_ == null))?null:self__.f.call(null,p1__52012_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async52016.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52014","meta52014",825912880,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52013","cljs.core.async/t_cljs$core$async52013",732078902,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52017","meta52017",2066710360,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async52016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52016";

cljs.core.async.t_cljs$core$async52016.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async52016");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async52016 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52016(f__$1,ch__$1,meta52014__$1,___$2,fn1__$1,meta52017){
return (new cljs.core.async.t_cljs$core$async52016(f__$1,ch__$1,meta52014__$1,___$2,fn1__$1,meta52017));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async52016(self__.f,self__.ch,self__.meta52014,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__47176__auto__ = ret;
if(cljs.core.truth_(and__47176__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__47176__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52013.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async52013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52014","meta52014",825912880,null)], null);
});

cljs.core.async.t_cljs$core$async52013.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52013";

cljs.core.async.t_cljs$core$async52013.cljs$lang$ctorPrWriter = (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async52013");
});

cljs.core.async.__GT_t_cljs$core$async52013 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async52013(f__$1,ch__$1,meta52014){
return (new cljs.core.async.t_cljs$core$async52013(f__$1,ch__$1,meta52014));
});

}

return (new cljs.core.async.t_cljs$core$async52013(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async52019 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52019 = (function (f,ch,meta52020){
this.f = f;
this.ch = ch;
this.meta52020 = meta52020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52021,meta52020__$1){
var self__ = this;
var _52021__$1 = this;
return (new cljs.core.async.t_cljs$core$async52019(self__.f,self__.ch,meta52020__$1));
});

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52021){
var self__ = this;
var _52021__$1 = this;
return self__.meta52020;
});

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52019.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async52019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52020","meta52020",-852702224,null)], null);
});

cljs.core.async.t_cljs$core$async52019.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52019";

cljs.core.async.t_cljs$core$async52019.cljs$lang$ctorPrWriter = (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async52019");
});

cljs.core.async.__GT_t_cljs$core$async52019 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async52019(f__$1,ch__$1,meta52020){
return (new cljs.core.async.t_cljs$core$async52019(f__$1,ch__$1,meta52020));
});

}

return (new cljs.core.async.t_cljs$core$async52019(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async52022 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52022 = (function (p,ch,meta52023){
this.p = p;
this.ch = ch;
this.meta52023 = meta52023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52024,meta52023__$1){
var self__ = this;
var _52024__$1 = this;
return (new cljs.core.async.t_cljs$core$async52022(self__.p,self__.ch,meta52023__$1));
});

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52024){
var self__ = this;
var _52024__$1 = this;
return self__.meta52023;
});

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async52022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52023","meta52023",135434361,null)], null);
});

cljs.core.async.t_cljs$core$async52022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52022";

cljs.core.async.t_cljs$core$async52022.cljs$lang$ctorPrWriter = (function (this__47813__auto__,writer__47814__auto__,opt__47815__auto__){
return cljs.core._write.call(null,writer__47814__auto__,"cljs.core.async/t_cljs$core$async52022");
});

cljs.core.async.__GT_t_cljs$core$async52022 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async52022(p__$1,ch__$1,meta52023){
return (new cljs.core.async.t_cljs$core$async52022(p__$1,ch__$1,meta52023));
});

}

return (new cljs.core.async.t_cljs$core$async52022(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52026 = arguments.length;
switch (G__52026) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50541__auto___52066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___52066,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___52066,out){
return (function (state_52047){
var state_val_52048 = (state_52047[(1)]);
if((state_val_52048 === (7))){
var inst_52043 = (state_52047[(2)]);
var state_52047__$1 = state_52047;
var statearr_52049_52067 = state_52047__$1;
(statearr_52049_52067[(2)] = inst_52043);

(statearr_52049_52067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (1))){
var state_52047__$1 = state_52047;
var statearr_52050_52068 = state_52047__$1;
(statearr_52050_52068[(2)] = null);

(statearr_52050_52068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (4))){
var inst_52029 = (state_52047[(7)]);
var inst_52029__$1 = (state_52047[(2)]);
var inst_52030 = (inst_52029__$1 == null);
var state_52047__$1 = (function (){var statearr_52051 = state_52047;
(statearr_52051[(7)] = inst_52029__$1);

return statearr_52051;
})();
if(cljs.core.truth_(inst_52030)){
var statearr_52052_52069 = state_52047__$1;
(statearr_52052_52069[(1)] = (5));

} else {
var statearr_52053_52070 = state_52047__$1;
(statearr_52053_52070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (6))){
var inst_52029 = (state_52047[(7)]);
var inst_52034 = p.call(null,inst_52029);
var state_52047__$1 = state_52047;
if(cljs.core.truth_(inst_52034)){
var statearr_52054_52071 = state_52047__$1;
(statearr_52054_52071[(1)] = (8));

} else {
var statearr_52055_52072 = state_52047__$1;
(statearr_52055_52072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (3))){
var inst_52045 = (state_52047[(2)]);
var state_52047__$1 = state_52047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52047__$1,inst_52045);
} else {
if((state_val_52048 === (2))){
var state_52047__$1 = state_52047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52047__$1,(4),ch);
} else {
if((state_val_52048 === (11))){
var inst_52037 = (state_52047[(2)]);
var state_52047__$1 = state_52047;
var statearr_52056_52073 = state_52047__$1;
(statearr_52056_52073[(2)] = inst_52037);

(statearr_52056_52073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (9))){
var state_52047__$1 = state_52047;
var statearr_52057_52074 = state_52047__$1;
(statearr_52057_52074[(2)] = null);

(statearr_52057_52074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (5))){
var inst_52032 = cljs.core.async.close_BANG_.call(null,out);
var state_52047__$1 = state_52047;
var statearr_52058_52075 = state_52047__$1;
(statearr_52058_52075[(2)] = inst_52032);

(statearr_52058_52075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (10))){
var inst_52040 = (state_52047[(2)]);
var state_52047__$1 = (function (){var statearr_52059 = state_52047;
(statearr_52059[(8)] = inst_52040);

return statearr_52059;
})();
var statearr_52060_52076 = state_52047__$1;
(statearr_52060_52076[(2)] = null);

(statearr_52060_52076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52048 === (8))){
var inst_52029 = (state_52047[(7)]);
var state_52047__$1 = state_52047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52047__$1,(11),out,inst_52029);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___52066,out))
;
return ((function (switch__50453__auto__,c__50541__auto___52066,out){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_52061 = [null,null,null,null,null,null,null,null,null];
(statearr_52061[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_52061[(1)] = (1));

return statearr_52061;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_52047){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52062){if((e52062 instanceof Object)){
var ex__50457__auto__ = e52062;
var statearr_52063_52077 = state_52047;
(statearr_52063_52077[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52078 = state_52047;
state_52047 = G__52078;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_52047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_52047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___52066,out))
})();
var state__50543__auto__ = (function (){var statearr_52064 = f__50542__auto__.call(null);
(statearr_52064[(6)] = c__50541__auto___52066);

return statearr_52064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___52066,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52080 = arguments.length;
switch (G__52080) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__){
return (function (state_52143){
var state_val_52144 = (state_52143[(1)]);
if((state_val_52144 === (7))){
var inst_52139 = (state_52143[(2)]);
var state_52143__$1 = state_52143;
var statearr_52145_52183 = state_52143__$1;
(statearr_52145_52183[(2)] = inst_52139);

(statearr_52145_52183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (20))){
var inst_52109 = (state_52143[(7)]);
var inst_52120 = (state_52143[(2)]);
var inst_52121 = cljs.core.next.call(null,inst_52109);
var inst_52095 = inst_52121;
var inst_52096 = null;
var inst_52097 = (0);
var inst_52098 = (0);
var state_52143__$1 = (function (){var statearr_52146 = state_52143;
(statearr_52146[(8)] = inst_52095);

(statearr_52146[(9)] = inst_52120);

(statearr_52146[(10)] = inst_52098);

(statearr_52146[(11)] = inst_52097);

(statearr_52146[(12)] = inst_52096);

return statearr_52146;
})();
var statearr_52147_52184 = state_52143__$1;
(statearr_52147_52184[(2)] = null);

(statearr_52147_52184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (1))){
var state_52143__$1 = state_52143;
var statearr_52148_52185 = state_52143__$1;
(statearr_52148_52185[(2)] = null);

(statearr_52148_52185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (4))){
var inst_52084 = (state_52143[(13)]);
var inst_52084__$1 = (state_52143[(2)]);
var inst_52085 = (inst_52084__$1 == null);
var state_52143__$1 = (function (){var statearr_52149 = state_52143;
(statearr_52149[(13)] = inst_52084__$1);

return statearr_52149;
})();
if(cljs.core.truth_(inst_52085)){
var statearr_52150_52186 = state_52143__$1;
(statearr_52150_52186[(1)] = (5));

} else {
var statearr_52151_52187 = state_52143__$1;
(statearr_52151_52187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (15))){
var state_52143__$1 = state_52143;
var statearr_52155_52188 = state_52143__$1;
(statearr_52155_52188[(2)] = null);

(statearr_52155_52188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (21))){
var state_52143__$1 = state_52143;
var statearr_52156_52189 = state_52143__$1;
(statearr_52156_52189[(2)] = null);

(statearr_52156_52189[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (13))){
var inst_52095 = (state_52143[(8)]);
var inst_52098 = (state_52143[(10)]);
var inst_52097 = (state_52143[(11)]);
var inst_52096 = (state_52143[(12)]);
var inst_52105 = (state_52143[(2)]);
var inst_52106 = (inst_52098 + (1));
var tmp52152 = inst_52095;
var tmp52153 = inst_52097;
var tmp52154 = inst_52096;
var inst_52095__$1 = tmp52152;
var inst_52096__$1 = tmp52154;
var inst_52097__$1 = tmp52153;
var inst_52098__$1 = inst_52106;
var state_52143__$1 = (function (){var statearr_52157 = state_52143;
(statearr_52157[(8)] = inst_52095__$1);

(statearr_52157[(10)] = inst_52098__$1);

(statearr_52157[(14)] = inst_52105);

(statearr_52157[(11)] = inst_52097__$1);

(statearr_52157[(12)] = inst_52096__$1);

return statearr_52157;
})();
var statearr_52158_52190 = state_52143__$1;
(statearr_52158_52190[(2)] = null);

(statearr_52158_52190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (22))){
var state_52143__$1 = state_52143;
var statearr_52159_52191 = state_52143__$1;
(statearr_52159_52191[(2)] = null);

(statearr_52159_52191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (6))){
var inst_52084 = (state_52143[(13)]);
var inst_52093 = f.call(null,inst_52084);
var inst_52094 = cljs.core.seq.call(null,inst_52093);
var inst_52095 = inst_52094;
var inst_52096 = null;
var inst_52097 = (0);
var inst_52098 = (0);
var state_52143__$1 = (function (){var statearr_52160 = state_52143;
(statearr_52160[(8)] = inst_52095);

(statearr_52160[(10)] = inst_52098);

(statearr_52160[(11)] = inst_52097);

(statearr_52160[(12)] = inst_52096);

return statearr_52160;
})();
var statearr_52161_52192 = state_52143__$1;
(statearr_52161_52192[(2)] = null);

(statearr_52161_52192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (17))){
var inst_52109 = (state_52143[(7)]);
var inst_52113 = cljs.core.chunk_first.call(null,inst_52109);
var inst_52114 = cljs.core.chunk_rest.call(null,inst_52109);
var inst_52115 = cljs.core.count.call(null,inst_52113);
var inst_52095 = inst_52114;
var inst_52096 = inst_52113;
var inst_52097 = inst_52115;
var inst_52098 = (0);
var state_52143__$1 = (function (){var statearr_52162 = state_52143;
(statearr_52162[(8)] = inst_52095);

(statearr_52162[(10)] = inst_52098);

(statearr_52162[(11)] = inst_52097);

(statearr_52162[(12)] = inst_52096);

return statearr_52162;
})();
var statearr_52163_52193 = state_52143__$1;
(statearr_52163_52193[(2)] = null);

(statearr_52163_52193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (3))){
var inst_52141 = (state_52143[(2)]);
var state_52143__$1 = state_52143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52143__$1,inst_52141);
} else {
if((state_val_52144 === (12))){
var inst_52129 = (state_52143[(2)]);
var state_52143__$1 = state_52143;
var statearr_52164_52194 = state_52143__$1;
(statearr_52164_52194[(2)] = inst_52129);

(statearr_52164_52194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (2))){
var state_52143__$1 = state_52143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52143__$1,(4),in$);
} else {
if((state_val_52144 === (23))){
var inst_52137 = (state_52143[(2)]);
var state_52143__$1 = state_52143;
var statearr_52165_52195 = state_52143__$1;
(statearr_52165_52195[(2)] = inst_52137);

(statearr_52165_52195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (19))){
var inst_52124 = (state_52143[(2)]);
var state_52143__$1 = state_52143;
var statearr_52166_52196 = state_52143__$1;
(statearr_52166_52196[(2)] = inst_52124);

(statearr_52166_52196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (11))){
var inst_52095 = (state_52143[(8)]);
var inst_52109 = (state_52143[(7)]);
var inst_52109__$1 = cljs.core.seq.call(null,inst_52095);
var state_52143__$1 = (function (){var statearr_52167 = state_52143;
(statearr_52167[(7)] = inst_52109__$1);

return statearr_52167;
})();
if(inst_52109__$1){
var statearr_52168_52197 = state_52143__$1;
(statearr_52168_52197[(1)] = (14));

} else {
var statearr_52169_52198 = state_52143__$1;
(statearr_52169_52198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (9))){
var inst_52131 = (state_52143[(2)]);
var inst_52132 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52143__$1 = (function (){var statearr_52170 = state_52143;
(statearr_52170[(15)] = inst_52131);

return statearr_52170;
})();
if(cljs.core.truth_(inst_52132)){
var statearr_52171_52199 = state_52143__$1;
(statearr_52171_52199[(1)] = (21));

} else {
var statearr_52172_52200 = state_52143__$1;
(statearr_52172_52200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (5))){
var inst_52087 = cljs.core.async.close_BANG_.call(null,out);
var state_52143__$1 = state_52143;
var statearr_52173_52201 = state_52143__$1;
(statearr_52173_52201[(2)] = inst_52087);

(statearr_52173_52201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (14))){
var inst_52109 = (state_52143[(7)]);
var inst_52111 = cljs.core.chunked_seq_QMARK_.call(null,inst_52109);
var state_52143__$1 = state_52143;
if(inst_52111){
var statearr_52174_52202 = state_52143__$1;
(statearr_52174_52202[(1)] = (17));

} else {
var statearr_52175_52203 = state_52143__$1;
(statearr_52175_52203[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (16))){
var inst_52127 = (state_52143[(2)]);
var state_52143__$1 = state_52143;
var statearr_52176_52204 = state_52143__$1;
(statearr_52176_52204[(2)] = inst_52127);

(statearr_52176_52204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52144 === (10))){
var inst_52098 = (state_52143[(10)]);
var inst_52096 = (state_52143[(12)]);
var inst_52103 = cljs.core._nth.call(null,inst_52096,inst_52098);
var state_52143__$1 = state_52143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52143__$1,(13),out,inst_52103);
} else {
if((state_val_52144 === (18))){
var inst_52109 = (state_52143[(7)]);
var inst_52118 = cljs.core.first.call(null,inst_52109);
var state_52143__$1 = state_52143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52143__$1,(20),out,inst_52118);
} else {
if((state_val_52144 === (8))){
var inst_52098 = (state_52143[(10)]);
var inst_52097 = (state_52143[(11)]);
var inst_52100 = (inst_52098 < inst_52097);
var inst_52101 = inst_52100;
var state_52143__$1 = state_52143;
if(cljs.core.truth_(inst_52101)){
var statearr_52177_52205 = state_52143__$1;
(statearr_52177_52205[(1)] = (10));

} else {
var statearr_52178_52206 = state_52143__$1;
(statearr_52178_52206[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto__))
;
return ((function (switch__50453__auto__,c__50541__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50454__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50454__auto____0 = (function (){
var statearr_52179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52179[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50454__auto__);

(statearr_52179[(1)] = (1));

return statearr_52179;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50454__auto____1 = (function (state_52143){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52180){if((e52180 instanceof Object)){
var ex__50457__auto__ = e52180;
var statearr_52181_52207 = state_52143;
(statearr_52181_52207[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52208 = state_52143;
state_52143 = G__52208;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50454__auto__ = function(state_52143){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50454__auto____1.call(this,state_52143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50454__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50454__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__))
})();
var state__50543__auto__ = (function (){var statearr_52182 = f__50542__auto__.call(null);
(statearr_52182[(6)] = c__50541__auto__);

return statearr_52182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__))
);

return c__50541__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52210 = arguments.length;
switch (G__52210) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52213 = arguments.length;
switch (G__52213) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52216 = arguments.length;
switch (G__52216) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50541__auto___52263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___52263,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___52263,out){
return (function (state_52240){
var state_val_52241 = (state_52240[(1)]);
if((state_val_52241 === (7))){
var inst_52235 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52242_52264 = state_52240__$1;
(statearr_52242_52264[(2)] = inst_52235);

(statearr_52242_52264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (1))){
var inst_52217 = null;
var state_52240__$1 = (function (){var statearr_52243 = state_52240;
(statearr_52243[(7)] = inst_52217);

return statearr_52243;
})();
var statearr_52244_52265 = state_52240__$1;
(statearr_52244_52265[(2)] = null);

(statearr_52244_52265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (4))){
var inst_52220 = (state_52240[(8)]);
var inst_52220__$1 = (state_52240[(2)]);
var inst_52221 = (inst_52220__$1 == null);
var inst_52222 = cljs.core.not.call(null,inst_52221);
var state_52240__$1 = (function (){var statearr_52245 = state_52240;
(statearr_52245[(8)] = inst_52220__$1);

return statearr_52245;
})();
if(inst_52222){
var statearr_52246_52266 = state_52240__$1;
(statearr_52246_52266[(1)] = (5));

} else {
var statearr_52247_52267 = state_52240__$1;
(statearr_52247_52267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (6))){
var state_52240__$1 = state_52240;
var statearr_52248_52268 = state_52240__$1;
(statearr_52248_52268[(2)] = null);

(statearr_52248_52268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (3))){
var inst_52237 = (state_52240[(2)]);
var inst_52238 = cljs.core.async.close_BANG_.call(null,out);
var state_52240__$1 = (function (){var statearr_52249 = state_52240;
(statearr_52249[(9)] = inst_52237);

return statearr_52249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52240__$1,inst_52238);
} else {
if((state_val_52241 === (2))){
var state_52240__$1 = state_52240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52240__$1,(4),ch);
} else {
if((state_val_52241 === (11))){
var inst_52220 = (state_52240[(8)]);
var inst_52229 = (state_52240[(2)]);
var inst_52217 = inst_52220;
var state_52240__$1 = (function (){var statearr_52250 = state_52240;
(statearr_52250[(7)] = inst_52217);

(statearr_52250[(10)] = inst_52229);

return statearr_52250;
})();
var statearr_52251_52269 = state_52240__$1;
(statearr_52251_52269[(2)] = null);

(statearr_52251_52269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (9))){
var inst_52220 = (state_52240[(8)]);
var state_52240__$1 = state_52240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52240__$1,(11),out,inst_52220);
} else {
if((state_val_52241 === (5))){
var inst_52217 = (state_52240[(7)]);
var inst_52220 = (state_52240[(8)]);
var inst_52224 = cljs.core._EQ_.call(null,inst_52220,inst_52217);
var state_52240__$1 = state_52240;
if(inst_52224){
var statearr_52253_52270 = state_52240__$1;
(statearr_52253_52270[(1)] = (8));

} else {
var statearr_52254_52271 = state_52240__$1;
(statearr_52254_52271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (10))){
var inst_52232 = (state_52240[(2)]);
var state_52240__$1 = state_52240;
var statearr_52255_52272 = state_52240__$1;
(statearr_52255_52272[(2)] = inst_52232);

(statearr_52255_52272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52241 === (8))){
var inst_52217 = (state_52240[(7)]);
var tmp52252 = inst_52217;
var inst_52217__$1 = tmp52252;
var state_52240__$1 = (function (){var statearr_52256 = state_52240;
(statearr_52256[(7)] = inst_52217__$1);

return statearr_52256;
})();
var statearr_52257_52273 = state_52240__$1;
(statearr_52257_52273[(2)] = null);

(statearr_52257_52273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___52263,out))
;
return ((function (switch__50453__auto__,c__50541__auto___52263,out){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_52258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52258[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_52258[(1)] = (1));

return statearr_52258;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_52240){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52259){if((e52259 instanceof Object)){
var ex__50457__auto__ = e52259;
var statearr_52260_52274 = state_52240;
(statearr_52260_52274[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52275 = state_52240;
state_52240 = G__52275;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_52240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_52240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___52263,out))
})();
var state__50543__auto__ = (function (){var statearr_52261 = f__50542__auto__.call(null);
(statearr_52261[(6)] = c__50541__auto___52263);

return statearr_52261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___52263,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52277 = arguments.length;
switch (G__52277) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50541__auto___52343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___52343,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___52343,out){
return (function (state_52315){
var state_val_52316 = (state_52315[(1)]);
if((state_val_52316 === (7))){
var inst_52311 = (state_52315[(2)]);
var state_52315__$1 = state_52315;
var statearr_52317_52344 = state_52315__$1;
(statearr_52317_52344[(2)] = inst_52311);

(statearr_52317_52344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (1))){
var inst_52278 = (new Array(n));
var inst_52279 = inst_52278;
var inst_52280 = (0);
var state_52315__$1 = (function (){var statearr_52318 = state_52315;
(statearr_52318[(7)] = inst_52279);

(statearr_52318[(8)] = inst_52280);

return statearr_52318;
})();
var statearr_52319_52345 = state_52315__$1;
(statearr_52319_52345[(2)] = null);

(statearr_52319_52345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (4))){
var inst_52283 = (state_52315[(9)]);
var inst_52283__$1 = (state_52315[(2)]);
var inst_52284 = (inst_52283__$1 == null);
var inst_52285 = cljs.core.not.call(null,inst_52284);
var state_52315__$1 = (function (){var statearr_52320 = state_52315;
(statearr_52320[(9)] = inst_52283__$1);

return statearr_52320;
})();
if(inst_52285){
var statearr_52321_52346 = state_52315__$1;
(statearr_52321_52346[(1)] = (5));

} else {
var statearr_52322_52347 = state_52315__$1;
(statearr_52322_52347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (15))){
var inst_52305 = (state_52315[(2)]);
var state_52315__$1 = state_52315;
var statearr_52323_52348 = state_52315__$1;
(statearr_52323_52348[(2)] = inst_52305);

(statearr_52323_52348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (13))){
var state_52315__$1 = state_52315;
var statearr_52324_52349 = state_52315__$1;
(statearr_52324_52349[(2)] = null);

(statearr_52324_52349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (6))){
var inst_52280 = (state_52315[(8)]);
var inst_52301 = (inst_52280 > (0));
var state_52315__$1 = state_52315;
if(cljs.core.truth_(inst_52301)){
var statearr_52325_52350 = state_52315__$1;
(statearr_52325_52350[(1)] = (12));

} else {
var statearr_52326_52351 = state_52315__$1;
(statearr_52326_52351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (3))){
var inst_52313 = (state_52315[(2)]);
var state_52315__$1 = state_52315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52315__$1,inst_52313);
} else {
if((state_val_52316 === (12))){
var inst_52279 = (state_52315[(7)]);
var inst_52303 = cljs.core.vec.call(null,inst_52279);
var state_52315__$1 = state_52315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52315__$1,(15),out,inst_52303);
} else {
if((state_val_52316 === (2))){
var state_52315__$1 = state_52315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52315__$1,(4),ch);
} else {
if((state_val_52316 === (11))){
var inst_52295 = (state_52315[(2)]);
var inst_52296 = (new Array(n));
var inst_52279 = inst_52296;
var inst_52280 = (0);
var state_52315__$1 = (function (){var statearr_52327 = state_52315;
(statearr_52327[(7)] = inst_52279);

(statearr_52327[(8)] = inst_52280);

(statearr_52327[(10)] = inst_52295);

return statearr_52327;
})();
var statearr_52328_52352 = state_52315__$1;
(statearr_52328_52352[(2)] = null);

(statearr_52328_52352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (9))){
var inst_52279 = (state_52315[(7)]);
var inst_52293 = cljs.core.vec.call(null,inst_52279);
var state_52315__$1 = state_52315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52315__$1,(11),out,inst_52293);
} else {
if((state_val_52316 === (5))){
var inst_52283 = (state_52315[(9)]);
var inst_52279 = (state_52315[(7)]);
var inst_52280 = (state_52315[(8)]);
var inst_52288 = (state_52315[(11)]);
var inst_52287 = (inst_52279[inst_52280] = inst_52283);
var inst_52288__$1 = (inst_52280 + (1));
var inst_52289 = (inst_52288__$1 < n);
var state_52315__$1 = (function (){var statearr_52329 = state_52315;
(statearr_52329[(11)] = inst_52288__$1);

(statearr_52329[(12)] = inst_52287);

return statearr_52329;
})();
if(cljs.core.truth_(inst_52289)){
var statearr_52330_52353 = state_52315__$1;
(statearr_52330_52353[(1)] = (8));

} else {
var statearr_52331_52354 = state_52315__$1;
(statearr_52331_52354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (14))){
var inst_52308 = (state_52315[(2)]);
var inst_52309 = cljs.core.async.close_BANG_.call(null,out);
var state_52315__$1 = (function (){var statearr_52333 = state_52315;
(statearr_52333[(13)] = inst_52308);

return statearr_52333;
})();
var statearr_52334_52355 = state_52315__$1;
(statearr_52334_52355[(2)] = inst_52309);

(statearr_52334_52355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (10))){
var inst_52299 = (state_52315[(2)]);
var state_52315__$1 = state_52315;
var statearr_52335_52356 = state_52315__$1;
(statearr_52335_52356[(2)] = inst_52299);

(statearr_52335_52356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52316 === (8))){
var inst_52279 = (state_52315[(7)]);
var inst_52288 = (state_52315[(11)]);
var tmp52332 = inst_52279;
var inst_52279__$1 = tmp52332;
var inst_52280 = inst_52288;
var state_52315__$1 = (function (){var statearr_52336 = state_52315;
(statearr_52336[(7)] = inst_52279__$1);

(statearr_52336[(8)] = inst_52280);

return statearr_52336;
})();
var statearr_52337_52357 = state_52315__$1;
(statearr_52337_52357[(2)] = null);

(statearr_52337_52357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___52343,out))
;
return ((function (switch__50453__auto__,c__50541__auto___52343,out){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_52338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52338[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_52338[(1)] = (1));

return statearr_52338;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_52315){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52339){if((e52339 instanceof Object)){
var ex__50457__auto__ = e52339;
var statearr_52340_52358 = state_52315;
(statearr_52340_52358[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52359 = state_52315;
state_52315 = G__52359;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_52315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_52315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___52343,out))
})();
var state__50543__auto__ = (function (){var statearr_52341 = f__50542__auto__.call(null);
(statearr_52341[(6)] = c__50541__auto___52343);

return statearr_52341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___52343,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52361 = arguments.length;
switch (G__52361) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__50541__auto___52431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___52431,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___52431,out){
return (function (state_52403){
var state_val_52404 = (state_52403[(1)]);
if((state_val_52404 === (7))){
var inst_52399 = (state_52403[(2)]);
var state_52403__$1 = state_52403;
var statearr_52405_52432 = state_52403__$1;
(statearr_52405_52432[(2)] = inst_52399);

(statearr_52405_52432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (1))){
var inst_52362 = [];
var inst_52363 = inst_52362;
var inst_52364 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52403__$1 = (function (){var statearr_52406 = state_52403;
(statearr_52406[(7)] = inst_52363);

(statearr_52406[(8)] = inst_52364);

return statearr_52406;
})();
var statearr_52407_52433 = state_52403__$1;
(statearr_52407_52433[(2)] = null);

(statearr_52407_52433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (4))){
var inst_52367 = (state_52403[(9)]);
var inst_52367__$1 = (state_52403[(2)]);
var inst_52368 = (inst_52367__$1 == null);
var inst_52369 = cljs.core.not.call(null,inst_52368);
var state_52403__$1 = (function (){var statearr_52408 = state_52403;
(statearr_52408[(9)] = inst_52367__$1);

return statearr_52408;
})();
if(inst_52369){
var statearr_52409_52434 = state_52403__$1;
(statearr_52409_52434[(1)] = (5));

} else {
var statearr_52410_52435 = state_52403__$1;
(statearr_52410_52435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (15))){
var inst_52393 = (state_52403[(2)]);
var state_52403__$1 = state_52403;
var statearr_52411_52436 = state_52403__$1;
(statearr_52411_52436[(2)] = inst_52393);

(statearr_52411_52436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (13))){
var state_52403__$1 = state_52403;
var statearr_52412_52437 = state_52403__$1;
(statearr_52412_52437[(2)] = null);

(statearr_52412_52437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (6))){
var inst_52363 = (state_52403[(7)]);
var inst_52388 = inst_52363.length;
var inst_52389 = (inst_52388 > (0));
var state_52403__$1 = state_52403;
if(cljs.core.truth_(inst_52389)){
var statearr_52413_52438 = state_52403__$1;
(statearr_52413_52438[(1)] = (12));

} else {
var statearr_52414_52439 = state_52403__$1;
(statearr_52414_52439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (3))){
var inst_52401 = (state_52403[(2)]);
var state_52403__$1 = state_52403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52403__$1,inst_52401);
} else {
if((state_val_52404 === (12))){
var inst_52363 = (state_52403[(7)]);
var inst_52391 = cljs.core.vec.call(null,inst_52363);
var state_52403__$1 = state_52403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52403__$1,(15),out,inst_52391);
} else {
if((state_val_52404 === (2))){
var state_52403__$1 = state_52403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52403__$1,(4),ch);
} else {
if((state_val_52404 === (11))){
var inst_52367 = (state_52403[(9)]);
var inst_52371 = (state_52403[(10)]);
var inst_52381 = (state_52403[(2)]);
var inst_52382 = [];
var inst_52383 = inst_52382.push(inst_52367);
var inst_52363 = inst_52382;
var inst_52364 = inst_52371;
var state_52403__$1 = (function (){var statearr_52415 = state_52403;
(statearr_52415[(11)] = inst_52381);

(statearr_52415[(7)] = inst_52363);

(statearr_52415[(8)] = inst_52364);

(statearr_52415[(12)] = inst_52383);

return statearr_52415;
})();
var statearr_52416_52440 = state_52403__$1;
(statearr_52416_52440[(2)] = null);

(statearr_52416_52440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (9))){
var inst_52363 = (state_52403[(7)]);
var inst_52379 = cljs.core.vec.call(null,inst_52363);
var state_52403__$1 = state_52403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52403__$1,(11),out,inst_52379);
} else {
if((state_val_52404 === (5))){
var inst_52367 = (state_52403[(9)]);
var inst_52371 = (state_52403[(10)]);
var inst_52364 = (state_52403[(8)]);
var inst_52371__$1 = f.call(null,inst_52367);
var inst_52372 = cljs.core._EQ_.call(null,inst_52371__$1,inst_52364);
var inst_52373 = cljs.core.keyword_identical_QMARK_.call(null,inst_52364,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52374 = (inst_52372) || (inst_52373);
var state_52403__$1 = (function (){var statearr_52417 = state_52403;
(statearr_52417[(10)] = inst_52371__$1);

return statearr_52417;
})();
if(cljs.core.truth_(inst_52374)){
var statearr_52418_52441 = state_52403__$1;
(statearr_52418_52441[(1)] = (8));

} else {
var statearr_52419_52442 = state_52403__$1;
(statearr_52419_52442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (14))){
var inst_52396 = (state_52403[(2)]);
var inst_52397 = cljs.core.async.close_BANG_.call(null,out);
var state_52403__$1 = (function (){var statearr_52421 = state_52403;
(statearr_52421[(13)] = inst_52396);

return statearr_52421;
})();
var statearr_52422_52443 = state_52403__$1;
(statearr_52422_52443[(2)] = inst_52397);

(statearr_52422_52443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (10))){
var inst_52386 = (state_52403[(2)]);
var state_52403__$1 = state_52403;
var statearr_52423_52444 = state_52403__$1;
(statearr_52423_52444[(2)] = inst_52386);

(statearr_52423_52444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52404 === (8))){
var inst_52367 = (state_52403[(9)]);
var inst_52363 = (state_52403[(7)]);
var inst_52371 = (state_52403[(10)]);
var inst_52376 = inst_52363.push(inst_52367);
var tmp52420 = inst_52363;
var inst_52363__$1 = tmp52420;
var inst_52364 = inst_52371;
var state_52403__$1 = (function (){var statearr_52424 = state_52403;
(statearr_52424[(7)] = inst_52363__$1);

(statearr_52424[(14)] = inst_52376);

(statearr_52424[(8)] = inst_52364);

return statearr_52424;
})();
var statearr_52425_52445 = state_52403__$1;
(statearr_52425_52445[(2)] = null);

(statearr_52425_52445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50541__auto___52431,out))
;
return ((function (switch__50453__auto__,c__50541__auto___52431,out){
return (function() {
var cljs$core$async$state_machine__50454__auto__ = null;
var cljs$core$async$state_machine__50454__auto____0 = (function (){
var statearr_52426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52426[(0)] = cljs$core$async$state_machine__50454__auto__);

(statearr_52426[(1)] = (1));

return statearr_52426;
});
var cljs$core$async$state_machine__50454__auto____1 = (function (state_52403){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52427){if((e52427 instanceof Object)){
var ex__50457__auto__ = e52427;
var statearr_52428_52446 = state_52403;
(statearr_52428_52446[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52447 = state_52403;
state_52403 = G__52447;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
cljs$core$async$state_machine__50454__auto__ = function(state_52403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50454__auto____1.call(this,state_52403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50454__auto____0;
cljs$core$async$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50454__auto____1;
return cljs$core$async$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___52431,out))
})();
var state__50543__auto__ = (function (){var statearr_52429 = f__50542__auto__.call(null);
(statearr_52429[(6)] = c__50541__auto___52431);

return statearr_52429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___52431,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521587971637
