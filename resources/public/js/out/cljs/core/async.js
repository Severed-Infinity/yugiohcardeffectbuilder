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
var G__48252 = arguments.length;
switch (G__48252) {
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
if(typeof cljs.core.async.t_cljs$core$async48253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48253 = (function (f,blockable,meta48254){
this.f = f;
this.blockable = blockable;
this.meta48254 = meta48254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48255,meta48254__$1){
var self__ = this;
var _48255__$1 = this;
return (new cljs.core.async.t_cljs$core$async48253(self__.f,self__.blockable,meta48254__$1));
});

cljs.core.async.t_cljs$core$async48253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48255){
var self__ = this;
var _48255__$1 = this;
return self__.meta48254;
});

cljs.core.async.t_cljs$core$async48253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48254","meta48254",1783625219,null)], null);
});

cljs.core.async.t_cljs$core$async48253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48253";

cljs.core.async.t_cljs$core$async48253.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48253");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48253.
 */
cljs.core.async.__GT_t_cljs$core$async48253 = (function cljs$core$async$__GT_t_cljs$core$async48253(f__$1,blockable__$1,meta48254){
return (new cljs.core.async.t_cljs$core$async48253(f__$1,blockable__$1,meta48254));
});

}

return (new cljs.core.async.t_cljs$core$async48253(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48259 = arguments.length;
switch (G__48259) {
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
var G__48262 = arguments.length;
switch (G__48262) {
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
var G__48265 = arguments.length;
switch (G__48265) {
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
var val_48267 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48267);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48267,ret){
return (function (){
return fn1.call(null,val_48267);
});})(val_48267,ret))
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
var G__48269 = arguments.length;
switch (G__48269) {
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
var n__4376__auto___48271 = n;
var x_48272 = (0);
while(true){
if((x_48272 < n__4376__auto___48271)){
(a[x_48272] = (0));

var G__48273 = (x_48272 + (1));
x_48272 = G__48273;
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

var G__48274 = (i + (1));
i = G__48274;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48275 = (function (flag,meta48276){
this.flag = flag;
this.meta48276 = meta48276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48277,meta48276__$1){
var self__ = this;
var _48277__$1 = this;
return (new cljs.core.async.t_cljs$core$async48275(self__.flag,meta48276__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48277){
var self__ = this;
var _48277__$1 = this;
return self__.meta48276;
});})(flag))
;

cljs.core.async.t_cljs$core$async48275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48275.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48276","meta48276",-675101470,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48275";

cljs.core.async.t_cljs$core$async48275.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48275");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48275.
 */
cljs.core.async.__GT_t_cljs$core$async48275 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48275(flag__$1,meta48276){
return (new cljs.core.async.t_cljs$core$async48275(flag__$1,meta48276));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48275(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48278 = (function (flag,cb,meta48279){
this.flag = flag;
this.cb = cb;
this.meta48279 = meta48279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48280,meta48279__$1){
var self__ = this;
var _48280__$1 = this;
return (new cljs.core.async.t_cljs$core$async48278(self__.flag,self__.cb,meta48279__$1));
});

cljs.core.async.t_cljs$core$async48278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48280){
var self__ = this;
var _48280__$1 = this;
return self__.meta48279;
});

cljs.core.async.t_cljs$core$async48278.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48278.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48279","meta48279",-745522012,null)], null);
});

cljs.core.async.t_cljs$core$async48278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48278";

cljs.core.async.t_cljs$core$async48278.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48278");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48278.
 */
cljs.core.async.__GT_t_cljs$core$async48278 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48278(flag__$1,cb__$1,meta48279){
return (new cljs.core.async.t_cljs$core$async48278(flag__$1,cb__$1,meta48279));
});

}

return (new cljs.core.async.t_cljs$core$async48278(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__48281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48281_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48282_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48282_SHARP_,port], null));
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
var G__48283 = (i + (1));
i = G__48283;
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
var len__4499__auto___48289 = arguments.length;
var i__4500__auto___48290 = (0);
while(true){
if((i__4500__auto___48290 < len__4499__auto___48289)){
args__4502__auto__.push((arguments[i__4500__auto___48290]));

var G__48291 = (i__4500__auto___48290 + (1));
i__4500__auto___48290 = G__48291;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48286){
var map__48287 = p__48286;
var map__48287__$1 = ((((!((map__48287 == null)))?(((((map__48287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48287):map__48287);
var opts = map__48287__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48284){
var G__48285 = cljs.core.first.call(null,seq48284);
var seq48284__$1 = cljs.core.next.call(null,seq48284);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48285,seq48284__$1);
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
var G__48293 = arguments.length;
switch (G__48293) {
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
var c__48192__auto___48339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___48339){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___48339){
return (function (state_48317){
var state_val_48318 = (state_48317[(1)]);
if((state_val_48318 === (7))){
var inst_48313 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48319_48340 = state_48317__$1;
(statearr_48319_48340[(2)] = inst_48313);

(statearr_48319_48340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (1))){
var state_48317__$1 = state_48317;
var statearr_48320_48341 = state_48317__$1;
(statearr_48320_48341[(2)] = null);

(statearr_48320_48341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (4))){
var inst_48296 = (state_48317[(7)]);
var inst_48296__$1 = (state_48317[(2)]);
var inst_48297 = (inst_48296__$1 == null);
var state_48317__$1 = (function (){var statearr_48321 = state_48317;
(statearr_48321[(7)] = inst_48296__$1);

return statearr_48321;
})();
if(cljs.core.truth_(inst_48297)){
var statearr_48322_48342 = state_48317__$1;
(statearr_48322_48342[(1)] = (5));

} else {
var statearr_48323_48343 = state_48317__$1;
(statearr_48323_48343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (13))){
var state_48317__$1 = state_48317;
var statearr_48324_48344 = state_48317__$1;
(statearr_48324_48344[(2)] = null);

(statearr_48324_48344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (6))){
var inst_48296 = (state_48317[(7)]);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48317__$1,(11),to,inst_48296);
} else {
if((state_val_48318 === (3))){
var inst_48315 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48317__$1,inst_48315);
} else {
if((state_val_48318 === (12))){
var state_48317__$1 = state_48317;
var statearr_48325_48345 = state_48317__$1;
(statearr_48325_48345[(2)] = null);

(statearr_48325_48345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (2))){
var state_48317__$1 = state_48317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48317__$1,(4),from);
} else {
if((state_val_48318 === (11))){
var inst_48306 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
if(cljs.core.truth_(inst_48306)){
var statearr_48326_48346 = state_48317__$1;
(statearr_48326_48346[(1)] = (12));

} else {
var statearr_48327_48347 = state_48317__$1;
(statearr_48327_48347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (9))){
var state_48317__$1 = state_48317;
var statearr_48328_48348 = state_48317__$1;
(statearr_48328_48348[(2)] = null);

(statearr_48328_48348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (5))){
var state_48317__$1 = state_48317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48329_48349 = state_48317__$1;
(statearr_48329_48349[(1)] = (8));

} else {
var statearr_48330_48350 = state_48317__$1;
(statearr_48330_48350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (14))){
var inst_48311 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48331_48351 = state_48317__$1;
(statearr_48331_48351[(2)] = inst_48311);

(statearr_48331_48351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (10))){
var inst_48303 = (state_48317[(2)]);
var state_48317__$1 = state_48317;
var statearr_48332_48352 = state_48317__$1;
(statearr_48332_48352[(2)] = inst_48303);

(statearr_48332_48352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48318 === (8))){
var inst_48300 = cljs.core.async.close_BANG_.call(null,to);
var state_48317__$1 = state_48317;
var statearr_48333_48353 = state_48317__$1;
(statearr_48333_48353[(2)] = inst_48300);

(statearr_48333_48353[(1)] = (10));


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
});})(c__48192__auto___48339))
;
return ((function (switch__48102__auto__,c__48192__auto___48339){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_48334 = [null,null,null,null,null,null,null,null];
(statearr_48334[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_48334[(1)] = (1));

return statearr_48334;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_48317){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48335){if((e48335 instanceof Object)){
var ex__48106__auto__ = e48335;
var statearr_48336_48354 = state_48317;
(statearr_48336_48354[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48355 = state_48317;
state_48317 = G__48355;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_48317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_48317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___48339))
})();
var state__48194__auto__ = (function (){var statearr_48337 = f__48193__auto__.call(null);
(statearr_48337[(6)] = c__48192__auto___48339);

return statearr_48337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___48339))
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
return (function (p__48356){
var vec__48357 = p__48356;
var v = cljs.core.nth.call(null,vec__48357,(0),null);
var p = cljs.core.nth.call(null,vec__48357,(1),null);
var job = vec__48357;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48192__auto___48528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___48528,res,vec__48357,v,p,job,jobs,results){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___48528,res,vec__48357,v,p,job,jobs,results){
return (function (state_48364){
var state_val_48365 = (state_48364[(1)]);
if((state_val_48365 === (1))){
var state_48364__$1 = state_48364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48364__$1,(2),res,v);
} else {
if((state_val_48365 === (2))){
var inst_48361 = (state_48364[(2)]);
var inst_48362 = cljs.core.async.close_BANG_.call(null,res);
var state_48364__$1 = (function (){var statearr_48366 = state_48364;
(statearr_48366[(7)] = inst_48361);

return statearr_48366;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48364__$1,inst_48362);
} else {
return null;
}
}
});})(c__48192__auto___48528,res,vec__48357,v,p,job,jobs,results))
;
return ((function (switch__48102__auto__,c__48192__auto___48528,res,vec__48357,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0 = (function (){
var statearr_48367 = [null,null,null,null,null,null,null,null];
(statearr_48367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__);

(statearr_48367[(1)] = (1));

return statearr_48367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1 = (function (state_48364){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48368){if((e48368 instanceof Object)){
var ex__48106__auto__ = e48368;
var statearr_48369_48529 = state_48364;
(statearr_48369_48529[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48530 = state_48364;
state_48364 = G__48530;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = function(state_48364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1.call(this,state_48364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___48528,res,vec__48357,v,p,job,jobs,results))
})();
var state__48194__auto__ = (function (){var statearr_48370 = f__48193__auto__.call(null);
(statearr_48370[(6)] = c__48192__auto___48528);

return statearr_48370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___48528,res,vec__48357,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48371){
var vec__48372 = p__48371;
var v = cljs.core.nth.call(null,vec__48372,(0),null);
var p = cljs.core.nth.call(null,vec__48372,(1),null);
var job = vec__48372;
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
var n__4376__auto___48531 = n;
var __48532 = (0);
while(true){
if((__48532 < n__4376__auto___48531)){
var G__48375_48533 = type;
var G__48375_48534__$1 = (((G__48375_48533 instanceof cljs.core.Keyword))?G__48375_48533.fqn:null);
switch (G__48375_48534__$1) {
case "compute":
var c__48192__auto___48536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48532,c__48192__auto___48536,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (__48532,c__48192__auto___48536,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async){
return (function (state_48388){
var state_val_48389 = (state_48388[(1)]);
if((state_val_48389 === (1))){
var state_48388__$1 = state_48388;
var statearr_48390_48537 = state_48388__$1;
(statearr_48390_48537[(2)] = null);

(statearr_48390_48537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (2))){
var state_48388__$1 = state_48388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48388__$1,(4),jobs);
} else {
if((state_val_48389 === (3))){
var inst_48386 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48388__$1,inst_48386);
} else {
if((state_val_48389 === (4))){
var inst_48378 = (state_48388[(2)]);
var inst_48379 = process.call(null,inst_48378);
var state_48388__$1 = state_48388;
if(cljs.core.truth_(inst_48379)){
var statearr_48391_48538 = state_48388__$1;
(statearr_48391_48538[(1)] = (5));

} else {
var statearr_48392_48539 = state_48388__$1;
(statearr_48392_48539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (5))){
var state_48388__$1 = state_48388;
var statearr_48393_48540 = state_48388__$1;
(statearr_48393_48540[(2)] = null);

(statearr_48393_48540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (6))){
var state_48388__$1 = state_48388;
var statearr_48394_48541 = state_48388__$1;
(statearr_48394_48541[(2)] = null);

(statearr_48394_48541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (7))){
var inst_48384 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48395_48542 = state_48388__$1;
(statearr_48395_48542[(2)] = inst_48384);

(statearr_48395_48542[(1)] = (3));


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
});})(__48532,c__48192__auto___48536,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async))
;
return ((function (__48532,switch__48102__auto__,c__48192__auto___48536,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0 = (function (){
var statearr_48396 = [null,null,null,null,null,null,null];
(statearr_48396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__);

(statearr_48396[(1)] = (1));

return statearr_48396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1 = (function (state_48388){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48397){if((e48397 instanceof Object)){
var ex__48106__auto__ = e48397;
var statearr_48398_48543 = state_48388;
(statearr_48398_48543[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48544 = state_48388;
state_48388 = G__48544;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = function(state_48388){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1.call(this,state_48388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__;
})()
;})(__48532,switch__48102__auto__,c__48192__auto___48536,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async))
})();
var state__48194__auto__ = (function (){var statearr_48399 = f__48193__auto__.call(null);
(statearr_48399[(6)] = c__48192__auto___48536);

return statearr_48399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(__48532,c__48192__auto___48536,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async))
);


break;
case "async":
var c__48192__auto___48545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48532,c__48192__auto___48545,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (__48532,c__48192__auto___48545,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async){
return (function (state_48412){
var state_val_48413 = (state_48412[(1)]);
if((state_val_48413 === (1))){
var state_48412__$1 = state_48412;
var statearr_48414_48546 = state_48412__$1;
(statearr_48414_48546[(2)] = null);

(statearr_48414_48546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48413 === (2))){
var state_48412__$1 = state_48412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48412__$1,(4),jobs);
} else {
if((state_val_48413 === (3))){
var inst_48410 = (state_48412[(2)]);
var state_48412__$1 = state_48412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48412__$1,inst_48410);
} else {
if((state_val_48413 === (4))){
var inst_48402 = (state_48412[(2)]);
var inst_48403 = async.call(null,inst_48402);
var state_48412__$1 = state_48412;
if(cljs.core.truth_(inst_48403)){
var statearr_48415_48547 = state_48412__$1;
(statearr_48415_48547[(1)] = (5));

} else {
var statearr_48416_48548 = state_48412__$1;
(statearr_48416_48548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48413 === (5))){
var state_48412__$1 = state_48412;
var statearr_48417_48549 = state_48412__$1;
(statearr_48417_48549[(2)] = null);

(statearr_48417_48549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48413 === (6))){
var state_48412__$1 = state_48412;
var statearr_48418_48550 = state_48412__$1;
(statearr_48418_48550[(2)] = null);

(statearr_48418_48550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48413 === (7))){
var inst_48408 = (state_48412[(2)]);
var state_48412__$1 = state_48412;
var statearr_48419_48551 = state_48412__$1;
(statearr_48419_48551[(2)] = inst_48408);

(statearr_48419_48551[(1)] = (3));


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
});})(__48532,c__48192__auto___48545,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async))
;
return ((function (__48532,switch__48102__auto__,c__48192__auto___48545,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0 = (function (){
var statearr_48420 = [null,null,null,null,null,null,null];
(statearr_48420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__);

(statearr_48420[(1)] = (1));

return statearr_48420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1 = (function (state_48412){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48421){if((e48421 instanceof Object)){
var ex__48106__auto__ = e48421;
var statearr_48422_48552 = state_48412;
(statearr_48422_48552[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48553 = state_48412;
state_48412 = G__48553;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = function(state_48412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1.call(this,state_48412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__;
})()
;})(__48532,switch__48102__auto__,c__48192__auto___48545,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async))
})();
var state__48194__auto__ = (function (){var statearr_48423 = f__48193__auto__.call(null);
(statearr_48423[(6)] = c__48192__auto___48545);

return statearr_48423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(__48532,c__48192__auto___48545,G__48375_48533,G__48375_48534__$1,n__4376__auto___48531,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48375_48534__$1)].join('')));

}

var G__48554 = (__48532 + (1));
__48532 = G__48554;
continue;
} else {
}
break;
}

var c__48192__auto___48555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___48555,jobs,results,process,async){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___48555,jobs,results,process,async){
return (function (state_48445){
var state_val_48446 = (state_48445[(1)]);
if((state_val_48446 === (1))){
var state_48445__$1 = state_48445;
var statearr_48447_48556 = state_48445__$1;
(statearr_48447_48556[(2)] = null);

(statearr_48447_48556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48446 === (2))){
var state_48445__$1 = state_48445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48445__$1,(4),from);
} else {
if((state_val_48446 === (3))){
var inst_48443 = (state_48445[(2)]);
var state_48445__$1 = state_48445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48445__$1,inst_48443);
} else {
if((state_val_48446 === (4))){
var inst_48426 = (state_48445[(7)]);
var inst_48426__$1 = (state_48445[(2)]);
var inst_48427 = (inst_48426__$1 == null);
var state_48445__$1 = (function (){var statearr_48448 = state_48445;
(statearr_48448[(7)] = inst_48426__$1);

return statearr_48448;
})();
if(cljs.core.truth_(inst_48427)){
var statearr_48449_48557 = state_48445__$1;
(statearr_48449_48557[(1)] = (5));

} else {
var statearr_48450_48558 = state_48445__$1;
(statearr_48450_48558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48446 === (5))){
var inst_48429 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48445__$1 = state_48445;
var statearr_48451_48559 = state_48445__$1;
(statearr_48451_48559[(2)] = inst_48429);

(statearr_48451_48559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48446 === (6))){
var inst_48431 = (state_48445[(8)]);
var inst_48426 = (state_48445[(7)]);
var inst_48431__$1 = cljs.core.async.chan.call(null,(1));
var inst_48432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48433 = [inst_48426,inst_48431__$1];
var inst_48434 = (new cljs.core.PersistentVector(null,2,(5),inst_48432,inst_48433,null));
var state_48445__$1 = (function (){var statearr_48452 = state_48445;
(statearr_48452[(8)] = inst_48431__$1);

return statearr_48452;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48445__$1,(8),jobs,inst_48434);
} else {
if((state_val_48446 === (7))){
var inst_48441 = (state_48445[(2)]);
var state_48445__$1 = state_48445;
var statearr_48453_48560 = state_48445__$1;
(statearr_48453_48560[(2)] = inst_48441);

(statearr_48453_48560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48446 === (8))){
var inst_48431 = (state_48445[(8)]);
var inst_48436 = (state_48445[(2)]);
var state_48445__$1 = (function (){var statearr_48454 = state_48445;
(statearr_48454[(9)] = inst_48436);

return statearr_48454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48445__$1,(9),results,inst_48431);
} else {
if((state_val_48446 === (9))){
var inst_48438 = (state_48445[(2)]);
var state_48445__$1 = (function (){var statearr_48455 = state_48445;
(statearr_48455[(10)] = inst_48438);

return statearr_48455;
})();
var statearr_48456_48561 = state_48445__$1;
(statearr_48456_48561[(2)] = null);

(statearr_48456_48561[(1)] = (2));


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
});})(c__48192__auto___48555,jobs,results,process,async))
;
return ((function (switch__48102__auto__,c__48192__auto___48555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0 = (function (){
var statearr_48457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__);

(statearr_48457[(1)] = (1));

return statearr_48457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1 = (function (state_48445){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48458){if((e48458 instanceof Object)){
var ex__48106__auto__ = e48458;
var statearr_48459_48562 = state_48445;
(statearr_48459_48562[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48563 = state_48445;
state_48445 = G__48563;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = function(state_48445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1.call(this,state_48445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___48555,jobs,results,process,async))
})();
var state__48194__auto__ = (function (){var statearr_48460 = f__48193__auto__.call(null);
(statearr_48460[(6)] = c__48192__auto___48555);

return statearr_48460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___48555,jobs,results,process,async))
);


var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__,jobs,results,process,async){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__,jobs,results,process,async){
return (function (state_48498){
var state_val_48499 = (state_48498[(1)]);
if((state_val_48499 === (7))){
var inst_48494 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48500_48564 = state_48498__$1;
(statearr_48500_48564[(2)] = inst_48494);

(statearr_48500_48564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (20))){
var state_48498__$1 = state_48498;
var statearr_48501_48565 = state_48498__$1;
(statearr_48501_48565[(2)] = null);

(statearr_48501_48565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (1))){
var state_48498__$1 = state_48498;
var statearr_48502_48566 = state_48498__$1;
(statearr_48502_48566[(2)] = null);

(statearr_48502_48566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (4))){
var inst_48463 = (state_48498[(7)]);
var inst_48463__$1 = (state_48498[(2)]);
var inst_48464 = (inst_48463__$1 == null);
var state_48498__$1 = (function (){var statearr_48503 = state_48498;
(statearr_48503[(7)] = inst_48463__$1);

return statearr_48503;
})();
if(cljs.core.truth_(inst_48464)){
var statearr_48504_48567 = state_48498__$1;
(statearr_48504_48567[(1)] = (5));

} else {
var statearr_48505_48568 = state_48498__$1;
(statearr_48505_48568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (15))){
var inst_48476 = (state_48498[(8)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48498__$1,(18),to,inst_48476);
} else {
if((state_val_48499 === (21))){
var inst_48489 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48506_48569 = state_48498__$1;
(statearr_48506_48569[(2)] = inst_48489);

(statearr_48506_48569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (13))){
var inst_48491 = (state_48498[(2)]);
var state_48498__$1 = (function (){var statearr_48507 = state_48498;
(statearr_48507[(9)] = inst_48491);

return statearr_48507;
})();
var statearr_48508_48570 = state_48498__$1;
(statearr_48508_48570[(2)] = null);

(statearr_48508_48570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (6))){
var inst_48463 = (state_48498[(7)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48498__$1,(11),inst_48463);
} else {
if((state_val_48499 === (17))){
var inst_48484 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48484)){
var statearr_48509_48571 = state_48498__$1;
(statearr_48509_48571[(1)] = (19));

} else {
var statearr_48510_48572 = state_48498__$1;
(statearr_48510_48572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (3))){
var inst_48496 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48498__$1,inst_48496);
} else {
if((state_val_48499 === (12))){
var inst_48473 = (state_48498[(10)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48498__$1,(14),inst_48473);
} else {
if((state_val_48499 === (2))){
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48498__$1,(4),results);
} else {
if((state_val_48499 === (19))){
var state_48498__$1 = state_48498;
var statearr_48511_48573 = state_48498__$1;
(statearr_48511_48573[(2)] = null);

(statearr_48511_48573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (11))){
var inst_48473 = (state_48498[(2)]);
var state_48498__$1 = (function (){var statearr_48512 = state_48498;
(statearr_48512[(10)] = inst_48473);

return statearr_48512;
})();
var statearr_48513_48574 = state_48498__$1;
(statearr_48513_48574[(2)] = null);

(statearr_48513_48574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (9))){
var state_48498__$1 = state_48498;
var statearr_48514_48575 = state_48498__$1;
(statearr_48514_48575[(2)] = null);

(statearr_48514_48575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (5))){
var state_48498__$1 = state_48498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48515_48576 = state_48498__$1;
(statearr_48515_48576[(1)] = (8));

} else {
var statearr_48516_48577 = state_48498__$1;
(statearr_48516_48577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (14))){
var inst_48476 = (state_48498[(8)]);
var inst_48478 = (state_48498[(11)]);
var inst_48476__$1 = (state_48498[(2)]);
var inst_48477 = (inst_48476__$1 == null);
var inst_48478__$1 = cljs.core.not.call(null,inst_48477);
var state_48498__$1 = (function (){var statearr_48517 = state_48498;
(statearr_48517[(8)] = inst_48476__$1);

(statearr_48517[(11)] = inst_48478__$1);

return statearr_48517;
})();
if(inst_48478__$1){
var statearr_48518_48578 = state_48498__$1;
(statearr_48518_48578[(1)] = (15));

} else {
var statearr_48519_48579 = state_48498__$1;
(statearr_48519_48579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (16))){
var inst_48478 = (state_48498[(11)]);
var state_48498__$1 = state_48498;
var statearr_48520_48580 = state_48498__$1;
(statearr_48520_48580[(2)] = inst_48478);

(statearr_48520_48580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (10))){
var inst_48470 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48521_48581 = state_48498__$1;
(statearr_48521_48581[(2)] = inst_48470);

(statearr_48521_48581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (18))){
var inst_48481 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48522_48582 = state_48498__$1;
(statearr_48522_48582[(2)] = inst_48481);

(statearr_48522_48582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (8))){
var inst_48467 = cljs.core.async.close_BANG_.call(null,to);
var state_48498__$1 = state_48498;
var statearr_48523_48583 = state_48498__$1;
(statearr_48523_48583[(2)] = inst_48467);

(statearr_48523_48583[(1)] = (10));


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
});})(c__48192__auto__,jobs,results,process,async))
;
return ((function (switch__48102__auto__,c__48192__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0 = (function (){
var statearr_48524 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__);

(statearr_48524[(1)] = (1));

return statearr_48524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1 = (function (state_48498){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48525){if((e48525 instanceof Object)){
var ex__48106__auto__ = e48525;
var statearr_48526_48584 = state_48498;
(statearr_48526_48584[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48585 = state_48498;
state_48498 = G__48585;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__ = function(state_48498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1.call(this,state_48498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48103__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__,jobs,results,process,async))
})();
var state__48194__auto__ = (function (){var statearr_48527 = f__48193__auto__.call(null);
(statearr_48527[(6)] = c__48192__auto__);

return statearr_48527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__,jobs,results,process,async))
);

return c__48192__auto__;
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
var G__48587 = arguments.length;
switch (G__48587) {
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
var G__48590 = arguments.length;
switch (G__48590) {
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
var G__48593 = arguments.length;
switch (G__48593) {
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
var c__48192__auto___48642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___48642,tc,fc){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___48642,tc,fc){
return (function (state_48619){
var state_val_48620 = (state_48619[(1)]);
if((state_val_48620 === (7))){
var inst_48615 = (state_48619[(2)]);
var state_48619__$1 = state_48619;
var statearr_48621_48643 = state_48619__$1;
(statearr_48621_48643[(2)] = inst_48615);

(statearr_48621_48643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (1))){
var state_48619__$1 = state_48619;
var statearr_48622_48644 = state_48619__$1;
(statearr_48622_48644[(2)] = null);

(statearr_48622_48644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (4))){
var inst_48596 = (state_48619[(7)]);
var inst_48596__$1 = (state_48619[(2)]);
var inst_48597 = (inst_48596__$1 == null);
var state_48619__$1 = (function (){var statearr_48623 = state_48619;
(statearr_48623[(7)] = inst_48596__$1);

return statearr_48623;
})();
if(cljs.core.truth_(inst_48597)){
var statearr_48624_48645 = state_48619__$1;
(statearr_48624_48645[(1)] = (5));

} else {
var statearr_48625_48646 = state_48619__$1;
(statearr_48625_48646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (13))){
var state_48619__$1 = state_48619;
var statearr_48626_48647 = state_48619__$1;
(statearr_48626_48647[(2)] = null);

(statearr_48626_48647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (6))){
var inst_48596 = (state_48619[(7)]);
var inst_48602 = p.call(null,inst_48596);
var state_48619__$1 = state_48619;
if(cljs.core.truth_(inst_48602)){
var statearr_48627_48648 = state_48619__$1;
(statearr_48627_48648[(1)] = (9));

} else {
var statearr_48628_48649 = state_48619__$1;
(statearr_48628_48649[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (3))){
var inst_48617 = (state_48619[(2)]);
var state_48619__$1 = state_48619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48619__$1,inst_48617);
} else {
if((state_val_48620 === (12))){
var state_48619__$1 = state_48619;
var statearr_48629_48650 = state_48619__$1;
(statearr_48629_48650[(2)] = null);

(statearr_48629_48650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (2))){
var state_48619__$1 = state_48619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48619__$1,(4),ch);
} else {
if((state_val_48620 === (11))){
var inst_48596 = (state_48619[(7)]);
var inst_48606 = (state_48619[(2)]);
var state_48619__$1 = state_48619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48619__$1,(8),inst_48606,inst_48596);
} else {
if((state_val_48620 === (9))){
var state_48619__$1 = state_48619;
var statearr_48630_48651 = state_48619__$1;
(statearr_48630_48651[(2)] = tc);

(statearr_48630_48651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (5))){
var inst_48599 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48600 = cljs.core.async.close_BANG_.call(null,fc);
var state_48619__$1 = (function (){var statearr_48631 = state_48619;
(statearr_48631[(8)] = inst_48599);

return statearr_48631;
})();
var statearr_48632_48652 = state_48619__$1;
(statearr_48632_48652[(2)] = inst_48600);

(statearr_48632_48652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (14))){
var inst_48613 = (state_48619[(2)]);
var state_48619__$1 = state_48619;
var statearr_48633_48653 = state_48619__$1;
(statearr_48633_48653[(2)] = inst_48613);

(statearr_48633_48653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (10))){
var state_48619__$1 = state_48619;
var statearr_48634_48654 = state_48619__$1;
(statearr_48634_48654[(2)] = fc);

(statearr_48634_48654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48620 === (8))){
var inst_48608 = (state_48619[(2)]);
var state_48619__$1 = state_48619;
if(cljs.core.truth_(inst_48608)){
var statearr_48635_48655 = state_48619__$1;
(statearr_48635_48655[(1)] = (12));

} else {
var statearr_48636_48656 = state_48619__$1;
(statearr_48636_48656[(1)] = (13));

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
});})(c__48192__auto___48642,tc,fc))
;
return ((function (switch__48102__auto__,c__48192__auto___48642,tc,fc){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_48637 = [null,null,null,null,null,null,null,null,null];
(statearr_48637[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_48637[(1)] = (1));

return statearr_48637;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_48619){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48638){if((e48638 instanceof Object)){
var ex__48106__auto__ = e48638;
var statearr_48639_48657 = state_48619;
(statearr_48639_48657[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48658 = state_48619;
state_48619 = G__48658;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_48619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_48619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___48642,tc,fc))
})();
var state__48194__auto__ = (function (){var statearr_48640 = f__48193__auto__.call(null);
(statearr_48640[(6)] = c__48192__auto___48642);

return statearr_48640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___48642,tc,fc))
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
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__){
return (function (state_48679){
var state_val_48680 = (state_48679[(1)]);
if((state_val_48680 === (7))){
var inst_48675 = (state_48679[(2)]);
var state_48679__$1 = state_48679;
var statearr_48681_48699 = state_48679__$1;
(statearr_48681_48699[(2)] = inst_48675);

(statearr_48681_48699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (1))){
var inst_48659 = init;
var state_48679__$1 = (function (){var statearr_48682 = state_48679;
(statearr_48682[(7)] = inst_48659);

return statearr_48682;
})();
var statearr_48683_48700 = state_48679__$1;
(statearr_48683_48700[(2)] = null);

(statearr_48683_48700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (4))){
var inst_48662 = (state_48679[(8)]);
var inst_48662__$1 = (state_48679[(2)]);
var inst_48663 = (inst_48662__$1 == null);
var state_48679__$1 = (function (){var statearr_48684 = state_48679;
(statearr_48684[(8)] = inst_48662__$1);

return statearr_48684;
})();
if(cljs.core.truth_(inst_48663)){
var statearr_48685_48701 = state_48679__$1;
(statearr_48685_48701[(1)] = (5));

} else {
var statearr_48686_48702 = state_48679__$1;
(statearr_48686_48702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (6))){
var inst_48666 = (state_48679[(9)]);
var inst_48659 = (state_48679[(7)]);
var inst_48662 = (state_48679[(8)]);
var inst_48666__$1 = f.call(null,inst_48659,inst_48662);
var inst_48667 = cljs.core.reduced_QMARK_.call(null,inst_48666__$1);
var state_48679__$1 = (function (){var statearr_48687 = state_48679;
(statearr_48687[(9)] = inst_48666__$1);

return statearr_48687;
})();
if(inst_48667){
var statearr_48688_48703 = state_48679__$1;
(statearr_48688_48703[(1)] = (8));

} else {
var statearr_48689_48704 = state_48679__$1;
(statearr_48689_48704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (3))){
var inst_48677 = (state_48679[(2)]);
var state_48679__$1 = state_48679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48679__$1,inst_48677);
} else {
if((state_val_48680 === (2))){
var state_48679__$1 = state_48679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48679__$1,(4),ch);
} else {
if((state_val_48680 === (9))){
var inst_48666 = (state_48679[(9)]);
var inst_48659 = inst_48666;
var state_48679__$1 = (function (){var statearr_48690 = state_48679;
(statearr_48690[(7)] = inst_48659);

return statearr_48690;
})();
var statearr_48691_48705 = state_48679__$1;
(statearr_48691_48705[(2)] = null);

(statearr_48691_48705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (5))){
var inst_48659 = (state_48679[(7)]);
var state_48679__$1 = state_48679;
var statearr_48692_48706 = state_48679__$1;
(statearr_48692_48706[(2)] = inst_48659);

(statearr_48692_48706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (10))){
var inst_48673 = (state_48679[(2)]);
var state_48679__$1 = state_48679;
var statearr_48693_48707 = state_48679__$1;
(statearr_48693_48707[(2)] = inst_48673);

(statearr_48693_48707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48680 === (8))){
var inst_48666 = (state_48679[(9)]);
var inst_48669 = cljs.core.deref.call(null,inst_48666);
var state_48679__$1 = state_48679;
var statearr_48694_48708 = state_48679__$1;
(statearr_48694_48708[(2)] = inst_48669);

(statearr_48694_48708[(1)] = (10));


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
});})(c__48192__auto__))
;
return ((function (switch__48102__auto__,c__48192__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48103__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48103__auto____0 = (function (){
var statearr_48695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48695[(0)] = cljs$core$async$reduce_$_state_machine__48103__auto__);

(statearr_48695[(1)] = (1));

return statearr_48695;
});
var cljs$core$async$reduce_$_state_machine__48103__auto____1 = (function (state_48679){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48696){if((e48696 instanceof Object)){
var ex__48106__auto__ = e48696;
var statearr_48697_48709 = state_48679;
(statearr_48697_48709[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48710 = state_48679;
state_48679 = G__48710;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48103__auto__ = function(state_48679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48103__auto____1.call(this,state_48679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48103__auto____0;
cljs$core$async$reduce_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48103__auto____1;
return cljs$core$async$reduce_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__))
})();
var state__48194__auto__ = (function (){var statearr_48698 = f__48193__auto__.call(null);
(statearr_48698[(6)] = c__48192__auto__);

return statearr_48698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__))
);

return c__48192__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__,f__$1){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__,f__$1){
return (function (state_48716){
var state_val_48717 = (state_48716[(1)]);
if((state_val_48717 === (1))){
var inst_48711 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48716__$1 = state_48716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48716__$1,(2),inst_48711);
} else {
if((state_val_48717 === (2))){
var inst_48713 = (state_48716[(2)]);
var inst_48714 = f__$1.call(null,inst_48713);
var state_48716__$1 = state_48716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48716__$1,inst_48714);
} else {
return null;
}
}
});})(c__48192__auto__,f__$1))
;
return ((function (switch__48102__auto__,c__48192__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48103__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48103__auto____0 = (function (){
var statearr_48718 = [null,null,null,null,null,null,null];
(statearr_48718[(0)] = cljs$core$async$transduce_$_state_machine__48103__auto__);

(statearr_48718[(1)] = (1));

return statearr_48718;
});
var cljs$core$async$transduce_$_state_machine__48103__auto____1 = (function (state_48716){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48719){if((e48719 instanceof Object)){
var ex__48106__auto__ = e48719;
var statearr_48720_48722 = state_48716;
(statearr_48720_48722[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48723 = state_48716;
state_48716 = G__48723;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48103__auto__ = function(state_48716){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48103__auto____1.call(this,state_48716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48103__auto____0;
cljs$core$async$transduce_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48103__auto____1;
return cljs$core$async$transduce_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__,f__$1))
})();
var state__48194__auto__ = (function (){var statearr_48721 = f__48193__auto__.call(null);
(statearr_48721[(6)] = c__48192__auto__);

return statearr_48721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__,f__$1))
);

return c__48192__auto__;
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
var G__48725 = arguments.length;
switch (G__48725) {
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
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__){
return (function (state_48750){
var state_val_48751 = (state_48750[(1)]);
if((state_val_48751 === (7))){
var inst_48732 = (state_48750[(2)]);
var state_48750__$1 = state_48750;
var statearr_48752_48773 = state_48750__$1;
(statearr_48752_48773[(2)] = inst_48732);

(statearr_48752_48773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (1))){
var inst_48726 = cljs.core.seq.call(null,coll);
var inst_48727 = inst_48726;
var state_48750__$1 = (function (){var statearr_48753 = state_48750;
(statearr_48753[(7)] = inst_48727);

return statearr_48753;
})();
var statearr_48754_48774 = state_48750__$1;
(statearr_48754_48774[(2)] = null);

(statearr_48754_48774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (4))){
var inst_48727 = (state_48750[(7)]);
var inst_48730 = cljs.core.first.call(null,inst_48727);
var state_48750__$1 = state_48750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48750__$1,(7),ch,inst_48730);
} else {
if((state_val_48751 === (13))){
var inst_48744 = (state_48750[(2)]);
var state_48750__$1 = state_48750;
var statearr_48755_48775 = state_48750__$1;
(statearr_48755_48775[(2)] = inst_48744);

(statearr_48755_48775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (6))){
var inst_48735 = (state_48750[(2)]);
var state_48750__$1 = state_48750;
if(cljs.core.truth_(inst_48735)){
var statearr_48756_48776 = state_48750__$1;
(statearr_48756_48776[(1)] = (8));

} else {
var statearr_48757_48777 = state_48750__$1;
(statearr_48757_48777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (3))){
var inst_48748 = (state_48750[(2)]);
var state_48750__$1 = state_48750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48750__$1,inst_48748);
} else {
if((state_val_48751 === (12))){
var state_48750__$1 = state_48750;
var statearr_48758_48778 = state_48750__$1;
(statearr_48758_48778[(2)] = null);

(statearr_48758_48778[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (2))){
var inst_48727 = (state_48750[(7)]);
var state_48750__$1 = state_48750;
if(cljs.core.truth_(inst_48727)){
var statearr_48759_48779 = state_48750__$1;
(statearr_48759_48779[(1)] = (4));

} else {
var statearr_48760_48780 = state_48750__$1;
(statearr_48760_48780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (11))){
var inst_48741 = cljs.core.async.close_BANG_.call(null,ch);
var state_48750__$1 = state_48750;
var statearr_48761_48781 = state_48750__$1;
(statearr_48761_48781[(2)] = inst_48741);

(statearr_48761_48781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (9))){
var state_48750__$1 = state_48750;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48762_48782 = state_48750__$1;
(statearr_48762_48782[(1)] = (11));

} else {
var statearr_48763_48783 = state_48750__$1;
(statearr_48763_48783[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (5))){
var inst_48727 = (state_48750[(7)]);
var state_48750__$1 = state_48750;
var statearr_48764_48784 = state_48750__$1;
(statearr_48764_48784[(2)] = inst_48727);

(statearr_48764_48784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (10))){
var inst_48746 = (state_48750[(2)]);
var state_48750__$1 = state_48750;
var statearr_48765_48785 = state_48750__$1;
(statearr_48765_48785[(2)] = inst_48746);

(statearr_48765_48785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48751 === (8))){
var inst_48727 = (state_48750[(7)]);
var inst_48737 = cljs.core.next.call(null,inst_48727);
var inst_48727__$1 = inst_48737;
var state_48750__$1 = (function (){var statearr_48766 = state_48750;
(statearr_48766[(7)] = inst_48727__$1);

return statearr_48766;
})();
var statearr_48767_48786 = state_48750__$1;
(statearr_48767_48786[(2)] = null);

(statearr_48767_48786[(1)] = (2));


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
});})(c__48192__auto__))
;
return ((function (switch__48102__auto__,c__48192__auto__){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_48768 = [null,null,null,null,null,null,null,null];
(statearr_48768[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_48768[(1)] = (1));

return statearr_48768;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_48750){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e48769){if((e48769 instanceof Object)){
var ex__48106__auto__ = e48769;
var statearr_48770_48787 = state_48750;
(statearr_48770_48787[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48788 = state_48750;
state_48750 = G__48788;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_48750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_48750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__))
})();
var state__48194__auto__ = (function (){var statearr_48771 = f__48193__auto__.call(null);
(statearr_48771[(6)] = c__48192__auto__);

return statearr_48771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__))
);

return c__48192__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async48789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48789 = (function (ch,cs,meta48790){
this.ch = ch;
this.cs = cs;
this.meta48790 = meta48790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48791,meta48790__$1){
var self__ = this;
var _48791__$1 = this;
return (new cljs.core.async.t_cljs$core$async48789(self__.ch,self__.cs,meta48790__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48791){
var self__ = this;
var _48791__$1 = this;
return self__.meta48790;
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48790","meta48790",1317542749,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48789";

cljs.core.async.t_cljs$core$async48789.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async48789");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48789.
 */
cljs.core.async.__GT_t_cljs$core$async48789 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48789(ch__$1,cs__$1,meta48790){
return (new cljs.core.async.t_cljs$core$async48789(ch__$1,cs__$1,meta48790));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48789(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48192__auto___49011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49011,cs,m,dchan,dctr,done){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49011,cs,m,dchan,dctr,done){
return (function (state_48926){
var state_val_48927 = (state_48926[(1)]);
if((state_val_48927 === (7))){
var inst_48922 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48928_49012 = state_48926__$1;
(statearr_48928_49012[(2)] = inst_48922);

(statearr_48928_49012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (20))){
var inst_48825 = (state_48926[(7)]);
var inst_48837 = cljs.core.first.call(null,inst_48825);
var inst_48838 = cljs.core.nth.call(null,inst_48837,(0),null);
var inst_48839 = cljs.core.nth.call(null,inst_48837,(1),null);
var state_48926__$1 = (function (){var statearr_48929 = state_48926;
(statearr_48929[(8)] = inst_48838);

return statearr_48929;
})();
if(cljs.core.truth_(inst_48839)){
var statearr_48930_49013 = state_48926__$1;
(statearr_48930_49013[(1)] = (22));

} else {
var statearr_48931_49014 = state_48926__$1;
(statearr_48931_49014[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (27))){
var inst_48794 = (state_48926[(9)]);
var inst_48867 = (state_48926[(10)]);
var inst_48869 = (state_48926[(11)]);
var inst_48874 = (state_48926[(12)]);
var inst_48874__$1 = cljs.core._nth.call(null,inst_48867,inst_48869);
var inst_48875 = cljs.core.async.put_BANG_.call(null,inst_48874__$1,inst_48794,done);
var state_48926__$1 = (function (){var statearr_48932 = state_48926;
(statearr_48932[(12)] = inst_48874__$1);

return statearr_48932;
})();
if(cljs.core.truth_(inst_48875)){
var statearr_48933_49015 = state_48926__$1;
(statearr_48933_49015[(1)] = (30));

} else {
var statearr_48934_49016 = state_48926__$1;
(statearr_48934_49016[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (1))){
var state_48926__$1 = state_48926;
var statearr_48935_49017 = state_48926__$1;
(statearr_48935_49017[(2)] = null);

(statearr_48935_49017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (24))){
var inst_48825 = (state_48926[(7)]);
var inst_48844 = (state_48926[(2)]);
var inst_48845 = cljs.core.next.call(null,inst_48825);
var inst_48803 = inst_48845;
var inst_48804 = null;
var inst_48805 = (0);
var inst_48806 = (0);
var state_48926__$1 = (function (){var statearr_48936 = state_48926;
(statearr_48936[(13)] = inst_48844);

(statearr_48936[(14)] = inst_48803);

(statearr_48936[(15)] = inst_48804);

(statearr_48936[(16)] = inst_48806);

(statearr_48936[(17)] = inst_48805);

return statearr_48936;
})();
var statearr_48937_49018 = state_48926__$1;
(statearr_48937_49018[(2)] = null);

(statearr_48937_49018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (39))){
var state_48926__$1 = state_48926;
var statearr_48941_49019 = state_48926__$1;
(statearr_48941_49019[(2)] = null);

(statearr_48941_49019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (4))){
var inst_48794 = (state_48926[(9)]);
var inst_48794__$1 = (state_48926[(2)]);
var inst_48795 = (inst_48794__$1 == null);
var state_48926__$1 = (function (){var statearr_48942 = state_48926;
(statearr_48942[(9)] = inst_48794__$1);

return statearr_48942;
})();
if(cljs.core.truth_(inst_48795)){
var statearr_48943_49020 = state_48926__$1;
(statearr_48943_49020[(1)] = (5));

} else {
var statearr_48944_49021 = state_48926__$1;
(statearr_48944_49021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (15))){
var inst_48803 = (state_48926[(14)]);
var inst_48804 = (state_48926[(15)]);
var inst_48806 = (state_48926[(16)]);
var inst_48805 = (state_48926[(17)]);
var inst_48821 = (state_48926[(2)]);
var inst_48822 = (inst_48806 + (1));
var tmp48938 = inst_48803;
var tmp48939 = inst_48804;
var tmp48940 = inst_48805;
var inst_48803__$1 = tmp48938;
var inst_48804__$1 = tmp48939;
var inst_48805__$1 = tmp48940;
var inst_48806__$1 = inst_48822;
var state_48926__$1 = (function (){var statearr_48945 = state_48926;
(statearr_48945[(18)] = inst_48821);

(statearr_48945[(14)] = inst_48803__$1);

(statearr_48945[(15)] = inst_48804__$1);

(statearr_48945[(16)] = inst_48806__$1);

(statearr_48945[(17)] = inst_48805__$1);

return statearr_48945;
})();
var statearr_48946_49022 = state_48926__$1;
(statearr_48946_49022[(2)] = null);

(statearr_48946_49022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (21))){
var inst_48848 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48950_49023 = state_48926__$1;
(statearr_48950_49023[(2)] = inst_48848);

(statearr_48950_49023[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (31))){
var inst_48874 = (state_48926[(12)]);
var inst_48878 = done.call(null,null);
var inst_48879 = cljs.core.async.untap_STAR_.call(null,m,inst_48874);
var state_48926__$1 = (function (){var statearr_48951 = state_48926;
(statearr_48951[(19)] = inst_48878);

return statearr_48951;
})();
var statearr_48952_49024 = state_48926__$1;
(statearr_48952_49024[(2)] = inst_48879);

(statearr_48952_49024[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (32))){
var inst_48868 = (state_48926[(20)]);
var inst_48867 = (state_48926[(10)]);
var inst_48869 = (state_48926[(11)]);
var inst_48866 = (state_48926[(21)]);
var inst_48881 = (state_48926[(2)]);
var inst_48882 = (inst_48869 + (1));
var tmp48947 = inst_48868;
var tmp48948 = inst_48867;
var tmp48949 = inst_48866;
var inst_48866__$1 = tmp48949;
var inst_48867__$1 = tmp48948;
var inst_48868__$1 = tmp48947;
var inst_48869__$1 = inst_48882;
var state_48926__$1 = (function (){var statearr_48953 = state_48926;
(statearr_48953[(20)] = inst_48868__$1);

(statearr_48953[(10)] = inst_48867__$1);

(statearr_48953[(11)] = inst_48869__$1);

(statearr_48953[(22)] = inst_48881);

(statearr_48953[(21)] = inst_48866__$1);

return statearr_48953;
})();
var statearr_48954_49025 = state_48926__$1;
(statearr_48954_49025[(2)] = null);

(statearr_48954_49025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (40))){
var inst_48894 = (state_48926[(23)]);
var inst_48898 = done.call(null,null);
var inst_48899 = cljs.core.async.untap_STAR_.call(null,m,inst_48894);
var state_48926__$1 = (function (){var statearr_48955 = state_48926;
(statearr_48955[(24)] = inst_48898);

return statearr_48955;
})();
var statearr_48956_49026 = state_48926__$1;
(statearr_48956_49026[(2)] = inst_48899);

(statearr_48956_49026[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (33))){
var inst_48885 = (state_48926[(25)]);
var inst_48887 = cljs.core.chunked_seq_QMARK_.call(null,inst_48885);
var state_48926__$1 = state_48926;
if(inst_48887){
var statearr_48957_49027 = state_48926__$1;
(statearr_48957_49027[(1)] = (36));

} else {
var statearr_48958_49028 = state_48926__$1;
(statearr_48958_49028[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (13))){
var inst_48815 = (state_48926[(26)]);
var inst_48818 = cljs.core.async.close_BANG_.call(null,inst_48815);
var state_48926__$1 = state_48926;
var statearr_48959_49029 = state_48926__$1;
(statearr_48959_49029[(2)] = inst_48818);

(statearr_48959_49029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (22))){
var inst_48838 = (state_48926[(8)]);
var inst_48841 = cljs.core.async.close_BANG_.call(null,inst_48838);
var state_48926__$1 = state_48926;
var statearr_48960_49030 = state_48926__$1;
(statearr_48960_49030[(2)] = inst_48841);

(statearr_48960_49030[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (36))){
var inst_48885 = (state_48926[(25)]);
var inst_48889 = cljs.core.chunk_first.call(null,inst_48885);
var inst_48890 = cljs.core.chunk_rest.call(null,inst_48885);
var inst_48891 = cljs.core.count.call(null,inst_48889);
var inst_48866 = inst_48890;
var inst_48867 = inst_48889;
var inst_48868 = inst_48891;
var inst_48869 = (0);
var state_48926__$1 = (function (){var statearr_48961 = state_48926;
(statearr_48961[(20)] = inst_48868);

(statearr_48961[(10)] = inst_48867);

(statearr_48961[(11)] = inst_48869);

(statearr_48961[(21)] = inst_48866);

return statearr_48961;
})();
var statearr_48962_49031 = state_48926__$1;
(statearr_48962_49031[(2)] = null);

(statearr_48962_49031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (41))){
var inst_48885 = (state_48926[(25)]);
var inst_48901 = (state_48926[(2)]);
var inst_48902 = cljs.core.next.call(null,inst_48885);
var inst_48866 = inst_48902;
var inst_48867 = null;
var inst_48868 = (0);
var inst_48869 = (0);
var state_48926__$1 = (function (){var statearr_48963 = state_48926;
(statearr_48963[(20)] = inst_48868);

(statearr_48963[(27)] = inst_48901);

(statearr_48963[(10)] = inst_48867);

(statearr_48963[(11)] = inst_48869);

(statearr_48963[(21)] = inst_48866);

return statearr_48963;
})();
var statearr_48964_49032 = state_48926__$1;
(statearr_48964_49032[(2)] = null);

(statearr_48964_49032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (43))){
var state_48926__$1 = state_48926;
var statearr_48965_49033 = state_48926__$1;
(statearr_48965_49033[(2)] = null);

(statearr_48965_49033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (29))){
var inst_48910 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48966_49034 = state_48926__$1;
(statearr_48966_49034[(2)] = inst_48910);

(statearr_48966_49034[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (44))){
var inst_48919 = (state_48926[(2)]);
var state_48926__$1 = (function (){var statearr_48967 = state_48926;
(statearr_48967[(28)] = inst_48919);

return statearr_48967;
})();
var statearr_48968_49035 = state_48926__$1;
(statearr_48968_49035[(2)] = null);

(statearr_48968_49035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (6))){
var inst_48858 = (state_48926[(29)]);
var inst_48857 = cljs.core.deref.call(null,cs);
var inst_48858__$1 = cljs.core.keys.call(null,inst_48857);
var inst_48859 = cljs.core.count.call(null,inst_48858__$1);
var inst_48860 = cljs.core.reset_BANG_.call(null,dctr,inst_48859);
var inst_48865 = cljs.core.seq.call(null,inst_48858__$1);
var inst_48866 = inst_48865;
var inst_48867 = null;
var inst_48868 = (0);
var inst_48869 = (0);
var state_48926__$1 = (function (){var statearr_48969 = state_48926;
(statearr_48969[(20)] = inst_48868);

(statearr_48969[(10)] = inst_48867);

(statearr_48969[(11)] = inst_48869);

(statearr_48969[(29)] = inst_48858__$1);

(statearr_48969[(30)] = inst_48860);

(statearr_48969[(21)] = inst_48866);

return statearr_48969;
})();
var statearr_48970_49036 = state_48926__$1;
(statearr_48970_49036[(2)] = null);

(statearr_48970_49036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (28))){
var inst_48866 = (state_48926[(21)]);
var inst_48885 = (state_48926[(25)]);
var inst_48885__$1 = cljs.core.seq.call(null,inst_48866);
var state_48926__$1 = (function (){var statearr_48971 = state_48926;
(statearr_48971[(25)] = inst_48885__$1);

return statearr_48971;
})();
if(inst_48885__$1){
var statearr_48972_49037 = state_48926__$1;
(statearr_48972_49037[(1)] = (33));

} else {
var statearr_48973_49038 = state_48926__$1;
(statearr_48973_49038[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (25))){
var inst_48868 = (state_48926[(20)]);
var inst_48869 = (state_48926[(11)]);
var inst_48871 = (inst_48869 < inst_48868);
var inst_48872 = inst_48871;
var state_48926__$1 = state_48926;
if(cljs.core.truth_(inst_48872)){
var statearr_48974_49039 = state_48926__$1;
(statearr_48974_49039[(1)] = (27));

} else {
var statearr_48975_49040 = state_48926__$1;
(statearr_48975_49040[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (34))){
var state_48926__$1 = state_48926;
var statearr_48976_49041 = state_48926__$1;
(statearr_48976_49041[(2)] = null);

(statearr_48976_49041[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (17))){
var state_48926__$1 = state_48926;
var statearr_48977_49042 = state_48926__$1;
(statearr_48977_49042[(2)] = null);

(statearr_48977_49042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (3))){
var inst_48924 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48926__$1,inst_48924);
} else {
if((state_val_48927 === (12))){
var inst_48853 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48978_49043 = state_48926__$1;
(statearr_48978_49043[(2)] = inst_48853);

(statearr_48978_49043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (2))){
var state_48926__$1 = state_48926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48926__$1,(4),ch);
} else {
if((state_val_48927 === (23))){
var state_48926__$1 = state_48926;
var statearr_48979_49044 = state_48926__$1;
(statearr_48979_49044[(2)] = null);

(statearr_48979_49044[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (35))){
var inst_48908 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48980_49045 = state_48926__$1;
(statearr_48980_49045[(2)] = inst_48908);

(statearr_48980_49045[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (19))){
var inst_48825 = (state_48926[(7)]);
var inst_48829 = cljs.core.chunk_first.call(null,inst_48825);
var inst_48830 = cljs.core.chunk_rest.call(null,inst_48825);
var inst_48831 = cljs.core.count.call(null,inst_48829);
var inst_48803 = inst_48830;
var inst_48804 = inst_48829;
var inst_48805 = inst_48831;
var inst_48806 = (0);
var state_48926__$1 = (function (){var statearr_48981 = state_48926;
(statearr_48981[(14)] = inst_48803);

(statearr_48981[(15)] = inst_48804);

(statearr_48981[(16)] = inst_48806);

(statearr_48981[(17)] = inst_48805);

return statearr_48981;
})();
var statearr_48982_49046 = state_48926__$1;
(statearr_48982_49046[(2)] = null);

(statearr_48982_49046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (11))){
var inst_48825 = (state_48926[(7)]);
var inst_48803 = (state_48926[(14)]);
var inst_48825__$1 = cljs.core.seq.call(null,inst_48803);
var state_48926__$1 = (function (){var statearr_48983 = state_48926;
(statearr_48983[(7)] = inst_48825__$1);

return statearr_48983;
})();
if(inst_48825__$1){
var statearr_48984_49047 = state_48926__$1;
(statearr_48984_49047[(1)] = (16));

} else {
var statearr_48985_49048 = state_48926__$1;
(statearr_48985_49048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (9))){
var inst_48855 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48986_49049 = state_48926__$1;
(statearr_48986_49049[(2)] = inst_48855);

(statearr_48986_49049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (5))){
var inst_48801 = cljs.core.deref.call(null,cs);
var inst_48802 = cljs.core.seq.call(null,inst_48801);
var inst_48803 = inst_48802;
var inst_48804 = null;
var inst_48805 = (0);
var inst_48806 = (0);
var state_48926__$1 = (function (){var statearr_48987 = state_48926;
(statearr_48987[(14)] = inst_48803);

(statearr_48987[(15)] = inst_48804);

(statearr_48987[(16)] = inst_48806);

(statearr_48987[(17)] = inst_48805);

return statearr_48987;
})();
var statearr_48988_49050 = state_48926__$1;
(statearr_48988_49050[(2)] = null);

(statearr_48988_49050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (14))){
var state_48926__$1 = state_48926;
var statearr_48989_49051 = state_48926__$1;
(statearr_48989_49051[(2)] = null);

(statearr_48989_49051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (45))){
var inst_48916 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48990_49052 = state_48926__$1;
(statearr_48990_49052[(2)] = inst_48916);

(statearr_48990_49052[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (26))){
var inst_48858 = (state_48926[(29)]);
var inst_48912 = (state_48926[(2)]);
var inst_48913 = cljs.core.seq.call(null,inst_48858);
var state_48926__$1 = (function (){var statearr_48991 = state_48926;
(statearr_48991[(31)] = inst_48912);

return statearr_48991;
})();
if(inst_48913){
var statearr_48992_49053 = state_48926__$1;
(statearr_48992_49053[(1)] = (42));

} else {
var statearr_48993_49054 = state_48926__$1;
(statearr_48993_49054[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (16))){
var inst_48825 = (state_48926[(7)]);
var inst_48827 = cljs.core.chunked_seq_QMARK_.call(null,inst_48825);
var state_48926__$1 = state_48926;
if(inst_48827){
var statearr_48994_49055 = state_48926__$1;
(statearr_48994_49055[(1)] = (19));

} else {
var statearr_48995_49056 = state_48926__$1;
(statearr_48995_49056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (38))){
var inst_48905 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_48996_49057 = state_48926__$1;
(statearr_48996_49057[(2)] = inst_48905);

(statearr_48996_49057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (30))){
var state_48926__$1 = state_48926;
var statearr_48997_49058 = state_48926__$1;
(statearr_48997_49058[(2)] = null);

(statearr_48997_49058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (10))){
var inst_48804 = (state_48926[(15)]);
var inst_48806 = (state_48926[(16)]);
var inst_48814 = cljs.core._nth.call(null,inst_48804,inst_48806);
var inst_48815 = cljs.core.nth.call(null,inst_48814,(0),null);
var inst_48816 = cljs.core.nth.call(null,inst_48814,(1),null);
var state_48926__$1 = (function (){var statearr_48998 = state_48926;
(statearr_48998[(26)] = inst_48815);

return statearr_48998;
})();
if(cljs.core.truth_(inst_48816)){
var statearr_48999_49059 = state_48926__$1;
(statearr_48999_49059[(1)] = (13));

} else {
var statearr_49000_49060 = state_48926__$1;
(statearr_49000_49060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (18))){
var inst_48851 = (state_48926[(2)]);
var state_48926__$1 = state_48926;
var statearr_49001_49061 = state_48926__$1;
(statearr_49001_49061[(2)] = inst_48851);

(statearr_49001_49061[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (42))){
var state_48926__$1 = state_48926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48926__$1,(45),dchan);
} else {
if((state_val_48927 === (37))){
var inst_48794 = (state_48926[(9)]);
var inst_48885 = (state_48926[(25)]);
var inst_48894 = (state_48926[(23)]);
var inst_48894__$1 = cljs.core.first.call(null,inst_48885);
var inst_48895 = cljs.core.async.put_BANG_.call(null,inst_48894__$1,inst_48794,done);
var state_48926__$1 = (function (){var statearr_49002 = state_48926;
(statearr_49002[(23)] = inst_48894__$1);

return statearr_49002;
})();
if(cljs.core.truth_(inst_48895)){
var statearr_49003_49062 = state_48926__$1;
(statearr_49003_49062[(1)] = (39));

} else {
var statearr_49004_49063 = state_48926__$1;
(statearr_49004_49063[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48927 === (8))){
var inst_48806 = (state_48926[(16)]);
var inst_48805 = (state_48926[(17)]);
var inst_48808 = (inst_48806 < inst_48805);
var inst_48809 = inst_48808;
var state_48926__$1 = state_48926;
if(cljs.core.truth_(inst_48809)){
var statearr_49005_49064 = state_48926__$1;
(statearr_49005_49064[(1)] = (10));

} else {
var statearr_49006_49065 = state_48926__$1;
(statearr_49006_49065[(1)] = (11));

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
});})(c__48192__auto___49011,cs,m,dchan,dctr,done))
;
return ((function (switch__48102__auto__,c__48192__auto___49011,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48103__auto__ = null;
var cljs$core$async$mult_$_state_machine__48103__auto____0 = (function (){
var statearr_49007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49007[(0)] = cljs$core$async$mult_$_state_machine__48103__auto__);

(statearr_49007[(1)] = (1));

return statearr_49007;
});
var cljs$core$async$mult_$_state_machine__48103__auto____1 = (function (state_48926){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_48926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49008){if((e49008 instanceof Object)){
var ex__48106__auto__ = e49008;
var statearr_49009_49066 = state_48926;
(statearr_49009_49066[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49067 = state_48926;
state_48926 = G__49067;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48103__auto__ = function(state_48926){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48103__auto____1.call(this,state_48926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48103__auto____0;
cljs$core$async$mult_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48103__auto____1;
return cljs$core$async$mult_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49011,cs,m,dchan,dctr,done))
})();
var state__48194__auto__ = (function (){var statearr_49010 = f__48193__auto__.call(null);
(statearr_49010[(6)] = c__48192__auto___49011);

return statearr_49010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49011,cs,m,dchan,dctr,done))
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
var G__49069 = arguments.length;
switch (G__49069) {
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
var len__4499__auto___49081 = arguments.length;
var i__4500__auto___49082 = (0);
while(true){
if((i__4500__auto___49082 < len__4499__auto___49081)){
args__4502__auto__.push((arguments[i__4500__auto___49082]));

var G__49083 = (i__4500__auto___49082 + (1));
i__4500__auto___49082 = G__49083;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49075){
var map__49076 = p__49075;
var map__49076__$1 = ((((!((map__49076 == null)))?(((((map__49076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49076):map__49076);
var opts = map__49076__$1;
var statearr_49078_49084 = state;
(statearr_49078_49084[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__49076,map__49076__$1,opts){
return (function (val){
var statearr_49079_49085 = state;
(statearr_49079_49085[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49076,map__49076__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_49080_49086 = state;
(statearr_49080_49086[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49071){
var G__49072 = cljs.core.first.call(null,seq49071);
var seq49071__$1 = cljs.core.next.call(null,seq49071);
var G__49073 = cljs.core.first.call(null,seq49071__$1);
var seq49071__$2 = cljs.core.next.call(null,seq49071__$1);
var G__49074 = cljs.core.first.call(null,seq49071__$2);
var seq49071__$3 = cljs.core.next.call(null,seq49071__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49072,G__49073,G__49074,seq49071__$3);
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
if(typeof cljs.core.async.t_cljs$core$async49087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49087 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49088){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49088 = meta49088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49089,meta49088__$1){
var self__ = this;
var _49089__$1 = this;
return (new cljs.core.async.t_cljs$core$async49087(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49088__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49089){
var self__ = this;
var _49089__$1 = this;
return self__.meta49088;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async49087.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49088","meta49088",1943092382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49087";

cljs.core.async.t_cljs$core$async49087.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49087");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49087.
 */
cljs.core.async.__GT_t_cljs$core$async49087 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49088){
return (new cljs.core.async.t_cljs$core$async49087(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49088));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49087(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48192__auto___49251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49191){
var state_val_49192 = (state_49191[(1)]);
if((state_val_49192 === (7))){
var inst_49106 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49193_49252 = state_49191__$1;
(statearr_49193_49252[(2)] = inst_49106);

(statearr_49193_49252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (20))){
var inst_49118 = (state_49191[(7)]);
var state_49191__$1 = state_49191;
var statearr_49194_49253 = state_49191__$1;
(statearr_49194_49253[(2)] = inst_49118);

(statearr_49194_49253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (27))){
var state_49191__$1 = state_49191;
var statearr_49195_49254 = state_49191__$1;
(statearr_49195_49254[(2)] = null);

(statearr_49195_49254[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (1))){
var inst_49093 = (state_49191[(8)]);
var inst_49093__$1 = calc_state.call(null);
var inst_49095 = (inst_49093__$1 == null);
var inst_49096 = cljs.core.not.call(null,inst_49095);
var state_49191__$1 = (function (){var statearr_49196 = state_49191;
(statearr_49196[(8)] = inst_49093__$1);

return statearr_49196;
})();
if(inst_49096){
var statearr_49197_49255 = state_49191__$1;
(statearr_49197_49255[(1)] = (2));

} else {
var statearr_49198_49256 = state_49191__$1;
(statearr_49198_49256[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (24))){
var inst_49142 = (state_49191[(9)]);
var inst_49165 = (state_49191[(10)]);
var inst_49151 = (state_49191[(11)]);
var inst_49165__$1 = inst_49142.call(null,inst_49151);
var state_49191__$1 = (function (){var statearr_49199 = state_49191;
(statearr_49199[(10)] = inst_49165__$1);

return statearr_49199;
})();
if(cljs.core.truth_(inst_49165__$1)){
var statearr_49200_49257 = state_49191__$1;
(statearr_49200_49257[(1)] = (29));

} else {
var statearr_49201_49258 = state_49191__$1;
(statearr_49201_49258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (4))){
var inst_49109 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49109)){
var statearr_49202_49259 = state_49191__$1;
(statearr_49202_49259[(1)] = (8));

} else {
var statearr_49203_49260 = state_49191__$1;
(statearr_49203_49260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (15))){
var inst_49136 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49136)){
var statearr_49204_49261 = state_49191__$1;
(statearr_49204_49261[(1)] = (19));

} else {
var statearr_49205_49262 = state_49191__$1;
(statearr_49205_49262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (21))){
var inst_49141 = (state_49191[(12)]);
var inst_49141__$1 = (state_49191[(2)]);
var inst_49142 = cljs.core.get.call(null,inst_49141__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49143 = cljs.core.get.call(null,inst_49141__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49144 = cljs.core.get.call(null,inst_49141__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49191__$1 = (function (){var statearr_49206 = state_49191;
(statearr_49206[(13)] = inst_49143);

(statearr_49206[(12)] = inst_49141__$1);

(statearr_49206[(9)] = inst_49142);

return statearr_49206;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49191__$1,(22),inst_49144);
} else {
if((state_val_49192 === (31))){
var inst_49173 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49173)){
var statearr_49207_49263 = state_49191__$1;
(statearr_49207_49263[(1)] = (32));

} else {
var statearr_49208_49264 = state_49191__$1;
(statearr_49208_49264[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (32))){
var inst_49150 = (state_49191[(14)]);
var state_49191__$1 = state_49191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49191__$1,(35),out,inst_49150);
} else {
if((state_val_49192 === (33))){
var inst_49141 = (state_49191[(12)]);
var inst_49118 = inst_49141;
var state_49191__$1 = (function (){var statearr_49209 = state_49191;
(statearr_49209[(7)] = inst_49118);

return statearr_49209;
})();
var statearr_49210_49265 = state_49191__$1;
(statearr_49210_49265[(2)] = null);

(statearr_49210_49265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (13))){
var inst_49118 = (state_49191[(7)]);
var inst_49125 = inst_49118.cljs$lang$protocol_mask$partition0$;
var inst_49126 = (inst_49125 & (64));
var inst_49127 = inst_49118.cljs$core$ISeq$;
var inst_49128 = (cljs.core.PROTOCOL_SENTINEL === inst_49127);
var inst_49129 = ((inst_49126) || (inst_49128));
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49129)){
var statearr_49211_49266 = state_49191__$1;
(statearr_49211_49266[(1)] = (16));

} else {
var statearr_49212_49267 = state_49191__$1;
(statearr_49212_49267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (22))){
var inst_49150 = (state_49191[(14)]);
var inst_49151 = (state_49191[(11)]);
var inst_49149 = (state_49191[(2)]);
var inst_49150__$1 = cljs.core.nth.call(null,inst_49149,(0),null);
var inst_49151__$1 = cljs.core.nth.call(null,inst_49149,(1),null);
var inst_49152 = (inst_49150__$1 == null);
var inst_49153 = cljs.core._EQ_.call(null,inst_49151__$1,change);
var inst_49154 = ((inst_49152) || (inst_49153));
var state_49191__$1 = (function (){var statearr_49213 = state_49191;
(statearr_49213[(14)] = inst_49150__$1);

(statearr_49213[(11)] = inst_49151__$1);

return statearr_49213;
})();
if(cljs.core.truth_(inst_49154)){
var statearr_49214_49268 = state_49191__$1;
(statearr_49214_49268[(1)] = (23));

} else {
var statearr_49215_49269 = state_49191__$1;
(statearr_49215_49269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (36))){
var inst_49141 = (state_49191[(12)]);
var inst_49118 = inst_49141;
var state_49191__$1 = (function (){var statearr_49216 = state_49191;
(statearr_49216[(7)] = inst_49118);

return statearr_49216;
})();
var statearr_49217_49270 = state_49191__$1;
(statearr_49217_49270[(2)] = null);

(statearr_49217_49270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (29))){
var inst_49165 = (state_49191[(10)]);
var state_49191__$1 = state_49191;
var statearr_49218_49271 = state_49191__$1;
(statearr_49218_49271[(2)] = inst_49165);

(statearr_49218_49271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (6))){
var state_49191__$1 = state_49191;
var statearr_49219_49272 = state_49191__$1;
(statearr_49219_49272[(2)] = false);

(statearr_49219_49272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (28))){
var inst_49161 = (state_49191[(2)]);
var inst_49162 = calc_state.call(null);
var inst_49118 = inst_49162;
var state_49191__$1 = (function (){var statearr_49220 = state_49191;
(statearr_49220[(7)] = inst_49118);

(statearr_49220[(15)] = inst_49161);

return statearr_49220;
})();
var statearr_49221_49273 = state_49191__$1;
(statearr_49221_49273[(2)] = null);

(statearr_49221_49273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (25))){
var inst_49187 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49222_49274 = state_49191__$1;
(statearr_49222_49274[(2)] = inst_49187);

(statearr_49222_49274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (34))){
var inst_49185 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49223_49275 = state_49191__$1;
(statearr_49223_49275[(2)] = inst_49185);

(statearr_49223_49275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (17))){
var state_49191__$1 = state_49191;
var statearr_49224_49276 = state_49191__$1;
(statearr_49224_49276[(2)] = false);

(statearr_49224_49276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (3))){
var state_49191__$1 = state_49191;
var statearr_49225_49277 = state_49191__$1;
(statearr_49225_49277[(2)] = false);

(statearr_49225_49277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (12))){
var inst_49189 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49191__$1,inst_49189);
} else {
if((state_val_49192 === (2))){
var inst_49093 = (state_49191[(8)]);
var inst_49098 = inst_49093.cljs$lang$protocol_mask$partition0$;
var inst_49099 = (inst_49098 & (64));
var inst_49100 = inst_49093.cljs$core$ISeq$;
var inst_49101 = (cljs.core.PROTOCOL_SENTINEL === inst_49100);
var inst_49102 = ((inst_49099) || (inst_49101));
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49102)){
var statearr_49226_49278 = state_49191__$1;
(statearr_49226_49278[(1)] = (5));

} else {
var statearr_49227_49279 = state_49191__$1;
(statearr_49227_49279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (23))){
var inst_49150 = (state_49191[(14)]);
var inst_49156 = (inst_49150 == null);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49156)){
var statearr_49228_49280 = state_49191__$1;
(statearr_49228_49280[(1)] = (26));

} else {
var statearr_49229_49281 = state_49191__$1;
(statearr_49229_49281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (35))){
var inst_49176 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
if(cljs.core.truth_(inst_49176)){
var statearr_49230_49282 = state_49191__$1;
(statearr_49230_49282[(1)] = (36));

} else {
var statearr_49231_49283 = state_49191__$1;
(statearr_49231_49283[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (19))){
var inst_49118 = (state_49191[(7)]);
var inst_49138 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49118);
var state_49191__$1 = state_49191;
var statearr_49232_49284 = state_49191__$1;
(statearr_49232_49284[(2)] = inst_49138);

(statearr_49232_49284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (11))){
var inst_49118 = (state_49191[(7)]);
var inst_49122 = (inst_49118 == null);
var inst_49123 = cljs.core.not.call(null,inst_49122);
var state_49191__$1 = state_49191;
if(inst_49123){
var statearr_49233_49285 = state_49191__$1;
(statearr_49233_49285[(1)] = (13));

} else {
var statearr_49234_49286 = state_49191__$1;
(statearr_49234_49286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (9))){
var inst_49093 = (state_49191[(8)]);
var state_49191__$1 = state_49191;
var statearr_49235_49287 = state_49191__$1;
(statearr_49235_49287[(2)] = inst_49093);

(statearr_49235_49287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (5))){
var state_49191__$1 = state_49191;
var statearr_49236_49288 = state_49191__$1;
(statearr_49236_49288[(2)] = true);

(statearr_49236_49288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (14))){
var state_49191__$1 = state_49191;
var statearr_49237_49289 = state_49191__$1;
(statearr_49237_49289[(2)] = false);

(statearr_49237_49289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (26))){
var inst_49151 = (state_49191[(11)]);
var inst_49158 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49151);
var state_49191__$1 = state_49191;
var statearr_49238_49290 = state_49191__$1;
(statearr_49238_49290[(2)] = inst_49158);

(statearr_49238_49290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (16))){
var state_49191__$1 = state_49191;
var statearr_49239_49291 = state_49191__$1;
(statearr_49239_49291[(2)] = true);

(statearr_49239_49291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (38))){
var inst_49181 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49240_49292 = state_49191__$1;
(statearr_49240_49292[(2)] = inst_49181);

(statearr_49240_49292[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (30))){
var inst_49143 = (state_49191[(13)]);
var inst_49142 = (state_49191[(9)]);
var inst_49151 = (state_49191[(11)]);
var inst_49168 = cljs.core.empty_QMARK_.call(null,inst_49142);
var inst_49169 = inst_49143.call(null,inst_49151);
var inst_49170 = cljs.core.not.call(null,inst_49169);
var inst_49171 = ((inst_49168) && (inst_49170));
var state_49191__$1 = state_49191;
var statearr_49241_49293 = state_49191__$1;
(statearr_49241_49293[(2)] = inst_49171);

(statearr_49241_49293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (10))){
var inst_49093 = (state_49191[(8)]);
var inst_49114 = (state_49191[(2)]);
var inst_49115 = cljs.core.get.call(null,inst_49114,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49116 = cljs.core.get.call(null,inst_49114,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49117 = cljs.core.get.call(null,inst_49114,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49118 = inst_49093;
var state_49191__$1 = (function (){var statearr_49242 = state_49191;
(statearr_49242[(16)] = inst_49116);

(statearr_49242[(17)] = inst_49117);

(statearr_49242[(7)] = inst_49118);

(statearr_49242[(18)] = inst_49115);

return statearr_49242;
})();
var statearr_49243_49294 = state_49191__$1;
(statearr_49243_49294[(2)] = null);

(statearr_49243_49294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (18))){
var inst_49133 = (state_49191[(2)]);
var state_49191__$1 = state_49191;
var statearr_49244_49295 = state_49191__$1;
(statearr_49244_49295[(2)] = inst_49133);

(statearr_49244_49295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (37))){
var state_49191__$1 = state_49191;
var statearr_49245_49296 = state_49191__$1;
(statearr_49245_49296[(2)] = null);

(statearr_49245_49296[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49192 === (8))){
var inst_49093 = (state_49191[(8)]);
var inst_49111 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49093);
var state_49191__$1 = state_49191;
var statearr_49246_49297 = state_49191__$1;
(statearr_49246_49297[(2)] = inst_49111);

(statearr_49246_49297[(1)] = (10));


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
});})(c__48192__auto___49251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48102__auto__,c__48192__auto___49251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48103__auto__ = null;
var cljs$core$async$mix_$_state_machine__48103__auto____0 = (function (){
var statearr_49247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49247[(0)] = cljs$core$async$mix_$_state_machine__48103__auto__);

(statearr_49247[(1)] = (1));

return statearr_49247;
});
var cljs$core$async$mix_$_state_machine__48103__auto____1 = (function (state_49191){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49248){if((e49248 instanceof Object)){
var ex__48106__auto__ = e49248;
var statearr_49249_49298 = state_49191;
(statearr_49249_49298[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49299 = state_49191;
state_49191 = G__49299;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48103__auto__ = function(state_49191){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48103__auto____1.call(this,state_49191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48103__auto____0;
cljs$core$async$mix_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48103__auto____1;
return cljs$core$async$mix_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48194__auto__ = (function (){var statearr_49250 = f__48193__auto__.call(null);
(statearr_49250[(6)] = c__48192__auto___49251);

return statearr_49250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49251,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__49301 = arguments.length;
switch (G__49301) {
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
var G__49305 = arguments.length;
switch (G__49305) {
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
return (function (p1__49303_SHARP_){
if(cljs.core.truth_(p1__49303_SHARP_.call(null,topic))){
return p1__49303_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49303_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49306 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49307){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49307 = meta49307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49308,meta49307__$1){
var self__ = this;
var _49308__$1 = this;
return (new cljs.core.async.t_cljs$core$async49306(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49307__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49308){
var self__ = this;
var _49308__$1 = this;
return self__.meta49307;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49307","meta49307",618248151,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49306";

cljs.core.async.t_cljs$core$async49306.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49306");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49306.
 */
cljs.core.async.__GT_t_cljs$core$async49306 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49307){
return (new cljs.core.async.t_cljs$core$async49306(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49307));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49306(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48192__auto___49426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49426,mults,ensure_mult,p){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49426,mults,ensure_mult,p){
return (function (state_49380){
var state_val_49381 = (state_49380[(1)]);
if((state_val_49381 === (7))){
var inst_49376 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49382_49427 = state_49380__$1;
(statearr_49382_49427[(2)] = inst_49376);

(statearr_49382_49427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (20))){
var state_49380__$1 = state_49380;
var statearr_49383_49428 = state_49380__$1;
(statearr_49383_49428[(2)] = null);

(statearr_49383_49428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (1))){
var state_49380__$1 = state_49380;
var statearr_49384_49429 = state_49380__$1;
(statearr_49384_49429[(2)] = null);

(statearr_49384_49429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (24))){
var inst_49359 = (state_49380[(7)]);
var inst_49368 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49359);
var state_49380__$1 = state_49380;
var statearr_49385_49430 = state_49380__$1;
(statearr_49385_49430[(2)] = inst_49368);

(statearr_49385_49430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (4))){
var inst_49311 = (state_49380[(8)]);
var inst_49311__$1 = (state_49380[(2)]);
var inst_49312 = (inst_49311__$1 == null);
var state_49380__$1 = (function (){var statearr_49386 = state_49380;
(statearr_49386[(8)] = inst_49311__$1);

return statearr_49386;
})();
if(cljs.core.truth_(inst_49312)){
var statearr_49387_49431 = state_49380__$1;
(statearr_49387_49431[(1)] = (5));

} else {
var statearr_49388_49432 = state_49380__$1;
(statearr_49388_49432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (15))){
var inst_49353 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49389_49433 = state_49380__$1;
(statearr_49389_49433[(2)] = inst_49353);

(statearr_49389_49433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (21))){
var inst_49373 = (state_49380[(2)]);
var state_49380__$1 = (function (){var statearr_49390 = state_49380;
(statearr_49390[(9)] = inst_49373);

return statearr_49390;
})();
var statearr_49391_49434 = state_49380__$1;
(statearr_49391_49434[(2)] = null);

(statearr_49391_49434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (13))){
var inst_49335 = (state_49380[(10)]);
var inst_49337 = cljs.core.chunked_seq_QMARK_.call(null,inst_49335);
var state_49380__$1 = state_49380;
if(inst_49337){
var statearr_49392_49435 = state_49380__$1;
(statearr_49392_49435[(1)] = (16));

} else {
var statearr_49393_49436 = state_49380__$1;
(statearr_49393_49436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (22))){
var inst_49365 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
if(cljs.core.truth_(inst_49365)){
var statearr_49394_49437 = state_49380__$1;
(statearr_49394_49437[(1)] = (23));

} else {
var statearr_49395_49438 = state_49380__$1;
(statearr_49395_49438[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (6))){
var inst_49361 = (state_49380[(11)]);
var inst_49311 = (state_49380[(8)]);
var inst_49359 = (state_49380[(7)]);
var inst_49359__$1 = topic_fn.call(null,inst_49311);
var inst_49360 = cljs.core.deref.call(null,mults);
var inst_49361__$1 = cljs.core.get.call(null,inst_49360,inst_49359__$1);
var state_49380__$1 = (function (){var statearr_49396 = state_49380;
(statearr_49396[(11)] = inst_49361__$1);

(statearr_49396[(7)] = inst_49359__$1);

return statearr_49396;
})();
if(cljs.core.truth_(inst_49361__$1)){
var statearr_49397_49439 = state_49380__$1;
(statearr_49397_49439[(1)] = (19));

} else {
var statearr_49398_49440 = state_49380__$1;
(statearr_49398_49440[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (25))){
var inst_49370 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49399_49441 = state_49380__$1;
(statearr_49399_49441[(2)] = inst_49370);

(statearr_49399_49441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (17))){
var inst_49335 = (state_49380[(10)]);
var inst_49344 = cljs.core.first.call(null,inst_49335);
var inst_49345 = cljs.core.async.muxch_STAR_.call(null,inst_49344);
var inst_49346 = cljs.core.async.close_BANG_.call(null,inst_49345);
var inst_49347 = cljs.core.next.call(null,inst_49335);
var inst_49321 = inst_49347;
var inst_49322 = null;
var inst_49323 = (0);
var inst_49324 = (0);
var state_49380__$1 = (function (){var statearr_49400 = state_49380;
(statearr_49400[(12)] = inst_49324);

(statearr_49400[(13)] = inst_49321);

(statearr_49400[(14)] = inst_49322);

(statearr_49400[(15)] = inst_49323);

(statearr_49400[(16)] = inst_49346);

return statearr_49400;
})();
var statearr_49401_49442 = state_49380__$1;
(statearr_49401_49442[(2)] = null);

(statearr_49401_49442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (3))){
var inst_49378 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49380__$1,inst_49378);
} else {
if((state_val_49381 === (12))){
var inst_49355 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49402_49443 = state_49380__$1;
(statearr_49402_49443[(2)] = inst_49355);

(statearr_49402_49443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (2))){
var state_49380__$1 = state_49380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49380__$1,(4),ch);
} else {
if((state_val_49381 === (23))){
var state_49380__$1 = state_49380;
var statearr_49403_49444 = state_49380__$1;
(statearr_49403_49444[(2)] = null);

(statearr_49403_49444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (19))){
var inst_49361 = (state_49380[(11)]);
var inst_49311 = (state_49380[(8)]);
var inst_49363 = cljs.core.async.muxch_STAR_.call(null,inst_49361);
var state_49380__$1 = state_49380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49380__$1,(22),inst_49363,inst_49311);
} else {
if((state_val_49381 === (11))){
var inst_49321 = (state_49380[(13)]);
var inst_49335 = (state_49380[(10)]);
var inst_49335__$1 = cljs.core.seq.call(null,inst_49321);
var state_49380__$1 = (function (){var statearr_49404 = state_49380;
(statearr_49404[(10)] = inst_49335__$1);

return statearr_49404;
})();
if(inst_49335__$1){
var statearr_49405_49445 = state_49380__$1;
(statearr_49405_49445[(1)] = (13));

} else {
var statearr_49406_49446 = state_49380__$1;
(statearr_49406_49446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (9))){
var inst_49357 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49407_49447 = state_49380__$1;
(statearr_49407_49447[(2)] = inst_49357);

(statearr_49407_49447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (5))){
var inst_49318 = cljs.core.deref.call(null,mults);
var inst_49319 = cljs.core.vals.call(null,inst_49318);
var inst_49320 = cljs.core.seq.call(null,inst_49319);
var inst_49321 = inst_49320;
var inst_49322 = null;
var inst_49323 = (0);
var inst_49324 = (0);
var state_49380__$1 = (function (){var statearr_49408 = state_49380;
(statearr_49408[(12)] = inst_49324);

(statearr_49408[(13)] = inst_49321);

(statearr_49408[(14)] = inst_49322);

(statearr_49408[(15)] = inst_49323);

return statearr_49408;
})();
var statearr_49409_49448 = state_49380__$1;
(statearr_49409_49448[(2)] = null);

(statearr_49409_49448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (14))){
var state_49380__$1 = state_49380;
var statearr_49413_49449 = state_49380__$1;
(statearr_49413_49449[(2)] = null);

(statearr_49413_49449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (16))){
var inst_49335 = (state_49380[(10)]);
var inst_49339 = cljs.core.chunk_first.call(null,inst_49335);
var inst_49340 = cljs.core.chunk_rest.call(null,inst_49335);
var inst_49341 = cljs.core.count.call(null,inst_49339);
var inst_49321 = inst_49340;
var inst_49322 = inst_49339;
var inst_49323 = inst_49341;
var inst_49324 = (0);
var state_49380__$1 = (function (){var statearr_49414 = state_49380;
(statearr_49414[(12)] = inst_49324);

(statearr_49414[(13)] = inst_49321);

(statearr_49414[(14)] = inst_49322);

(statearr_49414[(15)] = inst_49323);

return statearr_49414;
})();
var statearr_49415_49450 = state_49380__$1;
(statearr_49415_49450[(2)] = null);

(statearr_49415_49450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (10))){
var inst_49324 = (state_49380[(12)]);
var inst_49321 = (state_49380[(13)]);
var inst_49322 = (state_49380[(14)]);
var inst_49323 = (state_49380[(15)]);
var inst_49329 = cljs.core._nth.call(null,inst_49322,inst_49324);
var inst_49330 = cljs.core.async.muxch_STAR_.call(null,inst_49329);
var inst_49331 = cljs.core.async.close_BANG_.call(null,inst_49330);
var inst_49332 = (inst_49324 + (1));
var tmp49410 = inst_49321;
var tmp49411 = inst_49322;
var tmp49412 = inst_49323;
var inst_49321__$1 = tmp49410;
var inst_49322__$1 = tmp49411;
var inst_49323__$1 = tmp49412;
var inst_49324__$1 = inst_49332;
var state_49380__$1 = (function (){var statearr_49416 = state_49380;
(statearr_49416[(17)] = inst_49331);

(statearr_49416[(12)] = inst_49324__$1);

(statearr_49416[(13)] = inst_49321__$1);

(statearr_49416[(14)] = inst_49322__$1);

(statearr_49416[(15)] = inst_49323__$1);

return statearr_49416;
})();
var statearr_49417_49451 = state_49380__$1;
(statearr_49417_49451[(2)] = null);

(statearr_49417_49451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (18))){
var inst_49350 = (state_49380[(2)]);
var state_49380__$1 = state_49380;
var statearr_49418_49452 = state_49380__$1;
(statearr_49418_49452[(2)] = inst_49350);

(statearr_49418_49452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49381 === (8))){
var inst_49324 = (state_49380[(12)]);
var inst_49323 = (state_49380[(15)]);
var inst_49326 = (inst_49324 < inst_49323);
var inst_49327 = inst_49326;
var state_49380__$1 = state_49380;
if(cljs.core.truth_(inst_49327)){
var statearr_49419_49453 = state_49380__$1;
(statearr_49419_49453[(1)] = (10));

} else {
var statearr_49420_49454 = state_49380__$1;
(statearr_49420_49454[(1)] = (11));

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
});})(c__48192__auto___49426,mults,ensure_mult,p))
;
return ((function (switch__48102__auto__,c__48192__auto___49426,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_49421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49421[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_49421[(1)] = (1));

return statearr_49421;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49380){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49422){if((e49422 instanceof Object)){
var ex__48106__auto__ = e49422;
var statearr_49423_49455 = state_49380;
(statearr_49423_49455[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49456 = state_49380;
state_49380 = G__49456;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49426,mults,ensure_mult,p))
})();
var state__48194__auto__ = (function (){var statearr_49424 = f__48193__auto__.call(null);
(statearr_49424[(6)] = c__48192__auto___49426);

return statearr_49424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49426,mults,ensure_mult,p))
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
var G__49458 = arguments.length;
switch (G__49458) {
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
var G__49461 = arguments.length;
switch (G__49461) {
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
var G__49464 = arguments.length;
switch (G__49464) {
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
var c__48192__auto___49531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49503){
var state_val_49504 = (state_49503[(1)]);
if((state_val_49504 === (7))){
var state_49503__$1 = state_49503;
var statearr_49505_49532 = state_49503__$1;
(statearr_49505_49532[(2)] = null);

(statearr_49505_49532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (1))){
var state_49503__$1 = state_49503;
var statearr_49506_49533 = state_49503__$1;
(statearr_49506_49533[(2)] = null);

(statearr_49506_49533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (4))){
var inst_49467 = (state_49503[(7)]);
var inst_49469 = (inst_49467 < cnt);
var state_49503__$1 = state_49503;
if(cljs.core.truth_(inst_49469)){
var statearr_49507_49534 = state_49503__$1;
(statearr_49507_49534[(1)] = (6));

} else {
var statearr_49508_49535 = state_49503__$1;
(statearr_49508_49535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (15))){
var inst_49499 = (state_49503[(2)]);
var state_49503__$1 = state_49503;
var statearr_49509_49536 = state_49503__$1;
(statearr_49509_49536[(2)] = inst_49499);

(statearr_49509_49536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (13))){
var inst_49492 = cljs.core.async.close_BANG_.call(null,out);
var state_49503__$1 = state_49503;
var statearr_49510_49537 = state_49503__$1;
(statearr_49510_49537[(2)] = inst_49492);

(statearr_49510_49537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (6))){
var state_49503__$1 = state_49503;
var statearr_49511_49538 = state_49503__$1;
(statearr_49511_49538[(2)] = null);

(statearr_49511_49538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (3))){
var inst_49501 = (state_49503[(2)]);
var state_49503__$1 = state_49503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49503__$1,inst_49501);
} else {
if((state_val_49504 === (12))){
var inst_49489 = (state_49503[(8)]);
var inst_49489__$1 = (state_49503[(2)]);
var inst_49490 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49489__$1);
var state_49503__$1 = (function (){var statearr_49512 = state_49503;
(statearr_49512[(8)] = inst_49489__$1);

return statearr_49512;
})();
if(cljs.core.truth_(inst_49490)){
var statearr_49513_49539 = state_49503__$1;
(statearr_49513_49539[(1)] = (13));

} else {
var statearr_49514_49540 = state_49503__$1;
(statearr_49514_49540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (2))){
var inst_49466 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49467 = (0);
var state_49503__$1 = (function (){var statearr_49515 = state_49503;
(statearr_49515[(9)] = inst_49466);

(statearr_49515[(7)] = inst_49467);

return statearr_49515;
})();
var statearr_49516_49541 = state_49503__$1;
(statearr_49516_49541[(2)] = null);

(statearr_49516_49541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (11))){
var inst_49467 = (state_49503[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49503,(10),Object,null,(9));
var inst_49476 = chs__$1.call(null,inst_49467);
var inst_49477 = done.call(null,inst_49467);
var inst_49478 = cljs.core.async.take_BANG_.call(null,inst_49476,inst_49477);
var state_49503__$1 = state_49503;
var statearr_49517_49542 = state_49503__$1;
(statearr_49517_49542[(2)] = inst_49478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (9))){
var inst_49467 = (state_49503[(7)]);
var inst_49480 = (state_49503[(2)]);
var inst_49481 = (inst_49467 + (1));
var inst_49467__$1 = inst_49481;
var state_49503__$1 = (function (){var statearr_49518 = state_49503;
(statearr_49518[(7)] = inst_49467__$1);

(statearr_49518[(10)] = inst_49480);

return statearr_49518;
})();
var statearr_49519_49543 = state_49503__$1;
(statearr_49519_49543[(2)] = null);

(statearr_49519_49543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (5))){
var inst_49487 = (state_49503[(2)]);
var state_49503__$1 = (function (){var statearr_49520 = state_49503;
(statearr_49520[(11)] = inst_49487);

return statearr_49520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49503__$1,(12),dchan);
} else {
if((state_val_49504 === (14))){
var inst_49489 = (state_49503[(8)]);
var inst_49494 = cljs.core.apply.call(null,f,inst_49489);
var state_49503__$1 = state_49503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49503__$1,(16),out,inst_49494);
} else {
if((state_val_49504 === (16))){
var inst_49496 = (state_49503[(2)]);
var state_49503__$1 = (function (){var statearr_49521 = state_49503;
(statearr_49521[(12)] = inst_49496);

return statearr_49521;
})();
var statearr_49522_49544 = state_49503__$1;
(statearr_49522_49544[(2)] = null);

(statearr_49522_49544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (10))){
var inst_49471 = (state_49503[(2)]);
var inst_49472 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49503__$1 = (function (){var statearr_49523 = state_49503;
(statearr_49523[(13)] = inst_49471);

return statearr_49523;
})();
var statearr_49524_49545 = state_49503__$1;
(statearr_49524_49545[(2)] = inst_49472);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49503__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49504 === (8))){
var inst_49485 = (state_49503[(2)]);
var state_49503__$1 = state_49503;
var statearr_49525_49546 = state_49503__$1;
(statearr_49525_49546[(2)] = inst_49485);

(statearr_49525_49546[(1)] = (5));


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
});})(c__48192__auto___49531,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48102__auto__,c__48192__auto___49531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_49526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49526[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_49526[(1)] = (1));

return statearr_49526;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49503){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49527){if((e49527 instanceof Object)){
var ex__48106__auto__ = e49527;
var statearr_49528_49547 = state_49503;
(statearr_49528_49547[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49548 = state_49503;
state_49503 = G__49548;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49531,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48194__auto__ = (function (){var statearr_49529 = f__48193__auto__.call(null);
(statearr_49529[(6)] = c__48192__auto___49531);

return statearr_49529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49531,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__49551 = arguments.length;
switch (G__49551) {
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
var c__48192__auto___49605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49605,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49605,out){
return (function (state_49583){
var state_val_49584 = (state_49583[(1)]);
if((state_val_49584 === (7))){
var inst_49562 = (state_49583[(7)]);
var inst_49563 = (state_49583[(8)]);
var inst_49562__$1 = (state_49583[(2)]);
var inst_49563__$1 = cljs.core.nth.call(null,inst_49562__$1,(0),null);
var inst_49564 = cljs.core.nth.call(null,inst_49562__$1,(1),null);
var inst_49565 = (inst_49563__$1 == null);
var state_49583__$1 = (function (){var statearr_49585 = state_49583;
(statearr_49585[(9)] = inst_49564);

(statearr_49585[(7)] = inst_49562__$1);

(statearr_49585[(8)] = inst_49563__$1);

return statearr_49585;
})();
if(cljs.core.truth_(inst_49565)){
var statearr_49586_49606 = state_49583__$1;
(statearr_49586_49606[(1)] = (8));

} else {
var statearr_49587_49607 = state_49583__$1;
(statearr_49587_49607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (1))){
var inst_49552 = cljs.core.vec.call(null,chs);
var inst_49553 = inst_49552;
var state_49583__$1 = (function (){var statearr_49588 = state_49583;
(statearr_49588[(10)] = inst_49553);

return statearr_49588;
})();
var statearr_49589_49608 = state_49583__$1;
(statearr_49589_49608[(2)] = null);

(statearr_49589_49608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (4))){
var inst_49553 = (state_49583[(10)]);
var state_49583__$1 = state_49583;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49583__$1,(7),inst_49553);
} else {
if((state_val_49584 === (6))){
var inst_49579 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49590_49609 = state_49583__$1;
(statearr_49590_49609[(2)] = inst_49579);

(statearr_49590_49609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (3))){
var inst_49581 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49583__$1,inst_49581);
} else {
if((state_val_49584 === (2))){
var inst_49553 = (state_49583[(10)]);
var inst_49555 = cljs.core.count.call(null,inst_49553);
var inst_49556 = (inst_49555 > (0));
var state_49583__$1 = state_49583;
if(cljs.core.truth_(inst_49556)){
var statearr_49592_49610 = state_49583__$1;
(statearr_49592_49610[(1)] = (4));

} else {
var statearr_49593_49611 = state_49583__$1;
(statearr_49593_49611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (11))){
var inst_49553 = (state_49583[(10)]);
var inst_49572 = (state_49583[(2)]);
var tmp49591 = inst_49553;
var inst_49553__$1 = tmp49591;
var state_49583__$1 = (function (){var statearr_49594 = state_49583;
(statearr_49594[(11)] = inst_49572);

(statearr_49594[(10)] = inst_49553__$1);

return statearr_49594;
})();
var statearr_49595_49612 = state_49583__$1;
(statearr_49595_49612[(2)] = null);

(statearr_49595_49612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (9))){
var inst_49563 = (state_49583[(8)]);
var state_49583__$1 = state_49583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49583__$1,(11),out,inst_49563);
} else {
if((state_val_49584 === (5))){
var inst_49577 = cljs.core.async.close_BANG_.call(null,out);
var state_49583__$1 = state_49583;
var statearr_49596_49613 = state_49583__$1;
(statearr_49596_49613[(2)] = inst_49577);

(statearr_49596_49613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (10))){
var inst_49575 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49597_49614 = state_49583__$1;
(statearr_49597_49614[(2)] = inst_49575);

(statearr_49597_49614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (8))){
var inst_49564 = (state_49583[(9)]);
var inst_49562 = (state_49583[(7)]);
var inst_49563 = (state_49583[(8)]);
var inst_49553 = (state_49583[(10)]);
var inst_49567 = (function (){var cs = inst_49553;
var vec__49558 = inst_49562;
var v = inst_49563;
var c = inst_49564;
return ((function (cs,vec__49558,v,c,inst_49564,inst_49562,inst_49563,inst_49553,state_val_49584,c__48192__auto___49605,out){
return (function (p1__49549_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49549_SHARP_);
});
;})(cs,vec__49558,v,c,inst_49564,inst_49562,inst_49563,inst_49553,state_val_49584,c__48192__auto___49605,out))
})();
var inst_49568 = cljs.core.filterv.call(null,inst_49567,inst_49553);
var inst_49553__$1 = inst_49568;
var state_49583__$1 = (function (){var statearr_49598 = state_49583;
(statearr_49598[(10)] = inst_49553__$1);

return statearr_49598;
})();
var statearr_49599_49615 = state_49583__$1;
(statearr_49599_49615[(2)] = null);

(statearr_49599_49615[(1)] = (2));


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
});})(c__48192__auto___49605,out))
;
return ((function (switch__48102__auto__,c__48192__auto___49605,out){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_49600 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49600[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_49600[(1)] = (1));

return statearr_49600;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49583){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49601){if((e49601 instanceof Object)){
var ex__48106__auto__ = e49601;
var statearr_49602_49616 = state_49583;
(statearr_49602_49616[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49617 = state_49583;
state_49583 = G__49617;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49605,out))
})();
var state__48194__auto__ = (function (){var statearr_49603 = f__48193__auto__.call(null);
(statearr_49603[(6)] = c__48192__auto___49605);

return statearr_49603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49605,out))
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
var G__49619 = arguments.length;
switch (G__49619) {
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
var c__48192__auto___49664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49664,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49664,out){
return (function (state_49643){
var state_val_49644 = (state_49643[(1)]);
if((state_val_49644 === (7))){
var inst_49625 = (state_49643[(7)]);
var inst_49625__$1 = (state_49643[(2)]);
var inst_49626 = (inst_49625__$1 == null);
var inst_49627 = cljs.core.not.call(null,inst_49626);
var state_49643__$1 = (function (){var statearr_49645 = state_49643;
(statearr_49645[(7)] = inst_49625__$1);

return statearr_49645;
})();
if(inst_49627){
var statearr_49646_49665 = state_49643__$1;
(statearr_49646_49665[(1)] = (8));

} else {
var statearr_49647_49666 = state_49643__$1;
(statearr_49647_49666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (1))){
var inst_49620 = (0);
var state_49643__$1 = (function (){var statearr_49648 = state_49643;
(statearr_49648[(8)] = inst_49620);

return statearr_49648;
})();
var statearr_49649_49667 = state_49643__$1;
(statearr_49649_49667[(2)] = null);

(statearr_49649_49667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (4))){
var state_49643__$1 = state_49643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49643__$1,(7),ch);
} else {
if((state_val_49644 === (6))){
var inst_49638 = (state_49643[(2)]);
var state_49643__$1 = state_49643;
var statearr_49650_49668 = state_49643__$1;
(statearr_49650_49668[(2)] = inst_49638);

(statearr_49650_49668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (3))){
var inst_49640 = (state_49643[(2)]);
var inst_49641 = cljs.core.async.close_BANG_.call(null,out);
var state_49643__$1 = (function (){var statearr_49651 = state_49643;
(statearr_49651[(9)] = inst_49640);

return statearr_49651;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49643__$1,inst_49641);
} else {
if((state_val_49644 === (2))){
var inst_49620 = (state_49643[(8)]);
var inst_49622 = (inst_49620 < n);
var state_49643__$1 = state_49643;
if(cljs.core.truth_(inst_49622)){
var statearr_49652_49669 = state_49643__$1;
(statearr_49652_49669[(1)] = (4));

} else {
var statearr_49653_49670 = state_49643__$1;
(statearr_49653_49670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (11))){
var inst_49620 = (state_49643[(8)]);
var inst_49630 = (state_49643[(2)]);
var inst_49631 = (inst_49620 + (1));
var inst_49620__$1 = inst_49631;
var state_49643__$1 = (function (){var statearr_49654 = state_49643;
(statearr_49654[(10)] = inst_49630);

(statearr_49654[(8)] = inst_49620__$1);

return statearr_49654;
})();
var statearr_49655_49671 = state_49643__$1;
(statearr_49655_49671[(2)] = null);

(statearr_49655_49671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (9))){
var state_49643__$1 = state_49643;
var statearr_49656_49672 = state_49643__$1;
(statearr_49656_49672[(2)] = null);

(statearr_49656_49672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (5))){
var state_49643__$1 = state_49643;
var statearr_49657_49673 = state_49643__$1;
(statearr_49657_49673[(2)] = null);

(statearr_49657_49673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (10))){
var inst_49635 = (state_49643[(2)]);
var state_49643__$1 = state_49643;
var statearr_49658_49674 = state_49643__$1;
(statearr_49658_49674[(2)] = inst_49635);

(statearr_49658_49674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49644 === (8))){
var inst_49625 = (state_49643[(7)]);
var state_49643__$1 = state_49643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49643__$1,(11),out,inst_49625);
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
});})(c__48192__auto___49664,out))
;
return ((function (switch__48102__auto__,c__48192__auto___49664,out){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_49659 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49659[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_49659[(1)] = (1));

return statearr_49659;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49643){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49660){if((e49660 instanceof Object)){
var ex__48106__auto__ = e49660;
var statearr_49661_49675 = state_49643;
(statearr_49661_49675[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49676 = state_49643;
state_49643 = G__49676;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49643);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49664,out))
})();
var state__48194__auto__ = (function (){var statearr_49662 = f__48193__auto__.call(null);
(statearr_49662[(6)] = c__48192__auto___49664);

return statearr_49662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49664,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49678 = (function (f,ch,meta49679){
this.f = f;
this.ch = ch;
this.meta49679 = meta49679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49680,meta49679__$1){
var self__ = this;
var _49680__$1 = this;
return (new cljs.core.async.t_cljs$core$async49678(self__.f,self__.ch,meta49679__$1));
});

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49680){
var self__ = this;
var _49680__$1 = this;
return self__.meta49679;
});

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49681 = (function (f,ch,meta49679,_,fn1,meta49682){
this.f = f;
this.ch = ch;
this.meta49679 = meta49679;
this._ = _;
this.fn1 = fn1;
this.meta49682 = meta49682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49683,meta49682__$1){
var self__ = this;
var _49683__$1 = this;
return (new cljs.core.async.t_cljs$core$async49681(self__.f,self__.ch,self__.meta49679,self__._,self__.fn1,meta49682__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49683){
var self__ = this;
var _49683__$1 = this;
return self__.meta49682;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49677_SHARP_){
return f1.call(null,(((p1__49677_SHARP_ == null))?null:self__.f.call(null,p1__49677_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49681.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49679","meta49679",-118613684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49678","cljs.core.async/t_cljs$core$async49678",2100834937,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49682","meta49682",221029050,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49681";

cljs.core.async.t_cljs$core$async49681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49681");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49681.
 */
cljs.core.async.__GT_t_cljs$core$async49681 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49681(f__$1,ch__$1,meta49679__$1,___$2,fn1__$1,meta49682){
return (new cljs.core.async.t_cljs$core$async49681(f__$1,ch__$1,meta49679__$1,___$2,fn1__$1,meta49682));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49681(self__.f,self__.ch,self__.meta49679,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49678.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49679","meta49679",-118613684,null)], null);
});

cljs.core.async.t_cljs$core$async49678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49678";

cljs.core.async.t_cljs$core$async49678.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49678");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49678.
 */
cljs.core.async.__GT_t_cljs$core$async49678 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49678(f__$1,ch__$1,meta49679){
return (new cljs.core.async.t_cljs$core$async49678(f__$1,ch__$1,meta49679));
});

}

return (new cljs.core.async.t_cljs$core$async49678(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49684 = (function (f,ch,meta49685){
this.f = f;
this.ch = ch;
this.meta49685 = meta49685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49686,meta49685__$1){
var self__ = this;
var _49686__$1 = this;
return (new cljs.core.async.t_cljs$core$async49684(self__.f,self__.ch,meta49685__$1));
});

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49686){
var self__ = this;
var _49686__$1 = this;
return self__.meta49685;
});

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49685","meta49685",-474688020,null)], null);
});

cljs.core.async.t_cljs$core$async49684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49684";

cljs.core.async.t_cljs$core$async49684.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49684");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49684.
 */
cljs.core.async.__GT_t_cljs$core$async49684 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49684(f__$1,ch__$1,meta49685){
return (new cljs.core.async.t_cljs$core$async49684(f__$1,ch__$1,meta49685));
});

}

return (new cljs.core.async.t_cljs$core$async49684(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49687 = (function (p,ch,meta49688){
this.p = p;
this.ch = ch;
this.meta49688 = meta49688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49689,meta49688__$1){
var self__ = this;
var _49689__$1 = this;
return (new cljs.core.async.t_cljs$core$async49687(self__.p,self__.ch,meta49688__$1));
});

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49689){
var self__ = this;
var _49689__$1 = this;
return self__.meta49688;
});

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49688","meta49688",-1645003179,null)], null);
});

cljs.core.async.t_cljs$core$async49687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49687";

cljs.core.async.t_cljs$core$async49687.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async49687");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49687.
 */
cljs.core.async.__GT_t_cljs$core$async49687 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49687(p__$1,ch__$1,meta49688){
return (new cljs.core.async.t_cljs$core$async49687(p__$1,ch__$1,meta49688));
});

}

return (new cljs.core.async.t_cljs$core$async49687(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49691 = arguments.length;
switch (G__49691) {
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
var c__48192__auto___49731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49731,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49731,out){
return (function (state_49712){
var state_val_49713 = (state_49712[(1)]);
if((state_val_49713 === (7))){
var inst_49708 = (state_49712[(2)]);
var state_49712__$1 = state_49712;
var statearr_49714_49732 = state_49712__$1;
(statearr_49714_49732[(2)] = inst_49708);

(statearr_49714_49732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (1))){
var state_49712__$1 = state_49712;
var statearr_49715_49733 = state_49712__$1;
(statearr_49715_49733[(2)] = null);

(statearr_49715_49733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (4))){
var inst_49694 = (state_49712[(7)]);
var inst_49694__$1 = (state_49712[(2)]);
var inst_49695 = (inst_49694__$1 == null);
var state_49712__$1 = (function (){var statearr_49716 = state_49712;
(statearr_49716[(7)] = inst_49694__$1);

return statearr_49716;
})();
if(cljs.core.truth_(inst_49695)){
var statearr_49717_49734 = state_49712__$1;
(statearr_49717_49734[(1)] = (5));

} else {
var statearr_49718_49735 = state_49712__$1;
(statearr_49718_49735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (6))){
var inst_49694 = (state_49712[(7)]);
var inst_49699 = p.call(null,inst_49694);
var state_49712__$1 = state_49712;
if(cljs.core.truth_(inst_49699)){
var statearr_49719_49736 = state_49712__$1;
(statearr_49719_49736[(1)] = (8));

} else {
var statearr_49720_49737 = state_49712__$1;
(statearr_49720_49737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (3))){
var inst_49710 = (state_49712[(2)]);
var state_49712__$1 = state_49712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49712__$1,inst_49710);
} else {
if((state_val_49713 === (2))){
var state_49712__$1 = state_49712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49712__$1,(4),ch);
} else {
if((state_val_49713 === (11))){
var inst_49702 = (state_49712[(2)]);
var state_49712__$1 = state_49712;
var statearr_49721_49738 = state_49712__$1;
(statearr_49721_49738[(2)] = inst_49702);

(statearr_49721_49738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (9))){
var state_49712__$1 = state_49712;
var statearr_49722_49739 = state_49712__$1;
(statearr_49722_49739[(2)] = null);

(statearr_49722_49739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (5))){
var inst_49697 = cljs.core.async.close_BANG_.call(null,out);
var state_49712__$1 = state_49712;
var statearr_49723_49740 = state_49712__$1;
(statearr_49723_49740[(2)] = inst_49697);

(statearr_49723_49740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (10))){
var inst_49705 = (state_49712[(2)]);
var state_49712__$1 = (function (){var statearr_49724 = state_49712;
(statearr_49724[(8)] = inst_49705);

return statearr_49724;
})();
var statearr_49725_49741 = state_49712__$1;
(statearr_49725_49741[(2)] = null);

(statearr_49725_49741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49713 === (8))){
var inst_49694 = (state_49712[(7)]);
var state_49712__$1 = state_49712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49712__$1,(11),out,inst_49694);
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
});})(c__48192__auto___49731,out))
;
return ((function (switch__48102__auto__,c__48192__auto___49731,out){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_49726 = [null,null,null,null,null,null,null,null,null];
(statearr_49726[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_49726[(1)] = (1));

return statearr_49726;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49712){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49727){if((e49727 instanceof Object)){
var ex__48106__auto__ = e49727;
var statearr_49728_49742 = state_49712;
(statearr_49728_49742[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49743 = state_49712;
state_49712 = G__49743;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49731,out))
})();
var state__48194__auto__ = (function (){var statearr_49729 = f__48193__auto__.call(null);
(statearr_49729[(6)] = c__48192__auto___49731);

return statearr_49729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49731,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49745 = arguments.length;
switch (G__49745) {
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
var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__){
return (function (state_49808){
var state_val_49809 = (state_49808[(1)]);
if((state_val_49809 === (7))){
var inst_49804 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49810_49848 = state_49808__$1;
(statearr_49810_49848[(2)] = inst_49804);

(statearr_49810_49848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (20))){
var inst_49774 = (state_49808[(7)]);
var inst_49785 = (state_49808[(2)]);
var inst_49786 = cljs.core.next.call(null,inst_49774);
var inst_49760 = inst_49786;
var inst_49761 = null;
var inst_49762 = (0);
var inst_49763 = (0);
var state_49808__$1 = (function (){var statearr_49811 = state_49808;
(statearr_49811[(8)] = inst_49762);

(statearr_49811[(9)] = inst_49763);

(statearr_49811[(10)] = inst_49785);

(statearr_49811[(11)] = inst_49760);

(statearr_49811[(12)] = inst_49761);

return statearr_49811;
})();
var statearr_49812_49849 = state_49808__$1;
(statearr_49812_49849[(2)] = null);

(statearr_49812_49849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (1))){
var state_49808__$1 = state_49808;
var statearr_49813_49850 = state_49808__$1;
(statearr_49813_49850[(2)] = null);

(statearr_49813_49850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (4))){
var inst_49749 = (state_49808[(13)]);
var inst_49749__$1 = (state_49808[(2)]);
var inst_49750 = (inst_49749__$1 == null);
var state_49808__$1 = (function (){var statearr_49814 = state_49808;
(statearr_49814[(13)] = inst_49749__$1);

return statearr_49814;
})();
if(cljs.core.truth_(inst_49750)){
var statearr_49815_49851 = state_49808__$1;
(statearr_49815_49851[(1)] = (5));

} else {
var statearr_49816_49852 = state_49808__$1;
(statearr_49816_49852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (15))){
var state_49808__$1 = state_49808;
var statearr_49820_49853 = state_49808__$1;
(statearr_49820_49853[(2)] = null);

(statearr_49820_49853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (21))){
var state_49808__$1 = state_49808;
var statearr_49821_49854 = state_49808__$1;
(statearr_49821_49854[(2)] = null);

(statearr_49821_49854[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (13))){
var inst_49762 = (state_49808[(8)]);
var inst_49763 = (state_49808[(9)]);
var inst_49760 = (state_49808[(11)]);
var inst_49761 = (state_49808[(12)]);
var inst_49770 = (state_49808[(2)]);
var inst_49771 = (inst_49763 + (1));
var tmp49817 = inst_49762;
var tmp49818 = inst_49760;
var tmp49819 = inst_49761;
var inst_49760__$1 = tmp49818;
var inst_49761__$1 = tmp49819;
var inst_49762__$1 = tmp49817;
var inst_49763__$1 = inst_49771;
var state_49808__$1 = (function (){var statearr_49822 = state_49808;
(statearr_49822[(8)] = inst_49762__$1);

(statearr_49822[(9)] = inst_49763__$1);

(statearr_49822[(14)] = inst_49770);

(statearr_49822[(11)] = inst_49760__$1);

(statearr_49822[(12)] = inst_49761__$1);

return statearr_49822;
})();
var statearr_49823_49855 = state_49808__$1;
(statearr_49823_49855[(2)] = null);

(statearr_49823_49855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (22))){
var state_49808__$1 = state_49808;
var statearr_49824_49856 = state_49808__$1;
(statearr_49824_49856[(2)] = null);

(statearr_49824_49856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (6))){
var inst_49749 = (state_49808[(13)]);
var inst_49758 = f.call(null,inst_49749);
var inst_49759 = cljs.core.seq.call(null,inst_49758);
var inst_49760 = inst_49759;
var inst_49761 = null;
var inst_49762 = (0);
var inst_49763 = (0);
var state_49808__$1 = (function (){var statearr_49825 = state_49808;
(statearr_49825[(8)] = inst_49762);

(statearr_49825[(9)] = inst_49763);

(statearr_49825[(11)] = inst_49760);

(statearr_49825[(12)] = inst_49761);

return statearr_49825;
})();
var statearr_49826_49857 = state_49808__$1;
(statearr_49826_49857[(2)] = null);

(statearr_49826_49857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (17))){
var inst_49774 = (state_49808[(7)]);
var inst_49778 = cljs.core.chunk_first.call(null,inst_49774);
var inst_49779 = cljs.core.chunk_rest.call(null,inst_49774);
var inst_49780 = cljs.core.count.call(null,inst_49778);
var inst_49760 = inst_49779;
var inst_49761 = inst_49778;
var inst_49762 = inst_49780;
var inst_49763 = (0);
var state_49808__$1 = (function (){var statearr_49827 = state_49808;
(statearr_49827[(8)] = inst_49762);

(statearr_49827[(9)] = inst_49763);

(statearr_49827[(11)] = inst_49760);

(statearr_49827[(12)] = inst_49761);

return statearr_49827;
})();
var statearr_49828_49858 = state_49808__$1;
(statearr_49828_49858[(2)] = null);

(statearr_49828_49858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (3))){
var inst_49806 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49808__$1,inst_49806);
} else {
if((state_val_49809 === (12))){
var inst_49794 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49829_49859 = state_49808__$1;
(statearr_49829_49859[(2)] = inst_49794);

(statearr_49829_49859[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (2))){
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49808__$1,(4),in$);
} else {
if((state_val_49809 === (23))){
var inst_49802 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49830_49860 = state_49808__$1;
(statearr_49830_49860[(2)] = inst_49802);

(statearr_49830_49860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (19))){
var inst_49789 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49831_49861 = state_49808__$1;
(statearr_49831_49861[(2)] = inst_49789);

(statearr_49831_49861[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (11))){
var inst_49760 = (state_49808[(11)]);
var inst_49774 = (state_49808[(7)]);
var inst_49774__$1 = cljs.core.seq.call(null,inst_49760);
var state_49808__$1 = (function (){var statearr_49832 = state_49808;
(statearr_49832[(7)] = inst_49774__$1);

return statearr_49832;
})();
if(inst_49774__$1){
var statearr_49833_49862 = state_49808__$1;
(statearr_49833_49862[(1)] = (14));

} else {
var statearr_49834_49863 = state_49808__$1;
(statearr_49834_49863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (9))){
var inst_49796 = (state_49808[(2)]);
var inst_49797 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49808__$1 = (function (){var statearr_49835 = state_49808;
(statearr_49835[(15)] = inst_49796);

return statearr_49835;
})();
if(cljs.core.truth_(inst_49797)){
var statearr_49836_49864 = state_49808__$1;
(statearr_49836_49864[(1)] = (21));

} else {
var statearr_49837_49865 = state_49808__$1;
(statearr_49837_49865[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (5))){
var inst_49752 = cljs.core.async.close_BANG_.call(null,out);
var state_49808__$1 = state_49808;
var statearr_49838_49866 = state_49808__$1;
(statearr_49838_49866[(2)] = inst_49752);

(statearr_49838_49866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (14))){
var inst_49774 = (state_49808[(7)]);
var inst_49776 = cljs.core.chunked_seq_QMARK_.call(null,inst_49774);
var state_49808__$1 = state_49808;
if(inst_49776){
var statearr_49839_49867 = state_49808__$1;
(statearr_49839_49867[(1)] = (17));

} else {
var statearr_49840_49868 = state_49808__$1;
(statearr_49840_49868[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (16))){
var inst_49792 = (state_49808[(2)]);
var state_49808__$1 = state_49808;
var statearr_49841_49869 = state_49808__$1;
(statearr_49841_49869[(2)] = inst_49792);

(statearr_49841_49869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49809 === (10))){
var inst_49763 = (state_49808[(9)]);
var inst_49761 = (state_49808[(12)]);
var inst_49768 = cljs.core._nth.call(null,inst_49761,inst_49763);
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49808__$1,(13),out,inst_49768);
} else {
if((state_val_49809 === (18))){
var inst_49774 = (state_49808[(7)]);
var inst_49783 = cljs.core.first.call(null,inst_49774);
var state_49808__$1 = state_49808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49808__$1,(20),out,inst_49783);
} else {
if((state_val_49809 === (8))){
var inst_49762 = (state_49808[(8)]);
var inst_49763 = (state_49808[(9)]);
var inst_49765 = (inst_49763 < inst_49762);
var inst_49766 = inst_49765;
var state_49808__$1 = state_49808;
if(cljs.core.truth_(inst_49766)){
var statearr_49842_49870 = state_49808__$1;
(statearr_49842_49870[(1)] = (10));

} else {
var statearr_49843_49871 = state_49808__$1;
(statearr_49843_49871[(1)] = (11));

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
});})(c__48192__auto__))
;
return ((function (switch__48102__auto__,c__48192__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48103__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48103__auto____0 = (function (){
var statearr_49844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49844[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48103__auto__);

(statearr_49844[(1)] = (1));

return statearr_49844;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48103__auto____1 = (function (state_49808){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49845){if((e49845 instanceof Object)){
var ex__48106__auto__ = e49845;
var statearr_49846_49872 = state_49808;
(statearr_49846_49872[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49873 = state_49808;
state_49808 = G__49873;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48103__auto__ = function(state_49808){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48103__auto____1.call(this,state_49808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48103__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48103__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__))
})();
var state__48194__auto__ = (function (){var statearr_49847 = f__48193__auto__.call(null);
(statearr_49847[(6)] = c__48192__auto__);

return statearr_49847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__))
);

return c__48192__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49875 = arguments.length;
switch (G__49875) {
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
var G__49878 = arguments.length;
switch (G__49878) {
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
var G__49881 = arguments.length;
switch (G__49881) {
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
var c__48192__auto___49928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___49928,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___49928,out){
return (function (state_49905){
var state_val_49906 = (state_49905[(1)]);
if((state_val_49906 === (7))){
var inst_49900 = (state_49905[(2)]);
var state_49905__$1 = state_49905;
var statearr_49907_49929 = state_49905__$1;
(statearr_49907_49929[(2)] = inst_49900);

(statearr_49907_49929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (1))){
var inst_49882 = null;
var state_49905__$1 = (function (){var statearr_49908 = state_49905;
(statearr_49908[(7)] = inst_49882);

return statearr_49908;
})();
var statearr_49909_49930 = state_49905__$1;
(statearr_49909_49930[(2)] = null);

(statearr_49909_49930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (4))){
var inst_49885 = (state_49905[(8)]);
var inst_49885__$1 = (state_49905[(2)]);
var inst_49886 = (inst_49885__$1 == null);
var inst_49887 = cljs.core.not.call(null,inst_49886);
var state_49905__$1 = (function (){var statearr_49910 = state_49905;
(statearr_49910[(8)] = inst_49885__$1);

return statearr_49910;
})();
if(inst_49887){
var statearr_49911_49931 = state_49905__$1;
(statearr_49911_49931[(1)] = (5));

} else {
var statearr_49912_49932 = state_49905__$1;
(statearr_49912_49932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (6))){
var state_49905__$1 = state_49905;
var statearr_49913_49933 = state_49905__$1;
(statearr_49913_49933[(2)] = null);

(statearr_49913_49933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (3))){
var inst_49902 = (state_49905[(2)]);
var inst_49903 = cljs.core.async.close_BANG_.call(null,out);
var state_49905__$1 = (function (){var statearr_49914 = state_49905;
(statearr_49914[(9)] = inst_49902);

return statearr_49914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49905__$1,inst_49903);
} else {
if((state_val_49906 === (2))){
var state_49905__$1 = state_49905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49905__$1,(4),ch);
} else {
if((state_val_49906 === (11))){
var inst_49885 = (state_49905[(8)]);
var inst_49894 = (state_49905[(2)]);
var inst_49882 = inst_49885;
var state_49905__$1 = (function (){var statearr_49915 = state_49905;
(statearr_49915[(10)] = inst_49894);

(statearr_49915[(7)] = inst_49882);

return statearr_49915;
})();
var statearr_49916_49934 = state_49905__$1;
(statearr_49916_49934[(2)] = null);

(statearr_49916_49934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (9))){
var inst_49885 = (state_49905[(8)]);
var state_49905__$1 = state_49905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49905__$1,(11),out,inst_49885);
} else {
if((state_val_49906 === (5))){
var inst_49885 = (state_49905[(8)]);
var inst_49882 = (state_49905[(7)]);
var inst_49889 = cljs.core._EQ_.call(null,inst_49885,inst_49882);
var state_49905__$1 = state_49905;
if(inst_49889){
var statearr_49918_49935 = state_49905__$1;
(statearr_49918_49935[(1)] = (8));

} else {
var statearr_49919_49936 = state_49905__$1;
(statearr_49919_49936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (10))){
var inst_49897 = (state_49905[(2)]);
var state_49905__$1 = state_49905;
var statearr_49920_49937 = state_49905__$1;
(statearr_49920_49937[(2)] = inst_49897);

(statearr_49920_49937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49906 === (8))){
var inst_49882 = (state_49905[(7)]);
var tmp49917 = inst_49882;
var inst_49882__$1 = tmp49917;
var state_49905__$1 = (function (){var statearr_49921 = state_49905;
(statearr_49921[(7)] = inst_49882__$1);

return statearr_49921;
})();
var statearr_49922_49938 = state_49905__$1;
(statearr_49922_49938[(2)] = null);

(statearr_49922_49938[(1)] = (2));


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
});})(c__48192__auto___49928,out))
;
return ((function (switch__48102__auto__,c__48192__auto___49928,out){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_49923 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49923[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_49923[(1)] = (1));

return statearr_49923;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49905){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e49924){if((e49924 instanceof Object)){
var ex__48106__auto__ = e49924;
var statearr_49925_49939 = state_49905;
(statearr_49925_49939[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49940 = state_49905;
state_49905 = G__49940;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___49928,out))
})();
var state__48194__auto__ = (function (){var statearr_49926 = f__48193__auto__.call(null);
(statearr_49926[(6)] = c__48192__auto___49928);

return statearr_49926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___49928,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49942 = arguments.length;
switch (G__49942) {
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
var c__48192__auto___50008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___50008,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___50008,out){
return (function (state_49980){
var state_val_49981 = (state_49980[(1)]);
if((state_val_49981 === (7))){
var inst_49976 = (state_49980[(2)]);
var state_49980__$1 = state_49980;
var statearr_49982_50009 = state_49980__$1;
(statearr_49982_50009[(2)] = inst_49976);

(statearr_49982_50009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (1))){
var inst_49943 = (new Array(n));
var inst_49944 = inst_49943;
var inst_49945 = (0);
var state_49980__$1 = (function (){var statearr_49983 = state_49980;
(statearr_49983[(7)] = inst_49944);

(statearr_49983[(8)] = inst_49945);

return statearr_49983;
})();
var statearr_49984_50010 = state_49980__$1;
(statearr_49984_50010[(2)] = null);

(statearr_49984_50010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (4))){
var inst_49948 = (state_49980[(9)]);
var inst_49948__$1 = (state_49980[(2)]);
var inst_49949 = (inst_49948__$1 == null);
var inst_49950 = cljs.core.not.call(null,inst_49949);
var state_49980__$1 = (function (){var statearr_49985 = state_49980;
(statearr_49985[(9)] = inst_49948__$1);

return statearr_49985;
})();
if(inst_49950){
var statearr_49986_50011 = state_49980__$1;
(statearr_49986_50011[(1)] = (5));

} else {
var statearr_49987_50012 = state_49980__$1;
(statearr_49987_50012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (15))){
var inst_49970 = (state_49980[(2)]);
var state_49980__$1 = state_49980;
var statearr_49988_50013 = state_49980__$1;
(statearr_49988_50013[(2)] = inst_49970);

(statearr_49988_50013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (13))){
var state_49980__$1 = state_49980;
var statearr_49989_50014 = state_49980__$1;
(statearr_49989_50014[(2)] = null);

(statearr_49989_50014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (6))){
var inst_49945 = (state_49980[(8)]);
var inst_49966 = (inst_49945 > (0));
var state_49980__$1 = state_49980;
if(cljs.core.truth_(inst_49966)){
var statearr_49990_50015 = state_49980__$1;
(statearr_49990_50015[(1)] = (12));

} else {
var statearr_49991_50016 = state_49980__$1;
(statearr_49991_50016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (3))){
var inst_49978 = (state_49980[(2)]);
var state_49980__$1 = state_49980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49980__$1,inst_49978);
} else {
if((state_val_49981 === (12))){
var inst_49944 = (state_49980[(7)]);
var inst_49968 = cljs.core.vec.call(null,inst_49944);
var state_49980__$1 = state_49980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49980__$1,(15),out,inst_49968);
} else {
if((state_val_49981 === (2))){
var state_49980__$1 = state_49980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49980__$1,(4),ch);
} else {
if((state_val_49981 === (11))){
var inst_49960 = (state_49980[(2)]);
var inst_49961 = (new Array(n));
var inst_49944 = inst_49961;
var inst_49945 = (0);
var state_49980__$1 = (function (){var statearr_49992 = state_49980;
(statearr_49992[(10)] = inst_49960);

(statearr_49992[(7)] = inst_49944);

(statearr_49992[(8)] = inst_49945);

return statearr_49992;
})();
var statearr_49993_50017 = state_49980__$1;
(statearr_49993_50017[(2)] = null);

(statearr_49993_50017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (9))){
var inst_49944 = (state_49980[(7)]);
var inst_49958 = cljs.core.vec.call(null,inst_49944);
var state_49980__$1 = state_49980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49980__$1,(11),out,inst_49958);
} else {
if((state_val_49981 === (5))){
var inst_49953 = (state_49980[(11)]);
var inst_49944 = (state_49980[(7)]);
var inst_49948 = (state_49980[(9)]);
var inst_49945 = (state_49980[(8)]);
var inst_49952 = (inst_49944[inst_49945] = inst_49948);
var inst_49953__$1 = (inst_49945 + (1));
var inst_49954 = (inst_49953__$1 < n);
var state_49980__$1 = (function (){var statearr_49994 = state_49980;
(statearr_49994[(11)] = inst_49953__$1);

(statearr_49994[(12)] = inst_49952);

return statearr_49994;
})();
if(cljs.core.truth_(inst_49954)){
var statearr_49995_50018 = state_49980__$1;
(statearr_49995_50018[(1)] = (8));

} else {
var statearr_49996_50019 = state_49980__$1;
(statearr_49996_50019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (14))){
var inst_49973 = (state_49980[(2)]);
var inst_49974 = cljs.core.async.close_BANG_.call(null,out);
var state_49980__$1 = (function (){var statearr_49998 = state_49980;
(statearr_49998[(13)] = inst_49973);

return statearr_49998;
})();
var statearr_49999_50020 = state_49980__$1;
(statearr_49999_50020[(2)] = inst_49974);

(statearr_49999_50020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (10))){
var inst_49964 = (state_49980[(2)]);
var state_49980__$1 = state_49980;
var statearr_50000_50021 = state_49980__$1;
(statearr_50000_50021[(2)] = inst_49964);

(statearr_50000_50021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49981 === (8))){
var inst_49953 = (state_49980[(11)]);
var inst_49944 = (state_49980[(7)]);
var tmp49997 = inst_49944;
var inst_49944__$1 = tmp49997;
var inst_49945 = inst_49953;
var state_49980__$1 = (function (){var statearr_50001 = state_49980;
(statearr_50001[(7)] = inst_49944__$1);

(statearr_50001[(8)] = inst_49945);

return statearr_50001;
})();
var statearr_50002_50022 = state_49980__$1;
(statearr_50002_50022[(2)] = null);

(statearr_50002_50022[(1)] = (2));


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
});})(c__48192__auto___50008,out))
;
return ((function (switch__48102__auto__,c__48192__auto___50008,out){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_50003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50003[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_50003[(1)] = (1));

return statearr_50003;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_49980){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_49980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e50004){if((e50004 instanceof Object)){
var ex__48106__auto__ = e50004;
var statearr_50005_50023 = state_49980;
(statearr_50005_50023[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50024 = state_49980;
state_49980 = G__50024;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_49980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_49980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___50008,out))
})();
var state__48194__auto__ = (function (){var statearr_50006 = f__48193__auto__.call(null);
(statearr_50006[(6)] = c__48192__auto___50008);

return statearr_50006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___50008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50026 = arguments.length;
switch (G__50026) {
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
var c__48192__auto___50096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___50096,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___50096,out){
return (function (state_50068){
var state_val_50069 = (state_50068[(1)]);
if((state_val_50069 === (7))){
var inst_50064 = (state_50068[(2)]);
var state_50068__$1 = state_50068;
var statearr_50070_50097 = state_50068__$1;
(statearr_50070_50097[(2)] = inst_50064);

(statearr_50070_50097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (1))){
var inst_50027 = [];
var inst_50028 = inst_50027;
var inst_50029 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50068__$1 = (function (){var statearr_50071 = state_50068;
(statearr_50071[(7)] = inst_50028);

(statearr_50071[(8)] = inst_50029);

return statearr_50071;
})();
var statearr_50072_50098 = state_50068__$1;
(statearr_50072_50098[(2)] = null);

(statearr_50072_50098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (4))){
var inst_50032 = (state_50068[(9)]);
var inst_50032__$1 = (state_50068[(2)]);
var inst_50033 = (inst_50032__$1 == null);
var inst_50034 = cljs.core.not.call(null,inst_50033);
var state_50068__$1 = (function (){var statearr_50073 = state_50068;
(statearr_50073[(9)] = inst_50032__$1);

return statearr_50073;
})();
if(inst_50034){
var statearr_50074_50099 = state_50068__$1;
(statearr_50074_50099[(1)] = (5));

} else {
var statearr_50075_50100 = state_50068__$1;
(statearr_50075_50100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (15))){
var inst_50058 = (state_50068[(2)]);
var state_50068__$1 = state_50068;
var statearr_50076_50101 = state_50068__$1;
(statearr_50076_50101[(2)] = inst_50058);

(statearr_50076_50101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (13))){
var state_50068__$1 = state_50068;
var statearr_50077_50102 = state_50068__$1;
(statearr_50077_50102[(2)] = null);

(statearr_50077_50102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (6))){
var inst_50028 = (state_50068[(7)]);
var inst_50053 = inst_50028.length;
var inst_50054 = (inst_50053 > (0));
var state_50068__$1 = state_50068;
if(cljs.core.truth_(inst_50054)){
var statearr_50078_50103 = state_50068__$1;
(statearr_50078_50103[(1)] = (12));

} else {
var statearr_50079_50104 = state_50068__$1;
(statearr_50079_50104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (3))){
var inst_50066 = (state_50068[(2)]);
var state_50068__$1 = state_50068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50068__$1,inst_50066);
} else {
if((state_val_50069 === (12))){
var inst_50028 = (state_50068[(7)]);
var inst_50056 = cljs.core.vec.call(null,inst_50028);
var state_50068__$1 = state_50068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50068__$1,(15),out,inst_50056);
} else {
if((state_val_50069 === (2))){
var state_50068__$1 = state_50068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50068__$1,(4),ch);
} else {
if((state_val_50069 === (11))){
var inst_50032 = (state_50068[(9)]);
var inst_50036 = (state_50068[(10)]);
var inst_50046 = (state_50068[(2)]);
var inst_50047 = [];
var inst_50048 = inst_50047.push(inst_50032);
var inst_50028 = inst_50047;
var inst_50029 = inst_50036;
var state_50068__$1 = (function (){var statearr_50080 = state_50068;
(statearr_50080[(11)] = inst_50046);

(statearr_50080[(7)] = inst_50028);

(statearr_50080[(8)] = inst_50029);

(statearr_50080[(12)] = inst_50048);

return statearr_50080;
})();
var statearr_50081_50105 = state_50068__$1;
(statearr_50081_50105[(2)] = null);

(statearr_50081_50105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (9))){
var inst_50028 = (state_50068[(7)]);
var inst_50044 = cljs.core.vec.call(null,inst_50028);
var state_50068__$1 = state_50068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50068__$1,(11),out,inst_50044);
} else {
if((state_val_50069 === (5))){
var inst_50032 = (state_50068[(9)]);
var inst_50029 = (state_50068[(8)]);
var inst_50036 = (state_50068[(10)]);
var inst_50036__$1 = f.call(null,inst_50032);
var inst_50037 = cljs.core._EQ_.call(null,inst_50036__$1,inst_50029);
var inst_50038 = cljs.core.keyword_identical_QMARK_.call(null,inst_50029,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50039 = ((inst_50037) || (inst_50038));
var state_50068__$1 = (function (){var statearr_50082 = state_50068;
(statearr_50082[(10)] = inst_50036__$1);

return statearr_50082;
})();
if(cljs.core.truth_(inst_50039)){
var statearr_50083_50106 = state_50068__$1;
(statearr_50083_50106[(1)] = (8));

} else {
var statearr_50084_50107 = state_50068__$1;
(statearr_50084_50107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (14))){
var inst_50061 = (state_50068[(2)]);
var inst_50062 = cljs.core.async.close_BANG_.call(null,out);
var state_50068__$1 = (function (){var statearr_50086 = state_50068;
(statearr_50086[(13)] = inst_50061);

return statearr_50086;
})();
var statearr_50087_50108 = state_50068__$1;
(statearr_50087_50108[(2)] = inst_50062);

(statearr_50087_50108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (10))){
var inst_50051 = (state_50068[(2)]);
var state_50068__$1 = state_50068;
var statearr_50088_50109 = state_50068__$1;
(statearr_50088_50109[(2)] = inst_50051);

(statearr_50088_50109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50069 === (8))){
var inst_50028 = (state_50068[(7)]);
var inst_50032 = (state_50068[(9)]);
var inst_50036 = (state_50068[(10)]);
var inst_50041 = inst_50028.push(inst_50032);
var tmp50085 = inst_50028;
var inst_50028__$1 = tmp50085;
var inst_50029 = inst_50036;
var state_50068__$1 = (function (){var statearr_50089 = state_50068;
(statearr_50089[(7)] = inst_50028__$1);

(statearr_50089[(8)] = inst_50029);

(statearr_50089[(14)] = inst_50041);

return statearr_50089;
})();
var statearr_50090_50110 = state_50068__$1;
(statearr_50090_50110[(2)] = null);

(statearr_50090_50110[(1)] = (2));


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
});})(c__48192__auto___50096,out))
;
return ((function (switch__48102__auto__,c__48192__auto___50096,out){
return (function() {
var cljs$core$async$state_machine__48103__auto__ = null;
var cljs$core$async$state_machine__48103__auto____0 = (function (){
var statearr_50091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50091[(0)] = cljs$core$async$state_machine__48103__auto__);

(statearr_50091[(1)] = (1));

return statearr_50091;
});
var cljs$core$async$state_machine__48103__auto____1 = (function (state_50068){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_50068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e50092){if((e50092 instanceof Object)){
var ex__48106__auto__ = e50092;
var statearr_50093_50111 = state_50068;
(statearr_50093_50111[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50112 = state_50068;
state_50068 = G__50112;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
cljs$core$async$state_machine__48103__auto__ = function(state_50068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48103__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48103__auto____1.call(this,state_50068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48103__auto____0;
cljs$core$async$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48103__auto____1;
return cljs$core$async$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___50096,out))
})();
var state__48194__auto__ = (function (){var statearr_50094 = f__48193__auto__.call(null);
(statearr_50094[(6)] = c__48192__auto___50096);

return statearr_50094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___50096,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1526415199667
