goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___47598 = arguments.length;
var i__5767__auto___47599 = (0);
while(true){
if((i__5767__auto___47599 < len__5766__auto___47598)){
args__5772__auto__.push((arguments[i__5767__auto___47599]));

var G__47600 = (i__5767__auto___47599 + (1));
i__5767__auto___47599 = G__47600;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47318){
var G__47319 = cljs.core.first(seq47318);
var seq47318__$1 = cljs.core.next(seq47318);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47319,seq47318__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47320 = cljs.core.seq(sources);
var chunk__47321 = null;
var count__47322 = (0);
var i__47323 = (0);
while(true){
if((i__47323 < count__47322)){
var map__47328 = chunk__47321.cljs$core$IIndexed$_nth$arity$2(null,i__47323);
var map__47328__$1 = cljs.core.__destructure_map(map__47328);
var src = map__47328__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47328__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47328__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47328__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47329){var e_47601 = e47329;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47601);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47601.message)].join('')));
}

var G__47602 = seq__47320;
var G__47603 = chunk__47321;
var G__47604 = count__47322;
var G__47605 = (i__47323 + (1));
seq__47320 = G__47602;
chunk__47321 = G__47603;
count__47322 = G__47604;
i__47323 = G__47605;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47320);
if(temp__5753__auto__){
var seq__47320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47320__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47320__$1);
var G__47606 = cljs.core.chunk_rest(seq__47320__$1);
var G__47607 = c__5565__auto__;
var G__47608 = cljs.core.count(c__5565__auto__);
var G__47609 = (0);
seq__47320 = G__47606;
chunk__47321 = G__47607;
count__47322 = G__47608;
i__47323 = G__47609;
continue;
} else {
var map__47330 = cljs.core.first(seq__47320__$1);
var map__47330__$1 = cljs.core.__destructure_map(map__47330);
var src = map__47330__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47330__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47330__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47330__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47330__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47331){var e_47610 = e47331;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47610);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47610.message)].join('')));
}

var G__47611 = cljs.core.next(seq__47320__$1);
var G__47612 = null;
var G__47613 = (0);
var G__47614 = (0);
seq__47320 = G__47611;
chunk__47321 = G__47612;
count__47322 = G__47613;
i__47323 = G__47614;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47332 = cljs.core.seq(js_requires);
var chunk__47333 = null;
var count__47334 = (0);
var i__47335 = (0);
while(true){
if((i__47335 < count__47334)){
var js_ns = chunk__47333.cljs$core$IIndexed$_nth$arity$2(null,i__47335);
var require_str_47615 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47615);


var G__47616 = seq__47332;
var G__47617 = chunk__47333;
var G__47618 = count__47334;
var G__47619 = (i__47335 + (1));
seq__47332 = G__47616;
chunk__47333 = G__47617;
count__47334 = G__47618;
i__47335 = G__47619;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47332);
if(temp__5753__auto__){
var seq__47332__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47332__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47332__$1);
var G__47620 = cljs.core.chunk_rest(seq__47332__$1);
var G__47621 = c__5565__auto__;
var G__47622 = cljs.core.count(c__5565__auto__);
var G__47623 = (0);
seq__47332 = G__47620;
chunk__47333 = G__47621;
count__47334 = G__47622;
i__47335 = G__47623;
continue;
} else {
var js_ns = cljs.core.first(seq__47332__$1);
var require_str_47624 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47624);


var G__47625 = cljs.core.next(seq__47332__$1);
var G__47626 = null;
var G__47627 = (0);
var G__47628 = (0);
seq__47332 = G__47625;
chunk__47333 = G__47626;
count__47334 = G__47627;
i__47335 = G__47628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47337){
var map__47338 = p__47337;
var map__47338__$1 = cljs.core.__destructure_map(map__47338);
var msg = map__47338__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47338__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47338__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47339(s__47340){
return (new cljs.core.LazySeq(null,(function (){
var s__47340__$1 = s__47340;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47340__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__47345 = cljs.core.first(xs__6308__auto__);
var map__47345__$1 = cljs.core.__destructure_map(map__47345);
var src = map__47345__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47345__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47345__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__47340__$1,map__47345,map__47345__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47338,map__47338__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47339_$_iter__47341(s__47342){
return (new cljs.core.LazySeq(null,((function (s__47340__$1,map__47345,map__47345__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47338,map__47338__$1,msg,info,reload_info){
return (function (){
var s__47342__$1 = s__47342;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47342__$1);
if(temp__5753__auto____$1){
var s__47342__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47342__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__47342__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__47344 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__47343 = (0);
while(true){
if((i__47343 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__47343);
cljs.core.chunk_append(b__47344,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47629 = (i__47343 + (1));
i__47343 = G__47629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47344),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47339_$_iter__47341(cljs.core.chunk_rest(s__47342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47344),null);
}
} else {
var warning = cljs.core.first(s__47342__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47339_$_iter__47341(cljs.core.rest(s__47342__$2)));
}
} else {
return null;
}
break;
}
});})(s__47340__$1,map__47345,map__47345__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47338,map__47338__$1,msg,info,reload_info))
,null,null));
});})(s__47340__$1,map__47345,map__47345__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47338,map__47338__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47339(cljs.core.rest(s__47340__$1)));
} else {
var G__47630 = cljs.core.rest(s__47340__$1);
s__47340__$1 = G__47630;
continue;
}
} else {
var G__47631 = cljs.core.rest(s__47340__$1);
s__47340__$1 = G__47631;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47346_47632 = cljs.core.seq(warnings);
var chunk__47347_47633 = null;
var count__47348_47634 = (0);
var i__47349_47635 = (0);
while(true){
if((i__47349_47635 < count__47348_47634)){
var map__47352_47636 = chunk__47347_47633.cljs$core$IIndexed$_nth$arity$2(null,i__47349_47635);
var map__47352_47637__$1 = cljs.core.__destructure_map(map__47352_47636);
var w_47638 = map__47352_47637__$1;
var msg_47639__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47352_47637__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47352_47637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47352_47637__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47352_47637__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47642)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47640),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47641),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47639__$1)].join(''));


var G__47643 = seq__47346_47632;
var G__47644 = chunk__47347_47633;
var G__47645 = count__47348_47634;
var G__47646 = (i__47349_47635 + (1));
seq__47346_47632 = G__47643;
chunk__47347_47633 = G__47644;
count__47348_47634 = G__47645;
i__47349_47635 = G__47646;
continue;
} else {
var temp__5753__auto___47647 = cljs.core.seq(seq__47346_47632);
if(temp__5753__auto___47647){
var seq__47346_47648__$1 = temp__5753__auto___47647;
if(cljs.core.chunked_seq_QMARK_(seq__47346_47648__$1)){
var c__5565__auto___47649 = cljs.core.chunk_first(seq__47346_47648__$1);
var G__47650 = cljs.core.chunk_rest(seq__47346_47648__$1);
var G__47651 = c__5565__auto___47649;
var G__47652 = cljs.core.count(c__5565__auto___47649);
var G__47653 = (0);
seq__47346_47632 = G__47650;
chunk__47347_47633 = G__47651;
count__47348_47634 = G__47652;
i__47349_47635 = G__47653;
continue;
} else {
var map__47353_47654 = cljs.core.first(seq__47346_47648__$1);
var map__47353_47655__$1 = cljs.core.__destructure_map(map__47353_47654);
var w_47656 = map__47353_47655__$1;
var msg_47657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353_47655__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353_47655__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353_47655__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47353_47655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47660)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47658),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47659),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47657__$1)].join(''));


var G__47661 = cljs.core.next(seq__47346_47648__$1);
var G__47662 = null;
var G__47663 = (0);
var G__47664 = (0);
seq__47346_47632 = G__47661;
chunk__47347_47633 = G__47662;
count__47348_47634 = G__47663;
i__47349_47635 = G__47664;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47336_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47336_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47354){
var map__47355 = p__47354;
var map__47355__$1 = cljs.core.__destructure_map(map__47355);
var msg = map__47355__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47355__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47356 = cljs.core.seq(updates);
var chunk__47358 = null;
var count__47359 = (0);
var i__47360 = (0);
while(true){
if((i__47360 < count__47359)){
var path = chunk__47358.cljs$core$IIndexed$_nth$arity$2(null,i__47360);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47470_47665 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47474_47666 = null;
var count__47475_47667 = (0);
var i__47476_47668 = (0);
while(true){
if((i__47476_47668 < count__47475_47667)){
var node_47669 = chunk__47474_47666.cljs$core$IIndexed$_nth$arity$2(null,i__47476_47668);
if(cljs.core.not(node_47669.shadow$old)){
var path_match_47670 = shadow.cljs.devtools.client.browser.match_paths(node_47669.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47670)){
var new_link_47671 = (function (){var G__47502 = node_47669.cloneNode(true);
G__47502.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47670),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47502;
})();
(node_47669.shadow$old = true);

(new_link_47671.onload = ((function (seq__47470_47665,chunk__47474_47666,count__47475_47667,i__47476_47668,seq__47356,chunk__47358,count__47359,i__47360,new_link_47671,path_match_47670,node_47669,path,map__47355,map__47355__$1,msg,updates,reload_info){
return (function (e){
var seq__47503_47672 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47505_47673 = null;
var count__47506_47674 = (0);
var i__47507_47675 = (0);
while(true){
if((i__47507_47675 < count__47506_47674)){
var map__47511_47676 = chunk__47505_47673.cljs$core$IIndexed$_nth$arity$2(null,i__47507_47675);
var map__47511_47677__$1 = cljs.core.__destructure_map(map__47511_47676);
var task_47678 = map__47511_47677__$1;
var fn_str_47679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47511_47677__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47511_47677__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47681 = goog.getObjectByName(fn_str_47679,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47680)].join(''));

(fn_obj_47681.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47681.cljs$core$IFn$_invoke$arity$2(path,new_link_47671) : fn_obj_47681.call(null,path,new_link_47671));


var G__47682 = seq__47503_47672;
var G__47683 = chunk__47505_47673;
var G__47684 = count__47506_47674;
var G__47685 = (i__47507_47675 + (1));
seq__47503_47672 = G__47682;
chunk__47505_47673 = G__47683;
count__47506_47674 = G__47684;
i__47507_47675 = G__47685;
continue;
} else {
var temp__5753__auto___47686 = cljs.core.seq(seq__47503_47672);
if(temp__5753__auto___47686){
var seq__47503_47687__$1 = temp__5753__auto___47686;
if(cljs.core.chunked_seq_QMARK_(seq__47503_47687__$1)){
var c__5565__auto___47688 = cljs.core.chunk_first(seq__47503_47687__$1);
var G__47689 = cljs.core.chunk_rest(seq__47503_47687__$1);
var G__47690 = c__5565__auto___47688;
var G__47691 = cljs.core.count(c__5565__auto___47688);
var G__47692 = (0);
seq__47503_47672 = G__47689;
chunk__47505_47673 = G__47690;
count__47506_47674 = G__47691;
i__47507_47675 = G__47692;
continue;
} else {
var map__47512_47693 = cljs.core.first(seq__47503_47687__$1);
var map__47512_47694__$1 = cljs.core.__destructure_map(map__47512_47693);
var task_47695 = map__47512_47694__$1;
var fn_str_47696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512_47694__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47512_47694__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47698 = goog.getObjectByName(fn_str_47696,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47697)].join(''));

(fn_obj_47698.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47698.cljs$core$IFn$_invoke$arity$2(path,new_link_47671) : fn_obj_47698.call(null,path,new_link_47671));


var G__47699 = cljs.core.next(seq__47503_47687__$1);
var G__47700 = null;
var G__47701 = (0);
var G__47702 = (0);
seq__47503_47672 = G__47699;
chunk__47505_47673 = G__47700;
count__47506_47674 = G__47701;
i__47507_47675 = G__47702;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47669);
});})(seq__47470_47665,chunk__47474_47666,count__47475_47667,i__47476_47668,seq__47356,chunk__47358,count__47359,i__47360,new_link_47671,path_match_47670,node_47669,path,map__47355,map__47355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47670], 0));

goog.dom.insertSiblingAfter(new_link_47671,node_47669);


var G__47703 = seq__47470_47665;
var G__47704 = chunk__47474_47666;
var G__47705 = count__47475_47667;
var G__47706 = (i__47476_47668 + (1));
seq__47470_47665 = G__47703;
chunk__47474_47666 = G__47704;
count__47475_47667 = G__47705;
i__47476_47668 = G__47706;
continue;
} else {
var G__47707 = seq__47470_47665;
var G__47708 = chunk__47474_47666;
var G__47709 = count__47475_47667;
var G__47710 = (i__47476_47668 + (1));
seq__47470_47665 = G__47707;
chunk__47474_47666 = G__47708;
count__47475_47667 = G__47709;
i__47476_47668 = G__47710;
continue;
}
} else {
var G__47711 = seq__47470_47665;
var G__47712 = chunk__47474_47666;
var G__47713 = count__47475_47667;
var G__47714 = (i__47476_47668 + (1));
seq__47470_47665 = G__47711;
chunk__47474_47666 = G__47712;
count__47475_47667 = G__47713;
i__47476_47668 = G__47714;
continue;
}
} else {
var temp__5753__auto___47715 = cljs.core.seq(seq__47470_47665);
if(temp__5753__auto___47715){
var seq__47470_47716__$1 = temp__5753__auto___47715;
if(cljs.core.chunked_seq_QMARK_(seq__47470_47716__$1)){
var c__5565__auto___47717 = cljs.core.chunk_first(seq__47470_47716__$1);
var G__47718 = cljs.core.chunk_rest(seq__47470_47716__$1);
var G__47719 = c__5565__auto___47717;
var G__47720 = cljs.core.count(c__5565__auto___47717);
var G__47721 = (0);
seq__47470_47665 = G__47718;
chunk__47474_47666 = G__47719;
count__47475_47667 = G__47720;
i__47476_47668 = G__47721;
continue;
} else {
var node_47722 = cljs.core.first(seq__47470_47716__$1);
if(cljs.core.not(node_47722.shadow$old)){
var path_match_47723 = shadow.cljs.devtools.client.browser.match_paths(node_47722.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47723)){
var new_link_47724 = (function (){var G__47513 = node_47722.cloneNode(true);
G__47513.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47723),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47513;
})();
(node_47722.shadow$old = true);

(new_link_47724.onload = ((function (seq__47470_47665,chunk__47474_47666,count__47475_47667,i__47476_47668,seq__47356,chunk__47358,count__47359,i__47360,new_link_47724,path_match_47723,node_47722,seq__47470_47716__$1,temp__5753__auto___47715,path,map__47355,map__47355__$1,msg,updates,reload_info){
return (function (e){
var seq__47514_47725 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47516_47726 = null;
var count__47517_47727 = (0);
var i__47518_47728 = (0);
while(true){
if((i__47518_47728 < count__47517_47727)){
var map__47522_47729 = chunk__47516_47726.cljs$core$IIndexed$_nth$arity$2(null,i__47518_47728);
var map__47522_47730__$1 = cljs.core.__destructure_map(map__47522_47729);
var task_47731 = map__47522_47730__$1;
var fn_str_47732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47522_47730__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47522_47730__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47734 = goog.getObjectByName(fn_str_47732,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47733)].join(''));

(fn_obj_47734.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47734.cljs$core$IFn$_invoke$arity$2(path,new_link_47724) : fn_obj_47734.call(null,path,new_link_47724));


var G__47735 = seq__47514_47725;
var G__47736 = chunk__47516_47726;
var G__47737 = count__47517_47727;
var G__47738 = (i__47518_47728 + (1));
seq__47514_47725 = G__47735;
chunk__47516_47726 = G__47736;
count__47517_47727 = G__47737;
i__47518_47728 = G__47738;
continue;
} else {
var temp__5753__auto___47739__$1 = cljs.core.seq(seq__47514_47725);
if(temp__5753__auto___47739__$1){
var seq__47514_47740__$1 = temp__5753__auto___47739__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47514_47740__$1)){
var c__5565__auto___47741 = cljs.core.chunk_first(seq__47514_47740__$1);
var G__47742 = cljs.core.chunk_rest(seq__47514_47740__$1);
var G__47743 = c__5565__auto___47741;
var G__47744 = cljs.core.count(c__5565__auto___47741);
var G__47745 = (0);
seq__47514_47725 = G__47742;
chunk__47516_47726 = G__47743;
count__47517_47727 = G__47744;
i__47518_47728 = G__47745;
continue;
} else {
var map__47523_47746 = cljs.core.first(seq__47514_47740__$1);
var map__47523_47747__$1 = cljs.core.__destructure_map(map__47523_47746);
var task_47748 = map__47523_47747__$1;
var fn_str_47749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47523_47747__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47523_47747__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47751 = goog.getObjectByName(fn_str_47749,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47750)].join(''));

(fn_obj_47751.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47751.cljs$core$IFn$_invoke$arity$2(path,new_link_47724) : fn_obj_47751.call(null,path,new_link_47724));


var G__47752 = cljs.core.next(seq__47514_47740__$1);
var G__47753 = null;
var G__47754 = (0);
var G__47755 = (0);
seq__47514_47725 = G__47752;
chunk__47516_47726 = G__47753;
count__47517_47727 = G__47754;
i__47518_47728 = G__47755;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47722);
});})(seq__47470_47665,chunk__47474_47666,count__47475_47667,i__47476_47668,seq__47356,chunk__47358,count__47359,i__47360,new_link_47724,path_match_47723,node_47722,seq__47470_47716__$1,temp__5753__auto___47715,path,map__47355,map__47355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47723], 0));

goog.dom.insertSiblingAfter(new_link_47724,node_47722);


var G__47756 = cljs.core.next(seq__47470_47716__$1);
var G__47757 = null;
var G__47758 = (0);
var G__47759 = (0);
seq__47470_47665 = G__47756;
chunk__47474_47666 = G__47757;
count__47475_47667 = G__47758;
i__47476_47668 = G__47759;
continue;
} else {
var G__47760 = cljs.core.next(seq__47470_47716__$1);
var G__47761 = null;
var G__47762 = (0);
var G__47763 = (0);
seq__47470_47665 = G__47760;
chunk__47474_47666 = G__47761;
count__47475_47667 = G__47762;
i__47476_47668 = G__47763;
continue;
}
} else {
var G__47764 = cljs.core.next(seq__47470_47716__$1);
var G__47765 = null;
var G__47766 = (0);
var G__47767 = (0);
seq__47470_47665 = G__47764;
chunk__47474_47666 = G__47765;
count__47475_47667 = G__47766;
i__47476_47668 = G__47767;
continue;
}
}
} else {
}
}
break;
}


var G__47768 = seq__47356;
var G__47769 = chunk__47358;
var G__47770 = count__47359;
var G__47771 = (i__47360 + (1));
seq__47356 = G__47768;
chunk__47358 = G__47769;
count__47359 = G__47770;
i__47360 = G__47771;
continue;
} else {
var G__47772 = seq__47356;
var G__47773 = chunk__47358;
var G__47774 = count__47359;
var G__47775 = (i__47360 + (1));
seq__47356 = G__47772;
chunk__47358 = G__47773;
count__47359 = G__47774;
i__47360 = G__47775;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47356);
if(temp__5753__auto__){
var seq__47356__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47356__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__47356__$1);
var G__47776 = cljs.core.chunk_rest(seq__47356__$1);
var G__47777 = c__5565__auto__;
var G__47778 = cljs.core.count(c__5565__auto__);
var G__47779 = (0);
seq__47356 = G__47776;
chunk__47358 = G__47777;
count__47359 = G__47778;
i__47360 = G__47779;
continue;
} else {
var path = cljs.core.first(seq__47356__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47524_47780 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47528_47781 = null;
var count__47529_47782 = (0);
var i__47530_47783 = (0);
while(true){
if((i__47530_47783 < count__47529_47782)){
var node_47784 = chunk__47528_47781.cljs$core$IIndexed$_nth$arity$2(null,i__47530_47783);
if(cljs.core.not(node_47784.shadow$old)){
var path_match_47785 = shadow.cljs.devtools.client.browser.match_paths(node_47784.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47785)){
var new_link_47786 = (function (){var G__47556 = node_47784.cloneNode(true);
G__47556.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47785),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47556;
})();
(node_47784.shadow$old = true);

(new_link_47786.onload = ((function (seq__47524_47780,chunk__47528_47781,count__47529_47782,i__47530_47783,seq__47356,chunk__47358,count__47359,i__47360,new_link_47786,path_match_47785,node_47784,path,seq__47356__$1,temp__5753__auto__,map__47355,map__47355__$1,msg,updates,reload_info){
return (function (e){
var seq__47557_47787 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47559_47788 = null;
var count__47560_47789 = (0);
var i__47561_47790 = (0);
while(true){
if((i__47561_47790 < count__47560_47789)){
var map__47565_47791 = chunk__47559_47788.cljs$core$IIndexed$_nth$arity$2(null,i__47561_47790);
var map__47565_47792__$1 = cljs.core.__destructure_map(map__47565_47791);
var task_47793 = map__47565_47792__$1;
var fn_str_47794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47565_47792__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47565_47792__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47796 = goog.getObjectByName(fn_str_47794,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47795)].join(''));

(fn_obj_47796.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47796.cljs$core$IFn$_invoke$arity$2(path,new_link_47786) : fn_obj_47796.call(null,path,new_link_47786));


var G__47797 = seq__47557_47787;
var G__47798 = chunk__47559_47788;
var G__47799 = count__47560_47789;
var G__47800 = (i__47561_47790 + (1));
seq__47557_47787 = G__47797;
chunk__47559_47788 = G__47798;
count__47560_47789 = G__47799;
i__47561_47790 = G__47800;
continue;
} else {
var temp__5753__auto___47801__$1 = cljs.core.seq(seq__47557_47787);
if(temp__5753__auto___47801__$1){
var seq__47557_47802__$1 = temp__5753__auto___47801__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47557_47802__$1)){
var c__5565__auto___47803 = cljs.core.chunk_first(seq__47557_47802__$1);
var G__47804 = cljs.core.chunk_rest(seq__47557_47802__$1);
var G__47805 = c__5565__auto___47803;
var G__47806 = cljs.core.count(c__5565__auto___47803);
var G__47807 = (0);
seq__47557_47787 = G__47804;
chunk__47559_47788 = G__47805;
count__47560_47789 = G__47806;
i__47561_47790 = G__47807;
continue;
} else {
var map__47566_47808 = cljs.core.first(seq__47557_47802__$1);
var map__47566_47809__$1 = cljs.core.__destructure_map(map__47566_47808);
var task_47810 = map__47566_47809__$1;
var fn_str_47811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47566_47809__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47566_47809__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47813 = goog.getObjectByName(fn_str_47811,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47812)].join(''));

(fn_obj_47813.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47813.cljs$core$IFn$_invoke$arity$2(path,new_link_47786) : fn_obj_47813.call(null,path,new_link_47786));


var G__47814 = cljs.core.next(seq__47557_47802__$1);
var G__47815 = null;
var G__47816 = (0);
var G__47817 = (0);
seq__47557_47787 = G__47814;
chunk__47559_47788 = G__47815;
count__47560_47789 = G__47816;
i__47561_47790 = G__47817;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47784);
});})(seq__47524_47780,chunk__47528_47781,count__47529_47782,i__47530_47783,seq__47356,chunk__47358,count__47359,i__47360,new_link_47786,path_match_47785,node_47784,path,seq__47356__$1,temp__5753__auto__,map__47355,map__47355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47785], 0));

goog.dom.insertSiblingAfter(new_link_47786,node_47784);


var G__47818 = seq__47524_47780;
var G__47819 = chunk__47528_47781;
var G__47820 = count__47529_47782;
var G__47821 = (i__47530_47783 + (1));
seq__47524_47780 = G__47818;
chunk__47528_47781 = G__47819;
count__47529_47782 = G__47820;
i__47530_47783 = G__47821;
continue;
} else {
var G__47822 = seq__47524_47780;
var G__47823 = chunk__47528_47781;
var G__47824 = count__47529_47782;
var G__47825 = (i__47530_47783 + (1));
seq__47524_47780 = G__47822;
chunk__47528_47781 = G__47823;
count__47529_47782 = G__47824;
i__47530_47783 = G__47825;
continue;
}
} else {
var G__47826 = seq__47524_47780;
var G__47827 = chunk__47528_47781;
var G__47828 = count__47529_47782;
var G__47829 = (i__47530_47783 + (1));
seq__47524_47780 = G__47826;
chunk__47528_47781 = G__47827;
count__47529_47782 = G__47828;
i__47530_47783 = G__47829;
continue;
}
} else {
var temp__5753__auto___47830__$1 = cljs.core.seq(seq__47524_47780);
if(temp__5753__auto___47830__$1){
var seq__47524_47831__$1 = temp__5753__auto___47830__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47524_47831__$1)){
var c__5565__auto___47832 = cljs.core.chunk_first(seq__47524_47831__$1);
var G__47833 = cljs.core.chunk_rest(seq__47524_47831__$1);
var G__47834 = c__5565__auto___47832;
var G__47835 = cljs.core.count(c__5565__auto___47832);
var G__47836 = (0);
seq__47524_47780 = G__47833;
chunk__47528_47781 = G__47834;
count__47529_47782 = G__47835;
i__47530_47783 = G__47836;
continue;
} else {
var node_47837 = cljs.core.first(seq__47524_47831__$1);
if(cljs.core.not(node_47837.shadow$old)){
var path_match_47838 = shadow.cljs.devtools.client.browser.match_paths(node_47837.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47838)){
var new_link_47839 = (function (){var G__47567 = node_47837.cloneNode(true);
G__47567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47838),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47567;
})();
(node_47837.shadow$old = true);

(new_link_47839.onload = ((function (seq__47524_47780,chunk__47528_47781,count__47529_47782,i__47530_47783,seq__47356,chunk__47358,count__47359,i__47360,new_link_47839,path_match_47838,node_47837,seq__47524_47831__$1,temp__5753__auto___47830__$1,path,seq__47356__$1,temp__5753__auto__,map__47355,map__47355__$1,msg,updates,reload_info){
return (function (e){
var seq__47568_47840 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47570_47841 = null;
var count__47571_47842 = (0);
var i__47572_47843 = (0);
while(true){
if((i__47572_47843 < count__47571_47842)){
var map__47576_47844 = chunk__47570_47841.cljs$core$IIndexed$_nth$arity$2(null,i__47572_47843);
var map__47576_47845__$1 = cljs.core.__destructure_map(map__47576_47844);
var task_47846 = map__47576_47845__$1;
var fn_str_47847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47576_47845__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47576_47845__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47849 = goog.getObjectByName(fn_str_47847,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47848)].join(''));

(fn_obj_47849.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47849.cljs$core$IFn$_invoke$arity$2(path,new_link_47839) : fn_obj_47849.call(null,path,new_link_47839));


var G__47850 = seq__47568_47840;
var G__47851 = chunk__47570_47841;
var G__47852 = count__47571_47842;
var G__47853 = (i__47572_47843 + (1));
seq__47568_47840 = G__47850;
chunk__47570_47841 = G__47851;
count__47571_47842 = G__47852;
i__47572_47843 = G__47853;
continue;
} else {
var temp__5753__auto___47854__$2 = cljs.core.seq(seq__47568_47840);
if(temp__5753__auto___47854__$2){
var seq__47568_47855__$1 = temp__5753__auto___47854__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47568_47855__$1)){
var c__5565__auto___47856 = cljs.core.chunk_first(seq__47568_47855__$1);
var G__47857 = cljs.core.chunk_rest(seq__47568_47855__$1);
var G__47858 = c__5565__auto___47856;
var G__47859 = cljs.core.count(c__5565__auto___47856);
var G__47860 = (0);
seq__47568_47840 = G__47857;
chunk__47570_47841 = G__47858;
count__47571_47842 = G__47859;
i__47572_47843 = G__47860;
continue;
} else {
var map__47577_47861 = cljs.core.first(seq__47568_47855__$1);
var map__47577_47862__$1 = cljs.core.__destructure_map(map__47577_47861);
var task_47863 = map__47577_47862__$1;
var fn_str_47864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47577_47862__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47577_47862__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47866 = goog.getObjectByName(fn_str_47864,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47865)].join(''));

(fn_obj_47866.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47866.cljs$core$IFn$_invoke$arity$2(path,new_link_47839) : fn_obj_47866.call(null,path,new_link_47839));


var G__47867 = cljs.core.next(seq__47568_47855__$1);
var G__47868 = null;
var G__47869 = (0);
var G__47870 = (0);
seq__47568_47840 = G__47867;
chunk__47570_47841 = G__47868;
count__47571_47842 = G__47869;
i__47572_47843 = G__47870;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47837);
});})(seq__47524_47780,chunk__47528_47781,count__47529_47782,i__47530_47783,seq__47356,chunk__47358,count__47359,i__47360,new_link_47839,path_match_47838,node_47837,seq__47524_47831__$1,temp__5753__auto___47830__$1,path,seq__47356__$1,temp__5753__auto__,map__47355,map__47355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47838], 0));

goog.dom.insertSiblingAfter(new_link_47839,node_47837);


var G__47871 = cljs.core.next(seq__47524_47831__$1);
var G__47872 = null;
var G__47873 = (0);
var G__47874 = (0);
seq__47524_47780 = G__47871;
chunk__47528_47781 = G__47872;
count__47529_47782 = G__47873;
i__47530_47783 = G__47874;
continue;
} else {
var G__47875 = cljs.core.next(seq__47524_47831__$1);
var G__47876 = null;
var G__47877 = (0);
var G__47878 = (0);
seq__47524_47780 = G__47875;
chunk__47528_47781 = G__47876;
count__47529_47782 = G__47877;
i__47530_47783 = G__47878;
continue;
}
} else {
var G__47879 = cljs.core.next(seq__47524_47831__$1);
var G__47880 = null;
var G__47881 = (0);
var G__47882 = (0);
seq__47524_47780 = G__47879;
chunk__47528_47781 = G__47880;
count__47529_47782 = G__47881;
i__47530_47783 = G__47882;
continue;
}
}
} else {
}
}
break;
}


var G__47883 = cljs.core.next(seq__47356__$1);
var G__47884 = null;
var G__47885 = (0);
var G__47886 = (0);
seq__47356 = G__47883;
chunk__47358 = G__47884;
count__47359 = G__47885;
i__47360 = G__47886;
continue;
} else {
var G__47887 = cljs.core.next(seq__47356__$1);
var G__47888 = null;
var G__47889 = (0);
var G__47890 = (0);
seq__47356 = G__47887;
chunk__47358 = G__47888;
count__47359 = G__47889;
i__47360 = G__47890;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47578){
var map__47579 = p__47578;
var map__47579__$1 = cljs.core.__destructure_map(map__47579);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47579__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47580){
var map__47581 = p__47580;
var map__47581__$1 = cljs.core.__destructure_map(map__47581);
var _ = map__47581__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47581__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47582,done,error){
var map__47583 = p__47582;
var map__47583__$1 = cljs.core.__destructure_map(map__47583);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47583__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47584,done,error){
var map__47585 = p__47584;
var map__47585__$1 = cljs.core.__destructure_map(map__47585);
var msg = map__47585__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47585__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47585__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47585__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47586){
var map__47587 = p__47586;
var map__47587__$1 = cljs.core.__destructure_map(map__47587);
var src = map__47587__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47587__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47588 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47588) : done.call(null,G__47588));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47589){
var map__47590 = p__47589;
var map__47590__$1 = cljs.core.__destructure_map(map__47590);
var msg__$1 = map__47590__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47590__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47591){var ex = e47591;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47592){
var map__47593 = p__47592;
var map__47593__$1 = cljs.core.__destructure_map(map__47593);
var env = map__47593__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47593__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47594){
var map__47595 = p__47594;
var map__47595__$1 = cljs.core.__destructure_map(map__47595);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47595__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47595__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__47596){
var map__47597 = p__47596;
var map__47597__$1 = cljs.core.__destructure_map(map__47597);
var svc = map__47597__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47597__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
