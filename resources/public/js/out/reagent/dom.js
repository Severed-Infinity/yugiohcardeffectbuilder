// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_50139 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_50139){
return (function (){
var _STAR_always_update_STAR_50140 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50140;
}});})(_STAR_always_update_STAR_50139))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_50139;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__50142 = arguments.length;
switch (G__50142) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__50144_50148 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__50145_50149 = null;
var count__50146_50150 = (0);
var i__50147_50151 = (0);
while(true){
if((i__50147_50151 < count__50146_50150)){
var v_50152 = cljs.core._nth.call(null,chunk__50145_50149,i__50147_50151);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_50152);

var G__50153 = seq__50144_50148;
var G__50154 = chunk__50145_50149;
var G__50155 = count__50146_50150;
var G__50156 = (i__50147_50151 + (1));
seq__50144_50148 = G__50153;
chunk__50145_50149 = G__50154;
count__50146_50150 = G__50155;
i__50147_50151 = G__50156;
continue;
} else {
var temp__4657__auto___50157 = cljs.core.seq.call(null,seq__50144_50148);
if(temp__4657__auto___50157){
var seq__50144_50158__$1 = temp__4657__auto___50157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50144_50158__$1)){
var c__48027__auto___50159 = cljs.core.chunk_first.call(null,seq__50144_50158__$1);
var G__50160 = cljs.core.chunk_rest.call(null,seq__50144_50158__$1);
var G__50161 = c__48027__auto___50159;
var G__50162 = cljs.core.count.call(null,c__48027__auto___50159);
var G__50163 = (0);
seq__50144_50148 = G__50160;
chunk__50145_50149 = G__50161;
count__50146_50150 = G__50162;
i__50147_50151 = G__50163;
continue;
} else {
var v_50164 = cljs.core.first.call(null,seq__50144_50158__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_50164);

var G__50165 = cljs.core.next.call(null,seq__50144_50158__$1);
var G__50166 = null;
var G__50167 = (0);
var G__50168 = (0);
seq__50144_50148 = G__50165;
chunk__50145_50149 = G__50166;
count__50146_50150 = G__50167;
i__50147_50151 = G__50168;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1521587775655
