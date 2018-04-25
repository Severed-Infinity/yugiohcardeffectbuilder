// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48248 = arguments.length;
switch (G__48248) {
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
if(typeof cljs.core.async.t_cljs$core$async48249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48249 = (function (f,blockable,meta48250){
this.f = f;
this.blockable = blockable;
this.meta48250 = meta48250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48251,meta48250__$1){
var self__ = this;
var _48251__$1 = this;
return (new cljs.core.async.t_cljs$core$async48249(self__.f,self__.blockable,meta48250__$1));
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48251){
var self__ = this;
var _48251__$1 = this;
return self__.meta48250;
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48250","meta48250",1909282552,null)], null);
});

cljs.core.async.t_cljs$core$async48249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48249";

cljs.core.async.t_cljs$core$async48249.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48249");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48249.
 */
cljs.core.async.__GT_t_cljs$core$async48249 = (function cljs$core$async$__GT_t_cljs$core$async48249(f__$1,blockable__$1,meta48250){
return (new cljs.core.async.t_cljs$core$async48249(f__$1,blockable__$1,meta48250));
});

}

return (new cljs.core.async.t_cljs$core$async48249(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__48255 = arguments.length;
switch (G__48255) {
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
var G__48258 = arguments.length;
switch (G__48258) {
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
var G__48261 = arguments.length;
switch (G__48261) {
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
var val_48263 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48263);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48263,ret){
return (function (){
return fn1.call(null,val_48263);
});})(val_48263,ret))
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
var G__48265 = arguments.length;
switch (G__48265) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4376__auto___48267 = n;
var x_48268 = (0);
while(true){
if((x_48268 < n__4376__auto___48267)){
(a[x_48268] = (0));

var G__48269 = (x_48268 + (1));
x_48268 = G__48269;
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

var G__48270 = (i + (1));
i = G__48270;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48271 = (function (flag,meta48272){
this.flag = flag;
this.meta48272 = meta48272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48273,meta48272__$1){
var self__ = this;
var _48273__$1 = this;
return (new cljs.core.async.t_cljs$core$async48271(self__.flag,meta48272__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48273){
var self__ = this;
var _48273__$1 = this;
return self__.meta48272;
});})(flag))
;

cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48271.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48272","meta48272",557881897,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48271";

cljs.core.async.t_cljs$core$async48271.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48271");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48271.
 */
cljs.core.async.__GT_t_cljs$core$async48271 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48271(flag__$1,meta48272){
return (new cljs.core.async.t_cljs$core$async48271(flag__$1,meta48272));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48271(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48274 = (function (flag,cb,meta48275){
this.flag = flag;
this.cb = cb;
this.meta48275 = meta48275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48276,meta48275__$1){
var self__ = this;
var _48276__$1 = this;
return (new cljs.core.async.t_cljs$core$async48274(self__.flag,self__.cb,meta48275__$1));
});

cljs.core.async.t_cljs$core$async48274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48276){
var self__ = this;
var _48276__$1 = this;
return self__.meta48275;
});

cljs.core.async.t_cljs$core$async48274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48275","meta48275",-1024619677,null)], null);
});

cljs.core.async.t_cljs$core$async48274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48274";

cljs.core.async.t_cljs$core$async48274.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48274");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48274.
 */
cljs.core.async.__GT_t_cljs$core$async48274 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48274(flag__$1,cb__$1,meta48275){
return (new cljs.core.async.t_cljs$core$async48274(flag__$1,cb__$1,meta48275));
});

}

return (new cljs.core.async.t_cljs$core$async48274(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__48277_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48277_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48278_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48278_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48279 = (i + (1));
i = G__48279;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4502__auto__ = [];
var len__4499__auto___48285 = arguments.length;
var i__4500__auto___48286 = (0);
while(true){
if((i__4500__auto___48286 < len__4499__auto___48285)){
args__4502__auto__.push((arguments[i__4500__auto___48286]));

var G__48287 = (i__4500__auto___48286 + (1));
i__4500__auto___48286 = G__48287;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48282){
var map__48283 = p__48282;
var map__48283__$1 = ((((!((map__48283 == null)))?(((((map__48283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48283):map__48283);
var opts = map__48283__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48280){
var G__48281 = cljs.core.first.call(null,seq48280);
var seq48280__$1 = cljs.core.next.call(null,seq48280);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48281,seq48280__$1);
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
var G__48289 = arguments.length;
switch (G__48289) {
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
var c__48188__auto___48335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___48335){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___48335){
return (function (state_48313){
var state_val_48314 = (state_48313[(1)]);
if((state_val_48314 === (7))){
var inst_48309 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
var statearr_48315_48336 = state_48313__$1;
(statearr_48315_48336[(2)] = inst_48309);

(statearr_48315_48336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (1))){
var state_48313__$1 = state_48313;
var statearr_48316_48337 = state_48313__$1;
(statearr_48316_48337[(2)] = null);

(statearr_48316_48337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (4))){
var inst_48292 = (state_48313[(7)]);
var inst_48292__$1 = (state_48313[(2)]);
var inst_48293 = (inst_48292__$1 == null);
var state_48313__$1 = (function (){var statearr_48317 = state_48313;
(statearr_48317[(7)] = inst_48292__$1);

return statearr_48317;
})();
if(cljs.core.truth_(inst_48293)){
var statearr_48318_48338 = state_48313__$1;
(statearr_48318_48338[(1)] = (5));

} else {
var statearr_48319_48339 = state_48313__$1;
(statearr_48319_48339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (13))){
var state_48313__$1 = state_48313;
var statearr_48320_48340 = state_48313__$1;
(statearr_48320_48340[(2)] = null);

(statearr_48320_48340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (6))){
var inst_48292 = (state_48313[(7)]);
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48313__$1,(11),to,inst_48292);
} else {
if((state_val_48314 === (3))){
var inst_48311 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48313__$1,inst_48311);
} else {
if((state_val_48314 === (12))){
var state_48313__$1 = state_48313;
var statearr_48321_48341 = state_48313__$1;
(statearr_48321_48341[(2)] = null);

(statearr_48321_48341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (2))){
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48313__$1,(4),from);
} else {
if((state_val_48314 === (11))){
var inst_48302 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
if(cljs.core.truth_(inst_48302)){
var statearr_48322_48342 = state_48313__$1;
(statearr_48322_48342[(1)] = (12));

} else {
var statearr_48323_48343 = state_48313__$1;
(statearr_48323_48343[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (9))){
var state_48313__$1 = state_48313;
var statearr_48324_48344 = state_48313__$1;
(statearr_48324_48344[(2)] = null);

(statearr_48324_48344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (5))){
var state_48313__$1 = state_48313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48325_48345 = state_48313__$1;
(statearr_48325_48345[(1)] = (8));

} else {
var statearr_48326_48346 = state_48313__$1;
(statearr_48326_48346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (14))){
var inst_48307 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
var statearr_48327_48347 = state_48313__$1;
(statearr_48327_48347[(2)] = inst_48307);

(statearr_48327_48347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (10))){
var inst_48299 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
var statearr_48328_48348 = state_48313__$1;
(statearr_48328_48348[(2)] = inst_48299);

(statearr_48328_48348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (8))){
var inst_48296 = cljs.core.async.close_BANG_.call(null,to);
var state_48313__$1 = state_48313;
var statearr_48329_48349 = state_48313__$1;
(statearr_48329_48349[(2)] = inst_48296);

(statearr_48329_48349[(1)] = (10));


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
});})(c__48188__auto___48335))
;
return ((function (switch__48098__auto__,c__48188__auto___48335){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_48330 = [null,null,null,null,null,null,null,null];
(statearr_48330[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_48330[(1)] = (1));

return statearr_48330;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_48313){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48331){if((e48331 instanceof Object)){
var ex__48102__auto__ = e48331;
var statearr_48332_48350 = state_48313;
(statearr_48332_48350[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48351 = state_48313;
state_48313 = G__48351;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_48313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_48313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___48335))
})();
var state__48190__auto__ = (function (){var statearr_48333 = f__48189__auto__.call(null);
(statearr_48333[(6)] = c__48188__auto___48335);

return statearr_48333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___48335))
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
return (function (p__48352){
var vec__48353 = p__48352;
var v = cljs.core.nth.call(null,vec__48353,(0),null);
var p = cljs.core.nth.call(null,vec__48353,(1),null);
var job = vec__48353;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48188__auto___48524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___48524,res,vec__48353,v,p,job,jobs,results){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___48524,res,vec__48353,v,p,job,jobs,results){
return (function (state_48360){
var state_val_48361 = (state_48360[(1)]);
if((state_val_48361 === (1))){
var state_48360__$1 = state_48360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48360__$1,(2),res,v);
} else {
if((state_val_48361 === (2))){
var inst_48357 = (state_48360[(2)]);
var inst_48358 = cljs.core.async.close_BANG_.call(null,res);
var state_48360__$1 = (function (){var statearr_48362 = state_48360;
(statearr_48362[(7)] = inst_48357);

return statearr_48362;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48360__$1,inst_48358);
} else {
return null;
}
}
});})(c__48188__auto___48524,res,vec__48353,v,p,job,jobs,results))
;
return ((function (switch__48098__auto__,c__48188__auto___48524,res,vec__48353,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0 = (function (){
var statearr_48363 = [null,null,null,null,null,null,null,null];
(statearr_48363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__);

(statearr_48363[(1)] = (1));

return statearr_48363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1 = (function (state_48360){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48364){if((e48364 instanceof Object)){
var ex__48102__auto__ = e48364;
var statearr_48365_48525 = state_48360;
(statearr_48365_48525[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48526 = state_48360;
state_48360 = G__48526;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = function(state_48360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1.call(this,state_48360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___48524,res,vec__48353,v,p,job,jobs,results))
})();
var state__48190__auto__ = (function (){var statearr_48366 = f__48189__auto__.call(null);
(statearr_48366[(6)] = c__48188__auto___48524);

return statearr_48366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___48524,res,vec__48353,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48367){
var vec__48368 = p__48367;
var v = cljs.core.nth.call(null,vec__48368,(0),null);
var p = cljs.core.nth.call(null,vec__48368,(1),null);
var job = vec__48368;
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
var n__4376__auto___48527 = n;
var __48528 = (0);
while(true){
if((__48528 < n__4376__auto___48527)){
var G__48371_48529 = type;
var G__48371_48530__$1 = (((G__48371_48529 instanceof cljs.core.Keyword))?G__48371_48529.fqn:null);
switch (G__48371_48530__$1) {
case "compute":
var c__48188__auto___48532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48528,c__48188__auto___48532,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (__48528,c__48188__auto___48532,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async){
return (function (state_48384){
var state_val_48385 = (state_48384[(1)]);
if((state_val_48385 === (1))){
var state_48384__$1 = state_48384;
var statearr_48386_48533 = state_48384__$1;
(statearr_48386_48533[(2)] = null);

(statearr_48386_48533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (2))){
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48384__$1,(4),jobs);
} else {
if((state_val_48385 === (3))){
var inst_48382 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48384__$1,inst_48382);
} else {
if((state_val_48385 === (4))){
var inst_48374 = (state_48384[(2)]);
var inst_48375 = process.call(null,inst_48374);
var state_48384__$1 = state_48384;
if(cljs.core.truth_(inst_48375)){
var statearr_48387_48534 = state_48384__$1;
(statearr_48387_48534[(1)] = (5));

} else {
var statearr_48388_48535 = state_48384__$1;
(statearr_48388_48535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (5))){
var state_48384__$1 = state_48384;
var statearr_48389_48536 = state_48384__$1;
(statearr_48389_48536[(2)] = null);

(statearr_48389_48536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (6))){
var state_48384__$1 = state_48384;
var statearr_48390_48537 = state_48384__$1;
(statearr_48390_48537[(2)] = null);

(statearr_48390_48537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48385 === (7))){
var inst_48380 = (state_48384[(2)]);
var state_48384__$1 = state_48384;
var statearr_48391_48538 = state_48384__$1;
(statearr_48391_48538[(2)] = inst_48380);

(statearr_48391_48538[(1)] = (3));


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
});})(__48528,c__48188__auto___48532,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async))
;
return ((function (__48528,switch__48098__auto__,c__48188__auto___48532,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0 = (function (){
var statearr_48392 = [null,null,null,null,null,null,null];
(statearr_48392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__);

(statearr_48392[(1)] = (1));

return statearr_48392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1 = (function (state_48384){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48393){if((e48393 instanceof Object)){
var ex__48102__auto__ = e48393;
var statearr_48394_48539 = state_48384;
(statearr_48394_48539[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48540 = state_48384;
state_48384 = G__48540;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = function(state_48384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1.call(this,state_48384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__;
})()
;})(__48528,switch__48098__auto__,c__48188__auto___48532,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async))
})();
var state__48190__auto__ = (function (){var statearr_48395 = f__48189__auto__.call(null);
(statearr_48395[(6)] = c__48188__auto___48532);

return statearr_48395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(__48528,c__48188__auto___48532,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async))
);


break;
case "async":
var c__48188__auto___48541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48528,c__48188__auto___48541,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (__48528,c__48188__auto___48541,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async){
return (function (state_48408){
var state_val_48409 = (state_48408[(1)]);
if((state_val_48409 === (1))){
var state_48408__$1 = state_48408;
var statearr_48410_48542 = state_48408__$1;
(statearr_48410_48542[(2)] = null);

(statearr_48410_48542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (2))){
var state_48408__$1 = state_48408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48408__$1,(4),jobs);
} else {
if((state_val_48409 === (3))){
var inst_48406 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48408__$1,inst_48406);
} else {
if((state_val_48409 === (4))){
var inst_48398 = (state_48408[(2)]);
var inst_48399 = async.call(null,inst_48398);
var state_48408__$1 = state_48408;
if(cljs.core.truth_(inst_48399)){
var statearr_48411_48543 = state_48408__$1;
(statearr_48411_48543[(1)] = (5));

} else {
var statearr_48412_48544 = state_48408__$1;
(statearr_48412_48544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (5))){
var state_48408__$1 = state_48408;
var statearr_48413_48545 = state_48408__$1;
(statearr_48413_48545[(2)] = null);

(statearr_48413_48545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (6))){
var state_48408__$1 = state_48408;
var statearr_48414_48546 = state_48408__$1;
(statearr_48414_48546[(2)] = null);

(statearr_48414_48546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48409 === (7))){
var inst_48404 = (state_48408[(2)]);
var state_48408__$1 = state_48408;
var statearr_48415_48547 = state_48408__$1;
(statearr_48415_48547[(2)] = inst_48404);

(statearr_48415_48547[(1)] = (3));


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
});})(__48528,c__48188__auto___48541,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async))
;
return ((function (__48528,switch__48098__auto__,c__48188__auto___48541,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0 = (function (){
var statearr_48416 = [null,null,null,null,null,null,null];
(statearr_48416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__);

(statearr_48416[(1)] = (1));

return statearr_48416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1 = (function (state_48408){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48417){if((e48417 instanceof Object)){
var ex__48102__auto__ = e48417;
var statearr_48418_48548 = state_48408;
(statearr_48418_48548[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48549 = state_48408;
state_48408 = G__48549;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = function(state_48408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1.call(this,state_48408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__;
})()
;})(__48528,switch__48098__auto__,c__48188__auto___48541,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async))
})();
var state__48190__auto__ = (function (){var statearr_48419 = f__48189__auto__.call(null);
(statearr_48419[(6)] = c__48188__auto___48541);

return statearr_48419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(__48528,c__48188__auto___48541,G__48371_48529,G__48371_48530__$1,n__4376__auto___48527,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48371_48530__$1)].join('')));

}

var G__48550 = (__48528 + (1));
__48528 = G__48550;
continue;
} else {
}
break;
}

var c__48188__auto___48551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___48551,jobs,results,process,async){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___48551,jobs,results,process,async){
return (function (state_48441){
var state_val_48442 = (state_48441[(1)]);
if((state_val_48442 === (1))){
var state_48441__$1 = state_48441;
var statearr_48443_48552 = state_48441__$1;
(statearr_48443_48552[(2)] = null);

(statearr_48443_48552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48442 === (2))){
var state_48441__$1 = state_48441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48441__$1,(4),from);
} else {
if((state_val_48442 === (3))){
var inst_48439 = (state_48441[(2)]);
var state_48441__$1 = state_48441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48441__$1,inst_48439);
} else {
if((state_val_48442 === (4))){
var inst_48422 = (state_48441[(7)]);
var inst_48422__$1 = (state_48441[(2)]);
var inst_48423 = (inst_48422__$1 == null);
var state_48441__$1 = (function (){var statearr_48444 = state_48441;
(statearr_48444[(7)] = inst_48422__$1);

return statearr_48444;
})();
if(cljs.core.truth_(inst_48423)){
var statearr_48445_48553 = state_48441__$1;
(statearr_48445_48553[(1)] = (5));

} else {
var statearr_48446_48554 = state_48441__$1;
(statearr_48446_48554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48442 === (5))){
var inst_48425 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48441__$1 = state_48441;
var statearr_48447_48555 = state_48441__$1;
(statearr_48447_48555[(2)] = inst_48425);

(statearr_48447_48555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48442 === (6))){
var inst_48427 = (state_48441[(8)]);
var inst_48422 = (state_48441[(7)]);
var inst_48427__$1 = cljs.core.async.chan.call(null,(1));
var inst_48428 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48429 = [inst_48422,inst_48427__$1];
var inst_48430 = (new cljs.core.PersistentVector(null,2,(5),inst_48428,inst_48429,null));
var state_48441__$1 = (function (){var statearr_48448 = state_48441;
(statearr_48448[(8)] = inst_48427__$1);

return statearr_48448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48441__$1,(8),jobs,inst_48430);
} else {
if((state_val_48442 === (7))){
var inst_48437 = (state_48441[(2)]);
var state_48441__$1 = state_48441;
var statearr_48449_48556 = state_48441__$1;
(statearr_48449_48556[(2)] = inst_48437);

(statearr_48449_48556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48442 === (8))){
var inst_48427 = (state_48441[(8)]);
var inst_48432 = (state_48441[(2)]);
var state_48441__$1 = (function (){var statearr_48450 = state_48441;
(statearr_48450[(9)] = inst_48432);

return statearr_48450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48441__$1,(9),results,inst_48427);
} else {
if((state_val_48442 === (9))){
var inst_48434 = (state_48441[(2)]);
var state_48441__$1 = (function (){var statearr_48451 = state_48441;
(statearr_48451[(10)] = inst_48434);

return statearr_48451;
})();
var statearr_48452_48557 = state_48441__$1;
(statearr_48452_48557[(2)] = null);

(statearr_48452_48557[(1)] = (2));


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
});})(c__48188__auto___48551,jobs,results,process,async))
;
return ((function (switch__48098__auto__,c__48188__auto___48551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0 = (function (){
var statearr_48453 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__);

(statearr_48453[(1)] = (1));

return statearr_48453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1 = (function (state_48441){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48454){if((e48454 instanceof Object)){
var ex__48102__auto__ = e48454;
var statearr_48455_48558 = state_48441;
(statearr_48455_48558[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48559 = state_48441;
state_48441 = G__48559;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = function(state_48441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1.call(this,state_48441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___48551,jobs,results,process,async))
})();
var state__48190__auto__ = (function (){var statearr_48456 = f__48189__auto__.call(null);
(statearr_48456[(6)] = c__48188__auto___48551);

return statearr_48456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___48551,jobs,results,process,async))
);


var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__,jobs,results,process,async){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__,jobs,results,process,async){
return (function (state_48494){
var state_val_48495 = (state_48494[(1)]);
if((state_val_48495 === (7))){
var inst_48490 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
var statearr_48496_48560 = state_48494__$1;
(statearr_48496_48560[(2)] = inst_48490);

(statearr_48496_48560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (20))){
var state_48494__$1 = state_48494;
var statearr_48497_48561 = state_48494__$1;
(statearr_48497_48561[(2)] = null);

(statearr_48497_48561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (1))){
var state_48494__$1 = state_48494;
var statearr_48498_48562 = state_48494__$1;
(statearr_48498_48562[(2)] = null);

(statearr_48498_48562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (4))){
var inst_48459 = (state_48494[(7)]);
var inst_48459__$1 = (state_48494[(2)]);
var inst_48460 = (inst_48459__$1 == null);
var state_48494__$1 = (function (){var statearr_48499 = state_48494;
(statearr_48499[(7)] = inst_48459__$1);

return statearr_48499;
})();
if(cljs.core.truth_(inst_48460)){
var statearr_48500_48563 = state_48494__$1;
(statearr_48500_48563[(1)] = (5));

} else {
var statearr_48501_48564 = state_48494__$1;
(statearr_48501_48564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (15))){
var inst_48472 = (state_48494[(8)]);
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48494__$1,(18),to,inst_48472);
} else {
if((state_val_48495 === (21))){
var inst_48485 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
var statearr_48502_48565 = state_48494__$1;
(statearr_48502_48565[(2)] = inst_48485);

(statearr_48502_48565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (13))){
var inst_48487 = (state_48494[(2)]);
var state_48494__$1 = (function (){var statearr_48503 = state_48494;
(statearr_48503[(9)] = inst_48487);

return statearr_48503;
})();
var statearr_48504_48566 = state_48494__$1;
(statearr_48504_48566[(2)] = null);

(statearr_48504_48566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (6))){
var inst_48459 = (state_48494[(7)]);
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48494__$1,(11),inst_48459);
} else {
if((state_val_48495 === (17))){
var inst_48480 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
if(cljs.core.truth_(inst_48480)){
var statearr_48505_48567 = state_48494__$1;
(statearr_48505_48567[(1)] = (19));

} else {
var statearr_48506_48568 = state_48494__$1;
(statearr_48506_48568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (3))){
var inst_48492 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48494__$1,inst_48492);
} else {
if((state_val_48495 === (12))){
var inst_48469 = (state_48494[(10)]);
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48494__$1,(14),inst_48469);
} else {
if((state_val_48495 === (2))){
var state_48494__$1 = state_48494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48494__$1,(4),results);
} else {
if((state_val_48495 === (19))){
var state_48494__$1 = state_48494;
var statearr_48507_48569 = state_48494__$1;
(statearr_48507_48569[(2)] = null);

(statearr_48507_48569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (11))){
var inst_48469 = (state_48494[(2)]);
var state_48494__$1 = (function (){var statearr_48508 = state_48494;
(statearr_48508[(10)] = inst_48469);

return statearr_48508;
})();
var statearr_48509_48570 = state_48494__$1;
(statearr_48509_48570[(2)] = null);

(statearr_48509_48570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (9))){
var state_48494__$1 = state_48494;
var statearr_48510_48571 = state_48494__$1;
(statearr_48510_48571[(2)] = null);

(statearr_48510_48571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (5))){
var state_48494__$1 = state_48494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48511_48572 = state_48494__$1;
(statearr_48511_48572[(1)] = (8));

} else {
var statearr_48512_48573 = state_48494__$1;
(statearr_48512_48573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (14))){
var inst_48472 = (state_48494[(8)]);
var inst_48474 = (state_48494[(11)]);
var inst_48472__$1 = (state_48494[(2)]);
var inst_48473 = (inst_48472__$1 == null);
var inst_48474__$1 = cljs.core.not.call(null,inst_48473);
var state_48494__$1 = (function (){var statearr_48513 = state_48494;
(statearr_48513[(8)] = inst_48472__$1);

(statearr_48513[(11)] = inst_48474__$1);

return statearr_48513;
})();
if(inst_48474__$1){
var statearr_48514_48574 = state_48494__$1;
(statearr_48514_48574[(1)] = (15));

} else {
var statearr_48515_48575 = state_48494__$1;
(statearr_48515_48575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (16))){
var inst_48474 = (state_48494[(11)]);
var state_48494__$1 = state_48494;
var statearr_48516_48576 = state_48494__$1;
(statearr_48516_48576[(2)] = inst_48474);

(statearr_48516_48576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (10))){
var inst_48466 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
var statearr_48517_48577 = state_48494__$1;
(statearr_48517_48577[(2)] = inst_48466);

(statearr_48517_48577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (18))){
var inst_48477 = (state_48494[(2)]);
var state_48494__$1 = state_48494;
var statearr_48518_48578 = state_48494__$1;
(statearr_48518_48578[(2)] = inst_48477);

(statearr_48518_48578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48495 === (8))){
var inst_48463 = cljs.core.async.close_BANG_.call(null,to);
var state_48494__$1 = state_48494;
var statearr_48519_48579 = state_48494__$1;
(statearr_48519_48579[(2)] = inst_48463);

(statearr_48519_48579[(1)] = (10));


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
});})(c__48188__auto__,jobs,results,process,async))
;
return ((function (switch__48098__auto__,c__48188__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0 = (function (){
var statearr_48520 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__);

(statearr_48520[(1)] = (1));

return statearr_48520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1 = (function (state_48494){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48521){if((e48521 instanceof Object)){
var ex__48102__auto__ = e48521;
var statearr_48522_48580 = state_48494;
(statearr_48522_48580[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48581 = state_48494;
state_48494 = G__48581;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__ = function(state_48494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1.call(this,state_48494);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48099__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__,jobs,results,process,async))
})();
var state__48190__auto__ = (function (){var statearr_48523 = f__48189__auto__.call(null);
(statearr_48523[(6)] = c__48188__auto__);

return statearr_48523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__,jobs,results,process,async))
);

return c__48188__auto__;
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
var G__48583 = arguments.length;
switch (G__48583) {
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
var G__48586 = arguments.length;
switch (G__48586) {
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
var G__48589 = arguments.length;
switch (G__48589) {
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
var c__48188__auto___48638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___48638,tc,fc){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___48638,tc,fc){
return (function (state_48615){
var state_val_48616 = (state_48615[(1)]);
if((state_val_48616 === (7))){
var inst_48611 = (state_48615[(2)]);
var state_48615__$1 = state_48615;
var statearr_48617_48639 = state_48615__$1;
(statearr_48617_48639[(2)] = inst_48611);

(statearr_48617_48639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (1))){
var state_48615__$1 = state_48615;
var statearr_48618_48640 = state_48615__$1;
(statearr_48618_48640[(2)] = null);

(statearr_48618_48640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (4))){
var inst_48592 = (state_48615[(7)]);
var inst_48592__$1 = (state_48615[(2)]);
var inst_48593 = (inst_48592__$1 == null);
var state_48615__$1 = (function (){var statearr_48619 = state_48615;
(statearr_48619[(7)] = inst_48592__$1);

return statearr_48619;
})();
if(cljs.core.truth_(inst_48593)){
var statearr_48620_48641 = state_48615__$1;
(statearr_48620_48641[(1)] = (5));

} else {
var statearr_48621_48642 = state_48615__$1;
(statearr_48621_48642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (13))){
var state_48615__$1 = state_48615;
var statearr_48622_48643 = state_48615__$1;
(statearr_48622_48643[(2)] = null);

(statearr_48622_48643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (6))){
var inst_48592 = (state_48615[(7)]);
var inst_48598 = p.call(null,inst_48592);
var state_48615__$1 = state_48615;
if(cljs.core.truth_(inst_48598)){
var statearr_48623_48644 = state_48615__$1;
(statearr_48623_48644[(1)] = (9));

} else {
var statearr_48624_48645 = state_48615__$1;
(statearr_48624_48645[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (3))){
var inst_48613 = (state_48615[(2)]);
var state_48615__$1 = state_48615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48615__$1,inst_48613);
} else {
if((state_val_48616 === (12))){
var state_48615__$1 = state_48615;
var statearr_48625_48646 = state_48615__$1;
(statearr_48625_48646[(2)] = null);

(statearr_48625_48646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (2))){
var state_48615__$1 = state_48615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48615__$1,(4),ch);
} else {
if((state_val_48616 === (11))){
var inst_48592 = (state_48615[(7)]);
var inst_48602 = (state_48615[(2)]);
var state_48615__$1 = state_48615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48615__$1,(8),inst_48602,inst_48592);
} else {
if((state_val_48616 === (9))){
var state_48615__$1 = state_48615;
var statearr_48626_48647 = state_48615__$1;
(statearr_48626_48647[(2)] = tc);

(statearr_48626_48647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (5))){
var inst_48595 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48596 = cljs.core.async.close_BANG_.call(null,fc);
var state_48615__$1 = (function (){var statearr_48627 = state_48615;
(statearr_48627[(8)] = inst_48595);

return statearr_48627;
})();
var statearr_48628_48648 = state_48615__$1;
(statearr_48628_48648[(2)] = inst_48596);

(statearr_48628_48648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (14))){
var inst_48609 = (state_48615[(2)]);
var state_48615__$1 = state_48615;
var statearr_48629_48649 = state_48615__$1;
(statearr_48629_48649[(2)] = inst_48609);

(statearr_48629_48649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (10))){
var state_48615__$1 = state_48615;
var statearr_48630_48650 = state_48615__$1;
(statearr_48630_48650[(2)] = fc);

(statearr_48630_48650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48616 === (8))){
var inst_48604 = (state_48615[(2)]);
var state_48615__$1 = state_48615;
if(cljs.core.truth_(inst_48604)){
var statearr_48631_48651 = state_48615__$1;
(statearr_48631_48651[(1)] = (12));

} else {
var statearr_48632_48652 = state_48615__$1;
(statearr_48632_48652[(1)] = (13));

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
});})(c__48188__auto___48638,tc,fc))
;
return ((function (switch__48098__auto__,c__48188__auto___48638,tc,fc){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_48633 = [null,null,null,null,null,null,null,null,null];
(statearr_48633[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_48633[(1)] = (1));

return statearr_48633;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_48615){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48634){if((e48634 instanceof Object)){
var ex__48102__auto__ = e48634;
var statearr_48635_48653 = state_48615;
(statearr_48635_48653[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48654 = state_48615;
state_48615 = G__48654;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_48615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_48615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___48638,tc,fc))
})();
var state__48190__auto__ = (function (){var statearr_48636 = f__48189__auto__.call(null);
(statearr_48636[(6)] = c__48188__auto___48638);

return statearr_48636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___48638,tc,fc))
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
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__){
return (function (state_48675){
var state_val_48676 = (state_48675[(1)]);
if((state_val_48676 === (7))){
var inst_48671 = (state_48675[(2)]);
var state_48675__$1 = state_48675;
var statearr_48677_48695 = state_48675__$1;
(statearr_48677_48695[(2)] = inst_48671);

(statearr_48677_48695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (1))){
var inst_48655 = init;
var state_48675__$1 = (function (){var statearr_48678 = state_48675;
(statearr_48678[(7)] = inst_48655);

return statearr_48678;
})();
var statearr_48679_48696 = state_48675__$1;
(statearr_48679_48696[(2)] = null);

(statearr_48679_48696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (4))){
var inst_48658 = (state_48675[(8)]);
var inst_48658__$1 = (state_48675[(2)]);
var inst_48659 = (inst_48658__$1 == null);
var state_48675__$1 = (function (){var statearr_48680 = state_48675;
(statearr_48680[(8)] = inst_48658__$1);

return statearr_48680;
})();
if(cljs.core.truth_(inst_48659)){
var statearr_48681_48697 = state_48675__$1;
(statearr_48681_48697[(1)] = (5));

} else {
var statearr_48682_48698 = state_48675__$1;
(statearr_48682_48698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (6))){
var inst_48655 = (state_48675[(7)]);
var inst_48658 = (state_48675[(8)]);
var inst_48662 = (state_48675[(9)]);
var inst_48662__$1 = f.call(null,inst_48655,inst_48658);
var inst_48663 = cljs.core.reduced_QMARK_.call(null,inst_48662__$1);
var state_48675__$1 = (function (){var statearr_48683 = state_48675;
(statearr_48683[(9)] = inst_48662__$1);

return statearr_48683;
})();
if(inst_48663){
var statearr_48684_48699 = state_48675__$1;
(statearr_48684_48699[(1)] = (8));

} else {
var statearr_48685_48700 = state_48675__$1;
(statearr_48685_48700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (3))){
var inst_48673 = (state_48675[(2)]);
var state_48675__$1 = state_48675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48675__$1,inst_48673);
} else {
if((state_val_48676 === (2))){
var state_48675__$1 = state_48675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48675__$1,(4),ch);
} else {
if((state_val_48676 === (9))){
var inst_48662 = (state_48675[(9)]);
var inst_48655 = inst_48662;
var state_48675__$1 = (function (){var statearr_48686 = state_48675;
(statearr_48686[(7)] = inst_48655);

return statearr_48686;
})();
var statearr_48687_48701 = state_48675__$1;
(statearr_48687_48701[(2)] = null);

(statearr_48687_48701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (5))){
var inst_48655 = (state_48675[(7)]);
var state_48675__$1 = state_48675;
var statearr_48688_48702 = state_48675__$1;
(statearr_48688_48702[(2)] = inst_48655);

(statearr_48688_48702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (10))){
var inst_48669 = (state_48675[(2)]);
var state_48675__$1 = state_48675;
var statearr_48689_48703 = state_48675__$1;
(statearr_48689_48703[(2)] = inst_48669);

(statearr_48689_48703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48676 === (8))){
var inst_48662 = (state_48675[(9)]);
var inst_48665 = cljs.core.deref.call(null,inst_48662);
var state_48675__$1 = state_48675;
var statearr_48690_48704 = state_48675__$1;
(statearr_48690_48704[(2)] = inst_48665);

(statearr_48690_48704[(1)] = (10));


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
});})(c__48188__auto__))
;
return ((function (switch__48098__auto__,c__48188__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48099__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48099__auto____0 = (function (){
var statearr_48691 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48691[(0)] = cljs$core$async$reduce_$_state_machine__48099__auto__);

(statearr_48691[(1)] = (1));

return statearr_48691;
});
var cljs$core$async$reduce_$_state_machine__48099__auto____1 = (function (state_48675){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48692){if((e48692 instanceof Object)){
var ex__48102__auto__ = e48692;
var statearr_48693_48705 = state_48675;
(statearr_48693_48705[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48706 = state_48675;
state_48675 = G__48706;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48099__auto__ = function(state_48675){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48099__auto____1.call(this,state_48675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48099__auto____0;
cljs$core$async$reduce_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48099__auto____1;
return cljs$core$async$reduce_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__))
})();
var state__48190__auto__ = (function (){var statearr_48694 = f__48189__auto__.call(null);
(statearr_48694[(6)] = c__48188__auto__);

return statearr_48694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__))
);

return c__48188__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__,f__$1){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__,f__$1){
return (function (state_48712){
var state_val_48713 = (state_48712[(1)]);
if((state_val_48713 === (1))){
var inst_48707 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48712__$1 = state_48712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48712__$1,(2),inst_48707);
} else {
if((state_val_48713 === (2))){
var inst_48709 = (state_48712[(2)]);
var inst_48710 = f__$1.call(null,inst_48709);
var state_48712__$1 = state_48712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48712__$1,inst_48710);
} else {
return null;
}
}
});})(c__48188__auto__,f__$1))
;
return ((function (switch__48098__auto__,c__48188__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48099__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48099__auto____0 = (function (){
var statearr_48714 = [null,null,null,null,null,null,null];
(statearr_48714[(0)] = cljs$core$async$transduce_$_state_machine__48099__auto__);

(statearr_48714[(1)] = (1));

return statearr_48714;
});
var cljs$core$async$transduce_$_state_machine__48099__auto____1 = (function (state_48712){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48715){if((e48715 instanceof Object)){
var ex__48102__auto__ = e48715;
var statearr_48716_48718 = state_48712;
(statearr_48716_48718[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48719 = state_48712;
state_48712 = G__48719;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48099__auto__ = function(state_48712){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48099__auto____1.call(this,state_48712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48099__auto____0;
cljs$core$async$transduce_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48099__auto____1;
return cljs$core$async$transduce_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__,f__$1))
})();
var state__48190__auto__ = (function (){var statearr_48717 = f__48189__auto__.call(null);
(statearr_48717[(6)] = c__48188__auto__);

return statearr_48717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__,f__$1))
);

return c__48188__auto__;
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
var G__48721 = arguments.length;
switch (G__48721) {
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
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__){
return (function (state_48746){
var state_val_48747 = (state_48746[(1)]);
if((state_val_48747 === (7))){
var inst_48728 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48748_48769 = state_48746__$1;
(statearr_48748_48769[(2)] = inst_48728);

(statearr_48748_48769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (1))){
var inst_48722 = cljs.core.seq.call(null,coll);
var inst_48723 = inst_48722;
var state_48746__$1 = (function (){var statearr_48749 = state_48746;
(statearr_48749[(7)] = inst_48723);

return statearr_48749;
})();
var statearr_48750_48770 = state_48746__$1;
(statearr_48750_48770[(2)] = null);

(statearr_48750_48770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (4))){
var inst_48723 = (state_48746[(7)]);
var inst_48726 = cljs.core.first.call(null,inst_48723);
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48746__$1,(7),ch,inst_48726);
} else {
if((state_val_48747 === (13))){
var inst_48740 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48751_48771 = state_48746__$1;
(statearr_48751_48771[(2)] = inst_48740);

(statearr_48751_48771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (6))){
var inst_48731 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
if(cljs.core.truth_(inst_48731)){
var statearr_48752_48772 = state_48746__$1;
(statearr_48752_48772[(1)] = (8));

} else {
var statearr_48753_48773 = state_48746__$1;
(statearr_48753_48773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (3))){
var inst_48744 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48746__$1,inst_48744);
} else {
if((state_val_48747 === (12))){
var state_48746__$1 = state_48746;
var statearr_48754_48774 = state_48746__$1;
(statearr_48754_48774[(2)] = null);

(statearr_48754_48774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (2))){
var inst_48723 = (state_48746[(7)]);
var state_48746__$1 = state_48746;
if(cljs.core.truth_(inst_48723)){
var statearr_48755_48775 = state_48746__$1;
(statearr_48755_48775[(1)] = (4));

} else {
var statearr_48756_48776 = state_48746__$1;
(statearr_48756_48776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (11))){
var inst_48737 = cljs.core.async.close_BANG_.call(null,ch);
var state_48746__$1 = state_48746;
var statearr_48757_48777 = state_48746__$1;
(statearr_48757_48777[(2)] = inst_48737);

(statearr_48757_48777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (9))){
var state_48746__$1 = state_48746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48758_48778 = state_48746__$1;
(statearr_48758_48778[(1)] = (11));

} else {
var statearr_48759_48779 = state_48746__$1;
(statearr_48759_48779[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (5))){
var inst_48723 = (state_48746[(7)]);
var state_48746__$1 = state_48746;
var statearr_48760_48780 = state_48746__$1;
(statearr_48760_48780[(2)] = inst_48723);

(statearr_48760_48780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (10))){
var inst_48742 = (state_48746[(2)]);
var state_48746__$1 = state_48746;
var statearr_48761_48781 = state_48746__$1;
(statearr_48761_48781[(2)] = inst_48742);

(statearr_48761_48781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48747 === (8))){
var inst_48723 = (state_48746[(7)]);
var inst_48733 = cljs.core.next.call(null,inst_48723);
var inst_48723__$1 = inst_48733;
var state_48746__$1 = (function (){var statearr_48762 = state_48746;
(statearr_48762[(7)] = inst_48723__$1);

return statearr_48762;
})();
var statearr_48763_48782 = state_48746__$1;
(statearr_48763_48782[(2)] = null);

(statearr_48763_48782[(1)] = (2));


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
});})(c__48188__auto__))
;
return ((function (switch__48098__auto__,c__48188__auto__){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_48764 = [null,null,null,null,null,null,null,null];
(statearr_48764[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_48764[(1)] = (1));

return statearr_48764;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_48746){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e48765){if((e48765 instanceof Object)){
var ex__48102__auto__ = e48765;
var statearr_48766_48783 = state_48746;
(statearr_48766_48783[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48784 = state_48746;
state_48746 = G__48784;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_48746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_48746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__))
})();
var state__48190__auto__ = (function (){var statearr_48767 = f__48189__auto__.call(null);
(statearr_48767[(6)] = c__48188__auto__);

return statearr_48767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__))
);

return c__48188__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48785 = (function (ch,cs,meta48786){
this.ch = ch;
this.cs = cs;
this.meta48786 = meta48786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48787,meta48786__$1){
var self__ = this;
var _48787__$1 = this;
return (new cljs.core.async.t_cljs$core$async48785(self__.ch,self__.cs,meta48786__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48787){
var self__ = this;
var _48787__$1 = this;
return self__.meta48786;
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48786","meta48786",-498867602,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48785";

cljs.core.async.t_cljs$core$async48785.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48785");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48785.
 */
cljs.core.async.__GT_t_cljs$core$async48785 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48785(ch__$1,cs__$1,meta48786){
return (new cljs.core.async.t_cljs$core$async48785(ch__$1,cs__$1,meta48786));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48785(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48188__auto___49007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49007,cs,m,dchan,dctr,done){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49007,cs,m,dchan,dctr,done){
return (function (state_48922){
var state_val_48923 = (state_48922[(1)]);
if((state_val_48923 === (7))){
var inst_48918 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48924_49008 = state_48922__$1;
(statearr_48924_49008[(2)] = inst_48918);

(statearr_48924_49008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (20))){
var inst_48821 = (state_48922[(7)]);
var inst_48833 = cljs.core.first.call(null,inst_48821);
var inst_48834 = cljs.core.nth.call(null,inst_48833,(0),null);
var inst_48835 = cljs.core.nth.call(null,inst_48833,(1),null);
var state_48922__$1 = (function (){var statearr_48925 = state_48922;
(statearr_48925[(8)] = inst_48834);

return statearr_48925;
})();
if(cljs.core.truth_(inst_48835)){
var statearr_48926_49009 = state_48922__$1;
(statearr_48926_49009[(1)] = (22));

} else {
var statearr_48927_49010 = state_48922__$1;
(statearr_48927_49010[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (27))){
var inst_48790 = (state_48922[(9)]);
var inst_48870 = (state_48922[(10)]);
var inst_48863 = (state_48922[(11)]);
var inst_48865 = (state_48922[(12)]);
var inst_48870__$1 = cljs.core._nth.call(null,inst_48863,inst_48865);
var inst_48871 = cljs.core.async.put_BANG_.call(null,inst_48870__$1,inst_48790,done);
var state_48922__$1 = (function (){var statearr_48928 = state_48922;
(statearr_48928[(10)] = inst_48870__$1);

return statearr_48928;
})();
if(cljs.core.truth_(inst_48871)){
var statearr_48929_49011 = state_48922__$1;
(statearr_48929_49011[(1)] = (30));

} else {
var statearr_48930_49012 = state_48922__$1;
(statearr_48930_49012[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (1))){
var state_48922__$1 = state_48922;
var statearr_48931_49013 = state_48922__$1;
(statearr_48931_49013[(2)] = null);

(statearr_48931_49013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (24))){
var inst_48821 = (state_48922[(7)]);
var inst_48840 = (state_48922[(2)]);
var inst_48841 = cljs.core.next.call(null,inst_48821);
var inst_48799 = inst_48841;
var inst_48800 = null;
var inst_48801 = (0);
var inst_48802 = (0);
var state_48922__$1 = (function (){var statearr_48932 = state_48922;
(statearr_48932[(13)] = inst_48802);

(statearr_48932[(14)] = inst_48801);

(statearr_48932[(15)] = inst_48799);

(statearr_48932[(16)] = inst_48800);

(statearr_48932[(17)] = inst_48840);

return statearr_48932;
})();
var statearr_48933_49014 = state_48922__$1;
(statearr_48933_49014[(2)] = null);

(statearr_48933_49014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (39))){
var state_48922__$1 = state_48922;
var statearr_48937_49015 = state_48922__$1;
(statearr_48937_49015[(2)] = null);

(statearr_48937_49015[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (4))){
var inst_48790 = (state_48922[(9)]);
var inst_48790__$1 = (state_48922[(2)]);
var inst_48791 = (inst_48790__$1 == null);
var state_48922__$1 = (function (){var statearr_48938 = state_48922;
(statearr_48938[(9)] = inst_48790__$1);

return statearr_48938;
})();
if(cljs.core.truth_(inst_48791)){
var statearr_48939_49016 = state_48922__$1;
(statearr_48939_49016[(1)] = (5));

} else {
var statearr_48940_49017 = state_48922__$1;
(statearr_48940_49017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (15))){
var inst_48802 = (state_48922[(13)]);
var inst_48801 = (state_48922[(14)]);
var inst_48799 = (state_48922[(15)]);
var inst_48800 = (state_48922[(16)]);
var inst_48817 = (state_48922[(2)]);
var inst_48818 = (inst_48802 + (1));
var tmp48934 = inst_48801;
var tmp48935 = inst_48799;
var tmp48936 = inst_48800;
var inst_48799__$1 = tmp48935;
var inst_48800__$1 = tmp48936;
var inst_48801__$1 = tmp48934;
var inst_48802__$1 = inst_48818;
var state_48922__$1 = (function (){var statearr_48941 = state_48922;
(statearr_48941[(13)] = inst_48802__$1);

(statearr_48941[(14)] = inst_48801__$1);

(statearr_48941[(18)] = inst_48817);

(statearr_48941[(15)] = inst_48799__$1);

(statearr_48941[(16)] = inst_48800__$1);

return statearr_48941;
})();
var statearr_48942_49018 = state_48922__$1;
(statearr_48942_49018[(2)] = null);

(statearr_48942_49018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (21))){
var inst_48844 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48946_49019 = state_48922__$1;
(statearr_48946_49019[(2)] = inst_48844);

(statearr_48946_49019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (31))){
var inst_48870 = (state_48922[(10)]);
var inst_48874 = done.call(null,null);
var inst_48875 = cljs.core.async.untap_STAR_.call(null,m,inst_48870);
var state_48922__$1 = (function (){var statearr_48947 = state_48922;
(statearr_48947[(19)] = inst_48874);

return statearr_48947;
})();
var statearr_48948_49020 = state_48922__$1;
(statearr_48948_49020[(2)] = inst_48875);

(statearr_48948_49020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (32))){
var inst_48864 = (state_48922[(20)]);
var inst_48863 = (state_48922[(11)]);
var inst_48862 = (state_48922[(21)]);
var inst_48865 = (state_48922[(12)]);
var inst_48877 = (state_48922[(2)]);
var inst_48878 = (inst_48865 + (1));
var tmp48943 = inst_48864;
var tmp48944 = inst_48863;
var tmp48945 = inst_48862;
var inst_48862__$1 = tmp48945;
var inst_48863__$1 = tmp48944;
var inst_48864__$1 = tmp48943;
var inst_48865__$1 = inst_48878;
var state_48922__$1 = (function (){var statearr_48949 = state_48922;
(statearr_48949[(20)] = inst_48864__$1);

(statearr_48949[(11)] = inst_48863__$1);

(statearr_48949[(21)] = inst_48862__$1);

(statearr_48949[(22)] = inst_48877);

(statearr_48949[(12)] = inst_48865__$1);

return statearr_48949;
})();
var statearr_48950_49021 = state_48922__$1;
(statearr_48950_49021[(2)] = null);

(statearr_48950_49021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (40))){
var inst_48890 = (state_48922[(23)]);
var inst_48894 = done.call(null,null);
var inst_48895 = cljs.core.async.untap_STAR_.call(null,m,inst_48890);
var state_48922__$1 = (function (){var statearr_48951 = state_48922;
(statearr_48951[(24)] = inst_48894);

return statearr_48951;
})();
var statearr_48952_49022 = state_48922__$1;
(statearr_48952_49022[(2)] = inst_48895);

(statearr_48952_49022[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (33))){
var inst_48881 = (state_48922[(25)]);
var inst_48883 = cljs.core.chunked_seq_QMARK_.call(null,inst_48881);
var state_48922__$1 = state_48922;
if(inst_48883){
var statearr_48953_49023 = state_48922__$1;
(statearr_48953_49023[(1)] = (36));

} else {
var statearr_48954_49024 = state_48922__$1;
(statearr_48954_49024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (13))){
var inst_48811 = (state_48922[(26)]);
var inst_48814 = cljs.core.async.close_BANG_.call(null,inst_48811);
var state_48922__$1 = state_48922;
var statearr_48955_49025 = state_48922__$1;
(statearr_48955_49025[(2)] = inst_48814);

(statearr_48955_49025[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (22))){
var inst_48834 = (state_48922[(8)]);
var inst_48837 = cljs.core.async.close_BANG_.call(null,inst_48834);
var state_48922__$1 = state_48922;
var statearr_48956_49026 = state_48922__$1;
(statearr_48956_49026[(2)] = inst_48837);

(statearr_48956_49026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (36))){
var inst_48881 = (state_48922[(25)]);
var inst_48885 = cljs.core.chunk_first.call(null,inst_48881);
var inst_48886 = cljs.core.chunk_rest.call(null,inst_48881);
var inst_48887 = cljs.core.count.call(null,inst_48885);
var inst_48862 = inst_48886;
var inst_48863 = inst_48885;
var inst_48864 = inst_48887;
var inst_48865 = (0);
var state_48922__$1 = (function (){var statearr_48957 = state_48922;
(statearr_48957[(20)] = inst_48864);

(statearr_48957[(11)] = inst_48863);

(statearr_48957[(21)] = inst_48862);

(statearr_48957[(12)] = inst_48865);

return statearr_48957;
})();
var statearr_48958_49027 = state_48922__$1;
(statearr_48958_49027[(2)] = null);

(statearr_48958_49027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (41))){
var inst_48881 = (state_48922[(25)]);
var inst_48897 = (state_48922[(2)]);
var inst_48898 = cljs.core.next.call(null,inst_48881);
var inst_48862 = inst_48898;
var inst_48863 = null;
var inst_48864 = (0);
var inst_48865 = (0);
var state_48922__$1 = (function (){var statearr_48959 = state_48922;
(statearr_48959[(27)] = inst_48897);

(statearr_48959[(20)] = inst_48864);

(statearr_48959[(11)] = inst_48863);

(statearr_48959[(21)] = inst_48862);

(statearr_48959[(12)] = inst_48865);

return statearr_48959;
})();
var statearr_48960_49028 = state_48922__$1;
(statearr_48960_49028[(2)] = null);

(statearr_48960_49028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (43))){
var state_48922__$1 = state_48922;
var statearr_48961_49029 = state_48922__$1;
(statearr_48961_49029[(2)] = null);

(statearr_48961_49029[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (29))){
var inst_48906 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48962_49030 = state_48922__$1;
(statearr_48962_49030[(2)] = inst_48906);

(statearr_48962_49030[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (44))){
var inst_48915 = (state_48922[(2)]);
var state_48922__$1 = (function (){var statearr_48963 = state_48922;
(statearr_48963[(28)] = inst_48915);

return statearr_48963;
})();
var statearr_48964_49031 = state_48922__$1;
(statearr_48964_49031[(2)] = null);

(statearr_48964_49031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (6))){
var inst_48854 = (state_48922[(29)]);
var inst_48853 = cljs.core.deref.call(null,cs);
var inst_48854__$1 = cljs.core.keys.call(null,inst_48853);
var inst_48855 = cljs.core.count.call(null,inst_48854__$1);
var inst_48856 = cljs.core.reset_BANG_.call(null,dctr,inst_48855);
var inst_48861 = cljs.core.seq.call(null,inst_48854__$1);
var inst_48862 = inst_48861;
var inst_48863 = null;
var inst_48864 = (0);
var inst_48865 = (0);
var state_48922__$1 = (function (){var statearr_48965 = state_48922;
(statearr_48965[(29)] = inst_48854__$1);

(statearr_48965[(20)] = inst_48864);

(statearr_48965[(11)] = inst_48863);

(statearr_48965[(21)] = inst_48862);

(statearr_48965[(12)] = inst_48865);

(statearr_48965[(30)] = inst_48856);

return statearr_48965;
})();
var statearr_48966_49032 = state_48922__$1;
(statearr_48966_49032[(2)] = null);

(statearr_48966_49032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (28))){
var inst_48881 = (state_48922[(25)]);
var inst_48862 = (state_48922[(21)]);
var inst_48881__$1 = cljs.core.seq.call(null,inst_48862);
var state_48922__$1 = (function (){var statearr_48967 = state_48922;
(statearr_48967[(25)] = inst_48881__$1);

return statearr_48967;
})();
if(inst_48881__$1){
var statearr_48968_49033 = state_48922__$1;
(statearr_48968_49033[(1)] = (33));

} else {
var statearr_48969_49034 = state_48922__$1;
(statearr_48969_49034[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (25))){
var inst_48864 = (state_48922[(20)]);
var inst_48865 = (state_48922[(12)]);
var inst_48867 = (inst_48865 < inst_48864);
var inst_48868 = inst_48867;
var state_48922__$1 = state_48922;
if(cljs.core.truth_(inst_48868)){
var statearr_48970_49035 = state_48922__$1;
(statearr_48970_49035[(1)] = (27));

} else {
var statearr_48971_49036 = state_48922__$1;
(statearr_48971_49036[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (34))){
var state_48922__$1 = state_48922;
var statearr_48972_49037 = state_48922__$1;
(statearr_48972_49037[(2)] = null);

(statearr_48972_49037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (17))){
var state_48922__$1 = state_48922;
var statearr_48973_49038 = state_48922__$1;
(statearr_48973_49038[(2)] = null);

(statearr_48973_49038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (3))){
var inst_48920 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48922__$1,inst_48920);
} else {
if((state_val_48923 === (12))){
var inst_48849 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48974_49039 = state_48922__$1;
(statearr_48974_49039[(2)] = inst_48849);

(statearr_48974_49039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (2))){
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48922__$1,(4),ch);
} else {
if((state_val_48923 === (23))){
var state_48922__$1 = state_48922;
var statearr_48975_49040 = state_48922__$1;
(statearr_48975_49040[(2)] = null);

(statearr_48975_49040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (35))){
var inst_48904 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48976_49041 = state_48922__$1;
(statearr_48976_49041[(2)] = inst_48904);

(statearr_48976_49041[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (19))){
var inst_48821 = (state_48922[(7)]);
var inst_48825 = cljs.core.chunk_first.call(null,inst_48821);
var inst_48826 = cljs.core.chunk_rest.call(null,inst_48821);
var inst_48827 = cljs.core.count.call(null,inst_48825);
var inst_48799 = inst_48826;
var inst_48800 = inst_48825;
var inst_48801 = inst_48827;
var inst_48802 = (0);
var state_48922__$1 = (function (){var statearr_48977 = state_48922;
(statearr_48977[(13)] = inst_48802);

(statearr_48977[(14)] = inst_48801);

(statearr_48977[(15)] = inst_48799);

(statearr_48977[(16)] = inst_48800);

return statearr_48977;
})();
var statearr_48978_49042 = state_48922__$1;
(statearr_48978_49042[(2)] = null);

(statearr_48978_49042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (11))){
var inst_48821 = (state_48922[(7)]);
var inst_48799 = (state_48922[(15)]);
var inst_48821__$1 = cljs.core.seq.call(null,inst_48799);
var state_48922__$1 = (function (){var statearr_48979 = state_48922;
(statearr_48979[(7)] = inst_48821__$1);

return statearr_48979;
})();
if(inst_48821__$1){
var statearr_48980_49043 = state_48922__$1;
(statearr_48980_49043[(1)] = (16));

} else {
var statearr_48981_49044 = state_48922__$1;
(statearr_48981_49044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (9))){
var inst_48851 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48982_49045 = state_48922__$1;
(statearr_48982_49045[(2)] = inst_48851);

(statearr_48982_49045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (5))){
var inst_48797 = cljs.core.deref.call(null,cs);
var inst_48798 = cljs.core.seq.call(null,inst_48797);
var inst_48799 = inst_48798;
var inst_48800 = null;
var inst_48801 = (0);
var inst_48802 = (0);
var state_48922__$1 = (function (){var statearr_48983 = state_48922;
(statearr_48983[(13)] = inst_48802);

(statearr_48983[(14)] = inst_48801);

(statearr_48983[(15)] = inst_48799);

(statearr_48983[(16)] = inst_48800);

return statearr_48983;
})();
var statearr_48984_49046 = state_48922__$1;
(statearr_48984_49046[(2)] = null);

(statearr_48984_49046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (14))){
var state_48922__$1 = state_48922;
var statearr_48985_49047 = state_48922__$1;
(statearr_48985_49047[(2)] = null);

(statearr_48985_49047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (45))){
var inst_48912 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48986_49048 = state_48922__$1;
(statearr_48986_49048[(2)] = inst_48912);

(statearr_48986_49048[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (26))){
var inst_48854 = (state_48922[(29)]);
var inst_48908 = (state_48922[(2)]);
var inst_48909 = cljs.core.seq.call(null,inst_48854);
var state_48922__$1 = (function (){var statearr_48987 = state_48922;
(statearr_48987[(31)] = inst_48908);

return statearr_48987;
})();
if(inst_48909){
var statearr_48988_49049 = state_48922__$1;
(statearr_48988_49049[(1)] = (42));

} else {
var statearr_48989_49050 = state_48922__$1;
(statearr_48989_49050[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (16))){
var inst_48821 = (state_48922[(7)]);
var inst_48823 = cljs.core.chunked_seq_QMARK_.call(null,inst_48821);
var state_48922__$1 = state_48922;
if(inst_48823){
var statearr_48990_49051 = state_48922__$1;
(statearr_48990_49051[(1)] = (19));

} else {
var statearr_48991_49052 = state_48922__$1;
(statearr_48991_49052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (38))){
var inst_48901 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48992_49053 = state_48922__$1;
(statearr_48992_49053[(2)] = inst_48901);

(statearr_48992_49053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (30))){
var state_48922__$1 = state_48922;
var statearr_48993_49054 = state_48922__$1;
(statearr_48993_49054[(2)] = null);

(statearr_48993_49054[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (10))){
var inst_48802 = (state_48922[(13)]);
var inst_48800 = (state_48922[(16)]);
var inst_48810 = cljs.core._nth.call(null,inst_48800,inst_48802);
var inst_48811 = cljs.core.nth.call(null,inst_48810,(0),null);
var inst_48812 = cljs.core.nth.call(null,inst_48810,(1),null);
var state_48922__$1 = (function (){var statearr_48994 = state_48922;
(statearr_48994[(26)] = inst_48811);

return statearr_48994;
})();
if(cljs.core.truth_(inst_48812)){
var statearr_48995_49055 = state_48922__$1;
(statearr_48995_49055[(1)] = (13));

} else {
var statearr_48996_49056 = state_48922__$1;
(statearr_48996_49056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (18))){
var inst_48847 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48997_49057 = state_48922__$1;
(statearr_48997_49057[(2)] = inst_48847);

(statearr_48997_49057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (42))){
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48922__$1,(45),dchan);
} else {
if((state_val_48923 === (37))){
var inst_48790 = (state_48922[(9)]);
var inst_48881 = (state_48922[(25)]);
var inst_48890 = (state_48922[(23)]);
var inst_48890__$1 = cljs.core.first.call(null,inst_48881);
var inst_48891 = cljs.core.async.put_BANG_.call(null,inst_48890__$1,inst_48790,done);
var state_48922__$1 = (function (){var statearr_48998 = state_48922;
(statearr_48998[(23)] = inst_48890__$1);

return statearr_48998;
})();
if(cljs.core.truth_(inst_48891)){
var statearr_48999_49058 = state_48922__$1;
(statearr_48999_49058[(1)] = (39));

} else {
var statearr_49000_49059 = state_48922__$1;
(statearr_49000_49059[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (8))){
var inst_48802 = (state_48922[(13)]);
var inst_48801 = (state_48922[(14)]);
var inst_48804 = (inst_48802 < inst_48801);
var inst_48805 = inst_48804;
var state_48922__$1 = state_48922;
if(cljs.core.truth_(inst_48805)){
var statearr_49001_49060 = state_48922__$1;
(statearr_49001_49060[(1)] = (10));

} else {
var statearr_49002_49061 = state_48922__$1;
(statearr_49002_49061[(1)] = (11));

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
});})(c__48188__auto___49007,cs,m,dchan,dctr,done))
;
return ((function (switch__48098__auto__,c__48188__auto___49007,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48099__auto__ = null;
var cljs$core$async$mult_$_state_machine__48099__auto____0 = (function (){
var statearr_49003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49003[(0)] = cljs$core$async$mult_$_state_machine__48099__auto__);

(statearr_49003[(1)] = (1));

return statearr_49003;
});
var cljs$core$async$mult_$_state_machine__48099__auto____1 = (function (state_48922){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_48922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49004){if((e49004 instanceof Object)){
var ex__48102__auto__ = e49004;
var statearr_49005_49062 = state_48922;
(statearr_49005_49062[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49063 = state_48922;
state_48922 = G__49063;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48099__auto__ = function(state_48922){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48099__auto____1.call(this,state_48922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48099__auto____0;
cljs$core$async$mult_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48099__auto____1;
return cljs$core$async$mult_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49007,cs,m,dchan,dctr,done))
})();
var state__48190__auto__ = (function (){var statearr_49006 = f__48189__auto__.call(null);
(statearr_49006[(6)] = c__48188__auto___49007);

return statearr_49006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49007,cs,m,dchan,dctr,done))
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
var G__49065 = arguments.length;
switch (G__49065) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___49077 = arguments.length;
var i__4500__auto___49078 = (0);
while(true){
if((i__4500__auto___49078 < len__4499__auto___49077)){
args__4502__auto__.push((arguments[i__4500__auto___49078]));

var G__49079 = (i__4500__auto___49078 + (1));
i__4500__auto___49078 = G__49079;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49071){
var map__49072 = p__49071;
var map__49072__$1 = ((((!((map__49072 == null)))?(((((map__49072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49072):map__49072);
var opts = map__49072__$1;
var statearr_49074_49080 = state;
(statearr_49074_49080[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__49072,map__49072__$1,opts){
return (function (val){
var statearr_49075_49081 = state;
(statearr_49075_49081[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49072,map__49072__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_49076_49082 = state;
(statearr_49076_49082[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49067){
var G__49068 = cljs.core.first.call(null,seq49067);
var seq49067__$1 = cljs.core.next.call(null,seq49067);
var G__49069 = cljs.core.first.call(null,seq49067__$1);
var seq49067__$2 = cljs.core.next.call(null,seq49067__$1);
var G__49070 = cljs.core.first.call(null,seq49067__$2);
var seq49067__$3 = cljs.core.next.call(null,seq49067__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49068,G__49069,G__49070,seq49067__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49083 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49084){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49084 = meta49084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49085,meta49084__$1){
var self__ = this;
var _49085__$1 = this;
return (new cljs.core.async.t_cljs$core$async49083(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49084__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49085){
var self__ = this;
var _49085__$1 = this;
return self__.meta49084;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async49083.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49084","meta49084",-1732757272,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49083";

cljs.core.async.t_cljs$core$async49083.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49083");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49083.
 */
cljs.core.async.__GT_t_cljs$core$async49083 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49083(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49084){
return (new cljs.core.async.t_cljs$core$async49083(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49084));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49083(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48188__auto___49247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49247,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49247,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49187){
var state_val_49188 = (state_49187[(1)]);
if((state_val_49188 === (7))){
var inst_49102 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
var statearr_49189_49248 = state_49187__$1;
(statearr_49189_49248[(2)] = inst_49102);

(statearr_49189_49248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (20))){
var inst_49114 = (state_49187[(7)]);
var state_49187__$1 = state_49187;
var statearr_49190_49249 = state_49187__$1;
(statearr_49190_49249[(2)] = inst_49114);

(statearr_49190_49249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (27))){
var state_49187__$1 = state_49187;
var statearr_49191_49250 = state_49187__$1;
(statearr_49191_49250[(2)] = null);

(statearr_49191_49250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (1))){
var inst_49089 = (state_49187[(8)]);
var inst_49089__$1 = calc_state.call(null);
var inst_49091 = (inst_49089__$1 == null);
var inst_49092 = cljs.core.not.call(null,inst_49091);
var state_49187__$1 = (function (){var statearr_49192 = state_49187;
(statearr_49192[(8)] = inst_49089__$1);

return statearr_49192;
})();
if(inst_49092){
var statearr_49193_49251 = state_49187__$1;
(statearr_49193_49251[(1)] = (2));

} else {
var statearr_49194_49252 = state_49187__$1;
(statearr_49194_49252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (24))){
var inst_49147 = (state_49187[(9)]);
var inst_49138 = (state_49187[(10)]);
var inst_49161 = (state_49187[(11)]);
var inst_49161__$1 = inst_49138.call(null,inst_49147);
var state_49187__$1 = (function (){var statearr_49195 = state_49187;
(statearr_49195[(11)] = inst_49161__$1);

return statearr_49195;
})();
if(cljs.core.truth_(inst_49161__$1)){
var statearr_49196_49253 = state_49187__$1;
(statearr_49196_49253[(1)] = (29));

} else {
var statearr_49197_49254 = state_49187__$1;
(statearr_49197_49254[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (4))){
var inst_49105 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49105)){
var statearr_49198_49255 = state_49187__$1;
(statearr_49198_49255[(1)] = (8));

} else {
var statearr_49199_49256 = state_49187__$1;
(statearr_49199_49256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (15))){
var inst_49132 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49132)){
var statearr_49200_49257 = state_49187__$1;
(statearr_49200_49257[(1)] = (19));

} else {
var statearr_49201_49258 = state_49187__$1;
(statearr_49201_49258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (21))){
var inst_49137 = (state_49187[(12)]);
var inst_49137__$1 = (state_49187[(2)]);
var inst_49138 = cljs.core.get.call(null,inst_49137__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49139 = cljs.core.get.call(null,inst_49137__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49140 = cljs.core.get.call(null,inst_49137__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49187__$1 = (function (){var statearr_49202 = state_49187;
(statearr_49202[(10)] = inst_49138);

(statearr_49202[(13)] = inst_49139);

(statearr_49202[(12)] = inst_49137__$1);

return statearr_49202;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49187__$1,(22),inst_49140);
} else {
if((state_val_49188 === (31))){
var inst_49169 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49169)){
var statearr_49203_49259 = state_49187__$1;
(statearr_49203_49259[(1)] = (32));

} else {
var statearr_49204_49260 = state_49187__$1;
(statearr_49204_49260[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (32))){
var inst_49146 = (state_49187[(14)]);
var state_49187__$1 = state_49187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49187__$1,(35),out,inst_49146);
} else {
if((state_val_49188 === (33))){
var inst_49137 = (state_49187[(12)]);
var inst_49114 = inst_49137;
var state_49187__$1 = (function (){var statearr_49205 = state_49187;
(statearr_49205[(7)] = inst_49114);

return statearr_49205;
})();
var statearr_49206_49261 = state_49187__$1;
(statearr_49206_49261[(2)] = null);

(statearr_49206_49261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (13))){
var inst_49114 = (state_49187[(7)]);
var inst_49121 = inst_49114.cljs$lang$protocol_mask$partition0$;
var inst_49122 = (inst_49121 & (64));
var inst_49123 = inst_49114.cljs$core$ISeq$;
var inst_49124 = (cljs.core.PROTOCOL_SENTINEL === inst_49123);
var inst_49125 = ((inst_49122) || (inst_49124));
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49125)){
var statearr_49207_49262 = state_49187__$1;
(statearr_49207_49262[(1)] = (16));

} else {
var statearr_49208_49263 = state_49187__$1;
(statearr_49208_49263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (22))){
var inst_49147 = (state_49187[(9)]);
var inst_49146 = (state_49187[(14)]);
var inst_49145 = (state_49187[(2)]);
var inst_49146__$1 = cljs.core.nth.call(null,inst_49145,(0),null);
var inst_49147__$1 = cljs.core.nth.call(null,inst_49145,(1),null);
var inst_49148 = (inst_49146__$1 == null);
var inst_49149 = cljs.core._EQ_.call(null,inst_49147__$1,change);
var inst_49150 = ((inst_49148) || (inst_49149));
var state_49187__$1 = (function (){var statearr_49209 = state_49187;
(statearr_49209[(9)] = inst_49147__$1);

(statearr_49209[(14)] = inst_49146__$1);

return statearr_49209;
})();
if(cljs.core.truth_(inst_49150)){
var statearr_49210_49264 = state_49187__$1;
(statearr_49210_49264[(1)] = (23));

} else {
var statearr_49211_49265 = state_49187__$1;
(statearr_49211_49265[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (36))){
var inst_49137 = (state_49187[(12)]);
var inst_49114 = inst_49137;
var state_49187__$1 = (function (){var statearr_49212 = state_49187;
(statearr_49212[(7)] = inst_49114);

return statearr_49212;
})();
var statearr_49213_49266 = state_49187__$1;
(statearr_49213_49266[(2)] = null);

(statearr_49213_49266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (29))){
var inst_49161 = (state_49187[(11)]);
var state_49187__$1 = state_49187;
var statearr_49214_49267 = state_49187__$1;
(statearr_49214_49267[(2)] = inst_49161);

(statearr_49214_49267[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (6))){
var state_49187__$1 = state_49187;
var statearr_49215_49268 = state_49187__$1;
(statearr_49215_49268[(2)] = false);

(statearr_49215_49268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (28))){
var inst_49157 = (state_49187[(2)]);
var inst_49158 = calc_state.call(null);
var inst_49114 = inst_49158;
var state_49187__$1 = (function (){var statearr_49216 = state_49187;
(statearr_49216[(15)] = inst_49157);

(statearr_49216[(7)] = inst_49114);

return statearr_49216;
})();
var statearr_49217_49269 = state_49187__$1;
(statearr_49217_49269[(2)] = null);

(statearr_49217_49269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (25))){
var inst_49183 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
var statearr_49218_49270 = state_49187__$1;
(statearr_49218_49270[(2)] = inst_49183);

(statearr_49218_49270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (34))){
var inst_49181 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
var statearr_49219_49271 = state_49187__$1;
(statearr_49219_49271[(2)] = inst_49181);

(statearr_49219_49271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (17))){
var state_49187__$1 = state_49187;
var statearr_49220_49272 = state_49187__$1;
(statearr_49220_49272[(2)] = false);

(statearr_49220_49272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (3))){
var state_49187__$1 = state_49187;
var statearr_49221_49273 = state_49187__$1;
(statearr_49221_49273[(2)] = false);

(statearr_49221_49273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (12))){
var inst_49185 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49187__$1,inst_49185);
} else {
if((state_val_49188 === (2))){
var inst_49089 = (state_49187[(8)]);
var inst_49094 = inst_49089.cljs$lang$protocol_mask$partition0$;
var inst_49095 = (inst_49094 & (64));
var inst_49096 = inst_49089.cljs$core$ISeq$;
var inst_49097 = (cljs.core.PROTOCOL_SENTINEL === inst_49096);
var inst_49098 = ((inst_49095) || (inst_49097));
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49098)){
var statearr_49222_49274 = state_49187__$1;
(statearr_49222_49274[(1)] = (5));

} else {
var statearr_49223_49275 = state_49187__$1;
(statearr_49223_49275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (23))){
var inst_49146 = (state_49187[(14)]);
var inst_49152 = (inst_49146 == null);
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49152)){
var statearr_49224_49276 = state_49187__$1;
(statearr_49224_49276[(1)] = (26));

} else {
var statearr_49225_49277 = state_49187__$1;
(statearr_49225_49277[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (35))){
var inst_49172 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
if(cljs.core.truth_(inst_49172)){
var statearr_49226_49278 = state_49187__$1;
(statearr_49226_49278[(1)] = (36));

} else {
var statearr_49227_49279 = state_49187__$1;
(statearr_49227_49279[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (19))){
var inst_49114 = (state_49187[(7)]);
var inst_49134 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49114);
var state_49187__$1 = state_49187;
var statearr_49228_49280 = state_49187__$1;
(statearr_49228_49280[(2)] = inst_49134);

(statearr_49228_49280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (11))){
var inst_49114 = (state_49187[(7)]);
var inst_49118 = (inst_49114 == null);
var inst_49119 = cljs.core.not.call(null,inst_49118);
var state_49187__$1 = state_49187;
if(inst_49119){
var statearr_49229_49281 = state_49187__$1;
(statearr_49229_49281[(1)] = (13));

} else {
var statearr_49230_49282 = state_49187__$1;
(statearr_49230_49282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (9))){
var inst_49089 = (state_49187[(8)]);
var state_49187__$1 = state_49187;
var statearr_49231_49283 = state_49187__$1;
(statearr_49231_49283[(2)] = inst_49089);

(statearr_49231_49283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (5))){
var state_49187__$1 = state_49187;
var statearr_49232_49284 = state_49187__$1;
(statearr_49232_49284[(2)] = true);

(statearr_49232_49284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (14))){
var state_49187__$1 = state_49187;
var statearr_49233_49285 = state_49187__$1;
(statearr_49233_49285[(2)] = false);

(statearr_49233_49285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (26))){
var inst_49147 = (state_49187[(9)]);
var inst_49154 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49147);
var state_49187__$1 = state_49187;
var statearr_49234_49286 = state_49187__$1;
(statearr_49234_49286[(2)] = inst_49154);

(statearr_49234_49286[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (16))){
var state_49187__$1 = state_49187;
var statearr_49235_49287 = state_49187__$1;
(statearr_49235_49287[(2)] = true);

(statearr_49235_49287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (38))){
var inst_49177 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
var statearr_49236_49288 = state_49187__$1;
(statearr_49236_49288[(2)] = inst_49177);

(statearr_49236_49288[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (30))){
var inst_49147 = (state_49187[(9)]);
var inst_49138 = (state_49187[(10)]);
var inst_49139 = (state_49187[(13)]);
var inst_49164 = cljs.core.empty_QMARK_.call(null,inst_49138);
var inst_49165 = inst_49139.call(null,inst_49147);
var inst_49166 = cljs.core.not.call(null,inst_49165);
var inst_49167 = ((inst_49164) && (inst_49166));
var state_49187__$1 = state_49187;
var statearr_49237_49289 = state_49187__$1;
(statearr_49237_49289[(2)] = inst_49167);

(statearr_49237_49289[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (10))){
var inst_49089 = (state_49187[(8)]);
var inst_49110 = (state_49187[(2)]);
var inst_49111 = cljs.core.get.call(null,inst_49110,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49112 = cljs.core.get.call(null,inst_49110,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49113 = cljs.core.get.call(null,inst_49110,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49114 = inst_49089;
var state_49187__$1 = (function (){var statearr_49238 = state_49187;
(statearr_49238[(16)] = inst_49112);

(statearr_49238[(7)] = inst_49114);

(statearr_49238[(17)] = inst_49111);

(statearr_49238[(18)] = inst_49113);

return statearr_49238;
})();
var statearr_49239_49290 = state_49187__$1;
(statearr_49239_49290[(2)] = null);

(statearr_49239_49290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (18))){
var inst_49129 = (state_49187[(2)]);
var state_49187__$1 = state_49187;
var statearr_49240_49291 = state_49187__$1;
(statearr_49240_49291[(2)] = inst_49129);

(statearr_49240_49291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (37))){
var state_49187__$1 = state_49187;
var statearr_49241_49292 = state_49187__$1;
(statearr_49241_49292[(2)] = null);

(statearr_49241_49292[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49188 === (8))){
var inst_49089 = (state_49187[(8)]);
var inst_49107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49089);
var state_49187__$1 = state_49187;
var statearr_49242_49293 = state_49187__$1;
(statearr_49242_49293[(2)] = inst_49107);

(statearr_49242_49293[(1)] = (10));


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
});})(c__48188__auto___49247,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48098__auto__,c__48188__auto___49247,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48099__auto__ = null;
var cljs$core$async$mix_$_state_machine__48099__auto____0 = (function (){
var statearr_49243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49243[(0)] = cljs$core$async$mix_$_state_machine__48099__auto__);

(statearr_49243[(1)] = (1));

return statearr_49243;
});
var cljs$core$async$mix_$_state_machine__48099__auto____1 = (function (state_49187){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49244){if((e49244 instanceof Object)){
var ex__48102__auto__ = e49244;
var statearr_49245_49294 = state_49187;
(statearr_49245_49294[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49295 = state_49187;
state_49187 = G__49295;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48099__auto__ = function(state_49187){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48099__auto____1.call(this,state_49187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48099__auto____0;
cljs$core$async$mix_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48099__auto____1;
return cljs$core$async$mix_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49247,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48190__auto__ = (function (){var statearr_49246 = f__48189__auto__.call(null);
(statearr_49246[(6)] = c__48188__auto___49247);

return statearr_49246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49247,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49297 = arguments.length;
switch (G__49297) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
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
var G__49301 = arguments.length;
switch (G__49301) {
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
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__49299_SHARP_){
if(cljs.core.truth_(p1__49299_SHARP_.call(null,topic))){
return p1__49299_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49299_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49302 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49303){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49303 = meta49303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49304,meta49303__$1){
var self__ = this;
var _49304__$1 = this;
return (new cljs.core.async.t_cljs$core$async49302(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49303__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49304){
var self__ = this;
var _49304__$1 = this;
return self__.meta49303;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49303","meta49303",709554145,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49302.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49302.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49302";

cljs.core.async.t_cljs$core$async49302.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49302");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49302.
 */
cljs.core.async.__GT_t_cljs$core$async49302 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49302(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49303){
return (new cljs.core.async.t_cljs$core$async49302(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49303));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49302(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48188__auto___49422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49422,mults,ensure_mult,p){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49422,mults,ensure_mult,p){
return (function (state_49376){
var state_val_49377 = (state_49376[(1)]);
if((state_val_49377 === (7))){
var inst_49372 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
var statearr_49378_49423 = state_49376__$1;
(statearr_49378_49423[(2)] = inst_49372);

(statearr_49378_49423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (20))){
var state_49376__$1 = state_49376;
var statearr_49379_49424 = state_49376__$1;
(statearr_49379_49424[(2)] = null);

(statearr_49379_49424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (1))){
var state_49376__$1 = state_49376;
var statearr_49380_49425 = state_49376__$1;
(statearr_49380_49425[(2)] = null);

(statearr_49380_49425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (24))){
var inst_49355 = (state_49376[(7)]);
var inst_49364 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49355);
var state_49376__$1 = state_49376;
var statearr_49381_49426 = state_49376__$1;
(statearr_49381_49426[(2)] = inst_49364);

(statearr_49381_49426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (4))){
var inst_49307 = (state_49376[(8)]);
var inst_49307__$1 = (state_49376[(2)]);
var inst_49308 = (inst_49307__$1 == null);
var state_49376__$1 = (function (){var statearr_49382 = state_49376;
(statearr_49382[(8)] = inst_49307__$1);

return statearr_49382;
})();
if(cljs.core.truth_(inst_49308)){
var statearr_49383_49427 = state_49376__$1;
(statearr_49383_49427[(1)] = (5));

} else {
var statearr_49384_49428 = state_49376__$1;
(statearr_49384_49428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (15))){
var inst_49349 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
var statearr_49385_49429 = state_49376__$1;
(statearr_49385_49429[(2)] = inst_49349);

(statearr_49385_49429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (21))){
var inst_49369 = (state_49376[(2)]);
var state_49376__$1 = (function (){var statearr_49386 = state_49376;
(statearr_49386[(9)] = inst_49369);

return statearr_49386;
})();
var statearr_49387_49430 = state_49376__$1;
(statearr_49387_49430[(2)] = null);

(statearr_49387_49430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (13))){
var inst_49331 = (state_49376[(10)]);
var inst_49333 = cljs.core.chunked_seq_QMARK_.call(null,inst_49331);
var state_49376__$1 = state_49376;
if(inst_49333){
var statearr_49388_49431 = state_49376__$1;
(statearr_49388_49431[(1)] = (16));

} else {
var statearr_49389_49432 = state_49376__$1;
(statearr_49389_49432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (22))){
var inst_49361 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
if(cljs.core.truth_(inst_49361)){
var statearr_49390_49433 = state_49376__$1;
(statearr_49390_49433[(1)] = (23));

} else {
var statearr_49391_49434 = state_49376__$1;
(statearr_49391_49434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (6))){
var inst_49357 = (state_49376[(11)]);
var inst_49307 = (state_49376[(8)]);
var inst_49355 = (state_49376[(7)]);
var inst_49355__$1 = topic_fn.call(null,inst_49307);
var inst_49356 = cljs.core.deref.call(null,mults);
var inst_49357__$1 = cljs.core.get.call(null,inst_49356,inst_49355__$1);
var state_49376__$1 = (function (){var statearr_49392 = state_49376;
(statearr_49392[(11)] = inst_49357__$1);

(statearr_49392[(7)] = inst_49355__$1);

return statearr_49392;
})();
if(cljs.core.truth_(inst_49357__$1)){
var statearr_49393_49435 = state_49376__$1;
(statearr_49393_49435[(1)] = (19));

} else {
var statearr_49394_49436 = state_49376__$1;
(statearr_49394_49436[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (25))){
var inst_49366 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
var statearr_49395_49437 = state_49376__$1;
(statearr_49395_49437[(2)] = inst_49366);

(statearr_49395_49437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (17))){
var inst_49331 = (state_49376[(10)]);
var inst_49340 = cljs.core.first.call(null,inst_49331);
var inst_49341 = cljs.core.async.muxch_STAR_.call(null,inst_49340);
var inst_49342 = cljs.core.async.close_BANG_.call(null,inst_49341);
var inst_49343 = cljs.core.next.call(null,inst_49331);
var inst_49317 = inst_49343;
var inst_49318 = null;
var inst_49319 = (0);
var inst_49320 = (0);
var state_49376__$1 = (function (){var statearr_49396 = state_49376;
(statearr_49396[(12)] = inst_49319);

(statearr_49396[(13)] = inst_49342);

(statearr_49396[(14)] = inst_49320);

(statearr_49396[(15)] = inst_49318);

(statearr_49396[(16)] = inst_49317);

return statearr_49396;
})();
var statearr_49397_49438 = state_49376__$1;
(statearr_49397_49438[(2)] = null);

(statearr_49397_49438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (3))){
var inst_49374 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49376__$1,inst_49374);
} else {
if((state_val_49377 === (12))){
var inst_49351 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
var statearr_49398_49439 = state_49376__$1;
(statearr_49398_49439[(2)] = inst_49351);

(statearr_49398_49439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (2))){
var state_49376__$1 = state_49376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49376__$1,(4),ch);
} else {
if((state_val_49377 === (23))){
var state_49376__$1 = state_49376;
var statearr_49399_49440 = state_49376__$1;
(statearr_49399_49440[(2)] = null);

(statearr_49399_49440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (19))){
var inst_49357 = (state_49376[(11)]);
var inst_49307 = (state_49376[(8)]);
var inst_49359 = cljs.core.async.muxch_STAR_.call(null,inst_49357);
var state_49376__$1 = state_49376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49376__$1,(22),inst_49359,inst_49307);
} else {
if((state_val_49377 === (11))){
var inst_49331 = (state_49376[(10)]);
var inst_49317 = (state_49376[(16)]);
var inst_49331__$1 = cljs.core.seq.call(null,inst_49317);
var state_49376__$1 = (function (){var statearr_49400 = state_49376;
(statearr_49400[(10)] = inst_49331__$1);

return statearr_49400;
})();
if(inst_49331__$1){
var statearr_49401_49441 = state_49376__$1;
(statearr_49401_49441[(1)] = (13));

} else {
var statearr_49402_49442 = state_49376__$1;
(statearr_49402_49442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (9))){
var inst_49353 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
var statearr_49403_49443 = state_49376__$1;
(statearr_49403_49443[(2)] = inst_49353);

(statearr_49403_49443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (5))){
var inst_49314 = cljs.core.deref.call(null,mults);
var inst_49315 = cljs.core.vals.call(null,inst_49314);
var inst_49316 = cljs.core.seq.call(null,inst_49315);
var inst_49317 = inst_49316;
var inst_49318 = null;
var inst_49319 = (0);
var inst_49320 = (0);
var state_49376__$1 = (function (){var statearr_49404 = state_49376;
(statearr_49404[(12)] = inst_49319);

(statearr_49404[(14)] = inst_49320);

(statearr_49404[(15)] = inst_49318);

(statearr_49404[(16)] = inst_49317);

return statearr_49404;
})();
var statearr_49405_49444 = state_49376__$1;
(statearr_49405_49444[(2)] = null);

(statearr_49405_49444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (14))){
var state_49376__$1 = state_49376;
var statearr_49409_49445 = state_49376__$1;
(statearr_49409_49445[(2)] = null);

(statearr_49409_49445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (16))){
var inst_49331 = (state_49376[(10)]);
var inst_49335 = cljs.core.chunk_first.call(null,inst_49331);
var inst_49336 = cljs.core.chunk_rest.call(null,inst_49331);
var inst_49337 = cljs.core.count.call(null,inst_49335);
var inst_49317 = inst_49336;
var inst_49318 = inst_49335;
var inst_49319 = inst_49337;
var inst_49320 = (0);
var state_49376__$1 = (function (){var statearr_49410 = state_49376;
(statearr_49410[(12)] = inst_49319);

(statearr_49410[(14)] = inst_49320);

(statearr_49410[(15)] = inst_49318);

(statearr_49410[(16)] = inst_49317);

return statearr_49410;
})();
var statearr_49411_49446 = state_49376__$1;
(statearr_49411_49446[(2)] = null);

(statearr_49411_49446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (10))){
var inst_49319 = (state_49376[(12)]);
var inst_49320 = (state_49376[(14)]);
var inst_49318 = (state_49376[(15)]);
var inst_49317 = (state_49376[(16)]);
var inst_49325 = cljs.core._nth.call(null,inst_49318,inst_49320);
var inst_49326 = cljs.core.async.muxch_STAR_.call(null,inst_49325);
var inst_49327 = cljs.core.async.close_BANG_.call(null,inst_49326);
var inst_49328 = (inst_49320 + (1));
var tmp49406 = inst_49319;
var tmp49407 = inst_49318;
var tmp49408 = inst_49317;
var inst_49317__$1 = tmp49408;
var inst_49318__$1 = tmp49407;
var inst_49319__$1 = tmp49406;
var inst_49320__$1 = inst_49328;
var state_49376__$1 = (function (){var statearr_49412 = state_49376;
(statearr_49412[(12)] = inst_49319__$1);

(statearr_49412[(14)] = inst_49320__$1);

(statearr_49412[(15)] = inst_49318__$1);

(statearr_49412[(17)] = inst_49327);

(statearr_49412[(16)] = inst_49317__$1);

return statearr_49412;
})();
var statearr_49413_49447 = state_49376__$1;
(statearr_49413_49447[(2)] = null);

(statearr_49413_49447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (18))){
var inst_49346 = (state_49376[(2)]);
var state_49376__$1 = state_49376;
var statearr_49414_49448 = state_49376__$1;
(statearr_49414_49448[(2)] = inst_49346);

(statearr_49414_49448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49377 === (8))){
var inst_49319 = (state_49376[(12)]);
var inst_49320 = (state_49376[(14)]);
var inst_49322 = (inst_49320 < inst_49319);
var inst_49323 = inst_49322;
var state_49376__$1 = state_49376;
if(cljs.core.truth_(inst_49323)){
var statearr_49415_49449 = state_49376__$1;
(statearr_49415_49449[(1)] = (10));

} else {
var statearr_49416_49450 = state_49376__$1;
(statearr_49416_49450[(1)] = (11));

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
});})(c__48188__auto___49422,mults,ensure_mult,p))
;
return ((function (switch__48098__auto__,c__48188__auto___49422,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49417[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49417[(1)] = (1));

return statearr_49417;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49376){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49418){if((e49418 instanceof Object)){
var ex__48102__auto__ = e49418;
var statearr_49419_49451 = state_49376;
(statearr_49419_49451[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49452 = state_49376;
state_49376 = G__49452;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49422,mults,ensure_mult,p))
})();
var state__48190__auto__ = (function (){var statearr_49420 = f__48189__auto__.call(null);
(statearr_49420[(6)] = c__48188__auto___49422);

return statearr_49420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49422,mults,ensure_mult,p))
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
var G__49454 = arguments.length;
switch (G__49454) {
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
var G__49457 = arguments.length;
switch (G__49457) {
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
var G__49460 = arguments.length;
switch (G__49460) {
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
var c__48188__auto___49527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49499){
var state_val_49500 = (state_49499[(1)]);
if((state_val_49500 === (7))){
var state_49499__$1 = state_49499;
var statearr_49501_49528 = state_49499__$1;
(statearr_49501_49528[(2)] = null);

(statearr_49501_49528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (1))){
var state_49499__$1 = state_49499;
var statearr_49502_49529 = state_49499__$1;
(statearr_49502_49529[(2)] = null);

(statearr_49502_49529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (4))){
var inst_49463 = (state_49499[(7)]);
var inst_49465 = (inst_49463 < cnt);
var state_49499__$1 = state_49499;
if(cljs.core.truth_(inst_49465)){
var statearr_49503_49530 = state_49499__$1;
(statearr_49503_49530[(1)] = (6));

} else {
var statearr_49504_49531 = state_49499__$1;
(statearr_49504_49531[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (15))){
var inst_49495 = (state_49499[(2)]);
var state_49499__$1 = state_49499;
var statearr_49505_49532 = state_49499__$1;
(statearr_49505_49532[(2)] = inst_49495);

(statearr_49505_49532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (13))){
var inst_49488 = cljs.core.async.close_BANG_.call(null,out);
var state_49499__$1 = state_49499;
var statearr_49506_49533 = state_49499__$1;
(statearr_49506_49533[(2)] = inst_49488);

(statearr_49506_49533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (6))){
var state_49499__$1 = state_49499;
var statearr_49507_49534 = state_49499__$1;
(statearr_49507_49534[(2)] = null);

(statearr_49507_49534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (3))){
var inst_49497 = (state_49499[(2)]);
var state_49499__$1 = state_49499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49499__$1,inst_49497);
} else {
if((state_val_49500 === (12))){
var inst_49485 = (state_49499[(8)]);
var inst_49485__$1 = (state_49499[(2)]);
var inst_49486 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49485__$1);
var state_49499__$1 = (function (){var statearr_49508 = state_49499;
(statearr_49508[(8)] = inst_49485__$1);

return statearr_49508;
})();
if(cljs.core.truth_(inst_49486)){
var statearr_49509_49535 = state_49499__$1;
(statearr_49509_49535[(1)] = (13));

} else {
var statearr_49510_49536 = state_49499__$1;
(statearr_49510_49536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (2))){
var inst_49462 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49463 = (0);
var state_49499__$1 = (function (){var statearr_49511 = state_49499;
(statearr_49511[(9)] = inst_49462);

(statearr_49511[(7)] = inst_49463);

return statearr_49511;
})();
var statearr_49512_49537 = state_49499__$1;
(statearr_49512_49537[(2)] = null);

(statearr_49512_49537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (11))){
var inst_49463 = (state_49499[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49499,(10),Object,null,(9));
var inst_49472 = chs__$1.call(null,inst_49463);
var inst_49473 = done.call(null,inst_49463);
var inst_49474 = cljs.core.async.take_BANG_.call(null,inst_49472,inst_49473);
var state_49499__$1 = state_49499;
var statearr_49513_49538 = state_49499__$1;
(statearr_49513_49538[(2)] = inst_49474);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49499__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (9))){
var inst_49463 = (state_49499[(7)]);
var inst_49476 = (state_49499[(2)]);
var inst_49477 = (inst_49463 + (1));
var inst_49463__$1 = inst_49477;
var state_49499__$1 = (function (){var statearr_49514 = state_49499;
(statearr_49514[(10)] = inst_49476);

(statearr_49514[(7)] = inst_49463__$1);

return statearr_49514;
})();
var statearr_49515_49539 = state_49499__$1;
(statearr_49515_49539[(2)] = null);

(statearr_49515_49539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (5))){
var inst_49483 = (state_49499[(2)]);
var state_49499__$1 = (function (){var statearr_49516 = state_49499;
(statearr_49516[(11)] = inst_49483);

return statearr_49516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49499__$1,(12),dchan);
} else {
if((state_val_49500 === (14))){
var inst_49485 = (state_49499[(8)]);
var inst_49490 = cljs.core.apply.call(null,f,inst_49485);
var state_49499__$1 = state_49499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49499__$1,(16),out,inst_49490);
} else {
if((state_val_49500 === (16))){
var inst_49492 = (state_49499[(2)]);
var state_49499__$1 = (function (){var statearr_49517 = state_49499;
(statearr_49517[(12)] = inst_49492);

return statearr_49517;
})();
var statearr_49518_49540 = state_49499__$1;
(statearr_49518_49540[(2)] = null);

(statearr_49518_49540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (10))){
var inst_49467 = (state_49499[(2)]);
var inst_49468 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49499__$1 = (function (){var statearr_49519 = state_49499;
(statearr_49519[(13)] = inst_49467);

return statearr_49519;
})();
var statearr_49520_49541 = state_49499__$1;
(statearr_49520_49541[(2)] = inst_49468);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49499__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49500 === (8))){
var inst_49481 = (state_49499[(2)]);
var state_49499__$1 = state_49499;
var statearr_49521_49542 = state_49499__$1;
(statearr_49521_49542[(2)] = inst_49481);

(statearr_49521_49542[(1)] = (5));


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
});})(c__48188__auto___49527,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48098__auto__,c__48188__auto___49527,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49522[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49522[(1)] = (1));

return statearr_49522;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49499){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49523){if((e49523 instanceof Object)){
var ex__48102__auto__ = e49523;
var statearr_49524_49543 = state_49499;
(statearr_49524_49543[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49544 = state_49499;
state_49499 = G__49544;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49527,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48190__auto__ = (function (){var statearr_49525 = f__48189__auto__.call(null);
(statearr_49525[(6)] = c__48188__auto___49527);

return statearr_49525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49527,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__49547 = arguments.length;
switch (G__49547) {
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
var c__48188__auto___49601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49601,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49601,out){
return (function (state_49579){
var state_val_49580 = (state_49579[(1)]);
if((state_val_49580 === (7))){
var inst_49558 = (state_49579[(7)]);
var inst_49559 = (state_49579[(8)]);
var inst_49558__$1 = (state_49579[(2)]);
var inst_49559__$1 = cljs.core.nth.call(null,inst_49558__$1,(0),null);
var inst_49560 = cljs.core.nth.call(null,inst_49558__$1,(1),null);
var inst_49561 = (inst_49559__$1 == null);
var state_49579__$1 = (function (){var statearr_49581 = state_49579;
(statearr_49581[(9)] = inst_49560);

(statearr_49581[(7)] = inst_49558__$1);

(statearr_49581[(8)] = inst_49559__$1);

return statearr_49581;
})();
if(cljs.core.truth_(inst_49561)){
var statearr_49582_49602 = state_49579__$1;
(statearr_49582_49602[(1)] = (8));

} else {
var statearr_49583_49603 = state_49579__$1;
(statearr_49583_49603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (1))){
var inst_49548 = cljs.core.vec.call(null,chs);
var inst_49549 = inst_49548;
var state_49579__$1 = (function (){var statearr_49584 = state_49579;
(statearr_49584[(10)] = inst_49549);

return statearr_49584;
})();
var statearr_49585_49604 = state_49579__$1;
(statearr_49585_49604[(2)] = null);

(statearr_49585_49604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (4))){
var inst_49549 = (state_49579[(10)]);
var state_49579__$1 = state_49579;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49579__$1,(7),inst_49549);
} else {
if((state_val_49580 === (6))){
var inst_49575 = (state_49579[(2)]);
var state_49579__$1 = state_49579;
var statearr_49586_49605 = state_49579__$1;
(statearr_49586_49605[(2)] = inst_49575);

(statearr_49586_49605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (3))){
var inst_49577 = (state_49579[(2)]);
var state_49579__$1 = state_49579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49579__$1,inst_49577);
} else {
if((state_val_49580 === (2))){
var inst_49549 = (state_49579[(10)]);
var inst_49551 = cljs.core.count.call(null,inst_49549);
var inst_49552 = (inst_49551 > (0));
var state_49579__$1 = state_49579;
if(cljs.core.truth_(inst_49552)){
var statearr_49588_49606 = state_49579__$1;
(statearr_49588_49606[(1)] = (4));

} else {
var statearr_49589_49607 = state_49579__$1;
(statearr_49589_49607[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (11))){
var inst_49549 = (state_49579[(10)]);
var inst_49568 = (state_49579[(2)]);
var tmp49587 = inst_49549;
var inst_49549__$1 = tmp49587;
var state_49579__$1 = (function (){var statearr_49590 = state_49579;
(statearr_49590[(10)] = inst_49549__$1);

(statearr_49590[(11)] = inst_49568);

return statearr_49590;
})();
var statearr_49591_49608 = state_49579__$1;
(statearr_49591_49608[(2)] = null);

(statearr_49591_49608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (9))){
var inst_49559 = (state_49579[(8)]);
var state_49579__$1 = state_49579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49579__$1,(11),out,inst_49559);
} else {
if((state_val_49580 === (5))){
var inst_49573 = cljs.core.async.close_BANG_.call(null,out);
var state_49579__$1 = state_49579;
var statearr_49592_49609 = state_49579__$1;
(statearr_49592_49609[(2)] = inst_49573);

(statearr_49592_49609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (10))){
var inst_49571 = (state_49579[(2)]);
var state_49579__$1 = state_49579;
var statearr_49593_49610 = state_49579__$1;
(statearr_49593_49610[(2)] = inst_49571);

(statearr_49593_49610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49580 === (8))){
var inst_49560 = (state_49579[(9)]);
var inst_49558 = (state_49579[(7)]);
var inst_49549 = (state_49579[(10)]);
var inst_49559 = (state_49579[(8)]);
var inst_49563 = (function (){var cs = inst_49549;
var vec__49554 = inst_49558;
var v = inst_49559;
var c = inst_49560;
return ((function (cs,vec__49554,v,c,inst_49560,inst_49558,inst_49549,inst_49559,state_val_49580,c__48188__auto___49601,out){
return (function (p1__49545_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49545_SHARP_);
});
;})(cs,vec__49554,v,c,inst_49560,inst_49558,inst_49549,inst_49559,state_val_49580,c__48188__auto___49601,out))
})();
var inst_49564 = cljs.core.filterv.call(null,inst_49563,inst_49549);
var inst_49549__$1 = inst_49564;
var state_49579__$1 = (function (){var statearr_49594 = state_49579;
(statearr_49594[(10)] = inst_49549__$1);

return statearr_49594;
})();
var statearr_49595_49611 = state_49579__$1;
(statearr_49595_49611[(2)] = null);

(statearr_49595_49611[(1)] = (2));


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
});})(c__48188__auto___49601,out))
;
return ((function (switch__48098__auto__,c__48188__auto___49601,out){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49596 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49596[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49596[(1)] = (1));

return statearr_49596;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49579){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49597){if((e49597 instanceof Object)){
var ex__48102__auto__ = e49597;
var statearr_49598_49612 = state_49579;
(statearr_49598_49612[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49613 = state_49579;
state_49579 = G__49613;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49601,out))
})();
var state__48190__auto__ = (function (){var statearr_49599 = f__48189__auto__.call(null);
(statearr_49599[(6)] = c__48188__auto___49601);

return statearr_49599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49601,out))
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
var G__49615 = arguments.length;
switch (G__49615) {
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
var c__48188__auto___49660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49660,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49660,out){
return (function (state_49639){
var state_val_49640 = (state_49639[(1)]);
if((state_val_49640 === (7))){
var inst_49621 = (state_49639[(7)]);
var inst_49621__$1 = (state_49639[(2)]);
var inst_49622 = (inst_49621__$1 == null);
var inst_49623 = cljs.core.not.call(null,inst_49622);
var state_49639__$1 = (function (){var statearr_49641 = state_49639;
(statearr_49641[(7)] = inst_49621__$1);

return statearr_49641;
})();
if(inst_49623){
var statearr_49642_49661 = state_49639__$1;
(statearr_49642_49661[(1)] = (8));

} else {
var statearr_49643_49662 = state_49639__$1;
(statearr_49643_49662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (1))){
var inst_49616 = (0);
var state_49639__$1 = (function (){var statearr_49644 = state_49639;
(statearr_49644[(8)] = inst_49616);

return statearr_49644;
})();
var statearr_49645_49663 = state_49639__$1;
(statearr_49645_49663[(2)] = null);

(statearr_49645_49663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (4))){
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49639__$1,(7),ch);
} else {
if((state_val_49640 === (6))){
var inst_49634 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49646_49664 = state_49639__$1;
(statearr_49646_49664[(2)] = inst_49634);

(statearr_49646_49664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (3))){
var inst_49636 = (state_49639[(2)]);
var inst_49637 = cljs.core.async.close_BANG_.call(null,out);
var state_49639__$1 = (function (){var statearr_49647 = state_49639;
(statearr_49647[(9)] = inst_49636);

return statearr_49647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49639__$1,inst_49637);
} else {
if((state_val_49640 === (2))){
var inst_49616 = (state_49639[(8)]);
var inst_49618 = (inst_49616 < n);
var state_49639__$1 = state_49639;
if(cljs.core.truth_(inst_49618)){
var statearr_49648_49665 = state_49639__$1;
(statearr_49648_49665[(1)] = (4));

} else {
var statearr_49649_49666 = state_49639__$1;
(statearr_49649_49666[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (11))){
var inst_49616 = (state_49639[(8)]);
var inst_49626 = (state_49639[(2)]);
var inst_49627 = (inst_49616 + (1));
var inst_49616__$1 = inst_49627;
var state_49639__$1 = (function (){var statearr_49650 = state_49639;
(statearr_49650[(8)] = inst_49616__$1);

(statearr_49650[(10)] = inst_49626);

return statearr_49650;
})();
var statearr_49651_49667 = state_49639__$1;
(statearr_49651_49667[(2)] = null);

(statearr_49651_49667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (9))){
var state_49639__$1 = state_49639;
var statearr_49652_49668 = state_49639__$1;
(statearr_49652_49668[(2)] = null);

(statearr_49652_49668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (5))){
var state_49639__$1 = state_49639;
var statearr_49653_49669 = state_49639__$1;
(statearr_49653_49669[(2)] = null);

(statearr_49653_49669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (10))){
var inst_49631 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
var statearr_49654_49670 = state_49639__$1;
(statearr_49654_49670[(2)] = inst_49631);

(statearr_49654_49670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (8))){
var inst_49621 = (state_49639[(7)]);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49639__$1,(11),out,inst_49621);
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
});})(c__48188__auto___49660,out))
;
return ((function (switch__48098__auto__,c__48188__auto___49660,out){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49655[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49655[(1)] = (1));

return statearr_49655;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49639){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49656){if((e49656 instanceof Object)){
var ex__48102__auto__ = e49656;
var statearr_49657_49671 = state_49639;
(statearr_49657_49671[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49672 = state_49639;
state_49639 = G__49672;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49660,out))
})();
var state__48190__auto__ = (function (){var statearr_49658 = f__48189__auto__.call(null);
(statearr_49658[(6)] = c__48188__auto___49660);

return statearr_49658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49660,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49674 = (function (f,ch,meta49675){
this.f = f;
this.ch = ch;
this.meta49675 = meta49675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49676,meta49675__$1){
var self__ = this;
var _49676__$1 = this;
return (new cljs.core.async.t_cljs$core$async49674(self__.f,self__.ch,meta49675__$1));
});

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49676){
var self__ = this;
var _49676__$1 = this;
return self__.meta49675;
});

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49677 = (function (f,ch,meta49675,_,fn1,meta49678){
this.f = f;
this.ch = ch;
this.meta49675 = meta49675;
this._ = _;
this.fn1 = fn1;
this.meta49678 = meta49678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49679,meta49678__$1){
var self__ = this;
var _49679__$1 = this;
return (new cljs.core.async.t_cljs$core$async49677(self__.f,self__.ch,self__.meta49675,self__._,self__.fn1,meta49678__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49679){
var self__ = this;
var _49679__$1 = this;
return self__.meta49678;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49677.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49673_SHARP_){
return f1.call(null,(((p1__49673_SHARP_ == null))?null:self__.f.call(null,p1__49673_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49677.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49675","meta49675",2130164412,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49674","cljs.core.async/t_cljs$core$async49674",-617670162,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49678","meta49678",-1252757246,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49677";

cljs.core.async.t_cljs$core$async49677.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49677");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49677.
 */
cljs.core.async.__GT_t_cljs$core$async49677 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49677(f__$1,ch__$1,meta49675__$1,___$2,fn1__$1,meta49678){
return (new cljs.core.async.t_cljs$core$async49677(f__$1,ch__$1,meta49675__$1,___$2,fn1__$1,meta49678));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49677(self__.f,self__.ch,self__.meta49675,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49674.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49674.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49675","meta49675",2130164412,null)], null);
});

cljs.core.async.t_cljs$core$async49674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49674";

cljs.core.async.t_cljs$core$async49674.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49674");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49674.
 */
cljs.core.async.__GT_t_cljs$core$async49674 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49674(f__$1,ch__$1,meta49675){
return (new cljs.core.async.t_cljs$core$async49674(f__$1,ch__$1,meta49675));
});

}

return (new cljs.core.async.t_cljs$core$async49674(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49680 = (function (f,ch,meta49681){
this.f = f;
this.ch = ch;
this.meta49681 = meta49681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49682,meta49681__$1){
var self__ = this;
var _49682__$1 = this;
return (new cljs.core.async.t_cljs$core$async49680(self__.f,self__.ch,meta49681__$1));
});

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49682){
var self__ = this;
var _49682__$1 = this;
return self__.meta49681;
});

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49680.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49681","meta49681",2085908721,null)], null);
});

cljs.core.async.t_cljs$core$async49680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49680";

cljs.core.async.t_cljs$core$async49680.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49680");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49680.
 */
cljs.core.async.__GT_t_cljs$core$async49680 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49680(f__$1,ch__$1,meta49681){
return (new cljs.core.async.t_cljs$core$async49680(f__$1,ch__$1,meta49681));
});

}

return (new cljs.core.async.t_cljs$core$async49680(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49683 = (function (p,ch,meta49684){
this.p = p;
this.ch = ch;
this.meta49684 = meta49684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49685,meta49684__$1){
var self__ = this;
var _49685__$1 = this;
return (new cljs.core.async.t_cljs$core$async49683(self__.p,self__.ch,meta49684__$1));
});

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49685){
var self__ = this;
var _49685__$1 = this;
return self__.meta49684;
});

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49684","meta49684",525847499,null)], null);
});

cljs.core.async.t_cljs$core$async49683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49683";

cljs.core.async.t_cljs$core$async49683.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49683");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49683.
 */
cljs.core.async.__GT_t_cljs$core$async49683 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49683(p__$1,ch__$1,meta49684){
return (new cljs.core.async.t_cljs$core$async49683(p__$1,ch__$1,meta49684));
});

}

return (new cljs.core.async.t_cljs$core$async49683(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49687 = arguments.length;
switch (G__49687) {
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
var c__48188__auto___49727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49727,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49727,out){
return (function (state_49708){
var state_val_49709 = (state_49708[(1)]);
if((state_val_49709 === (7))){
var inst_49704 = (state_49708[(2)]);
var state_49708__$1 = state_49708;
var statearr_49710_49728 = state_49708__$1;
(statearr_49710_49728[(2)] = inst_49704);

(statearr_49710_49728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (1))){
var state_49708__$1 = state_49708;
var statearr_49711_49729 = state_49708__$1;
(statearr_49711_49729[(2)] = null);

(statearr_49711_49729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (4))){
var inst_49690 = (state_49708[(7)]);
var inst_49690__$1 = (state_49708[(2)]);
var inst_49691 = (inst_49690__$1 == null);
var state_49708__$1 = (function (){var statearr_49712 = state_49708;
(statearr_49712[(7)] = inst_49690__$1);

return statearr_49712;
})();
if(cljs.core.truth_(inst_49691)){
var statearr_49713_49730 = state_49708__$1;
(statearr_49713_49730[(1)] = (5));

} else {
var statearr_49714_49731 = state_49708__$1;
(statearr_49714_49731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (6))){
var inst_49690 = (state_49708[(7)]);
var inst_49695 = p.call(null,inst_49690);
var state_49708__$1 = state_49708;
if(cljs.core.truth_(inst_49695)){
var statearr_49715_49732 = state_49708__$1;
(statearr_49715_49732[(1)] = (8));

} else {
var statearr_49716_49733 = state_49708__$1;
(statearr_49716_49733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (3))){
var inst_49706 = (state_49708[(2)]);
var state_49708__$1 = state_49708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49708__$1,inst_49706);
} else {
if((state_val_49709 === (2))){
var state_49708__$1 = state_49708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49708__$1,(4),ch);
} else {
if((state_val_49709 === (11))){
var inst_49698 = (state_49708[(2)]);
var state_49708__$1 = state_49708;
var statearr_49717_49734 = state_49708__$1;
(statearr_49717_49734[(2)] = inst_49698);

(statearr_49717_49734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (9))){
var state_49708__$1 = state_49708;
var statearr_49718_49735 = state_49708__$1;
(statearr_49718_49735[(2)] = null);

(statearr_49718_49735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (5))){
var inst_49693 = cljs.core.async.close_BANG_.call(null,out);
var state_49708__$1 = state_49708;
var statearr_49719_49736 = state_49708__$1;
(statearr_49719_49736[(2)] = inst_49693);

(statearr_49719_49736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (10))){
var inst_49701 = (state_49708[(2)]);
var state_49708__$1 = (function (){var statearr_49720 = state_49708;
(statearr_49720[(8)] = inst_49701);

return statearr_49720;
})();
var statearr_49721_49737 = state_49708__$1;
(statearr_49721_49737[(2)] = null);

(statearr_49721_49737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49709 === (8))){
var inst_49690 = (state_49708[(7)]);
var state_49708__$1 = state_49708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49708__$1,(11),out,inst_49690);
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
});})(c__48188__auto___49727,out))
;
return ((function (switch__48098__auto__,c__48188__auto___49727,out){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49722 = [null,null,null,null,null,null,null,null,null];
(statearr_49722[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49722[(1)] = (1));

return statearr_49722;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49708){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49723){if((e49723 instanceof Object)){
var ex__48102__auto__ = e49723;
var statearr_49724_49738 = state_49708;
(statearr_49724_49738[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49739 = state_49708;
state_49708 = G__49739;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49727,out))
})();
var state__48190__auto__ = (function (){var statearr_49725 = f__48189__auto__.call(null);
(statearr_49725[(6)] = c__48188__auto___49727);

return statearr_49725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49727,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49741 = arguments.length;
switch (G__49741) {
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
var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__){
return (function (state_49804){
var state_val_49805 = (state_49804[(1)]);
if((state_val_49805 === (7))){
var inst_49800 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49806_49844 = state_49804__$1;
(statearr_49806_49844[(2)] = inst_49800);

(statearr_49806_49844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (20))){
var inst_49770 = (state_49804[(7)]);
var inst_49781 = (state_49804[(2)]);
var inst_49782 = cljs.core.next.call(null,inst_49770);
var inst_49756 = inst_49782;
var inst_49757 = null;
var inst_49758 = (0);
var inst_49759 = (0);
var state_49804__$1 = (function (){var statearr_49807 = state_49804;
(statearr_49807[(8)] = inst_49756);

(statearr_49807[(9)] = inst_49757);

(statearr_49807[(10)] = inst_49759);

(statearr_49807[(11)] = inst_49781);

(statearr_49807[(12)] = inst_49758);

return statearr_49807;
})();
var statearr_49808_49845 = state_49804__$1;
(statearr_49808_49845[(2)] = null);

(statearr_49808_49845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (1))){
var state_49804__$1 = state_49804;
var statearr_49809_49846 = state_49804__$1;
(statearr_49809_49846[(2)] = null);

(statearr_49809_49846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (4))){
var inst_49745 = (state_49804[(13)]);
var inst_49745__$1 = (state_49804[(2)]);
var inst_49746 = (inst_49745__$1 == null);
var state_49804__$1 = (function (){var statearr_49810 = state_49804;
(statearr_49810[(13)] = inst_49745__$1);

return statearr_49810;
})();
if(cljs.core.truth_(inst_49746)){
var statearr_49811_49847 = state_49804__$1;
(statearr_49811_49847[(1)] = (5));

} else {
var statearr_49812_49848 = state_49804__$1;
(statearr_49812_49848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (15))){
var state_49804__$1 = state_49804;
var statearr_49816_49849 = state_49804__$1;
(statearr_49816_49849[(2)] = null);

(statearr_49816_49849[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (21))){
var state_49804__$1 = state_49804;
var statearr_49817_49850 = state_49804__$1;
(statearr_49817_49850[(2)] = null);

(statearr_49817_49850[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (13))){
var inst_49756 = (state_49804[(8)]);
var inst_49757 = (state_49804[(9)]);
var inst_49759 = (state_49804[(10)]);
var inst_49758 = (state_49804[(12)]);
var inst_49766 = (state_49804[(2)]);
var inst_49767 = (inst_49759 + (1));
var tmp49813 = inst_49756;
var tmp49814 = inst_49757;
var tmp49815 = inst_49758;
var inst_49756__$1 = tmp49813;
var inst_49757__$1 = tmp49814;
var inst_49758__$1 = tmp49815;
var inst_49759__$1 = inst_49767;
var state_49804__$1 = (function (){var statearr_49818 = state_49804;
(statearr_49818[(8)] = inst_49756__$1);

(statearr_49818[(14)] = inst_49766);

(statearr_49818[(9)] = inst_49757__$1);

(statearr_49818[(10)] = inst_49759__$1);

(statearr_49818[(12)] = inst_49758__$1);

return statearr_49818;
})();
var statearr_49819_49851 = state_49804__$1;
(statearr_49819_49851[(2)] = null);

(statearr_49819_49851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (22))){
var state_49804__$1 = state_49804;
var statearr_49820_49852 = state_49804__$1;
(statearr_49820_49852[(2)] = null);

(statearr_49820_49852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (6))){
var inst_49745 = (state_49804[(13)]);
var inst_49754 = f.call(null,inst_49745);
var inst_49755 = cljs.core.seq.call(null,inst_49754);
var inst_49756 = inst_49755;
var inst_49757 = null;
var inst_49758 = (0);
var inst_49759 = (0);
var state_49804__$1 = (function (){var statearr_49821 = state_49804;
(statearr_49821[(8)] = inst_49756);

(statearr_49821[(9)] = inst_49757);

(statearr_49821[(10)] = inst_49759);

(statearr_49821[(12)] = inst_49758);

return statearr_49821;
})();
var statearr_49822_49853 = state_49804__$1;
(statearr_49822_49853[(2)] = null);

(statearr_49822_49853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (17))){
var inst_49770 = (state_49804[(7)]);
var inst_49774 = cljs.core.chunk_first.call(null,inst_49770);
var inst_49775 = cljs.core.chunk_rest.call(null,inst_49770);
var inst_49776 = cljs.core.count.call(null,inst_49774);
var inst_49756 = inst_49775;
var inst_49757 = inst_49774;
var inst_49758 = inst_49776;
var inst_49759 = (0);
var state_49804__$1 = (function (){var statearr_49823 = state_49804;
(statearr_49823[(8)] = inst_49756);

(statearr_49823[(9)] = inst_49757);

(statearr_49823[(10)] = inst_49759);

(statearr_49823[(12)] = inst_49758);

return statearr_49823;
})();
var statearr_49824_49854 = state_49804__$1;
(statearr_49824_49854[(2)] = null);

(statearr_49824_49854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (3))){
var inst_49802 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49804__$1,inst_49802);
} else {
if((state_val_49805 === (12))){
var inst_49790 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49825_49855 = state_49804__$1;
(statearr_49825_49855[(2)] = inst_49790);

(statearr_49825_49855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (2))){
var state_49804__$1 = state_49804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49804__$1,(4),in$);
} else {
if((state_val_49805 === (23))){
var inst_49798 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49826_49856 = state_49804__$1;
(statearr_49826_49856[(2)] = inst_49798);

(statearr_49826_49856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (19))){
var inst_49785 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49827_49857 = state_49804__$1;
(statearr_49827_49857[(2)] = inst_49785);

(statearr_49827_49857[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (11))){
var inst_49756 = (state_49804[(8)]);
var inst_49770 = (state_49804[(7)]);
var inst_49770__$1 = cljs.core.seq.call(null,inst_49756);
var state_49804__$1 = (function (){var statearr_49828 = state_49804;
(statearr_49828[(7)] = inst_49770__$1);

return statearr_49828;
})();
if(inst_49770__$1){
var statearr_49829_49858 = state_49804__$1;
(statearr_49829_49858[(1)] = (14));

} else {
var statearr_49830_49859 = state_49804__$1;
(statearr_49830_49859[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (9))){
var inst_49792 = (state_49804[(2)]);
var inst_49793 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49804__$1 = (function (){var statearr_49831 = state_49804;
(statearr_49831[(15)] = inst_49792);

return statearr_49831;
})();
if(cljs.core.truth_(inst_49793)){
var statearr_49832_49860 = state_49804__$1;
(statearr_49832_49860[(1)] = (21));

} else {
var statearr_49833_49861 = state_49804__$1;
(statearr_49833_49861[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (5))){
var inst_49748 = cljs.core.async.close_BANG_.call(null,out);
var state_49804__$1 = state_49804;
var statearr_49834_49862 = state_49804__$1;
(statearr_49834_49862[(2)] = inst_49748);

(statearr_49834_49862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (14))){
var inst_49770 = (state_49804[(7)]);
var inst_49772 = cljs.core.chunked_seq_QMARK_.call(null,inst_49770);
var state_49804__$1 = state_49804;
if(inst_49772){
var statearr_49835_49863 = state_49804__$1;
(statearr_49835_49863[(1)] = (17));

} else {
var statearr_49836_49864 = state_49804__$1;
(statearr_49836_49864[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (16))){
var inst_49788 = (state_49804[(2)]);
var state_49804__$1 = state_49804;
var statearr_49837_49865 = state_49804__$1;
(statearr_49837_49865[(2)] = inst_49788);

(statearr_49837_49865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49805 === (10))){
var inst_49757 = (state_49804[(9)]);
var inst_49759 = (state_49804[(10)]);
var inst_49764 = cljs.core._nth.call(null,inst_49757,inst_49759);
var state_49804__$1 = state_49804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49804__$1,(13),out,inst_49764);
} else {
if((state_val_49805 === (18))){
var inst_49770 = (state_49804[(7)]);
var inst_49779 = cljs.core.first.call(null,inst_49770);
var state_49804__$1 = state_49804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49804__$1,(20),out,inst_49779);
} else {
if((state_val_49805 === (8))){
var inst_49759 = (state_49804[(10)]);
var inst_49758 = (state_49804[(12)]);
var inst_49761 = (inst_49759 < inst_49758);
var inst_49762 = inst_49761;
var state_49804__$1 = state_49804;
if(cljs.core.truth_(inst_49762)){
var statearr_49838_49866 = state_49804__$1;
(statearr_49838_49866[(1)] = (10));

} else {
var statearr_49839_49867 = state_49804__$1;
(statearr_49839_49867[(1)] = (11));

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
});})(c__48188__auto__))
;
return ((function (switch__48098__auto__,c__48188__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48099__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48099__auto____0 = (function (){
var statearr_49840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49840[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48099__auto__);

(statearr_49840[(1)] = (1));

return statearr_49840;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48099__auto____1 = (function (state_49804){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49841){if((e49841 instanceof Object)){
var ex__48102__auto__ = e49841;
var statearr_49842_49868 = state_49804;
(statearr_49842_49868[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49869 = state_49804;
state_49804 = G__49869;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48099__auto__ = function(state_49804){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48099__auto____1.call(this,state_49804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48099__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48099__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__))
})();
var state__48190__auto__ = (function (){var statearr_49843 = f__48189__auto__.call(null);
(statearr_49843[(6)] = c__48188__auto__);

return statearr_49843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__))
);

return c__48188__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49871 = arguments.length;
switch (G__49871) {
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
var G__49874 = arguments.length;
switch (G__49874) {
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
var G__49877 = arguments.length;
switch (G__49877) {
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
var c__48188__auto___49924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___49924,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___49924,out){
return (function (state_49901){
var state_val_49902 = (state_49901[(1)]);
if((state_val_49902 === (7))){
var inst_49896 = (state_49901[(2)]);
var state_49901__$1 = state_49901;
var statearr_49903_49925 = state_49901__$1;
(statearr_49903_49925[(2)] = inst_49896);

(statearr_49903_49925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (1))){
var inst_49878 = null;
var state_49901__$1 = (function (){var statearr_49904 = state_49901;
(statearr_49904[(7)] = inst_49878);

return statearr_49904;
})();
var statearr_49905_49926 = state_49901__$1;
(statearr_49905_49926[(2)] = null);

(statearr_49905_49926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (4))){
var inst_49881 = (state_49901[(8)]);
var inst_49881__$1 = (state_49901[(2)]);
var inst_49882 = (inst_49881__$1 == null);
var inst_49883 = cljs.core.not.call(null,inst_49882);
var state_49901__$1 = (function (){var statearr_49906 = state_49901;
(statearr_49906[(8)] = inst_49881__$1);

return statearr_49906;
})();
if(inst_49883){
var statearr_49907_49927 = state_49901__$1;
(statearr_49907_49927[(1)] = (5));

} else {
var statearr_49908_49928 = state_49901__$1;
(statearr_49908_49928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (6))){
var state_49901__$1 = state_49901;
var statearr_49909_49929 = state_49901__$1;
(statearr_49909_49929[(2)] = null);

(statearr_49909_49929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (3))){
var inst_49898 = (state_49901[(2)]);
var inst_49899 = cljs.core.async.close_BANG_.call(null,out);
var state_49901__$1 = (function (){var statearr_49910 = state_49901;
(statearr_49910[(9)] = inst_49898);

return statearr_49910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49901__$1,inst_49899);
} else {
if((state_val_49902 === (2))){
var state_49901__$1 = state_49901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49901__$1,(4),ch);
} else {
if((state_val_49902 === (11))){
var inst_49881 = (state_49901[(8)]);
var inst_49890 = (state_49901[(2)]);
var inst_49878 = inst_49881;
var state_49901__$1 = (function (){var statearr_49911 = state_49901;
(statearr_49911[(10)] = inst_49890);

(statearr_49911[(7)] = inst_49878);

return statearr_49911;
})();
var statearr_49912_49930 = state_49901__$1;
(statearr_49912_49930[(2)] = null);

(statearr_49912_49930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (9))){
var inst_49881 = (state_49901[(8)]);
var state_49901__$1 = state_49901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49901__$1,(11),out,inst_49881);
} else {
if((state_val_49902 === (5))){
var inst_49881 = (state_49901[(8)]);
var inst_49878 = (state_49901[(7)]);
var inst_49885 = cljs.core._EQ_.call(null,inst_49881,inst_49878);
var state_49901__$1 = state_49901;
if(inst_49885){
var statearr_49914_49931 = state_49901__$1;
(statearr_49914_49931[(1)] = (8));

} else {
var statearr_49915_49932 = state_49901__$1;
(statearr_49915_49932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (10))){
var inst_49893 = (state_49901[(2)]);
var state_49901__$1 = state_49901;
var statearr_49916_49933 = state_49901__$1;
(statearr_49916_49933[(2)] = inst_49893);

(statearr_49916_49933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49902 === (8))){
var inst_49878 = (state_49901[(7)]);
var tmp49913 = inst_49878;
var inst_49878__$1 = tmp49913;
var state_49901__$1 = (function (){var statearr_49917 = state_49901;
(statearr_49917[(7)] = inst_49878__$1);

return statearr_49917;
})();
var statearr_49918_49934 = state_49901__$1;
(statearr_49918_49934[(2)] = null);

(statearr_49918_49934[(1)] = (2));


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
});})(c__48188__auto___49924,out))
;
return ((function (switch__48098__auto__,c__48188__auto___49924,out){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49919[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49919[(1)] = (1));

return statearr_49919;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49901){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e49920){if((e49920 instanceof Object)){
var ex__48102__auto__ = e49920;
var statearr_49921_49935 = state_49901;
(statearr_49921_49935[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49936 = state_49901;
state_49901 = G__49936;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___49924,out))
})();
var state__48190__auto__ = (function (){var statearr_49922 = f__48189__auto__.call(null);
(statearr_49922[(6)] = c__48188__auto___49924);

return statearr_49922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___49924,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49938 = arguments.length;
switch (G__49938) {
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
var c__48188__auto___50004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___50004,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___50004,out){
return (function (state_49976){
var state_val_49977 = (state_49976[(1)]);
if((state_val_49977 === (7))){
var inst_49972 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_49978_50005 = state_49976__$1;
(statearr_49978_50005[(2)] = inst_49972);

(statearr_49978_50005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (1))){
var inst_49939 = (new Array(n));
var inst_49940 = inst_49939;
var inst_49941 = (0);
var state_49976__$1 = (function (){var statearr_49979 = state_49976;
(statearr_49979[(7)] = inst_49940);

(statearr_49979[(8)] = inst_49941);

return statearr_49979;
})();
var statearr_49980_50006 = state_49976__$1;
(statearr_49980_50006[(2)] = null);

(statearr_49980_50006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (4))){
var inst_49944 = (state_49976[(9)]);
var inst_49944__$1 = (state_49976[(2)]);
var inst_49945 = (inst_49944__$1 == null);
var inst_49946 = cljs.core.not.call(null,inst_49945);
var state_49976__$1 = (function (){var statearr_49981 = state_49976;
(statearr_49981[(9)] = inst_49944__$1);

return statearr_49981;
})();
if(inst_49946){
var statearr_49982_50007 = state_49976__$1;
(statearr_49982_50007[(1)] = (5));

} else {
var statearr_49983_50008 = state_49976__$1;
(statearr_49983_50008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (15))){
var inst_49966 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_49984_50009 = state_49976__$1;
(statearr_49984_50009[(2)] = inst_49966);

(statearr_49984_50009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (13))){
var state_49976__$1 = state_49976;
var statearr_49985_50010 = state_49976__$1;
(statearr_49985_50010[(2)] = null);

(statearr_49985_50010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (6))){
var inst_49941 = (state_49976[(8)]);
var inst_49962 = (inst_49941 > (0));
var state_49976__$1 = state_49976;
if(cljs.core.truth_(inst_49962)){
var statearr_49986_50011 = state_49976__$1;
(statearr_49986_50011[(1)] = (12));

} else {
var statearr_49987_50012 = state_49976__$1;
(statearr_49987_50012[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (3))){
var inst_49974 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49976__$1,inst_49974);
} else {
if((state_val_49977 === (12))){
var inst_49940 = (state_49976[(7)]);
var inst_49964 = cljs.core.vec.call(null,inst_49940);
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49976__$1,(15),out,inst_49964);
} else {
if((state_val_49977 === (2))){
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49976__$1,(4),ch);
} else {
if((state_val_49977 === (11))){
var inst_49956 = (state_49976[(2)]);
var inst_49957 = (new Array(n));
var inst_49940 = inst_49957;
var inst_49941 = (0);
var state_49976__$1 = (function (){var statearr_49988 = state_49976;
(statearr_49988[(10)] = inst_49956);

(statearr_49988[(7)] = inst_49940);

(statearr_49988[(8)] = inst_49941);

return statearr_49988;
})();
var statearr_49989_50013 = state_49976__$1;
(statearr_49989_50013[(2)] = null);

(statearr_49989_50013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (9))){
var inst_49940 = (state_49976[(7)]);
var inst_49954 = cljs.core.vec.call(null,inst_49940);
var state_49976__$1 = state_49976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49976__$1,(11),out,inst_49954);
} else {
if((state_val_49977 === (5))){
var inst_49940 = (state_49976[(7)]);
var inst_49949 = (state_49976[(11)]);
var inst_49944 = (state_49976[(9)]);
var inst_49941 = (state_49976[(8)]);
var inst_49948 = (inst_49940[inst_49941] = inst_49944);
var inst_49949__$1 = (inst_49941 + (1));
var inst_49950 = (inst_49949__$1 < n);
var state_49976__$1 = (function (){var statearr_49990 = state_49976;
(statearr_49990[(11)] = inst_49949__$1);

(statearr_49990[(12)] = inst_49948);

return statearr_49990;
})();
if(cljs.core.truth_(inst_49950)){
var statearr_49991_50014 = state_49976__$1;
(statearr_49991_50014[(1)] = (8));

} else {
var statearr_49992_50015 = state_49976__$1;
(statearr_49992_50015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (14))){
var inst_49969 = (state_49976[(2)]);
var inst_49970 = cljs.core.async.close_BANG_.call(null,out);
var state_49976__$1 = (function (){var statearr_49994 = state_49976;
(statearr_49994[(13)] = inst_49969);

return statearr_49994;
})();
var statearr_49995_50016 = state_49976__$1;
(statearr_49995_50016[(2)] = inst_49970);

(statearr_49995_50016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (10))){
var inst_49960 = (state_49976[(2)]);
var state_49976__$1 = state_49976;
var statearr_49996_50017 = state_49976__$1;
(statearr_49996_50017[(2)] = inst_49960);

(statearr_49996_50017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49977 === (8))){
var inst_49940 = (state_49976[(7)]);
var inst_49949 = (state_49976[(11)]);
var tmp49993 = inst_49940;
var inst_49940__$1 = tmp49993;
var inst_49941 = inst_49949;
var state_49976__$1 = (function (){var statearr_49997 = state_49976;
(statearr_49997[(7)] = inst_49940__$1);

(statearr_49997[(8)] = inst_49941);

return statearr_49997;
})();
var statearr_49998_50018 = state_49976__$1;
(statearr_49998_50018[(2)] = null);

(statearr_49998_50018[(1)] = (2));


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
});})(c__48188__auto___50004,out))
;
return ((function (switch__48098__auto__,c__48188__auto___50004,out){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_49999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49999[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_49999[(1)] = (1));

return statearr_49999;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_49976){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_49976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e50000){if((e50000 instanceof Object)){
var ex__48102__auto__ = e50000;
var statearr_50001_50019 = state_49976;
(statearr_50001_50019[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50020 = state_49976;
state_49976 = G__50020;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_49976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_49976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___50004,out))
})();
var state__48190__auto__ = (function (){var statearr_50002 = f__48189__auto__.call(null);
(statearr_50002[(6)] = c__48188__auto___50004);

return statearr_50002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___50004,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50022 = arguments.length;
switch (G__50022) {
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
var c__48188__auto___50092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___50092,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___50092,out){
return (function (state_50064){
var state_val_50065 = (state_50064[(1)]);
if((state_val_50065 === (7))){
var inst_50060 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50066_50093 = state_50064__$1;
(statearr_50066_50093[(2)] = inst_50060);

(statearr_50066_50093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (1))){
var inst_50023 = [];
var inst_50024 = inst_50023;
var inst_50025 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50064__$1 = (function (){var statearr_50067 = state_50064;
(statearr_50067[(7)] = inst_50025);

(statearr_50067[(8)] = inst_50024);

return statearr_50067;
})();
var statearr_50068_50094 = state_50064__$1;
(statearr_50068_50094[(2)] = null);

(statearr_50068_50094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (4))){
var inst_50028 = (state_50064[(9)]);
var inst_50028__$1 = (state_50064[(2)]);
var inst_50029 = (inst_50028__$1 == null);
var inst_50030 = cljs.core.not.call(null,inst_50029);
var state_50064__$1 = (function (){var statearr_50069 = state_50064;
(statearr_50069[(9)] = inst_50028__$1);

return statearr_50069;
})();
if(inst_50030){
var statearr_50070_50095 = state_50064__$1;
(statearr_50070_50095[(1)] = (5));

} else {
var statearr_50071_50096 = state_50064__$1;
(statearr_50071_50096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (15))){
var inst_50054 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50072_50097 = state_50064__$1;
(statearr_50072_50097[(2)] = inst_50054);

(statearr_50072_50097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (13))){
var state_50064__$1 = state_50064;
var statearr_50073_50098 = state_50064__$1;
(statearr_50073_50098[(2)] = null);

(statearr_50073_50098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (6))){
var inst_50024 = (state_50064[(8)]);
var inst_50049 = inst_50024.length;
var inst_50050 = (inst_50049 > (0));
var state_50064__$1 = state_50064;
if(cljs.core.truth_(inst_50050)){
var statearr_50074_50099 = state_50064__$1;
(statearr_50074_50099[(1)] = (12));

} else {
var statearr_50075_50100 = state_50064__$1;
(statearr_50075_50100[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (3))){
var inst_50062 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50064__$1,inst_50062);
} else {
if((state_val_50065 === (12))){
var inst_50024 = (state_50064[(8)]);
var inst_50052 = cljs.core.vec.call(null,inst_50024);
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50064__$1,(15),out,inst_50052);
} else {
if((state_val_50065 === (2))){
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50064__$1,(4),ch);
} else {
if((state_val_50065 === (11))){
var inst_50028 = (state_50064[(9)]);
var inst_50032 = (state_50064[(10)]);
var inst_50042 = (state_50064[(2)]);
var inst_50043 = [];
var inst_50044 = inst_50043.push(inst_50028);
var inst_50024 = inst_50043;
var inst_50025 = inst_50032;
var state_50064__$1 = (function (){var statearr_50076 = state_50064;
(statearr_50076[(7)] = inst_50025);

(statearr_50076[(11)] = inst_50042);

(statearr_50076[(12)] = inst_50044);

(statearr_50076[(8)] = inst_50024);

return statearr_50076;
})();
var statearr_50077_50101 = state_50064__$1;
(statearr_50077_50101[(2)] = null);

(statearr_50077_50101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (9))){
var inst_50024 = (state_50064[(8)]);
var inst_50040 = cljs.core.vec.call(null,inst_50024);
var state_50064__$1 = state_50064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50064__$1,(11),out,inst_50040);
} else {
if((state_val_50065 === (5))){
var inst_50025 = (state_50064[(7)]);
var inst_50028 = (state_50064[(9)]);
var inst_50032 = (state_50064[(10)]);
var inst_50032__$1 = f.call(null,inst_50028);
var inst_50033 = cljs.core._EQ_.call(null,inst_50032__$1,inst_50025);
var inst_50034 = cljs.core.keyword_identical_QMARK_.call(null,inst_50025,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50035 = ((inst_50033) || (inst_50034));
var state_50064__$1 = (function (){var statearr_50078 = state_50064;
(statearr_50078[(10)] = inst_50032__$1);

return statearr_50078;
})();
if(cljs.core.truth_(inst_50035)){
var statearr_50079_50102 = state_50064__$1;
(statearr_50079_50102[(1)] = (8));

} else {
var statearr_50080_50103 = state_50064__$1;
(statearr_50080_50103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (14))){
var inst_50057 = (state_50064[(2)]);
var inst_50058 = cljs.core.async.close_BANG_.call(null,out);
var state_50064__$1 = (function (){var statearr_50082 = state_50064;
(statearr_50082[(13)] = inst_50057);

return statearr_50082;
})();
var statearr_50083_50104 = state_50064__$1;
(statearr_50083_50104[(2)] = inst_50058);

(statearr_50083_50104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (10))){
var inst_50047 = (state_50064[(2)]);
var state_50064__$1 = state_50064;
var statearr_50084_50105 = state_50064__$1;
(statearr_50084_50105[(2)] = inst_50047);

(statearr_50084_50105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50065 === (8))){
var inst_50028 = (state_50064[(9)]);
var inst_50032 = (state_50064[(10)]);
var inst_50024 = (state_50064[(8)]);
var inst_50037 = inst_50024.push(inst_50028);
var tmp50081 = inst_50024;
var inst_50024__$1 = tmp50081;
var inst_50025 = inst_50032;
var state_50064__$1 = (function (){var statearr_50085 = state_50064;
(statearr_50085[(7)] = inst_50025);

(statearr_50085[(14)] = inst_50037);

(statearr_50085[(8)] = inst_50024__$1);

return statearr_50085;
})();
var statearr_50086_50106 = state_50064__$1;
(statearr_50086_50106[(2)] = null);

(statearr_50086_50106[(1)] = (2));


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
});})(c__48188__auto___50092,out))
;
return ((function (switch__48098__auto__,c__48188__auto___50092,out){
return (function() {
var cljs$core$async$state_machine__48099__auto__ = null;
var cljs$core$async$state_machine__48099__auto____0 = (function (){
var statearr_50087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50087[(0)] = cljs$core$async$state_machine__48099__auto__);

(statearr_50087[(1)] = (1));

return statearr_50087;
});
var cljs$core$async$state_machine__48099__auto____1 = (function (state_50064){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_50064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e50088){if((e50088 instanceof Object)){
var ex__48102__auto__ = e50088;
var statearr_50089_50107 = state_50064;
(statearr_50089_50107[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50108 = state_50064;
state_50064 = G__50108;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
cljs$core$async$state_machine__48099__auto__ = function(state_50064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48099__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48099__auto____1.call(this,state_50064);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48099__auto____0;
cljs$core$async$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48099__auto____1;
return cljs$core$async$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___50092,out))
})();
var state__48190__auto__ = (function (){var statearr_50090 = f__48189__auto__.call(null);
(statearr_50090[(6)] = c__48188__auto___50092);

return statearr_50090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___50092,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1524683841489
