goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46806){
var map__46807 = p__46806;
var map__46807__$1 = cljs.core.__destructure_map(map__46807);
var m = map__46807__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46807__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46808_46898 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46809_46899 = null;
var count__46810_46900 = (0);
var i__46811_46901 = (0);
while(true){
if((i__46811_46901 < count__46810_46900)){
var f_46902 = chunk__46809_46899.cljs$core$IIndexed$_nth$arity$2(null,i__46811_46901);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46902], 0));


var G__46903 = seq__46808_46898;
var G__46904 = chunk__46809_46899;
var G__46905 = count__46810_46900;
var G__46906 = (i__46811_46901 + (1));
seq__46808_46898 = G__46903;
chunk__46809_46899 = G__46904;
count__46810_46900 = G__46905;
i__46811_46901 = G__46906;
continue;
} else {
var temp__5753__auto___46907 = cljs.core.seq(seq__46808_46898);
if(temp__5753__auto___46907){
var seq__46808_46908__$1 = temp__5753__auto___46907;
if(cljs.core.chunked_seq_QMARK_(seq__46808_46908__$1)){
var c__5565__auto___46909 = cljs.core.chunk_first(seq__46808_46908__$1);
var G__46910 = cljs.core.chunk_rest(seq__46808_46908__$1);
var G__46911 = c__5565__auto___46909;
var G__46912 = cljs.core.count(c__5565__auto___46909);
var G__46913 = (0);
seq__46808_46898 = G__46910;
chunk__46809_46899 = G__46911;
count__46810_46900 = G__46912;
i__46811_46901 = G__46913;
continue;
} else {
var f_46914 = cljs.core.first(seq__46808_46908__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46914], 0));


var G__46915 = cljs.core.next(seq__46808_46908__$1);
var G__46916 = null;
var G__46917 = (0);
var G__46918 = (0);
seq__46808_46898 = G__46915;
chunk__46809_46899 = G__46916;
count__46810_46900 = G__46917;
i__46811_46901 = G__46918;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46919 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46919], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46919)))?cljs.core.second(arglists_46919):arglists_46919)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46812_46920 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46813_46921 = null;
var count__46814_46922 = (0);
var i__46815_46923 = (0);
while(true){
if((i__46815_46923 < count__46814_46922)){
var vec__46824_46924 = chunk__46813_46921.cljs$core$IIndexed$_nth$arity$2(null,i__46815_46923);
var name_46925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46824_46924,(0),null);
var map__46827_46926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46824_46924,(1),null);
var map__46827_46927__$1 = cljs.core.__destructure_map(map__46827_46926);
var doc_46928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827_46927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46827_46927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46925], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46929], 0));

if(cljs.core.truth_(doc_46928)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46928], 0));
} else {
}


var G__46930 = seq__46812_46920;
var G__46931 = chunk__46813_46921;
var G__46932 = count__46814_46922;
var G__46933 = (i__46815_46923 + (1));
seq__46812_46920 = G__46930;
chunk__46813_46921 = G__46931;
count__46814_46922 = G__46932;
i__46815_46923 = G__46933;
continue;
} else {
var temp__5753__auto___46934 = cljs.core.seq(seq__46812_46920);
if(temp__5753__auto___46934){
var seq__46812_46935__$1 = temp__5753__auto___46934;
if(cljs.core.chunked_seq_QMARK_(seq__46812_46935__$1)){
var c__5565__auto___46936 = cljs.core.chunk_first(seq__46812_46935__$1);
var G__46937 = cljs.core.chunk_rest(seq__46812_46935__$1);
var G__46938 = c__5565__auto___46936;
var G__46939 = cljs.core.count(c__5565__auto___46936);
var G__46940 = (0);
seq__46812_46920 = G__46937;
chunk__46813_46921 = G__46938;
count__46814_46922 = G__46939;
i__46815_46923 = G__46940;
continue;
} else {
var vec__46828_46941 = cljs.core.first(seq__46812_46935__$1);
var name_46942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46828_46941,(0),null);
var map__46831_46943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46828_46941,(1),null);
var map__46831_46944__$1 = cljs.core.__destructure_map(map__46831_46943);
var doc_46945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46831_46944__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46831_46944__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46942], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46946], 0));

if(cljs.core.truth_(doc_46945)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46945], 0));
} else {
}


var G__46947 = cljs.core.next(seq__46812_46935__$1);
var G__46948 = null;
var G__46949 = (0);
var G__46950 = (0);
seq__46812_46920 = G__46947;
chunk__46813_46921 = G__46948;
count__46814_46922 = G__46949;
i__46815_46923 = G__46950;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46832 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46833 = null;
var count__46834 = (0);
var i__46835 = (0);
while(true){
if((i__46835 < count__46834)){
var role = chunk__46833.cljs$core$IIndexed$_nth$arity$2(null,i__46835);
var temp__5753__auto___46951__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___46951__$1)){
var spec_46952 = temp__5753__auto___46951__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46952)], 0));
} else {
}


var G__46953 = seq__46832;
var G__46954 = chunk__46833;
var G__46955 = count__46834;
var G__46956 = (i__46835 + (1));
seq__46832 = G__46953;
chunk__46833 = G__46954;
count__46834 = G__46955;
i__46835 = G__46956;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__46832);
if(temp__5753__auto____$1){
var seq__46832__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46832__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__46832__$1);
var G__46957 = cljs.core.chunk_rest(seq__46832__$1);
var G__46958 = c__5565__auto__;
var G__46959 = cljs.core.count(c__5565__auto__);
var G__46960 = (0);
seq__46832 = G__46957;
chunk__46833 = G__46958;
count__46834 = G__46959;
i__46835 = G__46960;
continue;
} else {
var role = cljs.core.first(seq__46832__$1);
var temp__5753__auto___46961__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___46961__$2)){
var spec_46962 = temp__5753__auto___46961__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46962)], 0));
} else {
}


var G__46963 = cljs.core.next(seq__46832__$1);
var G__46964 = null;
var G__46965 = (0);
var G__46966 = (0);
seq__46832 = G__46963;
chunk__46833 = G__46964;
count__46834 = G__46965;
i__46835 = G__46966;
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
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46968 = cljs.core.ex_cause(t);
via = G__46967;
t = G__46968;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46838 = datafied_throwable;
var map__46838__$1 = cljs.core.__destructure_map(map__46838);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46838__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46838__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46839 = cljs.core.last(via);
var map__46839__$1 = cljs.core.__destructure_map(map__46839);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46839__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46839__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46839__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46840 = data;
var map__46840__$1 = cljs.core.__destructure_map(map__46840);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46840__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46841 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46841__$1 = cljs.core.__destructure_map(map__46841);
var top_data = map__46841__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46842 = phase;
var G__46842__$1 = (((G__46842 instanceof cljs.core.Keyword))?G__46842.fqn:null);
switch (G__46842__$1) {
case "read-source":
var map__46843 = data;
var map__46843__$1 = cljs.core.__destructure_map(map__46843);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46843__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46843__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46844 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46844__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46844,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46844);
var G__46844__$2 = (cljs.core.truth_((function (){var fexpr__46845 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46845.cljs$core$IFn$_invoke$arity$1 ? fexpr__46845.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46845.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46844__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46844__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46844__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46844__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46846 = top_data;
var G__46846__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46846,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46846);
var G__46846__$2 = (cljs.core.truth_((function (){var fexpr__46847 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46847.cljs$core$IFn$_invoke$arity$1 ? fexpr__46847.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46847.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46846__$1);
var G__46846__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46846__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46846__$2);
var G__46846__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46846__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46846__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46846__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46846__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46848 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46848,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46848,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46848,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46848,(3),null);
var G__46851 = top_data;
var G__46851__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46851,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46851);
var G__46851__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46851__$1);
var G__46851__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46851__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46851__$2);
var G__46851__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46851__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46851__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46851__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46851__$4;
}

break;
case "execution":
var vec__46852 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46852,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46852,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46852,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46852,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46837_SHARP_){
var or__5043__auto__ = (p1__46837_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__46855 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46855.cljs$core$IFn$_invoke$arity$1 ? fexpr__46855.cljs$core$IFn$_invoke$arity$1(p1__46837_SHARP_) : fexpr__46855.call(null,p1__46837_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__46856 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46856__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46856);
var G__46856__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46856__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46856__$1);
var G__46856__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46856__$2);
var G__46856__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46856__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46856__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46856__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46856__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46842__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46859){
var map__46860 = p__46859;
var map__46860__$1 = cljs.core.__destructure_map(map__46860);
var triage_data = map__46860__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46860__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46861 = phase;
var G__46861__$1 = (((G__46861 instanceof cljs.core.Keyword))?G__46861.fqn:null);
switch (G__46861__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46862 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46863 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46864 = loc;
var G__46865 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46866_46971 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46867_46972 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46868_46973 = true;
var _STAR_print_fn_STAR__temp_val__46869_46974 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46868_46973);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46869_46974);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46857_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46857_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46867_46972);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46866_46971);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46862,G__46863,G__46864,G__46865) : format.call(null,G__46862,G__46863,G__46864,G__46865));

break;
case "macroexpansion":
var G__46870 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46871 = cause_type;
var G__46872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46873 = loc;
var G__46874 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46870,G__46871,G__46872,G__46873,G__46874) : format.call(null,G__46870,G__46871,G__46872,G__46873,G__46874));

break;
case "compile-syntax-check":
var G__46875 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46876 = cause_type;
var G__46877 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46878 = loc;
var G__46879 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46875,G__46876,G__46877,G__46878,G__46879) : format.call(null,G__46875,G__46876,G__46877,G__46878,G__46879));

break;
case "compilation":
var G__46880 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46881 = cause_type;
var G__46882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46883 = loc;
var G__46884 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46880,G__46881,G__46882,G__46883,G__46884) : format.call(null,G__46880,G__46881,G__46882,G__46883,G__46884));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46885 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46886 = symbol;
var G__46887 = loc;
var G__46888 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46889_46975 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46890_46976 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46891_46977 = true;
var _STAR_print_fn_STAR__temp_val__46892_46978 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46891_46977);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46892_46978);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46858_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46858_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46890_46976);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46889_46975);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46885,G__46886,G__46887,G__46888) : format.call(null,G__46885,G__46886,G__46887,G__46888));
} else {
var G__46893 = "Execution error%s at %s(%s).\n%s\n";
var G__46894 = cause_type;
var G__46895 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46896 = loc;
var G__46897 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46893,G__46894,G__46895,G__46896,G__46897) : format.call(null,G__46893,G__46894,G__46895,G__46896,G__46897));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46861__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
