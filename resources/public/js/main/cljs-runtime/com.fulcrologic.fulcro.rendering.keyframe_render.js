goog.provide('com.fulcrologic.fulcro.rendering.keyframe_render');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * This function renders given state map over top of the current app. This allows you to render previews of state **without
 *   actually changing the app state**. Used by Inspect for DOM preview. Forces a root-based render with no props diff optimization.
 *   The app must already be mounted. Returns the result of render.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_state_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_state_BANG_(app__$1,state_map){
var _STAR_blindly_render_STAR__orig_val__50603 = com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__50604 = true;
(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__50604);

try{var map__50605 = app__$1;
var map__50605__$1 = cljs.core.__destructure_map(map__50605);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__50606 = cljs.core.deref(runtime_atom);
var map__50606__$1 = cljs.core.__destructure_map(map__50606);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50606__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50606__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50606__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (function (){var or__5043__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return module$node_modules$react_dom$index.render;
}
})();
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
if(cljs.core.truth_((function (){var and__5041__auto__ = r_BANG_;
if(cljs.core.truth_(and__5041__auto__)){
return root_factory;
} else {
return and__5041__auto__;
}
})())){
var G__50607 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null,data_tree));
var G__50608 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__50607,G__50608) : r_BANG_.call(null,G__50607,G__50608));
} else {
return null;
}
}finally {(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__50603);
}});
/**
 * Render the UI. The keyframe render runs a full UI query and then asks React to render the root component.
 *   The optimizations for this kind of render are purely those provided by `defsc`'s default
 *   shouldComponentUpdate, which causes component to act like React PureComponent (though the props compare in cljs
 *   is often faster).
 * 
 *   If `:hydrate?` is true it will use the React hydrate functionality (on browsers) to render over
 *   server-rendered content in the DOM.
 * 
 *   If `:force-root? true` is included in the options map then not only will this do a keyframe update, it will also
 *   force all components to return `true` from `shouldComponentUpdate`.
 */
com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$keyframe_render$render_BANG_(app__$1,p__50609){
var map__50610 = p__50609;
var map__50610__$1 = cljs.core.__destructure_map(map__50610);
var options = map__50610__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50610__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var hydrate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50610__$1,new cljs.core.Keyword(null,"hydrate?","hydrate?",-57042185));
var _STAR_blindly_render_STAR__orig_val__50611 = com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_;
var _STAR_blindly_render_STAR__temp_val__50612 = force_root_QMARK_;
(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__temp_val__50612);

try{var map__50613 = app__$1;
var map__50613__$1 = cljs.core.__destructure_map(map__50613);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50613__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50613__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__50614 = cljs.core.deref(runtime_atom);
var map__50614__$1 = cljs.core.__destructure_map(map__50614);
var root_factory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50614__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-factory","com.fulcrologic.fulcro.application/root-factory",1202626682));
var root_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50614__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","root-class","com.fulcrologic.fulcro.application/root-class",-719803119));
var mount_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50614__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","mount-node","com.fulcrologic.fulcro.application/mount-node",557976672));
var r_BANG_ = (cljs.core.truth_(hydrate_QMARK_)?(function (){var or__5043__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"hydrate-root!","hydrate-root!",-184171028));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = module$node_modules$react_dom$index.hydrate;
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return module$node_modules$react_dom$index.render;
}
}
})():(function (){var or__5043__auto__ = com.fulcrologic.fulcro.algorithms.lookup.app_algorithm(app__$1,new cljs.core.Keyword(null,"render-root!","render-root!",820937651));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return module$node_modules$react_dom$index.render;
}
})());
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(root_class,state_map);
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(query,state_map,state_map):state_map);
var app_root = (cljs.core.truth_(root_factory)?(function (){var G__50615 = (root_factory.cljs$core$IFn$_invoke$arity$1 ? root_factory.cljs$core$IFn$_invoke$arity$1(data_tree) : root_factory.call(null,data_tree));
var G__50616 = mount_node;
return (r_BANG_.cljs$core$IFn$_invoke$arity$2 ? r_BANG_.cljs$core$IFn$_invoke$arity$2(G__50615,G__50616) : r_BANG_.call(null,G__50615,G__50616));
})():null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(runtime_atom,cljs.core.assoc,new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005),app_root);

return app_root;
}finally {(com.fulcrologic.fulcro.components._STAR_blindly_render_STAR_ = _STAR_blindly_render_STAR__orig_val__50611);
}});

//# sourceMappingURL=com.fulcrologic.fulcro.rendering.keyframe_render.js.map
