// Compiled by ClojureScript 1.10.238 {}
goog.provide('yugiohcardeffect.cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (state,_){
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),""),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),false),new cljs.core.Keyword("trigger","quick-effect","trigger/quick-effect",-1128192052),false),new cljs.core.Keyword("activation-limit","state","activation-limit/state",2109493201),false),new cljs.core.Keyword("activation-limit","type","activation-limit/type",1245317328),new cljs.core.Keyword(null,"turn","turn",75759344)),new cljs.core.Keyword("activation-limit","count","activation-limit/count",-1974968655),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.Keyword("timing","state","timing/state",1166796759),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"relativity","relativity",-1195946453)], null),new cljs.core.Keyword(null,"none","none",1333468478)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"target-indicator","target-indicator",219319818)], null),new cljs.core.Keyword(null,"the","the",1825912652)),new cljs.core.Keyword("timing","type","timing/type",-1720925978),new cljs.core.Keyword(null,"main-phase","main-phase",-189163811));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"card-name-update","card-name-update",-486560690),(function (state,p__50805){
var vec__50806 = p__50805;
var _ = cljs.core.nth.call(null,vec__50806,(0),null);
var name = cljs.core.nth.call(null,vec__50806,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-name","card-name",-2035606807)], null),name);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"trigger-state-update","trigger-state-update",1245137160),(function (state,p__50809){
var vec__50810 = p__50809;
var _ = cljs.core.nth.call(null,vec__50810,(0),null);
var active = cljs.core.nth.call(null,vec__50810,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger","trigger",103466139),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("trigger","quick-effect-update","trigger/quick-effect-update",-1723423923),(function (state,p__50813){
var vec__50814 = p__50813;
var _ = cljs.core.nth.call(null,vec__50814,(0),null);
var value = cljs.core.nth.call(null,vec__50814,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("trigger","quick-effect","trigger/quick-effect",-1128192052),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("activation-limit","state-update","activation-limit/state-update",-915265913),(function (state,p__50817){
var vec__50818 = p__50817;
var _ = cljs.core.nth.call(null,vec__50818,(0),null);
var value = cljs.core.nth.call(null,vec__50818,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("activation-limit","state","activation-limit/state",2109493201),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("activation-limit","type-update","activation-limit/type-update",1807667397),(function (state,p__50821){
var vec__50822 = p__50821;
var _ = cljs.core.nth.call(null,vec__50822,(0),null);
var value = cljs.core.nth.call(null,vec__50822,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("activation-limit","type","activation-limit/type",1245317328),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("activation-limit","count-update","activation-limit/count-update",-1863189552),(function (state,p__50825){
var vec__50826 = p__50825;
var _ = cljs.core.nth.call(null,vec__50826,(0),null);
var value = cljs.core.nth.call(null,vec__50826,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("activation-limit","count","activation-limit/count",-1974968655),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("timing","state-update","timing/state-update",-1843306879),(function (state,p__50829){
var vec__50830 = p__50829;
var _ = cljs.core.nth.call(null,vec__50830,(0),null);
var value = cljs.core.nth.call(null,vec__50830,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("timing","state","timing/state",1166796759),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timing-relativity-update","timing-relativity-update",-586623676),(function (state,p__50833){
var vec__50834 = p__50833;
var _ = cljs.core.nth.call(null,vec__50834,(0),null);
var value = cljs.core.nth.call(null,vec__50834,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"relativity","relativity",-1195946453)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timing-target-indicator-update","timing-target-indicator-update",-1399162318),(function (state,p__50837){
var vec__50838 = p__50837;
var _ = cljs.core.nth.call(null,vec__50838,(0),null);
var value = cljs.core.nth.call(null,vec__50838,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timing","timing",-1849225195),new cljs.core.Keyword(null,"target-indicator","target-indicator",219319818)], null),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("timing","type-update","timing/type-update",-2062612277),(function (state,p__50841){
var vec__50842 = p__50841;
var _ = cljs.core.nth.call(null,vec__50842,(0),null);
var value = cljs.core.nth.call(null,vec__50842,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("timing","type","timing/type",-1720925978),value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-state-update","activation-restriction-state-update",767562380),(function (state,p__50845){
var vec__50846 = p__50845;
var _ = cljs.core.nth.call(null,vec__50846,(0),null);
var active = cljs.core.nth.call(null,vec__50846,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"state","state",-1988618099)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),(function (state,p__50849){
var vec__50850 = p__50849;
var _ = cljs.core.nth.call(null,vec__50850,(0),null);
var active = cljs.core.nth.call(null,vec__50850,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"only","only",1907811652)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-count-update","activation-restriction-count-update",434856628),(function (state,p__50853){
var vec__50854 = p__50853;
var _ = cljs.core.nth.call(null,vec__50854,(0),null);
var count = cljs.core.nth.call(null,vec__50854,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"count","count",2139924085)], null),count);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-type-update","activation-restriction-type-update",-506532500),(function (state,p__50857){
var vec__50858 = p__50857;
var _ = cljs.core.nth.call(null,vec__50858,(0),null);
var type = cljs.core.nth.call(null,vec__50858,(1),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"duel","duel",-865799345))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction-only-update","activation-restriction-only-update",-1594211316),true], null));
} else {
}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"type","type",1174270348)], null),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-activation-update","activation-restriction-activation-update",-1604970131),(function (state,p__50861){
var vec__50862 = p__50861;
var _ = cljs.core.nth.call(null,vec__50862,(0),null);
var active = cljs.core.nth.call(null,vec__50862,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"activation","activation",2128521072)], null),active);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-effect-reference-update","activation-restriction-effect-reference-update",-1914157374),(function (state,p__50865){
var vec__50866 = p__50865;
var _ = cljs.core.nth.call(null,vec__50866,(0),null);
var reference = cljs.core.nth.call(null,vec__50866,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"effect-reference","effect-reference",487013198)], null),reference);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activation-restriction-restriction-level-update","activation-restriction-restriction-level-update",412302692),(function (state,p__50869){
var vec__50870 = p__50869;
var _ = cljs.core.nth.call(null,vec__50870,(0),null);
var level = cljs.core.nth.call(null,vec__50870,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activation-restriction","activation-restriction",1637227284),new cljs.core.Keyword(null,"restriction-level","restriction-level",787531012)], null),level);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-state-update","once-per-state-update",-1361413236),(function (state,p__50873){
var vec__50874 = p__50873;
var _ = cljs.core.nth.call(null,vec__50874,(0),null);
var once_per_state = cljs.core.nth.call(null,vec__50874,(1),null);
var G__50877_50878 = once_per_state;
var G__50877_50879__$1 = (((G__50877_50878 instanceof cljs.core.Keyword))?G__50877_50878.fqn:null);
switch (G__50877_50879__$1) {
case "none":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"none","none",1333468478)], null));

break;
case "once-per":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),new cljs.core.Keyword(null,"turn","turn",75759344)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50877_50879__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"state","state",-1988618099)], null),once_per_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-time-update","once-per-time-update",1195537752),(function (state,p__50881){
var vec__50882 = p__50881;
var _ = cljs.core.nth.call(null,vec__50882,(0),null);
var time = cljs.core.nth.call(null,vec__50882,(1),null);
var G__50885_50886 = time;
var G__50885_50887__$1 = (((G__50885_50886 instanceof cljs.core.Keyword))?G__50885_50886.fqn:null);
switch (G__50885_50887__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50885_50887__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"time","time",1385887882)], null),time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-player-update","once-per-player-update",1981665774),(function (state,p__50889){
var vec__50890 = p__50889;
var _ = cljs.core.nth.call(null,vec__50890,(0),null);
var who = cljs.core.nth.call(null,vec__50890,(1),null);
var G__50893_50894 = who;
var G__50893_50895__$1 = (((G__50893_50894 instanceof cljs.core.Keyword))?G__50893_50894.fqn:null);
switch (G__50893_50895__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50893_50895__$1)].join('')));

}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"player","player",-97687400)], null),who);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-phase-update","once-per-phase-update",-1378851269),(function (state,p__50897){
var vec__50898 = p__50897;
var _ = cljs.core.nth.call(null,vec__50898,(0),null);
var phase = cljs.core.nth.call(null,vec__50898,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"phase","phase",575722892)], null),phase);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"once-per-include-player-update","once-per-include-player-update",-60609017),(function (state,p__50901){
var vec__50902 = p__50901;
var _ = cljs.core.nth.call(null,vec__50902,(0),null);
var include = cljs.core.nth.call(null,vec__50902,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-per","once-per",-1282559935),new cljs.core.Keyword(null,"include-player","include-player",865133756)], null),include);
}));

//# sourceMappingURL=events.js.map?rel=1526501179902
