// Compiled by ClojureScript 1.10.238 {}
goog.provide('yugiohcardeffect.cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (state,_){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),false),new cljs.core.Keyword("activation-limit","type","activation-limit/type",1245317328),new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.Keyword("activation-limit","count","activation-limit/count",-1974968655),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"relativity","relativity",-1195946453)], null),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"target-indicator","target-indicator",219319818)], null),new cljs.core.Keyword(null,"the","the",1825912652)),new cljs.core.Keyword("timing","type","timing/type",-1720925978),new cljs.core.Keyword(null,"main-phase","main-phase",-189163811));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"card-name-update","card-name-update",-486560690),(function (state,p__49953){
var vec__49954 = p__49953;
var _ = cljs.core.nth.call(null,vec__49954,(0),null);
var name = cljs.core.nth.call(null,vec__49954,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"trigger-state-update","trigger-state-update",1245137160),(function (state,p__49957){
var vec__49958 = p__49957;
var _ = cljs.core.nth.call(null,vec__49958,(0),null);
var active = cljs.core.nth.call(null,vec__49958,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("activation-limit","type-update","activation-limit/type-update",1807667397),(function (state,p__49961){
var vec__49962 = p__49961;
var _ = cljs.core.nth.call(null,vec__49962,(0),null);
var value = cljs.core.nth.call(null,vec__49962,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("activation-limit","type","activation-limit/type",1245317328),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("activation-limit","count-update","activation-limit/count-update",-1863189552),(function (state,p__49965){
var vec__49966 = p__49965;
var _ = cljs.core.nth.call(null,vec__49966,(0),null);
var value = cljs.core.nth.call(null,vec__49966,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("activation-limit","count","activation-limit/count",-1974968655),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timing-relativity-update","timing-relativity-update",-586623676),(function (state,p__49969){
var vec__49970 = p__49969;
var _ = cljs.core.nth.call(null,vec__49970,(0),null);
var value = cljs.core.nth.call(null,vec__49970,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"relativity","relativity",-1195946453)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timing-target-indicator-update","timing-target-indicator-update",-1399162318),(function (state,p__49973){
var vec__49974 = p__49973;
var _ = cljs.core.nth.call(null,vec__49974,(0),null);
var value = cljs.core.nth.call(null,vec__49974,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"target-indicator","target-indicator",219319818)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("timing","type-update","timing/type-update",-2062612277),(function (state,p__49977){
var vec__49978 = p__49977;
var _ = cljs.core.nth.call(null,vec__49978,(0),null);
var value = cljs.core.nth.call(null,vec__49978,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("timing","type","timing/type",-1720925978),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-state-update","activation-restriction-state-update",767562380),(function (state,p__49981){
var vec__49982 = p__49981;
var _ = cljs.core.nth.call(null,vec__49982,(0),null);
var active = cljs.core.nth.call(null,vec__49982,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),(function (state,p__49985){
var vec__49986 = p__49985;
var _ = cljs.core.nth.call(null,vec__49986,(0),null);
var active = cljs.core.nth.call(null,vec__49986,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-count-update","activation-restriction-count-update",434856628),(function (state,p__49989){
var vec__49990 = p__49989;
var _ = cljs.core.nth.call(null,vec__49990,(0),null);
var count = cljs.core.nth.call(null,vec__49990,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),count);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-type-update","activation-restriction-type-update",-506532500),(function (state,p__49993){
var vec__49994 = p__49993;
var _ = cljs.core.nth.call(null,vec__49994,(0),null);
var type = cljs.core.nth.call(null,vec__49994,(1),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"duel","duel",-865799345))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),true], null));
} else {
}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-activation-update","activation-restriction-activation-update",-1604970131),(function (state,p__49997){
var vec__49998 = p__49997;
var _ = cljs.core.nth.call(null,vec__49998,(0),null);
var active = cljs.core.nth.call(null,vec__49998,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-effect-reference-update","activation-restriction-effect-reference-update",-1914157374),(function (state,p__50001){
var vec__50002 = p__50001;
var _ = cljs.core.nth.call(null,vec__50002,(0),null);
var reference = cljs.core.nth.call(null,vec__50002,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),reference);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-restriction-level-update","activation-restriction-restriction-level-update",412302692),(function (state,p__50005){
var vec__50006 = p__50005;
var _ = cljs.core.nth.call(null,vec__50006,(0),null);
var level = cljs.core.nth.call(null,vec__50006,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),level);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-state-update","once-per-state-update",-1361413236),(function (state,p__50009){
var vec__50010 = p__50009;
var _ = cljs.core.nth.call(null,vec__50010,(0),null);
var once_per_state = cljs.core.nth.call(null,vec__50010,(1),null);
var G__50013_50014 = once_per_state;
var G__50013_50015__$1 = (((G__50013_50014 instanceof cljs.core.Keyword))?G__50013_50014.fqn:null);
switch (G__50013_50015__$1) {
case "none":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"none","none",1333468478)], null));

break;
case "once-per":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"turn","turn",75759344)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50013_50015__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),once_per_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),(function (state,p__50017){
var vec__50018 = p__50017;
var _ = cljs.core.nth.call(null,vec__50018,(0),null);
var time = cljs.core.nth.call(null,vec__50018,(1),null);
var G__50021_50022 = time;
var G__50021_50023__$1 = (((G__50021_50022 instanceof cljs.core.Keyword))?G__50021_50022.fqn:null);
switch (G__50021_50023__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50021_50023__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),(function (state,p__50025){
var vec__50026 = p__50025;
var _ = cljs.core.nth.call(null,vec__50026,(0),null);
var who = cljs.core.nth.call(null,vec__50026,(1),null);
var G__50029_50030 = who;
var G__50029_50031__$1 = (((G__50029_50030 instanceof cljs.core.Keyword))?G__50029_50030.fqn:null);
switch (G__50029_50031__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50029_50031__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),who);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),(function (state,p__50033){
var vec__50034 = p__50033;
var _ = cljs.core.nth.call(null,vec__50034,(0),null);
var phase = cljs.core.nth.call(null,vec__50034,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),phase);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),(function (state,p__50037){
var vec__50038 = p__50037;
var _ = cljs.core.nth.call(null,vec__50038,(0),null);
var include = cljs.core.nth.call(null,vec__50038,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),include);
}));

//# sourceMappingURL=events.js.map?rel=1526481888955
