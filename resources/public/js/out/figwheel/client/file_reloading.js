// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50292_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50292_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__50293 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50294 = null;
var count__50295 = (0);
var i__50296 = (0);
while(true){
if((i__50296 < count__50295)){
var n = cljs.core._nth.call(null,chunk__50294,i__50296);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__50297 = seq__50293;
var G__50298 = chunk__50294;
var G__50299 = count__50295;
var G__50300 = (i__50296 + (1));
seq__50293 = G__50297;
chunk__50294 = G__50298;
count__50295 = G__50299;
i__50296 = G__50300;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50293);
if(temp__5457__auto__){
var seq__50293__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50293__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50293__$1);
var G__50301 = cljs.core.chunk_rest.call(null,seq__50293__$1);
var G__50302 = c__4319__auto__;
var G__50303 = cljs.core.count.call(null,c__4319__auto__);
var G__50304 = (0);
seq__50293 = G__50301;
chunk__50294 = G__50302;
count__50295 = G__50303;
i__50296 = G__50304;
continue;
} else {
var n = cljs.core.first.call(null,seq__50293__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__50305 = cljs.core.next.call(null,seq__50293__$1);
var G__50306 = null;
var G__50307 = (0);
var G__50308 = (0);
seq__50293 = G__50305;
chunk__50294 = G__50306;
count__50295 = G__50307;
i__50296 = G__50308;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__50309){
var vec__50310 = p__50309;
var _ = cljs.core.nth.call(null,vec__50310,(0),null);
var v = cljs.core.nth.call(null,vec__50310,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__50313){
var vec__50314 = p__50313;
var k = cljs.core.nth.call(null,vec__50314,(0),null);
var v = cljs.core.nth.call(null,vec__50314,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__50326_50334 = cljs.core.seq.call(null,deps);
var chunk__50327_50335 = null;
var count__50328_50336 = (0);
var i__50329_50337 = (0);
while(true){
if((i__50329_50337 < count__50328_50336)){
var dep_50338 = cljs.core._nth.call(null,chunk__50327_50335,i__50329_50337);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_50338;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50338));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50338,(depth + (1)),state);
} else {
}


var G__50339 = seq__50326_50334;
var G__50340 = chunk__50327_50335;
var G__50341 = count__50328_50336;
var G__50342 = (i__50329_50337 + (1));
seq__50326_50334 = G__50339;
chunk__50327_50335 = G__50340;
count__50328_50336 = G__50341;
i__50329_50337 = G__50342;
continue;
} else {
var temp__5457__auto___50343 = cljs.core.seq.call(null,seq__50326_50334);
if(temp__5457__auto___50343){
var seq__50326_50344__$1 = temp__5457__auto___50343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50326_50344__$1)){
var c__4319__auto___50345 = cljs.core.chunk_first.call(null,seq__50326_50344__$1);
var G__50346 = cljs.core.chunk_rest.call(null,seq__50326_50344__$1);
var G__50347 = c__4319__auto___50345;
var G__50348 = cljs.core.count.call(null,c__4319__auto___50345);
var G__50349 = (0);
seq__50326_50334 = G__50346;
chunk__50327_50335 = G__50347;
count__50328_50336 = G__50348;
i__50329_50337 = G__50349;
continue;
} else {
var dep_50350 = cljs.core.first.call(null,seq__50326_50344__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_50350;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50350));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50350,(depth + (1)),state);
} else {
}


var G__50351 = cljs.core.next.call(null,seq__50326_50344__$1);
var G__50352 = null;
var G__50353 = (0);
var G__50354 = (0);
seq__50326_50334 = G__50351;
chunk__50327_50335 = G__50352;
count__50328_50336 = G__50353;
i__50329_50337 = G__50354;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50330){
var vec__50331 = p__50330;
var seq__50332 = cljs.core.seq.call(null,vec__50331);
var first__50333 = cljs.core.first.call(null,seq__50332);
var seq__50332__$1 = cljs.core.next.call(null,seq__50332);
var x = first__50333;
var xs = seq__50332__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50331,seq__50332,first__50333,seq__50332__$1,x,xs,get_deps__$1){
return (function (p1__50317_SHARP_){
return clojure.set.difference.call(null,p1__50317_SHARP_,x);
});})(vec__50331,seq__50332,first__50333,seq__50332__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__50355 = cljs.core.seq.call(null,provides);
var chunk__50356 = null;
var count__50357 = (0);
var i__50358 = (0);
while(true){
if((i__50358 < count__50357)){
var prov = cljs.core._nth.call(null,chunk__50356,i__50358);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50359_50367 = cljs.core.seq.call(null,requires);
var chunk__50360_50368 = null;
var count__50361_50369 = (0);
var i__50362_50370 = (0);
while(true){
if((i__50362_50370 < count__50361_50369)){
var req_50371 = cljs.core._nth.call(null,chunk__50360_50368,i__50362_50370);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50371,prov);


var G__50372 = seq__50359_50367;
var G__50373 = chunk__50360_50368;
var G__50374 = count__50361_50369;
var G__50375 = (i__50362_50370 + (1));
seq__50359_50367 = G__50372;
chunk__50360_50368 = G__50373;
count__50361_50369 = G__50374;
i__50362_50370 = G__50375;
continue;
} else {
var temp__5457__auto___50376 = cljs.core.seq.call(null,seq__50359_50367);
if(temp__5457__auto___50376){
var seq__50359_50377__$1 = temp__5457__auto___50376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50359_50377__$1)){
var c__4319__auto___50378 = cljs.core.chunk_first.call(null,seq__50359_50377__$1);
var G__50379 = cljs.core.chunk_rest.call(null,seq__50359_50377__$1);
var G__50380 = c__4319__auto___50378;
var G__50381 = cljs.core.count.call(null,c__4319__auto___50378);
var G__50382 = (0);
seq__50359_50367 = G__50379;
chunk__50360_50368 = G__50380;
count__50361_50369 = G__50381;
i__50362_50370 = G__50382;
continue;
} else {
var req_50383 = cljs.core.first.call(null,seq__50359_50377__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50383,prov);


var G__50384 = cljs.core.next.call(null,seq__50359_50377__$1);
var G__50385 = null;
var G__50386 = (0);
var G__50387 = (0);
seq__50359_50367 = G__50384;
chunk__50360_50368 = G__50385;
count__50361_50369 = G__50386;
i__50362_50370 = G__50387;
continue;
}
} else {
}
}
break;
}


var G__50388 = seq__50355;
var G__50389 = chunk__50356;
var G__50390 = count__50357;
var G__50391 = (i__50358 + (1));
seq__50355 = G__50388;
chunk__50356 = G__50389;
count__50357 = G__50390;
i__50358 = G__50391;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50355);
if(temp__5457__auto__){
var seq__50355__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50355__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50355__$1);
var G__50392 = cljs.core.chunk_rest.call(null,seq__50355__$1);
var G__50393 = c__4319__auto__;
var G__50394 = cljs.core.count.call(null,c__4319__auto__);
var G__50395 = (0);
seq__50355 = G__50392;
chunk__50356 = G__50393;
count__50357 = G__50394;
i__50358 = G__50395;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50355__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50363_50396 = cljs.core.seq.call(null,requires);
var chunk__50364_50397 = null;
var count__50365_50398 = (0);
var i__50366_50399 = (0);
while(true){
if((i__50366_50399 < count__50365_50398)){
var req_50400 = cljs.core._nth.call(null,chunk__50364_50397,i__50366_50399);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50400,prov);


var G__50401 = seq__50363_50396;
var G__50402 = chunk__50364_50397;
var G__50403 = count__50365_50398;
var G__50404 = (i__50366_50399 + (1));
seq__50363_50396 = G__50401;
chunk__50364_50397 = G__50402;
count__50365_50398 = G__50403;
i__50366_50399 = G__50404;
continue;
} else {
var temp__5457__auto___50405__$1 = cljs.core.seq.call(null,seq__50363_50396);
if(temp__5457__auto___50405__$1){
var seq__50363_50406__$1 = temp__5457__auto___50405__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50363_50406__$1)){
var c__4319__auto___50407 = cljs.core.chunk_first.call(null,seq__50363_50406__$1);
var G__50408 = cljs.core.chunk_rest.call(null,seq__50363_50406__$1);
var G__50409 = c__4319__auto___50407;
var G__50410 = cljs.core.count.call(null,c__4319__auto___50407);
var G__50411 = (0);
seq__50363_50396 = G__50408;
chunk__50364_50397 = G__50409;
count__50365_50398 = G__50410;
i__50366_50399 = G__50411;
continue;
} else {
var req_50412 = cljs.core.first.call(null,seq__50363_50406__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50412,prov);


var G__50413 = cljs.core.next.call(null,seq__50363_50406__$1);
var G__50414 = null;
var G__50415 = (0);
var G__50416 = (0);
seq__50363_50396 = G__50413;
chunk__50364_50397 = G__50414;
count__50365_50398 = G__50415;
i__50366_50399 = G__50416;
continue;
}
} else {
}
}
break;
}


var G__50417 = cljs.core.next.call(null,seq__50355__$1);
var G__50418 = null;
var G__50419 = (0);
var G__50420 = (0);
seq__50355 = G__50417;
chunk__50356 = G__50418;
count__50357 = G__50419;
i__50358 = G__50420;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50421_50425 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50422_50426 = null;
var count__50423_50427 = (0);
var i__50424_50428 = (0);
while(true){
if((i__50424_50428 < count__50423_50427)){
var ns_50429 = cljs.core._nth.call(null,chunk__50422_50426,i__50424_50428);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50429);


var G__50430 = seq__50421_50425;
var G__50431 = chunk__50422_50426;
var G__50432 = count__50423_50427;
var G__50433 = (i__50424_50428 + (1));
seq__50421_50425 = G__50430;
chunk__50422_50426 = G__50431;
count__50423_50427 = G__50432;
i__50424_50428 = G__50433;
continue;
} else {
var temp__5457__auto___50434 = cljs.core.seq.call(null,seq__50421_50425);
if(temp__5457__auto___50434){
var seq__50421_50435__$1 = temp__5457__auto___50434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50421_50435__$1)){
var c__4319__auto___50436 = cljs.core.chunk_first.call(null,seq__50421_50435__$1);
var G__50437 = cljs.core.chunk_rest.call(null,seq__50421_50435__$1);
var G__50438 = c__4319__auto___50436;
var G__50439 = cljs.core.count.call(null,c__4319__auto___50436);
var G__50440 = (0);
seq__50421_50425 = G__50437;
chunk__50422_50426 = G__50438;
count__50423_50427 = G__50439;
i__50424_50428 = G__50440;
continue;
} else {
var ns_50441 = cljs.core.first.call(null,seq__50421_50435__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50441);


var G__50442 = cljs.core.next.call(null,seq__50421_50435__$1);
var G__50443 = null;
var G__50444 = (0);
var G__50445 = (0);
seq__50421_50425 = G__50442;
chunk__50422_50426 = G__50443;
count__50423_50427 = G__50444;
i__50424_50428 = G__50445;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50446__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50447__i = 0, G__50447__a = new Array(arguments.length -  0);
while (G__50447__i < G__50447__a.length) {G__50447__a[G__50447__i] = arguments[G__50447__i + 0]; ++G__50447__i;}
  args = new cljs.core.IndexedSeq(G__50447__a,0,null);
} 
return G__50446__delegate.call(this,args);};
G__50446.cljs$lang$maxFixedArity = 0;
G__50446.cljs$lang$applyTo = (function (arglist__50448){
var args = cljs.core.seq(arglist__50448);
return G__50446__delegate(args);
});
G__50446.cljs$core$IFn$_invoke$arity$variadic = G__50446__delegate;
return G__50446;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__50449_SHARP_,p2__50450_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50449_SHARP_)].join('')),p2__50450_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__50451_SHARP_,p2__50452_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50451_SHARP_)].join(''),p2__50452_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__50453 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__50453.addCallback(((function (G__50453){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__50453))
);

G__50453.addErrback(((function (G__50453){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__50453))
);

return G__50453;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e50454){if((e50454 instanceof Error)){
var e = e50454;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50454;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50455){if((e50455 instanceof Error)){
var e = e50455;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50455;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50456 = cljs.core._EQ_;
var expr__50457 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50456.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50457))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__50456.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50457))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__50456.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__50457))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__50456,expr__50457){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50456,expr__50457))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50459,callback){
var map__50460 = p__50459;
var map__50460__$1 = ((((!((map__50460 == null)))?(((((map__50460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50460):map__50460);
var file_msg = map__50460__$1;
var request_url = cljs.core.get.call(null,map__50460__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__50460,map__50460__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50460,map__50460__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__){
return (function (state_50498){
var state_val_50499 = (state_50498[(1)]);
if((state_val_50499 === (7))){
var inst_50494 = (state_50498[(2)]);
var state_50498__$1 = state_50498;
var statearr_50500_50526 = state_50498__$1;
(statearr_50500_50526[(2)] = inst_50494);

(statearr_50500_50526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (1))){
var state_50498__$1 = state_50498;
var statearr_50501_50527 = state_50498__$1;
(statearr_50501_50527[(2)] = null);

(statearr_50501_50527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (4))){
var inst_50464 = (state_50498[(7)]);
var inst_50464__$1 = (state_50498[(2)]);
var state_50498__$1 = (function (){var statearr_50502 = state_50498;
(statearr_50502[(7)] = inst_50464__$1);

return statearr_50502;
})();
if(cljs.core.truth_(inst_50464__$1)){
var statearr_50503_50528 = state_50498__$1;
(statearr_50503_50528[(1)] = (5));

} else {
var statearr_50504_50529 = state_50498__$1;
(statearr_50504_50529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (15))){
var inst_50479 = (state_50498[(8)]);
var inst_50477 = (state_50498[(9)]);
var inst_50481 = inst_50479.call(null,inst_50477);
var state_50498__$1 = state_50498;
var statearr_50505_50530 = state_50498__$1;
(statearr_50505_50530[(2)] = inst_50481);

(statearr_50505_50530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (13))){
var inst_50488 = (state_50498[(2)]);
var state_50498__$1 = state_50498;
var statearr_50506_50531 = state_50498__$1;
(statearr_50506_50531[(2)] = inst_50488);

(statearr_50506_50531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (6))){
var state_50498__$1 = state_50498;
var statearr_50507_50532 = state_50498__$1;
(statearr_50507_50532[(2)] = null);

(statearr_50507_50532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (17))){
var inst_50485 = (state_50498[(2)]);
var state_50498__$1 = state_50498;
var statearr_50508_50533 = state_50498__$1;
(statearr_50508_50533[(2)] = inst_50485);

(statearr_50508_50533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (3))){
var inst_50496 = (state_50498[(2)]);
var state_50498__$1 = state_50498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50498__$1,inst_50496);
} else {
if((state_val_50499 === (12))){
var state_50498__$1 = state_50498;
var statearr_50509_50534 = state_50498__$1;
(statearr_50509_50534[(2)] = null);

(statearr_50509_50534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (2))){
var state_50498__$1 = state_50498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50498__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50499 === (11))){
var inst_50469 = (state_50498[(10)]);
var inst_50475 = figwheel.client.file_reloading.blocking_load.call(null,inst_50469);
var state_50498__$1 = state_50498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50498__$1,(14),inst_50475);
} else {
if((state_val_50499 === (9))){
var inst_50469 = (state_50498[(10)]);
var state_50498__$1 = state_50498;
if(cljs.core.truth_(inst_50469)){
var statearr_50510_50535 = state_50498__$1;
(statearr_50510_50535[(1)] = (11));

} else {
var statearr_50511_50536 = state_50498__$1;
(statearr_50511_50536[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (5))){
var inst_50464 = (state_50498[(7)]);
var inst_50470 = (state_50498[(11)]);
var inst_50469 = cljs.core.nth.call(null,inst_50464,(0),null);
var inst_50470__$1 = cljs.core.nth.call(null,inst_50464,(1),null);
var state_50498__$1 = (function (){var statearr_50512 = state_50498;
(statearr_50512[(10)] = inst_50469);

(statearr_50512[(11)] = inst_50470__$1);

return statearr_50512;
})();
if(cljs.core.truth_(inst_50470__$1)){
var statearr_50513_50537 = state_50498__$1;
(statearr_50513_50537[(1)] = (8));

} else {
var statearr_50514_50538 = state_50498__$1;
(statearr_50514_50538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (14))){
var inst_50469 = (state_50498[(10)]);
var inst_50479 = (state_50498[(8)]);
var inst_50477 = (state_50498[(2)]);
var inst_50478 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50479__$1 = cljs.core.get.call(null,inst_50478,inst_50469);
var state_50498__$1 = (function (){var statearr_50515 = state_50498;
(statearr_50515[(8)] = inst_50479__$1);

(statearr_50515[(9)] = inst_50477);

return statearr_50515;
})();
if(cljs.core.truth_(inst_50479__$1)){
var statearr_50516_50539 = state_50498__$1;
(statearr_50516_50539[(1)] = (15));

} else {
var statearr_50517_50540 = state_50498__$1;
(statearr_50517_50540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (16))){
var inst_50477 = (state_50498[(9)]);
var inst_50483 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50477);
var state_50498__$1 = state_50498;
var statearr_50518_50541 = state_50498__$1;
(statearr_50518_50541[(2)] = inst_50483);

(statearr_50518_50541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (10))){
var inst_50490 = (state_50498[(2)]);
var state_50498__$1 = (function (){var statearr_50519 = state_50498;
(statearr_50519[(12)] = inst_50490);

return statearr_50519;
})();
var statearr_50520_50542 = state_50498__$1;
(statearr_50520_50542[(2)] = null);

(statearr_50520_50542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50499 === (8))){
var inst_50470 = (state_50498[(11)]);
var inst_50472 = eval(inst_50470);
var state_50498__$1 = state_50498;
var statearr_50521_50543 = state_50498__$1;
(statearr_50521_50543[(2)] = inst_50472);

(statearr_50521_50543[(1)] = (10));


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
}
}
}
}
}
});})(c__48188__auto__))
;
return ((function (switch__48098__auto__,c__48188__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48099__auto__ = null;
var figwheel$client$file_reloading$state_machine__48099__auto____0 = (function (){
var statearr_50522 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50522[(0)] = figwheel$client$file_reloading$state_machine__48099__auto__);

(statearr_50522[(1)] = (1));

return statearr_50522;
});
var figwheel$client$file_reloading$state_machine__48099__auto____1 = (function (state_50498){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_50498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e50523){if((e50523 instanceof Object)){
var ex__48102__auto__ = e50523;
var statearr_50524_50544 = state_50498;
(statearr_50524_50544[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50545 = state_50498;
state_50498 = G__50545;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48099__auto__ = function(state_50498){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48099__auto____1.call(this,state_50498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48099__auto____0;
figwheel$client$file_reloading$state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48099__auto____1;
return figwheel$client$file_reloading$state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__))
})();
var state__48190__auto__ = (function (){var statearr_50525 = f__48189__auto__.call(null);
(statearr_50525[(6)] = c__48188__auto__);

return statearr_50525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__))
);

return c__48188__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__50547 = arguments.length;
switch (G__50547) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50549,callback){
var map__50550 = p__50549;
var map__50550__$1 = ((((!((map__50550 == null)))?(((((map__50550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50550):map__50550);
var file_msg = map__50550__$1;
var namespace = cljs.core.get.call(null,map__50550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50550,map__50550__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50550,map__50550__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50552){
var map__50553 = p__50552;
var map__50553__$1 = ((((!((map__50553 == null)))?(((((map__50553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50553):map__50553);
var file_msg = map__50553__$1;
var namespace = cljs.core.get.call(null,map__50553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50555){
var map__50556 = p__50555;
var map__50556__$1 = ((((!((map__50556 == null)))?(((((map__50556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50556):map__50556);
var file_msg = map__50556__$1;
var namespace = cljs.core.get.call(null,map__50556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50558,callback){
var map__50559 = p__50558;
var map__50559__$1 = ((((!((map__50559 == null)))?(((((map__50559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50559):map__50559);
var file_msg = map__50559__$1;
var request_url = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__48188__auto___50609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto___50609,out){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto___50609,out){
return (function (state_50594){
var state_val_50595 = (state_50594[(1)]);
if((state_val_50595 === (1))){
var inst_50568 = cljs.core.seq.call(null,files);
var inst_50569 = cljs.core.first.call(null,inst_50568);
var inst_50570 = cljs.core.next.call(null,inst_50568);
var inst_50571 = files;
var state_50594__$1 = (function (){var statearr_50596 = state_50594;
(statearr_50596[(7)] = inst_50571);

(statearr_50596[(8)] = inst_50569);

(statearr_50596[(9)] = inst_50570);

return statearr_50596;
})();
var statearr_50597_50610 = state_50594__$1;
(statearr_50597_50610[(2)] = null);

(statearr_50597_50610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50595 === (2))){
var inst_50571 = (state_50594[(7)]);
var inst_50577 = (state_50594[(10)]);
var inst_50576 = cljs.core.seq.call(null,inst_50571);
var inst_50577__$1 = cljs.core.first.call(null,inst_50576);
var inst_50578 = cljs.core.next.call(null,inst_50576);
var inst_50579 = (inst_50577__$1 == null);
var inst_50580 = cljs.core.not.call(null,inst_50579);
var state_50594__$1 = (function (){var statearr_50598 = state_50594;
(statearr_50598[(11)] = inst_50578);

(statearr_50598[(10)] = inst_50577__$1);

return statearr_50598;
})();
if(inst_50580){
var statearr_50599_50611 = state_50594__$1;
(statearr_50599_50611[(1)] = (4));

} else {
var statearr_50600_50612 = state_50594__$1;
(statearr_50600_50612[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50595 === (3))){
var inst_50592 = (state_50594[(2)]);
var state_50594__$1 = state_50594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50594__$1,inst_50592);
} else {
if((state_val_50595 === (4))){
var inst_50577 = (state_50594[(10)]);
var inst_50582 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50577);
var state_50594__$1 = state_50594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50594__$1,(7),inst_50582);
} else {
if((state_val_50595 === (5))){
var inst_50588 = cljs.core.async.close_BANG_.call(null,out);
var state_50594__$1 = state_50594;
var statearr_50601_50613 = state_50594__$1;
(statearr_50601_50613[(2)] = inst_50588);

(statearr_50601_50613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50595 === (6))){
var inst_50590 = (state_50594[(2)]);
var state_50594__$1 = state_50594;
var statearr_50602_50614 = state_50594__$1;
(statearr_50602_50614[(2)] = inst_50590);

(statearr_50602_50614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50595 === (7))){
var inst_50578 = (state_50594[(11)]);
var inst_50584 = (state_50594[(2)]);
var inst_50585 = cljs.core.async.put_BANG_.call(null,out,inst_50584);
var inst_50571 = inst_50578;
var state_50594__$1 = (function (){var statearr_50603 = state_50594;
(statearr_50603[(7)] = inst_50571);

(statearr_50603[(12)] = inst_50585);

return statearr_50603;
})();
var statearr_50604_50615 = state_50594__$1;
(statearr_50604_50615[(2)] = null);

(statearr_50604_50615[(1)] = (2));


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
});})(c__48188__auto___50609,out))
;
return ((function (switch__48098__auto__,c__48188__auto___50609,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto____0 = (function (){
var statearr_50605 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50605[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto__);

(statearr_50605[(1)] = (1));

return statearr_50605;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto____1 = (function (state_50594){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_50594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e50606){if((e50606 instanceof Object)){
var ex__48102__auto__ = e50606;
var statearr_50607_50616 = state_50594;
(statearr_50607_50616[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50617 = state_50594;
state_50594 = G__50617;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto__ = function(state_50594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto____1.call(this,state_50594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto___50609,out))
})();
var state__48190__auto__ = (function (){var statearr_50608 = f__48189__auto__.call(null);
(statearr_50608[(6)] = c__48188__auto___50609);

return statearr_50608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto___50609,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50618,opts){
var map__50619 = p__50618;
var map__50619__$1 = ((((!((map__50619 == null)))?(((((map__50619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50619):map__50619);
var eval_body = cljs.core.get.call(null,map__50619__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50619__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50621){var e = e50621;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50622_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50622_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50623){
var vec__50624 = p__50623;
var k = cljs.core.nth.call(null,vec__50624,(0),null);
var v = cljs.core.nth.call(null,vec__50624,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50627){
var vec__50628 = p__50627;
var k = cljs.core.nth.call(null,vec__50628,(0),null);
var v = cljs.core.nth.call(null,vec__50628,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50634,p__50635){
var map__50636 = p__50634;
var map__50636__$1 = ((((!((map__50636 == null)))?(((((map__50636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50636):map__50636);
var opts = map__50636__$1;
var before_jsload = cljs.core.get.call(null,map__50636__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50636__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50636__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50637 = p__50635;
var map__50637__$1 = ((((!((map__50637 == null)))?(((((map__50637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50637):map__50637);
var msg = map__50637__$1;
var files = cljs.core.get.call(null,map__50637__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50637__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50637__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48188__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48189__auto__ = (function (){var switch__48098__auto__ = ((function (c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50791){
var state_val_50792 = (state_50791[(1)]);
if((state_val_50792 === (7))){
var inst_50652 = (state_50791[(7)]);
var inst_50654 = (state_50791[(8)]);
var inst_50651 = (state_50791[(9)]);
var inst_50653 = (state_50791[(10)]);
var inst_50659 = cljs.core._nth.call(null,inst_50652,inst_50654);
var inst_50660 = figwheel.client.file_reloading.eval_body.call(null,inst_50659,opts);
var inst_50661 = (inst_50654 + (1));
var tmp50793 = inst_50652;
var tmp50794 = inst_50651;
var tmp50795 = inst_50653;
var inst_50651__$1 = tmp50794;
var inst_50652__$1 = tmp50793;
var inst_50653__$1 = tmp50795;
var inst_50654__$1 = inst_50661;
var state_50791__$1 = (function (){var statearr_50796 = state_50791;
(statearr_50796[(7)] = inst_50652__$1);

(statearr_50796[(8)] = inst_50654__$1);

(statearr_50796[(9)] = inst_50651__$1);

(statearr_50796[(11)] = inst_50660);

(statearr_50796[(10)] = inst_50653__$1);

return statearr_50796;
})();
var statearr_50797_50880 = state_50791__$1;
(statearr_50797_50880[(2)] = null);

(statearr_50797_50880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (20))){
var inst_50694 = (state_50791[(12)]);
var inst_50702 = figwheel.client.file_reloading.sort_files.call(null,inst_50694);
var state_50791__$1 = state_50791;
var statearr_50798_50881 = state_50791__$1;
(statearr_50798_50881[(2)] = inst_50702);

(statearr_50798_50881[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (27))){
var state_50791__$1 = state_50791;
var statearr_50799_50882 = state_50791__$1;
(statearr_50799_50882[(2)] = null);

(statearr_50799_50882[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (1))){
var inst_50643 = (state_50791[(13)]);
var inst_50640 = before_jsload.call(null,files);
var inst_50641 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50642 = (function (){return ((function (inst_50643,inst_50640,inst_50641,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50631_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50631_SHARP_);
});
;})(inst_50643,inst_50640,inst_50641,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50643__$1 = cljs.core.filter.call(null,inst_50642,files);
var inst_50644 = cljs.core.not_empty.call(null,inst_50643__$1);
var state_50791__$1 = (function (){var statearr_50800 = state_50791;
(statearr_50800[(14)] = inst_50640);

(statearr_50800[(15)] = inst_50641);

(statearr_50800[(13)] = inst_50643__$1);

return statearr_50800;
})();
if(cljs.core.truth_(inst_50644)){
var statearr_50801_50883 = state_50791__$1;
(statearr_50801_50883[(1)] = (2));

} else {
var statearr_50802_50884 = state_50791__$1;
(statearr_50802_50884[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (24))){
var state_50791__$1 = state_50791;
var statearr_50803_50885 = state_50791__$1;
(statearr_50803_50885[(2)] = null);

(statearr_50803_50885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (39))){
var inst_50744 = (state_50791[(16)]);
var state_50791__$1 = state_50791;
var statearr_50804_50886 = state_50791__$1;
(statearr_50804_50886[(2)] = inst_50744);

(statearr_50804_50886[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (46))){
var inst_50786 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
var statearr_50805_50887 = state_50791__$1;
(statearr_50805_50887[(2)] = inst_50786);

(statearr_50805_50887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (4))){
var inst_50688 = (state_50791[(2)]);
var inst_50689 = cljs.core.List.EMPTY;
var inst_50690 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50689);
var inst_50691 = (function (){return ((function (inst_50688,inst_50689,inst_50690,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50632_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50632_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50632_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50632_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_50688,inst_50689,inst_50690,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50692 = cljs.core.filter.call(null,inst_50691,files);
var inst_50693 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50694 = cljs.core.concat.call(null,inst_50692,inst_50693);
var state_50791__$1 = (function (){var statearr_50806 = state_50791;
(statearr_50806[(17)] = inst_50688);

(statearr_50806[(12)] = inst_50694);

(statearr_50806[(18)] = inst_50690);

return statearr_50806;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50807_50888 = state_50791__$1;
(statearr_50807_50888[(1)] = (16));

} else {
var statearr_50808_50889 = state_50791__$1;
(statearr_50808_50889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (15))){
var inst_50678 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
var statearr_50809_50890 = state_50791__$1;
(statearr_50809_50890[(2)] = inst_50678);

(statearr_50809_50890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (21))){
var inst_50704 = (state_50791[(19)]);
var inst_50704__$1 = (state_50791[(2)]);
var inst_50705 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50704__$1);
var state_50791__$1 = (function (){var statearr_50810 = state_50791;
(statearr_50810[(19)] = inst_50704__$1);

return statearr_50810;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50791__$1,(22),inst_50705);
} else {
if((state_val_50792 === (31))){
var inst_50789 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50791__$1,inst_50789);
} else {
if((state_val_50792 === (32))){
var inst_50744 = (state_50791[(16)]);
var inst_50749 = inst_50744.cljs$lang$protocol_mask$partition0$;
var inst_50750 = (inst_50749 & (64));
var inst_50751 = inst_50744.cljs$core$ISeq$;
var inst_50752 = (cljs.core.PROTOCOL_SENTINEL === inst_50751);
var inst_50753 = ((inst_50750) || (inst_50752));
var state_50791__$1 = state_50791;
if(cljs.core.truth_(inst_50753)){
var statearr_50811_50891 = state_50791__$1;
(statearr_50811_50891[(1)] = (35));

} else {
var statearr_50812_50892 = state_50791__$1;
(statearr_50812_50892[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (40))){
var inst_50766 = (state_50791[(20)]);
var inst_50765 = (state_50791[(2)]);
var inst_50766__$1 = cljs.core.get.call(null,inst_50765,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50767 = cljs.core.get.call(null,inst_50765,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50768 = cljs.core.not_empty.call(null,inst_50766__$1);
var state_50791__$1 = (function (){var statearr_50813 = state_50791;
(statearr_50813[(20)] = inst_50766__$1);

(statearr_50813[(21)] = inst_50767);

return statearr_50813;
})();
if(cljs.core.truth_(inst_50768)){
var statearr_50814_50893 = state_50791__$1;
(statearr_50814_50893[(1)] = (41));

} else {
var statearr_50815_50894 = state_50791__$1;
(statearr_50815_50894[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (33))){
var state_50791__$1 = state_50791;
var statearr_50816_50895 = state_50791__$1;
(statearr_50816_50895[(2)] = false);

(statearr_50816_50895[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (13))){
var inst_50664 = (state_50791[(22)]);
var inst_50668 = cljs.core.chunk_first.call(null,inst_50664);
var inst_50669 = cljs.core.chunk_rest.call(null,inst_50664);
var inst_50670 = cljs.core.count.call(null,inst_50668);
var inst_50651 = inst_50669;
var inst_50652 = inst_50668;
var inst_50653 = inst_50670;
var inst_50654 = (0);
var state_50791__$1 = (function (){var statearr_50817 = state_50791;
(statearr_50817[(7)] = inst_50652);

(statearr_50817[(8)] = inst_50654);

(statearr_50817[(9)] = inst_50651);

(statearr_50817[(10)] = inst_50653);

return statearr_50817;
})();
var statearr_50818_50896 = state_50791__$1;
(statearr_50818_50896[(2)] = null);

(statearr_50818_50896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (22))){
var inst_50707 = (state_50791[(23)]);
var inst_50712 = (state_50791[(24)]);
var inst_50708 = (state_50791[(25)]);
var inst_50704 = (state_50791[(19)]);
var inst_50707__$1 = (state_50791[(2)]);
var inst_50708__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50707__$1);
var inst_50709 = (function (){var all_files = inst_50704;
var res_SINGLEQUOTE_ = inst_50707__$1;
var res = inst_50708__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50707,inst_50712,inst_50708,inst_50704,inst_50707__$1,inst_50708__$1,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50633_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50633_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50707,inst_50712,inst_50708,inst_50704,inst_50707__$1,inst_50708__$1,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50710 = cljs.core.filter.call(null,inst_50709,inst_50707__$1);
var inst_50711 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50712__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50711);
var inst_50713 = cljs.core.not_empty.call(null,inst_50712__$1);
var state_50791__$1 = (function (){var statearr_50819 = state_50791;
(statearr_50819[(23)] = inst_50707__$1);

(statearr_50819[(24)] = inst_50712__$1);

(statearr_50819[(25)] = inst_50708__$1);

(statearr_50819[(26)] = inst_50710);

return statearr_50819;
})();
if(cljs.core.truth_(inst_50713)){
var statearr_50820_50897 = state_50791__$1;
(statearr_50820_50897[(1)] = (23));

} else {
var statearr_50821_50898 = state_50791__$1;
(statearr_50821_50898[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (36))){
var state_50791__$1 = state_50791;
var statearr_50822_50899 = state_50791__$1;
(statearr_50822_50899[(2)] = false);

(statearr_50822_50899[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (41))){
var inst_50766 = (state_50791[(20)]);
var inst_50770 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50771 = cljs.core.map.call(null,inst_50770,inst_50766);
var inst_50772 = cljs.core.pr_str.call(null,inst_50771);
var inst_50773 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50772)].join('');
var inst_50774 = figwheel.client.utils.log.call(null,inst_50773);
var state_50791__$1 = state_50791;
var statearr_50823_50900 = state_50791__$1;
(statearr_50823_50900[(2)] = inst_50774);

(statearr_50823_50900[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (43))){
var inst_50767 = (state_50791[(21)]);
var inst_50777 = (state_50791[(2)]);
var inst_50778 = cljs.core.not_empty.call(null,inst_50767);
var state_50791__$1 = (function (){var statearr_50824 = state_50791;
(statearr_50824[(27)] = inst_50777);

return statearr_50824;
})();
if(cljs.core.truth_(inst_50778)){
var statearr_50825_50901 = state_50791__$1;
(statearr_50825_50901[(1)] = (44));

} else {
var statearr_50826_50902 = state_50791__$1;
(statearr_50826_50902[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (29))){
var inst_50707 = (state_50791[(23)]);
var inst_50712 = (state_50791[(24)]);
var inst_50708 = (state_50791[(25)]);
var inst_50704 = (state_50791[(19)]);
var inst_50744 = (state_50791[(16)]);
var inst_50710 = (state_50791[(26)]);
var inst_50740 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50743 = (function (){var all_files = inst_50704;
var res_SINGLEQUOTE_ = inst_50707;
var res = inst_50708;
var files_not_loaded = inst_50710;
var dependencies_that_loaded = inst_50712;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50744,inst_50710,inst_50740,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50742){
var map__50827 = p__50742;
var map__50827__$1 = ((((!((map__50827 == null)))?(((((map__50827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50827):map__50827);
var namespace = cljs.core.get.call(null,map__50827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50744,inst_50710,inst_50740,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50744__$1 = cljs.core.group_by.call(null,inst_50743,inst_50710);
var inst_50746 = (inst_50744__$1 == null);
var inst_50747 = cljs.core.not.call(null,inst_50746);
var state_50791__$1 = (function (){var statearr_50829 = state_50791;
(statearr_50829[(28)] = inst_50740);

(statearr_50829[(16)] = inst_50744__$1);

return statearr_50829;
})();
if(inst_50747){
var statearr_50830_50903 = state_50791__$1;
(statearr_50830_50903[(1)] = (32));

} else {
var statearr_50831_50904 = state_50791__$1;
(statearr_50831_50904[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (44))){
var inst_50767 = (state_50791[(21)]);
var inst_50780 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50767);
var inst_50781 = cljs.core.pr_str.call(null,inst_50780);
var inst_50782 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50781)].join('');
var inst_50783 = figwheel.client.utils.log.call(null,inst_50782);
var state_50791__$1 = state_50791;
var statearr_50832_50905 = state_50791__$1;
(statearr_50832_50905[(2)] = inst_50783);

(statearr_50832_50905[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (6))){
var inst_50685 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
var statearr_50833_50906 = state_50791__$1;
(statearr_50833_50906[(2)] = inst_50685);

(statearr_50833_50906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (28))){
var inst_50710 = (state_50791[(26)]);
var inst_50737 = (state_50791[(2)]);
var inst_50738 = cljs.core.not_empty.call(null,inst_50710);
var state_50791__$1 = (function (){var statearr_50834 = state_50791;
(statearr_50834[(29)] = inst_50737);

return statearr_50834;
})();
if(cljs.core.truth_(inst_50738)){
var statearr_50835_50907 = state_50791__$1;
(statearr_50835_50907[(1)] = (29));

} else {
var statearr_50836_50908 = state_50791__$1;
(statearr_50836_50908[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (25))){
var inst_50708 = (state_50791[(25)]);
var inst_50724 = (state_50791[(2)]);
var inst_50725 = cljs.core.not_empty.call(null,inst_50708);
var state_50791__$1 = (function (){var statearr_50837 = state_50791;
(statearr_50837[(30)] = inst_50724);

return statearr_50837;
})();
if(cljs.core.truth_(inst_50725)){
var statearr_50838_50909 = state_50791__$1;
(statearr_50838_50909[(1)] = (26));

} else {
var statearr_50839_50910 = state_50791__$1;
(statearr_50839_50910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (34))){
var inst_50760 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
if(cljs.core.truth_(inst_50760)){
var statearr_50840_50911 = state_50791__$1;
(statearr_50840_50911[(1)] = (38));

} else {
var statearr_50841_50912 = state_50791__$1;
(statearr_50841_50912[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (17))){
var state_50791__$1 = state_50791;
var statearr_50842_50913 = state_50791__$1;
(statearr_50842_50913[(2)] = recompile_dependents);

(statearr_50842_50913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (3))){
var state_50791__$1 = state_50791;
var statearr_50843_50914 = state_50791__$1;
(statearr_50843_50914[(2)] = null);

(statearr_50843_50914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (12))){
var inst_50681 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
var statearr_50844_50915 = state_50791__$1;
(statearr_50844_50915[(2)] = inst_50681);

(statearr_50844_50915[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (2))){
var inst_50643 = (state_50791[(13)]);
var inst_50650 = cljs.core.seq.call(null,inst_50643);
var inst_50651 = inst_50650;
var inst_50652 = null;
var inst_50653 = (0);
var inst_50654 = (0);
var state_50791__$1 = (function (){var statearr_50845 = state_50791;
(statearr_50845[(7)] = inst_50652);

(statearr_50845[(8)] = inst_50654);

(statearr_50845[(9)] = inst_50651);

(statearr_50845[(10)] = inst_50653);

return statearr_50845;
})();
var statearr_50846_50916 = state_50791__$1;
(statearr_50846_50916[(2)] = null);

(statearr_50846_50916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (23))){
var inst_50707 = (state_50791[(23)]);
var inst_50712 = (state_50791[(24)]);
var inst_50708 = (state_50791[(25)]);
var inst_50704 = (state_50791[(19)]);
var inst_50710 = (state_50791[(26)]);
var inst_50715 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50717 = (function (){var all_files = inst_50704;
var res_SINGLEQUOTE_ = inst_50707;
var res = inst_50708;
var files_not_loaded = inst_50710;
var dependencies_that_loaded = inst_50712;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50710,inst_50715,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50716){
var map__50847 = p__50716;
var map__50847__$1 = ((((!((map__50847 == null)))?(((((map__50847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50847):map__50847);
var request_url = cljs.core.get.call(null,map__50847__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50710,inst_50715,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50718 = cljs.core.reverse.call(null,inst_50712);
var inst_50719 = cljs.core.map.call(null,inst_50717,inst_50718);
var inst_50720 = cljs.core.pr_str.call(null,inst_50719);
var inst_50721 = figwheel.client.utils.log.call(null,inst_50720);
var state_50791__$1 = (function (){var statearr_50849 = state_50791;
(statearr_50849[(31)] = inst_50715);

return statearr_50849;
})();
var statearr_50850_50917 = state_50791__$1;
(statearr_50850_50917[(2)] = inst_50721);

(statearr_50850_50917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (35))){
var state_50791__$1 = state_50791;
var statearr_50851_50918 = state_50791__$1;
(statearr_50851_50918[(2)] = true);

(statearr_50851_50918[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (19))){
var inst_50694 = (state_50791[(12)]);
var inst_50700 = figwheel.client.file_reloading.expand_files.call(null,inst_50694);
var state_50791__$1 = state_50791;
var statearr_50852_50919 = state_50791__$1;
(statearr_50852_50919[(2)] = inst_50700);

(statearr_50852_50919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (11))){
var state_50791__$1 = state_50791;
var statearr_50853_50920 = state_50791__$1;
(statearr_50853_50920[(2)] = null);

(statearr_50853_50920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (9))){
var inst_50683 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
var statearr_50854_50921 = state_50791__$1;
(statearr_50854_50921[(2)] = inst_50683);

(statearr_50854_50921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (5))){
var inst_50654 = (state_50791[(8)]);
var inst_50653 = (state_50791[(10)]);
var inst_50656 = (inst_50654 < inst_50653);
var inst_50657 = inst_50656;
var state_50791__$1 = state_50791;
if(cljs.core.truth_(inst_50657)){
var statearr_50855_50922 = state_50791__$1;
(statearr_50855_50922[(1)] = (7));

} else {
var statearr_50856_50923 = state_50791__$1;
(statearr_50856_50923[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (14))){
var inst_50664 = (state_50791[(22)]);
var inst_50673 = cljs.core.first.call(null,inst_50664);
var inst_50674 = figwheel.client.file_reloading.eval_body.call(null,inst_50673,opts);
var inst_50675 = cljs.core.next.call(null,inst_50664);
var inst_50651 = inst_50675;
var inst_50652 = null;
var inst_50653 = (0);
var inst_50654 = (0);
var state_50791__$1 = (function (){var statearr_50857 = state_50791;
(statearr_50857[(7)] = inst_50652);

(statearr_50857[(32)] = inst_50674);

(statearr_50857[(8)] = inst_50654);

(statearr_50857[(9)] = inst_50651);

(statearr_50857[(10)] = inst_50653);

return statearr_50857;
})();
var statearr_50858_50924 = state_50791__$1;
(statearr_50858_50924[(2)] = null);

(statearr_50858_50924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (45))){
var state_50791__$1 = state_50791;
var statearr_50859_50925 = state_50791__$1;
(statearr_50859_50925[(2)] = null);

(statearr_50859_50925[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (26))){
var inst_50707 = (state_50791[(23)]);
var inst_50712 = (state_50791[(24)]);
var inst_50708 = (state_50791[(25)]);
var inst_50704 = (state_50791[(19)]);
var inst_50710 = (state_50791[(26)]);
var inst_50727 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50729 = (function (){var all_files = inst_50704;
var res_SINGLEQUOTE_ = inst_50707;
var res = inst_50708;
var files_not_loaded = inst_50710;
var dependencies_that_loaded = inst_50712;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50710,inst_50727,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50728){
var map__50860 = p__50728;
var map__50860__$1 = ((((!((map__50860 == null)))?(((((map__50860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50860):map__50860);
var namespace = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50860__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50710,inst_50727,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50730 = cljs.core.map.call(null,inst_50729,inst_50708);
var inst_50731 = cljs.core.pr_str.call(null,inst_50730);
var inst_50732 = figwheel.client.utils.log.call(null,inst_50731);
var inst_50733 = (function (){var all_files = inst_50704;
var res_SINGLEQUOTE_ = inst_50707;
var res = inst_50708;
var files_not_loaded = inst_50710;
var dependencies_that_loaded = inst_50712;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50710,inst_50727,inst_50729,inst_50730,inst_50731,inst_50732,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50707,inst_50712,inst_50708,inst_50704,inst_50710,inst_50727,inst_50729,inst_50730,inst_50731,inst_50732,state_val_50792,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50734 = setTimeout(inst_50733,(10));
var state_50791__$1 = (function (){var statearr_50862 = state_50791;
(statearr_50862[(33)] = inst_50727);

(statearr_50862[(34)] = inst_50732);

return statearr_50862;
})();
var statearr_50863_50926 = state_50791__$1;
(statearr_50863_50926[(2)] = inst_50734);

(statearr_50863_50926[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (16))){
var state_50791__$1 = state_50791;
var statearr_50864_50927 = state_50791__$1;
(statearr_50864_50927[(2)] = reload_dependents);

(statearr_50864_50927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (38))){
var inst_50744 = (state_50791[(16)]);
var inst_50762 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50744);
var state_50791__$1 = state_50791;
var statearr_50865_50928 = state_50791__$1;
(statearr_50865_50928[(2)] = inst_50762);

(statearr_50865_50928[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (30))){
var state_50791__$1 = state_50791;
var statearr_50866_50929 = state_50791__$1;
(statearr_50866_50929[(2)] = null);

(statearr_50866_50929[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (10))){
var inst_50664 = (state_50791[(22)]);
var inst_50666 = cljs.core.chunked_seq_QMARK_.call(null,inst_50664);
var state_50791__$1 = state_50791;
if(inst_50666){
var statearr_50867_50930 = state_50791__$1;
(statearr_50867_50930[(1)] = (13));

} else {
var statearr_50868_50931 = state_50791__$1;
(statearr_50868_50931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (18))){
var inst_50698 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
if(cljs.core.truth_(inst_50698)){
var statearr_50869_50932 = state_50791__$1;
(statearr_50869_50932[(1)] = (19));

} else {
var statearr_50870_50933 = state_50791__$1;
(statearr_50870_50933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (42))){
var state_50791__$1 = state_50791;
var statearr_50871_50934 = state_50791__$1;
(statearr_50871_50934[(2)] = null);

(statearr_50871_50934[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (37))){
var inst_50757 = (state_50791[(2)]);
var state_50791__$1 = state_50791;
var statearr_50872_50935 = state_50791__$1;
(statearr_50872_50935[(2)] = inst_50757);

(statearr_50872_50935[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50792 === (8))){
var inst_50651 = (state_50791[(9)]);
var inst_50664 = (state_50791[(22)]);
var inst_50664__$1 = cljs.core.seq.call(null,inst_50651);
var state_50791__$1 = (function (){var statearr_50873 = state_50791;
(statearr_50873[(22)] = inst_50664__$1);

return statearr_50873;
})();
if(inst_50664__$1){
var statearr_50874_50936 = state_50791__$1;
(statearr_50874_50936[(1)] = (10));

} else {
var statearr_50875_50937 = state_50791__$1;
(statearr_50875_50937[(1)] = (11));

}

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
});})(c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48098__auto__,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto____0 = (function (){
var statearr_50876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50876[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto__);

(statearr_50876[(1)] = (1));

return statearr_50876;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto____1 = (function (state_50791){
while(true){
var ret_value__48100__auto__ = (function (){try{while(true){
var result__48101__auto__ = switch__48098__auto__.call(null,state_50791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48101__auto__;
}
break;
}
}catch (e50877){if((e50877 instanceof Object)){
var ex__48102__auto__ = e50877;
var statearr_50878_50938 = state_50791;
(statearr_50878_50938[(5)] = ex__48102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50939 = state_50791;
state_50791 = G__50939;
continue;
} else {
return ret_value__48100__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto__ = function(state_50791){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto____1.call(this,state_50791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48099__auto__;
})()
;})(switch__48098__auto__,c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48190__auto__ = (function (){var statearr_50879 = f__48189__auto__.call(null);
(statearr_50879[(6)] = c__48188__auto__);

return statearr_50879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48190__auto__);
});})(c__48188__auto__,map__50636,map__50636__$1,opts,before_jsload,on_jsload,reload_dependents,map__50637,map__50637__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48188__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50942,link){
var map__50943 = p__50942;
var map__50943__$1 = ((((!((map__50943 == null)))?(((((map__50943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50943):map__50943);
var file = cljs.core.get.call(null,map__50943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__50943,map__50943__$1,file){
return (function (p1__50940_SHARP_,p2__50941_SHARP_){
if(cljs.core._EQ_.call(null,p1__50940_SHARP_,p2__50941_SHARP_)){
return p1__50940_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__50943,map__50943__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50946){
var map__50947 = p__50946;
var map__50947__$1 = ((((!((map__50947 == null)))?(((((map__50947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50947):map__50947);
var match_length = cljs.core.get.call(null,map__50947__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50947__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50945_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50945_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50949_SHARP_,p2__50950_SHARP_){
return cljs.core.assoc.call(null,p1__50949_SHARP_,cljs.core.get.call(null,p2__50950_SHARP_,key),p2__50950_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50951 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50951);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50951);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50952,p__50953){
var map__50954 = p__50952;
var map__50954__$1 = ((((!((map__50954 == null)))?(((((map__50954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50954):map__50954);
var on_cssload = cljs.core.get.call(null,map__50954__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50955 = p__50953;
var map__50955__$1 = ((((!((map__50955 == null)))?(((((map__50955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50955):map__50955);
var files_msg = map__50955__$1;
var files = cljs.core.get.call(null,map__50955__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1524683842485
