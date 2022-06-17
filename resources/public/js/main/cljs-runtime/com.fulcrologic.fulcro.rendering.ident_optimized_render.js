goog.provide('com.fulcrologic.fulcro.rendering.ident_optimized_render');
/**
 * Checks the given `idents` and returns a subset of them where the data they refer to has changed
 * between `old-state` and `new-state`.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$dirty_table_entries(old_state,new_state,idents){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,ident){
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,ident) === cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_state,ident))){
return result;
} else {
return cljs.core.cons(ident,result);
}
}),cljs.core.List.EMPTY,idents);
});
/**
 * Uses the component's query and the current application state to query for the current value of that component's
 *   props (subtree). It then sends those props to the component via "props tunnelling" (setting them on a well-known key in
 *   component-local state).
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_component_BANG_(app__$1,ident,c){
if(cljs.core.truth_((function (){var and__5041__auto__ = c;
if(cljs.core.truth_(and__5041__auto__)){
return ident;
} else {
return and__5041__auto__;
}
})())){
var map__50617 = app__$1;
var map__50617__$1 = cljs.core.__destructure_map(map__50617);
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50617__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var state_map = cljs.core.deref(state_atom);
var query = com.fulcrologic.fulcro.components.get_query.cljs$core$IFn$_invoke$arity$2(c,state_map);
var q = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([ident,query])], null);
var prior_computed = (function (){var or__5043__auto__ = (com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_computed.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_computed.call(null,c));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var data_tree = (cljs.core.truth_(query)?com.fulcrologic.fulcro.algorithms.denormalize.db__GT_tree(q,state_map,state_map):null);
var new_props = (function (){var G__50618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_tree,ident);
var G__50619 = prior_computed;
return (com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2 ? com.fulcrologic.fulcro.components.computed.cljs$core$IFn$_invoke$arity$2(G__50618,G__50619) : com.fulcrologic.fulcro.components.computed.call(null,G__50618,G__50619));
})();
if(cljs.core.truth_(query)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Query was empty. Refresh failed for ",cljs.core.type(c),"See https://book.fulcrologic.com/#err-id-opt-render-empty-query"], null);
}),null)),null,619672018,null);
}

return com.fulcrologic.fulcro.components.tunnel_props_BANG_(c,new_props);
} else {
var root = new cljs.core.Keyword("com.fulcrologic.fulcro.application","app-root","com.fulcrologic.fulcro.application/app-root",835379005).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772).cljs$core$IFn$_invoke$arity$1(app__$1)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,root)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to do optimized update. Component",(function (){var G__50620 = com.fulcrologic.fulcro.components.react_type(c);
return (com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.class__GT_registry_key.cljs$core$IFn$_invoke$arity$1(G__50620) : com.fulcrologic.fulcro.components.class__GT_registry_key.call(null,G__50620));
})(),"queries for data that changed, but does not have an ident."], null);
}),null)),null,-96951110,null);
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Targeted update failed",cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Renders *only* components that *have* the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_components_with_ident_BANG_(app__$1,ident){
var seq__50621 = cljs.core.seq(com.fulcrologic.fulcro.components.ident__GT_components(app__$1,ident));
var chunk__50622 = null;
var count__50623 = (0);
var i__50624 = (0);
while(true){
if((i__50624 < count__50623)){
var c = chunk__50622.cljs$core$IIndexed$_nth$arity$2(null,i__50624);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__50689 = seq__50621;
var G__50690 = chunk__50622;
var G__50691 = count__50623;
var G__50692 = (i__50624 + (1));
seq__50621 = G__50689;
chunk__50622 = G__50690;
count__50623 = G__50691;
i__50624 = G__50692;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50621);
if(temp__5753__auto__){
var seq__50621__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50621__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50621__$1);
var G__50693 = cljs.core.chunk_rest(seq__50621__$1);
var G__50694 = c__5565__auto__;
var G__50695 = cljs.core.count(c__5565__auto__);
var G__50696 = (0);
seq__50621 = G__50693;
chunk__50622 = G__50694;
count__50623 = G__50695;
i__50624 = G__50696;
continue;
} else {
var c = cljs.core.first(seq__50621__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident,c);


var G__50697 = cljs.core.next(seq__50621__$1);
var G__50698 = null;
var G__50699 = (0);
var G__50700 = (0);
seq__50621 = G__50697;
chunk__50622 = G__50698;
count__50623 = G__50699;
i__50624 = G__50700;
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
 * Renders components that have, or query for, the given ident.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_dependents_of_ident_BANG_(app__$1,ident){
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_components_with_ident_BANG_(app__$1,ident);

var map__50625 = app__$1;
var map__50625__$1 = cljs.core.__destructure_map(map__50625);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50625__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__50626 = cljs.core.deref(runtime_atom);
var map__50626__$1 = cljs.core.__destructure_map(map__50626);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50626__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__50627 = indexes;
var map__50627__$1 = cljs.core.__destructure_map(map__50627);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50627__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50627__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50627__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
var idents_in_joins__$1 = (function (){var or__5043__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(idents_in_joins__$1,ident)){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(ident) : prop__GT_classes.call(null,ident));
if(cljs.core.seq(classes)){
var seq__50628 = cljs.core.seq(classes);
var chunk__50629 = null;
var count__50630 = (0);
var i__50631 = (0);
while(true){
if((i__50631 < count__50630)){
var class$ = chunk__50629.cljs$core$IIndexed$_nth$arity$2(null,i__50631);
var seq__50644_50701 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__50646_50702 = null;
var count__50647_50703 = (0);
var i__50648_50704 = (0);
while(true){
if((i__50648_50704 < count__50647_50703)){
var component_50705 = chunk__50646_50702.cljs$core$IIndexed$_nth$arity$2(null,i__50648_50704);
var component_ident_50706 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50705) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50705));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50706,component_50705);


var G__50707 = seq__50644_50701;
var G__50708 = chunk__50646_50702;
var G__50709 = count__50647_50703;
var G__50710 = (i__50648_50704 + (1));
seq__50644_50701 = G__50707;
chunk__50646_50702 = G__50708;
count__50647_50703 = G__50709;
i__50648_50704 = G__50710;
continue;
} else {
var temp__5753__auto___50711 = cljs.core.seq(seq__50644_50701);
if(temp__5753__auto___50711){
var seq__50644_50712__$1 = temp__5753__auto___50711;
if(cljs.core.chunked_seq_QMARK_(seq__50644_50712__$1)){
var c__5565__auto___50713 = cljs.core.chunk_first(seq__50644_50712__$1);
var G__50714 = cljs.core.chunk_rest(seq__50644_50712__$1);
var G__50715 = c__5565__auto___50713;
var G__50716 = cljs.core.count(c__5565__auto___50713);
var G__50717 = (0);
seq__50644_50701 = G__50714;
chunk__50646_50702 = G__50715;
count__50647_50703 = G__50716;
i__50648_50704 = G__50717;
continue;
} else {
var component_50718 = cljs.core.first(seq__50644_50712__$1);
var component_ident_50719 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50718) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50718));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50719,component_50718);


var G__50720 = cljs.core.next(seq__50644_50712__$1);
var G__50721 = null;
var G__50722 = (0);
var G__50723 = (0);
seq__50644_50701 = G__50720;
chunk__50646_50702 = G__50721;
count__50647_50703 = G__50722;
i__50648_50704 = G__50723;
continue;
}
} else {
}
}
break;
}


var G__50724 = seq__50628;
var G__50725 = chunk__50629;
var G__50726 = count__50630;
var G__50727 = (i__50631 + (1));
seq__50628 = G__50724;
chunk__50629 = G__50725;
count__50630 = G__50726;
i__50631 = G__50727;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50628);
if(temp__5753__auto__){
var seq__50628__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50628__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50628__$1);
var G__50728 = cljs.core.chunk_rest(seq__50628__$1);
var G__50729 = c__5565__auto__;
var G__50730 = cljs.core.count(c__5565__auto__);
var G__50731 = (0);
seq__50628 = G__50728;
chunk__50629 = G__50729;
count__50630 = G__50730;
i__50631 = G__50731;
continue;
} else {
var class$ = cljs.core.first(seq__50628__$1);
var seq__50650_50732 = cljs.core.seq((class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(class$) : class__GT_components.call(null,class$)));
var chunk__50652_50733 = null;
var count__50653_50734 = (0);
var i__50654_50735 = (0);
while(true){
if((i__50654_50735 < count__50653_50734)){
var component_50736 = chunk__50652_50733.cljs$core$IIndexed$_nth$arity$2(null,i__50654_50735);
var component_ident_50737 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50736) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50736));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50737,component_50736);


var G__50738 = seq__50650_50732;
var G__50739 = chunk__50652_50733;
var G__50740 = count__50653_50734;
var G__50741 = (i__50654_50735 + (1));
seq__50650_50732 = G__50738;
chunk__50652_50733 = G__50739;
count__50653_50734 = G__50740;
i__50654_50735 = G__50741;
continue;
} else {
var temp__5753__auto___50742__$1 = cljs.core.seq(seq__50650_50732);
if(temp__5753__auto___50742__$1){
var seq__50650_50743__$1 = temp__5753__auto___50742__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50650_50743__$1)){
var c__5565__auto___50744 = cljs.core.chunk_first(seq__50650_50743__$1);
var G__50745 = cljs.core.chunk_rest(seq__50650_50743__$1);
var G__50746 = c__5565__auto___50744;
var G__50747 = cljs.core.count(c__5565__auto___50744);
var G__50748 = (0);
seq__50650_50732 = G__50745;
chunk__50652_50733 = G__50746;
count__50653_50734 = G__50747;
i__50654_50735 = G__50748;
continue;
} else {
var component_50749 = cljs.core.first(seq__50650_50743__$1);
var component_ident_50750 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(component_50749) : com.fulcrologic.fulcro.components.get_ident.call(null,component_50749));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,component_ident_50750,component_50749);


var G__50751 = cljs.core.next(seq__50650_50743__$1);
var G__50752 = null;
var G__50753 = (0);
var G__50754 = (0);
seq__50650_50732 = G__50751;
chunk__50652_50733 = G__50752;
count__50653_50734 = G__50753;
i__50654_50735 = G__50754;
continue;
}
} else {
}
}
break;
}


var G__50755 = cljs.core.next(seq__50628__$1);
var G__50756 = null;
var G__50757 = (0);
var G__50758 = (0);
seq__50628 = G__50755;
chunk__50629 = G__50756;
count__50630 = G__50757;
i__50631 = G__50758;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given an app and a `property-set`: returns the components that query for the items in property-set.
 * 
 *   The `property-set` can be any sequence (ideally a set) of keywords and idents that can directly appear
 *   in a component query as a property or join key.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$props__GT_components(app__$1,property_set){
if(cljs.core.seq(property_set)){
var map__50658 = app__$1;
var map__50658__$1 = cljs.core.__destructure_map(map__50658);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50658__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var map__50659 = cljs.core.deref(runtime_atom);
var map__50659__$1 = cljs.core.__destructure_map(map__50659);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var map__50660 = indexes;
var map__50660__$1 = cljs.core.__destructure_map(map__50660);
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50660__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var class__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50660__$1,new cljs.core.Keyword(null,"class->components","class->components",436435919));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop){
var classes = (prop__GT_classes.cljs$core$IFn$_invoke$arity$1 ? prop__GT_classes.cljs$core$IFn$_invoke$arity$1(prop) : prop__GT_classes.call(null,prop));
var components = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50656_SHARP_,p2__50657_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__50656_SHARP_,(class__GT_components.cljs$core$IFn$_invoke$arity$1 ? class__GT_components.cljs$core$IFn$_invoke$arity$1(p2__50657_SHARP_) : class__GT_components.call(null,p2__50657_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,classes);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(result,components);
}),cljs.core.PersistentHashSet.EMPTY,property_set);
} else {
return null;
}
});
/**
 * This function tracks the state of the app at the time of prior render in the app's runtime-atom. It
 * uses that to do a comparison of old vs. current application state (bounded by the needs of on-screen components).
 * When it finds data that has changed it renders all of the components that depend on that data.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_stale_components_BANG_(app__$1){
var map__50661 = app__$1;
var map__50661__$1 = cljs.core.__destructure_map(map__50661);
var runtime_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","runtime-atom","com.fulcrologic.fulcro.application/runtime-atom",-1167397772));
var state_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50661__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","state-atom","com.fulcrologic.fulcro.application/state-atom",648128366));
var map__50662 = cljs.core.deref(runtime_atom);
var map__50662__$1 = cljs.core.__destructure_map(map__50662);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","indexes","com.fulcrologic.fulcro.application/indexes",-165326938));
var last_rendered_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","last-rendered-state","com.fulcrologic.fulcro.application/last-rendered-state",1438978441));
var to_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","to-refresh","com.fulcrologic.fulcro.application/to-refresh",-967758829));
var only_refresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","only-refresh","com.fulcrologic.fulcro.application/only-refresh",1300408206));
var map__50663 = indexes;
var map__50663__$1 = cljs.core.__destructure_map(map__50663);
var linked_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"linked-props","linked-props",1547374714));
var ident__GT_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"ident->components","ident->components",-1952169224));
var prop__GT_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717));
var idents_in_joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50663__$1,new cljs.core.Keyword(null,"idents-in-joins","idents-in-joins",-1556962035));
var limited_refresh_QMARK_ = cljs.core.seq(only_refresh);
if(limited_refresh_QMARK_){
var map__50664 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,only_refresh);
var map__50664__$1 = cljs.core.__destructure_map(map__50664);
var limited_idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,true);
var limited_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,false);
var limited_to_render = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,limited_props);
var seq__50665_50759 = cljs.core.seq(limited_to_render);
var chunk__50667_50760 = null;
var count__50668_50761 = (0);
var i__50669_50762 = (0);
while(true){
if((i__50669_50762 < count__50668_50761)){
var c_50763 = chunk__50667_50760.cljs$core$IIndexed$_nth$arity$2(null,i__50669_50762);
var ident_50764 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_50763) : com.fulcrologic.fulcro.components.get_ident.call(null,c_50763));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_50764,c_50763);


var G__50765 = seq__50665_50759;
var G__50766 = chunk__50667_50760;
var G__50767 = count__50668_50761;
var G__50768 = (i__50669_50762 + (1));
seq__50665_50759 = G__50765;
chunk__50667_50760 = G__50766;
count__50668_50761 = G__50767;
i__50669_50762 = G__50768;
continue;
} else {
var temp__5753__auto___50769 = cljs.core.seq(seq__50665_50759);
if(temp__5753__auto___50769){
var seq__50665_50770__$1 = temp__5753__auto___50769;
if(cljs.core.chunked_seq_QMARK_(seq__50665_50770__$1)){
var c__5565__auto___50771 = cljs.core.chunk_first(seq__50665_50770__$1);
var G__50772 = cljs.core.chunk_rest(seq__50665_50770__$1);
var G__50773 = c__5565__auto___50771;
var G__50774 = cljs.core.count(c__5565__auto___50771);
var G__50775 = (0);
seq__50665_50759 = G__50772;
chunk__50667_50760 = G__50773;
count__50668_50761 = G__50774;
i__50669_50762 = G__50775;
continue;
} else {
var c_50776 = cljs.core.first(seq__50665_50770__$1);
var ident_50777 = (com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c_50776) : com.fulcrologic.fulcro.components.get_ident.call(null,c_50776));
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,ident_50777,c_50776);


var G__50778 = cljs.core.next(seq__50665_50770__$1);
var G__50779 = null;
var G__50780 = (0);
var G__50781 = (0);
seq__50665_50759 = G__50778;
chunk__50667_50760 = G__50779;
count__50668_50761 = G__50780;
i__50669_50762 = G__50781;
continue;
}
} else {
}
}
break;
}

var seq__50671 = cljs.core.seq(limited_idents);
var chunk__50672 = null;
var count__50673 = (0);
var i__50674 = (0);
while(true){
if((i__50674 < count__50673)){
var i = chunk__50672.cljs$core$IIndexed$_nth$arity$2(null,i__50674);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__50782 = seq__50671;
var G__50783 = chunk__50672;
var G__50784 = count__50673;
var G__50785 = (i__50674 + (1));
seq__50671 = G__50782;
chunk__50672 = G__50783;
count__50673 = G__50784;
i__50674 = G__50785;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50671);
if(temp__5753__auto__){
var seq__50671__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50671__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50671__$1);
var G__50786 = cljs.core.chunk_rest(seq__50671__$1);
var G__50787 = c__5565__auto__;
var G__50788 = cljs.core.count(c__5565__auto__);
var G__50789 = (0);
seq__50671 = G__50786;
chunk__50672 = G__50787;
count__50673 = G__50788;
i__50674 = G__50789;
continue;
} else {
var i = cljs.core.first(seq__50671__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i);


var G__50790 = cljs.core.next(seq__50671__$1);
var G__50791 = null;
var G__50792 = (0);
var G__50793 = (0);
seq__50671 = G__50790;
chunk__50672 = G__50791;
count__50673 = G__50792;
i__50674 = G__50793;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var state_map = cljs.core.deref(state_atom);
var idents_in_joins__$1 = (function (){var or__5043__auto__ = idents_in_joins;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var dirty_linked_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,p) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(last_rendered_state,p))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,linked_props);
var map__50675 = cljs.core.group_by(edn_query_language.core.ident_QMARK_,to_refresh);
var map__50675__$1 = cljs.core.__destructure_map(map__50675);
var idents_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,true);
var props_to_force = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,false);
var props_to_force__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(props_to_force,dirty_linked_props);
var mounted_idents = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(ident__GT_components),idents_in_joins__$1);
var stale_idents = com.fulcrologic.fulcro.rendering.ident_optimized_render.dirty_table_entries(last_rendered_state,state_map,mounted_idents);
var extra_to_force = com.fulcrologic.fulcro.rendering.ident_optimized_render.props__GT_components(app__$1,props_to_force__$1);
var all_idents = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(idents_to_force),cljs.core.set(stale_idents));
var seq__50676_50794 = cljs.core.seq(all_idents);
var chunk__50677_50795 = null;
var count__50678_50796 = (0);
var i__50679_50797 = (0);
while(true){
if((i__50679_50797 < count__50678_50796)){
var i_50798 = chunk__50677_50795.cljs$core$IIndexed$_nth$arity$2(null,i__50679_50797);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_50798);


var G__50799 = seq__50676_50794;
var G__50800 = chunk__50677_50795;
var G__50801 = count__50678_50796;
var G__50802 = (i__50679_50797 + (1));
seq__50676_50794 = G__50799;
chunk__50677_50795 = G__50800;
count__50678_50796 = G__50801;
i__50679_50797 = G__50802;
continue;
} else {
var temp__5753__auto___50803 = cljs.core.seq(seq__50676_50794);
if(temp__5753__auto___50803){
var seq__50676_50804__$1 = temp__5753__auto___50803;
if(cljs.core.chunked_seq_QMARK_(seq__50676_50804__$1)){
var c__5565__auto___50805 = cljs.core.chunk_first(seq__50676_50804__$1);
var G__50806 = cljs.core.chunk_rest(seq__50676_50804__$1);
var G__50807 = c__5565__auto___50805;
var G__50808 = cljs.core.count(c__5565__auto___50805);
var G__50809 = (0);
seq__50676_50794 = G__50806;
chunk__50677_50795 = G__50807;
count__50678_50796 = G__50808;
i__50679_50797 = G__50809;
continue;
} else {
var i_50810 = cljs.core.first(seq__50676_50804__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_dependents_of_ident_BANG_(app__$1,i_50810);


var G__50811 = cljs.core.next(seq__50676_50804__$1);
var G__50812 = null;
var G__50813 = (0);
var G__50814 = (0);
seq__50676_50794 = G__50811;
chunk__50677_50795 = G__50812;
count__50678_50796 = G__50813;
i__50679_50797 = G__50814;
continue;
}
} else {
}
}
break;
}

var seq__50680 = cljs.core.seq(extra_to_force);
var chunk__50681 = null;
var count__50682 = (0);
var i__50683 = (0);
while(true){
if((i__50683 < count__50682)){
var c = chunk__50681.cljs$core$IIndexed$_nth$arity$2(null,i__50683);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__50815 = seq__50680;
var G__50816 = chunk__50681;
var G__50817 = count__50682;
var G__50818 = (i__50683 + (1));
seq__50680 = G__50815;
chunk__50681 = G__50816;
count__50682 = G__50817;
i__50683 = G__50818;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50680);
if(temp__5753__auto__){
var seq__50680__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50680__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__50680__$1);
var G__50819 = cljs.core.chunk_rest(seq__50680__$1);
var G__50820 = c__5565__auto__;
var G__50821 = cljs.core.count(c__5565__auto__);
var G__50822 = (0);
seq__50680 = G__50819;
chunk__50681 = G__50820;
count__50682 = G__50821;
i__50683 = G__50822;
continue;
} else {
var c = cljs.core.first(seq__50680__$1);
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_component_BANG_(app__$1,(com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.components.get_ident.cljs$core$IFn$_invoke$arity$1(c) : com.fulcrologic.fulcro.components.get_ident.call(null,c)),c);


var G__50823 = cljs.core.next(seq__50680__$1);
var G__50824 = null;
var G__50825 = (0);
var G__50826 = (0);
seq__50680 = G__50823;
chunk__50681 = G__50824;
count__50682 = G__50825;
i__50683 = G__50826;
continue;
}
} else {
return null;
}
}
break;
}
}
});
/**
 * The top-level call for using this optimized render in your application.
 * 
 *   If `:force-root? true` is passed in options, then it just forces a keyframe root render; otherwise
 *   it tries to minimize the work done for screen refresh to just the queries/refreshes needed by the
 *   data that has changed.
 */
com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_ = (function com$fulcrologic$fulcro$rendering$ident_optimized_render$render_BANG_(var_args){
var G__50685 = arguments.length;
switch (G__50685) {
case 1:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (app__$1){
return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2(app__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,p__50686){
var map__50687 = p__50686;
var map__50687__$1 = cljs.core.__destructure_map(map__50687);
var options = map__50687__$1;
var force_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50687__$1,new cljs.core.Keyword(null,"force-root?","force-root?",-1598741683));
var root_props_changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50687__$1,new cljs.core.Keyword(null,"root-props-changed?","root-props-changed?",1999614835));
if(cljs.core.truth_((function (){var or__5043__auto__ = force_root_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return root_props_changed_QMARK_;
}
})())){
return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
} else {
try{return com.fulcrologic.fulcro.rendering.ident_optimized_render.render_stale_components_BANG_(app__$1);
}catch (e50688){var e = e50688;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"com.fulcrologic.fulcro.rendering.ident-optimized-render",null,146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimized render failed. Falling back to root render."], null);
}),null)),null,-972326568,null);

return com.fulcrologic.fulcro.rendering.keyframe_render.render_BANG_(app__$1,options);
}}
}));

(com.fulcrologic.fulcro.rendering.ident_optimized_render.render_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.fulcrologic.fulcro.rendering.ident_optimized_render.js.map
