goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__52603){
var vec__52604 = p__52603;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52604,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52604,(1),null);
var pair = vec__52604;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__52607){
var vec__52608 = p__52607;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52608,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52608,(1),null);
var pair = vec__52608;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__52611){
var vec__52612 = p__52611;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52612,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52612,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__52615 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52615,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__52615;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * Equivalent to React.renderToString. NOTE: You must make sure js/ReactDOMServer is defined (e.g. require cljsjs.react.dom.server) to use this function.
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__52617 = arguments.length;
switch (G__52617) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__52618 = component.refs;
var G__52618__$1 = (((G__52618 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__52618,name));
if((G__52618__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__52618__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5751__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5751__auto__)){
var ref = temp__5751__auto__;
var G__52619 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__52620 = (function (){var G__52621 = r;
if((G__52621 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__52621);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__52620) : ref.call(null,G__52620));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__52619) : factory.call(null,G__52619));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__52626 = arguments.length;
switch (G__52626) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5791__auto__ = [];
var len__5766__auto___53063 = arguments.length;
var i__5767__auto___53064 = (0);
while(true){
if((i__5767__auto___53064 < len__5766__auto___53063)){
args_arr__5791__auto__.push((arguments[i__5767__auto___53064]));

var G__53065 = (i__5767__auto___53064 + (1));
i__5767__auto___53064 = G__53065;
continue;
} else {
}
break;
}

var argseq__5792__auto__ = (new cljs.core.IndexedSeq(args_arr__5791__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5792__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq52623){
var G__52624 = cljs.core.first(seq52623);
var seq52623__$1 = cljs.core.next(seq52623);
var G__52625 = cljs.core.first(seq52623__$1);
var seq52623__$2 = cljs.core.next(seq52623__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52624,G__52625,seq52623__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5041__auto__ = tag;
if(cljs.core.truth_(and__5041__auto__)){
var G__52627 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__52627) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__52627));
} else {
return and__5041__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x52629_53066 = ctor.prototype;
(x52629_53066.onChange = (function (event){
var this$ = this;
var temp__5753__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5753__auto__)){
var handler = temp__5753__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x52629_53066.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__52628_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__52628_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5041__auto__ = state_value;
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = element_value;
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,181,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,2000499756,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x52629_53066.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__53067__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__53067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53068__i = 0, G__53068__a = new Array(arguments.length -  0);
while (G__53068__i < G__53068__a.length) {G__53068__a[G__53068__i] = arguments[G__53068__i + 0]; ++G__53068__i;}
  args = new cljs.core.IndexedSeq(G__53068__a,0,null);
} 
return G__53067__delegate.call(this,args);};
G__53067.cljs$lang$maxFixedArity = 0;
G__53067.cljs$lang$applyTo = (function (arglist__53069){
var args = cljs.core.seq(arglist__53069);
return G__53067__delegate(args);
});
G__53067.cljs$core$IFn$_invoke$arity$variadic = G__53067__delegate;
return G__53067;
})()
;
return (function() { 
var G__53070__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5751__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5751__auto__)){
var r = temp__5751__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__53070 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__53071__i = 0, G__53071__a = new Array(arguments.length -  1);
while (G__53071__i < G__53071__a.length) {G__53071__a[G__53071__i] = arguments[G__53071__i + 1]; ++G__53071__i;}
  children = new cljs.core.IndexedSeq(G__53071__a,0,null);
} 
return G__53070__delegate.call(this,props,children);};
G__53070.cljs$lang$maxFixedArity = 1;
G__53070.cljs$lang$applyTo = (function (arglist__53072){
var props = cljs.core.first(arglist__53072);
var children = cljs.core.rest(arglist__53072);
return G__53070__delegate(props,children);
});
G__53070.cljs$core$IFn$_invoke$arity$variadic = G__53070__delegate;
return G__53070;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__52630 = tag;
switch (G__52630) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52630)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__52632 = arguments.length;
switch (G__52632) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__52633 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__52634 = cljs.core.seq(vec__52633);
var first__52635 = cljs.core.first(seq__52634);
var seq__52634__$1 = cljs.core.next(seq__52634);
var head = first__52635;
var tail = seq__52634__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__52636 = (function (){var G__52637 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52637,tail);

return G__52637;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52636) : f.call(null,G__52636));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__52638 = (function (){var G__52639 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52639,args);

return G__52639;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52638) : f.call(null,G__52638));
} else {
if(cljs.core.object_QMARK_(head)){
var G__52640 = (function (){var G__52641 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52641,tail);

return G__52641;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52640) : f.call(null,G__52640));
} else {
if(cljs.core.map_QMARK_(head)){
var G__52642 = (function (){var G__52643 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__52643,tail);

return G__52643;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52642) : f.call(null,G__52642));
} else {
var G__52644 = (function (){var G__52645 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52645,args);

return G__52645;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52644) : f.call(null,G__52644));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__52647 = arguments.length;
switch (G__52647) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__52648 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__52649 = cljs.core.seq(vec__52648);
var first__52650 = cljs.core.first(seq__52649);
var seq__52649__$1 = cljs.core.next(seq__52649);
var head = first__52650;
var tail = seq__52649__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52651 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52651,tail);

return G__52651;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52652 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52652,args);

return G__52652;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52653 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52653,tail);

return G__52653;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52654 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__52654,tail);

return G__52654;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__52655 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__52655,args);

return G__52655;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53076 = arguments.length;
var i__5767__auto___53077 = (0);
while(true){
if((i__5767__auto___53077 < len__5766__auto___53076)){
args__5772__auto__.push((arguments[i__5767__auto___53077]));

var G__53078 = (i__5767__auto___53077 + (1));
i__5767__auto___53077 = G__53078;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52657 = conformed_args__51391__auto__;
var map__52657__$1 = cljs.core.__destructure_map(map__52657);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq52656){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52656));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53079 = arguments.length;
var i__5767__auto___53080 = (0);
while(true){
if((i__5767__auto___53080 < len__5766__auto___53079)){
args__5772__auto__.push((arguments[i__5767__auto___53080]));

var G__53081 = (i__5767__auto___53080 + (1));
i__5767__auto___53080 = G__53081;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52659 = conformed_args__51391__auto__;
var map__52659__$1 = cljs.core.__destructure_map(map__52659);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq52658){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52658));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53082 = arguments.length;
var i__5767__auto___53083 = (0);
while(true){
if((i__5767__auto___53083 < len__5766__auto___53082)){
args__5772__auto__.push((arguments[i__5767__auto___53083]));

var G__53084 = (i__5767__auto___53083 + (1));
i__5767__auto___53083 = G__53084;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52661 = conformed_args__51391__auto__;
var map__52661__$1 = cljs.core.__destructure_map(map__52661);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq52660){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52660));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53085 = arguments.length;
var i__5767__auto___53086 = (0);
while(true){
if((i__5767__auto___53086 < len__5766__auto___53085)){
args__5772__auto__.push((arguments[i__5767__auto___53086]));

var G__53087 = (i__5767__auto___53086 + (1));
i__5767__auto___53086 = G__53087;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52663 = conformed_args__51391__auto__;
var map__52663__$1 = cljs.core.__destructure_map(map__52663);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq52662){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52662));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53088 = arguments.length;
var i__5767__auto___53089 = (0);
while(true){
if((i__5767__auto___53089 < len__5766__auto___53088)){
args__5772__auto__.push((arguments[i__5767__auto___53089]));

var G__53090 = (i__5767__auto___53089 + (1));
i__5767__auto___53089 = G__53090;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52665 = conformed_args__51391__auto__;
var map__52665__$1 = cljs.core.__destructure_map(map__52665);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq52664){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52664));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53091 = arguments.length;
var i__5767__auto___53092 = (0);
while(true){
if((i__5767__auto___53092 < len__5766__auto___53091)){
args__5772__auto__.push((arguments[i__5767__auto___53092]));

var G__53093 = (i__5767__auto___53092 + (1));
i__5767__auto___53092 = G__53093;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52667 = conformed_args__51391__auto__;
var map__52667__$1 = cljs.core.__destructure_map(map__52667);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq52666){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52666));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53094 = arguments.length;
var i__5767__auto___53095 = (0);
while(true){
if((i__5767__auto___53095 < len__5766__auto___53094)){
args__5772__auto__.push((arguments[i__5767__auto___53095]));

var G__53096 = (i__5767__auto___53095 + (1));
i__5767__auto___53095 = G__53096;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52669 = conformed_args__51391__auto__;
var map__52669__$1 = cljs.core.__destructure_map(map__52669);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq52668){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52668));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53097 = arguments.length;
var i__5767__auto___53098 = (0);
while(true){
if((i__5767__auto___53098 < len__5766__auto___53097)){
args__5772__auto__.push((arguments[i__5767__auto___53098]));

var G__53099 = (i__5767__auto___53098 + (1));
i__5767__auto___53098 = G__53099;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52671 = conformed_args__51391__auto__;
var map__52671__$1 = cljs.core.__destructure_map(map__52671);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq52670){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52670));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53100 = arguments.length;
var i__5767__auto___53101 = (0);
while(true){
if((i__5767__auto___53101 < len__5766__auto___53100)){
args__5772__auto__.push((arguments[i__5767__auto___53101]));

var G__53102 = (i__5767__auto___53101 + (1));
i__5767__auto___53101 = G__53102;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52673 = conformed_args__51391__auto__;
var map__52673__$1 = cljs.core.__destructure_map(map__52673);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq52672){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52672));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53103 = arguments.length;
var i__5767__auto___53104 = (0);
while(true){
if((i__5767__auto___53104 < len__5766__auto___53103)){
args__5772__auto__.push((arguments[i__5767__auto___53104]));

var G__53105 = (i__5767__auto___53104 + (1));
i__5767__auto___53104 = G__53105;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52675 = conformed_args__51391__auto__;
var map__52675__$1 = cljs.core.__destructure_map(map__52675);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52675__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52675__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52675__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq52674){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52674));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53106 = arguments.length;
var i__5767__auto___53107 = (0);
while(true){
if((i__5767__auto___53107 < len__5766__auto___53106)){
args__5772__auto__.push((arguments[i__5767__auto___53107]));

var G__53108 = (i__5767__auto___53107 + (1));
i__5767__auto___53107 = G__53108;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52677 = conformed_args__51391__auto__;
var map__52677__$1 = cljs.core.__destructure_map(map__52677);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq52676){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52676));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53109 = arguments.length;
var i__5767__auto___53110 = (0);
while(true){
if((i__5767__auto___53110 < len__5766__auto___53109)){
args__5772__auto__.push((arguments[i__5767__auto___53110]));

var G__53111 = (i__5767__auto___53110 + (1));
i__5767__auto___53110 = G__53111;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52679 = conformed_args__51391__auto__;
var map__52679__$1 = cljs.core.__destructure_map(map__52679);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52679__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52679__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52679__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq52678){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52678));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53112 = arguments.length;
var i__5767__auto___53113 = (0);
while(true){
if((i__5767__auto___53113 < len__5766__auto___53112)){
args__5772__auto__.push((arguments[i__5767__auto___53113]));

var G__53114 = (i__5767__auto___53113 + (1));
i__5767__auto___53113 = G__53114;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52681 = conformed_args__51391__auto__;
var map__52681__$1 = cljs.core.__destructure_map(map__52681);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq52680){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52680));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53115 = arguments.length;
var i__5767__auto___53116 = (0);
while(true){
if((i__5767__auto___53116 < len__5766__auto___53115)){
args__5772__auto__.push((arguments[i__5767__auto___53116]));

var G__53117 = (i__5767__auto___53116 + (1));
i__5767__auto___53116 = G__53117;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52683 = conformed_args__51391__auto__;
var map__52683__$1 = cljs.core.__destructure_map(map__52683);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq52682){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52682));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53118 = arguments.length;
var i__5767__auto___53119 = (0);
while(true){
if((i__5767__auto___53119 < len__5766__auto___53118)){
args__5772__auto__.push((arguments[i__5767__auto___53119]));

var G__53120 = (i__5767__auto___53119 + (1));
i__5767__auto___53119 = G__53120;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52685 = conformed_args__51391__auto__;
var map__52685__$1 = cljs.core.__destructure_map(map__52685);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq52684){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52684));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53121 = arguments.length;
var i__5767__auto___53122 = (0);
while(true){
if((i__5767__auto___53122 < len__5766__auto___53121)){
args__5772__auto__.push((arguments[i__5767__auto___53122]));

var G__53123 = (i__5767__auto___53122 + (1));
i__5767__auto___53122 = G__53123;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52687 = conformed_args__51391__auto__;
var map__52687__$1 = cljs.core.__destructure_map(map__52687);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq52686){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52686));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53124 = arguments.length;
var i__5767__auto___53125 = (0);
while(true){
if((i__5767__auto___53125 < len__5766__auto___53124)){
args__5772__auto__.push((arguments[i__5767__auto___53125]));

var G__53126 = (i__5767__auto___53125 + (1));
i__5767__auto___53125 = G__53126;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52689 = conformed_args__51391__auto__;
var map__52689__$1 = cljs.core.__destructure_map(map__52689);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52689__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq52688){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52688));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53127 = arguments.length;
var i__5767__auto___53128 = (0);
while(true){
if((i__5767__auto___53128 < len__5766__auto___53127)){
args__5772__auto__.push((arguments[i__5767__auto___53128]));

var G__53129 = (i__5767__auto___53128 + (1));
i__5767__auto___53128 = G__53129;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52691 = conformed_args__51391__auto__;
var map__52691__$1 = cljs.core.__destructure_map(map__52691);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq52690){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52690));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53130 = arguments.length;
var i__5767__auto___53131 = (0);
while(true){
if((i__5767__auto___53131 < len__5766__auto___53130)){
args__5772__auto__.push((arguments[i__5767__auto___53131]));

var G__53132 = (i__5767__auto___53131 + (1));
i__5767__auto___53131 = G__53132;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52693 = conformed_args__51391__auto__;
var map__52693__$1 = cljs.core.__destructure_map(map__52693);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq52692){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52692));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53133 = arguments.length;
var i__5767__auto___53134 = (0);
while(true){
if((i__5767__auto___53134 < len__5766__auto___53133)){
args__5772__auto__.push((arguments[i__5767__auto___53134]));

var G__53135 = (i__5767__auto___53134 + (1));
i__5767__auto___53134 = G__53135;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52695 = conformed_args__51391__auto__;
var map__52695__$1 = cljs.core.__destructure_map(map__52695);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq52694){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52694));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53136 = arguments.length;
var i__5767__auto___53137 = (0);
while(true){
if((i__5767__auto___53137 < len__5766__auto___53136)){
args__5772__auto__.push((arguments[i__5767__auto___53137]));

var G__53138 = (i__5767__auto___53137 + (1));
i__5767__auto___53137 = G__53138;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52697 = conformed_args__51391__auto__;
var map__52697__$1 = cljs.core.__destructure_map(map__52697);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq52696){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52696));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53139 = arguments.length;
var i__5767__auto___53140 = (0);
while(true){
if((i__5767__auto___53140 < len__5766__auto___53139)){
args__5772__auto__.push((arguments[i__5767__auto___53140]));

var G__53141 = (i__5767__auto___53140 + (1));
i__5767__auto___53140 = G__53141;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52699 = conformed_args__51391__auto__;
var map__52699__$1 = cljs.core.__destructure_map(map__52699);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq52698){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52698));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53142 = arguments.length;
var i__5767__auto___53143 = (0);
while(true){
if((i__5767__auto___53143 < len__5766__auto___53142)){
args__5772__auto__.push((arguments[i__5767__auto___53143]));

var G__53144 = (i__5767__auto___53143 + (1));
i__5767__auto___53143 = G__53144;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52701 = conformed_args__51391__auto__;
var map__52701__$1 = cljs.core.__destructure_map(map__52701);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq52700){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52700));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53145 = arguments.length;
var i__5767__auto___53146 = (0);
while(true){
if((i__5767__auto___53146 < len__5766__auto___53145)){
args__5772__auto__.push((arguments[i__5767__auto___53146]));

var G__53147 = (i__5767__auto___53146 + (1));
i__5767__auto___53146 = G__53147;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52703 = conformed_args__51391__auto__;
var map__52703__$1 = cljs.core.__destructure_map(map__52703);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq52702){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52702));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53148 = arguments.length;
var i__5767__auto___53149 = (0);
while(true){
if((i__5767__auto___53149 < len__5766__auto___53148)){
args__5772__auto__.push((arguments[i__5767__auto___53149]));

var G__53150 = (i__5767__auto___53149 + (1));
i__5767__auto___53149 = G__53150;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52705 = conformed_args__51391__auto__;
var map__52705__$1 = cljs.core.__destructure_map(map__52705);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52705__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52705__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52705__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq52704){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52704));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53151 = arguments.length;
var i__5767__auto___53152 = (0);
while(true){
if((i__5767__auto___53152 < len__5766__auto___53151)){
args__5772__auto__.push((arguments[i__5767__auto___53152]));

var G__53153 = (i__5767__auto___53152 + (1));
i__5767__auto___53152 = G__53153;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52707 = conformed_args__51391__auto__;
var map__52707__$1 = cljs.core.__destructure_map(map__52707);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52707__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq52706){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52706));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53154 = arguments.length;
var i__5767__auto___53155 = (0);
while(true){
if((i__5767__auto___53155 < len__5766__auto___53154)){
args__5772__auto__.push((arguments[i__5767__auto___53155]));

var G__53156 = (i__5767__auto___53155 + (1));
i__5767__auto___53155 = G__53156;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52709 = conformed_args__51391__auto__;
var map__52709__$1 = cljs.core.__destructure_map(map__52709);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq52708){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52708));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53157 = arguments.length;
var i__5767__auto___53158 = (0);
while(true){
if((i__5767__auto___53158 < len__5766__auto___53157)){
args__5772__auto__.push((arguments[i__5767__auto___53158]));

var G__53159 = (i__5767__auto___53158 + (1));
i__5767__auto___53158 = G__53159;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52711 = conformed_args__51391__auto__;
var map__52711__$1 = cljs.core.__destructure_map(map__52711);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq52710){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52710));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53160 = arguments.length;
var i__5767__auto___53161 = (0);
while(true){
if((i__5767__auto___53161 < len__5766__auto___53160)){
args__5772__auto__.push((arguments[i__5767__auto___53161]));

var G__53162 = (i__5767__auto___53161 + (1));
i__5767__auto___53161 = G__53162;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52713 = conformed_args__51391__auto__;
var map__52713__$1 = cljs.core.__destructure_map(map__52713);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52713__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq52712){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52712));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53163 = arguments.length;
var i__5767__auto___53164 = (0);
while(true){
if((i__5767__auto___53164 < len__5766__auto___53163)){
args__5772__auto__.push((arguments[i__5767__auto___53164]));

var G__53165 = (i__5767__auto___53164 + (1));
i__5767__auto___53164 = G__53165;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52715 = conformed_args__51391__auto__;
var map__52715__$1 = cljs.core.__destructure_map(map__52715);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq52714){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52714));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53166 = arguments.length;
var i__5767__auto___53167 = (0);
while(true){
if((i__5767__auto___53167 < len__5766__auto___53166)){
args__5772__auto__.push((arguments[i__5767__auto___53167]));

var G__53168 = (i__5767__auto___53167 + (1));
i__5767__auto___53167 = G__53168;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52717 = conformed_args__51391__auto__;
var map__52717__$1 = cljs.core.__destructure_map(map__52717);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq52716){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52716));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53169 = arguments.length;
var i__5767__auto___53170 = (0);
while(true){
if((i__5767__auto___53170 < len__5766__auto___53169)){
args__5772__auto__.push((arguments[i__5767__auto___53170]));

var G__53171 = (i__5767__auto___53170 + (1));
i__5767__auto___53170 = G__53171;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52719 = conformed_args__51391__auto__;
var map__52719__$1 = cljs.core.__destructure_map(map__52719);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq52718){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52718));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53172 = arguments.length;
var i__5767__auto___53173 = (0);
while(true){
if((i__5767__auto___53173 < len__5766__auto___53172)){
args__5772__auto__.push((arguments[i__5767__auto___53173]));

var G__53174 = (i__5767__auto___53173 + (1));
i__5767__auto___53173 = G__53174;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52721 = conformed_args__51391__auto__;
var map__52721__$1 = cljs.core.__destructure_map(map__52721);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq52720){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52720));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53175 = arguments.length;
var i__5767__auto___53176 = (0);
while(true){
if((i__5767__auto___53176 < len__5766__auto___53175)){
args__5772__auto__.push((arguments[i__5767__auto___53176]));

var G__53177 = (i__5767__auto___53176 + (1));
i__5767__auto___53176 = G__53177;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52723 = conformed_args__51391__auto__;
var map__52723__$1 = cljs.core.__destructure_map(map__52723);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52723__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq52722){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52722));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53178 = arguments.length;
var i__5767__auto___53179 = (0);
while(true){
if((i__5767__auto___53179 < len__5766__auto___53178)){
args__5772__auto__.push((arguments[i__5767__auto___53179]));

var G__53180 = (i__5767__auto___53179 + (1));
i__5767__auto___53179 = G__53180;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52725 = conformed_args__51391__auto__;
var map__52725__$1 = cljs.core.__destructure_map(map__52725);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq52724){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52724));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53181 = arguments.length;
var i__5767__auto___53182 = (0);
while(true){
if((i__5767__auto___53182 < len__5766__auto___53181)){
args__5772__auto__.push((arguments[i__5767__auto___53182]));

var G__53183 = (i__5767__auto___53182 + (1));
i__5767__auto___53182 = G__53183;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52727 = conformed_args__51391__auto__;
var map__52727__$1 = cljs.core.__destructure_map(map__52727);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq52726){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52726));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53184 = arguments.length;
var i__5767__auto___53185 = (0);
while(true){
if((i__5767__auto___53185 < len__5766__auto___53184)){
args__5772__auto__.push((arguments[i__5767__auto___53185]));

var G__53186 = (i__5767__auto___53185 + (1));
i__5767__auto___53185 = G__53186;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52729 = conformed_args__51391__auto__;
var map__52729__$1 = cljs.core.__destructure_map(map__52729);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq52728){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52728));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53187 = arguments.length;
var i__5767__auto___53188 = (0);
while(true){
if((i__5767__auto___53188 < len__5766__auto___53187)){
args__5772__auto__.push((arguments[i__5767__auto___53188]));

var G__53189 = (i__5767__auto___53188 + (1));
i__5767__auto___53188 = G__53189;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52731 = conformed_args__51391__auto__;
var map__52731__$1 = cljs.core.__destructure_map(map__52731);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq52730){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52730));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53190 = arguments.length;
var i__5767__auto___53191 = (0);
while(true){
if((i__5767__auto___53191 < len__5766__auto___53190)){
args__5772__auto__.push((arguments[i__5767__auto___53191]));

var G__53192 = (i__5767__auto___53191 + (1));
i__5767__auto___53191 = G__53192;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52733 = conformed_args__51391__auto__;
var map__52733__$1 = cljs.core.__destructure_map(map__52733);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq52732){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52732));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53193 = arguments.length;
var i__5767__auto___53194 = (0);
while(true){
if((i__5767__auto___53194 < len__5766__auto___53193)){
args__5772__auto__.push((arguments[i__5767__auto___53194]));

var G__53195 = (i__5767__auto___53194 + (1));
i__5767__auto___53194 = G__53195;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52735 = conformed_args__51391__auto__;
var map__52735__$1 = cljs.core.__destructure_map(map__52735);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq52734){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52734));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53196 = arguments.length;
var i__5767__auto___53197 = (0);
while(true){
if((i__5767__auto___53197 < len__5766__auto___53196)){
args__5772__auto__.push((arguments[i__5767__auto___53197]));

var G__53198 = (i__5767__auto___53197 + (1));
i__5767__auto___53197 = G__53198;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52737 = conformed_args__51391__auto__;
var map__52737__$1 = cljs.core.__destructure_map(map__52737);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq52736){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52736));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53199 = arguments.length;
var i__5767__auto___53200 = (0);
while(true){
if((i__5767__auto___53200 < len__5766__auto___53199)){
args__5772__auto__.push((arguments[i__5767__auto___53200]));

var G__53201 = (i__5767__auto___53200 + (1));
i__5767__auto___53200 = G__53201;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52739 = conformed_args__51391__auto__;
var map__52739__$1 = cljs.core.__destructure_map(map__52739);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq52738){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52738));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53202 = arguments.length;
var i__5767__auto___53203 = (0);
while(true){
if((i__5767__auto___53203 < len__5766__auto___53202)){
args__5772__auto__.push((arguments[i__5767__auto___53203]));

var G__53204 = (i__5767__auto___53203 + (1));
i__5767__auto___53203 = G__53204;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52741 = conformed_args__51391__auto__;
var map__52741__$1 = cljs.core.__destructure_map(map__52741);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq52740){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52740));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53205 = arguments.length;
var i__5767__auto___53206 = (0);
while(true){
if((i__5767__auto___53206 < len__5766__auto___53205)){
args__5772__auto__.push((arguments[i__5767__auto___53206]));

var G__53207 = (i__5767__auto___53206 + (1));
i__5767__auto___53206 = G__53207;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52743 = conformed_args__51391__auto__;
var map__52743__$1 = cljs.core.__destructure_map(map__52743);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52743__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52743__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52743__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq52742){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52742));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53208 = arguments.length;
var i__5767__auto___53209 = (0);
while(true){
if((i__5767__auto___53209 < len__5766__auto___53208)){
args__5772__auto__.push((arguments[i__5767__auto___53209]));

var G__53210 = (i__5767__auto___53209 + (1));
i__5767__auto___53209 = G__53210;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52745 = conformed_args__51391__auto__;
var map__52745__$1 = cljs.core.__destructure_map(map__52745);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq52744){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52744));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53211 = arguments.length;
var i__5767__auto___53212 = (0);
while(true){
if((i__5767__auto___53212 < len__5766__auto___53211)){
args__5772__auto__.push((arguments[i__5767__auto___53212]));

var G__53213 = (i__5767__auto___53212 + (1));
i__5767__auto___53212 = G__53213;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52747 = conformed_args__51391__auto__;
var map__52747__$1 = cljs.core.__destructure_map(map__52747);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq52746){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52746));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53214 = arguments.length;
var i__5767__auto___53215 = (0);
while(true){
if((i__5767__auto___53215 < len__5766__auto___53214)){
args__5772__auto__.push((arguments[i__5767__auto___53215]));

var G__53216 = (i__5767__auto___53215 + (1));
i__5767__auto___53215 = G__53216;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52749 = conformed_args__51391__auto__;
var map__52749__$1 = cljs.core.__destructure_map(map__52749);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52749__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52749__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52749__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq52748){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52748));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53217 = arguments.length;
var i__5767__auto___53218 = (0);
while(true){
if((i__5767__auto___53218 < len__5766__auto___53217)){
args__5772__auto__.push((arguments[i__5767__auto___53218]));

var G__53219 = (i__5767__auto___53218 + (1));
i__5767__auto___53218 = G__53219;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52751 = conformed_args__51391__auto__;
var map__52751__$1 = cljs.core.__destructure_map(map__52751);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq52750){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52750));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53220 = arguments.length;
var i__5767__auto___53221 = (0);
while(true){
if((i__5767__auto___53221 < len__5766__auto___53220)){
args__5772__auto__.push((arguments[i__5767__auto___53221]));

var G__53222 = (i__5767__auto___53221 + (1));
i__5767__auto___53221 = G__53222;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52753 = conformed_args__51391__auto__;
var map__52753__$1 = cljs.core.__destructure_map(map__52753);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq52752){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52752));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53223 = arguments.length;
var i__5767__auto___53224 = (0);
while(true){
if((i__5767__auto___53224 < len__5766__auto___53223)){
args__5772__auto__.push((arguments[i__5767__auto___53224]));

var G__53225 = (i__5767__auto___53224 + (1));
i__5767__auto___53224 = G__53225;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52755 = conformed_args__51391__auto__;
var map__52755__$1 = cljs.core.__destructure_map(map__52755);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52755__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq52754){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52754));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53226 = arguments.length;
var i__5767__auto___53227 = (0);
while(true){
if((i__5767__auto___53227 < len__5766__auto___53226)){
args__5772__auto__.push((arguments[i__5767__auto___53227]));

var G__53228 = (i__5767__auto___53227 + (1));
i__5767__auto___53227 = G__53228;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52757 = conformed_args__51391__auto__;
var map__52757__$1 = cljs.core.__destructure_map(map__52757);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq52756){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52756));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53229 = arguments.length;
var i__5767__auto___53230 = (0);
while(true){
if((i__5767__auto___53230 < len__5766__auto___53229)){
args__5772__auto__.push((arguments[i__5767__auto___53230]));

var G__53231 = (i__5767__auto___53230 + (1));
i__5767__auto___53230 = G__53231;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52759 = conformed_args__51391__auto__;
var map__52759__$1 = cljs.core.__destructure_map(map__52759);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52759__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52759__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52759__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq52758){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52758));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53232 = arguments.length;
var i__5767__auto___53233 = (0);
while(true){
if((i__5767__auto___53233 < len__5766__auto___53232)){
args__5772__auto__.push((arguments[i__5767__auto___53233]));

var G__53234 = (i__5767__auto___53233 + (1));
i__5767__auto___53233 = G__53234;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52761 = conformed_args__51391__auto__;
var map__52761__$1 = cljs.core.__destructure_map(map__52761);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52761__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52761__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52761__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq52760){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52760));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53235 = arguments.length;
var i__5767__auto___53236 = (0);
while(true){
if((i__5767__auto___53236 < len__5766__auto___53235)){
args__5772__auto__.push((arguments[i__5767__auto___53236]));

var G__53237 = (i__5767__auto___53236 + (1));
i__5767__auto___53236 = G__53237;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52763 = conformed_args__51391__auto__;
var map__52763__$1 = cljs.core.__destructure_map(map__52763);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52763__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52763__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52763__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq52762){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52762));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53238 = arguments.length;
var i__5767__auto___53239 = (0);
while(true){
if((i__5767__auto___53239 < len__5766__auto___53238)){
args__5772__auto__.push((arguments[i__5767__auto___53239]));

var G__53240 = (i__5767__auto___53239 + (1));
i__5767__auto___53239 = G__53240;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52765 = conformed_args__51391__auto__;
var map__52765__$1 = cljs.core.__destructure_map(map__52765);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq52764){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52764));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53241 = arguments.length;
var i__5767__auto___53242 = (0);
while(true){
if((i__5767__auto___53242 < len__5766__auto___53241)){
args__5772__auto__.push((arguments[i__5767__auto___53242]));

var G__53243 = (i__5767__auto___53242 + (1));
i__5767__auto___53242 = G__53243;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52767 = conformed_args__51391__auto__;
var map__52767__$1 = cljs.core.__destructure_map(map__52767);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq52766){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52766));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53244 = arguments.length;
var i__5767__auto___53245 = (0);
while(true){
if((i__5767__auto___53245 < len__5766__auto___53244)){
args__5772__auto__.push((arguments[i__5767__auto___53245]));

var G__53246 = (i__5767__auto___53245 + (1));
i__5767__auto___53245 = G__53246;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52769 = conformed_args__51391__auto__;
var map__52769__$1 = cljs.core.__destructure_map(map__52769);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52769__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52769__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52769__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq52768){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52768));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53247 = arguments.length;
var i__5767__auto___53248 = (0);
while(true){
if((i__5767__auto___53248 < len__5766__auto___53247)){
args__5772__auto__.push((arguments[i__5767__auto___53248]));

var G__53249 = (i__5767__auto___53248 + (1));
i__5767__auto___53248 = G__53249;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52771 = conformed_args__51391__auto__;
var map__52771__$1 = cljs.core.__destructure_map(map__52771);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq52770){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52770));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53250 = arguments.length;
var i__5767__auto___53251 = (0);
while(true){
if((i__5767__auto___53251 < len__5766__auto___53250)){
args__5772__auto__.push((arguments[i__5767__auto___53251]));

var G__53252 = (i__5767__auto___53251 + (1));
i__5767__auto___53251 = G__53252;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52773 = conformed_args__51391__auto__;
var map__52773__$1 = cljs.core.__destructure_map(map__52773);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52773__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52773__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52773__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq52772){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52772));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53253 = arguments.length;
var i__5767__auto___53254 = (0);
while(true){
if((i__5767__auto___53254 < len__5766__auto___53253)){
args__5772__auto__.push((arguments[i__5767__auto___53254]));

var G__53255 = (i__5767__auto___53254 + (1));
i__5767__auto___53254 = G__53255;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52775 = conformed_args__51391__auto__;
var map__52775__$1 = cljs.core.__destructure_map(map__52775);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq52774){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52774));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53256 = arguments.length;
var i__5767__auto___53257 = (0);
while(true){
if((i__5767__auto___53257 < len__5766__auto___53256)){
args__5772__auto__.push((arguments[i__5767__auto___53257]));

var G__53258 = (i__5767__auto___53257 + (1));
i__5767__auto___53257 = G__53258;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52777 = conformed_args__51391__auto__;
var map__52777__$1 = cljs.core.__destructure_map(map__52777);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq52776){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52776));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53259 = arguments.length;
var i__5767__auto___53260 = (0);
while(true){
if((i__5767__auto___53260 < len__5766__auto___53259)){
args__5772__auto__.push((arguments[i__5767__auto___53260]));

var G__53261 = (i__5767__auto___53260 + (1));
i__5767__auto___53260 = G__53261;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52779 = conformed_args__51391__auto__;
var map__52779__$1 = cljs.core.__destructure_map(map__52779);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq52778){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52778));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53262 = arguments.length;
var i__5767__auto___53263 = (0);
while(true){
if((i__5767__auto___53263 < len__5766__auto___53262)){
args__5772__auto__.push((arguments[i__5767__auto___53263]));

var G__53264 = (i__5767__auto___53263 + (1));
i__5767__auto___53263 = G__53264;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52781 = conformed_args__51391__auto__;
var map__52781__$1 = cljs.core.__destructure_map(map__52781);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52781__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52781__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52781__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq52780){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52780));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53265 = arguments.length;
var i__5767__auto___53266 = (0);
while(true){
if((i__5767__auto___53266 < len__5766__auto___53265)){
args__5772__auto__.push((arguments[i__5767__auto___53266]));

var G__53267 = (i__5767__auto___53266 + (1));
i__5767__auto___53266 = G__53267;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52783 = conformed_args__51391__auto__;
var map__52783__$1 = cljs.core.__destructure_map(map__52783);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq52782){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52782));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53268 = arguments.length;
var i__5767__auto___53269 = (0);
while(true){
if((i__5767__auto___53269 < len__5766__auto___53268)){
args__5772__auto__.push((arguments[i__5767__auto___53269]));

var G__53270 = (i__5767__auto___53269 + (1));
i__5767__auto___53269 = G__53270;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52785 = conformed_args__51391__auto__;
var map__52785__$1 = cljs.core.__destructure_map(map__52785);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52785__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52785__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52785__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq52784){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52784));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53271 = arguments.length;
var i__5767__auto___53272 = (0);
while(true){
if((i__5767__auto___53272 < len__5766__auto___53271)){
args__5772__auto__.push((arguments[i__5767__auto___53272]));

var G__53273 = (i__5767__auto___53272 + (1));
i__5767__auto___53272 = G__53273;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52787 = conformed_args__51391__auto__;
var map__52787__$1 = cljs.core.__destructure_map(map__52787);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq52786){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52786));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53274 = arguments.length;
var i__5767__auto___53275 = (0);
while(true){
if((i__5767__auto___53275 < len__5766__auto___53274)){
args__5772__auto__.push((arguments[i__5767__auto___53275]));

var G__53276 = (i__5767__auto___53275 + (1));
i__5767__auto___53275 = G__53276;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52789 = conformed_args__51391__auto__;
var map__52789__$1 = cljs.core.__destructure_map(map__52789);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52789__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq52788){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52788));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53277 = arguments.length;
var i__5767__auto___53278 = (0);
while(true){
if((i__5767__auto___53278 < len__5766__auto___53277)){
args__5772__auto__.push((arguments[i__5767__auto___53278]));

var G__53279 = (i__5767__auto___53278 + (1));
i__5767__auto___53278 = G__53279;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52791 = conformed_args__51391__auto__;
var map__52791__$1 = cljs.core.__destructure_map(map__52791);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq52790){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52790));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53280 = arguments.length;
var i__5767__auto___53281 = (0);
while(true){
if((i__5767__auto___53281 < len__5766__auto___53280)){
args__5772__auto__.push((arguments[i__5767__auto___53281]));

var G__53282 = (i__5767__auto___53281 + (1));
i__5767__auto___53281 = G__53282;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52793 = conformed_args__51391__auto__;
var map__52793__$1 = cljs.core.__destructure_map(map__52793);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq52792){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52792));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53283 = arguments.length;
var i__5767__auto___53284 = (0);
while(true){
if((i__5767__auto___53284 < len__5766__auto___53283)){
args__5772__auto__.push((arguments[i__5767__auto___53284]));

var G__53285 = (i__5767__auto___53284 + (1));
i__5767__auto___53284 = G__53285;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52795 = conformed_args__51391__auto__;
var map__52795__$1 = cljs.core.__destructure_map(map__52795);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq52794){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52794));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53286 = arguments.length;
var i__5767__auto___53287 = (0);
while(true){
if((i__5767__auto___53287 < len__5766__auto___53286)){
args__5772__auto__.push((arguments[i__5767__auto___53287]));

var G__53288 = (i__5767__auto___53287 + (1));
i__5767__auto___53287 = G__53288;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52797 = conformed_args__51391__auto__;
var map__52797__$1 = cljs.core.__destructure_map(map__52797);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52797__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52797__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq52796){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52796));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53289 = arguments.length;
var i__5767__auto___53290 = (0);
while(true){
if((i__5767__auto___53290 < len__5766__auto___53289)){
args__5772__auto__.push((arguments[i__5767__auto___53290]));

var G__53291 = (i__5767__auto___53290 + (1));
i__5767__auto___53290 = G__53291;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52799 = conformed_args__51391__auto__;
var map__52799__$1 = cljs.core.__destructure_map(map__52799);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq52798){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52798));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53292 = arguments.length;
var i__5767__auto___53293 = (0);
while(true){
if((i__5767__auto___53293 < len__5766__auto___53292)){
args__5772__auto__.push((arguments[i__5767__auto___53293]));

var G__53294 = (i__5767__auto___53293 + (1));
i__5767__auto___53293 = G__53294;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52801 = conformed_args__51391__auto__;
var map__52801__$1 = cljs.core.__destructure_map(map__52801);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq52800){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52800));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53295 = arguments.length;
var i__5767__auto___53296 = (0);
while(true){
if((i__5767__auto___53296 < len__5766__auto___53295)){
args__5772__auto__.push((arguments[i__5767__auto___53296]));

var G__53297 = (i__5767__auto___53296 + (1));
i__5767__auto___53296 = G__53297;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52803 = conformed_args__51391__auto__;
var map__52803__$1 = cljs.core.__destructure_map(map__52803);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52803__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq52802){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52802));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53298 = arguments.length;
var i__5767__auto___53299 = (0);
while(true){
if((i__5767__auto___53299 < len__5766__auto___53298)){
args__5772__auto__.push((arguments[i__5767__auto___53299]));

var G__53300 = (i__5767__auto___53299 + (1));
i__5767__auto___53299 = G__53300;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52805 = conformed_args__51391__auto__;
var map__52805__$1 = cljs.core.__destructure_map(map__52805);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52805__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq52804){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52804));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53301 = arguments.length;
var i__5767__auto___53302 = (0);
while(true){
if((i__5767__auto___53302 < len__5766__auto___53301)){
args__5772__auto__.push((arguments[i__5767__auto___53302]));

var G__53303 = (i__5767__auto___53302 + (1));
i__5767__auto___53302 = G__53303;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52807 = conformed_args__51391__auto__;
var map__52807__$1 = cljs.core.__destructure_map(map__52807);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52807__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq52806){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52806));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53304 = arguments.length;
var i__5767__auto___53305 = (0);
while(true){
if((i__5767__auto___53305 < len__5766__auto___53304)){
args__5772__auto__.push((arguments[i__5767__auto___53305]));

var G__53306 = (i__5767__auto___53305 + (1));
i__5767__auto___53305 = G__53306;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52809 = conformed_args__51391__auto__;
var map__52809__$1 = cljs.core.__destructure_map(map__52809);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq52808){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52808));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53307 = arguments.length;
var i__5767__auto___53308 = (0);
while(true){
if((i__5767__auto___53308 < len__5766__auto___53307)){
args__5772__auto__.push((arguments[i__5767__auto___53308]));

var G__53309 = (i__5767__auto___53308 + (1));
i__5767__auto___53308 = G__53309;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52811 = conformed_args__51391__auto__;
var map__52811__$1 = cljs.core.__destructure_map(map__52811);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq52810){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52810));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53310 = arguments.length;
var i__5767__auto___53311 = (0);
while(true){
if((i__5767__auto___53311 < len__5766__auto___53310)){
args__5772__auto__.push((arguments[i__5767__auto___53311]));

var G__53312 = (i__5767__auto___53311 + (1));
i__5767__auto___53311 = G__53312;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52813 = conformed_args__51391__auto__;
var map__52813__$1 = cljs.core.__destructure_map(map__52813);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq52812){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52812));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53313 = arguments.length;
var i__5767__auto___53314 = (0);
while(true){
if((i__5767__auto___53314 < len__5766__auto___53313)){
args__5772__auto__.push((arguments[i__5767__auto___53314]));

var G__53315 = (i__5767__auto___53314 + (1));
i__5767__auto___53314 = G__53315;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52815 = conformed_args__51391__auto__;
var map__52815__$1 = cljs.core.__destructure_map(map__52815);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52815__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52815__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52815__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq52814){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52814));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53316 = arguments.length;
var i__5767__auto___53317 = (0);
while(true){
if((i__5767__auto___53317 < len__5766__auto___53316)){
args__5772__auto__.push((arguments[i__5767__auto___53317]));

var G__53318 = (i__5767__auto___53317 + (1));
i__5767__auto___53317 = G__53318;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52817 = conformed_args__51391__auto__;
var map__52817__$1 = cljs.core.__destructure_map(map__52817);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52817__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52817__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52817__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq52816){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52816));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53319 = arguments.length;
var i__5767__auto___53320 = (0);
while(true){
if((i__5767__auto___53320 < len__5766__auto___53319)){
args__5772__auto__.push((arguments[i__5767__auto___53320]));

var G__53321 = (i__5767__auto___53320 + (1));
i__5767__auto___53320 = G__53321;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52819 = conformed_args__51391__auto__;
var map__52819__$1 = cljs.core.__destructure_map(map__52819);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq52818){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52818));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53322 = arguments.length;
var i__5767__auto___53323 = (0);
while(true){
if((i__5767__auto___53323 < len__5766__auto___53322)){
args__5772__auto__.push((arguments[i__5767__auto___53323]));

var G__53324 = (i__5767__auto___53323 + (1));
i__5767__auto___53323 = G__53324;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52821 = conformed_args__51391__auto__;
var map__52821__$1 = cljs.core.__destructure_map(map__52821);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52821__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52821__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq52820){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52820));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53325 = arguments.length;
var i__5767__auto___53326 = (0);
while(true){
if((i__5767__auto___53326 < len__5766__auto___53325)){
args__5772__auto__.push((arguments[i__5767__auto___53326]));

var G__53327 = (i__5767__auto___53326 + (1));
i__5767__auto___53326 = G__53327;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52823 = conformed_args__51391__auto__;
var map__52823__$1 = cljs.core.__destructure_map(map__52823);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq52822){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52822));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53328 = arguments.length;
var i__5767__auto___53329 = (0);
while(true){
if((i__5767__auto___53329 < len__5766__auto___53328)){
args__5772__auto__.push((arguments[i__5767__auto___53329]));

var G__53330 = (i__5767__auto___53329 + (1));
i__5767__auto___53329 = G__53330;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52825 = conformed_args__51391__auto__;
var map__52825__$1 = cljs.core.__destructure_map(map__52825);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq52824){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52824));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53331 = arguments.length;
var i__5767__auto___53332 = (0);
while(true){
if((i__5767__auto___53332 < len__5766__auto___53331)){
args__5772__auto__.push((arguments[i__5767__auto___53332]));

var G__53333 = (i__5767__auto___53332 + (1));
i__5767__auto___53332 = G__53333;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52827 = conformed_args__51391__auto__;
var map__52827__$1 = cljs.core.__destructure_map(map__52827);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52827__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52827__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52827__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq52826){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52826));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53334 = arguments.length;
var i__5767__auto___53335 = (0);
while(true){
if((i__5767__auto___53335 < len__5766__auto___53334)){
args__5772__auto__.push((arguments[i__5767__auto___53335]));

var G__53336 = (i__5767__auto___53335 + (1));
i__5767__auto___53335 = G__53336;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52829 = conformed_args__51391__auto__;
var map__52829__$1 = cljs.core.__destructure_map(map__52829);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq52828){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52828));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53337 = arguments.length;
var i__5767__auto___53338 = (0);
while(true){
if((i__5767__auto___53338 < len__5766__auto___53337)){
args__5772__auto__.push((arguments[i__5767__auto___53338]));

var G__53339 = (i__5767__auto___53338 + (1));
i__5767__auto___53338 = G__53339;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52831 = conformed_args__51391__auto__;
var map__52831__$1 = cljs.core.__destructure_map(map__52831);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq52830){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52830));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53340 = arguments.length;
var i__5767__auto___53341 = (0);
while(true){
if((i__5767__auto___53341 < len__5766__auto___53340)){
args__5772__auto__.push((arguments[i__5767__auto___53341]));

var G__53342 = (i__5767__auto___53341 + (1));
i__5767__auto___53341 = G__53342;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52833 = conformed_args__51391__auto__;
var map__52833__$1 = cljs.core.__destructure_map(map__52833);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq52832){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52832));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53343 = arguments.length;
var i__5767__auto___53344 = (0);
while(true){
if((i__5767__auto___53344 < len__5766__auto___53343)){
args__5772__auto__.push((arguments[i__5767__auto___53344]));

var G__53345 = (i__5767__auto___53344 + (1));
i__5767__auto___53344 = G__53345;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52835 = conformed_args__51391__auto__;
var map__52835__$1 = cljs.core.__destructure_map(map__52835);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52835__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52835__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52835__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq52834){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52834));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53346 = arguments.length;
var i__5767__auto___53347 = (0);
while(true){
if((i__5767__auto___53347 < len__5766__auto___53346)){
args__5772__auto__.push((arguments[i__5767__auto___53347]));

var G__53348 = (i__5767__auto___53347 + (1));
i__5767__auto___53347 = G__53348;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52837 = conformed_args__51391__auto__;
var map__52837__$1 = cljs.core.__destructure_map(map__52837);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq52836){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52836));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53349 = arguments.length;
var i__5767__auto___53350 = (0);
while(true){
if((i__5767__auto___53350 < len__5766__auto___53349)){
args__5772__auto__.push((arguments[i__5767__auto___53350]));

var G__53351 = (i__5767__auto___53350 + (1));
i__5767__auto___53350 = G__53351;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52839 = conformed_args__51391__auto__;
var map__52839__$1 = cljs.core.__destructure_map(map__52839);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52839__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52839__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52839__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq52838){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52838));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53352 = arguments.length;
var i__5767__auto___53353 = (0);
while(true){
if((i__5767__auto___53353 < len__5766__auto___53352)){
args__5772__auto__.push((arguments[i__5767__auto___53353]));

var G__53354 = (i__5767__auto___53353 + (1));
i__5767__auto___53353 = G__53354;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52841 = conformed_args__51391__auto__;
var map__52841__$1 = cljs.core.__destructure_map(map__52841);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52841__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52841__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52841__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq52840){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52840));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53355 = arguments.length;
var i__5767__auto___53356 = (0);
while(true){
if((i__5767__auto___53356 < len__5766__auto___53355)){
args__5772__auto__.push((arguments[i__5767__auto___53356]));

var G__53357 = (i__5767__auto___53356 + (1));
i__5767__auto___53356 = G__53357;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52843 = conformed_args__51391__auto__;
var map__52843__$1 = cljs.core.__destructure_map(map__52843);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52843__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52843__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52843__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq52842){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52842));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53358 = arguments.length;
var i__5767__auto___53359 = (0);
while(true){
if((i__5767__auto___53359 < len__5766__auto___53358)){
args__5772__auto__.push((arguments[i__5767__auto___53359]));

var G__53360 = (i__5767__auto___53359 + (1));
i__5767__auto___53359 = G__53360;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52845 = conformed_args__51391__auto__;
var map__52845__$1 = cljs.core.__destructure_map(map__52845);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq52844){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52844));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53361 = arguments.length;
var i__5767__auto___53362 = (0);
while(true){
if((i__5767__auto___53362 < len__5766__auto___53361)){
args__5772__auto__.push((arguments[i__5767__auto___53362]));

var G__53363 = (i__5767__auto___53362 + (1));
i__5767__auto___53362 = G__53363;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52847 = conformed_args__51391__auto__;
var map__52847__$1 = cljs.core.__destructure_map(map__52847);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52847__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52847__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52847__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq52846){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52846));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53364 = arguments.length;
var i__5767__auto___53365 = (0);
while(true){
if((i__5767__auto___53365 < len__5766__auto___53364)){
args__5772__auto__.push((arguments[i__5767__auto___53365]));

var G__53366 = (i__5767__auto___53365 + (1));
i__5767__auto___53365 = G__53366;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52849 = conformed_args__51391__auto__;
var map__52849__$1 = cljs.core.__destructure_map(map__52849);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq52848){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52848));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53367 = arguments.length;
var i__5767__auto___53368 = (0);
while(true){
if((i__5767__auto___53368 < len__5766__auto___53367)){
args__5772__auto__.push((arguments[i__5767__auto___53368]));

var G__53369 = (i__5767__auto___53368 + (1));
i__5767__auto___53368 = G__53369;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52851 = conformed_args__51391__auto__;
var map__52851__$1 = cljs.core.__destructure_map(map__52851);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq52850){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52850));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53370 = arguments.length;
var i__5767__auto___53371 = (0);
while(true){
if((i__5767__auto___53371 < len__5766__auto___53370)){
args__5772__auto__.push((arguments[i__5767__auto___53371]));

var G__53372 = (i__5767__auto___53371 + (1));
i__5767__auto___53371 = G__53372;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52853 = conformed_args__51391__auto__;
var map__52853__$1 = cljs.core.__destructure_map(map__52853);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52853__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52853__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52853__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq52852){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52852));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53373 = arguments.length;
var i__5767__auto___53374 = (0);
while(true){
if((i__5767__auto___53374 < len__5766__auto___53373)){
args__5772__auto__.push((arguments[i__5767__auto___53374]));

var G__53375 = (i__5767__auto___53374 + (1));
i__5767__auto___53374 = G__53375;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52855 = conformed_args__51391__auto__;
var map__52855__$1 = cljs.core.__destructure_map(map__52855);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq52854){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52854));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53376 = arguments.length;
var i__5767__auto___53377 = (0);
while(true){
if((i__5767__auto___53377 < len__5766__auto___53376)){
args__5772__auto__.push((arguments[i__5767__auto___53377]));

var G__53378 = (i__5767__auto___53377 + (1));
i__5767__auto___53377 = G__53378;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52857 = conformed_args__51391__auto__;
var map__52857__$1 = cljs.core.__destructure_map(map__52857);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52857__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52857__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52857__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq52856){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52856));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53379 = arguments.length;
var i__5767__auto___53380 = (0);
while(true){
if((i__5767__auto___53380 < len__5766__auto___53379)){
args__5772__auto__.push((arguments[i__5767__auto___53380]));

var G__53381 = (i__5767__auto___53380 + (1));
i__5767__auto___53380 = G__53381;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52859 = conformed_args__51391__auto__;
var map__52859__$1 = cljs.core.__destructure_map(map__52859);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq52858){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52858));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53382 = arguments.length;
var i__5767__auto___53383 = (0);
while(true){
if((i__5767__auto___53383 < len__5766__auto___53382)){
args__5772__auto__.push((arguments[i__5767__auto___53383]));

var G__53384 = (i__5767__auto___53383 + (1));
i__5767__auto___53383 = G__53384;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52861 = conformed_args__51391__auto__;
var map__52861__$1 = cljs.core.__destructure_map(map__52861);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52861__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52861__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52861__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq52860){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52860));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53385 = arguments.length;
var i__5767__auto___53386 = (0);
while(true){
if((i__5767__auto___53386 < len__5766__auto___53385)){
args__5772__auto__.push((arguments[i__5767__auto___53386]));

var G__53387 = (i__5767__auto___53386 + (1));
i__5767__auto___53386 = G__53387;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52863 = conformed_args__51391__auto__;
var map__52863__$1 = cljs.core.__destructure_map(map__52863);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq52862){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52862));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53388 = arguments.length;
var i__5767__auto___53389 = (0);
while(true){
if((i__5767__auto___53389 < len__5766__auto___53388)){
args__5772__auto__.push((arguments[i__5767__auto___53389]));

var G__53390 = (i__5767__auto___53389 + (1));
i__5767__auto___53389 = G__53390;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52865 = conformed_args__51391__auto__;
var map__52865__$1 = cljs.core.__destructure_map(map__52865);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq52864){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52864));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53391 = arguments.length;
var i__5767__auto___53392 = (0);
while(true){
if((i__5767__auto___53392 < len__5766__auto___53391)){
args__5772__auto__.push((arguments[i__5767__auto___53392]));

var G__53393 = (i__5767__auto___53392 + (1));
i__5767__auto___53392 = G__53393;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52867 = conformed_args__51391__auto__;
var map__52867__$1 = cljs.core.__destructure_map(map__52867);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq52866){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52866));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53394 = arguments.length;
var i__5767__auto___53395 = (0);
while(true){
if((i__5767__auto___53395 < len__5766__auto___53394)){
args__5772__auto__.push((arguments[i__5767__auto___53395]));

var G__53396 = (i__5767__auto___53395 + (1));
i__5767__auto___53395 = G__53396;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52869 = conformed_args__51391__auto__;
var map__52869__$1 = cljs.core.__destructure_map(map__52869);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq52868){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52868));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53397 = arguments.length;
var i__5767__auto___53398 = (0);
while(true){
if((i__5767__auto___53398 < len__5766__auto___53397)){
args__5772__auto__.push((arguments[i__5767__auto___53398]));

var G__53399 = (i__5767__auto___53398 + (1));
i__5767__auto___53398 = G__53399;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52871 = conformed_args__51391__auto__;
var map__52871__$1 = cljs.core.__destructure_map(map__52871);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq52870){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52870));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53400 = arguments.length;
var i__5767__auto___53401 = (0);
while(true){
if((i__5767__auto___53401 < len__5766__auto___53400)){
args__5772__auto__.push((arguments[i__5767__auto___53401]));

var G__53402 = (i__5767__auto___53401 + (1));
i__5767__auto___53401 = G__53402;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52873 = conformed_args__51391__auto__;
var map__52873__$1 = cljs.core.__destructure_map(map__52873);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52873__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52873__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52873__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq52872){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52872));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53403 = arguments.length;
var i__5767__auto___53404 = (0);
while(true){
if((i__5767__auto___53404 < len__5766__auto___53403)){
args__5772__auto__.push((arguments[i__5767__auto___53404]));

var G__53405 = (i__5767__auto___53404 + (1));
i__5767__auto___53404 = G__53405;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52875 = conformed_args__51391__auto__;
var map__52875__$1 = cljs.core.__destructure_map(map__52875);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52875__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52875__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52875__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq52874){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52874));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53406 = arguments.length;
var i__5767__auto___53407 = (0);
while(true){
if((i__5767__auto___53407 < len__5766__auto___53406)){
args__5772__auto__.push((arguments[i__5767__auto___53407]));

var G__53408 = (i__5767__auto___53407 + (1));
i__5767__auto___53407 = G__53408;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52877 = conformed_args__51391__auto__;
var map__52877__$1 = cljs.core.__destructure_map(map__52877);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq52876){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52876));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53409 = arguments.length;
var i__5767__auto___53410 = (0);
while(true){
if((i__5767__auto___53410 < len__5766__auto___53409)){
args__5772__auto__.push((arguments[i__5767__auto___53410]));

var G__53411 = (i__5767__auto___53410 + (1));
i__5767__auto___53410 = G__53411;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52879 = conformed_args__51391__auto__;
var map__52879__$1 = cljs.core.__destructure_map(map__52879);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq52878){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52878));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53412 = arguments.length;
var i__5767__auto___53413 = (0);
while(true){
if((i__5767__auto___53413 < len__5766__auto___53412)){
args__5772__auto__.push((arguments[i__5767__auto___53413]));

var G__53414 = (i__5767__auto___53413 + (1));
i__5767__auto___53413 = G__53414;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52881 = conformed_args__51391__auto__;
var map__52881__$1 = cljs.core.__destructure_map(map__52881);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq52880){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52880));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53415 = arguments.length;
var i__5767__auto___53416 = (0);
while(true){
if((i__5767__auto___53416 < len__5766__auto___53415)){
args__5772__auto__.push((arguments[i__5767__auto___53416]));

var G__53417 = (i__5767__auto___53416 + (1));
i__5767__auto___53416 = G__53417;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52883 = conformed_args__51391__auto__;
var map__52883__$1 = cljs.core.__destructure_map(map__52883);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52883__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52883__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52883__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq52882){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52882));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53418 = arguments.length;
var i__5767__auto___53419 = (0);
while(true){
if((i__5767__auto___53419 < len__5766__auto___53418)){
args__5772__auto__.push((arguments[i__5767__auto___53419]));

var G__53420 = (i__5767__auto___53419 + (1));
i__5767__auto___53419 = G__53420;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52885 = conformed_args__51391__auto__;
var map__52885__$1 = cljs.core.__destructure_map(map__52885);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52885__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq52884){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52884));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53421 = arguments.length;
var i__5767__auto___53422 = (0);
while(true){
if((i__5767__auto___53422 < len__5766__auto___53421)){
args__5772__auto__.push((arguments[i__5767__auto___53422]));

var G__53423 = (i__5767__auto___53422 + (1));
i__5767__auto___53422 = G__53423;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52887 = conformed_args__51391__auto__;
var map__52887__$1 = cljs.core.__destructure_map(map__52887);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52887__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq52886){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52886));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53424 = arguments.length;
var i__5767__auto___53425 = (0);
while(true){
if((i__5767__auto___53425 < len__5766__auto___53424)){
args__5772__auto__.push((arguments[i__5767__auto___53425]));

var G__53426 = (i__5767__auto___53425 + (1));
i__5767__auto___53425 = G__53426;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52889 = conformed_args__51391__auto__;
var map__52889__$1 = cljs.core.__destructure_map(map__52889);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq52888){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52888));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53427 = arguments.length;
var i__5767__auto___53428 = (0);
while(true){
if((i__5767__auto___53428 < len__5766__auto___53427)){
args__5772__auto__.push((arguments[i__5767__auto___53428]));

var G__53429 = (i__5767__auto___53428 + (1));
i__5767__auto___53428 = G__53429;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52891 = conformed_args__51391__auto__;
var map__52891__$1 = cljs.core.__destructure_map(map__52891);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq52890){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52890));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53430 = arguments.length;
var i__5767__auto___53431 = (0);
while(true){
if((i__5767__auto___53431 < len__5766__auto___53430)){
args__5772__auto__.push((arguments[i__5767__auto___53431]));

var G__53432 = (i__5767__auto___53431 + (1));
i__5767__auto___53431 = G__53432;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52893 = conformed_args__51391__auto__;
var map__52893__$1 = cljs.core.__destructure_map(map__52893);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq52892){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52892));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53433 = arguments.length;
var i__5767__auto___53434 = (0);
while(true){
if((i__5767__auto___53434 < len__5766__auto___53433)){
args__5772__auto__.push((arguments[i__5767__auto___53434]));

var G__53435 = (i__5767__auto___53434 + (1));
i__5767__auto___53434 = G__53435;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52895 = conformed_args__51391__auto__;
var map__52895__$1 = cljs.core.__destructure_map(map__52895);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq52894){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52894));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53436 = arguments.length;
var i__5767__auto___53437 = (0);
while(true){
if((i__5767__auto___53437 < len__5766__auto___53436)){
args__5772__auto__.push((arguments[i__5767__auto___53437]));

var G__53438 = (i__5767__auto___53437 + (1));
i__5767__auto___53437 = G__53438;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52897 = conformed_args__51391__auto__;
var map__52897__$1 = cljs.core.__destructure_map(map__52897);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52897__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52897__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52897__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq52896){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52896));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53439 = arguments.length;
var i__5767__auto___53440 = (0);
while(true){
if((i__5767__auto___53440 < len__5766__auto___53439)){
args__5772__auto__.push((arguments[i__5767__auto___53440]));

var G__53441 = (i__5767__auto___53440 + (1));
i__5767__auto___53440 = G__53441;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52899 = conformed_args__51391__auto__;
var map__52899__$1 = cljs.core.__destructure_map(map__52899);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52899__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq52898){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52898));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53442 = arguments.length;
var i__5767__auto___53443 = (0);
while(true){
if((i__5767__auto___53443 < len__5766__auto___53442)){
args__5772__auto__.push((arguments[i__5767__auto___53443]));

var G__53444 = (i__5767__auto___53443 + (1));
i__5767__auto___53443 = G__53444;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52901 = conformed_args__51391__auto__;
var map__52901__$1 = cljs.core.__destructure_map(map__52901);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq52900){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52900));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53445 = arguments.length;
var i__5767__auto___53446 = (0);
while(true){
if((i__5767__auto___53446 < len__5766__auto___53445)){
args__5772__auto__.push((arguments[i__5767__auto___53446]));

var G__53447 = (i__5767__auto___53446 + (1));
i__5767__auto___53446 = G__53447;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52903 = conformed_args__51391__auto__;
var map__52903__$1 = cljs.core.__destructure_map(map__52903);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52903__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52903__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52903__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq52902){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52902));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53448 = arguments.length;
var i__5767__auto___53449 = (0);
while(true){
if((i__5767__auto___53449 < len__5766__auto___53448)){
args__5772__auto__.push((arguments[i__5767__auto___53449]));

var G__53450 = (i__5767__auto___53449 + (1));
i__5767__auto___53449 = G__53450;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52905 = conformed_args__51391__auto__;
var map__52905__$1 = cljs.core.__destructure_map(map__52905);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq52904){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52904));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53451 = arguments.length;
var i__5767__auto___53452 = (0);
while(true){
if((i__5767__auto___53452 < len__5766__auto___53451)){
args__5772__auto__.push((arguments[i__5767__auto___53452]));

var G__53453 = (i__5767__auto___53452 + (1));
i__5767__auto___53452 = G__53453;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52907 = conformed_args__51391__auto__;
var map__52907__$1 = cljs.core.__destructure_map(map__52907);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq52906){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52906));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53454 = arguments.length;
var i__5767__auto___53455 = (0);
while(true){
if((i__5767__auto___53455 < len__5766__auto___53454)){
args__5772__auto__.push((arguments[i__5767__auto___53455]));

var G__53456 = (i__5767__auto___53455 + (1));
i__5767__auto___53455 = G__53456;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52909 = conformed_args__51391__auto__;
var map__52909__$1 = cljs.core.__destructure_map(map__52909);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52909__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52909__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq52908){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52908));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53457 = arguments.length;
var i__5767__auto___53458 = (0);
while(true){
if((i__5767__auto___53458 < len__5766__auto___53457)){
args__5772__auto__.push((arguments[i__5767__auto___53458]));

var G__53459 = (i__5767__auto___53458 + (1));
i__5767__auto___53458 = G__53459;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52911 = conformed_args__51391__auto__;
var map__52911__$1 = cljs.core.__destructure_map(map__52911);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52911__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52911__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq52910){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52910));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53460 = arguments.length;
var i__5767__auto___53461 = (0);
while(true){
if((i__5767__auto___53461 < len__5766__auto___53460)){
args__5772__auto__.push((arguments[i__5767__auto___53461]));

var G__53462 = (i__5767__auto___53461 + (1));
i__5767__auto___53461 = G__53462;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52913 = conformed_args__51391__auto__;
var map__52913__$1 = cljs.core.__destructure_map(map__52913);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq52912){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52912));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53463 = arguments.length;
var i__5767__auto___53464 = (0);
while(true){
if((i__5767__auto___53464 < len__5766__auto___53463)){
args__5772__auto__.push((arguments[i__5767__auto___53464]));

var G__53465 = (i__5767__auto___53464 + (1));
i__5767__auto___53464 = G__53465;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52915 = conformed_args__51391__auto__;
var map__52915__$1 = cljs.core.__destructure_map(map__52915);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq52914){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52914));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53466 = arguments.length;
var i__5767__auto___53467 = (0);
while(true){
if((i__5767__auto___53467 < len__5766__auto___53466)){
args__5772__auto__.push((arguments[i__5767__auto___53467]));

var G__53468 = (i__5767__auto___53467 + (1));
i__5767__auto___53467 = G__53468;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52917 = conformed_args__51391__auto__;
var map__52917__$1 = cljs.core.__destructure_map(map__52917);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq52916){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52916));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53469 = arguments.length;
var i__5767__auto___53470 = (0);
while(true){
if((i__5767__auto___53470 < len__5766__auto___53469)){
args__5772__auto__.push((arguments[i__5767__auto___53470]));

var G__53471 = (i__5767__auto___53470 + (1));
i__5767__auto___53470 = G__53471;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52919 = conformed_args__51391__auto__;
var map__52919__$1 = cljs.core.__destructure_map(map__52919);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq52918){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52918));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53472 = arguments.length;
var i__5767__auto___53473 = (0);
while(true){
if((i__5767__auto___53473 < len__5766__auto___53472)){
args__5772__auto__.push((arguments[i__5767__auto___53473]));

var G__53474 = (i__5767__auto___53473 + (1));
i__5767__auto___53473 = G__53474;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52921 = conformed_args__51391__auto__;
var map__52921__$1 = cljs.core.__destructure_map(map__52921);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52921__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq52920){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52920));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53475 = arguments.length;
var i__5767__auto___53476 = (0);
while(true){
if((i__5767__auto___53476 < len__5766__auto___53475)){
args__5772__auto__.push((arguments[i__5767__auto___53476]));

var G__53477 = (i__5767__auto___53476 + (1));
i__5767__auto___53476 = G__53477;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52923 = conformed_args__51391__auto__;
var map__52923__$1 = cljs.core.__destructure_map(map__52923);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52923__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52923__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq52922){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52922));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53478 = arguments.length;
var i__5767__auto___53479 = (0);
while(true){
if((i__5767__auto___53479 < len__5766__auto___53478)){
args__5772__auto__.push((arguments[i__5767__auto___53479]));

var G__53480 = (i__5767__auto___53479 + (1));
i__5767__auto___53479 = G__53480;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52925 = conformed_args__51391__auto__;
var map__52925__$1 = cljs.core.__destructure_map(map__52925);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq52924){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52924));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53481 = arguments.length;
var i__5767__auto___53482 = (0);
while(true){
if((i__5767__auto___53482 < len__5766__auto___53481)){
args__5772__auto__.push((arguments[i__5767__auto___53482]));

var G__53483 = (i__5767__auto___53482 + (1));
i__5767__auto___53482 = G__53483;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52927 = conformed_args__51391__auto__;
var map__52927__$1 = cljs.core.__destructure_map(map__52927);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52927__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52927__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq52926){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52926));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53484 = arguments.length;
var i__5767__auto___53485 = (0);
while(true){
if((i__5767__auto___53485 < len__5766__auto___53484)){
args__5772__auto__.push((arguments[i__5767__auto___53485]));

var G__53486 = (i__5767__auto___53485 + (1));
i__5767__auto___53485 = G__53486;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52929 = conformed_args__51391__auto__;
var map__52929__$1 = cljs.core.__destructure_map(map__52929);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52929__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52929__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52929__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq52928){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52928));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53487 = arguments.length;
var i__5767__auto___53488 = (0);
while(true){
if((i__5767__auto___53488 < len__5766__auto___53487)){
args__5772__auto__.push((arguments[i__5767__auto___53488]));

var G__53489 = (i__5767__auto___53488 + (1));
i__5767__auto___53488 = G__53489;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52931 = conformed_args__51391__auto__;
var map__52931__$1 = cljs.core.__destructure_map(map__52931);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52931__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52931__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq52930){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52930));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53490 = arguments.length;
var i__5767__auto___53491 = (0);
while(true){
if((i__5767__auto___53491 < len__5766__auto___53490)){
args__5772__auto__.push((arguments[i__5767__auto___53491]));

var G__53492 = (i__5767__auto___53491 + (1));
i__5767__auto___53491 = G__53492;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52933 = conformed_args__51391__auto__;
var map__52933__$1 = cljs.core.__destructure_map(map__52933);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52933__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq52932){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52932));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53493 = arguments.length;
var i__5767__auto___53494 = (0);
while(true){
if((i__5767__auto___53494 < len__5766__auto___53493)){
args__5772__auto__.push((arguments[i__5767__auto___53494]));

var G__53495 = (i__5767__auto___53494 + (1));
i__5767__auto___53494 = G__53495;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52935 = conformed_args__51391__auto__;
var map__52935__$1 = cljs.core.__destructure_map(map__52935);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq52934){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52934));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53496 = arguments.length;
var i__5767__auto___53497 = (0);
while(true){
if((i__5767__auto___53497 < len__5766__auto___53496)){
args__5772__auto__.push((arguments[i__5767__auto___53497]));

var G__53498 = (i__5767__auto___53497 + (1));
i__5767__auto___53497 = G__53498;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52937 = conformed_args__51391__auto__;
var map__52937__$1 = cljs.core.__destructure_map(map__52937);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq52936){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52936));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53499 = arguments.length;
var i__5767__auto___53500 = (0);
while(true){
if((i__5767__auto___53500 < len__5766__auto___53499)){
args__5772__auto__.push((arguments[i__5767__auto___53500]));

var G__53501 = (i__5767__auto___53500 + (1));
i__5767__auto___53500 = G__53501;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52939 = conformed_args__51391__auto__;
var map__52939__$1 = cljs.core.__destructure_map(map__52939);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq52938){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52938));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53502 = arguments.length;
var i__5767__auto___53503 = (0);
while(true){
if((i__5767__auto___53503 < len__5766__auto___53502)){
args__5772__auto__.push((arguments[i__5767__auto___53503]));

var G__53504 = (i__5767__auto___53503 + (1));
i__5767__auto___53503 = G__53504;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52941 = conformed_args__51391__auto__;
var map__52941__$1 = cljs.core.__destructure_map(map__52941);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52941__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52941__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52941__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq52940){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52940));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53505 = arguments.length;
var i__5767__auto___53506 = (0);
while(true){
if((i__5767__auto___53506 < len__5766__auto___53505)){
args__5772__auto__.push((arguments[i__5767__auto___53506]));

var G__53507 = (i__5767__auto___53506 + (1));
i__5767__auto___53506 = G__53507;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52943 = conformed_args__51391__auto__;
var map__52943__$1 = cljs.core.__destructure_map(map__52943);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq52942){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52942));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53508 = arguments.length;
var i__5767__auto___53509 = (0);
while(true){
if((i__5767__auto___53509 < len__5766__auto___53508)){
args__5772__auto__.push((arguments[i__5767__auto___53509]));

var G__53510 = (i__5767__auto___53509 + (1));
i__5767__auto___53509 = G__53510;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52945 = conformed_args__51391__auto__;
var map__52945__$1 = cljs.core.__destructure_map(map__52945);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq52944){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52944));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53511 = arguments.length;
var i__5767__auto___53512 = (0);
while(true){
if((i__5767__auto___53512 < len__5766__auto___53511)){
args__5772__auto__.push((arguments[i__5767__auto___53512]));

var G__53513 = (i__5767__auto___53512 + (1));
i__5767__auto___53512 = G__53513;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52947 = conformed_args__51391__auto__;
var map__52947__$1 = cljs.core.__destructure_map(map__52947);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq52946){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52946));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53514 = arguments.length;
var i__5767__auto___53515 = (0);
while(true){
if((i__5767__auto___53515 < len__5766__auto___53514)){
args__5772__auto__.push((arguments[i__5767__auto___53515]));

var G__53516 = (i__5767__auto___53515 + (1));
i__5767__auto___53515 = G__53516;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52949 = conformed_args__51391__auto__;
var map__52949__$1 = cljs.core.__destructure_map(map__52949);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52949__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq52948){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52948));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53517 = arguments.length;
var i__5767__auto___53518 = (0);
while(true){
if((i__5767__auto___53518 < len__5766__auto___53517)){
args__5772__auto__.push((arguments[i__5767__auto___53518]));

var G__53519 = (i__5767__auto___53518 + (1));
i__5767__auto___53518 = G__53519;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52951 = conformed_args__51391__auto__;
var map__52951__$1 = cljs.core.__destructure_map(map__52951);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq52950){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52950));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53520 = arguments.length;
var i__5767__auto___53521 = (0);
while(true){
if((i__5767__auto___53521 < len__5766__auto___53520)){
args__5772__auto__.push((arguments[i__5767__auto___53521]));

var G__53522 = (i__5767__auto___53521 + (1));
i__5767__auto___53521 = G__53522;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52953 = conformed_args__51391__auto__;
var map__52953__$1 = cljs.core.__destructure_map(map__52953);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52953__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52953__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52953__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq52952){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52952));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53523 = arguments.length;
var i__5767__auto___53524 = (0);
while(true){
if((i__5767__auto___53524 < len__5766__auto___53523)){
args__5772__auto__.push((arguments[i__5767__auto___53524]));

var G__53525 = (i__5767__auto___53524 + (1));
i__5767__auto___53524 = G__53525;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52955 = conformed_args__51391__auto__;
var map__52955__$1 = cljs.core.__destructure_map(map__52955);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52955__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq52954){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52954));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53526 = arguments.length;
var i__5767__auto___53527 = (0);
while(true){
if((i__5767__auto___53527 < len__5766__auto___53526)){
args__5772__auto__.push((arguments[i__5767__auto___53527]));

var G__53528 = (i__5767__auto___53527 + (1));
i__5767__auto___53527 = G__53528;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52957 = conformed_args__51391__auto__;
var map__52957__$1 = cljs.core.__destructure_map(map__52957);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq52956){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52956));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53529 = arguments.length;
var i__5767__auto___53530 = (0);
while(true){
if((i__5767__auto___53530 < len__5766__auto___53529)){
args__5772__auto__.push((arguments[i__5767__auto___53530]));

var G__53531 = (i__5767__auto___53530 + (1));
i__5767__auto___53530 = G__53531;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52959 = conformed_args__51391__auto__;
var map__52959__$1 = cljs.core.__destructure_map(map__52959);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq52958){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52958));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53532 = arguments.length;
var i__5767__auto___53533 = (0);
while(true){
if((i__5767__auto___53533 < len__5766__auto___53532)){
args__5772__auto__.push((arguments[i__5767__auto___53533]));

var G__53534 = (i__5767__auto___53533 + (1));
i__5767__auto___53533 = G__53534;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52961 = conformed_args__51391__auto__;
var map__52961__$1 = cljs.core.__destructure_map(map__52961);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52961__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52961__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52961__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq52960){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52960));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53535 = arguments.length;
var i__5767__auto___53536 = (0);
while(true){
if((i__5767__auto___53536 < len__5766__auto___53535)){
args__5772__auto__.push((arguments[i__5767__auto___53536]));

var G__53537 = (i__5767__auto___53536 + (1));
i__5767__auto___53536 = G__53537;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52963 = conformed_args__51391__auto__;
var map__52963__$1 = cljs.core.__destructure_map(map__52963);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52963__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52963__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq52962){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52962));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53538 = arguments.length;
var i__5767__auto___53539 = (0);
while(true){
if((i__5767__auto___53539 < len__5766__auto___53538)){
args__5772__auto__.push((arguments[i__5767__auto___53539]));

var G__53540 = (i__5767__auto___53539 + (1));
i__5767__auto___53539 = G__53540;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52965 = conformed_args__51391__auto__;
var map__52965__$1 = cljs.core.__destructure_map(map__52965);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52965__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52965__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq52964){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52964));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53541 = arguments.length;
var i__5767__auto___53542 = (0);
while(true){
if((i__5767__auto___53542 < len__5766__auto___53541)){
args__5772__auto__.push((arguments[i__5767__auto___53542]));

var G__53543 = (i__5767__auto___53542 + (1));
i__5767__auto___53542 = G__53543;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52967 = conformed_args__51391__auto__;
var map__52967__$1 = cljs.core.__destructure_map(map__52967);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq52966){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52966));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53544 = arguments.length;
var i__5767__auto___53545 = (0);
while(true){
if((i__5767__auto___53545 < len__5766__auto___53544)){
args__5772__auto__.push((arguments[i__5767__auto___53545]));

var G__53546 = (i__5767__auto___53545 + (1));
i__5767__auto___53545 = G__53546;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52969 = conformed_args__51391__auto__;
var map__52969__$1 = cljs.core.__destructure_map(map__52969);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52969__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52969__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52969__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq52968){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52968));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53547 = arguments.length;
var i__5767__auto___53548 = (0);
while(true){
if((i__5767__auto___53548 < len__5766__auto___53547)){
args__5772__auto__.push((arguments[i__5767__auto___53548]));

var G__53549 = (i__5767__auto___53548 + (1));
i__5767__auto___53548 = G__53549;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52971 = conformed_args__51391__auto__;
var map__52971__$1 = cljs.core.__destructure_map(map__52971);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52971__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq52970){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52970));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53550 = arguments.length;
var i__5767__auto___53551 = (0);
while(true){
if((i__5767__auto___53551 < len__5766__auto___53550)){
args__5772__auto__.push((arguments[i__5767__auto___53551]));

var G__53552 = (i__5767__auto___53551 + (1));
i__5767__auto___53551 = G__53552;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52973 = conformed_args__51391__auto__;
var map__52973__$1 = cljs.core.__destructure_map(map__52973);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52973__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52973__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52973__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq52972){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52972));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53553 = arguments.length;
var i__5767__auto___53554 = (0);
while(true){
if((i__5767__auto___53554 < len__5766__auto___53553)){
args__5772__auto__.push((arguments[i__5767__auto___53554]));

var G__53555 = (i__5767__auto___53554 + (1));
i__5767__auto___53554 = G__53555;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52975 = conformed_args__51391__auto__;
var map__52975__$1 = cljs.core.__destructure_map(map__52975);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52975__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52975__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52975__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq52974){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52974));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53556 = arguments.length;
var i__5767__auto___53557 = (0);
while(true){
if((i__5767__auto___53557 < len__5766__auto___53556)){
args__5772__auto__.push((arguments[i__5767__auto___53557]));

var G__53558 = (i__5767__auto___53557 + (1));
i__5767__auto___53557 = G__53558;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52977 = conformed_args__51391__auto__;
var map__52977__$1 = cljs.core.__destructure_map(map__52977);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq52976){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52976));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53559 = arguments.length;
var i__5767__auto___53560 = (0);
while(true){
if((i__5767__auto___53560 < len__5766__auto___53559)){
args__5772__auto__.push((arguments[i__5767__auto___53560]));

var G__53561 = (i__5767__auto___53560 + (1));
i__5767__auto___53560 = G__53561;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52979 = conformed_args__51391__auto__;
var map__52979__$1 = cljs.core.__destructure_map(map__52979);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52979__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52979__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52979__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq52978){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52978));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53562 = arguments.length;
var i__5767__auto___53563 = (0);
while(true){
if((i__5767__auto___53563 < len__5766__auto___53562)){
args__5772__auto__.push((arguments[i__5767__auto___53563]));

var G__53564 = (i__5767__auto___53563 + (1));
i__5767__auto___53563 = G__53564;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52981 = conformed_args__51391__auto__;
var map__52981__$1 = cljs.core.__destructure_map(map__52981);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52981__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq52980){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52980));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53565 = arguments.length;
var i__5767__auto___53566 = (0);
while(true){
if((i__5767__auto___53566 < len__5766__auto___53565)){
args__5772__auto__.push((arguments[i__5767__auto___53566]));

var G__53567 = (i__5767__auto___53566 + (1));
i__5767__auto___53566 = G__53567;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52983 = conformed_args__51391__auto__;
var map__52983__$1 = cljs.core.__destructure_map(map__52983);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52983__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq52982){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52982));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53568 = arguments.length;
var i__5767__auto___53569 = (0);
while(true){
if((i__5767__auto___53569 < len__5766__auto___53568)){
args__5772__auto__.push((arguments[i__5767__auto___53569]));

var G__53570 = (i__5767__auto___53569 + (1));
i__5767__auto___53569 = G__53570;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52985 = conformed_args__51391__auto__;
var map__52985__$1 = cljs.core.__destructure_map(map__52985);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52985__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52985__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52985__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq52984){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52984));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53571 = arguments.length;
var i__5767__auto___53572 = (0);
while(true){
if((i__5767__auto___53572 < len__5766__auto___53571)){
args__5772__auto__.push((arguments[i__5767__auto___53572]));

var G__53573 = (i__5767__auto___53572 + (1));
i__5767__auto___53572 = G__53573;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52987 = conformed_args__51391__auto__;
var map__52987__$1 = cljs.core.__destructure_map(map__52987);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq52986){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52986));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53574 = arguments.length;
var i__5767__auto___53575 = (0);
while(true){
if((i__5767__auto___53575 < len__5766__auto___53574)){
args__5772__auto__.push((arguments[i__5767__auto___53575]));

var G__53576 = (i__5767__auto___53575 + (1));
i__5767__auto___53575 = G__53576;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52989 = conformed_args__51391__auto__;
var map__52989__$1 = cljs.core.__destructure_map(map__52989);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52989__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52989__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq52988){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52988));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53577 = arguments.length;
var i__5767__auto___53578 = (0);
while(true){
if((i__5767__auto___53578 < len__5766__auto___53577)){
args__5772__auto__.push((arguments[i__5767__auto___53578]));

var G__53579 = (i__5767__auto___53578 + (1));
i__5767__auto___53578 = G__53579;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52991 = conformed_args__51391__auto__;
var map__52991__$1 = cljs.core.__destructure_map(map__52991);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq52990){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52990));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53580 = arguments.length;
var i__5767__auto___53581 = (0);
while(true){
if((i__5767__auto___53581 < len__5766__auto___53580)){
args__5772__auto__.push((arguments[i__5767__auto___53581]));

var G__53582 = (i__5767__auto___53581 + (1));
i__5767__auto___53581 = G__53582;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52993 = conformed_args__51391__auto__;
var map__52993__$1 = cljs.core.__destructure_map(map__52993);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52993__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52993__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52993__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq52992){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52992));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53583 = arguments.length;
var i__5767__auto___53584 = (0);
while(true){
if((i__5767__auto___53584 < len__5766__auto___53583)){
args__5772__auto__.push((arguments[i__5767__auto___53584]));

var G__53585 = (i__5767__auto___53584 + (1));
i__5767__auto___53584 = G__53585;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52995 = conformed_args__51391__auto__;
var map__52995__$1 = cljs.core.__destructure_map(map__52995);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52995__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq52994){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52994));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53586 = arguments.length;
var i__5767__auto___53587 = (0);
while(true){
if((i__5767__auto___53587 < len__5766__auto___53586)){
args__5772__auto__.push((arguments[i__5767__auto___53587]));

var G__53588 = (i__5767__auto___53587 + (1));
i__5767__auto___53587 = G__53588;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52997 = conformed_args__51391__auto__;
var map__52997__$1 = cljs.core.__destructure_map(map__52997);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq52996){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52996));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53589 = arguments.length;
var i__5767__auto___53590 = (0);
while(true){
if((i__5767__auto___53590 < len__5766__auto___53589)){
args__5772__auto__.push((arguments[i__5767__auto___53590]));

var G__53591 = (i__5767__auto___53590 + (1));
i__5767__auto___53590 = G__53591;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__52999 = conformed_args__51391__auto__;
var map__52999__$1 = cljs.core.__destructure_map(map__52999);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52999__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq52998){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52998));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53592 = arguments.length;
var i__5767__auto___53593 = (0);
while(true){
if((i__5767__auto___53593 < len__5766__auto___53592)){
args__5772__auto__.push((arguments[i__5767__auto___53593]));

var G__53594 = (i__5767__auto___53593 + (1));
i__5767__auto___53593 = G__53594;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53001 = conformed_args__51391__auto__;
var map__53001__$1 = cljs.core.__destructure_map(map__53001);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq53000){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53000));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53595 = arguments.length;
var i__5767__auto___53596 = (0);
while(true){
if((i__5767__auto___53596 < len__5766__auto___53595)){
args__5772__auto__.push((arguments[i__5767__auto___53596]));

var G__53597 = (i__5767__auto___53596 + (1));
i__5767__auto___53596 = G__53597;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53003 = conformed_args__51391__auto__;
var map__53003__$1 = cljs.core.__destructure_map(map__53003);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq53002){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53002));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53598 = arguments.length;
var i__5767__auto___53599 = (0);
while(true){
if((i__5767__auto___53599 < len__5766__auto___53598)){
args__5772__auto__.push((arguments[i__5767__auto___53599]));

var G__53600 = (i__5767__auto___53599 + (1));
i__5767__auto___53599 = G__53600;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53005 = conformed_args__51391__auto__;
var map__53005__$1 = cljs.core.__destructure_map(map__53005);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq53004){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53004));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53601 = arguments.length;
var i__5767__auto___53602 = (0);
while(true){
if((i__5767__auto___53602 < len__5766__auto___53601)){
args__5772__auto__.push((arguments[i__5767__auto___53602]));

var G__53603 = (i__5767__auto___53602 + (1));
i__5767__auto___53602 = G__53603;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53007 = conformed_args__51391__auto__;
var map__53007__$1 = cljs.core.__destructure_map(map__53007);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq53006){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53006));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53604 = arguments.length;
var i__5767__auto___53605 = (0);
while(true){
if((i__5767__auto___53605 < len__5766__auto___53604)){
args__5772__auto__.push((arguments[i__5767__auto___53605]));

var G__53606 = (i__5767__auto___53605 + (1));
i__5767__auto___53605 = G__53606;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53009 = conformed_args__51391__auto__;
var map__53009__$1 = cljs.core.__destructure_map(map__53009);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq53008){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53008));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53607 = arguments.length;
var i__5767__auto___53608 = (0);
while(true){
if((i__5767__auto___53608 < len__5766__auto___53607)){
args__5772__auto__.push((arguments[i__5767__auto___53608]));

var G__53609 = (i__5767__auto___53608 + (1));
i__5767__auto___53608 = G__53609;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53011 = conformed_args__51391__auto__;
var map__53011__$1 = cljs.core.__destructure_map(map__53011);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53011__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq53010){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53010));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53610 = arguments.length;
var i__5767__auto___53611 = (0);
while(true){
if((i__5767__auto___53611 < len__5766__auto___53610)){
args__5772__auto__.push((arguments[i__5767__auto___53611]));

var G__53612 = (i__5767__auto___53611 + (1));
i__5767__auto___53611 = G__53612;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53013 = conformed_args__51391__auto__;
var map__53013__$1 = cljs.core.__destructure_map(map__53013);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53013__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq53012){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53012));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53613 = arguments.length;
var i__5767__auto___53614 = (0);
while(true){
if((i__5767__auto___53614 < len__5766__auto___53613)){
args__5772__auto__.push((arguments[i__5767__auto___53614]));

var G__53615 = (i__5767__auto___53614 + (1));
i__5767__auto___53614 = G__53615;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53015 = conformed_args__51391__auto__;
var map__53015__$1 = cljs.core.__destructure_map(map__53015);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq53014){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53014));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53616 = arguments.length;
var i__5767__auto___53617 = (0);
while(true){
if((i__5767__auto___53617 < len__5766__auto___53616)){
args__5772__auto__.push((arguments[i__5767__auto___53617]));

var G__53618 = (i__5767__auto___53617 + (1));
i__5767__auto___53617 = G__53618;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53017 = conformed_args__51391__auto__;
var map__53017__$1 = cljs.core.__destructure_map(map__53017);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53017__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53017__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53017__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq53016){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53016));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53619 = arguments.length;
var i__5767__auto___53620 = (0);
while(true){
if((i__5767__auto___53620 < len__5766__auto___53619)){
args__5772__auto__.push((arguments[i__5767__auto___53620]));

var G__53621 = (i__5767__auto___53620 + (1));
i__5767__auto___53620 = G__53621;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53019 = conformed_args__51391__auto__;
var map__53019__$1 = cljs.core.__destructure_map(map__53019);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53019__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq53018){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53018));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53622 = arguments.length;
var i__5767__auto___53623 = (0);
while(true){
if((i__5767__auto___53623 < len__5766__auto___53622)){
args__5772__auto__.push((arguments[i__5767__auto___53623]));

var G__53624 = (i__5767__auto___53623 + (1));
i__5767__auto___53623 = G__53624;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53021 = conformed_args__51391__auto__;
var map__53021__$1 = cljs.core.__destructure_map(map__53021);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq53020){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53020));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53625 = arguments.length;
var i__5767__auto___53626 = (0);
while(true){
if((i__5767__auto___53626 < len__5766__auto___53625)){
args__5772__auto__.push((arguments[i__5767__auto___53626]));

var G__53627 = (i__5767__auto___53626 + (1));
i__5767__auto___53626 = G__53627;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53023 = conformed_args__51391__auto__;
var map__53023__$1 = cljs.core.__destructure_map(map__53023);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq53022){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53022));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53628 = arguments.length;
var i__5767__auto___53629 = (0);
while(true){
if((i__5767__auto___53629 < len__5766__auto___53628)){
args__5772__auto__.push((arguments[i__5767__auto___53629]));

var G__53630 = (i__5767__auto___53629 + (1));
i__5767__auto___53629 = G__53630;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53025 = conformed_args__51391__auto__;
var map__53025__$1 = cljs.core.__destructure_map(map__53025);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq53024){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53024));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53631 = arguments.length;
var i__5767__auto___53632 = (0);
while(true){
if((i__5767__auto___53632 < len__5766__auto___53631)){
args__5772__auto__.push((arguments[i__5767__auto___53632]));

var G__53633 = (i__5767__auto___53632 + (1));
i__5767__auto___53632 = G__53633;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53027 = conformed_args__51391__auto__;
var map__53027__$1 = cljs.core.__destructure_map(map__53027);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53027__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53027__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53027__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq53026){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53026));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53634 = arguments.length;
var i__5767__auto___53635 = (0);
while(true){
if((i__5767__auto___53635 < len__5766__auto___53634)){
args__5772__auto__.push((arguments[i__5767__auto___53635]));

var G__53636 = (i__5767__auto___53635 + (1));
i__5767__auto___53635 = G__53636;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53029 = conformed_args__51391__auto__;
var map__53029__$1 = cljs.core.__destructure_map(map__53029);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq53028){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53028));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53637 = arguments.length;
var i__5767__auto___53638 = (0);
while(true){
if((i__5767__auto___53638 < len__5766__auto___53637)){
args__5772__auto__.push((arguments[i__5767__auto___53638]));

var G__53639 = (i__5767__auto___53638 + (1));
i__5767__auto___53638 = G__53639;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53031 = conformed_args__51391__auto__;
var map__53031__$1 = cljs.core.__destructure_map(map__53031);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq53030){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53030));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53640 = arguments.length;
var i__5767__auto___53641 = (0);
while(true){
if((i__5767__auto___53641 < len__5766__auto___53640)){
args__5772__auto__.push((arguments[i__5767__auto___53641]));

var G__53642 = (i__5767__auto___53641 + (1));
i__5767__auto___53641 = G__53642;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53033 = conformed_args__51391__auto__;
var map__53033__$1 = cljs.core.__destructure_map(map__53033);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq53032){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53032));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53643 = arguments.length;
var i__5767__auto___53644 = (0);
while(true){
if((i__5767__auto___53644 < len__5766__auto___53643)){
args__5772__auto__.push((arguments[i__5767__auto___53644]));

var G__53645 = (i__5767__auto___53644 + (1));
i__5767__auto___53644 = G__53645;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53035 = conformed_args__51391__auto__;
var map__53035__$1 = cljs.core.__destructure_map(map__53035);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53035__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53035__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq53034){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53034));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53646 = arguments.length;
var i__5767__auto___53647 = (0);
while(true){
if((i__5767__auto___53647 < len__5766__auto___53646)){
args__5772__auto__.push((arguments[i__5767__auto___53647]));

var G__53648 = (i__5767__auto___53647 + (1));
i__5767__auto___53647 = G__53648;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53037 = conformed_args__51391__auto__;
var map__53037__$1 = cljs.core.__destructure_map(map__53037);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53037__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53037__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53037__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq53036){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53036));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53649 = arguments.length;
var i__5767__auto___53650 = (0);
while(true){
if((i__5767__auto___53650 < len__5766__auto___53649)){
args__5772__auto__.push((arguments[i__5767__auto___53650]));

var G__53651 = (i__5767__auto___53650 + (1));
i__5767__auto___53650 = G__53651;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53039 = conformed_args__51391__auto__;
var map__53039__$1 = cljs.core.__destructure_map(map__53039);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq53038){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53038));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53652 = arguments.length;
var i__5767__auto___53653 = (0);
while(true){
if((i__5767__auto___53653 < len__5766__auto___53652)){
args__5772__auto__.push((arguments[i__5767__auto___53653]));

var G__53654 = (i__5767__auto___53653 + (1));
i__5767__auto___53653 = G__53654;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53041 = conformed_args__51391__auto__;
var map__53041__$1 = cljs.core.__destructure_map(map__53041);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq53040){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53040));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53655 = arguments.length;
var i__5767__auto___53656 = (0);
while(true){
if((i__5767__auto___53656 < len__5766__auto___53655)){
args__5772__auto__.push((arguments[i__5767__auto___53656]));

var G__53657 = (i__5767__auto___53656 + (1));
i__5767__auto___53656 = G__53657;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53043 = conformed_args__51391__auto__;
var map__53043__$1 = cljs.core.__destructure_map(map__53043);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53043__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53043__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53043__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq53042){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53042));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53658 = arguments.length;
var i__5767__auto___53659 = (0);
while(true){
if((i__5767__auto___53659 < len__5766__auto___53658)){
args__5772__auto__.push((arguments[i__5767__auto___53659]));

var G__53660 = (i__5767__auto___53659 + (1));
i__5767__auto___53659 = G__53660;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53045 = conformed_args__51391__auto__;
var map__53045__$1 = cljs.core.__destructure_map(map__53045);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53045__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53045__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53045__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq53044){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53044));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53661 = arguments.length;
var i__5767__auto___53662 = (0);
while(true){
if((i__5767__auto___53662 < len__5766__auto___53661)){
args__5772__auto__.push((arguments[i__5767__auto___53662]));

var G__53663 = (i__5767__auto___53662 + (1));
i__5767__auto___53662 = G__53663;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53047 = conformed_args__51391__auto__;
var map__53047__$1 = cljs.core.__destructure_map(map__53047);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53047__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53047__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53047__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq53046){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53046));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53664 = arguments.length;
var i__5767__auto___53665 = (0);
while(true){
if((i__5767__auto___53665 < len__5766__auto___53664)){
args__5772__auto__.push((arguments[i__5767__auto___53665]));

var G__53666 = (i__5767__auto___53665 + (1));
i__5767__auto___53665 = G__53666;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53049 = conformed_args__51391__auto__;
var map__53049__$1 = cljs.core.__destructure_map(map__53049);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq53048){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53048));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5772__auto__ = [];
var len__5766__auto___53667 = arguments.length;
var i__5767__auto___53668 = (0);
while(true){
if((i__5767__auto___53668 < len__5766__auto___53667)){
args__5772__auto__.push((arguments[i__5767__auto___53668]));

var G__53669 = (i__5767__auto___53668 + (1));
i__5767__auto___53668 = G__53669;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51391__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53051 = conformed_args__51391__auto__;
var map__53051__$1 = cljs.core.__destructure_map(map__53051);
var css__51394__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53051__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__51392__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53051__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__51393__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53051__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51393__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51393__auto__);
var attrs_value__51395__auto__ = (function (){var or__5043__auto__ = cljs.core.second(attrs__51392__auto__);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51395__auto__], null),children__51393__auto____$1),css__51394__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq53050){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53050));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
