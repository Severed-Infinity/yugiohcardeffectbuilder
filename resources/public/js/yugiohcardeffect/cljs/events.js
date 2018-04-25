// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('yugiohcardeffect.cljs.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (state,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trigger,cljs.core.cst$kw$state], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_limit,cljs.core.cst$kw$type], null),cljs.core.cst$kw$turn),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_limit,cljs.core.cst$kw$count], null),cljs.core.cst$kw$once),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timing,cljs.core.cst$kw$relativity], null),cljs.core.cst$kw$during),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$state], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$only], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$count], null),cljs.core.cst$kw$once),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$type], null),cljs.core.cst$kw$turn),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$activation], null),cljs.core.cst$kw$activate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$effect_DASH_reference], null),cljs.core.cst$kw$this_DASH_effect),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$restriction_DASH_level], null),cljs.core.cst$kw$this_DASH_card),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$state], null),cljs.core.cst$kw$none),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$count], null),cljs.core.cst$kw$once),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$player], null),cljs.core.cst$kw$any),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$phase], null),cljs.core.cst$kw$any),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$include_DASH_player], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$time], null),cljs.core.cst$kw$off);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$card_DASH_name_DASH_update,(function (state,p__38119){
var vec__38120 = p__38119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38120,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$card_DASH_name], null),name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$trigger_DASH_state_DASH_update,(function (state,p__38123){
var vec__38124 = p__38123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38124,(0),null);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38124,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trigger,cljs.core.cst$kw$state], null),active);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_limit_DASH_type_DASH_update,(function (state,p__38127){
var vec__38128 = p__38127;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_limit,cljs.core.cst$kw$type], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_limit_DASH_count_DASH_update,(function (state,p__38131){
var vec__38132 = p__38131;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38132,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_limit,cljs.core.cst$kw$count], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timing_DASH_relativity_DASH_update,(function (state,p__38135){
var vec__38136 = p__38135;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38136,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timing,cljs.core.cst$kw$relativity], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_state_DASH_update,(function (state,p__38139){
var vec__38140 = p__38139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(0),null);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38140,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$state], null),active);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_only_DASH_update,(function (state,p__38143){
var vec__38144 = p__38143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38144,(0),null);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38144,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$only], null),active);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_count_DASH_update,(function (state,p__38147){
var vec__38148 = p__38147;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$count], null),count);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_type_DASH_update,(function (state,p__38151){
var vec__38152 = p__38151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$duel)){
var G__38155_38156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction_DASH_only_DASH_update,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38155_38156) : re_frame.core.dispatch.call(null,G__38155_38156));
} else {
}

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$type], null),type);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_activation_DASH_update,(function (state,p__38157){
var vec__38158 = p__38157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(0),null);
var active = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38158,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$activation], null),active);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_effect_DASH_reference_DASH_update,(function (state,p__38161){
var vec__38162 = p__38161;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162,(0),null);
var reference = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$effect_DASH_reference], null),reference);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$activation_DASH_restriction_DASH_restriction_DASH_level_DASH_update,(function (state,p__38165){
var vec__38166 = p__38165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$activation_DASH_restriction,cljs.core.cst$kw$restriction_DASH_level], null),level);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$once_DASH_per_DASH_state_DASH_update,(function (state,p__38169){
var vec__38170 = p__38169;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(0),null);
var once_per_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38170,(1),null);
var G__38173_38176 = once_per_state;
var G__38173_38177__$1 = (((G__38173_38176 instanceof cljs.core.Keyword))?G__38173_38176.fqn:null);
switch (G__38173_38177__$1) {
case "none":
var G__38174_38179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time_DASH_update,cljs.core.cst$kw$none], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38174_38179) : re_frame.core.dispatch.call(null,G__38174_38179));

break;
case "once-per":
var G__38175_38180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_time_DASH_update,cljs.core.cst$kw$turn], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38175_38180) : re_frame.core.dispatch.call(null,G__38175_38180));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38173_38177__$1)].join('')));

}

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$state], null),once_per_state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$once_DASH_per_DASH_time_DASH_update,(function (state,p__38181){
var vec__38182 = p__38181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(0),null);
var time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38182,(1),null);
var G__38185_38191 = time;
var G__38185_38192__$1 = (((G__38185_38191 instanceof cljs.core.Keyword))?G__38185_38191.fqn:null);
switch (G__38185_38192__$1) {
case "phase":
var G__38186_38194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_player_DASH_update,cljs.core.cst$kw$any], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38186_38194) : re_frame.core.dispatch.call(null,G__38186_38194));

break;
case "turn":
var G__38187_38195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_phase_DASH_update,cljs.core.cst$kw$any], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38187_38195) : re_frame.core.dispatch.call(null,G__38187_38195));

var G__38188_38196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player_DASH_update,false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38188_38196) : re_frame.core.dispatch.call(null,G__38188_38196));

break;
case "none":
var G__38189_38197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_player_DASH_update,cljs.core.cst$kw$any], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38189_38197) : re_frame.core.dispatch.call(null,G__38189_38197));

var G__38190_38198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_phase_DASH_update,cljs.core.cst$kw$any], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38190_38198) : re_frame.core.dispatch.call(null,G__38190_38198));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38185_38192__$1)].join('')));

}

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$time], null),time);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$once_DASH_per_DASH_player_DASH_update,(function (state,p__38199){
var vec__38200 = p__38199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(0),null);
var who = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38200,(1),null);
var G__38203_38207 = who;
var G__38203_38208__$1 = (((G__38203_38207 instanceof cljs.core.Keyword))?G__38203_38207.fqn:null);
switch (G__38203_38208__$1) {
case "any":
var G__38204_38210 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player_DASH_update,false], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38204_38210) : re_frame.core.dispatch.call(null,G__38204_38210));

break;
case "your":
var G__38205_38211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player_DASH_update,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38205_38211) : re_frame.core.dispatch.call(null,G__38205_38211));

break;
case "opponents":
var G__38206_38212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player_DASH_update,true], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__38206_38212) : re_frame.core.dispatch.call(null,G__38206_38212));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38203_38208__$1)].join('')));

}

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$player], null),who);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$once_DASH_per_DASH_phase_DASH_update,(function (state,p__38213){
var vec__38214 = p__38213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(0),null);
var phase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$phase], null),phase);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$once_DASH_per_DASH_include_DASH_player_DASH_update,(function (state,p__38217){
var vec__38218 = p__38217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(0),null);
var include = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_per,cljs.core.cst$kw$include_DASH_player], null),include);
}));
