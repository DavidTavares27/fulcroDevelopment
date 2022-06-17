goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39153 = arguments.length;
switch (G__39153) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39159 = (function (f,blockable,meta39160){
this.f = f;
this.blockable = blockable;
this.meta39160 = meta39160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39161,meta39160__$1){
var self__ = this;
var _39161__$1 = this;
return (new cljs.core.async.t_cljs$core$async39159(self__.f,self__.blockable,meta39160__$1));
}));

(cljs.core.async.t_cljs$core$async39159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39161){
var self__ = this;
var _39161__$1 = this;
return self__.meta39160;
}));

(cljs.core.async.t_cljs$core$async39159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39160","meta39160",-1387479631,null)], null);
}));

(cljs.core.async.t_cljs$core$async39159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39159");

(cljs.core.async.t_cljs$core$async39159.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39159.
 */
cljs.core.async.__GT_t_cljs$core$async39159 = (function cljs$core$async$__GT_t_cljs$core$async39159(f__$1,blockable__$1,meta39160){
return (new cljs.core.async.t_cljs$core$async39159(f__$1,blockable__$1,meta39160));
});

}

return (new cljs.core.async.t_cljs$core$async39159(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__39173 = arguments.length;
switch (G__39173) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39181 = arguments.length;
switch (G__39181) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__39188 = arguments.length;
switch (G__39188) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40712 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40712) : fn1.call(null,val_40712));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40712) : fn1.call(null,val_40712));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39190 = arguments.length;
switch (G__39190) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___40714 = n;
var x_40715 = (0);
while(true){
if((x_40715 < n__5633__auto___40714)){
(a[x_40715] = x_40715);

var G__40716 = (x_40715 + (1));
x_40715 = G__40716;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39196 = (function (flag,meta39197){
this.flag = flag;
this.meta39197 = meta39197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39198,meta39197__$1){
var self__ = this;
var _39198__$1 = this;
return (new cljs.core.async.t_cljs$core$async39196(self__.flag,meta39197__$1));
}));

(cljs.core.async.t_cljs$core$async39196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39198){
var self__ = this;
var _39198__$1 = this;
return self__.meta39197;
}));

(cljs.core.async.t_cljs$core$async39196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39197","meta39197",1024862593,null)], null);
}));

(cljs.core.async.t_cljs$core$async39196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39196");

(cljs.core.async.t_cljs$core$async39196.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39196.
 */
cljs.core.async.__GT_t_cljs$core$async39196 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39196(flag__$1,meta39197){
return (new cljs.core.async.t_cljs$core$async39196(flag__$1,meta39197));
});

}

return (new cljs.core.async.t_cljs$core$async39196(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39199 = (function (flag,cb,meta39200){
this.flag = flag;
this.cb = cb;
this.meta39200 = meta39200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39201,meta39200__$1){
var self__ = this;
var _39201__$1 = this;
return (new cljs.core.async.t_cljs$core$async39199(self__.flag,self__.cb,meta39200__$1));
}));

(cljs.core.async.t_cljs$core$async39199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39201){
var self__ = this;
var _39201__$1 = this;
return self__.meta39200;
}));

(cljs.core.async.t_cljs$core$async39199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39200","meta39200",-1153154041,null)], null);
}));

(cljs.core.async.t_cljs$core$async39199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39199");

(cljs.core.async.t_cljs$core$async39199.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39199.
 */
cljs.core.async.__GT_t_cljs$core$async39199 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39199(flag__$1,cb__$1,meta39200){
return (new cljs.core.async.t_cljs$core$async39199(flag__$1,cb__$1,meta39200));
});

}

return (new cljs.core.async.t_cljs$core$async39199(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39216_SHARP_){
var G__39221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39216_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39221) : fret.call(null,G__39221));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39217_SHARP_){
var G__39226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39217_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39226) : fret.call(null,G__39226));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40717 = (i + (1));
i = G__40717;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5772__auto__ = [];
var len__5766__auto___40718 = arguments.length;
var i__5767__auto___40719 = (0);
while(true){
if((i__5767__auto___40719 < len__5766__auto___40718)){
args__5772__auto__.push((arguments[i__5767__auto___40719]));

var G__40720 = (i__5767__auto___40719 + (1));
i__5767__auto___40719 = G__40720;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39240){
var map__39241 = p__39240;
var map__39241__$1 = cljs.core.__destructure_map(map__39241);
var opts = map__39241__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39238){
var G__39239 = cljs.core.first(seq39238);
var seq39238__$1 = cljs.core.next(seq39238);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39239,seq39238__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__39257 = arguments.length;
switch (G__39257) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39095__auto___40722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39307){
var state_val_39308 = (state_39307[(1)]);
if((state_val_39308 === (7))){
var inst_39301 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
var statearr_39310_40723 = state_39307__$1;
(statearr_39310_40723[(2)] = inst_39301);

(statearr_39310_40723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (1))){
var state_39307__$1 = state_39307;
var statearr_39311_40724 = state_39307__$1;
(statearr_39311_40724[(2)] = null);

(statearr_39311_40724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (4))){
var inst_39283 = (state_39307[(7)]);
var inst_39283__$1 = (state_39307[(2)]);
var inst_39285 = (inst_39283__$1 == null);
var state_39307__$1 = (function (){var statearr_39312 = state_39307;
(statearr_39312[(7)] = inst_39283__$1);

return statearr_39312;
})();
if(cljs.core.truth_(inst_39285)){
var statearr_39313_40725 = state_39307__$1;
(statearr_39313_40725[(1)] = (5));

} else {
var statearr_39314_40726 = state_39307__$1;
(statearr_39314_40726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (13))){
var state_39307__$1 = state_39307;
var statearr_39315_40727 = state_39307__$1;
(statearr_39315_40727[(2)] = null);

(statearr_39315_40727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (6))){
var inst_39283 = (state_39307[(7)]);
var state_39307__$1 = state_39307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39307__$1,(11),to,inst_39283);
} else {
if((state_val_39308 === (3))){
var inst_39304 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39307__$1,inst_39304);
} else {
if((state_val_39308 === (12))){
var state_39307__$1 = state_39307;
var statearr_39325_40728 = state_39307__$1;
(statearr_39325_40728[(2)] = null);

(statearr_39325_40728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (2))){
var state_39307__$1 = state_39307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39307__$1,(4),from);
} else {
if((state_val_39308 === (11))){
var inst_39294 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
if(cljs.core.truth_(inst_39294)){
var statearr_39330_40729 = state_39307__$1;
(statearr_39330_40729[(1)] = (12));

} else {
var statearr_39331_40730 = state_39307__$1;
(statearr_39331_40730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (9))){
var state_39307__$1 = state_39307;
var statearr_39332_40731 = state_39307__$1;
(statearr_39332_40731[(2)] = null);

(statearr_39332_40731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (5))){
var state_39307__$1 = state_39307;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39333_40732 = state_39307__$1;
(statearr_39333_40732[(1)] = (8));

} else {
var statearr_39334_40733 = state_39307__$1;
(statearr_39334_40733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (14))){
var inst_39299 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
var statearr_39335_40734 = state_39307__$1;
(statearr_39335_40734[(2)] = inst_39299);

(statearr_39335_40734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (10))){
var inst_39291 = (state_39307[(2)]);
var state_39307__$1 = state_39307;
var statearr_39336_40735 = state_39307__$1;
(statearr_39336_40735[(2)] = inst_39291);

(statearr_39336_40735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39308 === (8))){
var inst_39288 = cljs.core.async.close_BANG_(to);
var state_39307__$1 = state_39307;
var statearr_39337_40736 = state_39307__$1;
(statearr_39337_40736[(2)] = inst_39288);

(statearr_39337_40736[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_39338 = [null,null,null,null,null,null,null,null];
(statearr_39338[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_39338[(1)] = (1));

return statearr_39338;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_39307){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39307);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39339){var ex__39062__auto__ = e39339;
var statearr_39340_40737 = state_39307;
(statearr_39340_40737[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39307[(4)]))){
var statearr_39341_40738 = state_39307;
(statearr_39341_40738[(1)] = cljs.core.first((state_39307[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40739 = state_39307;
state_39307 = G__40739;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_39307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_39307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39342 = f__39096__auto__();
(statearr_39342[(6)] = c__39095__auto___40722);

return statearr_39342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__39343){
var vec__39344 = p__39343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39344,(1),null);
var job = vec__39344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39095__auto___40740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39351){
var state_val_39352 = (state_39351[(1)]);
if((state_val_39352 === (1))){
var state_39351__$1 = state_39351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39351__$1,(2),res,v);
} else {
if((state_val_39352 === (2))){
var inst_39348 = (state_39351[(2)]);
var inst_39349 = cljs.core.async.close_BANG_(res);
var state_39351__$1 = (function (){var statearr_39353 = state_39351;
(statearr_39353[(7)] = inst_39348);

return statearr_39353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39351__$1,inst_39349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0 = (function (){
var statearr_39354 = [null,null,null,null,null,null,null,null];
(statearr_39354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__);

(statearr_39354[(1)] = (1));

return statearr_39354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1 = (function (state_39351){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39351);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39355){var ex__39062__auto__ = e39355;
var statearr_39356_40741 = state_39351;
(statearr_39356_40741[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39351[(4)]))){
var statearr_39357_40742 = state_39351;
(statearr_39357_40742[(1)] = cljs.core.first((state_39351[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40743 = state_39351;
state_39351 = G__40743;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = function(state_39351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1.call(this,state_39351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39358 = f__39096__auto__();
(statearr_39358[(6)] = c__39095__auto___40740);

return statearr_39358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39359){
var vec__39360 = p__39359;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39360,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39360,(1),null);
var job = vec__39360;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___40744 = n;
var __40745 = (0);
while(true){
if((__40745 < n__5633__auto___40744)){
var G__39363_40746 = type;
var G__39363_40747__$1 = (((G__39363_40746 instanceof cljs.core.Keyword))?G__39363_40746.fqn:null);
switch (G__39363_40747__$1) {
case "compute":
var c__39095__auto___40749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40745,c__39095__auto___40749,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async){
return (function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = ((function (__40745,c__39095__auto___40749,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async){
return (function (state_39376){
var state_val_39377 = (state_39376[(1)]);
if((state_val_39377 === (1))){
var state_39376__$1 = state_39376;
var statearr_39378_40750 = state_39376__$1;
(statearr_39378_40750[(2)] = null);

(statearr_39378_40750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (2))){
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39376__$1,(4),jobs);
} else {
if((state_val_39377 === (3))){
var inst_39374 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39376__$1,inst_39374);
} else {
if((state_val_39377 === (4))){
var inst_39366 = (state_39376[(2)]);
var inst_39367 = process__$1(inst_39366);
var state_39376__$1 = state_39376;
if(cljs.core.truth_(inst_39367)){
var statearr_39379_40751 = state_39376__$1;
(statearr_39379_40751[(1)] = (5));

} else {
var statearr_39380_40752 = state_39376__$1;
(statearr_39380_40752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (5))){
var state_39376__$1 = state_39376;
var statearr_39383_40753 = state_39376__$1;
(statearr_39383_40753[(2)] = null);

(statearr_39383_40753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (6))){
var state_39376__$1 = state_39376;
var statearr_39384_40754 = state_39376__$1;
(statearr_39384_40754[(2)] = null);

(statearr_39384_40754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39377 === (7))){
var inst_39372 = (state_39376[(2)]);
var state_39376__$1 = state_39376;
var statearr_39386_40755 = state_39376__$1;
(statearr_39386_40755[(2)] = inst_39372);

(statearr_39386_40755[(1)] = (3));


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
});})(__40745,c__39095__auto___40749,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async))
;
return ((function (__40745,switch__39058__auto__,c__39095__auto___40749,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0 = (function (){
var statearr_39387 = [null,null,null,null,null,null,null];
(statearr_39387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__);

(statearr_39387[(1)] = (1));

return statearr_39387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1 = (function (state_39376){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39376);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39388){var ex__39062__auto__ = e39388;
var statearr_39389_40756 = state_39376;
(statearr_39389_40756[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39376[(4)]))){
var statearr_39390_40757 = state_39376;
(statearr_39390_40757[(1)] = cljs.core.first((state_39376[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40759 = state_39376;
state_39376 = G__40759;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = function(state_39376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1.call(this,state_39376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__;
})()
;})(__40745,switch__39058__auto__,c__39095__auto___40749,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async))
})();
var state__39097__auto__ = (function (){var statearr_39391 = f__39096__auto__();
(statearr_39391[(6)] = c__39095__auto___40749);

return statearr_39391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
});})(__40745,c__39095__auto___40749,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async))
);


break;
case "async":
var c__39095__auto___40760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40745,c__39095__auto___40760,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async){
return (function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = ((function (__40745,c__39095__auto___40760,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async){
return (function (state_39404){
var state_val_39405 = (state_39404[(1)]);
if((state_val_39405 === (1))){
var state_39404__$1 = state_39404;
var statearr_39406_40761 = state_39404__$1;
(statearr_39406_40761[(2)] = null);

(statearr_39406_40761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (2))){
var state_39404__$1 = state_39404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39404__$1,(4),jobs);
} else {
if((state_val_39405 === (3))){
var inst_39402 = (state_39404[(2)]);
var state_39404__$1 = state_39404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39404__$1,inst_39402);
} else {
if((state_val_39405 === (4))){
var inst_39394 = (state_39404[(2)]);
var inst_39395 = async(inst_39394);
var state_39404__$1 = state_39404;
if(cljs.core.truth_(inst_39395)){
var statearr_39407_40762 = state_39404__$1;
(statearr_39407_40762[(1)] = (5));

} else {
var statearr_39408_40763 = state_39404__$1;
(statearr_39408_40763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (5))){
var state_39404__$1 = state_39404;
var statearr_39409_40764 = state_39404__$1;
(statearr_39409_40764[(2)] = null);

(statearr_39409_40764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (6))){
var state_39404__$1 = state_39404;
var statearr_39410_40765 = state_39404__$1;
(statearr_39410_40765[(2)] = null);

(statearr_39410_40765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39405 === (7))){
var inst_39400 = (state_39404[(2)]);
var state_39404__$1 = state_39404;
var statearr_39411_40766 = state_39404__$1;
(statearr_39411_40766[(2)] = inst_39400);

(statearr_39411_40766[(1)] = (3));


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
});})(__40745,c__39095__auto___40760,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async))
;
return ((function (__40745,switch__39058__auto__,c__39095__auto___40760,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0 = (function (){
var statearr_39412 = [null,null,null,null,null,null,null];
(statearr_39412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__);

(statearr_39412[(1)] = (1));

return statearr_39412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1 = (function (state_39404){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39404);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39413){var ex__39062__auto__ = e39413;
var statearr_39414_40767 = state_39404;
(statearr_39414_40767[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39404[(4)]))){
var statearr_39415_40768 = state_39404;
(statearr_39415_40768[(1)] = cljs.core.first((state_39404[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40769 = state_39404;
state_39404 = G__40769;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = function(state_39404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1.call(this,state_39404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__;
})()
;})(__40745,switch__39058__auto__,c__39095__auto___40760,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async))
})();
var state__39097__auto__ = (function (){var statearr_39416 = f__39096__auto__();
(statearr_39416[(6)] = c__39095__auto___40760);

return statearr_39416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
});})(__40745,c__39095__auto___40760,G__39363_40746,G__39363_40747__$1,n__5633__auto___40744,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39363_40747__$1)].join('')));

}

var G__40770 = (__40745 + (1));
__40745 = G__40770;
continue;
} else {
}
break;
}

var c__39095__auto___40771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39438){
var state_val_39439 = (state_39438[(1)]);
if((state_val_39439 === (7))){
var inst_39434 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
var statearr_39440_40772 = state_39438__$1;
(statearr_39440_40772[(2)] = inst_39434);

(statearr_39440_40772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (1))){
var state_39438__$1 = state_39438;
var statearr_39441_40773 = state_39438__$1;
(statearr_39441_40773[(2)] = null);

(statearr_39441_40773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (4))){
var inst_39419 = (state_39438[(7)]);
var inst_39419__$1 = (state_39438[(2)]);
var inst_39420 = (inst_39419__$1 == null);
var state_39438__$1 = (function (){var statearr_39442 = state_39438;
(statearr_39442[(7)] = inst_39419__$1);

return statearr_39442;
})();
if(cljs.core.truth_(inst_39420)){
var statearr_39443_40774 = state_39438__$1;
(statearr_39443_40774[(1)] = (5));

} else {
var statearr_39444_40775 = state_39438__$1;
(statearr_39444_40775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (6))){
var inst_39419 = (state_39438[(7)]);
var inst_39424 = (state_39438[(8)]);
var inst_39424__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39425 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39426 = [inst_39419,inst_39424__$1];
var inst_39427 = (new cljs.core.PersistentVector(null,2,(5),inst_39425,inst_39426,null));
var state_39438__$1 = (function (){var statearr_39445 = state_39438;
(statearr_39445[(8)] = inst_39424__$1);

return statearr_39445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39438__$1,(8),jobs,inst_39427);
} else {
if((state_val_39439 === (3))){
var inst_39436 = (state_39438[(2)]);
var state_39438__$1 = state_39438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39438__$1,inst_39436);
} else {
if((state_val_39439 === (2))){
var state_39438__$1 = state_39438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39438__$1,(4),from);
} else {
if((state_val_39439 === (9))){
var inst_39431 = (state_39438[(2)]);
var state_39438__$1 = (function (){var statearr_39446 = state_39438;
(statearr_39446[(9)] = inst_39431);

return statearr_39446;
})();
var statearr_39447_40776 = state_39438__$1;
(statearr_39447_40776[(2)] = null);

(statearr_39447_40776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (5))){
var inst_39422 = cljs.core.async.close_BANG_(jobs);
var state_39438__$1 = state_39438;
var statearr_39448_40777 = state_39438__$1;
(statearr_39448_40777[(2)] = inst_39422);

(statearr_39448_40777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39439 === (8))){
var inst_39424 = (state_39438[(8)]);
var inst_39429 = (state_39438[(2)]);
var state_39438__$1 = (function (){var statearr_39449 = state_39438;
(statearr_39449[(10)] = inst_39429);

return statearr_39449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39438__$1,(9),results,inst_39424);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0 = (function (){
var statearr_39450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__);

(statearr_39450[(1)] = (1));

return statearr_39450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1 = (function (state_39438){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39438);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39451){var ex__39062__auto__ = e39451;
var statearr_39452_40778 = state_39438;
(statearr_39452_40778[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39438[(4)]))){
var statearr_39453_40779 = state_39438;
(statearr_39453_40779[(1)] = cljs.core.first((state_39438[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40780 = state_39438;
state_39438 = G__40780;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = function(state_39438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1.call(this,state_39438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39454 = f__39096__auto__();
(statearr_39454[(6)] = c__39095__auto___40771);

return statearr_39454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


var c__39095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39492){
var state_val_39493 = (state_39492[(1)]);
if((state_val_39493 === (7))){
var inst_39488 = (state_39492[(2)]);
var state_39492__$1 = state_39492;
var statearr_39494_40781 = state_39492__$1;
(statearr_39494_40781[(2)] = inst_39488);

(statearr_39494_40781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (20))){
var state_39492__$1 = state_39492;
var statearr_39495_40782 = state_39492__$1;
(statearr_39495_40782[(2)] = null);

(statearr_39495_40782[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (1))){
var state_39492__$1 = state_39492;
var statearr_39496_40783 = state_39492__$1;
(statearr_39496_40783[(2)] = null);

(statearr_39496_40783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (4))){
var inst_39457 = (state_39492[(7)]);
var inst_39457__$1 = (state_39492[(2)]);
var inst_39458 = (inst_39457__$1 == null);
var state_39492__$1 = (function (){var statearr_39497 = state_39492;
(statearr_39497[(7)] = inst_39457__$1);

return statearr_39497;
})();
if(cljs.core.truth_(inst_39458)){
var statearr_39498_40785 = state_39492__$1;
(statearr_39498_40785[(1)] = (5));

} else {
var statearr_39499_40786 = state_39492__$1;
(statearr_39499_40786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (15))){
var inst_39470 = (state_39492[(8)]);
var state_39492__$1 = state_39492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39492__$1,(18),to,inst_39470);
} else {
if((state_val_39493 === (21))){
var inst_39483 = (state_39492[(2)]);
var state_39492__$1 = state_39492;
var statearr_39500_40787 = state_39492__$1;
(statearr_39500_40787[(2)] = inst_39483);

(statearr_39500_40787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (13))){
var inst_39485 = (state_39492[(2)]);
var state_39492__$1 = (function (){var statearr_39501 = state_39492;
(statearr_39501[(9)] = inst_39485);

return statearr_39501;
})();
var statearr_39502_40788 = state_39492__$1;
(statearr_39502_40788[(2)] = null);

(statearr_39502_40788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (6))){
var inst_39457 = (state_39492[(7)]);
var state_39492__$1 = state_39492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39492__$1,(11),inst_39457);
} else {
if((state_val_39493 === (17))){
var inst_39478 = (state_39492[(2)]);
var state_39492__$1 = state_39492;
if(cljs.core.truth_(inst_39478)){
var statearr_39503_40790 = state_39492__$1;
(statearr_39503_40790[(1)] = (19));

} else {
var statearr_39504_40791 = state_39492__$1;
(statearr_39504_40791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (3))){
var inst_39490 = (state_39492[(2)]);
var state_39492__$1 = state_39492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39492__$1,inst_39490);
} else {
if((state_val_39493 === (12))){
var inst_39467 = (state_39492[(10)]);
var state_39492__$1 = state_39492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39492__$1,(14),inst_39467);
} else {
if((state_val_39493 === (2))){
var state_39492__$1 = state_39492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39492__$1,(4),results);
} else {
if((state_val_39493 === (19))){
var state_39492__$1 = state_39492;
var statearr_39505_40792 = state_39492__$1;
(statearr_39505_40792[(2)] = null);

(statearr_39505_40792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (11))){
var inst_39467 = (state_39492[(2)]);
var state_39492__$1 = (function (){var statearr_39506 = state_39492;
(statearr_39506[(10)] = inst_39467);

return statearr_39506;
})();
var statearr_39507_40793 = state_39492__$1;
(statearr_39507_40793[(2)] = null);

(statearr_39507_40793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (9))){
var state_39492__$1 = state_39492;
var statearr_39508_40794 = state_39492__$1;
(statearr_39508_40794[(2)] = null);

(statearr_39508_40794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (5))){
var state_39492__$1 = state_39492;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39509_40795 = state_39492__$1;
(statearr_39509_40795[(1)] = (8));

} else {
var statearr_39510_40796 = state_39492__$1;
(statearr_39510_40796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (14))){
var inst_39470 = (state_39492[(8)]);
var inst_39472 = (state_39492[(11)]);
var inst_39470__$1 = (state_39492[(2)]);
var inst_39471 = (inst_39470__$1 == null);
var inst_39472__$1 = cljs.core.not(inst_39471);
var state_39492__$1 = (function (){var statearr_39511 = state_39492;
(statearr_39511[(8)] = inst_39470__$1);

(statearr_39511[(11)] = inst_39472__$1);

return statearr_39511;
})();
if(inst_39472__$1){
var statearr_39512_40799 = state_39492__$1;
(statearr_39512_40799[(1)] = (15));

} else {
var statearr_39513_40800 = state_39492__$1;
(statearr_39513_40800[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (16))){
var inst_39472 = (state_39492[(11)]);
var state_39492__$1 = state_39492;
var statearr_39514_40801 = state_39492__$1;
(statearr_39514_40801[(2)] = inst_39472);

(statearr_39514_40801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (10))){
var inst_39464 = (state_39492[(2)]);
var state_39492__$1 = state_39492;
var statearr_39515_40802 = state_39492__$1;
(statearr_39515_40802[(2)] = inst_39464);

(statearr_39515_40802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (18))){
var inst_39475 = (state_39492[(2)]);
var state_39492__$1 = state_39492;
var statearr_39516_40803 = state_39492__$1;
(statearr_39516_40803[(2)] = inst_39475);

(statearr_39516_40803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39493 === (8))){
var inst_39461 = cljs.core.async.close_BANG_(to);
var state_39492__$1 = state_39492;
var statearr_39517_40804 = state_39492__$1;
(statearr_39517_40804[(2)] = inst_39461);

(statearr_39517_40804[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0 = (function (){
var statearr_39518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__);

(statearr_39518[(1)] = (1));

return statearr_39518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1 = (function (state_39492){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39492);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39519){var ex__39062__auto__ = e39519;
var statearr_39520_40805 = state_39492;
(statearr_39520_40805[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39492[(4)]))){
var statearr_39521_40806 = state_39492;
(statearr_39521_40806[(1)] = cljs.core.first((state_39492[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40809 = state_39492;
state_39492 = G__40809;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__ = function(state_39492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1.call(this,state_39492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39522 = f__39096__auto__();
(statearr_39522[(6)] = c__39095__auto__);

return statearr_39522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

return c__39095__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39524 = arguments.length;
switch (G__39524) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__39526 = arguments.length;
switch (G__39526) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__39528 = arguments.length;
switch (G__39528) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__39095__auto___40817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39554){
var state_val_39555 = (state_39554[(1)]);
if((state_val_39555 === (7))){
var inst_39550 = (state_39554[(2)]);
var state_39554__$1 = state_39554;
var statearr_39556_40818 = state_39554__$1;
(statearr_39556_40818[(2)] = inst_39550);

(statearr_39556_40818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (1))){
var state_39554__$1 = state_39554;
var statearr_39557_40819 = state_39554__$1;
(statearr_39557_40819[(2)] = null);

(statearr_39557_40819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (4))){
var inst_39531 = (state_39554[(7)]);
var inst_39531__$1 = (state_39554[(2)]);
var inst_39532 = (inst_39531__$1 == null);
var state_39554__$1 = (function (){var statearr_39558 = state_39554;
(statearr_39558[(7)] = inst_39531__$1);

return statearr_39558;
})();
if(cljs.core.truth_(inst_39532)){
var statearr_39559_40820 = state_39554__$1;
(statearr_39559_40820[(1)] = (5));

} else {
var statearr_39560_40821 = state_39554__$1;
(statearr_39560_40821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (13))){
var state_39554__$1 = state_39554;
var statearr_39561_40822 = state_39554__$1;
(statearr_39561_40822[(2)] = null);

(statearr_39561_40822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (6))){
var inst_39531 = (state_39554[(7)]);
var inst_39537 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39531) : p.call(null,inst_39531));
var state_39554__$1 = state_39554;
if(cljs.core.truth_(inst_39537)){
var statearr_39562_40827 = state_39554__$1;
(statearr_39562_40827[(1)] = (9));

} else {
var statearr_39563_40828 = state_39554__$1;
(statearr_39563_40828[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (3))){
var inst_39552 = (state_39554[(2)]);
var state_39554__$1 = state_39554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39554__$1,inst_39552);
} else {
if((state_val_39555 === (12))){
var state_39554__$1 = state_39554;
var statearr_39564_40829 = state_39554__$1;
(statearr_39564_40829[(2)] = null);

(statearr_39564_40829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (2))){
var state_39554__$1 = state_39554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39554__$1,(4),ch);
} else {
if((state_val_39555 === (11))){
var inst_39531 = (state_39554[(7)]);
var inst_39541 = (state_39554[(2)]);
var state_39554__$1 = state_39554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39554__$1,(8),inst_39541,inst_39531);
} else {
if((state_val_39555 === (9))){
var state_39554__$1 = state_39554;
var statearr_39566_40830 = state_39554__$1;
(statearr_39566_40830[(2)] = tc);

(statearr_39566_40830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (5))){
var inst_39534 = cljs.core.async.close_BANG_(tc);
var inst_39535 = cljs.core.async.close_BANG_(fc);
var state_39554__$1 = (function (){var statearr_39567 = state_39554;
(statearr_39567[(8)] = inst_39534);

return statearr_39567;
})();
var statearr_39568_40831 = state_39554__$1;
(statearr_39568_40831[(2)] = inst_39535);

(statearr_39568_40831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (14))){
var inst_39548 = (state_39554[(2)]);
var state_39554__$1 = state_39554;
var statearr_39569_40832 = state_39554__$1;
(statearr_39569_40832[(2)] = inst_39548);

(statearr_39569_40832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (10))){
var state_39554__$1 = state_39554;
var statearr_39570_40833 = state_39554__$1;
(statearr_39570_40833[(2)] = fc);

(statearr_39570_40833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39555 === (8))){
var inst_39543 = (state_39554[(2)]);
var state_39554__$1 = state_39554;
if(cljs.core.truth_(inst_39543)){
var statearr_39571_40834 = state_39554__$1;
(statearr_39571_40834[(1)] = (12));

} else {
var statearr_39572_40835 = state_39554__$1;
(statearr_39572_40835[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_39575 = [null,null,null,null,null,null,null,null,null];
(statearr_39575[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_39575[(1)] = (1));

return statearr_39575;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_39554){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39554);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39576){var ex__39062__auto__ = e39576;
var statearr_39577_40836 = state_39554;
(statearr_39577_40836[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39554[(4)]))){
var statearr_39578_40841 = state_39554;
(statearr_39578_40841[(1)] = cljs.core.first((state_39554[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40842 = state_39554;
state_39554 = G__40842;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_39554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_39554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39579 = f__39096__auto__();
(statearr_39579[(6)] = c__39095__auto___40817);

return statearr_39579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39604){
var state_val_39605 = (state_39604[(1)]);
if((state_val_39605 === (7))){
var inst_39600 = (state_39604[(2)]);
var state_39604__$1 = state_39604;
var statearr_39609_40843 = state_39604__$1;
(statearr_39609_40843[(2)] = inst_39600);

(statearr_39609_40843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (1))){
var inst_39581 = init;
var inst_39582 = inst_39581;
var state_39604__$1 = (function (){var statearr_39612 = state_39604;
(statearr_39612[(7)] = inst_39582);

return statearr_39612;
})();
var statearr_39614_40844 = state_39604__$1;
(statearr_39614_40844[(2)] = null);

(statearr_39614_40844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (4))){
var inst_39587 = (state_39604[(8)]);
var inst_39587__$1 = (state_39604[(2)]);
var inst_39588 = (inst_39587__$1 == null);
var state_39604__$1 = (function (){var statearr_39615 = state_39604;
(statearr_39615[(8)] = inst_39587__$1);

return statearr_39615;
})();
if(cljs.core.truth_(inst_39588)){
var statearr_39616_40845 = state_39604__$1;
(statearr_39616_40845[(1)] = (5));

} else {
var statearr_39617_40846 = state_39604__$1;
(statearr_39617_40846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (6))){
var inst_39591 = (state_39604[(9)]);
var inst_39587 = (state_39604[(8)]);
var inst_39582 = (state_39604[(7)]);
var inst_39591__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39582,inst_39587) : f.call(null,inst_39582,inst_39587));
var inst_39592 = cljs.core.reduced_QMARK_(inst_39591__$1);
var state_39604__$1 = (function (){var statearr_39621 = state_39604;
(statearr_39621[(9)] = inst_39591__$1);

return statearr_39621;
})();
if(inst_39592){
var statearr_39622_40847 = state_39604__$1;
(statearr_39622_40847[(1)] = (8));

} else {
var statearr_39623_40848 = state_39604__$1;
(statearr_39623_40848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (3))){
var inst_39602 = (state_39604[(2)]);
var state_39604__$1 = state_39604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39604__$1,inst_39602);
} else {
if((state_val_39605 === (2))){
var state_39604__$1 = state_39604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39604__$1,(4),ch);
} else {
if((state_val_39605 === (9))){
var inst_39591 = (state_39604[(9)]);
var inst_39582 = inst_39591;
var state_39604__$1 = (function (){var statearr_39624 = state_39604;
(statearr_39624[(7)] = inst_39582);

return statearr_39624;
})();
var statearr_39625_40849 = state_39604__$1;
(statearr_39625_40849[(2)] = null);

(statearr_39625_40849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (5))){
var inst_39582 = (state_39604[(7)]);
var state_39604__$1 = state_39604;
var statearr_39626_40850 = state_39604__$1;
(statearr_39626_40850[(2)] = inst_39582);

(statearr_39626_40850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (10))){
var inst_39598 = (state_39604[(2)]);
var state_39604__$1 = state_39604;
var statearr_39627_40851 = state_39604__$1;
(statearr_39627_40851[(2)] = inst_39598);

(statearr_39627_40851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (8))){
var inst_39591 = (state_39604[(9)]);
var inst_39594 = cljs.core.deref(inst_39591);
var state_39604__$1 = state_39604;
var statearr_39628_40852 = state_39604__$1;
(statearr_39628_40852[(2)] = inst_39594);

(statearr_39628_40852[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39059__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39059__auto____0 = (function (){
var statearr_39629 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39629[(0)] = cljs$core$async$reduce_$_state_machine__39059__auto__);

(statearr_39629[(1)] = (1));

return statearr_39629;
});
var cljs$core$async$reduce_$_state_machine__39059__auto____1 = (function (state_39604){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39604);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39630){var ex__39062__auto__ = e39630;
var statearr_39631_40853 = state_39604;
(statearr_39631_40853[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39604[(4)]))){
var statearr_39632_40854 = state_39604;
(statearr_39632_40854[(1)] = cljs.core.first((state_39604[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40855 = state_39604;
state_39604 = G__40855;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39059__auto__ = function(state_39604){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39059__auto____1.call(this,state_39604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39059__auto____0;
cljs$core$async$reduce_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39059__auto____1;
return cljs$core$async$reduce_$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39633 = f__39096__auto__();
(statearr_39633[(6)] = c__39095__auto__);

return statearr_39633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

return c__39095__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__39095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39639){
var state_val_39640 = (state_39639[(1)]);
if((state_val_39640 === (1))){
var inst_39634 = cljs.core.async.reduce(f__$1,init,ch);
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39639__$1,(2),inst_39634);
} else {
if((state_val_39640 === (2))){
var inst_39636 = (state_39639[(2)]);
var inst_39637 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39636) : f__$1.call(null,inst_39636));
var state_39639__$1 = state_39639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39639__$1,inst_39637);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39059__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39059__auto____0 = (function (){
var statearr_39641 = [null,null,null,null,null,null,null];
(statearr_39641[(0)] = cljs$core$async$transduce_$_state_machine__39059__auto__);

(statearr_39641[(1)] = (1));

return statearr_39641;
});
var cljs$core$async$transduce_$_state_machine__39059__auto____1 = (function (state_39639){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39639);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39642){var ex__39062__auto__ = e39642;
var statearr_39643_40857 = state_39639;
(statearr_39643_40857[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39639[(4)]))){
var statearr_39644_40858 = state_39639;
(statearr_39644_40858[(1)] = cljs.core.first((state_39639[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40859 = state_39639;
state_39639 = G__40859;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39059__auto__ = function(state_39639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39059__auto____1.call(this,state_39639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39059__auto____0;
cljs$core$async$transduce_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39059__auto____1;
return cljs$core$async$transduce_$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39645 = f__39096__auto__();
(statearr_39645[(6)] = c__39095__auto__);

return statearr_39645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

return c__39095__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39647 = arguments.length;
switch (G__39647) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39672){
var state_val_39673 = (state_39672[(1)]);
if((state_val_39673 === (7))){
var inst_39654 = (state_39672[(2)]);
var state_39672__$1 = state_39672;
var statearr_39674_40861 = state_39672__$1;
(statearr_39674_40861[(2)] = inst_39654);

(statearr_39674_40861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (1))){
var inst_39648 = cljs.core.seq(coll);
var inst_39649 = inst_39648;
var state_39672__$1 = (function (){var statearr_39675 = state_39672;
(statearr_39675[(7)] = inst_39649);

return statearr_39675;
})();
var statearr_39676_40862 = state_39672__$1;
(statearr_39676_40862[(2)] = null);

(statearr_39676_40862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (4))){
var inst_39649 = (state_39672[(7)]);
var inst_39652 = cljs.core.first(inst_39649);
var state_39672__$1 = state_39672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39672__$1,(7),ch,inst_39652);
} else {
if((state_val_39673 === (13))){
var inst_39666 = (state_39672[(2)]);
var state_39672__$1 = state_39672;
var statearr_39677_40863 = state_39672__$1;
(statearr_39677_40863[(2)] = inst_39666);

(statearr_39677_40863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (6))){
var inst_39657 = (state_39672[(2)]);
var state_39672__$1 = state_39672;
if(cljs.core.truth_(inst_39657)){
var statearr_39678_40864 = state_39672__$1;
(statearr_39678_40864[(1)] = (8));

} else {
var statearr_39679_40865 = state_39672__$1;
(statearr_39679_40865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (3))){
var inst_39670 = (state_39672[(2)]);
var state_39672__$1 = state_39672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39672__$1,inst_39670);
} else {
if((state_val_39673 === (12))){
var state_39672__$1 = state_39672;
var statearr_39680_40866 = state_39672__$1;
(statearr_39680_40866[(2)] = null);

(statearr_39680_40866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (2))){
var inst_39649 = (state_39672[(7)]);
var state_39672__$1 = state_39672;
if(cljs.core.truth_(inst_39649)){
var statearr_39681_40867 = state_39672__$1;
(statearr_39681_40867[(1)] = (4));

} else {
var statearr_39682_40868 = state_39672__$1;
(statearr_39682_40868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (11))){
var inst_39663 = cljs.core.async.close_BANG_(ch);
var state_39672__$1 = state_39672;
var statearr_39683_40869 = state_39672__$1;
(statearr_39683_40869[(2)] = inst_39663);

(statearr_39683_40869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (9))){
var state_39672__$1 = state_39672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39684_40870 = state_39672__$1;
(statearr_39684_40870[(1)] = (11));

} else {
var statearr_39685_40871 = state_39672__$1;
(statearr_39685_40871[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (5))){
var inst_39649 = (state_39672[(7)]);
var state_39672__$1 = state_39672;
var statearr_39686_40872 = state_39672__$1;
(statearr_39686_40872[(2)] = inst_39649);

(statearr_39686_40872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (10))){
var inst_39668 = (state_39672[(2)]);
var state_39672__$1 = state_39672;
var statearr_39687_40873 = state_39672__$1;
(statearr_39687_40873[(2)] = inst_39668);

(statearr_39687_40873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39673 === (8))){
var inst_39649 = (state_39672[(7)]);
var inst_39659 = cljs.core.next(inst_39649);
var inst_39649__$1 = inst_39659;
var state_39672__$1 = (function (){var statearr_39688 = state_39672;
(statearr_39688[(7)] = inst_39649__$1);

return statearr_39688;
})();
var statearr_39689_40874 = state_39672__$1;
(statearr_39689_40874[(2)] = null);

(statearr_39689_40874[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_39690 = [null,null,null,null,null,null,null,null];
(statearr_39690[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_39690[(1)] = (1));

return statearr_39690;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_39672){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39672);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39691){var ex__39062__auto__ = e39691;
var statearr_39692_40875 = state_39672;
(statearr_39692_40875[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39672[(4)]))){
var statearr_39693_40876 = state_39672;
(statearr_39693_40876[(1)] = cljs.core.first((state_39672[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40877 = state_39672;
state_39672 = G__40877;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_39672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_39672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39694 = f__39096__auto__();
(statearr_39694[(6)] = c__39095__auto__);

return statearr_39694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

return c__39095__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39696 = arguments.length;
switch (G__39696) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_40879 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40879(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40881 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40881(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40883 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40883(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40886 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40886(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39697 = (function (ch,cs,meta39698){
this.ch = ch;
this.cs = cs;
this.meta39698 = meta39698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39699,meta39698__$1){
var self__ = this;
var _39699__$1 = this;
return (new cljs.core.async.t_cljs$core$async39697(self__.ch,self__.cs,meta39698__$1));
}));

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39699){
var self__ = this;
var _39699__$1 = this;
return self__.meta39698;
}));

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39698","meta39698",480910629,null)], null);
}));

(cljs.core.async.t_cljs$core$async39697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39697");

(cljs.core.async.t_cljs$core$async39697.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39697.
 */
cljs.core.async.__GT_t_cljs$core$async39697 = (function cljs$core$async$mult_$___GT_t_cljs$core$async39697(ch__$1,cs__$1,meta39698){
return (new cljs.core.async.t_cljs$core$async39697(ch__$1,cs__$1,meta39698));
});

}

return (new cljs.core.async.t_cljs$core$async39697(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__39095__auto___40888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39832){
var state_val_39833 = (state_39832[(1)]);
if((state_val_39833 === (7))){
var inst_39828 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39834_40890 = state_39832__$1;
(statearr_39834_40890[(2)] = inst_39828);

(statearr_39834_40890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (20))){
var inst_39733 = (state_39832[(7)]);
var inst_39745 = cljs.core.first(inst_39733);
var inst_39746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39745,(0),null);
var inst_39747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39745,(1),null);
var state_39832__$1 = (function (){var statearr_39835 = state_39832;
(statearr_39835[(8)] = inst_39746);

return statearr_39835;
})();
if(cljs.core.truth_(inst_39747)){
var statearr_39836_40892 = state_39832__$1;
(statearr_39836_40892[(1)] = (22));

} else {
var statearr_39837_40893 = state_39832__$1;
(statearr_39837_40893[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (27))){
var inst_39775 = (state_39832[(9)]);
var inst_39782 = (state_39832[(10)]);
var inst_39702 = (state_39832[(11)]);
var inst_39777 = (state_39832[(12)]);
var inst_39782__$1 = cljs.core._nth(inst_39775,inst_39777);
var inst_39783 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39782__$1,inst_39702,done);
var state_39832__$1 = (function (){var statearr_39838 = state_39832;
(statearr_39838[(10)] = inst_39782__$1);

return statearr_39838;
})();
if(cljs.core.truth_(inst_39783)){
var statearr_39839_40894 = state_39832__$1;
(statearr_39839_40894[(1)] = (30));

} else {
var statearr_39840_40895 = state_39832__$1;
(statearr_39840_40895[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (1))){
var state_39832__$1 = state_39832;
var statearr_39841_40896 = state_39832__$1;
(statearr_39841_40896[(2)] = null);

(statearr_39841_40896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (24))){
var inst_39733 = (state_39832[(7)]);
var inst_39752 = (state_39832[(2)]);
var inst_39753 = cljs.core.next(inst_39733);
var inst_39711 = inst_39753;
var inst_39712 = null;
var inst_39713 = (0);
var inst_39714 = (0);
var state_39832__$1 = (function (){var statearr_39842 = state_39832;
(statearr_39842[(13)] = inst_39752);

(statearr_39842[(14)] = inst_39711);

(statearr_39842[(15)] = inst_39714);

(statearr_39842[(16)] = inst_39713);

(statearr_39842[(17)] = inst_39712);

return statearr_39842;
})();
var statearr_39843_40897 = state_39832__$1;
(statearr_39843_40897[(2)] = null);

(statearr_39843_40897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (39))){
var state_39832__$1 = state_39832;
var statearr_39847_40898 = state_39832__$1;
(statearr_39847_40898[(2)] = null);

(statearr_39847_40898[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (4))){
var inst_39702 = (state_39832[(11)]);
var inst_39702__$1 = (state_39832[(2)]);
var inst_39703 = (inst_39702__$1 == null);
var state_39832__$1 = (function (){var statearr_39848 = state_39832;
(statearr_39848[(11)] = inst_39702__$1);

return statearr_39848;
})();
if(cljs.core.truth_(inst_39703)){
var statearr_39849_40899 = state_39832__$1;
(statearr_39849_40899[(1)] = (5));

} else {
var statearr_39850_40900 = state_39832__$1;
(statearr_39850_40900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (15))){
var inst_39711 = (state_39832[(14)]);
var inst_39714 = (state_39832[(15)]);
var inst_39713 = (state_39832[(16)]);
var inst_39712 = (state_39832[(17)]);
var inst_39729 = (state_39832[(2)]);
var inst_39730 = (inst_39714 + (1));
var tmp39844 = inst_39711;
var tmp39845 = inst_39713;
var tmp39846 = inst_39712;
var inst_39711__$1 = tmp39844;
var inst_39712__$1 = tmp39846;
var inst_39713__$1 = tmp39845;
var inst_39714__$1 = inst_39730;
var state_39832__$1 = (function (){var statearr_39851 = state_39832;
(statearr_39851[(14)] = inst_39711__$1);

(statearr_39851[(15)] = inst_39714__$1);

(statearr_39851[(16)] = inst_39713__$1);

(statearr_39851[(17)] = inst_39712__$1);

(statearr_39851[(18)] = inst_39729);

return statearr_39851;
})();
var statearr_39852_40906 = state_39832__$1;
(statearr_39852_40906[(2)] = null);

(statearr_39852_40906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (21))){
var inst_39756 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39856_40907 = state_39832__$1;
(statearr_39856_40907[(2)] = inst_39756);

(statearr_39856_40907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (31))){
var inst_39782 = (state_39832[(10)]);
var inst_39786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39782);
var state_39832__$1 = state_39832;
var statearr_39857_40908 = state_39832__$1;
(statearr_39857_40908[(2)] = inst_39786);

(statearr_39857_40908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (32))){
var inst_39774 = (state_39832[(19)]);
var inst_39776 = (state_39832[(20)]);
var inst_39775 = (state_39832[(9)]);
var inst_39777 = (state_39832[(12)]);
var inst_39788 = (state_39832[(2)]);
var inst_39789 = (inst_39777 + (1));
var tmp39853 = inst_39774;
var tmp39854 = inst_39776;
var tmp39855 = inst_39775;
var inst_39774__$1 = tmp39853;
var inst_39775__$1 = tmp39855;
var inst_39776__$1 = tmp39854;
var inst_39777__$1 = inst_39789;
var state_39832__$1 = (function (){var statearr_39858 = state_39832;
(statearr_39858[(19)] = inst_39774__$1);

(statearr_39858[(21)] = inst_39788);

(statearr_39858[(20)] = inst_39776__$1);

(statearr_39858[(9)] = inst_39775__$1);

(statearr_39858[(12)] = inst_39777__$1);

return statearr_39858;
})();
var statearr_39859_40909 = state_39832__$1;
(statearr_39859_40909[(2)] = null);

(statearr_39859_40909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (40))){
var inst_39801 = (state_39832[(22)]);
var inst_39805 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39801);
var state_39832__$1 = state_39832;
var statearr_39860_40910 = state_39832__$1;
(statearr_39860_40910[(2)] = inst_39805);

(statearr_39860_40910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (33))){
var inst_39792 = (state_39832[(23)]);
var inst_39794 = cljs.core.chunked_seq_QMARK_(inst_39792);
var state_39832__$1 = state_39832;
if(inst_39794){
var statearr_39861_40911 = state_39832__$1;
(statearr_39861_40911[(1)] = (36));

} else {
var statearr_39862_40912 = state_39832__$1;
(statearr_39862_40912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (13))){
var inst_39723 = (state_39832[(24)]);
var inst_39726 = cljs.core.async.close_BANG_(inst_39723);
var state_39832__$1 = state_39832;
var statearr_39863_40913 = state_39832__$1;
(statearr_39863_40913[(2)] = inst_39726);

(statearr_39863_40913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (22))){
var inst_39746 = (state_39832[(8)]);
var inst_39749 = cljs.core.async.close_BANG_(inst_39746);
var state_39832__$1 = state_39832;
var statearr_39864_40914 = state_39832__$1;
(statearr_39864_40914[(2)] = inst_39749);

(statearr_39864_40914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (36))){
var inst_39792 = (state_39832[(23)]);
var inst_39796 = cljs.core.chunk_first(inst_39792);
var inst_39797 = cljs.core.chunk_rest(inst_39792);
var inst_39798 = cljs.core.count(inst_39796);
var inst_39774 = inst_39797;
var inst_39775 = inst_39796;
var inst_39776 = inst_39798;
var inst_39777 = (0);
var state_39832__$1 = (function (){var statearr_39865 = state_39832;
(statearr_39865[(19)] = inst_39774);

(statearr_39865[(20)] = inst_39776);

(statearr_39865[(9)] = inst_39775);

(statearr_39865[(12)] = inst_39777);

return statearr_39865;
})();
var statearr_39866_40915 = state_39832__$1;
(statearr_39866_40915[(2)] = null);

(statearr_39866_40915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (41))){
var inst_39792 = (state_39832[(23)]);
var inst_39807 = (state_39832[(2)]);
var inst_39808 = cljs.core.next(inst_39792);
var inst_39774 = inst_39808;
var inst_39775 = null;
var inst_39776 = (0);
var inst_39777 = (0);
var state_39832__$1 = (function (){var statearr_39867 = state_39832;
(statearr_39867[(19)] = inst_39774);

(statearr_39867[(20)] = inst_39776);

(statearr_39867[(9)] = inst_39775);

(statearr_39867[(25)] = inst_39807);

(statearr_39867[(12)] = inst_39777);

return statearr_39867;
})();
var statearr_39868_40916 = state_39832__$1;
(statearr_39868_40916[(2)] = null);

(statearr_39868_40916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (43))){
var state_39832__$1 = state_39832;
var statearr_39869_40917 = state_39832__$1;
(statearr_39869_40917[(2)] = null);

(statearr_39869_40917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (29))){
var inst_39816 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39870_40918 = state_39832__$1;
(statearr_39870_40918[(2)] = inst_39816);

(statearr_39870_40918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (44))){
var inst_39825 = (state_39832[(2)]);
var state_39832__$1 = (function (){var statearr_39871 = state_39832;
(statearr_39871[(26)] = inst_39825);

return statearr_39871;
})();
var statearr_39872_40919 = state_39832__$1;
(statearr_39872_40919[(2)] = null);

(statearr_39872_40919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (6))){
var inst_39766 = (state_39832[(27)]);
var inst_39765 = cljs.core.deref(cs);
var inst_39766__$1 = cljs.core.keys(inst_39765);
var inst_39767 = cljs.core.count(inst_39766__$1);
var inst_39768 = cljs.core.reset_BANG_(dctr,inst_39767);
var inst_39773 = cljs.core.seq(inst_39766__$1);
var inst_39774 = inst_39773;
var inst_39775 = null;
var inst_39776 = (0);
var inst_39777 = (0);
var state_39832__$1 = (function (){var statearr_39873 = state_39832;
(statearr_39873[(19)] = inst_39774);

(statearr_39873[(20)] = inst_39776);

(statearr_39873[(9)] = inst_39775);

(statearr_39873[(27)] = inst_39766__$1);

(statearr_39873[(12)] = inst_39777);

(statearr_39873[(28)] = inst_39768);

return statearr_39873;
})();
var statearr_39874_40920 = state_39832__$1;
(statearr_39874_40920[(2)] = null);

(statearr_39874_40920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (28))){
var inst_39774 = (state_39832[(19)]);
var inst_39792 = (state_39832[(23)]);
var inst_39792__$1 = cljs.core.seq(inst_39774);
var state_39832__$1 = (function (){var statearr_39875 = state_39832;
(statearr_39875[(23)] = inst_39792__$1);

return statearr_39875;
})();
if(inst_39792__$1){
var statearr_39876_40921 = state_39832__$1;
(statearr_39876_40921[(1)] = (33));

} else {
var statearr_39877_40922 = state_39832__$1;
(statearr_39877_40922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (25))){
var inst_39776 = (state_39832[(20)]);
var inst_39777 = (state_39832[(12)]);
var inst_39779 = (inst_39777 < inst_39776);
var inst_39780 = inst_39779;
var state_39832__$1 = state_39832;
if(cljs.core.truth_(inst_39780)){
var statearr_39878_40923 = state_39832__$1;
(statearr_39878_40923[(1)] = (27));

} else {
var statearr_39879_40924 = state_39832__$1;
(statearr_39879_40924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (34))){
var state_39832__$1 = state_39832;
var statearr_39880_40926 = state_39832__$1;
(statearr_39880_40926[(2)] = null);

(statearr_39880_40926[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (17))){
var state_39832__$1 = state_39832;
var statearr_39881_40930 = state_39832__$1;
(statearr_39881_40930[(2)] = null);

(statearr_39881_40930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (3))){
var inst_39830 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39832__$1,inst_39830);
} else {
if((state_val_39833 === (12))){
var inst_39761 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39882_40932 = state_39832__$1;
(statearr_39882_40932[(2)] = inst_39761);

(statearr_39882_40932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (2))){
var state_39832__$1 = state_39832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39832__$1,(4),ch);
} else {
if((state_val_39833 === (23))){
var state_39832__$1 = state_39832;
var statearr_39883_40933 = state_39832__$1;
(statearr_39883_40933[(2)] = null);

(statearr_39883_40933[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (35))){
var inst_39814 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39884_40934 = state_39832__$1;
(statearr_39884_40934[(2)] = inst_39814);

(statearr_39884_40934[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (19))){
var inst_39733 = (state_39832[(7)]);
var inst_39737 = cljs.core.chunk_first(inst_39733);
var inst_39738 = cljs.core.chunk_rest(inst_39733);
var inst_39739 = cljs.core.count(inst_39737);
var inst_39711 = inst_39738;
var inst_39712 = inst_39737;
var inst_39713 = inst_39739;
var inst_39714 = (0);
var state_39832__$1 = (function (){var statearr_39885 = state_39832;
(statearr_39885[(14)] = inst_39711);

(statearr_39885[(15)] = inst_39714);

(statearr_39885[(16)] = inst_39713);

(statearr_39885[(17)] = inst_39712);

return statearr_39885;
})();
var statearr_39886_40935 = state_39832__$1;
(statearr_39886_40935[(2)] = null);

(statearr_39886_40935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (11))){
var inst_39711 = (state_39832[(14)]);
var inst_39733 = (state_39832[(7)]);
var inst_39733__$1 = cljs.core.seq(inst_39711);
var state_39832__$1 = (function (){var statearr_39887 = state_39832;
(statearr_39887[(7)] = inst_39733__$1);

return statearr_39887;
})();
if(inst_39733__$1){
var statearr_39888_40939 = state_39832__$1;
(statearr_39888_40939[(1)] = (16));

} else {
var statearr_39889_40940 = state_39832__$1;
(statearr_39889_40940[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (9))){
var inst_39763 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39890_40942 = state_39832__$1;
(statearr_39890_40942[(2)] = inst_39763);

(statearr_39890_40942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (5))){
var inst_39709 = cljs.core.deref(cs);
var inst_39710 = cljs.core.seq(inst_39709);
var inst_39711 = inst_39710;
var inst_39712 = null;
var inst_39713 = (0);
var inst_39714 = (0);
var state_39832__$1 = (function (){var statearr_39891 = state_39832;
(statearr_39891[(14)] = inst_39711);

(statearr_39891[(15)] = inst_39714);

(statearr_39891[(16)] = inst_39713);

(statearr_39891[(17)] = inst_39712);

return statearr_39891;
})();
var statearr_39892_40943 = state_39832__$1;
(statearr_39892_40943[(2)] = null);

(statearr_39892_40943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (14))){
var state_39832__$1 = state_39832;
var statearr_39893_40944 = state_39832__$1;
(statearr_39893_40944[(2)] = null);

(statearr_39893_40944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (45))){
var inst_39822 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39894_40945 = state_39832__$1;
(statearr_39894_40945[(2)] = inst_39822);

(statearr_39894_40945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (26))){
var inst_39766 = (state_39832[(27)]);
var inst_39818 = (state_39832[(2)]);
var inst_39819 = cljs.core.seq(inst_39766);
var state_39832__$1 = (function (){var statearr_39895 = state_39832;
(statearr_39895[(29)] = inst_39818);

return statearr_39895;
})();
if(inst_39819){
var statearr_39896_40946 = state_39832__$1;
(statearr_39896_40946[(1)] = (42));

} else {
var statearr_39897_40947 = state_39832__$1;
(statearr_39897_40947[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (16))){
var inst_39733 = (state_39832[(7)]);
var inst_39735 = cljs.core.chunked_seq_QMARK_(inst_39733);
var state_39832__$1 = state_39832;
if(inst_39735){
var statearr_39898_40948 = state_39832__$1;
(statearr_39898_40948[(1)] = (19));

} else {
var statearr_39899_40949 = state_39832__$1;
(statearr_39899_40949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (38))){
var inst_39811 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39900_40950 = state_39832__$1;
(statearr_39900_40950[(2)] = inst_39811);

(statearr_39900_40950[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (30))){
var state_39832__$1 = state_39832;
var statearr_39901_40951 = state_39832__$1;
(statearr_39901_40951[(2)] = null);

(statearr_39901_40951[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (10))){
var inst_39714 = (state_39832[(15)]);
var inst_39712 = (state_39832[(17)]);
var inst_39722 = cljs.core._nth(inst_39712,inst_39714);
var inst_39723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39722,(0),null);
var inst_39724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39722,(1),null);
var state_39832__$1 = (function (){var statearr_39902 = state_39832;
(statearr_39902[(24)] = inst_39723);

return statearr_39902;
})();
if(cljs.core.truth_(inst_39724)){
var statearr_39903_40952 = state_39832__$1;
(statearr_39903_40952[(1)] = (13));

} else {
var statearr_39904_40953 = state_39832__$1;
(statearr_39904_40953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (18))){
var inst_39759 = (state_39832[(2)]);
var state_39832__$1 = state_39832;
var statearr_39905_40954 = state_39832__$1;
(statearr_39905_40954[(2)] = inst_39759);

(statearr_39905_40954[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (42))){
var state_39832__$1 = state_39832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39832__$1,(45),dchan);
} else {
if((state_val_39833 === (37))){
var inst_39792 = (state_39832[(23)]);
var inst_39702 = (state_39832[(11)]);
var inst_39801 = (state_39832[(22)]);
var inst_39801__$1 = cljs.core.first(inst_39792);
var inst_39802 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39801__$1,inst_39702,done);
var state_39832__$1 = (function (){var statearr_39906 = state_39832;
(statearr_39906[(22)] = inst_39801__$1);

return statearr_39906;
})();
if(cljs.core.truth_(inst_39802)){
var statearr_39907_40955 = state_39832__$1;
(statearr_39907_40955[(1)] = (39));

} else {
var statearr_39908_40956 = state_39832__$1;
(statearr_39908_40956[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39833 === (8))){
var inst_39714 = (state_39832[(15)]);
var inst_39713 = (state_39832[(16)]);
var inst_39716 = (inst_39714 < inst_39713);
var inst_39717 = inst_39716;
var state_39832__$1 = state_39832;
if(cljs.core.truth_(inst_39717)){
var statearr_39909_40957 = state_39832__$1;
(statearr_39909_40957[(1)] = (10));

} else {
var statearr_39910_40958 = state_39832__$1;
(statearr_39910_40958[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__39059__auto__ = null;
var cljs$core$async$mult_$_state_machine__39059__auto____0 = (function (){
var statearr_39911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39911[(0)] = cljs$core$async$mult_$_state_machine__39059__auto__);

(statearr_39911[(1)] = (1));

return statearr_39911;
});
var cljs$core$async$mult_$_state_machine__39059__auto____1 = (function (state_39832){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39832);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e39912){var ex__39062__auto__ = e39912;
var statearr_39913_40961 = state_39832;
(statearr_39913_40961[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39832[(4)]))){
var statearr_39914_40962 = state_39832;
(statearr_39914_40962[(1)] = cljs.core.first((state_39832[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40963 = state_39832;
state_39832 = G__40963;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39059__auto__ = function(state_39832){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39059__auto____1.call(this,state_39832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39059__auto____0;
cljs$core$async$mult_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39059__auto____1;
return cljs$core$async$mult_$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_39915 = f__39096__auto__();
(statearr_39915[(6)] = c__39095__auto___40888);

return statearr_39915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39917 = arguments.length;
switch (G__39917) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_40965 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40965(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40966 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40966(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40967 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40967(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40968 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40968(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40969 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40969(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40970 = arguments.length;
var i__5767__auto___40971 = (0);
while(true){
if((i__5767__auto___40971 < len__5766__auto___40970)){
args__5772__auto__.push((arguments[i__5767__auto___40971]));

var G__40972 = (i__5767__auto___40971 + (1));
i__5767__auto___40971 = G__40972;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39922){
var map__39923 = p__39922;
var map__39923__$1 = cljs.core.__destructure_map(map__39923);
var opts = map__39923__$1;
var statearr_39924_40973 = state;
(statearr_39924_40973[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39925_40974 = state;
(statearr_39925_40974[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_39926_40975 = state;
(statearr_39926_40975[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39918){
var G__39919 = cljs.core.first(seq39918);
var seq39918__$1 = cljs.core.next(seq39918);
var G__39920 = cljs.core.first(seq39918__$1);
var seq39918__$2 = cljs.core.next(seq39918__$1);
var G__39921 = cljs.core.first(seq39918__$2);
var seq39918__$3 = cljs.core.next(seq39918__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39919,G__39920,G__39921,seq39918__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39927 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39928){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39928 = meta39928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39929,meta39928__$1){
var self__ = this;
var _39929__$1 = this;
return (new cljs.core.async.t_cljs$core$async39927(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39928__$1));
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39929){
var self__ = this;
var _39929__$1 = this;
return self__.meta39928;
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39927.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39928","meta39928",1724225347,null)], null);
}));

(cljs.core.async.t_cljs$core$async39927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39927");

(cljs.core.async.t_cljs$core$async39927.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39927.
 */
cljs.core.async.__GT_t_cljs$core$async39927 = (function cljs$core$async$mix_$___GT_t_cljs$core$async39927(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39928){
return (new cljs.core.async.t_cljs$core$async39927(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39928));
});

}

return (new cljs.core.async.t_cljs$core$async39927(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39095__auto___40983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_39997){
var state_val_39998 = (state_39997[(1)]);
if((state_val_39998 === (7))){
var inst_39957 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
if(cljs.core.truth_(inst_39957)){
var statearr_39999_40984 = state_39997__$1;
(statearr_39999_40984[(1)] = (8));

} else {
var statearr_40000_40985 = state_39997__$1;
(statearr_40000_40985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (20))){
var inst_39950 = (state_39997[(7)]);
var state_39997__$1 = state_39997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39997__$1,(23),out,inst_39950);
} else {
if((state_val_39998 === (1))){
var inst_39933 = calc_state();
var inst_39934 = cljs.core.__destructure_map(inst_39933);
var inst_39935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39934,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39934,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39934,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39938 = inst_39933;
var state_39997__$1 = (function (){var statearr_40001 = state_39997;
(statearr_40001[(8)] = inst_39938);

(statearr_40001[(9)] = inst_39936);

(statearr_40001[(10)] = inst_39935);

(statearr_40001[(11)] = inst_39937);

return statearr_40001;
})();
var statearr_40002_40986 = state_39997__$1;
(statearr_40002_40986[(2)] = null);

(statearr_40002_40986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (24))){
var inst_39941 = (state_39997[(12)]);
var inst_39938 = inst_39941;
var state_39997__$1 = (function (){var statearr_40003 = state_39997;
(statearr_40003[(8)] = inst_39938);

return statearr_40003;
})();
var statearr_40004_40987 = state_39997__$1;
(statearr_40004_40987[(2)] = null);

(statearr_40004_40987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (4))){
var inst_39950 = (state_39997[(7)]);
var inst_39952 = (state_39997[(13)]);
var inst_39949 = (state_39997[(2)]);
var inst_39950__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39949,(0),null);
var inst_39951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39949,(1),null);
var inst_39952__$1 = (inst_39950__$1 == null);
var state_39997__$1 = (function (){var statearr_40005 = state_39997;
(statearr_40005[(14)] = inst_39951);

(statearr_40005[(7)] = inst_39950__$1);

(statearr_40005[(13)] = inst_39952__$1);

return statearr_40005;
})();
if(cljs.core.truth_(inst_39952__$1)){
var statearr_40006_40988 = state_39997__$1;
(statearr_40006_40988[(1)] = (5));

} else {
var statearr_40007_40989 = state_39997__$1;
(statearr_40007_40989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (15))){
var inst_39942 = (state_39997[(15)]);
var inst_39971 = (state_39997[(16)]);
var inst_39971__$1 = cljs.core.empty_QMARK_(inst_39942);
var state_39997__$1 = (function (){var statearr_40008 = state_39997;
(statearr_40008[(16)] = inst_39971__$1);

return statearr_40008;
})();
if(inst_39971__$1){
var statearr_40009_40990 = state_39997__$1;
(statearr_40009_40990[(1)] = (17));

} else {
var statearr_40010_40991 = state_39997__$1;
(statearr_40010_40991[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (21))){
var inst_39941 = (state_39997[(12)]);
var inst_39938 = inst_39941;
var state_39997__$1 = (function (){var statearr_40011 = state_39997;
(statearr_40011[(8)] = inst_39938);

return statearr_40011;
})();
var statearr_40012_40992 = state_39997__$1;
(statearr_40012_40992[(2)] = null);

(statearr_40012_40992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (13))){
var inst_39964 = (state_39997[(2)]);
var inst_39965 = calc_state();
var inst_39938 = inst_39965;
var state_39997__$1 = (function (){var statearr_40013 = state_39997;
(statearr_40013[(8)] = inst_39938);

(statearr_40013[(17)] = inst_39964);

return statearr_40013;
})();
var statearr_40014_40993 = state_39997__$1;
(statearr_40014_40993[(2)] = null);

(statearr_40014_40993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (22))){
var inst_39991 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
var statearr_40015_40994 = state_39997__$1;
(statearr_40015_40994[(2)] = inst_39991);

(statearr_40015_40994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (6))){
var inst_39951 = (state_39997[(14)]);
var inst_39955 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39951,change);
var state_39997__$1 = state_39997;
var statearr_40016_40995 = state_39997__$1;
(statearr_40016_40995[(2)] = inst_39955);

(statearr_40016_40995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (25))){
var state_39997__$1 = state_39997;
var statearr_40017_40996 = state_39997__$1;
(statearr_40017_40996[(2)] = null);

(statearr_40017_40996[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (17))){
var inst_39951 = (state_39997[(14)]);
var inst_39943 = (state_39997[(18)]);
var inst_39973 = (inst_39943.cljs$core$IFn$_invoke$arity$1 ? inst_39943.cljs$core$IFn$_invoke$arity$1(inst_39951) : inst_39943.call(null,inst_39951));
var inst_39974 = cljs.core.not(inst_39973);
var state_39997__$1 = state_39997;
var statearr_40018_40997 = state_39997__$1;
(statearr_40018_40997[(2)] = inst_39974);

(statearr_40018_40997[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (3))){
var inst_39995 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39997__$1,inst_39995);
} else {
if((state_val_39998 === (12))){
var state_39997__$1 = state_39997;
var statearr_40019_40998 = state_39997__$1;
(statearr_40019_40998[(2)] = null);

(statearr_40019_40998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (2))){
var inst_39938 = (state_39997[(8)]);
var inst_39941 = (state_39997[(12)]);
var inst_39941__$1 = cljs.core.__destructure_map(inst_39938);
var inst_39942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39941__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39941__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39941__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39997__$1 = (function (){var statearr_40020 = state_39997;
(statearr_40020[(15)] = inst_39942);

(statearr_40020[(12)] = inst_39941__$1);

(statearr_40020[(18)] = inst_39943);

return statearr_40020;
})();
return cljs.core.async.ioc_alts_BANG_(state_39997__$1,(4),inst_39944);
} else {
if((state_val_39998 === (23))){
var inst_39982 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
if(cljs.core.truth_(inst_39982)){
var statearr_40021_40999 = state_39997__$1;
(statearr_40021_40999[(1)] = (24));

} else {
var statearr_40022_41000 = state_39997__$1;
(statearr_40022_41000[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (19))){
var inst_39977 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
var statearr_40023_41001 = state_39997__$1;
(statearr_40023_41001[(2)] = inst_39977);

(statearr_40023_41001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (11))){
var inst_39951 = (state_39997[(14)]);
var inst_39961 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39951);
var state_39997__$1 = state_39997;
var statearr_40024_41002 = state_39997__$1;
(statearr_40024_41002[(2)] = inst_39961);

(statearr_40024_41002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (9))){
var inst_39951 = (state_39997[(14)]);
var inst_39942 = (state_39997[(15)]);
var inst_39968 = (state_39997[(19)]);
var inst_39968__$1 = (inst_39942.cljs$core$IFn$_invoke$arity$1 ? inst_39942.cljs$core$IFn$_invoke$arity$1(inst_39951) : inst_39942.call(null,inst_39951));
var state_39997__$1 = (function (){var statearr_40025 = state_39997;
(statearr_40025[(19)] = inst_39968__$1);

return statearr_40025;
})();
if(cljs.core.truth_(inst_39968__$1)){
var statearr_40026_41003 = state_39997__$1;
(statearr_40026_41003[(1)] = (14));

} else {
var statearr_40027_41004 = state_39997__$1;
(statearr_40027_41004[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (5))){
var inst_39952 = (state_39997[(13)]);
var state_39997__$1 = state_39997;
var statearr_40028_41005 = state_39997__$1;
(statearr_40028_41005[(2)] = inst_39952);

(statearr_40028_41005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (14))){
var inst_39968 = (state_39997[(19)]);
var state_39997__$1 = state_39997;
var statearr_40029_41006 = state_39997__$1;
(statearr_40029_41006[(2)] = inst_39968);

(statearr_40029_41006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (26))){
var inst_39987 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
var statearr_40030_41007 = state_39997__$1;
(statearr_40030_41007[(2)] = inst_39987);

(statearr_40030_41007[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (16))){
var inst_39979 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
if(cljs.core.truth_(inst_39979)){
var statearr_40031_41008 = state_39997__$1;
(statearr_40031_41008[(1)] = (20));

} else {
var statearr_40032_41009 = state_39997__$1;
(statearr_40032_41009[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (10))){
var inst_39993 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
var statearr_40033_41010 = state_39997__$1;
(statearr_40033_41010[(2)] = inst_39993);

(statearr_40033_41010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (18))){
var inst_39971 = (state_39997[(16)]);
var state_39997__$1 = state_39997;
var statearr_40034_41011 = state_39997__$1;
(statearr_40034_41011[(2)] = inst_39971);

(statearr_40034_41011[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (8))){
var inst_39950 = (state_39997[(7)]);
var inst_39959 = (inst_39950 == null);
var state_39997__$1 = state_39997;
if(cljs.core.truth_(inst_39959)){
var statearr_40035_41013 = state_39997__$1;
(statearr_40035_41013[(1)] = (11));

} else {
var statearr_40036_41014 = state_39997__$1;
(statearr_40036_41014[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__39059__auto__ = null;
var cljs$core$async$mix_$_state_machine__39059__auto____0 = (function (){
var statearr_40037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40037[(0)] = cljs$core$async$mix_$_state_machine__39059__auto__);

(statearr_40037[(1)] = (1));

return statearr_40037;
});
var cljs$core$async$mix_$_state_machine__39059__auto____1 = (function (state_39997){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_39997);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40038){var ex__39062__auto__ = e40038;
var statearr_40039_41017 = state_39997;
(statearr_40039_41017[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_39997[(4)]))){
var statearr_40040_41018 = state_39997;
(statearr_40040_41018[(1)] = cljs.core.first((state_39997[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41019 = state_39997;
state_39997 = G__41019;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39059__auto__ = function(state_39997){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39059__auto____1.call(this,state_39997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39059__auto____0;
cljs$core$async$mix_$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39059__auto____1;
return cljs$core$async$mix_$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40041 = f__39096__auto__();
(statearr_40041[(6)] = c__39095__auto___40983);

return statearr_40041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41020 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41020(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41024 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41024(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41025 = (function() {
var G__41026 = null;
var G__41026__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41026__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41026 = function(p,v){
switch(arguments.length){
case 1:
return G__41026__1.call(this,p);
case 2:
return G__41026__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41026.cljs$core$IFn$_invoke$arity$1 = G__41026__1;
G__41026.cljs$core$IFn$_invoke$arity$2 = G__41026__2;
return G__41026;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40043 = arguments.length;
switch (G__40043) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41025(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41025(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__40046 = arguments.length;
switch (G__40046) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40044_SHARP_){
if(cljs.core.truth_((p1__40044_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40044_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40044_SHARP_.call(null,topic)))){
return p1__40044_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40044_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40047 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40048){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40048 = meta40048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40049,meta40048__$1){
var self__ = this;
var _40049__$1 = this;
return (new cljs.core.async.t_cljs$core$async40047(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40048__$1));
}));

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40049){
var self__ = this;
var _40049__$1 = this;
return self__.meta40048;
}));

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40047.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40048","meta40048",320482733,null)], null);
}));

(cljs.core.async.t_cljs$core$async40047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40047");

(cljs.core.async.t_cljs$core$async40047.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40047.
 */
cljs.core.async.__GT_t_cljs$core$async40047 = (function cljs$core$async$__GT_t_cljs$core$async40047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40048){
return (new cljs.core.async.t_cljs$core$async40047(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40048));
});

}

return (new cljs.core.async.t_cljs$core$async40047(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39095__auto___41029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40121){
var state_val_40122 = (state_40121[(1)]);
if((state_val_40122 === (7))){
var inst_40117 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40123_41033 = state_40121__$1;
(statearr_40123_41033[(2)] = inst_40117);

(statearr_40123_41033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (20))){
var state_40121__$1 = state_40121;
var statearr_40124_41034 = state_40121__$1;
(statearr_40124_41034[(2)] = null);

(statearr_40124_41034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (1))){
var state_40121__$1 = state_40121;
var statearr_40125_41035 = state_40121__$1;
(statearr_40125_41035[(2)] = null);

(statearr_40125_41035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (24))){
var inst_40100 = (state_40121[(7)]);
var inst_40109 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40100);
var state_40121__$1 = state_40121;
var statearr_40126_41036 = state_40121__$1;
(statearr_40126_41036[(2)] = inst_40109);

(statearr_40126_41036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (4))){
var inst_40052 = (state_40121[(8)]);
var inst_40052__$1 = (state_40121[(2)]);
var inst_40053 = (inst_40052__$1 == null);
var state_40121__$1 = (function (){var statearr_40127 = state_40121;
(statearr_40127[(8)] = inst_40052__$1);

return statearr_40127;
})();
if(cljs.core.truth_(inst_40053)){
var statearr_40128_41040 = state_40121__$1;
(statearr_40128_41040[(1)] = (5));

} else {
var statearr_40129_41041 = state_40121__$1;
(statearr_40129_41041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (15))){
var inst_40094 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40130_41042 = state_40121__$1;
(statearr_40130_41042[(2)] = inst_40094);

(statearr_40130_41042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (21))){
var inst_40114 = (state_40121[(2)]);
var state_40121__$1 = (function (){var statearr_40131 = state_40121;
(statearr_40131[(9)] = inst_40114);

return statearr_40131;
})();
var statearr_40132_41043 = state_40121__$1;
(statearr_40132_41043[(2)] = null);

(statearr_40132_41043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (13))){
var inst_40076 = (state_40121[(10)]);
var inst_40078 = cljs.core.chunked_seq_QMARK_(inst_40076);
var state_40121__$1 = state_40121;
if(inst_40078){
var statearr_40133_41047 = state_40121__$1;
(statearr_40133_41047[(1)] = (16));

} else {
var statearr_40134_41048 = state_40121__$1;
(statearr_40134_41048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (22))){
var inst_40106 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
if(cljs.core.truth_(inst_40106)){
var statearr_40135_41049 = state_40121__$1;
(statearr_40135_41049[(1)] = (23));

} else {
var statearr_40136_41050 = state_40121__$1;
(statearr_40136_41050[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (6))){
var inst_40100 = (state_40121[(7)]);
var inst_40052 = (state_40121[(8)]);
var inst_40102 = (state_40121[(11)]);
var inst_40100__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40052) : topic_fn.call(null,inst_40052));
var inst_40101 = cljs.core.deref(mults);
var inst_40102__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40101,inst_40100__$1);
var state_40121__$1 = (function (){var statearr_40137 = state_40121;
(statearr_40137[(7)] = inst_40100__$1);

(statearr_40137[(11)] = inst_40102__$1);

return statearr_40137;
})();
if(cljs.core.truth_(inst_40102__$1)){
var statearr_40138_41054 = state_40121__$1;
(statearr_40138_41054[(1)] = (19));

} else {
var statearr_40139_41055 = state_40121__$1;
(statearr_40139_41055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (25))){
var inst_40111 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40140_41059 = state_40121__$1;
(statearr_40140_41059[(2)] = inst_40111);

(statearr_40140_41059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (17))){
var inst_40076 = (state_40121[(10)]);
var inst_40085 = cljs.core.first(inst_40076);
var inst_40086 = cljs.core.async.muxch_STAR_(inst_40085);
var inst_40087 = cljs.core.async.close_BANG_(inst_40086);
var inst_40088 = cljs.core.next(inst_40076);
var inst_40062 = inst_40088;
var inst_40063 = null;
var inst_40064 = (0);
var inst_40065 = (0);
var state_40121__$1 = (function (){var statearr_40141 = state_40121;
(statearr_40141[(12)] = inst_40087);

(statearr_40141[(13)] = inst_40064);

(statearr_40141[(14)] = inst_40062);

(statearr_40141[(15)] = inst_40065);

(statearr_40141[(16)] = inst_40063);

return statearr_40141;
})();
var statearr_40142_41063 = state_40121__$1;
(statearr_40142_41063[(2)] = null);

(statearr_40142_41063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (3))){
var inst_40119 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40121__$1,inst_40119);
} else {
if((state_val_40122 === (12))){
var inst_40096 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40143_41064 = state_40121__$1;
(statearr_40143_41064[(2)] = inst_40096);

(statearr_40143_41064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (2))){
var state_40121__$1 = state_40121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40121__$1,(4),ch);
} else {
if((state_val_40122 === (23))){
var state_40121__$1 = state_40121;
var statearr_40144_41065 = state_40121__$1;
(statearr_40144_41065[(2)] = null);

(statearr_40144_41065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (19))){
var inst_40052 = (state_40121[(8)]);
var inst_40102 = (state_40121[(11)]);
var inst_40104 = cljs.core.async.muxch_STAR_(inst_40102);
var state_40121__$1 = state_40121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40121__$1,(22),inst_40104,inst_40052);
} else {
if((state_val_40122 === (11))){
var inst_40076 = (state_40121[(10)]);
var inst_40062 = (state_40121[(14)]);
var inst_40076__$1 = cljs.core.seq(inst_40062);
var state_40121__$1 = (function (){var statearr_40145 = state_40121;
(statearr_40145[(10)] = inst_40076__$1);

return statearr_40145;
})();
if(inst_40076__$1){
var statearr_40146_41067 = state_40121__$1;
(statearr_40146_41067[(1)] = (13));

} else {
var statearr_40147_41068 = state_40121__$1;
(statearr_40147_41068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (9))){
var inst_40098 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40148_41069 = state_40121__$1;
(statearr_40148_41069[(2)] = inst_40098);

(statearr_40148_41069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (5))){
var inst_40059 = cljs.core.deref(mults);
var inst_40060 = cljs.core.vals(inst_40059);
var inst_40061 = cljs.core.seq(inst_40060);
var inst_40062 = inst_40061;
var inst_40063 = null;
var inst_40064 = (0);
var inst_40065 = (0);
var state_40121__$1 = (function (){var statearr_40149 = state_40121;
(statearr_40149[(13)] = inst_40064);

(statearr_40149[(14)] = inst_40062);

(statearr_40149[(15)] = inst_40065);

(statearr_40149[(16)] = inst_40063);

return statearr_40149;
})();
var statearr_40150_41070 = state_40121__$1;
(statearr_40150_41070[(2)] = null);

(statearr_40150_41070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (14))){
var state_40121__$1 = state_40121;
var statearr_40154_41071 = state_40121__$1;
(statearr_40154_41071[(2)] = null);

(statearr_40154_41071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (16))){
var inst_40076 = (state_40121[(10)]);
var inst_40080 = cljs.core.chunk_first(inst_40076);
var inst_40081 = cljs.core.chunk_rest(inst_40076);
var inst_40082 = cljs.core.count(inst_40080);
var inst_40062 = inst_40081;
var inst_40063 = inst_40080;
var inst_40064 = inst_40082;
var inst_40065 = (0);
var state_40121__$1 = (function (){var statearr_40155 = state_40121;
(statearr_40155[(13)] = inst_40064);

(statearr_40155[(14)] = inst_40062);

(statearr_40155[(15)] = inst_40065);

(statearr_40155[(16)] = inst_40063);

return statearr_40155;
})();
var statearr_40156_41072 = state_40121__$1;
(statearr_40156_41072[(2)] = null);

(statearr_40156_41072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (10))){
var inst_40064 = (state_40121[(13)]);
var inst_40062 = (state_40121[(14)]);
var inst_40065 = (state_40121[(15)]);
var inst_40063 = (state_40121[(16)]);
var inst_40070 = cljs.core._nth(inst_40063,inst_40065);
var inst_40071 = cljs.core.async.muxch_STAR_(inst_40070);
var inst_40072 = cljs.core.async.close_BANG_(inst_40071);
var inst_40073 = (inst_40065 + (1));
var tmp40151 = inst_40064;
var tmp40152 = inst_40062;
var tmp40153 = inst_40063;
var inst_40062__$1 = tmp40152;
var inst_40063__$1 = tmp40153;
var inst_40064__$1 = tmp40151;
var inst_40065__$1 = inst_40073;
var state_40121__$1 = (function (){var statearr_40157 = state_40121;
(statearr_40157[(13)] = inst_40064__$1);

(statearr_40157[(17)] = inst_40072);

(statearr_40157[(14)] = inst_40062__$1);

(statearr_40157[(15)] = inst_40065__$1);

(statearr_40157[(16)] = inst_40063__$1);

return statearr_40157;
})();
var statearr_40158_41073 = state_40121__$1;
(statearr_40158_41073[(2)] = null);

(statearr_40158_41073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (18))){
var inst_40091 = (state_40121[(2)]);
var state_40121__$1 = state_40121;
var statearr_40159_41076 = state_40121__$1;
(statearr_40159_41076[(2)] = inst_40091);

(statearr_40159_41076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40122 === (8))){
var inst_40064 = (state_40121[(13)]);
var inst_40065 = (state_40121[(15)]);
var inst_40067 = (inst_40065 < inst_40064);
var inst_40068 = inst_40067;
var state_40121__$1 = state_40121;
if(cljs.core.truth_(inst_40068)){
var statearr_40160_41080 = state_40121__$1;
(statearr_40160_41080[(1)] = (10));

} else {
var statearr_40161_41081 = state_40121__$1;
(statearr_40161_41081[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40162[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40162[(1)] = (1));

return statearr_40162;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40121){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40121);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40163){var ex__39062__auto__ = e40163;
var statearr_40164_41084 = state_40121;
(statearr_40164_41084[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40121[(4)]))){
var statearr_40165_41085 = state_40121;
(statearr_40165_41085[(1)] = cljs.core.first((state_40121[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41086 = state_40121;
state_40121 = G__41086;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40166 = f__39096__auto__();
(statearr_40166[(6)] = c__39095__auto___41029);

return statearr_40166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40168 = arguments.length;
switch (G__40168) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40170 = arguments.length;
switch (G__40170) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__40172 = arguments.length;
switch (G__40172) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__39095__auto___41090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40215){
var state_val_40216 = (state_40215[(1)]);
if((state_val_40216 === (7))){
var state_40215__$1 = state_40215;
var statearr_40217_41091 = state_40215__$1;
(statearr_40217_41091[(2)] = null);

(statearr_40217_41091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (1))){
var state_40215__$1 = state_40215;
var statearr_40218_41092 = state_40215__$1;
(statearr_40218_41092[(2)] = null);

(statearr_40218_41092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (4))){
var inst_40175 = (state_40215[(7)]);
var inst_40176 = (state_40215[(8)]);
var inst_40178 = (inst_40176 < inst_40175);
var state_40215__$1 = state_40215;
if(cljs.core.truth_(inst_40178)){
var statearr_40219_41093 = state_40215__$1;
(statearr_40219_41093[(1)] = (6));

} else {
var statearr_40220_41094 = state_40215__$1;
(statearr_40220_41094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (15))){
var inst_40201 = (state_40215[(9)]);
var inst_40206 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40201);
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40215__$1,(17),out,inst_40206);
} else {
if((state_val_40216 === (13))){
var inst_40201 = (state_40215[(9)]);
var inst_40201__$1 = (state_40215[(2)]);
var inst_40202 = cljs.core.some(cljs.core.nil_QMARK_,inst_40201__$1);
var state_40215__$1 = (function (){var statearr_40221 = state_40215;
(statearr_40221[(9)] = inst_40201__$1);

return statearr_40221;
})();
if(cljs.core.truth_(inst_40202)){
var statearr_40222_41095 = state_40215__$1;
(statearr_40222_41095[(1)] = (14));

} else {
var statearr_40223_41096 = state_40215__$1;
(statearr_40223_41096[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (6))){
var state_40215__$1 = state_40215;
var statearr_40224_41097 = state_40215__$1;
(statearr_40224_41097[(2)] = null);

(statearr_40224_41097[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (17))){
var inst_40208 = (state_40215[(2)]);
var state_40215__$1 = (function (){var statearr_40226 = state_40215;
(statearr_40226[(10)] = inst_40208);

return statearr_40226;
})();
var statearr_40227_41098 = state_40215__$1;
(statearr_40227_41098[(2)] = null);

(statearr_40227_41098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (3))){
var inst_40213 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40215__$1,inst_40213);
} else {
if((state_val_40216 === (12))){
var _ = (function (){var statearr_40228 = state_40215;
(statearr_40228[(4)] = cljs.core.rest((state_40215[(4)])));

return statearr_40228;
})();
var state_40215__$1 = state_40215;
var ex40225 = (state_40215__$1[(2)]);
var statearr_40229_41099 = state_40215__$1;
(statearr_40229_41099[(5)] = ex40225);


if((ex40225 instanceof Object)){
var statearr_40230_41100 = state_40215__$1;
(statearr_40230_41100[(1)] = (11));

(statearr_40230_41100[(5)] = null);

} else {
throw ex40225;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (2))){
var inst_40174 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40175 = cnt;
var inst_40176 = (0);
var state_40215__$1 = (function (){var statearr_40231 = state_40215;
(statearr_40231[(11)] = inst_40174);

(statearr_40231[(7)] = inst_40175);

(statearr_40231[(8)] = inst_40176);

return statearr_40231;
})();
var statearr_40232_41101 = state_40215__$1;
(statearr_40232_41101[(2)] = null);

(statearr_40232_41101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (11))){
var inst_40180 = (state_40215[(2)]);
var inst_40181 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40215__$1 = (function (){var statearr_40233 = state_40215;
(statearr_40233[(12)] = inst_40180);

return statearr_40233;
})();
var statearr_40234_41102 = state_40215__$1;
(statearr_40234_41102[(2)] = inst_40181);

(statearr_40234_41102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (9))){
var inst_40176 = (state_40215[(8)]);
var _ = (function (){var statearr_40235 = state_40215;
(statearr_40235[(4)] = cljs.core.cons((12),(state_40215[(4)])));

return statearr_40235;
})();
var inst_40187 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40176) : chs__$1.call(null,inst_40176));
var inst_40188 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40176) : done.call(null,inst_40176));
var inst_40189 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40187,inst_40188);
var ___$1 = (function (){var statearr_40236 = state_40215;
(statearr_40236[(4)] = cljs.core.rest((state_40215[(4)])));

return statearr_40236;
})();
var state_40215__$1 = state_40215;
var statearr_40237_41103 = state_40215__$1;
(statearr_40237_41103[(2)] = inst_40189);

(statearr_40237_41103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (5))){
var inst_40199 = (state_40215[(2)]);
var state_40215__$1 = (function (){var statearr_40238 = state_40215;
(statearr_40238[(13)] = inst_40199);

return statearr_40238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40215__$1,(13),dchan);
} else {
if((state_val_40216 === (14))){
var inst_40204 = cljs.core.async.close_BANG_(out);
var state_40215__$1 = state_40215;
var statearr_40239_41104 = state_40215__$1;
(statearr_40239_41104[(2)] = inst_40204);

(statearr_40239_41104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (16))){
var inst_40211 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
var statearr_40240_41105 = state_40215__$1;
(statearr_40240_41105[(2)] = inst_40211);

(statearr_40240_41105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (10))){
var inst_40176 = (state_40215[(8)]);
var inst_40192 = (state_40215[(2)]);
var inst_40193 = (inst_40176 + (1));
var inst_40176__$1 = inst_40193;
var state_40215__$1 = (function (){var statearr_40241 = state_40215;
(statearr_40241[(14)] = inst_40192);

(statearr_40241[(8)] = inst_40176__$1);

return statearr_40241;
})();
var statearr_40242_41106 = state_40215__$1;
(statearr_40242_41106[(2)] = null);

(statearr_40242_41106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40216 === (8))){
var inst_40197 = (state_40215[(2)]);
var state_40215__$1 = state_40215;
var statearr_40243_41107 = state_40215__$1;
(statearr_40243_41107[(2)] = inst_40197);

(statearr_40243_41107[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40244[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40244[(1)] = (1));

return statearr_40244;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40215){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40215);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40245){var ex__39062__auto__ = e40245;
var statearr_40246_41108 = state_40215;
(statearr_40246_41108[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40215[(4)]))){
var statearr_40247_41109 = state_40215;
(statearr_40247_41109[(1)] = cljs.core.first((state_40215[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41110 = state_40215;
state_40215 = G__41110;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40248 = f__39096__auto__();
(statearr_40248[(6)] = c__39095__auto___41090);

return statearr_40248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40251 = arguments.length;
switch (G__40251) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39095__auto___41112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40283){
var state_val_40284 = (state_40283[(1)]);
if((state_val_40284 === (7))){
var inst_40263 = (state_40283[(7)]);
var inst_40262 = (state_40283[(8)]);
var inst_40262__$1 = (state_40283[(2)]);
var inst_40263__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40262__$1,(0),null);
var inst_40264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40262__$1,(1),null);
var inst_40265 = (inst_40263__$1 == null);
var state_40283__$1 = (function (){var statearr_40285 = state_40283;
(statearr_40285[(9)] = inst_40264);

(statearr_40285[(7)] = inst_40263__$1);

(statearr_40285[(8)] = inst_40262__$1);

return statearr_40285;
})();
if(cljs.core.truth_(inst_40265)){
var statearr_40286_41113 = state_40283__$1;
(statearr_40286_41113[(1)] = (8));

} else {
var statearr_40287_41114 = state_40283__$1;
(statearr_40287_41114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (1))){
var inst_40252 = cljs.core.vec(chs);
var inst_40253 = inst_40252;
var state_40283__$1 = (function (){var statearr_40288 = state_40283;
(statearr_40288[(10)] = inst_40253);

return statearr_40288;
})();
var statearr_40289_41115 = state_40283__$1;
(statearr_40289_41115[(2)] = null);

(statearr_40289_41115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (4))){
var inst_40253 = (state_40283[(10)]);
var state_40283__$1 = state_40283;
return cljs.core.async.ioc_alts_BANG_(state_40283__$1,(7),inst_40253);
} else {
if((state_val_40284 === (6))){
var inst_40279 = (state_40283[(2)]);
var state_40283__$1 = state_40283;
var statearr_40290_41116 = state_40283__$1;
(statearr_40290_41116[(2)] = inst_40279);

(statearr_40290_41116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (3))){
var inst_40281 = (state_40283[(2)]);
var state_40283__$1 = state_40283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40283__$1,inst_40281);
} else {
if((state_val_40284 === (2))){
var inst_40253 = (state_40283[(10)]);
var inst_40255 = cljs.core.count(inst_40253);
var inst_40256 = (inst_40255 > (0));
var state_40283__$1 = state_40283;
if(cljs.core.truth_(inst_40256)){
var statearr_40292_41117 = state_40283__$1;
(statearr_40292_41117[(1)] = (4));

} else {
var statearr_40293_41118 = state_40283__$1;
(statearr_40293_41118[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (11))){
var inst_40253 = (state_40283[(10)]);
var inst_40272 = (state_40283[(2)]);
var tmp40291 = inst_40253;
var inst_40253__$1 = tmp40291;
var state_40283__$1 = (function (){var statearr_40294 = state_40283;
(statearr_40294[(11)] = inst_40272);

(statearr_40294[(10)] = inst_40253__$1);

return statearr_40294;
})();
var statearr_40295_41119 = state_40283__$1;
(statearr_40295_41119[(2)] = null);

(statearr_40295_41119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (9))){
var inst_40263 = (state_40283[(7)]);
var state_40283__$1 = state_40283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40283__$1,(11),out,inst_40263);
} else {
if((state_val_40284 === (5))){
var inst_40277 = cljs.core.async.close_BANG_(out);
var state_40283__$1 = state_40283;
var statearr_40296_41120 = state_40283__$1;
(statearr_40296_41120[(2)] = inst_40277);

(statearr_40296_41120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (10))){
var inst_40275 = (state_40283[(2)]);
var state_40283__$1 = state_40283;
var statearr_40297_41121 = state_40283__$1;
(statearr_40297_41121[(2)] = inst_40275);

(statearr_40297_41121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40284 === (8))){
var inst_40253 = (state_40283[(10)]);
var inst_40264 = (state_40283[(9)]);
var inst_40263 = (state_40283[(7)]);
var inst_40262 = (state_40283[(8)]);
var inst_40267 = (function (){var cs = inst_40253;
var vec__40258 = inst_40262;
var v = inst_40263;
var c = inst_40264;
return (function (p1__40249_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40249_SHARP_);
});
})();
var inst_40268 = cljs.core.filterv(inst_40267,inst_40253);
var inst_40253__$1 = inst_40268;
var state_40283__$1 = (function (){var statearr_40298 = state_40283;
(statearr_40298[(10)] = inst_40253__$1);

return statearr_40298;
})();
var statearr_40299_41123 = state_40283__$1;
(statearr_40299_41123[(2)] = null);

(statearr_40299_41123[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40300[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40300[(1)] = (1));

return statearr_40300;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40283){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40283);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40301){var ex__39062__auto__ = e40301;
var statearr_40302_41125 = state_40283;
(statearr_40302_41125[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40283[(4)]))){
var statearr_40303_41126 = state_40283;
(statearr_40303_41126[(1)] = cljs.core.first((state_40283[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41127 = state_40283;
state_40283 = G__41127;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40304 = f__39096__auto__();
(statearr_40304[(6)] = c__39095__auto___41112);

return statearr_40304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40306 = arguments.length;
switch (G__40306) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39095__auto___41130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40330){
var state_val_40331 = (state_40330[(1)]);
if((state_val_40331 === (7))){
var inst_40312 = (state_40330[(7)]);
var inst_40312__$1 = (state_40330[(2)]);
var inst_40313 = (inst_40312__$1 == null);
var inst_40314 = cljs.core.not(inst_40313);
var state_40330__$1 = (function (){var statearr_40332 = state_40330;
(statearr_40332[(7)] = inst_40312__$1);

return statearr_40332;
})();
if(inst_40314){
var statearr_40333_41131 = state_40330__$1;
(statearr_40333_41131[(1)] = (8));

} else {
var statearr_40334_41132 = state_40330__$1;
(statearr_40334_41132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (1))){
var inst_40307 = (0);
var state_40330__$1 = (function (){var statearr_40335 = state_40330;
(statearr_40335[(8)] = inst_40307);

return statearr_40335;
})();
var statearr_40336_41133 = state_40330__$1;
(statearr_40336_41133[(2)] = null);

(statearr_40336_41133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (4))){
var state_40330__$1 = state_40330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40330__$1,(7),ch);
} else {
if((state_val_40331 === (6))){
var inst_40325 = (state_40330[(2)]);
var state_40330__$1 = state_40330;
var statearr_40337_41134 = state_40330__$1;
(statearr_40337_41134[(2)] = inst_40325);

(statearr_40337_41134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (3))){
var inst_40327 = (state_40330[(2)]);
var inst_40328 = cljs.core.async.close_BANG_(out);
var state_40330__$1 = (function (){var statearr_40338 = state_40330;
(statearr_40338[(9)] = inst_40327);

return statearr_40338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40330__$1,inst_40328);
} else {
if((state_val_40331 === (2))){
var inst_40307 = (state_40330[(8)]);
var inst_40309 = (inst_40307 < n);
var state_40330__$1 = state_40330;
if(cljs.core.truth_(inst_40309)){
var statearr_40339_41135 = state_40330__$1;
(statearr_40339_41135[(1)] = (4));

} else {
var statearr_40340_41136 = state_40330__$1;
(statearr_40340_41136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (11))){
var inst_40307 = (state_40330[(8)]);
var inst_40317 = (state_40330[(2)]);
var inst_40318 = (inst_40307 + (1));
var inst_40307__$1 = inst_40318;
var state_40330__$1 = (function (){var statearr_40341 = state_40330;
(statearr_40341[(8)] = inst_40307__$1);

(statearr_40341[(10)] = inst_40317);

return statearr_40341;
})();
var statearr_40342_41137 = state_40330__$1;
(statearr_40342_41137[(2)] = null);

(statearr_40342_41137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (9))){
var state_40330__$1 = state_40330;
var statearr_40343_41138 = state_40330__$1;
(statearr_40343_41138[(2)] = null);

(statearr_40343_41138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (5))){
var state_40330__$1 = state_40330;
var statearr_40344_41139 = state_40330__$1;
(statearr_40344_41139[(2)] = null);

(statearr_40344_41139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (10))){
var inst_40322 = (state_40330[(2)]);
var state_40330__$1 = state_40330;
var statearr_40345_41141 = state_40330__$1;
(statearr_40345_41141[(2)] = inst_40322);

(statearr_40345_41141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40331 === (8))){
var inst_40312 = (state_40330[(7)]);
var state_40330__$1 = state_40330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40330__$1,(11),out,inst_40312);
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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40346[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40346[(1)] = (1));

return statearr_40346;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40330){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40330);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40347){var ex__39062__auto__ = e40347;
var statearr_40348_41142 = state_40330;
(statearr_40348_41142[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40330[(4)]))){
var statearr_40349_41143 = state_40330;
(statearr_40349_41143[(1)] = cljs.core.first((state_40330[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41144 = state_40330;
state_40330 = G__41144;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40350 = f__39096__auto__();
(statearr_40350[(6)] = c__39095__auto___41130);

return statearr_40350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40352 = (function (f,ch,meta40353){
this.f = f;
this.ch = ch;
this.meta40353 = meta40353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40354,meta40353__$1){
var self__ = this;
var _40354__$1 = this;
return (new cljs.core.async.t_cljs$core$async40352(self__.f,self__.ch,meta40353__$1));
}));

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40354){
var self__ = this;
var _40354__$1 = this;
return self__.meta40353;
}));

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40355 = (function (f,ch,meta40353,_,fn1,meta40356){
this.f = f;
this.ch = ch;
this.meta40353 = meta40353;
this._ = _;
this.fn1 = fn1;
this.meta40356 = meta40356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40357,meta40356__$1){
var self__ = this;
var _40357__$1 = this;
return (new cljs.core.async.t_cljs$core$async40355(self__.f,self__.ch,self__.meta40353,self__._,self__.fn1,meta40356__$1));
}));

(cljs.core.async.t_cljs$core$async40355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40357){
var self__ = this;
var _40357__$1 = this;
return self__.meta40356;
}));

(cljs.core.async.t_cljs$core$async40355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40351_SHARP_){
var G__40358 = (((p1__40351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40351_SHARP_) : self__.f.call(null,p1__40351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40358) : f1.call(null,G__40358));
});
}));

(cljs.core.async.t_cljs$core$async40355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40353","meta40353",1474872704,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40352","cljs.core.async/t_cljs$core$async40352",1598391233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40356","meta40356",2045432193,null)], null);
}));

(cljs.core.async.t_cljs$core$async40355.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40355");

(cljs.core.async.t_cljs$core$async40355.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40355");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40355.
 */
cljs.core.async.__GT_t_cljs$core$async40355 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40355(f__$1,ch__$1,meta40353__$1,___$2,fn1__$1,meta40356){
return (new cljs.core.async.t_cljs$core$async40355(f__$1,ch__$1,meta40353__$1,___$2,fn1__$1,meta40356));
});

}

return (new cljs.core.async.t_cljs$core$async40355(self__.f,self__.ch,self__.meta40353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40359 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40359) : self__.f.call(null,G__40359));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40353","meta40353",1474872704,null)], null);
}));

(cljs.core.async.t_cljs$core$async40352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40352");

(cljs.core.async.t_cljs$core$async40352.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40352.
 */
cljs.core.async.__GT_t_cljs$core$async40352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40352(f__$1,ch__$1,meta40353){
return (new cljs.core.async.t_cljs$core$async40352(f__$1,ch__$1,meta40353));
});

}

return (new cljs.core.async.t_cljs$core$async40352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40360 = (function (f,ch,meta40361){
this.f = f;
this.ch = ch;
this.meta40361 = meta40361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40362,meta40361__$1){
var self__ = this;
var _40362__$1 = this;
return (new cljs.core.async.t_cljs$core$async40360(self__.f,self__.ch,meta40361__$1));
}));

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40362){
var self__ = this;
var _40362__$1 = this;
return self__.meta40361;
}));

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40361","meta40361",1499477359,null)], null);
}));

(cljs.core.async.t_cljs$core$async40360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40360");

(cljs.core.async.t_cljs$core$async40360.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40360.
 */
cljs.core.async.__GT_t_cljs$core$async40360 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40360(f__$1,ch__$1,meta40361){
return (new cljs.core.async.t_cljs$core$async40360(f__$1,ch__$1,meta40361));
});

}

return (new cljs.core.async.t_cljs$core$async40360(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40363 = (function (p,ch,meta40364){
this.p = p;
this.ch = ch;
this.meta40364 = meta40364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40365,meta40364__$1){
var self__ = this;
var _40365__$1 = this;
return (new cljs.core.async.t_cljs$core$async40363(self__.p,self__.ch,meta40364__$1));
}));

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40365){
var self__ = this;
var _40365__$1 = this;
return self__.meta40364;
}));

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40364","meta40364",-1614508816,null)], null);
}));

(cljs.core.async.t_cljs$core$async40363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40363");

(cljs.core.async.t_cljs$core$async40363.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async40363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40363.
 */
cljs.core.async.__GT_t_cljs$core$async40363 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40363(p__$1,ch__$1,meta40364){
return (new cljs.core.async.t_cljs$core$async40363(p__$1,ch__$1,meta40364));
});

}

return (new cljs.core.async.t_cljs$core$async40363(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40367 = arguments.length;
switch (G__40367) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39095__auto___41175 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40388){
var state_val_40389 = (state_40388[(1)]);
if((state_val_40389 === (7))){
var inst_40384 = (state_40388[(2)]);
var state_40388__$1 = state_40388;
var statearr_40390_41176 = state_40388__$1;
(statearr_40390_41176[(2)] = inst_40384);

(statearr_40390_41176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (1))){
var state_40388__$1 = state_40388;
var statearr_40391_41177 = state_40388__$1;
(statearr_40391_41177[(2)] = null);

(statearr_40391_41177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (4))){
var inst_40370 = (state_40388[(7)]);
var inst_40370__$1 = (state_40388[(2)]);
var inst_40371 = (inst_40370__$1 == null);
var state_40388__$1 = (function (){var statearr_40392 = state_40388;
(statearr_40392[(7)] = inst_40370__$1);

return statearr_40392;
})();
if(cljs.core.truth_(inst_40371)){
var statearr_40393_41178 = state_40388__$1;
(statearr_40393_41178[(1)] = (5));

} else {
var statearr_40394_41179 = state_40388__$1;
(statearr_40394_41179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (6))){
var inst_40370 = (state_40388[(7)]);
var inst_40375 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40370) : p.call(null,inst_40370));
var state_40388__$1 = state_40388;
if(cljs.core.truth_(inst_40375)){
var statearr_40395_41180 = state_40388__$1;
(statearr_40395_41180[(1)] = (8));

} else {
var statearr_40396_41181 = state_40388__$1;
(statearr_40396_41181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (3))){
var inst_40386 = (state_40388[(2)]);
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40388__$1,inst_40386);
} else {
if((state_val_40389 === (2))){
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40388__$1,(4),ch);
} else {
if((state_val_40389 === (11))){
var inst_40378 = (state_40388[(2)]);
var state_40388__$1 = state_40388;
var statearr_40397_41183 = state_40388__$1;
(statearr_40397_41183[(2)] = inst_40378);

(statearr_40397_41183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (9))){
var state_40388__$1 = state_40388;
var statearr_40398_41184 = state_40388__$1;
(statearr_40398_41184[(2)] = null);

(statearr_40398_41184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (5))){
var inst_40373 = cljs.core.async.close_BANG_(out);
var state_40388__$1 = state_40388;
var statearr_40399_41186 = state_40388__$1;
(statearr_40399_41186[(2)] = inst_40373);

(statearr_40399_41186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (10))){
var inst_40381 = (state_40388[(2)]);
var state_40388__$1 = (function (){var statearr_40400 = state_40388;
(statearr_40400[(8)] = inst_40381);

return statearr_40400;
})();
var statearr_40401_41187 = state_40388__$1;
(statearr_40401_41187[(2)] = null);

(statearr_40401_41187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40389 === (8))){
var inst_40370 = (state_40388[(7)]);
var state_40388__$1 = state_40388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40388__$1,(11),out,inst_40370);
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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40402 = [null,null,null,null,null,null,null,null,null];
(statearr_40402[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40402[(1)] = (1));

return statearr_40402;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40388){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40388);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40403){var ex__39062__auto__ = e40403;
var statearr_40404_41188 = state_40388;
(statearr_40404_41188[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40388[(4)]))){
var statearr_40405_41189 = state_40388;
(statearr_40405_41189[(1)] = cljs.core.first((state_40388[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41190 = state_40388;
state_40388 = G__41190;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40406 = f__39096__auto__();
(statearr_40406[(6)] = c__39095__auto___41175);

return statearr_40406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40408 = arguments.length;
switch (G__40408) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40470){
var state_val_40471 = (state_40470[(1)]);
if((state_val_40471 === (7))){
var inst_40466 = (state_40470[(2)]);
var state_40470__$1 = state_40470;
var statearr_40472_41192 = state_40470__$1;
(statearr_40472_41192[(2)] = inst_40466);

(statearr_40472_41192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (20))){
var inst_40436 = (state_40470[(7)]);
var inst_40447 = (state_40470[(2)]);
var inst_40448 = cljs.core.next(inst_40436);
var inst_40422 = inst_40448;
var inst_40423 = null;
var inst_40424 = (0);
var inst_40425 = (0);
var state_40470__$1 = (function (){var statearr_40473 = state_40470;
(statearr_40473[(8)] = inst_40424);

(statearr_40473[(9)] = inst_40423);

(statearr_40473[(10)] = inst_40447);

(statearr_40473[(11)] = inst_40425);

(statearr_40473[(12)] = inst_40422);

return statearr_40473;
})();
var statearr_40474_41193 = state_40470__$1;
(statearr_40474_41193[(2)] = null);

(statearr_40474_41193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (1))){
var state_40470__$1 = state_40470;
var statearr_40475_41194 = state_40470__$1;
(statearr_40475_41194[(2)] = null);

(statearr_40475_41194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (4))){
var inst_40411 = (state_40470[(13)]);
var inst_40411__$1 = (state_40470[(2)]);
var inst_40412 = (inst_40411__$1 == null);
var state_40470__$1 = (function (){var statearr_40476 = state_40470;
(statearr_40476[(13)] = inst_40411__$1);

return statearr_40476;
})();
if(cljs.core.truth_(inst_40412)){
var statearr_40477_41198 = state_40470__$1;
(statearr_40477_41198[(1)] = (5));

} else {
var statearr_40478_41199 = state_40470__$1;
(statearr_40478_41199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (15))){
var state_40470__$1 = state_40470;
var statearr_40482_41200 = state_40470__$1;
(statearr_40482_41200[(2)] = null);

(statearr_40482_41200[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (21))){
var state_40470__$1 = state_40470;
var statearr_40483_41201 = state_40470__$1;
(statearr_40483_41201[(2)] = null);

(statearr_40483_41201[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (13))){
var inst_40424 = (state_40470[(8)]);
var inst_40423 = (state_40470[(9)]);
var inst_40425 = (state_40470[(11)]);
var inst_40422 = (state_40470[(12)]);
var inst_40432 = (state_40470[(2)]);
var inst_40433 = (inst_40425 + (1));
var tmp40479 = inst_40424;
var tmp40480 = inst_40423;
var tmp40481 = inst_40422;
var inst_40422__$1 = tmp40481;
var inst_40423__$1 = tmp40480;
var inst_40424__$1 = tmp40479;
var inst_40425__$1 = inst_40433;
var state_40470__$1 = (function (){var statearr_40484 = state_40470;
(statearr_40484[(8)] = inst_40424__$1);

(statearr_40484[(9)] = inst_40423__$1);

(statearr_40484[(14)] = inst_40432);

(statearr_40484[(11)] = inst_40425__$1);

(statearr_40484[(12)] = inst_40422__$1);

return statearr_40484;
})();
var statearr_40485_41202 = state_40470__$1;
(statearr_40485_41202[(2)] = null);

(statearr_40485_41202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (22))){
var state_40470__$1 = state_40470;
var statearr_40486_41203 = state_40470__$1;
(statearr_40486_41203[(2)] = null);

(statearr_40486_41203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (6))){
var inst_40411 = (state_40470[(13)]);
var inst_40420 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40411) : f.call(null,inst_40411));
var inst_40421 = cljs.core.seq(inst_40420);
var inst_40422 = inst_40421;
var inst_40423 = null;
var inst_40424 = (0);
var inst_40425 = (0);
var state_40470__$1 = (function (){var statearr_40487 = state_40470;
(statearr_40487[(8)] = inst_40424);

(statearr_40487[(9)] = inst_40423);

(statearr_40487[(11)] = inst_40425);

(statearr_40487[(12)] = inst_40422);

return statearr_40487;
})();
var statearr_40488_41204 = state_40470__$1;
(statearr_40488_41204[(2)] = null);

(statearr_40488_41204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (17))){
var inst_40436 = (state_40470[(7)]);
var inst_40440 = cljs.core.chunk_first(inst_40436);
var inst_40441 = cljs.core.chunk_rest(inst_40436);
var inst_40442 = cljs.core.count(inst_40440);
var inst_40422 = inst_40441;
var inst_40423 = inst_40440;
var inst_40424 = inst_40442;
var inst_40425 = (0);
var state_40470__$1 = (function (){var statearr_40489 = state_40470;
(statearr_40489[(8)] = inst_40424);

(statearr_40489[(9)] = inst_40423);

(statearr_40489[(11)] = inst_40425);

(statearr_40489[(12)] = inst_40422);

return statearr_40489;
})();
var statearr_40490_41205 = state_40470__$1;
(statearr_40490_41205[(2)] = null);

(statearr_40490_41205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (3))){
var inst_40468 = (state_40470[(2)]);
var state_40470__$1 = state_40470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40470__$1,inst_40468);
} else {
if((state_val_40471 === (12))){
var inst_40456 = (state_40470[(2)]);
var state_40470__$1 = state_40470;
var statearr_40491_41206 = state_40470__$1;
(statearr_40491_41206[(2)] = inst_40456);

(statearr_40491_41206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (2))){
var state_40470__$1 = state_40470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40470__$1,(4),in$);
} else {
if((state_val_40471 === (23))){
var inst_40464 = (state_40470[(2)]);
var state_40470__$1 = state_40470;
var statearr_40492_41207 = state_40470__$1;
(statearr_40492_41207[(2)] = inst_40464);

(statearr_40492_41207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (19))){
var inst_40451 = (state_40470[(2)]);
var state_40470__$1 = state_40470;
var statearr_40493_41208 = state_40470__$1;
(statearr_40493_41208[(2)] = inst_40451);

(statearr_40493_41208[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (11))){
var inst_40422 = (state_40470[(12)]);
var inst_40436 = (state_40470[(7)]);
var inst_40436__$1 = cljs.core.seq(inst_40422);
var state_40470__$1 = (function (){var statearr_40494 = state_40470;
(statearr_40494[(7)] = inst_40436__$1);

return statearr_40494;
})();
if(inst_40436__$1){
var statearr_40495_41209 = state_40470__$1;
(statearr_40495_41209[(1)] = (14));

} else {
var statearr_40496_41210 = state_40470__$1;
(statearr_40496_41210[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (9))){
var inst_40458 = (state_40470[(2)]);
var inst_40459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40470__$1 = (function (){var statearr_40497 = state_40470;
(statearr_40497[(15)] = inst_40458);

return statearr_40497;
})();
if(cljs.core.truth_(inst_40459)){
var statearr_40498_41211 = state_40470__$1;
(statearr_40498_41211[(1)] = (21));

} else {
var statearr_40499_41212 = state_40470__$1;
(statearr_40499_41212[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (5))){
var inst_40414 = cljs.core.async.close_BANG_(out);
var state_40470__$1 = state_40470;
var statearr_40500_41213 = state_40470__$1;
(statearr_40500_41213[(2)] = inst_40414);

(statearr_40500_41213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (14))){
var inst_40436 = (state_40470[(7)]);
var inst_40438 = cljs.core.chunked_seq_QMARK_(inst_40436);
var state_40470__$1 = state_40470;
if(inst_40438){
var statearr_40501_41215 = state_40470__$1;
(statearr_40501_41215[(1)] = (17));

} else {
var statearr_40502_41216 = state_40470__$1;
(statearr_40502_41216[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (16))){
var inst_40454 = (state_40470[(2)]);
var state_40470__$1 = state_40470;
var statearr_40503_41217 = state_40470__$1;
(statearr_40503_41217[(2)] = inst_40454);

(statearr_40503_41217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40471 === (10))){
var inst_40423 = (state_40470[(9)]);
var inst_40425 = (state_40470[(11)]);
var inst_40430 = cljs.core._nth(inst_40423,inst_40425);
var state_40470__$1 = state_40470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40470__$1,(13),out,inst_40430);
} else {
if((state_val_40471 === (18))){
var inst_40436 = (state_40470[(7)]);
var inst_40445 = cljs.core.first(inst_40436);
var state_40470__$1 = state_40470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40470__$1,(20),out,inst_40445);
} else {
if((state_val_40471 === (8))){
var inst_40424 = (state_40470[(8)]);
var inst_40425 = (state_40470[(11)]);
var inst_40427 = (inst_40425 < inst_40424);
var inst_40428 = inst_40427;
var state_40470__$1 = state_40470;
if(cljs.core.truth_(inst_40428)){
var statearr_40504_41219 = state_40470__$1;
(statearr_40504_41219[(1)] = (10));

} else {
var statearr_40505_41220 = state_40470__$1;
(statearr_40505_41220[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39059__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39059__auto____0 = (function (){
var statearr_40506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40506[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39059__auto__);

(statearr_40506[(1)] = (1));

return statearr_40506;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39059__auto____1 = (function (state_40470){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40470);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40507){var ex__39062__auto__ = e40507;
var statearr_40508_41221 = state_40470;
(statearr_40508_41221[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40470[(4)]))){
var statearr_40509_41222 = state_40470;
(statearr_40509_41222[(1)] = cljs.core.first((state_40470[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41223 = state_40470;
state_40470 = G__41223;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39059__auto__ = function(state_40470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39059__auto____1.call(this,state_40470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39059__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39059__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40510 = f__39096__auto__();
(statearr_40510[(6)] = c__39095__auto__);

return statearr_40510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

return c__39095__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40512 = arguments.length;
switch (G__40512) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40514 = arguments.length;
switch (G__40514) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40516 = arguments.length;
switch (G__40516) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39095__auto___41227 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40540){
var state_val_40541 = (state_40540[(1)]);
if((state_val_40541 === (7))){
var inst_40535 = (state_40540[(2)]);
var state_40540__$1 = state_40540;
var statearr_40542_41228 = state_40540__$1;
(statearr_40542_41228[(2)] = inst_40535);

(statearr_40542_41228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (1))){
var inst_40517 = null;
var state_40540__$1 = (function (){var statearr_40543 = state_40540;
(statearr_40543[(7)] = inst_40517);

return statearr_40543;
})();
var statearr_40544_41229 = state_40540__$1;
(statearr_40544_41229[(2)] = null);

(statearr_40544_41229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (4))){
var inst_40520 = (state_40540[(8)]);
var inst_40520__$1 = (state_40540[(2)]);
var inst_40521 = (inst_40520__$1 == null);
var inst_40522 = cljs.core.not(inst_40521);
var state_40540__$1 = (function (){var statearr_40545 = state_40540;
(statearr_40545[(8)] = inst_40520__$1);

return statearr_40545;
})();
if(inst_40522){
var statearr_40546_41230 = state_40540__$1;
(statearr_40546_41230[(1)] = (5));

} else {
var statearr_40547_41231 = state_40540__$1;
(statearr_40547_41231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (6))){
var state_40540__$1 = state_40540;
var statearr_40548_41232 = state_40540__$1;
(statearr_40548_41232[(2)] = null);

(statearr_40548_41232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (3))){
var inst_40537 = (state_40540[(2)]);
var inst_40538 = cljs.core.async.close_BANG_(out);
var state_40540__$1 = (function (){var statearr_40549 = state_40540;
(statearr_40549[(9)] = inst_40537);

return statearr_40549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40540__$1,inst_40538);
} else {
if((state_val_40541 === (2))){
var state_40540__$1 = state_40540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40540__$1,(4),ch);
} else {
if((state_val_40541 === (11))){
var inst_40520 = (state_40540[(8)]);
var inst_40529 = (state_40540[(2)]);
var inst_40517 = inst_40520;
var state_40540__$1 = (function (){var statearr_40550 = state_40540;
(statearr_40550[(10)] = inst_40529);

(statearr_40550[(7)] = inst_40517);

return statearr_40550;
})();
var statearr_40551_41233 = state_40540__$1;
(statearr_40551_41233[(2)] = null);

(statearr_40551_41233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (9))){
var inst_40520 = (state_40540[(8)]);
var state_40540__$1 = state_40540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40540__$1,(11),out,inst_40520);
} else {
if((state_val_40541 === (5))){
var inst_40517 = (state_40540[(7)]);
var inst_40520 = (state_40540[(8)]);
var inst_40524 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40520,inst_40517);
var state_40540__$1 = state_40540;
if(inst_40524){
var statearr_40553_41234 = state_40540__$1;
(statearr_40553_41234[(1)] = (8));

} else {
var statearr_40554_41235 = state_40540__$1;
(statearr_40554_41235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (10))){
var inst_40532 = (state_40540[(2)]);
var state_40540__$1 = state_40540;
var statearr_40555_41236 = state_40540__$1;
(statearr_40555_41236[(2)] = inst_40532);

(statearr_40555_41236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40541 === (8))){
var inst_40517 = (state_40540[(7)]);
var tmp40552 = inst_40517;
var inst_40517__$1 = tmp40552;
var state_40540__$1 = (function (){var statearr_40556 = state_40540;
(statearr_40556[(7)] = inst_40517__$1);

return statearr_40556;
})();
var statearr_40557_41237 = state_40540__$1;
(statearr_40557_41237[(2)] = null);

(statearr_40557_41237[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40558 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40558[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40558[(1)] = (1));

return statearr_40558;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40540){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40540);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40559){var ex__39062__auto__ = e40559;
var statearr_40560_41238 = state_40540;
(statearr_40560_41238[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40540[(4)]))){
var statearr_40561_41239 = state_40540;
(statearr_40561_41239[(1)] = cljs.core.first((state_40540[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41240 = state_40540;
state_40540 = G__41240;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40562 = f__39096__auto__();
(statearr_40562[(6)] = c__39095__auto___41227);

return statearr_40562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40564 = arguments.length;
switch (G__40564) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39095__auto___41242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40602){
var state_val_40603 = (state_40602[(1)]);
if((state_val_40603 === (7))){
var inst_40598 = (state_40602[(2)]);
var state_40602__$1 = state_40602;
var statearr_40604_41243 = state_40602__$1;
(statearr_40604_41243[(2)] = inst_40598);

(statearr_40604_41243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (1))){
var inst_40565 = (new Array(n));
var inst_40566 = inst_40565;
var inst_40567 = (0);
var state_40602__$1 = (function (){var statearr_40605 = state_40602;
(statearr_40605[(7)] = inst_40566);

(statearr_40605[(8)] = inst_40567);

return statearr_40605;
})();
var statearr_40606_41244 = state_40602__$1;
(statearr_40606_41244[(2)] = null);

(statearr_40606_41244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (4))){
var inst_40570 = (state_40602[(9)]);
var inst_40570__$1 = (state_40602[(2)]);
var inst_40571 = (inst_40570__$1 == null);
var inst_40572 = cljs.core.not(inst_40571);
var state_40602__$1 = (function (){var statearr_40607 = state_40602;
(statearr_40607[(9)] = inst_40570__$1);

return statearr_40607;
})();
if(inst_40572){
var statearr_40608_41245 = state_40602__$1;
(statearr_40608_41245[(1)] = (5));

} else {
var statearr_40609_41246 = state_40602__$1;
(statearr_40609_41246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (15))){
var inst_40592 = (state_40602[(2)]);
var state_40602__$1 = state_40602;
var statearr_40610_41247 = state_40602__$1;
(statearr_40610_41247[(2)] = inst_40592);

(statearr_40610_41247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (13))){
var state_40602__$1 = state_40602;
var statearr_40611_41248 = state_40602__$1;
(statearr_40611_41248[(2)] = null);

(statearr_40611_41248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (6))){
var inst_40567 = (state_40602[(8)]);
var inst_40588 = (inst_40567 > (0));
var state_40602__$1 = state_40602;
if(cljs.core.truth_(inst_40588)){
var statearr_40612_41249 = state_40602__$1;
(statearr_40612_41249[(1)] = (12));

} else {
var statearr_40613_41250 = state_40602__$1;
(statearr_40613_41250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (3))){
var inst_40600 = (state_40602[(2)]);
var state_40602__$1 = state_40602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40602__$1,inst_40600);
} else {
if((state_val_40603 === (12))){
var inst_40566 = (state_40602[(7)]);
var inst_40590 = cljs.core.vec(inst_40566);
var state_40602__$1 = state_40602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40602__$1,(15),out,inst_40590);
} else {
if((state_val_40603 === (2))){
var state_40602__$1 = state_40602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40602__$1,(4),ch);
} else {
if((state_val_40603 === (11))){
var inst_40582 = (state_40602[(2)]);
var inst_40583 = (new Array(n));
var inst_40566 = inst_40583;
var inst_40567 = (0);
var state_40602__$1 = (function (){var statearr_40614 = state_40602;
(statearr_40614[(10)] = inst_40582);

(statearr_40614[(7)] = inst_40566);

(statearr_40614[(8)] = inst_40567);

return statearr_40614;
})();
var statearr_40615_41251 = state_40602__$1;
(statearr_40615_41251[(2)] = null);

(statearr_40615_41251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (9))){
var inst_40566 = (state_40602[(7)]);
var inst_40580 = cljs.core.vec(inst_40566);
var state_40602__$1 = state_40602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40602__$1,(11),out,inst_40580);
} else {
if((state_val_40603 === (5))){
var inst_40570 = (state_40602[(9)]);
var inst_40566 = (state_40602[(7)]);
var inst_40567 = (state_40602[(8)]);
var inst_40575 = (state_40602[(11)]);
var inst_40574 = (inst_40566[inst_40567] = inst_40570);
var inst_40575__$1 = (inst_40567 + (1));
var inst_40576 = (inst_40575__$1 < n);
var state_40602__$1 = (function (){var statearr_40616 = state_40602;
(statearr_40616[(12)] = inst_40574);

(statearr_40616[(11)] = inst_40575__$1);

return statearr_40616;
})();
if(cljs.core.truth_(inst_40576)){
var statearr_40617_41252 = state_40602__$1;
(statearr_40617_41252[(1)] = (8));

} else {
var statearr_40618_41253 = state_40602__$1;
(statearr_40618_41253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (14))){
var inst_40595 = (state_40602[(2)]);
var inst_40596 = cljs.core.async.close_BANG_(out);
var state_40602__$1 = (function (){var statearr_40620 = state_40602;
(statearr_40620[(13)] = inst_40595);

return statearr_40620;
})();
var statearr_40621_41254 = state_40602__$1;
(statearr_40621_41254[(2)] = inst_40596);

(statearr_40621_41254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (10))){
var inst_40586 = (state_40602[(2)]);
var state_40602__$1 = state_40602;
var statearr_40622_41255 = state_40602__$1;
(statearr_40622_41255[(2)] = inst_40586);

(statearr_40622_41255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40603 === (8))){
var inst_40566 = (state_40602[(7)]);
var inst_40575 = (state_40602[(11)]);
var tmp40619 = inst_40566;
var inst_40566__$1 = tmp40619;
var inst_40567 = inst_40575;
var state_40602__$1 = (function (){var statearr_40623 = state_40602;
(statearr_40623[(7)] = inst_40566__$1);

(statearr_40623[(8)] = inst_40567);

return statearr_40623;
})();
var statearr_40624_41258 = state_40602__$1;
(statearr_40624_41258[(2)] = null);

(statearr_40624_41258[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40625[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40625[(1)] = (1));

return statearr_40625;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40602){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40602);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40626){var ex__39062__auto__ = e40626;
var statearr_40627_41259 = state_40602;
(statearr_40627_41259[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40602[(4)]))){
var statearr_40628_41260 = state_40602;
(statearr_40628_41260[(1)] = cljs.core.first((state_40602[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41261 = state_40602;
state_40602 = G__41261;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40629 = f__39096__auto__();
(statearr_40629[(6)] = c__39095__auto___41242);

return statearr_40629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40631 = arguments.length;
switch (G__40631) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39095__auto___41263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_40676){
var state_val_40677 = (state_40676[(1)]);
if((state_val_40677 === (7))){
var inst_40672 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40678_41264 = state_40676__$1;
(statearr_40678_41264[(2)] = inst_40672);

(statearr_40678_41264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (1))){
var inst_40632 = [];
var inst_40633 = inst_40632;
var inst_40634 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40676__$1 = (function (){var statearr_40679 = state_40676;
(statearr_40679[(7)] = inst_40633);

(statearr_40679[(8)] = inst_40634);

return statearr_40679;
})();
var statearr_40680_41265 = state_40676__$1;
(statearr_40680_41265[(2)] = null);

(statearr_40680_41265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (4))){
var inst_40637 = (state_40676[(9)]);
var inst_40637__$1 = (state_40676[(2)]);
var inst_40638 = (inst_40637__$1 == null);
var inst_40639 = cljs.core.not(inst_40638);
var state_40676__$1 = (function (){var statearr_40681 = state_40676;
(statearr_40681[(9)] = inst_40637__$1);

return statearr_40681;
})();
if(inst_40639){
var statearr_40682_41266 = state_40676__$1;
(statearr_40682_41266[(1)] = (5));

} else {
var statearr_40683_41267 = state_40676__$1;
(statearr_40683_41267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (15))){
var inst_40633 = (state_40676[(7)]);
var inst_40664 = cljs.core.vec(inst_40633);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40676__$1,(18),out,inst_40664);
} else {
if((state_val_40677 === (13))){
var inst_40659 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40684_41269 = state_40676__$1;
(statearr_40684_41269[(2)] = inst_40659);

(statearr_40684_41269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (6))){
var inst_40633 = (state_40676[(7)]);
var inst_40661 = inst_40633.length;
var inst_40662 = (inst_40661 > (0));
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40662)){
var statearr_40685_41270 = state_40676__$1;
(statearr_40685_41270[(1)] = (15));

} else {
var statearr_40686_41271 = state_40676__$1;
(statearr_40686_41271[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (17))){
var inst_40669 = (state_40676[(2)]);
var inst_40670 = cljs.core.async.close_BANG_(out);
var state_40676__$1 = (function (){var statearr_40687 = state_40676;
(statearr_40687[(10)] = inst_40669);

return statearr_40687;
})();
var statearr_40688_41272 = state_40676__$1;
(statearr_40688_41272[(2)] = inst_40670);

(statearr_40688_41272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (3))){
var inst_40674 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40676__$1,inst_40674);
} else {
if((state_val_40677 === (12))){
var inst_40633 = (state_40676[(7)]);
var inst_40652 = cljs.core.vec(inst_40633);
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40676__$1,(14),out,inst_40652);
} else {
if((state_val_40677 === (2))){
var state_40676__$1 = state_40676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40676__$1,(4),ch);
} else {
if((state_val_40677 === (11))){
var inst_40641 = (state_40676[(11)]);
var inst_40633 = (state_40676[(7)]);
var inst_40637 = (state_40676[(9)]);
var inst_40649 = inst_40633.push(inst_40637);
var tmp40689 = inst_40633;
var inst_40633__$1 = tmp40689;
var inst_40634 = inst_40641;
var state_40676__$1 = (function (){var statearr_40690 = state_40676;
(statearr_40690[(12)] = inst_40649);

(statearr_40690[(7)] = inst_40633__$1);

(statearr_40690[(8)] = inst_40634);

return statearr_40690;
})();
var statearr_40691_41273 = state_40676__$1;
(statearr_40691_41273[(2)] = null);

(statearr_40691_41273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (9))){
var inst_40634 = (state_40676[(8)]);
var inst_40645 = cljs.core.keyword_identical_QMARK_(inst_40634,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40676__$1 = state_40676;
var statearr_40692_41274 = state_40676__$1;
(statearr_40692_41274[(2)] = inst_40645);

(statearr_40692_41274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (5))){
var inst_40642 = (state_40676[(13)]);
var inst_40641 = (state_40676[(11)]);
var inst_40634 = (state_40676[(8)]);
var inst_40637 = (state_40676[(9)]);
var inst_40641__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40637) : f.call(null,inst_40637));
var inst_40642__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40641__$1,inst_40634);
var state_40676__$1 = (function (){var statearr_40693 = state_40676;
(statearr_40693[(13)] = inst_40642__$1);

(statearr_40693[(11)] = inst_40641__$1);

return statearr_40693;
})();
if(inst_40642__$1){
var statearr_40694_41275 = state_40676__$1;
(statearr_40694_41275[(1)] = (8));

} else {
var statearr_40695_41276 = state_40676__$1;
(statearr_40695_41276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (14))){
var inst_40641 = (state_40676[(11)]);
var inst_40637 = (state_40676[(9)]);
var inst_40654 = (state_40676[(2)]);
var inst_40655 = [];
var inst_40656 = inst_40655.push(inst_40637);
var inst_40633 = inst_40655;
var inst_40634 = inst_40641;
var state_40676__$1 = (function (){var statearr_40696 = state_40676;
(statearr_40696[(14)] = inst_40656);

(statearr_40696[(15)] = inst_40654);

(statearr_40696[(7)] = inst_40633);

(statearr_40696[(8)] = inst_40634);

return statearr_40696;
})();
var statearr_40697_41277 = state_40676__$1;
(statearr_40697_41277[(2)] = null);

(statearr_40697_41277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (16))){
var state_40676__$1 = state_40676;
var statearr_40698_41278 = state_40676__$1;
(statearr_40698_41278[(2)] = null);

(statearr_40698_41278[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (10))){
var inst_40647 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
if(cljs.core.truth_(inst_40647)){
var statearr_40699_41279 = state_40676__$1;
(statearr_40699_41279[(1)] = (11));

} else {
var statearr_40700_41280 = state_40676__$1;
(statearr_40700_41280[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (18))){
var inst_40666 = (state_40676[(2)]);
var state_40676__$1 = state_40676;
var statearr_40701_41281 = state_40676__$1;
(statearr_40701_41281[(2)] = inst_40666);

(statearr_40701_41281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40677 === (8))){
var inst_40642 = (state_40676[(13)]);
var state_40676__$1 = state_40676;
var statearr_40702_41283 = state_40676__$1;
(statearr_40702_41283[(2)] = inst_40642);

(statearr_40702_41283[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__39059__auto__ = null;
var cljs$core$async$state_machine__39059__auto____0 = (function (){
var statearr_40703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40703[(0)] = cljs$core$async$state_machine__39059__auto__);

(statearr_40703[(1)] = (1));

return statearr_40703;
});
var cljs$core$async$state_machine__39059__auto____1 = (function (state_40676){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_40676);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e40704){var ex__39062__auto__ = e40704;
var statearr_40705_41284 = state_40676;
(statearr_40705_41284[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_40676[(4)]))){
var statearr_40706_41285 = state_40676;
(statearr_40706_41285[(1)] = cljs.core.first((state_40676[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41286 = state_40676;
state_40676 = G__41286;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
cljs$core$async$state_machine__39059__auto__ = function(state_40676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39059__auto____1.call(this,state_40676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39059__auto____0;
cljs$core$async$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39059__auto____1;
return cljs$core$async$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_40707 = f__39096__auto__();
(statearr_40707[(6)] = c__39095__auto___41263);

return statearr_40707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
