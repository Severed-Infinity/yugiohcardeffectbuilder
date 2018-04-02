// Compiled by ClojureScript 1.9.946 {}
goog.provide('yugiohcardeffect.cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (state,_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"once","once",-262568523)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),new cljs.core.Keyword(null,"activate","activate",441219614)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),new cljs.core.Keyword(null,"this-effect","this-effect",-1999025353)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),new cljs.core.Keyword(null,"this-card","this-card",759993696)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"count","count",2139924085)], null),new cljs.core.Keyword(null,"once","once",-262568523)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),new cljs.core.Keyword(null,"any","any",1705907423)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),new cljs.core.Keyword(null,"any","any",1705907423)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),new cljs.core.Keyword(null,"off","off",606440789));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"card-name-update","card-name-update",-486560690),(function (state,p__51980){
var vec__51981 = p__51980;
var _ = cljs.core.nth.call(null,vec__51981,(0),null);
var name = cljs.core.nth.call(null,vec__51981,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-state-update","activation-restriction-state-update",767562380),(function (state,p__51984){
var vec__51985 = p__51984;
var _ = cljs.core.nth.call(null,vec__51985,(0),null);
var active = cljs.core.nth.call(null,vec__51985,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),(function (state,p__51988){
var vec__51989 = p__51988;
var _ = cljs.core.nth.call(null,vec__51989,(0),null);
var active = cljs.core.nth.call(null,vec__51989,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-count-update","activation-restriction-count-update",434856628),(function (state,p__51992){
var vec__51993 = p__51992;
var _ = cljs.core.nth.call(null,vec__51993,(0),null);
var count = cljs.core.nth.call(null,vec__51993,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),count);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-type-update","activation-restriction-type-update",-506532500),(function (state,p__51996){
var vec__51997 = p__51996;
var _ = cljs.core.nth.call(null,vec__51997,(0),null);
var type = cljs.core.nth.call(null,vec__51997,(1),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"duel","duel",-865799345))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),true], null));
} else {
}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-activation-update","activation-restriction-activation-update",-1604970131),(function (state,p__52000){
var vec__52001 = p__52000;
var _ = cljs.core.nth.call(null,vec__52001,(0),null);
var active = cljs.core.nth.call(null,vec__52001,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-effect-reference-update","activation-restriction-effect-reference-update",-1914157374),(function (state,p__52004){
var vec__52005 = p__52004;
var _ = cljs.core.nth.call(null,vec__52005,(0),null);
var reference = cljs.core.nth.call(null,vec__52005,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),reference);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-restriction-level-update","activation-restriction-restriction-level-update",412302692),(function (state,p__52008){
var vec__52009 = p__52008;
var _ = cljs.core.nth.call(null,vec__52009,(0),null);
var level = cljs.core.nth.call(null,vec__52009,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),level);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-state-update","once-per-state-update",-1361413236),(function (state,p__52012){
var vec__52013 = p__52012;
var _ = cljs.core.nth.call(null,vec__52013,(0),null);
var once_per_state = cljs.core.nth.call(null,vec__52013,(1),null);
var G__52016_52017 = once_per_state;
var G__52016_52018__$1 = (((G__52016_52017 instanceof cljs.core.Keyword))?G__52016_52017.fqn:null);
switch (G__52016_52018__$1) {
case "none":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"none","none",1333468478)], null));

break;
case "once-per":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"turn","turn",75759344)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52016_52018__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),once_per_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),(function (state,p__52020){
var vec__52021 = p__52020;
var _ = cljs.core.nth.call(null,vec__52021,(0),null);
var time = cljs.core.nth.call(null,vec__52021,(1),null);
var G__52024_52025 = time;
var G__52024_52026__$1 = (((G__52024_52025 instanceof cljs.core.Keyword))?G__52024_52025.fqn:null);
switch (G__52024_52026__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52024_52026__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),(function (state,p__52028){
var vec__52029 = p__52028;
var _ = cljs.core.nth.call(null,vec__52029,(0),null);
var who = cljs.core.nth.call(null,vec__52029,(1),null);
var G__52032_52033 = who;
var G__52032_52034__$1 = (((G__52032_52033 instanceof cljs.core.Keyword))?G__52032_52033.fqn:null);
switch (G__52032_52034__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52032_52034__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),who);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),(function (state,p__52036){
var vec__52037 = p__52036;
var _ = cljs.core.nth.call(null,vec__52037,(0),null);
var phase = cljs.core.nth.call(null,vec__52037,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),phase);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),(function (state,p__52040){
var vec__52041 = p__52040;
var _ = cljs.core.nth.call(null,vec__52041,(0),null);
var include = cljs.core.nth.call(null,vec__52041,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),include);
}));

//# sourceMappingURL=events.js.map?rel=1521587779272
