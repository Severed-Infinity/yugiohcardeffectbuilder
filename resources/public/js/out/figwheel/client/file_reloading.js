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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50296_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50296_SHARP_));
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
var seq__50297 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50298 = null;
var count__50299 = (0);
var i__50300 = (0);
while(true){
if((i__50300 < count__50299)){
var n = cljs.core._nth.call(null,chunk__50298,i__50300);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__50301 = seq__50297;
var G__50302 = chunk__50298;
var G__50303 = count__50299;
var G__50304 = (i__50300 + (1));
seq__50297 = G__50301;
chunk__50298 = G__50302;
count__50299 = G__50303;
i__50300 = G__50304;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50297);
if(temp__5457__auto__){
var seq__50297__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50297__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50297__$1);
var G__50305 = cljs.core.chunk_rest.call(null,seq__50297__$1);
var G__50306 = c__4319__auto__;
var G__50307 = cljs.core.count.call(null,c__4319__auto__);
var G__50308 = (0);
seq__50297 = G__50305;
chunk__50298 = G__50306;
count__50299 = G__50307;
i__50300 = G__50308;
continue;
} else {
var n = cljs.core.first.call(null,seq__50297__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__50309 = cljs.core.next.call(null,seq__50297__$1);
var G__50310 = null;
var G__50311 = (0);
var G__50312 = (0);
seq__50297 = G__50309;
chunk__50298 = G__50310;
count__50299 = G__50311;
i__50300 = G__50312;
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
return cljs.core.some.call(null,(function (p__50313){
var vec__50314 = p__50313;
var _ = cljs.core.nth.call(null,vec__50314,(0),null);
var v = cljs.core.nth.call(null,vec__50314,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__50317){
var vec__50318 = p__50317;
var k = cljs.core.nth.call(null,vec__50318,(0),null);
var v = cljs.core.nth.call(null,vec__50318,(1),null);
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

var seq__50330_50338 = cljs.core.seq.call(null,deps);
var chunk__50331_50339 = null;
var count__50332_50340 = (0);
var i__50333_50341 = (0);
while(true){
if((i__50333_50341 < count__50332_50340)){
var dep_50342 = cljs.core._nth.call(null,chunk__50331_50339,i__50333_50341);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_50342;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50342));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50342,(depth + (1)),state);
} else {
}


var G__50343 = seq__50330_50338;
var G__50344 = chunk__50331_50339;
var G__50345 = count__50332_50340;
var G__50346 = (i__50333_50341 + (1));
seq__50330_50338 = G__50343;
chunk__50331_50339 = G__50344;
count__50332_50340 = G__50345;
i__50333_50341 = G__50346;
continue;
} else {
var temp__5457__auto___50347 = cljs.core.seq.call(null,seq__50330_50338);
if(temp__5457__auto___50347){
var seq__50330_50348__$1 = temp__5457__auto___50347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50330_50348__$1)){
var c__4319__auto___50349 = cljs.core.chunk_first.call(null,seq__50330_50348__$1);
var G__50350 = cljs.core.chunk_rest.call(null,seq__50330_50348__$1);
var G__50351 = c__4319__auto___50349;
var G__50352 = cljs.core.count.call(null,c__4319__auto___50349);
var G__50353 = (0);
seq__50330_50338 = G__50350;
chunk__50331_50339 = G__50351;
count__50332_50340 = G__50352;
i__50333_50341 = G__50353;
continue;
} else {
var dep_50354 = cljs.core.first.call(null,seq__50330_50348__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_50354;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50354));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50354,(depth + (1)),state);
} else {
}


var G__50355 = cljs.core.next.call(null,seq__50330_50348__$1);
var G__50356 = null;
var G__50357 = (0);
var G__50358 = (0);
seq__50330_50338 = G__50355;
chunk__50331_50339 = G__50356;
count__50332_50340 = G__50357;
i__50333_50341 = G__50358;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50334){
var vec__50335 = p__50334;
var seq__50336 = cljs.core.seq.call(null,vec__50335);
var first__50337 = cljs.core.first.call(null,seq__50336);
var seq__50336__$1 = cljs.core.next.call(null,seq__50336);
var x = first__50337;
var xs = seq__50336__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50335,seq__50336,first__50337,seq__50336__$1,x,xs,get_deps__$1){
return (function (p1__50321_SHARP_){
return clojure.set.difference.call(null,p1__50321_SHARP_,x);
});})(vec__50335,seq__50336,first__50337,seq__50336__$1,x,xs,get_deps__$1))
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
var seq__50359 = cljs.core.seq.call(null,provides);
var chunk__50360 = null;
var count__50361 = (0);
var i__50362 = (0);
while(true){
if((i__50362 < count__50361)){
var prov = cljs.core._nth.call(null,chunk__50360,i__50362);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50363_50371 = cljs.core.seq.call(null,requires);
var chunk__50364_50372 = null;
var count__50365_50373 = (0);
var i__50366_50374 = (0);
while(true){
if((i__50366_50374 < count__50365_50373)){
var req_50375 = cljs.core._nth.call(null,chunk__50364_50372,i__50366_50374);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50375,prov);


var G__50376 = seq__50363_50371;
var G__50377 = chunk__50364_50372;
var G__50378 = count__50365_50373;
var G__50379 = (i__50366_50374 + (1));
seq__50363_50371 = G__50376;
chunk__50364_50372 = G__50377;
count__50365_50373 = G__50378;
i__50366_50374 = G__50379;
continue;
} else {
var temp__5457__auto___50380 = cljs.core.seq.call(null,seq__50363_50371);
if(temp__5457__auto___50380){
var seq__50363_50381__$1 = temp__5457__auto___50380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50363_50381__$1)){
var c__4319__auto___50382 = cljs.core.chunk_first.call(null,seq__50363_50381__$1);
var G__50383 = cljs.core.chunk_rest.call(null,seq__50363_50381__$1);
var G__50384 = c__4319__auto___50382;
var G__50385 = cljs.core.count.call(null,c__4319__auto___50382);
var G__50386 = (0);
seq__50363_50371 = G__50383;
chunk__50364_50372 = G__50384;
count__50365_50373 = G__50385;
i__50366_50374 = G__50386;
continue;
} else {
var req_50387 = cljs.core.first.call(null,seq__50363_50381__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50387,prov);


var G__50388 = cljs.core.next.call(null,seq__50363_50381__$1);
var G__50389 = null;
var G__50390 = (0);
var G__50391 = (0);
seq__50363_50371 = G__50388;
chunk__50364_50372 = G__50389;
count__50365_50373 = G__50390;
i__50366_50374 = G__50391;
continue;
}
} else {
}
}
break;
}


var G__50392 = seq__50359;
var G__50393 = chunk__50360;
var G__50394 = count__50361;
var G__50395 = (i__50362 + (1));
seq__50359 = G__50392;
chunk__50360 = G__50393;
count__50361 = G__50394;
i__50362 = G__50395;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50359);
if(temp__5457__auto__){
var seq__50359__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50359__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50359__$1);
var G__50396 = cljs.core.chunk_rest.call(null,seq__50359__$1);
var G__50397 = c__4319__auto__;
var G__50398 = cljs.core.count.call(null,c__4319__auto__);
var G__50399 = (0);
seq__50359 = G__50396;
chunk__50360 = G__50397;
count__50361 = G__50398;
i__50362 = G__50399;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50359__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50367_50400 = cljs.core.seq.call(null,requires);
var chunk__50368_50401 = null;
var count__50369_50402 = (0);
var i__50370_50403 = (0);
while(true){
if((i__50370_50403 < count__50369_50402)){
var req_50404 = cljs.core._nth.call(null,chunk__50368_50401,i__50370_50403);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50404,prov);


var G__50405 = seq__50367_50400;
var G__50406 = chunk__50368_50401;
var G__50407 = count__50369_50402;
var G__50408 = (i__50370_50403 + (1));
seq__50367_50400 = G__50405;
chunk__50368_50401 = G__50406;
count__50369_50402 = G__50407;
i__50370_50403 = G__50408;
continue;
} else {
var temp__5457__auto___50409__$1 = cljs.core.seq.call(null,seq__50367_50400);
if(temp__5457__auto___50409__$1){
var seq__50367_50410__$1 = temp__5457__auto___50409__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50367_50410__$1)){
var c__4319__auto___50411 = cljs.core.chunk_first.call(null,seq__50367_50410__$1);
var G__50412 = cljs.core.chunk_rest.call(null,seq__50367_50410__$1);
var G__50413 = c__4319__auto___50411;
var G__50414 = cljs.core.count.call(null,c__4319__auto___50411);
var G__50415 = (0);
seq__50367_50400 = G__50412;
chunk__50368_50401 = G__50413;
count__50369_50402 = G__50414;
i__50370_50403 = G__50415;
continue;
} else {
var req_50416 = cljs.core.first.call(null,seq__50367_50410__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50416,prov);


var G__50417 = cljs.core.next.call(null,seq__50367_50410__$1);
var G__50418 = null;
var G__50419 = (0);
var G__50420 = (0);
seq__50367_50400 = G__50417;
chunk__50368_50401 = G__50418;
count__50369_50402 = G__50419;
i__50370_50403 = G__50420;
continue;
}
} else {
}
}
break;
}


var G__50421 = cljs.core.next.call(null,seq__50359__$1);
var G__50422 = null;
var G__50423 = (0);
var G__50424 = (0);
seq__50359 = G__50421;
chunk__50360 = G__50422;
count__50361 = G__50423;
i__50362 = G__50424;
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
var seq__50425_50429 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50426_50430 = null;
var count__50427_50431 = (0);
var i__50428_50432 = (0);
while(true){
if((i__50428_50432 < count__50427_50431)){
var ns_50433 = cljs.core._nth.call(null,chunk__50426_50430,i__50428_50432);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50433);


var G__50434 = seq__50425_50429;
var G__50435 = chunk__50426_50430;
var G__50436 = count__50427_50431;
var G__50437 = (i__50428_50432 + (1));
seq__50425_50429 = G__50434;
chunk__50426_50430 = G__50435;
count__50427_50431 = G__50436;
i__50428_50432 = G__50437;
continue;
} else {
var temp__5457__auto___50438 = cljs.core.seq.call(null,seq__50425_50429);
if(temp__5457__auto___50438){
var seq__50425_50439__$1 = temp__5457__auto___50438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50425_50439__$1)){
var c__4319__auto___50440 = cljs.core.chunk_first.call(null,seq__50425_50439__$1);
var G__50441 = cljs.core.chunk_rest.call(null,seq__50425_50439__$1);
var G__50442 = c__4319__auto___50440;
var G__50443 = cljs.core.count.call(null,c__4319__auto___50440);
var G__50444 = (0);
seq__50425_50429 = G__50441;
chunk__50426_50430 = G__50442;
count__50427_50431 = G__50443;
i__50428_50432 = G__50444;
continue;
} else {
var ns_50445 = cljs.core.first.call(null,seq__50425_50439__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50445);


var G__50446 = cljs.core.next.call(null,seq__50425_50439__$1);
var G__50447 = null;
var G__50448 = (0);
var G__50449 = (0);
seq__50425_50429 = G__50446;
chunk__50426_50430 = G__50447;
count__50427_50431 = G__50448;
i__50428_50432 = G__50449;
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
var G__50450__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50451__i = 0, G__50451__a = new Array(arguments.length -  0);
while (G__50451__i < G__50451__a.length) {G__50451__a[G__50451__i] = arguments[G__50451__i + 0]; ++G__50451__i;}
  args = new cljs.core.IndexedSeq(G__50451__a,0,null);
} 
return G__50450__delegate.call(this,args);};
G__50450.cljs$lang$maxFixedArity = 0;
G__50450.cljs$lang$applyTo = (function (arglist__50452){
var args = cljs.core.seq(arglist__50452);
return G__50450__delegate(args);
});
G__50450.cljs$core$IFn$_invoke$arity$variadic = G__50450__delegate;
return G__50450;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__50453_SHARP_,p2__50454_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50453_SHARP_)].join('')),p2__50454_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__50455_SHARP_,p2__50456_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50455_SHARP_)].join(''),p2__50456_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__50457 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__50457.addCallback(((function (G__50457){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__50457))
);

G__50457.addErrback(((function (G__50457){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__50457))
);

return G__50457;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e50458){if((e50458 instanceof Error)){
var e = e50458;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50458;

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
}catch (e50459){if((e50459 instanceof Error)){
var e = e50459;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50459;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50460 = cljs.core._EQ_;
var expr__50461 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50460.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50461))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__50460.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50461))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__50460.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__50461))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__50460,expr__50461){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50460,expr__50461))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50463,callback){
var map__50464 = p__50463;
var map__50464__$1 = ((((!((map__50464 == null)))?(((((map__50464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50464):map__50464);
var file_msg = map__50464__$1;
var request_url = cljs.core.get.call(null,map__50464__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__50464,map__50464__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50464,map__50464__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__){
return (function (state_50502){
var state_val_50503 = (state_50502[(1)]);
if((state_val_50503 === (7))){
var inst_50498 = (state_50502[(2)]);
var state_50502__$1 = state_50502;
var statearr_50504_50530 = state_50502__$1;
(statearr_50504_50530[(2)] = inst_50498);

(statearr_50504_50530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (1))){
var state_50502__$1 = state_50502;
var statearr_50505_50531 = state_50502__$1;
(statearr_50505_50531[(2)] = null);

(statearr_50505_50531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (4))){
var inst_50468 = (state_50502[(7)]);
var inst_50468__$1 = (state_50502[(2)]);
var state_50502__$1 = (function (){var statearr_50506 = state_50502;
(statearr_50506[(7)] = inst_50468__$1);

return statearr_50506;
})();
if(cljs.core.truth_(inst_50468__$1)){
var statearr_50507_50532 = state_50502__$1;
(statearr_50507_50532[(1)] = (5));

} else {
var statearr_50508_50533 = state_50502__$1;
(statearr_50508_50533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (15))){
var inst_50483 = (state_50502[(8)]);
var inst_50481 = (state_50502[(9)]);
var inst_50485 = inst_50483.call(null,inst_50481);
var state_50502__$1 = state_50502;
var statearr_50509_50534 = state_50502__$1;
(statearr_50509_50534[(2)] = inst_50485);

(statearr_50509_50534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (13))){
var inst_50492 = (state_50502[(2)]);
var state_50502__$1 = state_50502;
var statearr_50510_50535 = state_50502__$1;
(statearr_50510_50535[(2)] = inst_50492);

(statearr_50510_50535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (6))){
var state_50502__$1 = state_50502;
var statearr_50511_50536 = state_50502__$1;
(statearr_50511_50536[(2)] = null);

(statearr_50511_50536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (17))){
var inst_50489 = (state_50502[(2)]);
var state_50502__$1 = state_50502;
var statearr_50512_50537 = state_50502__$1;
(statearr_50512_50537[(2)] = inst_50489);

(statearr_50512_50537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (3))){
var inst_50500 = (state_50502[(2)]);
var state_50502__$1 = state_50502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50502__$1,inst_50500);
} else {
if((state_val_50503 === (12))){
var state_50502__$1 = state_50502;
var statearr_50513_50538 = state_50502__$1;
(statearr_50513_50538[(2)] = null);

(statearr_50513_50538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (2))){
var state_50502__$1 = state_50502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50502__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50503 === (11))){
var inst_50473 = (state_50502[(10)]);
var inst_50479 = figwheel.client.file_reloading.blocking_load.call(null,inst_50473);
var state_50502__$1 = state_50502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50502__$1,(14),inst_50479);
} else {
if((state_val_50503 === (9))){
var inst_50473 = (state_50502[(10)]);
var state_50502__$1 = state_50502;
if(cljs.core.truth_(inst_50473)){
var statearr_50514_50539 = state_50502__$1;
(statearr_50514_50539[(1)] = (11));

} else {
var statearr_50515_50540 = state_50502__$1;
(statearr_50515_50540[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (5))){
var inst_50468 = (state_50502[(7)]);
var inst_50474 = (state_50502[(11)]);
var inst_50473 = cljs.core.nth.call(null,inst_50468,(0),null);
var inst_50474__$1 = cljs.core.nth.call(null,inst_50468,(1),null);
var state_50502__$1 = (function (){var statearr_50516 = state_50502;
(statearr_50516[(10)] = inst_50473);

(statearr_50516[(11)] = inst_50474__$1);

return statearr_50516;
})();
if(cljs.core.truth_(inst_50474__$1)){
var statearr_50517_50541 = state_50502__$1;
(statearr_50517_50541[(1)] = (8));

} else {
var statearr_50518_50542 = state_50502__$1;
(statearr_50518_50542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (14))){
var inst_50473 = (state_50502[(10)]);
var inst_50483 = (state_50502[(8)]);
var inst_50481 = (state_50502[(2)]);
var inst_50482 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50483__$1 = cljs.core.get.call(null,inst_50482,inst_50473);
var state_50502__$1 = (function (){var statearr_50519 = state_50502;
(statearr_50519[(8)] = inst_50483__$1);

(statearr_50519[(9)] = inst_50481);

return statearr_50519;
})();
if(cljs.core.truth_(inst_50483__$1)){
var statearr_50520_50543 = state_50502__$1;
(statearr_50520_50543[(1)] = (15));

} else {
var statearr_50521_50544 = state_50502__$1;
(statearr_50521_50544[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (16))){
var inst_50481 = (state_50502[(9)]);
var inst_50487 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50481);
var state_50502__$1 = state_50502;
var statearr_50522_50545 = state_50502__$1;
(statearr_50522_50545[(2)] = inst_50487);

(statearr_50522_50545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (10))){
var inst_50494 = (state_50502[(2)]);
var state_50502__$1 = (function (){var statearr_50523 = state_50502;
(statearr_50523[(12)] = inst_50494);

return statearr_50523;
})();
var statearr_50524_50546 = state_50502__$1;
(statearr_50524_50546[(2)] = null);

(statearr_50524_50546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50503 === (8))){
var inst_50474 = (state_50502[(11)]);
var inst_50476 = eval(inst_50474);
var state_50502__$1 = state_50502;
var statearr_50525_50547 = state_50502__$1;
(statearr_50525_50547[(2)] = inst_50476);

(statearr_50525_50547[(1)] = (10));


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
});})(c__48192__auto__))
;
return ((function (switch__48102__auto__,c__48192__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48103__auto__ = null;
var figwheel$client$file_reloading$state_machine__48103__auto____0 = (function (){
var statearr_50526 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50526[(0)] = figwheel$client$file_reloading$state_machine__48103__auto__);

(statearr_50526[(1)] = (1));

return statearr_50526;
});
var figwheel$client$file_reloading$state_machine__48103__auto____1 = (function (state_50502){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_50502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e50527){if((e50527 instanceof Object)){
var ex__48106__auto__ = e50527;
var statearr_50528_50548 = state_50502;
(statearr_50528_50548[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50549 = state_50502;
state_50502 = G__50549;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48103__auto__ = function(state_50502){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48103__auto____1.call(this,state_50502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48103__auto____0;
figwheel$client$file_reloading$state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48103__auto____1;
return figwheel$client$file_reloading$state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__))
})();
var state__48194__auto__ = (function (){var statearr_50529 = f__48193__auto__.call(null);
(statearr_50529[(6)] = c__48192__auto__);

return statearr_50529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__))
);

return c__48192__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__50551 = arguments.length;
switch (G__50551) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50553,callback){
var map__50554 = p__50553;
var map__50554__$1 = ((((!((map__50554 == null)))?(((((map__50554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50554):map__50554);
var file_msg = map__50554__$1;
var namespace = cljs.core.get.call(null,map__50554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50554,map__50554__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50554,map__50554__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50556){
var map__50557 = p__50556;
var map__50557__$1 = ((((!((map__50557 == null)))?(((((map__50557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50557):map__50557);
var file_msg = map__50557__$1;
var namespace = cljs.core.get.call(null,map__50557__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50559){
var map__50560 = p__50559;
var map__50560__$1 = ((((!((map__50560 == null)))?(((((map__50560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50560):map__50560);
var file_msg = map__50560__$1;
var namespace = cljs.core.get.call(null,map__50560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50562,callback){
var map__50563 = p__50562;
var map__50563__$1 = ((((!((map__50563 == null)))?(((((map__50563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50563):map__50563);
var file_msg = map__50563__$1;
var request_url = cljs.core.get.call(null,map__50563__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50563__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__48192__auto___50613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto___50613,out){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto___50613,out){
return (function (state_50598){
var state_val_50599 = (state_50598[(1)]);
if((state_val_50599 === (1))){
var inst_50572 = cljs.core.seq.call(null,files);
var inst_50573 = cljs.core.first.call(null,inst_50572);
var inst_50574 = cljs.core.next.call(null,inst_50572);
var inst_50575 = files;
var state_50598__$1 = (function (){var statearr_50600 = state_50598;
(statearr_50600[(7)] = inst_50575);

(statearr_50600[(8)] = inst_50574);

(statearr_50600[(9)] = inst_50573);

return statearr_50600;
})();
var statearr_50601_50614 = state_50598__$1;
(statearr_50601_50614[(2)] = null);

(statearr_50601_50614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50599 === (2))){
var inst_50575 = (state_50598[(7)]);
var inst_50581 = (state_50598[(10)]);
var inst_50580 = cljs.core.seq.call(null,inst_50575);
var inst_50581__$1 = cljs.core.first.call(null,inst_50580);
var inst_50582 = cljs.core.next.call(null,inst_50580);
var inst_50583 = (inst_50581__$1 == null);
var inst_50584 = cljs.core.not.call(null,inst_50583);
var state_50598__$1 = (function (){var statearr_50602 = state_50598;
(statearr_50602[(10)] = inst_50581__$1);

(statearr_50602[(11)] = inst_50582);

return statearr_50602;
})();
if(inst_50584){
var statearr_50603_50615 = state_50598__$1;
(statearr_50603_50615[(1)] = (4));

} else {
var statearr_50604_50616 = state_50598__$1;
(statearr_50604_50616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50599 === (3))){
var inst_50596 = (state_50598[(2)]);
var state_50598__$1 = state_50598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50598__$1,inst_50596);
} else {
if((state_val_50599 === (4))){
var inst_50581 = (state_50598[(10)]);
var inst_50586 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50581);
var state_50598__$1 = state_50598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50598__$1,(7),inst_50586);
} else {
if((state_val_50599 === (5))){
var inst_50592 = cljs.core.async.close_BANG_.call(null,out);
var state_50598__$1 = state_50598;
var statearr_50605_50617 = state_50598__$1;
(statearr_50605_50617[(2)] = inst_50592);

(statearr_50605_50617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50599 === (6))){
var inst_50594 = (state_50598[(2)]);
var state_50598__$1 = state_50598;
var statearr_50606_50618 = state_50598__$1;
(statearr_50606_50618[(2)] = inst_50594);

(statearr_50606_50618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50599 === (7))){
var inst_50582 = (state_50598[(11)]);
var inst_50588 = (state_50598[(2)]);
var inst_50589 = cljs.core.async.put_BANG_.call(null,out,inst_50588);
var inst_50575 = inst_50582;
var state_50598__$1 = (function (){var statearr_50607 = state_50598;
(statearr_50607[(12)] = inst_50589);

(statearr_50607[(7)] = inst_50575);

return statearr_50607;
})();
var statearr_50608_50619 = state_50598__$1;
(statearr_50608_50619[(2)] = null);

(statearr_50608_50619[(1)] = (2));


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
});})(c__48192__auto___50613,out))
;
return ((function (switch__48102__auto__,c__48192__auto___50613,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto____0 = (function (){
var statearr_50609 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50609[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto__);

(statearr_50609[(1)] = (1));

return statearr_50609;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto____1 = (function (state_50598){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_50598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e50610){if((e50610 instanceof Object)){
var ex__48106__auto__ = e50610;
var statearr_50611_50620 = state_50598;
(statearr_50611_50620[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50621 = state_50598;
state_50598 = G__50621;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto__ = function(state_50598){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto____1.call(this,state_50598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto___50613,out))
})();
var state__48194__auto__ = (function (){var statearr_50612 = f__48193__auto__.call(null);
(statearr_50612[(6)] = c__48192__auto___50613);

return statearr_50612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto___50613,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50622,opts){
var map__50623 = p__50622;
var map__50623__$1 = ((((!((map__50623 == null)))?(((((map__50623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50623):map__50623);
var eval_body = cljs.core.get.call(null,map__50623__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50623__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e50625){var e = e50625;
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
return (function (p1__50626_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50626_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__50627){
var vec__50628 = p__50627;
var k = cljs.core.nth.call(null,vec__50628,(0),null);
var v = cljs.core.nth.call(null,vec__50628,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50631){
var vec__50632 = p__50631;
var k = cljs.core.nth.call(null,vec__50632,(0),null);
var v = cljs.core.nth.call(null,vec__50632,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50638,p__50639){
var map__50640 = p__50638;
var map__50640__$1 = ((((!((map__50640 == null)))?(((((map__50640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50640):map__50640);
var opts = map__50640__$1;
var before_jsload = cljs.core.get.call(null,map__50640__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50640__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50640__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50641 = p__50639;
var map__50641__$1 = ((((!((map__50641 == null)))?(((((map__50641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50641):map__50641);
var msg = map__50641__$1;
var files = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48192__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48193__auto__ = (function (){var switch__48102__auto__ = ((function (c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50795){
var state_val_50796 = (state_50795[(1)]);
if((state_val_50796 === (7))){
var inst_50658 = (state_50795[(7)]);
var inst_50656 = (state_50795[(8)]);
var inst_50655 = (state_50795[(9)]);
var inst_50657 = (state_50795[(10)]);
var inst_50663 = cljs.core._nth.call(null,inst_50656,inst_50658);
var inst_50664 = figwheel.client.file_reloading.eval_body.call(null,inst_50663,opts);
var inst_50665 = (inst_50658 + (1));
var tmp50797 = inst_50656;
var tmp50798 = inst_50655;
var tmp50799 = inst_50657;
var inst_50655__$1 = tmp50798;
var inst_50656__$1 = tmp50797;
var inst_50657__$1 = tmp50799;
var inst_50658__$1 = inst_50665;
var state_50795__$1 = (function (){var statearr_50800 = state_50795;
(statearr_50800[(7)] = inst_50658__$1);

(statearr_50800[(8)] = inst_50656__$1);

(statearr_50800[(9)] = inst_50655__$1);

(statearr_50800[(11)] = inst_50664);

(statearr_50800[(10)] = inst_50657__$1);

return statearr_50800;
})();
var statearr_50801_50884 = state_50795__$1;
(statearr_50801_50884[(2)] = null);

(statearr_50801_50884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (20))){
var inst_50698 = (state_50795[(12)]);
var inst_50706 = figwheel.client.file_reloading.sort_files.call(null,inst_50698);
var state_50795__$1 = state_50795;
var statearr_50802_50885 = state_50795__$1;
(statearr_50802_50885[(2)] = inst_50706);

(statearr_50802_50885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (27))){
var state_50795__$1 = state_50795;
var statearr_50803_50886 = state_50795__$1;
(statearr_50803_50886[(2)] = null);

(statearr_50803_50886[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (1))){
var inst_50647 = (state_50795[(13)]);
var inst_50644 = before_jsload.call(null,files);
var inst_50645 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50646 = (function (){return ((function (inst_50647,inst_50644,inst_50645,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50635_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50635_SHARP_);
});
;})(inst_50647,inst_50644,inst_50645,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50647__$1 = cljs.core.filter.call(null,inst_50646,files);
var inst_50648 = cljs.core.not_empty.call(null,inst_50647__$1);
var state_50795__$1 = (function (){var statearr_50804 = state_50795;
(statearr_50804[(14)] = inst_50644);

(statearr_50804[(15)] = inst_50645);

(statearr_50804[(13)] = inst_50647__$1);

return statearr_50804;
})();
if(cljs.core.truth_(inst_50648)){
var statearr_50805_50887 = state_50795__$1;
(statearr_50805_50887[(1)] = (2));

} else {
var statearr_50806_50888 = state_50795__$1;
(statearr_50806_50888[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (24))){
var state_50795__$1 = state_50795;
var statearr_50807_50889 = state_50795__$1;
(statearr_50807_50889[(2)] = null);

(statearr_50807_50889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (39))){
var inst_50748 = (state_50795[(16)]);
var state_50795__$1 = state_50795;
var statearr_50808_50890 = state_50795__$1;
(statearr_50808_50890[(2)] = inst_50748);

(statearr_50808_50890[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (46))){
var inst_50790 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
var statearr_50809_50891 = state_50795__$1;
(statearr_50809_50891[(2)] = inst_50790);

(statearr_50809_50891[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (4))){
var inst_50692 = (state_50795[(2)]);
var inst_50693 = cljs.core.List.EMPTY;
var inst_50694 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50693);
var inst_50695 = (function (){return ((function (inst_50692,inst_50693,inst_50694,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50636_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50636_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50636_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50636_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_50692,inst_50693,inst_50694,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50696 = cljs.core.filter.call(null,inst_50695,files);
var inst_50697 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50698 = cljs.core.concat.call(null,inst_50696,inst_50697);
var state_50795__$1 = (function (){var statearr_50810 = state_50795;
(statearr_50810[(12)] = inst_50698);

(statearr_50810[(17)] = inst_50694);

(statearr_50810[(18)] = inst_50692);

return statearr_50810;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50811_50892 = state_50795__$1;
(statearr_50811_50892[(1)] = (16));

} else {
var statearr_50812_50893 = state_50795__$1;
(statearr_50812_50893[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (15))){
var inst_50682 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
var statearr_50813_50894 = state_50795__$1;
(statearr_50813_50894[(2)] = inst_50682);

(statearr_50813_50894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (21))){
var inst_50708 = (state_50795[(19)]);
var inst_50708__$1 = (state_50795[(2)]);
var inst_50709 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50708__$1);
var state_50795__$1 = (function (){var statearr_50814 = state_50795;
(statearr_50814[(19)] = inst_50708__$1);

return statearr_50814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50795__$1,(22),inst_50709);
} else {
if((state_val_50796 === (31))){
var inst_50793 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50795__$1,inst_50793);
} else {
if((state_val_50796 === (32))){
var inst_50748 = (state_50795[(16)]);
var inst_50753 = inst_50748.cljs$lang$protocol_mask$partition0$;
var inst_50754 = (inst_50753 & (64));
var inst_50755 = inst_50748.cljs$core$ISeq$;
var inst_50756 = (cljs.core.PROTOCOL_SENTINEL === inst_50755);
var inst_50757 = ((inst_50754) || (inst_50756));
var state_50795__$1 = state_50795;
if(cljs.core.truth_(inst_50757)){
var statearr_50815_50895 = state_50795__$1;
(statearr_50815_50895[(1)] = (35));

} else {
var statearr_50816_50896 = state_50795__$1;
(statearr_50816_50896[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (40))){
var inst_50770 = (state_50795[(20)]);
var inst_50769 = (state_50795[(2)]);
var inst_50770__$1 = cljs.core.get.call(null,inst_50769,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50771 = cljs.core.get.call(null,inst_50769,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50772 = cljs.core.not_empty.call(null,inst_50770__$1);
var state_50795__$1 = (function (){var statearr_50817 = state_50795;
(statearr_50817[(20)] = inst_50770__$1);

(statearr_50817[(21)] = inst_50771);

return statearr_50817;
})();
if(cljs.core.truth_(inst_50772)){
var statearr_50818_50897 = state_50795__$1;
(statearr_50818_50897[(1)] = (41));

} else {
var statearr_50819_50898 = state_50795__$1;
(statearr_50819_50898[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (33))){
var state_50795__$1 = state_50795;
var statearr_50820_50899 = state_50795__$1;
(statearr_50820_50899[(2)] = false);

(statearr_50820_50899[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (13))){
var inst_50668 = (state_50795[(22)]);
var inst_50672 = cljs.core.chunk_first.call(null,inst_50668);
var inst_50673 = cljs.core.chunk_rest.call(null,inst_50668);
var inst_50674 = cljs.core.count.call(null,inst_50672);
var inst_50655 = inst_50673;
var inst_50656 = inst_50672;
var inst_50657 = inst_50674;
var inst_50658 = (0);
var state_50795__$1 = (function (){var statearr_50821 = state_50795;
(statearr_50821[(7)] = inst_50658);

(statearr_50821[(8)] = inst_50656);

(statearr_50821[(9)] = inst_50655);

(statearr_50821[(10)] = inst_50657);

return statearr_50821;
})();
var statearr_50822_50900 = state_50795__$1;
(statearr_50822_50900[(2)] = null);

(statearr_50822_50900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (22))){
var inst_50711 = (state_50795[(23)]);
var inst_50712 = (state_50795[(24)]);
var inst_50708 = (state_50795[(19)]);
var inst_50716 = (state_50795[(25)]);
var inst_50711__$1 = (state_50795[(2)]);
var inst_50712__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50711__$1);
var inst_50713 = (function (){var all_files = inst_50708;
var res_SINGLEQUOTE_ = inst_50711__$1;
var res = inst_50712__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50711,inst_50712,inst_50708,inst_50716,inst_50711__$1,inst_50712__$1,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50637_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50637_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50711,inst_50712,inst_50708,inst_50716,inst_50711__$1,inst_50712__$1,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50714 = cljs.core.filter.call(null,inst_50713,inst_50711__$1);
var inst_50715 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50716__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50715);
var inst_50717 = cljs.core.not_empty.call(null,inst_50716__$1);
var state_50795__$1 = (function (){var statearr_50823 = state_50795;
(statearr_50823[(26)] = inst_50714);

(statearr_50823[(23)] = inst_50711__$1);

(statearr_50823[(24)] = inst_50712__$1);

(statearr_50823[(25)] = inst_50716__$1);

return statearr_50823;
})();
if(cljs.core.truth_(inst_50717)){
var statearr_50824_50901 = state_50795__$1;
(statearr_50824_50901[(1)] = (23));

} else {
var statearr_50825_50902 = state_50795__$1;
(statearr_50825_50902[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (36))){
var state_50795__$1 = state_50795;
var statearr_50826_50903 = state_50795__$1;
(statearr_50826_50903[(2)] = false);

(statearr_50826_50903[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (41))){
var inst_50770 = (state_50795[(20)]);
var inst_50774 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50775 = cljs.core.map.call(null,inst_50774,inst_50770);
var inst_50776 = cljs.core.pr_str.call(null,inst_50775);
var inst_50777 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50776)].join('');
var inst_50778 = figwheel.client.utils.log.call(null,inst_50777);
var state_50795__$1 = state_50795;
var statearr_50827_50904 = state_50795__$1;
(statearr_50827_50904[(2)] = inst_50778);

(statearr_50827_50904[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (43))){
var inst_50771 = (state_50795[(21)]);
var inst_50781 = (state_50795[(2)]);
var inst_50782 = cljs.core.not_empty.call(null,inst_50771);
var state_50795__$1 = (function (){var statearr_50828 = state_50795;
(statearr_50828[(27)] = inst_50781);

return statearr_50828;
})();
if(cljs.core.truth_(inst_50782)){
var statearr_50829_50905 = state_50795__$1;
(statearr_50829_50905[(1)] = (44));

} else {
var statearr_50830_50906 = state_50795__$1;
(statearr_50830_50906[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (29))){
var inst_50714 = (state_50795[(26)]);
var inst_50748 = (state_50795[(16)]);
var inst_50711 = (state_50795[(23)]);
var inst_50712 = (state_50795[(24)]);
var inst_50708 = (state_50795[(19)]);
var inst_50716 = (state_50795[(25)]);
var inst_50744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50747 = (function (){var all_files = inst_50708;
var res_SINGLEQUOTE_ = inst_50711;
var res = inst_50712;
var files_not_loaded = inst_50714;
var dependencies_that_loaded = inst_50716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50748,inst_50711,inst_50712,inst_50708,inst_50716,inst_50744,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50746){
var map__50831 = p__50746;
var map__50831__$1 = ((((!((map__50831 == null)))?(((((map__50831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50831):map__50831);
var namespace = cljs.core.get.call(null,map__50831__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50748,inst_50711,inst_50712,inst_50708,inst_50716,inst_50744,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50748__$1 = cljs.core.group_by.call(null,inst_50747,inst_50714);
var inst_50750 = (inst_50748__$1 == null);
var inst_50751 = cljs.core.not.call(null,inst_50750);
var state_50795__$1 = (function (){var statearr_50833 = state_50795;
(statearr_50833[(16)] = inst_50748__$1);

(statearr_50833[(28)] = inst_50744);

return statearr_50833;
})();
if(inst_50751){
var statearr_50834_50907 = state_50795__$1;
(statearr_50834_50907[(1)] = (32));

} else {
var statearr_50835_50908 = state_50795__$1;
(statearr_50835_50908[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (44))){
var inst_50771 = (state_50795[(21)]);
var inst_50784 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50771);
var inst_50785 = cljs.core.pr_str.call(null,inst_50784);
var inst_50786 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50785)].join('');
var inst_50787 = figwheel.client.utils.log.call(null,inst_50786);
var state_50795__$1 = state_50795;
var statearr_50836_50909 = state_50795__$1;
(statearr_50836_50909[(2)] = inst_50787);

(statearr_50836_50909[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (6))){
var inst_50689 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
var statearr_50837_50910 = state_50795__$1;
(statearr_50837_50910[(2)] = inst_50689);

(statearr_50837_50910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (28))){
var inst_50714 = (state_50795[(26)]);
var inst_50741 = (state_50795[(2)]);
var inst_50742 = cljs.core.not_empty.call(null,inst_50714);
var state_50795__$1 = (function (){var statearr_50838 = state_50795;
(statearr_50838[(29)] = inst_50741);

return statearr_50838;
})();
if(cljs.core.truth_(inst_50742)){
var statearr_50839_50911 = state_50795__$1;
(statearr_50839_50911[(1)] = (29));

} else {
var statearr_50840_50912 = state_50795__$1;
(statearr_50840_50912[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (25))){
var inst_50712 = (state_50795[(24)]);
var inst_50728 = (state_50795[(2)]);
var inst_50729 = cljs.core.not_empty.call(null,inst_50712);
var state_50795__$1 = (function (){var statearr_50841 = state_50795;
(statearr_50841[(30)] = inst_50728);

return statearr_50841;
})();
if(cljs.core.truth_(inst_50729)){
var statearr_50842_50913 = state_50795__$1;
(statearr_50842_50913[(1)] = (26));

} else {
var statearr_50843_50914 = state_50795__$1;
(statearr_50843_50914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (34))){
var inst_50764 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
if(cljs.core.truth_(inst_50764)){
var statearr_50844_50915 = state_50795__$1;
(statearr_50844_50915[(1)] = (38));

} else {
var statearr_50845_50916 = state_50795__$1;
(statearr_50845_50916[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (17))){
var state_50795__$1 = state_50795;
var statearr_50846_50917 = state_50795__$1;
(statearr_50846_50917[(2)] = recompile_dependents);

(statearr_50846_50917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (3))){
var state_50795__$1 = state_50795;
var statearr_50847_50918 = state_50795__$1;
(statearr_50847_50918[(2)] = null);

(statearr_50847_50918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (12))){
var inst_50685 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
var statearr_50848_50919 = state_50795__$1;
(statearr_50848_50919[(2)] = inst_50685);

(statearr_50848_50919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (2))){
var inst_50647 = (state_50795[(13)]);
var inst_50654 = cljs.core.seq.call(null,inst_50647);
var inst_50655 = inst_50654;
var inst_50656 = null;
var inst_50657 = (0);
var inst_50658 = (0);
var state_50795__$1 = (function (){var statearr_50849 = state_50795;
(statearr_50849[(7)] = inst_50658);

(statearr_50849[(8)] = inst_50656);

(statearr_50849[(9)] = inst_50655);

(statearr_50849[(10)] = inst_50657);

return statearr_50849;
})();
var statearr_50850_50920 = state_50795__$1;
(statearr_50850_50920[(2)] = null);

(statearr_50850_50920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (23))){
var inst_50714 = (state_50795[(26)]);
var inst_50711 = (state_50795[(23)]);
var inst_50712 = (state_50795[(24)]);
var inst_50708 = (state_50795[(19)]);
var inst_50716 = (state_50795[(25)]);
var inst_50719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50721 = (function (){var all_files = inst_50708;
var res_SINGLEQUOTE_ = inst_50711;
var res = inst_50712;
var files_not_loaded = inst_50714;
var dependencies_that_loaded = inst_50716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50711,inst_50712,inst_50708,inst_50716,inst_50719,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50720){
var map__50851 = p__50720;
var map__50851__$1 = ((((!((map__50851 == null)))?(((((map__50851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50851):map__50851);
var request_url = cljs.core.get.call(null,map__50851__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50711,inst_50712,inst_50708,inst_50716,inst_50719,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50722 = cljs.core.reverse.call(null,inst_50716);
var inst_50723 = cljs.core.map.call(null,inst_50721,inst_50722);
var inst_50724 = cljs.core.pr_str.call(null,inst_50723);
var inst_50725 = figwheel.client.utils.log.call(null,inst_50724);
var state_50795__$1 = (function (){var statearr_50853 = state_50795;
(statearr_50853[(31)] = inst_50719);

return statearr_50853;
})();
var statearr_50854_50921 = state_50795__$1;
(statearr_50854_50921[(2)] = inst_50725);

(statearr_50854_50921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (35))){
var state_50795__$1 = state_50795;
var statearr_50855_50922 = state_50795__$1;
(statearr_50855_50922[(2)] = true);

(statearr_50855_50922[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (19))){
var inst_50698 = (state_50795[(12)]);
var inst_50704 = figwheel.client.file_reloading.expand_files.call(null,inst_50698);
var state_50795__$1 = state_50795;
var statearr_50856_50923 = state_50795__$1;
(statearr_50856_50923[(2)] = inst_50704);

(statearr_50856_50923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (11))){
var state_50795__$1 = state_50795;
var statearr_50857_50924 = state_50795__$1;
(statearr_50857_50924[(2)] = null);

(statearr_50857_50924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (9))){
var inst_50687 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
var statearr_50858_50925 = state_50795__$1;
(statearr_50858_50925[(2)] = inst_50687);

(statearr_50858_50925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (5))){
var inst_50658 = (state_50795[(7)]);
var inst_50657 = (state_50795[(10)]);
var inst_50660 = (inst_50658 < inst_50657);
var inst_50661 = inst_50660;
var state_50795__$1 = state_50795;
if(cljs.core.truth_(inst_50661)){
var statearr_50859_50926 = state_50795__$1;
(statearr_50859_50926[(1)] = (7));

} else {
var statearr_50860_50927 = state_50795__$1;
(statearr_50860_50927[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (14))){
var inst_50668 = (state_50795[(22)]);
var inst_50677 = cljs.core.first.call(null,inst_50668);
var inst_50678 = figwheel.client.file_reloading.eval_body.call(null,inst_50677,opts);
var inst_50679 = cljs.core.next.call(null,inst_50668);
var inst_50655 = inst_50679;
var inst_50656 = null;
var inst_50657 = (0);
var inst_50658 = (0);
var state_50795__$1 = (function (){var statearr_50861 = state_50795;
(statearr_50861[(7)] = inst_50658);

(statearr_50861[(32)] = inst_50678);

(statearr_50861[(8)] = inst_50656);

(statearr_50861[(9)] = inst_50655);

(statearr_50861[(10)] = inst_50657);

return statearr_50861;
})();
var statearr_50862_50928 = state_50795__$1;
(statearr_50862_50928[(2)] = null);

(statearr_50862_50928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (45))){
var state_50795__$1 = state_50795;
var statearr_50863_50929 = state_50795__$1;
(statearr_50863_50929[(2)] = null);

(statearr_50863_50929[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (26))){
var inst_50714 = (state_50795[(26)]);
var inst_50711 = (state_50795[(23)]);
var inst_50712 = (state_50795[(24)]);
var inst_50708 = (state_50795[(19)]);
var inst_50716 = (state_50795[(25)]);
var inst_50731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50733 = (function (){var all_files = inst_50708;
var res_SINGLEQUOTE_ = inst_50711;
var res = inst_50712;
var files_not_loaded = inst_50714;
var dependencies_that_loaded = inst_50716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50711,inst_50712,inst_50708,inst_50716,inst_50731,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50732){
var map__50864 = p__50732;
var map__50864__$1 = ((((!((map__50864 == null)))?(((((map__50864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50864):map__50864);
var namespace = cljs.core.get.call(null,map__50864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50711,inst_50712,inst_50708,inst_50716,inst_50731,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50734 = cljs.core.map.call(null,inst_50733,inst_50712);
var inst_50735 = cljs.core.pr_str.call(null,inst_50734);
var inst_50736 = figwheel.client.utils.log.call(null,inst_50735);
var inst_50737 = (function (){var all_files = inst_50708;
var res_SINGLEQUOTE_ = inst_50711;
var res = inst_50712;
var files_not_loaded = inst_50714;
var dependencies_that_loaded = inst_50716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50711,inst_50712,inst_50708,inst_50716,inst_50731,inst_50733,inst_50734,inst_50735,inst_50736,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50714,inst_50711,inst_50712,inst_50708,inst_50716,inst_50731,inst_50733,inst_50734,inst_50735,inst_50736,state_val_50796,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50738 = setTimeout(inst_50737,(10));
var state_50795__$1 = (function (){var statearr_50866 = state_50795;
(statearr_50866[(33)] = inst_50731);

(statearr_50866[(34)] = inst_50736);

return statearr_50866;
})();
var statearr_50867_50930 = state_50795__$1;
(statearr_50867_50930[(2)] = inst_50738);

(statearr_50867_50930[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (16))){
var state_50795__$1 = state_50795;
var statearr_50868_50931 = state_50795__$1;
(statearr_50868_50931[(2)] = reload_dependents);

(statearr_50868_50931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (38))){
var inst_50748 = (state_50795[(16)]);
var inst_50766 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50748);
var state_50795__$1 = state_50795;
var statearr_50869_50932 = state_50795__$1;
(statearr_50869_50932[(2)] = inst_50766);

(statearr_50869_50932[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (30))){
var state_50795__$1 = state_50795;
var statearr_50870_50933 = state_50795__$1;
(statearr_50870_50933[(2)] = null);

(statearr_50870_50933[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (10))){
var inst_50668 = (state_50795[(22)]);
var inst_50670 = cljs.core.chunked_seq_QMARK_.call(null,inst_50668);
var state_50795__$1 = state_50795;
if(inst_50670){
var statearr_50871_50934 = state_50795__$1;
(statearr_50871_50934[(1)] = (13));

} else {
var statearr_50872_50935 = state_50795__$1;
(statearr_50872_50935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (18))){
var inst_50702 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
if(cljs.core.truth_(inst_50702)){
var statearr_50873_50936 = state_50795__$1;
(statearr_50873_50936[(1)] = (19));

} else {
var statearr_50874_50937 = state_50795__$1;
(statearr_50874_50937[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (42))){
var state_50795__$1 = state_50795;
var statearr_50875_50938 = state_50795__$1;
(statearr_50875_50938[(2)] = null);

(statearr_50875_50938[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (37))){
var inst_50761 = (state_50795[(2)]);
var state_50795__$1 = state_50795;
var statearr_50876_50939 = state_50795__$1;
(statearr_50876_50939[(2)] = inst_50761);

(statearr_50876_50939[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50796 === (8))){
var inst_50655 = (state_50795[(9)]);
var inst_50668 = (state_50795[(22)]);
var inst_50668__$1 = cljs.core.seq.call(null,inst_50655);
var state_50795__$1 = (function (){var statearr_50877 = state_50795;
(statearr_50877[(22)] = inst_50668__$1);

return statearr_50877;
})();
if(inst_50668__$1){
var statearr_50878_50940 = state_50795__$1;
(statearr_50878_50940[(1)] = (10));

} else {
var statearr_50879_50941 = state_50795__$1;
(statearr_50879_50941[(1)] = (11));

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
});})(c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48102__auto__,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto____0 = (function (){
var statearr_50880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50880[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto__);

(statearr_50880[(1)] = (1));

return statearr_50880;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto____1 = (function (state_50795){
while(true){
var ret_value__48104__auto__ = (function (){try{while(true){
var result__48105__auto__ = switch__48102__auto__.call(null,state_50795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48105__auto__;
}
break;
}
}catch (e50881){if((e50881 instanceof Object)){
var ex__48106__auto__ = e50881;
var statearr_50882_50942 = state_50795;
(statearr_50882_50942[(5)] = ex__48106__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50943 = state_50795;
state_50795 = G__50943;
continue;
} else {
return ret_value__48104__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto__ = function(state_50795){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto____1.call(this,state_50795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48103__auto__;
})()
;})(switch__48102__auto__,c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48194__auto__ = (function (){var statearr_50883 = f__48193__auto__.call(null);
(statearr_50883[(6)] = c__48192__auto__);

return statearr_50883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48194__auto__);
});})(c__48192__auto__,map__50640,map__50640__$1,opts,before_jsload,on_jsload,reload_dependents,map__50641,map__50641__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48192__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50946,link){
var map__50947 = p__50946;
var map__50947__$1 = ((((!((map__50947 == null)))?(((((map__50947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50947):map__50947);
var file = cljs.core.get.call(null,map__50947__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__50947,map__50947__$1,file){
return (function (p1__50944_SHARP_,p2__50945_SHARP_){
if(cljs.core._EQ_.call(null,p1__50944_SHARP_,p2__50945_SHARP_)){
return p1__50944_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__50947,map__50947__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50950){
var map__50951 = p__50950;
var map__50951__$1 = ((((!((map__50951 == null)))?(((((map__50951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50951):map__50951);
var match_length = cljs.core.get.call(null,map__50951__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50951__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50949_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50949_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50953_SHARP_,p2__50954_SHARP_){
return cljs.core.assoc.call(null,p1__50953_SHARP_,cljs.core.get.call(null,p2__50954_SHARP_,key),p2__50954_SHARP_);
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
var loaded_f_datas_50955 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50955);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50955);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50956,p__50957){
var map__50958 = p__50956;
var map__50958__$1 = ((((!((map__50958 == null)))?(((((map__50958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50958):map__50958);
var on_cssload = cljs.core.get.call(null,map__50958__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50959 = p__50957;
var map__50959__$1 = ((((!((map__50959 == null)))?(((((map__50959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50959):map__50959);
var files_msg = map__50959__$1;
var files = cljs.core.get.call(null,map__50959__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1526415200968
