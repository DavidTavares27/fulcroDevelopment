goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45708 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45708(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45709 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45709(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45455 = coll;
var G__45456 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45455,G__45456) : shadow.dom.lazy_native_coll_seq.call(null,G__45455,G__45456));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45459 = arguments.length;
switch (G__45459) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45461 = arguments.length;
switch (G__45461) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45463 = arguments.length;
switch (G__45463) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45465 = arguments.length;
switch (G__45465) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45467 = arguments.length;
switch (G__45467) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45469 = arguments.length;
switch (G__45469) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45470){if((e45470 instanceof Object)){
var e = e45470;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45470;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45471 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45472 = null;
var count__45473 = (0);
var i__45474 = (0);
while(true){
if((i__45474 < count__45473)){
var el = chunk__45472.cljs$core$IIndexed$_nth$arity$2(null,i__45474);
var handler_45716__$1 = ((function (seq__45471,chunk__45472,count__45473,i__45474,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45471,chunk__45472,count__45473,i__45474,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45716__$1);


var G__45717 = seq__45471;
var G__45718 = chunk__45472;
var G__45719 = count__45473;
var G__45720 = (i__45474 + (1));
seq__45471 = G__45717;
chunk__45472 = G__45718;
count__45473 = G__45719;
i__45474 = G__45720;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45471);
if(temp__5753__auto__){
var seq__45471__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45471__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45471__$1);
var G__45721 = cljs.core.chunk_rest(seq__45471__$1);
var G__45722 = c__5565__auto__;
var G__45723 = cljs.core.count(c__5565__auto__);
var G__45724 = (0);
seq__45471 = G__45721;
chunk__45472 = G__45722;
count__45473 = G__45723;
i__45474 = G__45724;
continue;
} else {
var el = cljs.core.first(seq__45471__$1);
var handler_45725__$1 = ((function (seq__45471,chunk__45472,count__45473,i__45474,el,seq__45471__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45471,chunk__45472,count__45473,i__45474,el,seq__45471__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45725__$1);


var G__45726 = cljs.core.next(seq__45471__$1);
var G__45727 = null;
var G__45728 = (0);
var G__45729 = (0);
seq__45471 = G__45726;
chunk__45472 = G__45727;
count__45473 = G__45728;
i__45474 = G__45729;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45476 = arguments.length;
switch (G__45476) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45477 = cljs.core.seq(events);
var chunk__45478 = null;
var count__45479 = (0);
var i__45480 = (0);
while(true){
if((i__45480 < count__45479)){
var vec__45487 = chunk__45478.cljs$core$IIndexed$_nth$arity$2(null,i__45480);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45487,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45731 = seq__45477;
var G__45732 = chunk__45478;
var G__45733 = count__45479;
var G__45734 = (i__45480 + (1));
seq__45477 = G__45731;
chunk__45478 = G__45732;
count__45479 = G__45733;
i__45480 = G__45734;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45477);
if(temp__5753__auto__){
var seq__45477__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45477__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45477__$1);
var G__45735 = cljs.core.chunk_rest(seq__45477__$1);
var G__45736 = c__5565__auto__;
var G__45737 = cljs.core.count(c__5565__auto__);
var G__45738 = (0);
seq__45477 = G__45735;
chunk__45478 = G__45736;
count__45479 = G__45737;
i__45480 = G__45738;
continue;
} else {
var vec__45490 = cljs.core.first(seq__45477__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45490,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45739 = cljs.core.next(seq__45477__$1);
var G__45740 = null;
var G__45741 = (0);
var G__45742 = (0);
seq__45477 = G__45739;
chunk__45478 = G__45740;
count__45479 = G__45741;
i__45480 = G__45742;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45493 = cljs.core.seq(styles);
var chunk__45494 = null;
var count__45495 = (0);
var i__45496 = (0);
while(true){
if((i__45496 < count__45495)){
var vec__45503 = chunk__45494.cljs$core$IIndexed$_nth$arity$2(null,i__45496);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45503,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45743 = seq__45493;
var G__45744 = chunk__45494;
var G__45745 = count__45495;
var G__45746 = (i__45496 + (1));
seq__45493 = G__45743;
chunk__45494 = G__45744;
count__45495 = G__45745;
i__45496 = G__45746;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45493);
if(temp__5753__auto__){
var seq__45493__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45493__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45493__$1);
var G__45747 = cljs.core.chunk_rest(seq__45493__$1);
var G__45748 = c__5565__auto__;
var G__45749 = cljs.core.count(c__5565__auto__);
var G__45750 = (0);
seq__45493 = G__45747;
chunk__45494 = G__45748;
count__45495 = G__45749;
i__45496 = G__45750;
continue;
} else {
var vec__45506 = cljs.core.first(seq__45493__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45506,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45506,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45751 = cljs.core.next(seq__45493__$1);
var G__45752 = null;
var G__45753 = (0);
var G__45754 = (0);
seq__45493 = G__45751;
chunk__45494 = G__45752;
count__45495 = G__45753;
i__45496 = G__45754;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45509_45755 = key;
var G__45509_45756__$1 = (((G__45509_45755 instanceof cljs.core.Keyword))?G__45509_45755.fqn:null);
switch (G__45509_45756__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45758 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_45758,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_45758,"aria-");
}
})())){
el.setAttribute(ks_45758,value);
} else {
(el[ks_45758] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45510){
var map__45511 = p__45510;
var map__45511__$1 = cljs.core.__destructure_map(map__45511);
var props = map__45511__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45511__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45512 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45512,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45515 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45515,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45515;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45517 = arguments.length;
switch (G__45517) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45518){
var vec__45519 = p__45518;
var seq__45520 = cljs.core.seq(vec__45519);
var first__45521 = cljs.core.first(seq__45520);
var seq__45520__$1 = cljs.core.next(seq__45520);
var nn = first__45521;
var first__45521__$1 = cljs.core.first(seq__45520__$1);
var seq__45520__$2 = cljs.core.next(seq__45520__$1);
var np = first__45521__$1;
var nc = seq__45520__$2;
var node = vec__45519;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45522 = nn;
var G__45523 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45522,G__45523) : create_fn.call(null,G__45522,G__45523));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45524 = nn;
var G__45525 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45524,G__45525) : create_fn.call(null,G__45524,G__45525));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45526 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45526,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45526,(1),null);
var seq__45529_45760 = cljs.core.seq(node_children);
var chunk__45530_45761 = null;
var count__45531_45762 = (0);
var i__45532_45763 = (0);
while(true){
if((i__45532_45763 < count__45531_45762)){
var child_struct_45764 = chunk__45530_45761.cljs$core$IIndexed$_nth$arity$2(null,i__45532_45763);
var children_45765 = shadow.dom.dom_node(child_struct_45764);
if(cljs.core.seq_QMARK_(children_45765)){
var seq__45545_45766 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45765));
var chunk__45547_45767 = null;
var count__45548_45768 = (0);
var i__45549_45769 = (0);
while(true){
if((i__45549_45769 < count__45548_45768)){
var child_45770 = chunk__45547_45767.cljs$core$IIndexed$_nth$arity$2(null,i__45549_45769);
if(cljs.core.truth_(child_45770)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45770);


var G__45771 = seq__45545_45766;
var G__45772 = chunk__45547_45767;
var G__45773 = count__45548_45768;
var G__45774 = (i__45549_45769 + (1));
seq__45545_45766 = G__45771;
chunk__45547_45767 = G__45772;
count__45548_45768 = G__45773;
i__45549_45769 = G__45774;
continue;
} else {
var G__45775 = seq__45545_45766;
var G__45776 = chunk__45547_45767;
var G__45777 = count__45548_45768;
var G__45778 = (i__45549_45769 + (1));
seq__45545_45766 = G__45775;
chunk__45547_45767 = G__45776;
count__45548_45768 = G__45777;
i__45549_45769 = G__45778;
continue;
}
} else {
var temp__5753__auto___45779 = cljs.core.seq(seq__45545_45766);
if(temp__5753__auto___45779){
var seq__45545_45780__$1 = temp__5753__auto___45779;
if(cljs.core.chunked_seq_QMARK_(seq__45545_45780__$1)){
var c__5565__auto___45781 = cljs.core.chunk_first(seq__45545_45780__$1);
var G__45782 = cljs.core.chunk_rest(seq__45545_45780__$1);
var G__45783 = c__5565__auto___45781;
var G__45784 = cljs.core.count(c__5565__auto___45781);
var G__45785 = (0);
seq__45545_45766 = G__45782;
chunk__45547_45767 = G__45783;
count__45548_45768 = G__45784;
i__45549_45769 = G__45785;
continue;
} else {
var child_45786 = cljs.core.first(seq__45545_45780__$1);
if(cljs.core.truth_(child_45786)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45786);


var G__45787 = cljs.core.next(seq__45545_45780__$1);
var G__45788 = null;
var G__45789 = (0);
var G__45790 = (0);
seq__45545_45766 = G__45787;
chunk__45547_45767 = G__45788;
count__45548_45768 = G__45789;
i__45549_45769 = G__45790;
continue;
} else {
var G__45791 = cljs.core.next(seq__45545_45780__$1);
var G__45792 = null;
var G__45793 = (0);
var G__45794 = (0);
seq__45545_45766 = G__45791;
chunk__45547_45767 = G__45792;
count__45548_45768 = G__45793;
i__45549_45769 = G__45794;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45765);
}


var G__45795 = seq__45529_45760;
var G__45796 = chunk__45530_45761;
var G__45797 = count__45531_45762;
var G__45798 = (i__45532_45763 + (1));
seq__45529_45760 = G__45795;
chunk__45530_45761 = G__45796;
count__45531_45762 = G__45797;
i__45532_45763 = G__45798;
continue;
} else {
var temp__5753__auto___45799 = cljs.core.seq(seq__45529_45760);
if(temp__5753__auto___45799){
var seq__45529_45800__$1 = temp__5753__auto___45799;
if(cljs.core.chunked_seq_QMARK_(seq__45529_45800__$1)){
var c__5565__auto___45801 = cljs.core.chunk_first(seq__45529_45800__$1);
var G__45802 = cljs.core.chunk_rest(seq__45529_45800__$1);
var G__45803 = c__5565__auto___45801;
var G__45804 = cljs.core.count(c__5565__auto___45801);
var G__45805 = (0);
seq__45529_45760 = G__45802;
chunk__45530_45761 = G__45803;
count__45531_45762 = G__45804;
i__45532_45763 = G__45805;
continue;
} else {
var child_struct_45806 = cljs.core.first(seq__45529_45800__$1);
var children_45807 = shadow.dom.dom_node(child_struct_45806);
if(cljs.core.seq_QMARK_(children_45807)){
var seq__45551_45808 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45807));
var chunk__45553_45809 = null;
var count__45554_45810 = (0);
var i__45555_45811 = (0);
while(true){
if((i__45555_45811 < count__45554_45810)){
var child_45812 = chunk__45553_45809.cljs$core$IIndexed$_nth$arity$2(null,i__45555_45811);
if(cljs.core.truth_(child_45812)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45812);


var G__45813 = seq__45551_45808;
var G__45814 = chunk__45553_45809;
var G__45815 = count__45554_45810;
var G__45816 = (i__45555_45811 + (1));
seq__45551_45808 = G__45813;
chunk__45553_45809 = G__45814;
count__45554_45810 = G__45815;
i__45555_45811 = G__45816;
continue;
} else {
var G__45817 = seq__45551_45808;
var G__45818 = chunk__45553_45809;
var G__45819 = count__45554_45810;
var G__45820 = (i__45555_45811 + (1));
seq__45551_45808 = G__45817;
chunk__45553_45809 = G__45818;
count__45554_45810 = G__45819;
i__45555_45811 = G__45820;
continue;
}
} else {
var temp__5753__auto___45821__$1 = cljs.core.seq(seq__45551_45808);
if(temp__5753__auto___45821__$1){
var seq__45551_45822__$1 = temp__5753__auto___45821__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45551_45822__$1)){
var c__5565__auto___45823 = cljs.core.chunk_first(seq__45551_45822__$1);
var G__45824 = cljs.core.chunk_rest(seq__45551_45822__$1);
var G__45825 = c__5565__auto___45823;
var G__45826 = cljs.core.count(c__5565__auto___45823);
var G__45827 = (0);
seq__45551_45808 = G__45824;
chunk__45553_45809 = G__45825;
count__45554_45810 = G__45826;
i__45555_45811 = G__45827;
continue;
} else {
var child_45828 = cljs.core.first(seq__45551_45822__$1);
if(cljs.core.truth_(child_45828)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45828);


var G__45829 = cljs.core.next(seq__45551_45822__$1);
var G__45830 = null;
var G__45831 = (0);
var G__45832 = (0);
seq__45551_45808 = G__45829;
chunk__45553_45809 = G__45830;
count__45554_45810 = G__45831;
i__45555_45811 = G__45832;
continue;
} else {
var G__45833 = cljs.core.next(seq__45551_45822__$1);
var G__45834 = null;
var G__45835 = (0);
var G__45836 = (0);
seq__45551_45808 = G__45833;
chunk__45553_45809 = G__45834;
count__45554_45810 = G__45835;
i__45555_45811 = G__45836;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45807);
}


var G__45837 = cljs.core.next(seq__45529_45800__$1);
var G__45838 = null;
var G__45839 = (0);
var G__45840 = (0);
seq__45529_45760 = G__45837;
chunk__45530_45761 = G__45838;
count__45531_45762 = G__45839;
i__45532_45763 = G__45840;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45558 = cljs.core.seq(node);
var chunk__45559 = null;
var count__45560 = (0);
var i__45561 = (0);
while(true){
if((i__45561 < count__45560)){
var n = chunk__45559.cljs$core$IIndexed$_nth$arity$2(null,i__45561);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45841 = seq__45558;
var G__45842 = chunk__45559;
var G__45843 = count__45560;
var G__45844 = (i__45561 + (1));
seq__45558 = G__45841;
chunk__45559 = G__45842;
count__45560 = G__45843;
i__45561 = G__45844;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45558);
if(temp__5753__auto__){
var seq__45558__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45558__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45558__$1);
var G__45845 = cljs.core.chunk_rest(seq__45558__$1);
var G__45846 = c__5565__auto__;
var G__45847 = cljs.core.count(c__5565__auto__);
var G__45848 = (0);
seq__45558 = G__45845;
chunk__45559 = G__45846;
count__45560 = G__45847;
i__45561 = G__45848;
continue;
} else {
var n = cljs.core.first(seq__45558__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45849 = cljs.core.next(seq__45558__$1);
var G__45850 = null;
var G__45851 = (0);
var G__45852 = (0);
seq__45558 = G__45849;
chunk__45559 = G__45850;
count__45560 = G__45851;
i__45561 = G__45852;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45563 = arguments.length;
switch (G__45563) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45565 = arguments.length;
switch (G__45565) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45567 = arguments.length;
switch (G__45567) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___45856 = arguments.length;
var i__5767__auto___45857 = (0);
while(true){
if((i__5767__auto___45857 < len__5766__auto___45856)){
args__5772__auto__.push((arguments[i__5767__auto___45857]));

var G__45858 = (i__5767__auto___45857 + (1));
i__5767__auto___45857 = G__45858;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45569_45859 = cljs.core.seq(nodes);
var chunk__45570_45860 = null;
var count__45571_45861 = (0);
var i__45572_45862 = (0);
while(true){
if((i__45572_45862 < count__45571_45861)){
var node_45863 = chunk__45570_45860.cljs$core$IIndexed$_nth$arity$2(null,i__45572_45862);
fragment.appendChild(shadow.dom._to_dom(node_45863));


var G__45864 = seq__45569_45859;
var G__45865 = chunk__45570_45860;
var G__45866 = count__45571_45861;
var G__45867 = (i__45572_45862 + (1));
seq__45569_45859 = G__45864;
chunk__45570_45860 = G__45865;
count__45571_45861 = G__45866;
i__45572_45862 = G__45867;
continue;
} else {
var temp__5753__auto___45868 = cljs.core.seq(seq__45569_45859);
if(temp__5753__auto___45868){
var seq__45569_45869__$1 = temp__5753__auto___45868;
if(cljs.core.chunked_seq_QMARK_(seq__45569_45869__$1)){
var c__5565__auto___45870 = cljs.core.chunk_first(seq__45569_45869__$1);
var G__45871 = cljs.core.chunk_rest(seq__45569_45869__$1);
var G__45872 = c__5565__auto___45870;
var G__45873 = cljs.core.count(c__5565__auto___45870);
var G__45874 = (0);
seq__45569_45859 = G__45871;
chunk__45570_45860 = G__45872;
count__45571_45861 = G__45873;
i__45572_45862 = G__45874;
continue;
} else {
var node_45875 = cljs.core.first(seq__45569_45869__$1);
fragment.appendChild(shadow.dom._to_dom(node_45875));


var G__45876 = cljs.core.next(seq__45569_45869__$1);
var G__45877 = null;
var G__45878 = (0);
var G__45879 = (0);
seq__45569_45859 = G__45876;
chunk__45570_45860 = G__45877;
count__45571_45861 = G__45878;
i__45572_45862 = G__45879;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45568){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45568));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45573_45880 = cljs.core.seq(scripts);
var chunk__45574_45881 = null;
var count__45575_45882 = (0);
var i__45576_45883 = (0);
while(true){
if((i__45576_45883 < count__45575_45882)){
var vec__45583_45884 = chunk__45574_45881.cljs$core$IIndexed$_nth$arity$2(null,i__45576_45883);
var script_tag_45885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45583_45884,(0),null);
var script_body_45886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45583_45884,(1),null);
eval(script_body_45886);


var G__45887 = seq__45573_45880;
var G__45888 = chunk__45574_45881;
var G__45889 = count__45575_45882;
var G__45890 = (i__45576_45883 + (1));
seq__45573_45880 = G__45887;
chunk__45574_45881 = G__45888;
count__45575_45882 = G__45889;
i__45576_45883 = G__45890;
continue;
} else {
var temp__5753__auto___45891 = cljs.core.seq(seq__45573_45880);
if(temp__5753__auto___45891){
var seq__45573_45892__$1 = temp__5753__auto___45891;
if(cljs.core.chunked_seq_QMARK_(seq__45573_45892__$1)){
var c__5565__auto___45893 = cljs.core.chunk_first(seq__45573_45892__$1);
var G__45894 = cljs.core.chunk_rest(seq__45573_45892__$1);
var G__45895 = c__5565__auto___45893;
var G__45896 = cljs.core.count(c__5565__auto___45893);
var G__45897 = (0);
seq__45573_45880 = G__45894;
chunk__45574_45881 = G__45895;
count__45575_45882 = G__45896;
i__45576_45883 = G__45897;
continue;
} else {
var vec__45586_45898 = cljs.core.first(seq__45573_45892__$1);
var script_tag_45899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45586_45898,(0),null);
var script_body_45900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45586_45898,(1),null);
eval(script_body_45900);


var G__45901 = cljs.core.next(seq__45573_45892__$1);
var G__45902 = null;
var G__45903 = (0);
var G__45904 = (0);
seq__45573_45880 = G__45901;
chunk__45574_45881 = G__45902;
count__45575_45882 = G__45903;
i__45576_45883 = G__45904;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45589){
var vec__45590 = p__45589;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45590,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45590,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45594 = arguments.length;
switch (G__45594) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45595 = cljs.core.seq(style_keys);
var chunk__45596 = null;
var count__45597 = (0);
var i__45598 = (0);
while(true){
if((i__45598 < count__45597)){
var it = chunk__45596.cljs$core$IIndexed$_nth$arity$2(null,i__45598);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45906 = seq__45595;
var G__45907 = chunk__45596;
var G__45908 = count__45597;
var G__45909 = (i__45598 + (1));
seq__45595 = G__45906;
chunk__45596 = G__45907;
count__45597 = G__45908;
i__45598 = G__45909;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45595);
if(temp__5753__auto__){
var seq__45595__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45595__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__45595__$1);
var G__45910 = cljs.core.chunk_rest(seq__45595__$1);
var G__45911 = c__5565__auto__;
var G__45912 = cljs.core.count(c__5565__auto__);
var G__45913 = (0);
seq__45595 = G__45910;
chunk__45596 = G__45911;
count__45597 = G__45912;
i__45598 = G__45913;
continue;
} else {
var it = cljs.core.first(seq__45595__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45914 = cljs.core.next(seq__45595__$1);
var G__45915 = null;
var G__45916 = (0);
var G__45917 = (0);
seq__45595 = G__45914;
chunk__45596 = G__45915;
count__45597 = G__45916;
i__45598 = G__45917;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k45600,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__45604 = k45600;
var G__45604__$1 = (((G__45604 instanceof cljs.core.Keyword))?G__45604.fqn:null);
switch (G__45604__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45600,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__45605){
var vec__45606 = p__45605;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45606,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45606,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45599){
var self__ = this;
var G__45599__$1 = this;
return (new cljs.core.RecordIter((0),G__45599__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45601,other45602){
var self__ = this;
var this45601__$1 = this;
return (((!((other45602 == null)))) && ((((this45601__$1.constructor === other45602.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45601__$1.x,other45602.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45601__$1.y,other45602.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45601__$1.__extmap,other45602.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k45600){
var self__ = this;
var this__5347__auto____$1 = this;
var G__45609 = k45600;
var G__45609__$1 = (((G__45609 instanceof cljs.core.Keyword))?G__45609.fqn:null);
switch (G__45609__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45600);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__45599){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__45610 = cljs.core.keyword_identical_QMARK_;
var expr__45611 = k__5349__auto__;
if(cljs.core.truth_((pred__45610.cljs$core$IFn$_invoke$arity$2 ? pred__45610.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45611) : pred__45610.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45611)))){
return (new shadow.dom.Coordinate(G__45599,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45610.cljs$core$IFn$_invoke$arity$2 ? pred__45610.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45611) : pred__45610.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45611)))){
return (new shadow.dom.Coordinate(self__.x,G__45599,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__45599),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__45599){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45599,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45603){
var extmap__5382__auto__ = (function (){var G__45613 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45603,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45603)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45613);
} else {
return G__45613;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45603),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45603),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k45615,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__45619 = k45615;
var G__45619__$1 = (((G__45619 instanceof cljs.core.Keyword))?G__45619.fqn:null);
switch (G__45619__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45615,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__45620){
var vec__45621 = p__45620;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45621,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45621,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45614){
var self__ = this;
var G__45614__$1 = this;
return (new cljs.core.RecordIter((0),G__45614__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45616,other45617){
var self__ = this;
var this45616__$1 = this;
return (((!((other45617 == null)))) && ((((this45616__$1.constructor === other45617.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45616__$1.w,other45617.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45616__$1.h,other45617.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45616__$1.__extmap,other45617.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k45615){
var self__ = this;
var this__5347__auto____$1 = this;
var G__45624 = k45615;
var G__45624__$1 = (((G__45624 instanceof cljs.core.Keyword))?G__45624.fqn:null);
switch (G__45624__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45615);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__45614){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__45625 = cljs.core.keyword_identical_QMARK_;
var expr__45626 = k__5349__auto__;
if(cljs.core.truth_((pred__45625.cljs$core$IFn$_invoke$arity$2 ? pred__45625.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45626) : pred__45625.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45626)))){
return (new shadow.dom.Size(G__45614,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45625.cljs$core$IFn$_invoke$arity$2 ? pred__45625.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45626) : pred__45625.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45626)))){
return (new shadow.dom.Size(self__.w,G__45614,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__45614),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__45614){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45614,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45618){
var extmap__5382__auto__ = (function (){var G__45628 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45618,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45618)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45628);
} else {
return G__45628;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45618),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45618),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__45922 = (i + (1));
var G__45923 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45922;
ret = G__45923;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45633){
var vec__45634 = p__45633;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45634,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45634,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45638 = arguments.length;
switch (G__45638) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45925 = ps;
var G__45926 = (i + (1));
el__$1 = G__45925;
i = G__45926;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45639 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45639,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45642_45927 = cljs.core.seq(props);
var chunk__45643_45928 = null;
var count__45644_45929 = (0);
var i__45645_45930 = (0);
while(true){
if((i__45645_45930 < count__45644_45929)){
var vec__45652_45931 = chunk__45643_45928.cljs$core$IIndexed$_nth$arity$2(null,i__45645_45930);
var k_45932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45652_45931,(0),null);
var v_45933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45652_45931,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_45932);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45932),v_45933);


var G__45934 = seq__45642_45927;
var G__45935 = chunk__45643_45928;
var G__45936 = count__45644_45929;
var G__45937 = (i__45645_45930 + (1));
seq__45642_45927 = G__45934;
chunk__45643_45928 = G__45935;
count__45644_45929 = G__45936;
i__45645_45930 = G__45937;
continue;
} else {
var temp__5753__auto___45938 = cljs.core.seq(seq__45642_45927);
if(temp__5753__auto___45938){
var seq__45642_45939__$1 = temp__5753__auto___45938;
if(cljs.core.chunked_seq_QMARK_(seq__45642_45939__$1)){
var c__5565__auto___45940 = cljs.core.chunk_first(seq__45642_45939__$1);
var G__45941 = cljs.core.chunk_rest(seq__45642_45939__$1);
var G__45942 = c__5565__auto___45940;
var G__45943 = cljs.core.count(c__5565__auto___45940);
var G__45944 = (0);
seq__45642_45927 = G__45941;
chunk__45643_45928 = G__45942;
count__45644_45929 = G__45943;
i__45645_45930 = G__45944;
continue;
} else {
var vec__45655_45945 = cljs.core.first(seq__45642_45939__$1);
var k_45946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45655_45945,(0),null);
var v_45947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45655_45945,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_45946);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45946),v_45947);


var G__45948 = cljs.core.next(seq__45642_45939__$1);
var G__45949 = null;
var G__45950 = (0);
var G__45951 = (0);
seq__45642_45927 = G__45948;
chunk__45643_45928 = G__45949;
count__45644_45929 = G__45950;
i__45645_45930 = G__45951;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45659 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45659,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45659,(1),null);
var seq__45662_45952 = cljs.core.seq(node_children);
var chunk__45664_45953 = null;
var count__45665_45954 = (0);
var i__45666_45955 = (0);
while(true){
if((i__45666_45955 < count__45665_45954)){
var child_struct_45956 = chunk__45664_45953.cljs$core$IIndexed$_nth$arity$2(null,i__45666_45955);
if((!((child_struct_45956 == null)))){
if(typeof child_struct_45956 === 'string'){
var text_45957 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45957),child_struct_45956].join(''));
} else {
var children_45958 = shadow.dom.svg_node(child_struct_45956);
if(cljs.core.seq_QMARK_(children_45958)){
var seq__45680_45959 = cljs.core.seq(children_45958);
var chunk__45682_45960 = null;
var count__45683_45961 = (0);
var i__45684_45962 = (0);
while(true){
if((i__45684_45962 < count__45683_45961)){
var child_45963 = chunk__45682_45960.cljs$core$IIndexed$_nth$arity$2(null,i__45684_45962);
if(cljs.core.truth_(child_45963)){
node.appendChild(child_45963);


var G__45964 = seq__45680_45959;
var G__45965 = chunk__45682_45960;
var G__45966 = count__45683_45961;
var G__45967 = (i__45684_45962 + (1));
seq__45680_45959 = G__45964;
chunk__45682_45960 = G__45965;
count__45683_45961 = G__45966;
i__45684_45962 = G__45967;
continue;
} else {
var G__45968 = seq__45680_45959;
var G__45969 = chunk__45682_45960;
var G__45970 = count__45683_45961;
var G__45971 = (i__45684_45962 + (1));
seq__45680_45959 = G__45968;
chunk__45682_45960 = G__45969;
count__45683_45961 = G__45970;
i__45684_45962 = G__45971;
continue;
}
} else {
var temp__5753__auto___45972 = cljs.core.seq(seq__45680_45959);
if(temp__5753__auto___45972){
var seq__45680_45973__$1 = temp__5753__auto___45972;
if(cljs.core.chunked_seq_QMARK_(seq__45680_45973__$1)){
var c__5565__auto___45974 = cljs.core.chunk_first(seq__45680_45973__$1);
var G__45975 = cljs.core.chunk_rest(seq__45680_45973__$1);
var G__45976 = c__5565__auto___45974;
var G__45977 = cljs.core.count(c__5565__auto___45974);
var G__45978 = (0);
seq__45680_45959 = G__45975;
chunk__45682_45960 = G__45976;
count__45683_45961 = G__45977;
i__45684_45962 = G__45978;
continue;
} else {
var child_45979 = cljs.core.first(seq__45680_45973__$1);
if(cljs.core.truth_(child_45979)){
node.appendChild(child_45979);


var G__45980 = cljs.core.next(seq__45680_45973__$1);
var G__45981 = null;
var G__45982 = (0);
var G__45983 = (0);
seq__45680_45959 = G__45980;
chunk__45682_45960 = G__45981;
count__45683_45961 = G__45982;
i__45684_45962 = G__45983;
continue;
} else {
var G__45984 = cljs.core.next(seq__45680_45973__$1);
var G__45985 = null;
var G__45986 = (0);
var G__45987 = (0);
seq__45680_45959 = G__45984;
chunk__45682_45960 = G__45985;
count__45683_45961 = G__45986;
i__45684_45962 = G__45987;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45958);
}
}


var G__45988 = seq__45662_45952;
var G__45989 = chunk__45664_45953;
var G__45990 = count__45665_45954;
var G__45991 = (i__45666_45955 + (1));
seq__45662_45952 = G__45988;
chunk__45664_45953 = G__45989;
count__45665_45954 = G__45990;
i__45666_45955 = G__45991;
continue;
} else {
var G__45992 = seq__45662_45952;
var G__45993 = chunk__45664_45953;
var G__45994 = count__45665_45954;
var G__45995 = (i__45666_45955 + (1));
seq__45662_45952 = G__45992;
chunk__45664_45953 = G__45993;
count__45665_45954 = G__45994;
i__45666_45955 = G__45995;
continue;
}
} else {
var temp__5753__auto___45996 = cljs.core.seq(seq__45662_45952);
if(temp__5753__auto___45996){
var seq__45662_45997__$1 = temp__5753__auto___45996;
if(cljs.core.chunked_seq_QMARK_(seq__45662_45997__$1)){
var c__5565__auto___45998 = cljs.core.chunk_first(seq__45662_45997__$1);
var G__45999 = cljs.core.chunk_rest(seq__45662_45997__$1);
var G__46000 = c__5565__auto___45998;
var G__46001 = cljs.core.count(c__5565__auto___45998);
var G__46002 = (0);
seq__45662_45952 = G__45999;
chunk__45664_45953 = G__46000;
count__45665_45954 = G__46001;
i__45666_45955 = G__46002;
continue;
} else {
var child_struct_46003 = cljs.core.first(seq__45662_45997__$1);
if((!((child_struct_46003 == null)))){
if(typeof child_struct_46003 === 'string'){
var text_46004 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46004),child_struct_46003].join(''));
} else {
var children_46005 = shadow.dom.svg_node(child_struct_46003);
if(cljs.core.seq_QMARK_(children_46005)){
var seq__45686_46006 = cljs.core.seq(children_46005);
var chunk__45688_46007 = null;
var count__45689_46008 = (0);
var i__45690_46009 = (0);
while(true){
if((i__45690_46009 < count__45689_46008)){
var child_46010 = chunk__45688_46007.cljs$core$IIndexed$_nth$arity$2(null,i__45690_46009);
if(cljs.core.truth_(child_46010)){
node.appendChild(child_46010);


var G__46011 = seq__45686_46006;
var G__46012 = chunk__45688_46007;
var G__46013 = count__45689_46008;
var G__46014 = (i__45690_46009 + (1));
seq__45686_46006 = G__46011;
chunk__45688_46007 = G__46012;
count__45689_46008 = G__46013;
i__45690_46009 = G__46014;
continue;
} else {
var G__46015 = seq__45686_46006;
var G__46016 = chunk__45688_46007;
var G__46017 = count__45689_46008;
var G__46018 = (i__45690_46009 + (1));
seq__45686_46006 = G__46015;
chunk__45688_46007 = G__46016;
count__45689_46008 = G__46017;
i__45690_46009 = G__46018;
continue;
}
} else {
var temp__5753__auto___46019__$1 = cljs.core.seq(seq__45686_46006);
if(temp__5753__auto___46019__$1){
var seq__45686_46020__$1 = temp__5753__auto___46019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45686_46020__$1)){
var c__5565__auto___46021 = cljs.core.chunk_first(seq__45686_46020__$1);
var G__46022 = cljs.core.chunk_rest(seq__45686_46020__$1);
var G__46023 = c__5565__auto___46021;
var G__46024 = cljs.core.count(c__5565__auto___46021);
var G__46025 = (0);
seq__45686_46006 = G__46022;
chunk__45688_46007 = G__46023;
count__45689_46008 = G__46024;
i__45690_46009 = G__46025;
continue;
} else {
var child_46026 = cljs.core.first(seq__45686_46020__$1);
if(cljs.core.truth_(child_46026)){
node.appendChild(child_46026);


var G__46027 = cljs.core.next(seq__45686_46020__$1);
var G__46028 = null;
var G__46029 = (0);
var G__46030 = (0);
seq__45686_46006 = G__46027;
chunk__45688_46007 = G__46028;
count__45689_46008 = G__46029;
i__45690_46009 = G__46030;
continue;
} else {
var G__46031 = cljs.core.next(seq__45686_46020__$1);
var G__46032 = null;
var G__46033 = (0);
var G__46034 = (0);
seq__45686_46006 = G__46031;
chunk__45688_46007 = G__46032;
count__45689_46008 = G__46033;
i__45690_46009 = G__46034;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46005);
}
}


var G__46035 = cljs.core.next(seq__45662_45997__$1);
var G__46036 = null;
var G__46037 = (0);
var G__46038 = (0);
seq__45662_45952 = G__46035;
chunk__45664_45953 = G__46036;
count__45665_45954 = G__46037;
i__45666_45955 = G__46038;
continue;
} else {
var G__46039 = cljs.core.next(seq__45662_45997__$1);
var G__46040 = null;
var G__46041 = (0);
var G__46042 = (0);
seq__45662_45952 = G__46039;
chunk__45664_45953 = G__46040;
count__45665_45954 = G__46041;
i__45666_45955 = G__46042;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___46043 = arguments.length;
var i__5767__auto___46044 = (0);
while(true){
if((i__5767__auto___46044 < len__5766__auto___46043)){
args__5772__auto__.push((arguments[i__5767__auto___46044]));

var G__46045 = (i__5767__auto___46044 + (1));
i__5767__auto___46044 = G__46045;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45692){
var G__45693 = cljs.core.first(seq45692);
var seq45692__$1 = cljs.core.next(seq45692);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45693,seq45692__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45695 = arguments.length;
switch (G__45695) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__39095__auto___46047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_45700){
var state_val_45701 = (state_45700[(1)]);
if((state_val_45701 === (1))){
var state_45700__$1 = state_45700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45700__$1,(2),once_or_cleanup);
} else {
if((state_val_45701 === (2))){
var inst_45697 = (state_45700[(2)]);
var inst_45698 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45700__$1 = (function (){var statearr_45702 = state_45700;
(statearr_45702[(7)] = inst_45697);

return statearr_45702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45700__$1,inst_45698);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39059__auto__ = null;
var shadow$dom$state_machine__39059__auto____0 = (function (){
var statearr_45703 = [null,null,null,null,null,null,null,null];
(statearr_45703[(0)] = shadow$dom$state_machine__39059__auto__);

(statearr_45703[(1)] = (1));

return statearr_45703;
});
var shadow$dom$state_machine__39059__auto____1 = (function (state_45700){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_45700);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e45704){var ex__39062__auto__ = e45704;
var statearr_45705_46048 = state_45700;
(statearr_45705_46048[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_45700[(4)]))){
var statearr_45706_46049 = state_45700;
(statearr_45706_46049[(1)] = cljs.core.first((state_45700[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46050 = state_45700;
state_45700 = G__46050;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
shadow$dom$state_machine__39059__auto__ = function(state_45700){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39059__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39059__auto____1.call(this,state_45700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39059__auto____0;
shadow$dom$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39059__auto____1;
return shadow$dom$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_45707 = f__39096__auto__();
(statearr_45707[(6)] = c__39095__auto___46047);

return statearr_45707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
