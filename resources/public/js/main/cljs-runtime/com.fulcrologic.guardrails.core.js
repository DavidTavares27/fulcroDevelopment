goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__39095__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39096__auto__ = (function (){var switch__39058__auto__ = (function (state_43111){
var state_val_43112 = (state_43111[(1)]);
if((state_val_43112 === (7))){
var inst_43107 = (state_43111[(2)]);
var state_43111__$1 = state_43111;
var statearr_43113_43154 = state_43111__$1;
(statearr_43113_43154[(2)] = inst_43107);

(statearr_43113_43154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (1))){
var state_43111__$1 = state_43111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43111__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_43112 === (4))){
var inst_43109 = (state_43111[(2)]);
var state_43111__$1 = state_43111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43111__$1,inst_43109);
} else {
if((state_val_43112 === (6))){
var inst_43105 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_43111__$1 = state_43111;
var statearr_43114_43155 = state_43111__$1;
(statearr_43114_43155[(2)] = inst_43105);

(statearr_43114_43155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (3))){
var inst_43088 = (state_43111[(7)]);
var state_43111__$1 = state_43111;
if(cljs.core.truth_(inst_43088)){
var statearr_43115_43156 = state_43111__$1;
(statearr_43115_43156[(1)] = (5));

} else {
var statearr_43116_43157 = state_43111__$1;
(statearr_43116_43157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (12))){
var inst_43102 = (state_43111[(2)]);
var inst_43088 = inst_43102;
var state_43111__$1 = (function (){var statearr_43118 = state_43111;
(statearr_43118[(7)] = inst_43088);

return statearr_43118;
})();
var statearr_43119_43158 = state_43111__$1;
(statearr_43119_43158[(2)] = null);

(statearr_43119_43158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (2))){
var inst_43087 = (state_43111[(2)]);
var inst_43088 = inst_43087;
var state_43111__$1 = (function (){var statearr_43120 = state_43111;
(statearr_43120[(7)] = inst_43088);

return statearr_43120;
})();
var statearr_43121_43159 = state_43111__$1;
(statearr_43121_43159[(2)] = null);

(statearr_43121_43159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (11))){
var _ = (function (){var statearr_43122 = state_43111;
(statearr_43122[(4)] = cljs.core.rest((state_43111[(4)])));

return statearr_43122;
})();
var state_43111__$1 = state_43111;
var ex43117 = (state_43111__$1[(2)]);
var statearr_43123_43160 = state_43111__$1;
(statearr_43123_43160[(5)] = ex43117);


var statearr_43124_43161 = state_43111__$1;
(statearr_43124_43161[(1)] = (10));

(statearr_43124_43161[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (9))){
var inst_43100 = (state_43111[(2)]);
var state_43111__$1 = (function (){var statearr_43125 = state_43111;
(statearr_43125[(8)] = inst_43100);

return statearr_43125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43111__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_43112 === (5))){
var state_43111__$1 = state_43111;
var statearr_43126_43162 = state_43111__$1;
(statearr_43126_43162[(2)] = null);

(statearr_43126_43162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (10))){
var inst_43091 = (state_43111[(2)]);
var state_43111__$1 = (function (){var statearr_43127 = state_43111;
(statearr_43127[(9)] = inst_43091);

return statearr_43127;
})();
var statearr_43128_43163 = state_43111__$1;
(statearr_43128_43163[(2)] = null);

(statearr_43128_43163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43112 === (8))){
var inst_43088 = (state_43111[(7)]);
var _ = (function (){var statearr_43129 = state_43111;
(statearr_43129[(4)] = cljs.core.cons((11),(state_43111[(4)])));

return statearr_43129;
})();
var inst_43097 = (inst_43088.cljs$core$IFn$_invoke$arity$0 ? inst_43088.cljs$core$IFn$_invoke$arity$0() : inst_43088.call(null));
var ___$1 = (function (){var statearr_43130 = state_43111;
(statearr_43130[(4)] = cljs.core.rest((state_43111[(4)])));

return statearr_43130;
})();
var state_43111__$1 = state_43111;
var statearr_43131_43164 = state_43111__$1;
(statearr_43131_43164[(2)] = inst_43097);

(statearr_43131_43164[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__39059__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__39059__auto____0 = (function (){
var statearr_43132 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43132[(0)] = com$fulcrologic$guardrails$core$state_machine__39059__auto__);

(statearr_43132[(1)] = (1));

return statearr_43132;
});
var com$fulcrologic$guardrails$core$state_machine__39059__auto____1 = (function (state_43111){
while(true){
var ret_value__39060__auto__ = (function (){try{while(true){
var result__39061__auto__ = switch__39058__auto__(state_43111);
if(cljs.core.keyword_identical_QMARK_(result__39061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39061__auto__;
}
break;
}
}catch (e43133){var ex__39062__auto__ = e43133;
var statearr_43134_43165 = state_43111;
(statearr_43134_43165[(2)] = ex__39062__auto__);


if(cljs.core.seq((state_43111[(4)]))){
var statearr_43135_43166 = state_43111;
(statearr_43135_43166[(1)] = cljs.core.first((state_43111[(4)])));

} else {
throw ex__39062__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43167 = state_43111;
state_43111 = G__43167;
continue;
} else {
return ret_value__39060__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__39059__auto__ = function(state_43111){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__39059__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__39059__auto____1.call(this,state_43111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__39059__auto____0;
com$fulcrologic$guardrails$core$state_machine__39059__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__39059__auto____1;
return com$fulcrologic$guardrails$core$state_machine__39059__auto__;
})()
})();
var state__39097__auto__ = (function (){var statearr_43136 = f__39096__auto__();
(statearr_43136[(6)] = c__39095__auto__);

return statearr_43136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39097__auto__);
}));

return c__39095__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__43137 = data;
var map__43137__$1 = cljs.core.__destructure_map(map__43137);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5753__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5753__auto__)){
var err = temp__5753__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__43138,spec,value){
var map__43139 = p__43138;
var map__43139__$1 = cljs.core.__destructure_map(map__43139);
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43139__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43139__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43139__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43139__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43139__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43139__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_43170 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__43171 = (function (){var and__5041__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5041__auto__)){
return vararg_QMARK_;
} else {
return and__5041__auto__;
}
})();
var varg_43172 = (cljs.core.truth_(vargs_QMARK__43171)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_43173 = (cljs.core.truth_(vargs_QMARK__43171)?((cljs.core.map_QMARK_(varg_43172))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_43172))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_43172))):value);
var valid_exception_43174 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_43173)){
} else {
var problem_43175 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_43173,expound_opts);
var description_43176 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_43175)].join('');
if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_43174,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(description_43176,cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_43173], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_43176,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = callsite;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e43140){var e_43177 = e43140;
com.fulcrologic.guardrails.utils.report_exception(e_43177,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_43179 = (com.fulcrologic.guardrails.core.now_ms() - start_43170);
if((duration_43179 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_43179),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_43174))){
throw cljs.core.deref(valid_exception_43174);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
