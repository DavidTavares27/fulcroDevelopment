goog.provide('cljs.core.async.impl.channels');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565 = (function (val,meta37566){
this.val = val;
this.meta37566 = meta37566;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37567,meta37566__$1){
var self__ = this;
var _37567__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565(self__.val,meta37566__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37567){
var self__ = this;
var _37567__$1 = this;
return self__.meta37566;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta37566","meta37566",953841845,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels37565");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels37565");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels37565.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels37565 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels37565(val__$1,meta37566){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565(val__$1,meta37566));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels37565(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_37584 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_37584(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_37586 = self__.puts.pop();
if((putter_37586 == null)){
} else {
var put_handler_37587 = putter_37586.handler;
var val_37588 = putter_37586.val;
if(put_handler_37587.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_37590 = put_handler_37587.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_37590,put_handler_37587,val_37588,putter_37586,this$__$1){
return (function (){
return (put_cb_37590.cljs$core$IFn$_invoke$arity$1 ? put_cb_37590.cljs$core$IFn$_invoke$arity$1(true) : put_cb_37590.call(null,true));
});})(put_cb_37590,put_handler_37587,val_37588,putter_37586,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(closed__$1){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

return cljs.core.async.impl.channels.box(false);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__5041__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__37591 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__37591;
continue;
} else {
var G__37592 = takers;
takers = G__37592;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__37568_37593 = cljs.core.seq(take_cbs);
var chunk__37569_37594 = null;
var count__37570_37595 = (0);
var i__37571_37596 = (0);
while(true){
if((i__37571_37596 < count__37570_37595)){
var f_37597 = chunk__37569_37594.cljs$core$IIndexed$_nth$arity$2(null,i__37571_37596);
cljs.core.async.impl.dispatch.run(f_37597);


var G__37598 = seq__37568_37593;
var G__37599 = chunk__37569_37594;
var G__37600 = count__37570_37595;
var G__37601 = (i__37571_37596 + (1));
seq__37568_37593 = G__37598;
chunk__37569_37594 = G__37599;
count__37570_37595 = G__37600;
i__37571_37596 = G__37601;
continue;
} else {
var temp__5753__auto___37602 = cljs.core.seq(seq__37568_37593);
if(temp__5753__auto___37602){
var seq__37568_37603__$1 = temp__5753__auto___37602;
if(cljs.core.chunked_seq_QMARK_(seq__37568_37603__$1)){
var c__5565__auto___37604 = cljs.core.chunk_first(seq__37568_37603__$1);
var G__37605 = cljs.core.chunk_rest(seq__37568_37603__$1);
var G__37606 = c__5565__auto___37604;
var G__37607 = cljs.core.count(c__5565__auto___37604);
var G__37608 = (0);
seq__37568_37593 = G__37605;
chunk__37569_37594 = G__37606;
count__37570_37595 = G__37607;
i__37571_37596 = G__37608;
continue;
} else {
var f_37609 = cljs.core.first(seq__37568_37603__$1);
cljs.core.async.impl.dispatch.run(f_37609);


var G__37610 = cljs.core.next(seq__37568_37603__$1);
var G__37611 = null;
var G__37612 = (0);
var G__37613 = (0);
seq__37568_37593 = G__37610;
chunk__37569_37594 = G__37611;
count__37570_37595 = G__37612;
i__37571_37596 = G__37613;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5751__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5751__auto__)){
var take_cb = temp__5751__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__37572 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5041__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__5041__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))))){
var G__37615 = cbs__$1;
cbs = G__37615;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37572,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37572,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__37575_37617 = cljs.core.seq(cbs);
var chunk__37576_37618 = null;
var count__37577_37619 = (0);
var i__37578_37620 = (0);
while(true){
if((i__37578_37620 < count__37577_37619)){
var cb_37621 = chunk__37576_37618.cljs$core$IIndexed$_nth$arity$2(null,i__37578_37620);
cljs.core.async.impl.dispatch.run(((function (seq__37575_37617,chunk__37576_37618,count__37577_37619,i__37578_37620,cb_37621,val,vec__37572,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_37621.cljs$core$IFn$_invoke$arity$1 ? cb_37621.cljs$core$IFn$_invoke$arity$1(true) : cb_37621.call(null,true));
});})(seq__37575_37617,chunk__37576_37618,count__37577_37619,i__37578_37620,cb_37621,val,vec__37572,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__37622 = seq__37575_37617;
var G__37623 = chunk__37576_37618;
var G__37624 = count__37577_37619;
var G__37625 = (i__37578_37620 + (1));
seq__37575_37617 = G__37622;
chunk__37576_37618 = G__37623;
count__37577_37619 = G__37624;
i__37578_37620 = G__37625;
continue;
} else {
var temp__5753__auto___37626 = cljs.core.seq(seq__37575_37617);
if(temp__5753__auto___37626){
var seq__37575_37627__$1 = temp__5753__auto___37626;
if(cljs.core.chunked_seq_QMARK_(seq__37575_37627__$1)){
var c__5565__auto___37628 = cljs.core.chunk_first(seq__37575_37627__$1);
var G__37629 = cljs.core.chunk_rest(seq__37575_37627__$1);
var G__37630 = c__5565__auto___37628;
var G__37631 = cljs.core.count(c__5565__auto___37628);
var G__37632 = (0);
seq__37575_37617 = G__37629;
chunk__37576_37618 = G__37630;
count__37577_37619 = G__37631;
i__37578_37620 = G__37632;
continue;
} else {
var cb_37633 = cljs.core.first(seq__37575_37627__$1);
cljs.core.async.impl.dispatch.run(((function (seq__37575_37617,chunk__37576_37618,count__37577_37619,i__37578_37620,cb_37633,seq__37575_37627__$1,temp__5753__auto___37626,val,vec__37572,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1){
return (function (){
return (cb_37633.cljs$core$IFn$_invoke$arity$1 ? cb_37633.cljs$core$IFn$_invoke$arity$1(true) : cb_37633.call(null,true));
});})(seq__37575_37617,chunk__37576_37618,count__37577_37619,i__37578_37620,cb_37633,seq__37575_37627__$1,temp__5753__auto___37626,val,vec__37572,done_QMARK_,cbs,take_cb,temp__5751__auto__,this$__$1))
);


var G__37634 = cljs.core.next(seq__37575_37627__$1);
var G__37635 = null;
var G__37636 = (0);
var G__37637 = (0);
seq__37575_37617 = G__37634;
chunk__37576_37618 = G__37635;
count__37577_37619 = G__37636;
i__37578_37620 = G__37637;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__5041__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})())){
var has_val = (function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5041__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return (self__.puts.length === (0));
} else {
return and__5041__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_37640 = self__.takes.pop();
if((taker_37640 == null)){
} else {
if(taker_37640.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_37641 = taker_37640.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_37642 = (cljs.core.truth_((function (){var and__5041__auto__ = self__.buf;
if(cljs.core.truth_(and__5041__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5041__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_37641,val_37642,taker_37640,this$__$1){
return (function (){
return (take_cb_37641.cljs$core$IFn$_invoke$arity$1 ? take_cb_37641.cljs$core$IFn$_invoke$arity$1(val_37642) : take_cb_37641.call(null,val_37642));
});})(take_cb_37641,val_37642,taker_37640,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__37579 = (function (){var or__5043__auto__ = exh;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__37579.cljs$core$IFn$_invoke$arity$1 ? fexpr__37579.cljs$core$IFn$_invoke$arity$1(t) : fexpr__37579.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__37581 = arguments.length;
switch (G__37581) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__37644 = null;
var G__37644__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e37582){var t = e37582;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__37644__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e37583){var t = e37583;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__37644 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__37644__1.call(this,buf__$1);
case 2:
return G__37644__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37644.cljs$core$IFn$_invoke$arity$1 = G__37644__1;
G__37644.cljs$core$IFn$_invoke$arity$2 = G__37644__2;
return G__37644;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
