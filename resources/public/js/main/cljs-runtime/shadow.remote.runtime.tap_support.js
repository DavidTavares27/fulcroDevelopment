goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47090,p__47091){
var map__47092 = p__47090;
var map__47092__$1 = cljs.core.__destructure_map(map__47092);
var svc = map__47092__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47093 = p__47091;
var map__47093__$1 = cljs.core.__destructure_map(map__47093);
var msg = map__47093__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47093__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47094,p__47095){
var map__47096 = p__47094;
var map__47096__$1 = cljs.core.__destructure_map(map__47096);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47096__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47097 = p__47095;
var map__47097__$1 = cljs.core.__destructure_map(map__47097);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47097__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47098,p__47099){
var map__47100 = p__47098;
var map__47100__$1 = cljs.core.__destructure_map(map__47100);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47100__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47100__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47101 = p__47099;
var map__47101__$1 = cljs.core.__destructure_map(map__47101);
var msg = map__47101__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47101__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47102,tid){
var map__47103 = p__47102;
var map__47103__$1 = cljs.core.__destructure_map(map__47103);
var svc = map__47103__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47103__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47108 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47109 = null;
var count__47110 = (0);
var i__47111 = (0);
while(true){
if((i__47111 < count__47110)){
var vec__47118 = chunk__47109.cljs$core$IIndexed$_nth$arity$2(null,i__47111);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47126 = seq__47108;
var G__47127 = chunk__47109;
var G__47128 = count__47110;
var G__47129 = (i__47111 + (1));
seq__47108 = G__47126;
chunk__47109 = G__47127;
count__47110 = G__47128;
i__47111 = G__47129;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47108);
if(temp__5753__auto__){
var seq__47108__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47108__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47108__$1);
var G__47130 = cljs.core.chunk_rest(seq__47108__$1);
var G__47131 = c__5565__auto__;
var G__47132 = cljs.core.count(c__5565__auto__);
var G__47133 = (0);
seq__47108 = G__47130;
chunk__47109 = G__47131;
count__47110 = G__47132;
i__47111 = G__47133;
continue;
} else {
var vec__47121 = cljs.core.first(seq__47108__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47134 = cljs.core.next(seq__47108__$1);
var G__47135 = null;
var G__47136 = (0);
var G__47137 = (0);
seq__47108 = G__47134;
chunk__47109 = G__47135;
count__47110 = G__47136;
i__47111 = G__47137;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47104_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47104_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47105_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47105_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47106_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47106_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47107_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47107_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47124){
var map__47125 = p__47124;
var map__47125__$1 = cljs.core.__destructure_map(map__47125);
var svc = map__47125__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
