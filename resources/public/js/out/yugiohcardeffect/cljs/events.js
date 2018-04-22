// Compiled by ClojureScript 1.9.946 {}
goog.provide('yugiohcardeffect.cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (state,_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-limit","activation-limit",733694351),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"once","once",-262568523)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),new cljs.core.Keyword(null,"activate","activate",441219614)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),new cljs.core.Keyword(null,"this-effect","this-effect",-1999025353)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),new cljs.core.Keyword(null,"this-card","this-card",759993696)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"once","once",-262568523)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.Keyword(null,"any","any",1705907423)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),new cljs.core.Keyword(null,"any","any",1705907423)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),new cljs.core.Keyword(null,"off","off",606440789));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"card-name-update","card-name-update",-486560690),(function (state,p__59898){
var vec__59899 = p__59898;
var _ = cljs.core.nth.call(null,vec__59899,(0),null);
var name = cljs.core.nth.call(null,vec__59899,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"trigger-state-update","trigger-state-update",1245137160),(function (state,p__59902){
var vec__59903 = p__59902;
var _ = cljs.core.nth.call(null,vec__59903,(0),null);
var active = cljs.core.nth.call(null,vec__59903,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-limit-state-update","activation-limit-state-update",1625496088),(function (state,p__59906){
var vec__59907 = p__59906;
var _ = cljs.core.nth.call(null,vec__59907,(0),null);
var value = cljs.core.nth.call(null,vec__59907,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-limit","activation-limit",733694351),new cljs.core.Keyword(null,"state","state",-1988618099)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-state-update","activation-restriction-state-update",767562380),(function (state,p__59910){
var vec__59911 = p__59910;
var _ = cljs.core.nth.call(null,vec__59911,(0),null);
var active = cljs.core.nth.call(null,vec__59911,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),(function (state,p__59914){
var vec__59915 = p__59914;
var _ = cljs.core.nth.call(null,vec__59915,(0),null);
var active = cljs.core.nth.call(null,vec__59915,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-count-update","activation-restriction-count-update",434856628),(function (state,p__59918){
var vec__59919 = p__59918;
var _ = cljs.core.nth.call(null,vec__59919,(0),null);
var count = cljs.core.nth.call(null,vec__59919,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),count);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-type-update","activation-restriction-type-update",-506532500),(function (state,p__59922){
var vec__59923 = p__59922;
var _ = cljs.core.nth.call(null,vec__59923,(0),null);
var type = cljs.core.nth.call(null,vec__59923,(1),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"duel","duel",-865799345))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),true], null));
} else {
}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-activation-update","activation-restriction-activation-update",-1604970131),(function (state,p__59926){
var vec__59927 = p__59926;
var _ = cljs.core.nth.call(null,vec__59927,(0),null);
var active = cljs.core.nth.call(null,vec__59927,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-effect-reference-update","activation-restriction-effect-reference-update",-1914157374),(function (state,p__59930){
var vec__59931 = p__59930;
var _ = cljs.core.nth.call(null,vec__59931,(0),null);
var reference = cljs.core.nth.call(null,vec__59931,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),reference);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-restriction-level-update","activation-restriction-restriction-level-update",412302692),(function (state,p__59934){
var vec__59935 = p__59934;
var _ = cljs.core.nth.call(null,vec__59935,(0),null);
var level = cljs.core.nth.call(null,vec__59935,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),level);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-state-update","once-per-state-update",-1361413236),(function (state,p__59938){
var vec__59939 = p__59938;
var _ = cljs.core.nth.call(null,vec__59939,(0),null);
var once_per_state = cljs.core.nth.call(null,vec__59939,(1),null);
var G__59942_59943 = once_per_state;
var G__59942_59944__$1 = (((G__59942_59943 instanceof cljs.core.Keyword))?G__59942_59943.fqn:null);
switch (G__59942_59944__$1) {
case "none":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"none","none",1333468478)], null));

break;
case "once-per":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"turn","turn",75759344)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59942_59944__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),once_per_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),(function (state,p__59946){
var vec__59947 = p__59946;
var _ = cljs.core.nth.call(null,vec__59947,(0),null);
var time = cljs.core.nth.call(null,vec__59947,(1),null);
var G__59950_59951 = time;
var G__59950_59952__$1 = (((G__59950_59951 instanceof cljs.core.Keyword))?G__59950_59951.fqn:null);
switch (G__59950_59952__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59950_59952__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),(function (state,p__59954){
var vec__59955 = p__59954;
var _ = cljs.core.nth.call(null,vec__59955,(0),null);
var who = cljs.core.nth.call(null,vec__59955,(1),null);
var G__59958_59959 = who;
var G__59958_59960__$1 = (((G__59958_59959 instanceof cljs.core.Keyword))?G__59958_59959.fqn:null);
switch (G__59958_59960__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59958_59960__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),who);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),(function (state,p__59962){
var vec__59963 = p__59962;
var _ = cljs.core.nth.call(null,vec__59963,(0),null);
var phase = cljs.core.nth.call(null,vec__59963,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),phase);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),(function (state,p__59966){
var vec__59967 = p__59966;
var _ = cljs.core.nth.call(null,vec__59967,(0),null);
var include = cljs.core.nth.call(null,vec__59967,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),include);
}));

//# sourceMappingURL=events.js.map?rel=1524412446885
