// Compiled by ClojureScript 1.10.238 {}
goog.provide('yugiohcardeffect.cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (state,_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-limit","activation-limit",733694351),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-limit","activation-limit",733694351),new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"relativity","relativity",-1195946453)], null),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"instant-target","instant-target",1817967549)], null),new cljs.core.Keyword(null,"the","the",1825912652)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"main-phase","main-phase",-189163811));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"card-name-update","card-name-update",-486560690),(function (state,p__58476){
var vec__58477 = p__58476;
var _ = cljs.core.nth.call(null,vec__58477,(0),null);
var name = cljs.core.nth.call(null,vec__58477,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"trigger-state-update","trigger-state-update",1245137160),(function (state,p__58480){
var vec__58481 = p__58480;
var _ = cljs.core.nth.call(null,vec__58481,(0),null);
var active = cljs.core.nth.call(null,vec__58481,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-limit-type-update","activation-limit-type-update",2126830733),(function (state,p__58484){
var vec__58485 = p__58484;
var _ = cljs.core.nth.call(null,vec__58485,(0),null);
var value = cljs.core.nth.call(null,vec__58485,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-limit","activation-limit",733694351),new cljs.core.Keyword(null,"type","type",1174270348)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-limit-count-update","activation-limit-count-update",1087910769),(function (state,p__58488){
var vec__58489 = p__58488;
var _ = cljs.core.nth.call(null,vec__58489,(0),null);
var value = cljs.core.nth.call(null,vec__58489,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-limit","activation-limit",733694351),new cljs.core.Keyword(null,"count","count",2139924085)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timing-relativity-update","timing-relativity-update",-586623676),(function (state,p__58492){
var vec__58493 = p__58492;
var _ = cljs.core.nth.call(null,vec__58493,(0),null);
var value = cljs.core.nth.call(null,vec__58493,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"relativity","relativity",-1195946453)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-state-update","activation-restriction-state-update",767562380),(function (state,p__58496){
var vec__58497 = p__58496;
var _ = cljs.core.nth.call(null,vec__58497,(0),null);
var active = cljs.core.nth.call(null,vec__58497,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),(function (state,p__58500){
var vec__58501 = p__58500;
var _ = cljs.core.nth.call(null,vec__58501,(0),null);
var active = cljs.core.nth.call(null,vec__58501,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-count-update","activation-restriction-count-update",434856628),(function (state,p__58504){
var vec__58505 = p__58504;
var _ = cljs.core.nth.call(null,vec__58505,(0),null);
var count = cljs.core.nth.call(null,vec__58505,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),count);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-type-update","activation-restriction-type-update",-506532500),(function (state,p__58508){
var vec__58509 = p__58508;
var _ = cljs.core.nth.call(null,vec__58509,(0),null);
var type = cljs.core.nth.call(null,vec__58509,(1),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"duel","duel",-865799345))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),true], null));
} else {
}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-activation-update","activation-restriction-activation-update",-1604970131),(function (state,p__58512){
var vec__58513 = p__58512;
var _ = cljs.core.nth.call(null,vec__58513,(0),null);
var active = cljs.core.nth.call(null,vec__58513,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-effect-reference-update","activation-restriction-effect-reference-update",-1914157374),(function (state,p__58516){
var vec__58517 = p__58516;
var _ = cljs.core.nth.call(null,vec__58517,(0),null);
var reference = cljs.core.nth.call(null,vec__58517,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),reference);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-restriction-level-update","activation-restriction-restriction-level-update",412302692),(function (state,p__58520){
var vec__58521 = p__58520;
var _ = cljs.core.nth.call(null,vec__58521,(0),null);
var level = cljs.core.nth.call(null,vec__58521,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),level);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-state-update","once-per-state-update",-1361413236),(function (state,p__58524){
var vec__58525 = p__58524;
var _ = cljs.core.nth.call(null,vec__58525,(0),null);
var once_per_state = cljs.core.nth.call(null,vec__58525,(1),null);
var G__58528_58529 = once_per_state;
var G__58528_58530__$1 = (((G__58528_58529 instanceof cljs.core.Keyword))?G__58528_58529.fqn:null);
switch (G__58528_58530__$1) {
case "none":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"none","none",1333468478)], null));

break;
case "once-per":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"turn","turn",75759344)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58528_58530__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),once_per_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),(function (state,p__58532){
var vec__58533 = p__58532;
var _ = cljs.core.nth.call(null,vec__58533,(0),null);
var time = cljs.core.nth.call(null,vec__58533,(1),null);
var G__58536_58537 = time;
var G__58536_58538__$1 = (((G__58536_58537 instanceof cljs.core.Keyword))?G__58536_58537.fqn:null);
switch (G__58536_58538__$1) {
case "phase":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),new cljs.core.Keyword(null,"any","any",1705907423)], null));

break;
case "turn":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),new cljs.core.Keyword(null,"any","any",1705907423)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),false], null));

break;
case "none":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),new cljs.core.Keyword(null,"any","any",1705907423)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),new cljs.core.Keyword(null,"any","any",1705907423)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58536_58538__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),(function (state,p__58540){
var vec__58541 = p__58540;
var _ = cljs.core.nth.call(null,vec__58541,(0),null);
var who = cljs.core.nth.call(null,vec__58541,(1),null);
var G__58544_58545 = who;
var G__58544_58546__$1 = (((G__58544_58545 instanceof cljs.core.Keyword))?G__58544_58545.fqn:null);
switch (G__58544_58546__$1) {
case "any":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),false], null));

break;
case "your":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),true], null));

break;
case "opponents":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),true], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58544_58546__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),who);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),(function (state,p__58548){
var vec__58549 = p__58548;
var _ = cljs.core.nth.call(null,vec__58549,(0),null);
var phase = cljs.core.nth.call(null,vec__58549,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),phase);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),(function (state,p__58552){
var vec__58553 = p__58552;
var _ = cljs.core.nth.call(null,vec__58553,(0),null);
var include = cljs.core.nth.call(null,vec__58553,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),include);
}));

//# sourceMappingURL=events.js.map?rel=1524688480932
