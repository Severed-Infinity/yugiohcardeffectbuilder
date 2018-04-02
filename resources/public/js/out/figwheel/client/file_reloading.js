// Compiled by ClojureScript 1.9.946 {}
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
var or__47188__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__47188__auto__){
return or__47188__auto__;
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
var or__47188__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
var or__47188__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__47188__auto____$1)){
return or__47188__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52629_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52629_SHARP_));
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
var seq__52630 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52631 = null;
var count__52632 = (0);
var i__52633 = (0);
while(true){
if((i__52633 < count__52632)){
var n = cljs.core._nth.call(null,chunk__52631,i__52633);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52634 = seq__52630;
var G__52635 = chunk__52631;
var G__52636 = count__52632;
var G__52637 = (i__52633 + (1));
seq__52630 = G__52634;
chunk__52631 = G__52635;
count__52632 = G__52636;
i__52633 = G__52637;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52630);
if(temp__4657__auto__){
var seq__52630__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52630__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__52630__$1);
var G__52638 = cljs.core.chunk_rest.call(null,seq__52630__$1);
var G__52639 = c__48027__auto__;
var G__52640 = cljs.core.count.call(null,c__48027__auto__);
var G__52641 = (0);
seq__52630 = G__52638;
chunk__52631 = G__52639;
count__52632 = G__52640;
i__52633 = G__52641;
continue;
} else {
var n = cljs.core.first.call(null,seq__52630__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52642 = cljs.core.next.call(null,seq__52630__$1);
var G__52643 = null;
var G__52644 = (0);
var G__52645 = (0);
seq__52630 = G__52642;
chunk__52631 = G__52643;
count__52632 = G__52644;
i__52633 = G__52645;
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
return cljs.core.some.call(null,(function (p__52646){
var vec__52647 = p__52646;
var _ = cljs.core.nth.call(null,vec__52647,(0),null);
var v = cljs.core.nth.call(null,vec__52647,(1),null);
var and__47176__auto__ = v;
if(cljs.core.truth_(and__47176__auto__)){
return v.call(null,dep);
} else {
return and__47176__auto__;
}
}),cljs.core.filter.call(null,(function (p__52650){
var vec__52651 = p__52650;
var k = cljs.core.nth.call(null,vec__52651,(0),null);
var v = cljs.core.nth.call(null,vec__52651,(1),null);
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

var seq__52663_52671 = cljs.core.seq.call(null,deps);
var chunk__52664_52672 = null;
var count__52665_52673 = (0);
var i__52666_52674 = (0);
while(true){
if((i__52666_52674 < count__52665_52673)){
var dep_52675 = cljs.core._nth.call(null,chunk__52664_52672,i__52666_52674);
if(cljs.core.truth_((function (){var and__47176__auto__ = dep_52675;
if(cljs.core.truth_(and__47176__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_52675));
} else {
return and__47176__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_52675,(depth + (1)),state);
} else {
}

var G__52676 = seq__52663_52671;
var G__52677 = chunk__52664_52672;
var G__52678 = count__52665_52673;
var G__52679 = (i__52666_52674 + (1));
seq__52663_52671 = G__52676;
chunk__52664_52672 = G__52677;
count__52665_52673 = G__52678;
i__52666_52674 = G__52679;
continue;
} else {
var temp__4657__auto___52680 = cljs.core.seq.call(null,seq__52663_52671);
if(temp__4657__auto___52680){
var seq__52663_52681__$1 = temp__4657__auto___52680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52663_52681__$1)){
var c__48027__auto___52682 = cljs.core.chunk_first.call(null,seq__52663_52681__$1);
var G__52683 = cljs.core.chunk_rest.call(null,seq__52663_52681__$1);
var G__52684 = c__48027__auto___52682;
var G__52685 = cljs.core.count.call(null,c__48027__auto___52682);
var G__52686 = (0);
seq__52663_52671 = G__52683;
chunk__52664_52672 = G__52684;
count__52665_52673 = G__52685;
i__52666_52674 = G__52686;
continue;
} else {
var dep_52687 = cljs.core.first.call(null,seq__52663_52681__$1);
if(cljs.core.truth_((function (){var and__47176__auto__ = dep_52687;
if(cljs.core.truth_(and__47176__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_52687));
} else {
return and__47176__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_52687,(depth + (1)),state);
} else {
}

var G__52688 = cljs.core.next.call(null,seq__52663_52681__$1);
var G__52689 = null;
var G__52690 = (0);
var G__52691 = (0);
seq__52663_52671 = G__52688;
chunk__52664_52672 = G__52689;
count__52665_52673 = G__52690;
i__52666_52674 = G__52691;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52667){
var vec__52668 = p__52667;
var seq__52669 = cljs.core.seq.call(null,vec__52668);
var first__52670 = cljs.core.first.call(null,seq__52669);
var seq__52669__$1 = cljs.core.next.call(null,seq__52669);
var x = first__52670;
var xs = seq__52669__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52668,seq__52669,first__52670,seq__52669__$1,x,xs,get_deps__$1){
return (function (p1__52654_SHARP_){
return clojure.set.difference.call(null,p1__52654_SHARP_,x);
});})(vec__52668,seq__52669,first__52670,seq__52669__$1,x,xs,get_deps__$1))
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
var seq__52692 = cljs.core.seq.call(null,provides);
var chunk__52693 = null;
var count__52694 = (0);
var i__52695 = (0);
while(true){
if((i__52695 < count__52694)){
var prov = cljs.core._nth.call(null,chunk__52693,i__52695);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52696_52704 = cljs.core.seq.call(null,requires);
var chunk__52697_52705 = null;
var count__52698_52706 = (0);
var i__52699_52707 = (0);
while(true){
if((i__52699_52707 < count__52698_52706)){
var req_52708 = cljs.core._nth.call(null,chunk__52697_52705,i__52699_52707);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52708,prov);

var G__52709 = seq__52696_52704;
var G__52710 = chunk__52697_52705;
var G__52711 = count__52698_52706;
var G__52712 = (i__52699_52707 + (1));
seq__52696_52704 = G__52709;
chunk__52697_52705 = G__52710;
count__52698_52706 = G__52711;
i__52699_52707 = G__52712;
continue;
} else {
var temp__4657__auto___52713 = cljs.core.seq.call(null,seq__52696_52704);
if(temp__4657__auto___52713){
var seq__52696_52714__$1 = temp__4657__auto___52713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52696_52714__$1)){
var c__48027__auto___52715 = cljs.core.chunk_first.call(null,seq__52696_52714__$1);
var G__52716 = cljs.core.chunk_rest.call(null,seq__52696_52714__$1);
var G__52717 = c__48027__auto___52715;
var G__52718 = cljs.core.count.call(null,c__48027__auto___52715);
var G__52719 = (0);
seq__52696_52704 = G__52716;
chunk__52697_52705 = G__52717;
count__52698_52706 = G__52718;
i__52699_52707 = G__52719;
continue;
} else {
var req_52720 = cljs.core.first.call(null,seq__52696_52714__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52720,prov);

var G__52721 = cljs.core.next.call(null,seq__52696_52714__$1);
var G__52722 = null;
var G__52723 = (0);
var G__52724 = (0);
seq__52696_52704 = G__52721;
chunk__52697_52705 = G__52722;
count__52698_52706 = G__52723;
i__52699_52707 = G__52724;
continue;
}
} else {
}
}
break;
}

var G__52725 = seq__52692;
var G__52726 = chunk__52693;
var G__52727 = count__52694;
var G__52728 = (i__52695 + (1));
seq__52692 = G__52725;
chunk__52693 = G__52726;
count__52694 = G__52727;
i__52695 = G__52728;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52692);
if(temp__4657__auto__){
var seq__52692__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52692__$1)){
var c__48027__auto__ = cljs.core.chunk_first.call(null,seq__52692__$1);
var G__52729 = cljs.core.chunk_rest.call(null,seq__52692__$1);
var G__52730 = c__48027__auto__;
var G__52731 = cljs.core.count.call(null,c__48027__auto__);
var G__52732 = (0);
seq__52692 = G__52729;
chunk__52693 = G__52730;
count__52694 = G__52731;
i__52695 = G__52732;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52692__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52700_52733 = cljs.core.seq.call(null,requires);
var chunk__52701_52734 = null;
var count__52702_52735 = (0);
var i__52703_52736 = (0);
while(true){
if((i__52703_52736 < count__52702_52735)){
var req_52737 = cljs.core._nth.call(null,chunk__52701_52734,i__52703_52736);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52737,prov);

var G__52738 = seq__52700_52733;
var G__52739 = chunk__52701_52734;
var G__52740 = count__52702_52735;
var G__52741 = (i__52703_52736 + (1));
seq__52700_52733 = G__52738;
chunk__52701_52734 = G__52739;
count__52702_52735 = G__52740;
i__52703_52736 = G__52741;
continue;
} else {
var temp__4657__auto___52742__$1 = cljs.core.seq.call(null,seq__52700_52733);
if(temp__4657__auto___52742__$1){
var seq__52700_52743__$1 = temp__4657__auto___52742__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52700_52743__$1)){
var c__48027__auto___52744 = cljs.core.chunk_first.call(null,seq__52700_52743__$1);
var G__52745 = cljs.core.chunk_rest.call(null,seq__52700_52743__$1);
var G__52746 = c__48027__auto___52744;
var G__52747 = cljs.core.count.call(null,c__48027__auto___52744);
var G__52748 = (0);
seq__52700_52733 = G__52745;
chunk__52701_52734 = G__52746;
count__52702_52735 = G__52747;
i__52703_52736 = G__52748;
continue;
} else {
var req_52749 = cljs.core.first.call(null,seq__52700_52743__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52749,prov);

var G__52750 = cljs.core.next.call(null,seq__52700_52743__$1);
var G__52751 = null;
var G__52752 = (0);
var G__52753 = (0);
seq__52700_52733 = G__52750;
chunk__52701_52734 = G__52751;
count__52702_52735 = G__52752;
i__52703_52736 = G__52753;
continue;
}
} else {
}
}
break;
}

var G__52754 = cljs.core.next.call(null,seq__52692__$1);
var G__52755 = null;
var G__52756 = (0);
var G__52757 = (0);
seq__52692 = G__52754;
chunk__52693 = G__52755;
count__52694 = G__52756;
i__52695 = G__52757;
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
var seq__52758_52762 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52759_52763 = null;
var count__52760_52764 = (0);
var i__52761_52765 = (0);
while(true){
if((i__52761_52765 < count__52760_52764)){
var ns_52766 = cljs.core._nth.call(null,chunk__52759_52763,i__52761_52765);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52766);

var G__52767 = seq__52758_52762;
var G__52768 = chunk__52759_52763;
var G__52769 = count__52760_52764;
var G__52770 = (i__52761_52765 + (1));
seq__52758_52762 = G__52767;
chunk__52759_52763 = G__52768;
count__52760_52764 = G__52769;
i__52761_52765 = G__52770;
continue;
} else {
var temp__4657__auto___52771 = cljs.core.seq.call(null,seq__52758_52762);
if(temp__4657__auto___52771){
var seq__52758_52772__$1 = temp__4657__auto___52771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52758_52772__$1)){
var c__48027__auto___52773 = cljs.core.chunk_first.call(null,seq__52758_52772__$1);
var G__52774 = cljs.core.chunk_rest.call(null,seq__52758_52772__$1);
var G__52775 = c__48027__auto___52773;
var G__52776 = cljs.core.count.call(null,c__48027__auto___52773);
var G__52777 = (0);
seq__52758_52762 = G__52774;
chunk__52759_52763 = G__52775;
count__52760_52764 = G__52776;
i__52761_52765 = G__52777;
continue;
} else {
var ns_52778 = cljs.core.first.call(null,seq__52758_52772__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52778);

var G__52779 = cljs.core.next.call(null,seq__52758_52772__$1);
var G__52780 = null;
var G__52781 = (0);
var G__52782 = (0);
seq__52758_52762 = G__52779;
chunk__52759_52763 = G__52780;
count__52760_52764 = G__52781;
i__52761_52765 = G__52782;
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
goog.require_figwheel_backup_ = (function (){var or__47188__auto__ = goog.require__;
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
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
var G__52783__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52784__i = 0, G__52784__a = new Array(arguments.length -  0);
while (G__52784__i < G__52784__a.length) {G__52784__a[G__52784__i] = arguments[G__52784__i + 0]; ++G__52784__i;}
  args = new cljs.core.IndexedSeq(G__52784__a,0,null);
} 
return G__52783__delegate.call(this,args);};
G__52783.cljs$lang$maxFixedArity = 0;
G__52783.cljs$lang$applyTo = (function (arglist__52785){
var args = cljs.core.seq(arglist__52785);
return G__52783__delegate(args);
});
G__52783.cljs$core$IFn$_invoke$arity$variadic = G__52783__delegate;
return G__52783;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__52786_SHARP_,p2__52787_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52786_SHARP_)].join('')),p2__52787_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__52788_SHARP_,p2__52789_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__52788_SHARP_)].join(''),p2__52789_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__52790 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__52790.addCallback(((function (G__52790){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__52790))
);

G__52790.addErrback(((function (G__52790){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__52790))
);

return G__52790;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e52791){if((e52791 instanceof Error)){
var e = e52791;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52791;

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
}catch (e52792){if((e52792 instanceof Error)){
var e = e52792;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52792;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52793 = cljs.core._EQ_;
var expr__52794 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52793.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52794))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__52793.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52794))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__52793.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__52794))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__52793,expr__52794){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52793,expr__52794))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52796,callback){
var map__52797 = p__52796;
var map__52797__$1 = ((((!((map__52797 == null)))?((((map__52797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52797):map__52797);
var file_msg = map__52797__$1;
var request_url = cljs.core.get.call(null,map__52797__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__47188__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__52797,map__52797__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52797,map__52797__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__){
return (function (state_52835){
var state_val_52836 = (state_52835[(1)]);
if((state_val_52836 === (7))){
var inst_52831 = (state_52835[(2)]);
var state_52835__$1 = state_52835;
var statearr_52837_52863 = state_52835__$1;
(statearr_52837_52863[(2)] = inst_52831);

(statearr_52837_52863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (1))){
var state_52835__$1 = state_52835;
var statearr_52838_52864 = state_52835__$1;
(statearr_52838_52864[(2)] = null);

(statearr_52838_52864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (4))){
var inst_52801 = (state_52835[(7)]);
var inst_52801__$1 = (state_52835[(2)]);
var state_52835__$1 = (function (){var statearr_52839 = state_52835;
(statearr_52839[(7)] = inst_52801__$1);

return statearr_52839;
})();
if(cljs.core.truth_(inst_52801__$1)){
var statearr_52840_52865 = state_52835__$1;
(statearr_52840_52865[(1)] = (5));

} else {
var statearr_52841_52866 = state_52835__$1;
(statearr_52841_52866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (15))){
var inst_52816 = (state_52835[(8)]);
var inst_52814 = (state_52835[(9)]);
var inst_52818 = inst_52816.call(null,inst_52814);
var state_52835__$1 = state_52835;
var statearr_52842_52867 = state_52835__$1;
(statearr_52842_52867[(2)] = inst_52818);

(statearr_52842_52867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (13))){
var inst_52825 = (state_52835[(2)]);
var state_52835__$1 = state_52835;
var statearr_52843_52868 = state_52835__$1;
(statearr_52843_52868[(2)] = inst_52825);

(statearr_52843_52868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (6))){
var state_52835__$1 = state_52835;
var statearr_52844_52869 = state_52835__$1;
(statearr_52844_52869[(2)] = null);

(statearr_52844_52869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (17))){
var inst_52822 = (state_52835[(2)]);
var state_52835__$1 = state_52835;
var statearr_52845_52870 = state_52835__$1;
(statearr_52845_52870[(2)] = inst_52822);

(statearr_52845_52870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (3))){
var inst_52833 = (state_52835[(2)]);
var state_52835__$1 = state_52835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52835__$1,inst_52833);
} else {
if((state_val_52836 === (12))){
var state_52835__$1 = state_52835;
var statearr_52846_52871 = state_52835__$1;
(statearr_52846_52871[(2)] = null);

(statearr_52846_52871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (2))){
var state_52835__$1 = state_52835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52835__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52836 === (11))){
var inst_52806 = (state_52835[(10)]);
var inst_52812 = figwheel.client.file_reloading.blocking_load.call(null,inst_52806);
var state_52835__$1 = state_52835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52835__$1,(14),inst_52812);
} else {
if((state_val_52836 === (9))){
var inst_52806 = (state_52835[(10)]);
var state_52835__$1 = state_52835;
if(cljs.core.truth_(inst_52806)){
var statearr_52847_52872 = state_52835__$1;
(statearr_52847_52872[(1)] = (11));

} else {
var statearr_52848_52873 = state_52835__$1;
(statearr_52848_52873[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (5))){
var inst_52807 = (state_52835[(11)]);
var inst_52801 = (state_52835[(7)]);
var inst_52806 = cljs.core.nth.call(null,inst_52801,(0),null);
var inst_52807__$1 = cljs.core.nth.call(null,inst_52801,(1),null);
var state_52835__$1 = (function (){var statearr_52849 = state_52835;
(statearr_52849[(10)] = inst_52806);

(statearr_52849[(11)] = inst_52807__$1);

return statearr_52849;
})();
if(cljs.core.truth_(inst_52807__$1)){
var statearr_52850_52874 = state_52835__$1;
(statearr_52850_52874[(1)] = (8));

} else {
var statearr_52851_52875 = state_52835__$1;
(statearr_52851_52875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (14))){
var inst_52806 = (state_52835[(10)]);
var inst_52816 = (state_52835[(8)]);
var inst_52814 = (state_52835[(2)]);
var inst_52815 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52816__$1 = cljs.core.get.call(null,inst_52815,inst_52806);
var state_52835__$1 = (function (){var statearr_52852 = state_52835;
(statearr_52852[(8)] = inst_52816__$1);

(statearr_52852[(9)] = inst_52814);

return statearr_52852;
})();
if(cljs.core.truth_(inst_52816__$1)){
var statearr_52853_52876 = state_52835__$1;
(statearr_52853_52876[(1)] = (15));

} else {
var statearr_52854_52877 = state_52835__$1;
(statearr_52854_52877[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (16))){
var inst_52814 = (state_52835[(9)]);
var inst_52820 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52814);
var state_52835__$1 = state_52835;
var statearr_52855_52878 = state_52835__$1;
(statearr_52855_52878[(2)] = inst_52820);

(statearr_52855_52878[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (10))){
var inst_52827 = (state_52835[(2)]);
var state_52835__$1 = (function (){var statearr_52856 = state_52835;
(statearr_52856[(12)] = inst_52827);

return statearr_52856;
})();
var statearr_52857_52879 = state_52835__$1;
(statearr_52857_52879[(2)] = null);

(statearr_52857_52879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52836 === (8))){
var inst_52807 = (state_52835[(11)]);
var inst_52809 = eval(inst_52807);
var state_52835__$1 = state_52835;
var statearr_52858_52880 = state_52835__$1;
(statearr_52858_52880[(2)] = inst_52809);

(statearr_52858_52880[(1)] = (10));


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
});})(c__50541__auto__))
;
return ((function (switch__50453__auto__,c__50541__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50454__auto__ = null;
var figwheel$client$file_reloading$state_machine__50454__auto____0 = (function (){
var statearr_52859 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52859[(0)] = figwheel$client$file_reloading$state_machine__50454__auto__);

(statearr_52859[(1)] = (1));

return statearr_52859;
});
var figwheel$client$file_reloading$state_machine__50454__auto____1 = (function (state_52835){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52860){if((e52860 instanceof Object)){
var ex__50457__auto__ = e52860;
var statearr_52861_52881 = state_52835;
(statearr_52861_52881[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52882 = state_52835;
state_52835 = G__52882;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50454__auto__ = function(state_52835){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50454__auto____1.call(this,state_52835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50454__auto____0;
figwheel$client$file_reloading$state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50454__auto____1;
return figwheel$client$file_reloading$state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__))
})();
var state__50543__auto__ = (function (){var statearr_52862 = f__50542__auto__.call(null);
(statearr_52862[(6)] = c__50541__auto__);

return statearr_52862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__))
);

return c__50541__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__52884 = arguments.length;
switch (G__52884) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52886,callback){
var map__52887 = p__52886;
var map__52887__$1 = ((((!((map__52887 == null)))?((((map__52887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52887):map__52887);
var file_msg = map__52887__$1;
var namespace = cljs.core.get.call(null,map__52887__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52887,map__52887__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52887,map__52887__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__52889){
var map__52890 = p__52889;
var map__52890__$1 = ((((!((map__52890 == null)))?((((map__52890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52890):map__52890);
var file_msg = map__52890__$1;
var namespace = cljs.core.get.call(null,map__52890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52892){
var map__52893 = p__52892;
var map__52893__$1 = ((((!((map__52893 == null)))?((((map__52893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52893):map__52893);
var file_msg = map__52893__$1;
var namespace = cljs.core.get.call(null,map__52893__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__47176__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__47176__auto__){
var or__47188__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__47188__auto__)){
return or__47188__auto__;
} else {
var or__47188__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__47188__auto____$1)){
return or__47188__auto____$1;
} else {
var or__47188__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__47188__auto____$2)){
return or__47188__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__47176__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52895,callback){
var map__52896 = p__52895;
var map__52896__$1 = ((((!((map__52896 == null)))?((((map__52896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52896):map__52896);
var file_msg = map__52896__$1;
var request_url = cljs.core.get.call(null,map__52896__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__50541__auto___52946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto___52946,out){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto___52946,out){
return (function (state_52931){
var state_val_52932 = (state_52931[(1)]);
if((state_val_52932 === (1))){
var inst_52905 = cljs.core.seq.call(null,files);
var inst_52906 = cljs.core.first.call(null,inst_52905);
var inst_52907 = cljs.core.next.call(null,inst_52905);
var inst_52908 = files;
var state_52931__$1 = (function (){var statearr_52933 = state_52931;
(statearr_52933[(7)] = inst_52908);

(statearr_52933[(8)] = inst_52906);

(statearr_52933[(9)] = inst_52907);

return statearr_52933;
})();
var statearr_52934_52947 = state_52931__$1;
(statearr_52934_52947[(2)] = null);

(statearr_52934_52947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (2))){
var inst_52908 = (state_52931[(7)]);
var inst_52914 = (state_52931[(10)]);
var inst_52913 = cljs.core.seq.call(null,inst_52908);
var inst_52914__$1 = cljs.core.first.call(null,inst_52913);
var inst_52915 = cljs.core.next.call(null,inst_52913);
var inst_52916 = (inst_52914__$1 == null);
var inst_52917 = cljs.core.not.call(null,inst_52916);
var state_52931__$1 = (function (){var statearr_52935 = state_52931;
(statearr_52935[(10)] = inst_52914__$1);

(statearr_52935[(11)] = inst_52915);

return statearr_52935;
})();
if(inst_52917){
var statearr_52936_52948 = state_52931__$1;
(statearr_52936_52948[(1)] = (4));

} else {
var statearr_52937_52949 = state_52931__$1;
(statearr_52937_52949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (3))){
var inst_52929 = (state_52931[(2)]);
var state_52931__$1 = state_52931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52931__$1,inst_52929);
} else {
if((state_val_52932 === (4))){
var inst_52914 = (state_52931[(10)]);
var inst_52919 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52914);
var state_52931__$1 = state_52931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52931__$1,(7),inst_52919);
} else {
if((state_val_52932 === (5))){
var inst_52925 = cljs.core.async.close_BANG_.call(null,out);
var state_52931__$1 = state_52931;
var statearr_52938_52950 = state_52931__$1;
(statearr_52938_52950[(2)] = inst_52925);

(statearr_52938_52950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (6))){
var inst_52927 = (state_52931[(2)]);
var state_52931__$1 = state_52931;
var statearr_52939_52951 = state_52931__$1;
(statearr_52939_52951[(2)] = inst_52927);

(statearr_52939_52951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52932 === (7))){
var inst_52915 = (state_52931[(11)]);
var inst_52921 = (state_52931[(2)]);
var inst_52922 = cljs.core.async.put_BANG_.call(null,out,inst_52921);
var inst_52908 = inst_52915;
var state_52931__$1 = (function (){var statearr_52940 = state_52931;
(statearr_52940[(7)] = inst_52908);

(statearr_52940[(12)] = inst_52922);

return statearr_52940;
})();
var statearr_52941_52952 = state_52931__$1;
(statearr_52941_52952[(2)] = null);

(statearr_52941_52952[(1)] = (2));


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
});})(c__50541__auto___52946,out))
;
return ((function (switch__50453__auto__,c__50541__auto___52946,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto____0 = (function (){
var statearr_52942 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52942[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto__);

(statearr_52942[(1)] = (1));

return statearr_52942;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto____1 = (function (state_52931){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_52931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e52943){if((e52943 instanceof Object)){
var ex__50457__auto__ = e52943;
var statearr_52944_52953 = state_52931;
(statearr_52944_52953[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52954 = state_52931;
state_52931 = G__52954;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto__ = function(state_52931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto____1.call(this,state_52931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto___52946,out))
})();
var state__50543__auto__ = (function (){var statearr_52945 = f__50542__auto__.call(null);
(statearr_52945[(6)] = c__50541__auto___52946);

return statearr_52945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto___52946,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52955,opts){
var map__52956 = p__52955;
var map__52956__$1 = ((((!((map__52956 == null)))?((((map__52956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52956):map__52956);
var eval_body = cljs.core.get.call(null,map__52956__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__47176__auto__ = eval_body;
if(cljs.core.truth_(and__47176__auto__)){
return typeof eval_body === 'string';
} else {
return and__47176__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52958){var e = e52958;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52959_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52959_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__52960){
var vec__52961 = p__52960;
var k = cljs.core.nth.call(null,vec__52961,(0),null);
var v = cljs.core.nth.call(null,vec__52961,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52964){
var vec__52965 = p__52964;
var k = cljs.core.nth.call(null,vec__52965,(0),null);
var v = cljs.core.nth.call(null,vec__52965,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52971,p__52972){
var map__52973 = p__52971;
var map__52973__$1 = ((((!((map__52973 == null)))?((((map__52973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52973):map__52973);
var opts = map__52973__$1;
var before_jsload = cljs.core.get.call(null,map__52973__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52973__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52973__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52974 = p__52972;
var map__52974__$1 = ((((!((map__52974 == null)))?((((map__52974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52974):map__52974);
var msg = map__52974__$1;
var files = cljs.core.get.call(null,map__52974__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52974__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52974__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__50541__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__50542__auto__ = (function (){var switch__50453__auto__ = ((function (c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53128){
var state_val_53129 = (state_53128[(1)]);
if((state_val_53129 === (7))){
var inst_52989 = (state_53128[(7)]);
var inst_52991 = (state_53128[(8)]);
var inst_52988 = (state_53128[(9)]);
var inst_52990 = (state_53128[(10)]);
var inst_52996 = cljs.core._nth.call(null,inst_52989,inst_52991);
var inst_52997 = figwheel.client.file_reloading.eval_body.call(null,inst_52996,opts);
var inst_52998 = (inst_52991 + (1));
var tmp53130 = inst_52989;
var tmp53131 = inst_52988;
var tmp53132 = inst_52990;
var inst_52988__$1 = tmp53131;
var inst_52989__$1 = tmp53130;
var inst_52990__$1 = tmp53132;
var inst_52991__$1 = inst_52998;
var state_53128__$1 = (function (){var statearr_53133 = state_53128;
(statearr_53133[(11)] = inst_52997);

(statearr_53133[(7)] = inst_52989__$1);

(statearr_53133[(8)] = inst_52991__$1);

(statearr_53133[(9)] = inst_52988__$1);

(statearr_53133[(10)] = inst_52990__$1);

return statearr_53133;
})();
var statearr_53134_53217 = state_53128__$1;
(statearr_53134_53217[(2)] = null);

(statearr_53134_53217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (20))){
var inst_53031 = (state_53128[(12)]);
var inst_53039 = figwheel.client.file_reloading.sort_files.call(null,inst_53031);
var state_53128__$1 = state_53128;
var statearr_53135_53218 = state_53128__$1;
(statearr_53135_53218[(2)] = inst_53039);

(statearr_53135_53218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (27))){
var state_53128__$1 = state_53128;
var statearr_53136_53219 = state_53128__$1;
(statearr_53136_53219[(2)] = null);

(statearr_53136_53219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (1))){
var inst_52980 = (state_53128[(13)]);
var inst_52977 = before_jsload.call(null,files);
var inst_52978 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52979 = (function (){return ((function (inst_52980,inst_52977,inst_52978,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52968_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52968_SHARP_);
});
;})(inst_52980,inst_52977,inst_52978,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52980__$1 = cljs.core.filter.call(null,inst_52979,files);
var inst_52981 = cljs.core.not_empty.call(null,inst_52980__$1);
var state_53128__$1 = (function (){var statearr_53137 = state_53128;
(statearr_53137[(13)] = inst_52980__$1);

(statearr_53137[(14)] = inst_52977);

(statearr_53137[(15)] = inst_52978);

return statearr_53137;
})();
if(cljs.core.truth_(inst_52981)){
var statearr_53138_53220 = state_53128__$1;
(statearr_53138_53220[(1)] = (2));

} else {
var statearr_53139_53221 = state_53128__$1;
(statearr_53139_53221[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (24))){
var state_53128__$1 = state_53128;
var statearr_53140_53222 = state_53128__$1;
(statearr_53140_53222[(2)] = null);

(statearr_53140_53222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (39))){
var inst_53081 = (state_53128[(16)]);
var state_53128__$1 = state_53128;
var statearr_53141_53223 = state_53128__$1;
(statearr_53141_53223[(2)] = inst_53081);

(statearr_53141_53223[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (46))){
var inst_53123 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
var statearr_53142_53224 = state_53128__$1;
(statearr_53142_53224[(2)] = inst_53123);

(statearr_53142_53224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (4))){
var inst_53025 = (state_53128[(2)]);
var inst_53026 = cljs.core.List.EMPTY;
var inst_53027 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53026);
var inst_53028 = (function (){return ((function (inst_53025,inst_53026,inst_53027,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52969_SHARP_){
var and__47176__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52969_SHARP_);
if(cljs.core.truth_(and__47176__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52969_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__52969_SHARP_)));
} else {
return and__47176__auto__;
}
});
;})(inst_53025,inst_53026,inst_53027,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53029 = cljs.core.filter.call(null,inst_53028,files);
var inst_53030 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53031 = cljs.core.concat.call(null,inst_53029,inst_53030);
var state_53128__$1 = (function (){var statearr_53143 = state_53128;
(statearr_53143[(17)] = inst_53025);

(statearr_53143[(12)] = inst_53031);

(statearr_53143[(18)] = inst_53027);

return statearr_53143;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53144_53225 = state_53128__$1;
(statearr_53144_53225[(1)] = (16));

} else {
var statearr_53145_53226 = state_53128__$1;
(statearr_53145_53226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (15))){
var inst_53015 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
var statearr_53146_53227 = state_53128__$1;
(statearr_53146_53227[(2)] = inst_53015);

(statearr_53146_53227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (21))){
var inst_53041 = (state_53128[(19)]);
var inst_53041__$1 = (state_53128[(2)]);
var inst_53042 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53041__$1);
var state_53128__$1 = (function (){var statearr_53147 = state_53128;
(statearr_53147[(19)] = inst_53041__$1);

return statearr_53147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53128__$1,(22),inst_53042);
} else {
if((state_val_53129 === (31))){
var inst_53126 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53128__$1,inst_53126);
} else {
if((state_val_53129 === (32))){
var inst_53081 = (state_53128[(16)]);
var inst_53086 = inst_53081.cljs$lang$protocol_mask$partition0$;
var inst_53087 = (inst_53086 & (64));
var inst_53088 = inst_53081.cljs$core$ISeq$;
var inst_53089 = (cljs.core.PROTOCOL_SENTINEL === inst_53088);
var inst_53090 = (inst_53087) || (inst_53089);
var state_53128__$1 = state_53128;
if(cljs.core.truth_(inst_53090)){
var statearr_53148_53228 = state_53128__$1;
(statearr_53148_53228[(1)] = (35));

} else {
var statearr_53149_53229 = state_53128__$1;
(statearr_53149_53229[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (40))){
var inst_53103 = (state_53128[(20)]);
var inst_53102 = (state_53128[(2)]);
var inst_53103__$1 = cljs.core.get.call(null,inst_53102,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53104 = cljs.core.get.call(null,inst_53102,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53105 = cljs.core.not_empty.call(null,inst_53103__$1);
var state_53128__$1 = (function (){var statearr_53150 = state_53128;
(statearr_53150[(20)] = inst_53103__$1);

(statearr_53150[(21)] = inst_53104);

return statearr_53150;
})();
if(cljs.core.truth_(inst_53105)){
var statearr_53151_53230 = state_53128__$1;
(statearr_53151_53230[(1)] = (41));

} else {
var statearr_53152_53231 = state_53128__$1;
(statearr_53152_53231[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (33))){
var state_53128__$1 = state_53128;
var statearr_53153_53232 = state_53128__$1;
(statearr_53153_53232[(2)] = false);

(statearr_53153_53232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (13))){
var inst_53001 = (state_53128[(22)]);
var inst_53005 = cljs.core.chunk_first.call(null,inst_53001);
var inst_53006 = cljs.core.chunk_rest.call(null,inst_53001);
var inst_53007 = cljs.core.count.call(null,inst_53005);
var inst_52988 = inst_53006;
var inst_52989 = inst_53005;
var inst_52990 = inst_53007;
var inst_52991 = (0);
var state_53128__$1 = (function (){var statearr_53154 = state_53128;
(statearr_53154[(7)] = inst_52989);

(statearr_53154[(8)] = inst_52991);

(statearr_53154[(9)] = inst_52988);

(statearr_53154[(10)] = inst_52990);

return statearr_53154;
})();
var statearr_53155_53233 = state_53128__$1;
(statearr_53155_53233[(2)] = null);

(statearr_53155_53233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (22))){
var inst_53049 = (state_53128[(23)]);
var inst_53045 = (state_53128[(24)]);
var inst_53044 = (state_53128[(25)]);
var inst_53041 = (state_53128[(19)]);
var inst_53044__$1 = (state_53128[(2)]);
var inst_53045__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53044__$1);
var inst_53046 = (function (){var all_files = inst_53041;
var res_SINGLEQUOTE_ = inst_53044__$1;
var res = inst_53045__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53049,inst_53045,inst_53044,inst_53041,inst_53044__$1,inst_53045__$1,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52970_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52970_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53049,inst_53045,inst_53044,inst_53041,inst_53044__$1,inst_53045__$1,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53047 = cljs.core.filter.call(null,inst_53046,inst_53044__$1);
var inst_53048 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53049__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53048);
var inst_53050 = cljs.core.not_empty.call(null,inst_53049__$1);
var state_53128__$1 = (function (){var statearr_53156 = state_53128;
(statearr_53156[(23)] = inst_53049__$1);

(statearr_53156[(26)] = inst_53047);

(statearr_53156[(24)] = inst_53045__$1);

(statearr_53156[(25)] = inst_53044__$1);

return statearr_53156;
})();
if(cljs.core.truth_(inst_53050)){
var statearr_53157_53234 = state_53128__$1;
(statearr_53157_53234[(1)] = (23));

} else {
var statearr_53158_53235 = state_53128__$1;
(statearr_53158_53235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (36))){
var state_53128__$1 = state_53128;
var statearr_53159_53236 = state_53128__$1;
(statearr_53159_53236[(2)] = false);

(statearr_53159_53236[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (41))){
var inst_53103 = (state_53128[(20)]);
var inst_53107 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53108 = cljs.core.map.call(null,inst_53107,inst_53103);
var inst_53109 = cljs.core.pr_str.call(null,inst_53108);
var inst_53110 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53109)].join('');
var inst_53111 = figwheel.client.utils.log.call(null,inst_53110);
var state_53128__$1 = state_53128;
var statearr_53160_53237 = state_53128__$1;
(statearr_53160_53237[(2)] = inst_53111);

(statearr_53160_53237[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (43))){
var inst_53104 = (state_53128[(21)]);
var inst_53114 = (state_53128[(2)]);
var inst_53115 = cljs.core.not_empty.call(null,inst_53104);
var state_53128__$1 = (function (){var statearr_53161 = state_53128;
(statearr_53161[(27)] = inst_53114);

return statearr_53161;
})();
if(cljs.core.truth_(inst_53115)){
var statearr_53162_53238 = state_53128__$1;
(statearr_53162_53238[(1)] = (44));

} else {
var statearr_53163_53239 = state_53128__$1;
(statearr_53163_53239[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (29))){
var inst_53049 = (state_53128[(23)]);
var inst_53047 = (state_53128[(26)]);
var inst_53045 = (state_53128[(24)]);
var inst_53044 = (state_53128[(25)]);
var inst_53081 = (state_53128[(16)]);
var inst_53041 = (state_53128[(19)]);
var inst_53077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53080 = (function (){var all_files = inst_53041;
var res_SINGLEQUOTE_ = inst_53044;
var res = inst_53045;
var files_not_loaded = inst_53047;
var dependencies_that_loaded = inst_53049;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53081,inst_53041,inst_53077,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53079){
var map__53164 = p__53079;
var map__53164__$1 = ((((!((map__53164 == null)))?((((map__53164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53164):map__53164);
var namespace = cljs.core.get.call(null,map__53164__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53081,inst_53041,inst_53077,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53081__$1 = cljs.core.group_by.call(null,inst_53080,inst_53047);
var inst_53083 = (inst_53081__$1 == null);
var inst_53084 = cljs.core.not.call(null,inst_53083);
var state_53128__$1 = (function (){var statearr_53166 = state_53128;
(statearr_53166[(28)] = inst_53077);

(statearr_53166[(16)] = inst_53081__$1);

return statearr_53166;
})();
if(inst_53084){
var statearr_53167_53240 = state_53128__$1;
(statearr_53167_53240[(1)] = (32));

} else {
var statearr_53168_53241 = state_53128__$1;
(statearr_53168_53241[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (44))){
var inst_53104 = (state_53128[(21)]);
var inst_53117 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53104);
var inst_53118 = cljs.core.pr_str.call(null,inst_53117);
var inst_53119 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53118)].join('');
var inst_53120 = figwheel.client.utils.log.call(null,inst_53119);
var state_53128__$1 = state_53128;
var statearr_53169_53242 = state_53128__$1;
(statearr_53169_53242[(2)] = inst_53120);

(statearr_53169_53242[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (6))){
var inst_53022 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
var statearr_53170_53243 = state_53128__$1;
(statearr_53170_53243[(2)] = inst_53022);

(statearr_53170_53243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (28))){
var inst_53047 = (state_53128[(26)]);
var inst_53074 = (state_53128[(2)]);
var inst_53075 = cljs.core.not_empty.call(null,inst_53047);
var state_53128__$1 = (function (){var statearr_53171 = state_53128;
(statearr_53171[(29)] = inst_53074);

return statearr_53171;
})();
if(cljs.core.truth_(inst_53075)){
var statearr_53172_53244 = state_53128__$1;
(statearr_53172_53244[(1)] = (29));

} else {
var statearr_53173_53245 = state_53128__$1;
(statearr_53173_53245[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (25))){
var inst_53045 = (state_53128[(24)]);
var inst_53061 = (state_53128[(2)]);
var inst_53062 = cljs.core.not_empty.call(null,inst_53045);
var state_53128__$1 = (function (){var statearr_53174 = state_53128;
(statearr_53174[(30)] = inst_53061);

return statearr_53174;
})();
if(cljs.core.truth_(inst_53062)){
var statearr_53175_53246 = state_53128__$1;
(statearr_53175_53246[(1)] = (26));

} else {
var statearr_53176_53247 = state_53128__$1;
(statearr_53176_53247[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (34))){
var inst_53097 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
if(cljs.core.truth_(inst_53097)){
var statearr_53177_53248 = state_53128__$1;
(statearr_53177_53248[(1)] = (38));

} else {
var statearr_53178_53249 = state_53128__$1;
(statearr_53178_53249[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (17))){
var state_53128__$1 = state_53128;
var statearr_53179_53250 = state_53128__$1;
(statearr_53179_53250[(2)] = recompile_dependents);

(statearr_53179_53250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (3))){
var state_53128__$1 = state_53128;
var statearr_53180_53251 = state_53128__$1;
(statearr_53180_53251[(2)] = null);

(statearr_53180_53251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (12))){
var inst_53018 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
var statearr_53181_53252 = state_53128__$1;
(statearr_53181_53252[(2)] = inst_53018);

(statearr_53181_53252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (2))){
var inst_52980 = (state_53128[(13)]);
var inst_52987 = cljs.core.seq.call(null,inst_52980);
var inst_52988 = inst_52987;
var inst_52989 = null;
var inst_52990 = (0);
var inst_52991 = (0);
var state_53128__$1 = (function (){var statearr_53182 = state_53128;
(statearr_53182[(7)] = inst_52989);

(statearr_53182[(8)] = inst_52991);

(statearr_53182[(9)] = inst_52988);

(statearr_53182[(10)] = inst_52990);

return statearr_53182;
})();
var statearr_53183_53253 = state_53128__$1;
(statearr_53183_53253[(2)] = null);

(statearr_53183_53253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (23))){
var inst_53049 = (state_53128[(23)]);
var inst_53047 = (state_53128[(26)]);
var inst_53045 = (state_53128[(24)]);
var inst_53044 = (state_53128[(25)]);
var inst_53041 = (state_53128[(19)]);
var inst_53052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53054 = (function (){var all_files = inst_53041;
var res_SINGLEQUOTE_ = inst_53044;
var res = inst_53045;
var files_not_loaded = inst_53047;
var dependencies_that_loaded = inst_53049;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53041,inst_53052,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53053){
var map__53184 = p__53053;
var map__53184__$1 = ((((!((map__53184 == null)))?((((map__53184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53184):map__53184);
var request_url = cljs.core.get.call(null,map__53184__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53041,inst_53052,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53055 = cljs.core.reverse.call(null,inst_53049);
var inst_53056 = cljs.core.map.call(null,inst_53054,inst_53055);
var inst_53057 = cljs.core.pr_str.call(null,inst_53056);
var inst_53058 = figwheel.client.utils.log.call(null,inst_53057);
var state_53128__$1 = (function (){var statearr_53186 = state_53128;
(statearr_53186[(31)] = inst_53052);

return statearr_53186;
})();
var statearr_53187_53254 = state_53128__$1;
(statearr_53187_53254[(2)] = inst_53058);

(statearr_53187_53254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (35))){
var state_53128__$1 = state_53128;
var statearr_53188_53255 = state_53128__$1;
(statearr_53188_53255[(2)] = true);

(statearr_53188_53255[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (19))){
var inst_53031 = (state_53128[(12)]);
var inst_53037 = figwheel.client.file_reloading.expand_files.call(null,inst_53031);
var state_53128__$1 = state_53128;
var statearr_53189_53256 = state_53128__$1;
(statearr_53189_53256[(2)] = inst_53037);

(statearr_53189_53256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (11))){
var state_53128__$1 = state_53128;
var statearr_53190_53257 = state_53128__$1;
(statearr_53190_53257[(2)] = null);

(statearr_53190_53257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (9))){
var inst_53020 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
var statearr_53191_53258 = state_53128__$1;
(statearr_53191_53258[(2)] = inst_53020);

(statearr_53191_53258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (5))){
var inst_52991 = (state_53128[(8)]);
var inst_52990 = (state_53128[(10)]);
var inst_52993 = (inst_52991 < inst_52990);
var inst_52994 = inst_52993;
var state_53128__$1 = state_53128;
if(cljs.core.truth_(inst_52994)){
var statearr_53192_53259 = state_53128__$1;
(statearr_53192_53259[(1)] = (7));

} else {
var statearr_53193_53260 = state_53128__$1;
(statearr_53193_53260[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (14))){
var inst_53001 = (state_53128[(22)]);
var inst_53010 = cljs.core.first.call(null,inst_53001);
var inst_53011 = figwheel.client.file_reloading.eval_body.call(null,inst_53010,opts);
var inst_53012 = cljs.core.next.call(null,inst_53001);
var inst_52988 = inst_53012;
var inst_52989 = null;
var inst_52990 = (0);
var inst_52991 = (0);
var state_53128__$1 = (function (){var statearr_53194 = state_53128;
(statearr_53194[(32)] = inst_53011);

(statearr_53194[(7)] = inst_52989);

(statearr_53194[(8)] = inst_52991);

(statearr_53194[(9)] = inst_52988);

(statearr_53194[(10)] = inst_52990);

return statearr_53194;
})();
var statearr_53195_53261 = state_53128__$1;
(statearr_53195_53261[(2)] = null);

(statearr_53195_53261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (45))){
var state_53128__$1 = state_53128;
var statearr_53196_53262 = state_53128__$1;
(statearr_53196_53262[(2)] = null);

(statearr_53196_53262[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (26))){
var inst_53049 = (state_53128[(23)]);
var inst_53047 = (state_53128[(26)]);
var inst_53045 = (state_53128[(24)]);
var inst_53044 = (state_53128[(25)]);
var inst_53041 = (state_53128[(19)]);
var inst_53064 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53066 = (function (){var all_files = inst_53041;
var res_SINGLEQUOTE_ = inst_53044;
var res = inst_53045;
var files_not_loaded = inst_53047;
var dependencies_that_loaded = inst_53049;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53041,inst_53064,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53065){
var map__53197 = p__53065;
var map__53197__$1 = ((((!((map__53197 == null)))?((((map__53197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53197):map__53197);
var namespace = cljs.core.get.call(null,map__53197__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53197__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53041,inst_53064,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53067 = cljs.core.map.call(null,inst_53066,inst_53045);
var inst_53068 = cljs.core.pr_str.call(null,inst_53067);
var inst_53069 = figwheel.client.utils.log.call(null,inst_53068);
var inst_53070 = (function (){var all_files = inst_53041;
var res_SINGLEQUOTE_ = inst_53044;
var res = inst_53045;
var files_not_loaded = inst_53047;
var dependencies_that_loaded = inst_53049;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53041,inst_53064,inst_53066,inst_53067,inst_53068,inst_53069,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53049,inst_53047,inst_53045,inst_53044,inst_53041,inst_53064,inst_53066,inst_53067,inst_53068,inst_53069,state_val_53129,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53071 = setTimeout(inst_53070,(10));
var state_53128__$1 = (function (){var statearr_53199 = state_53128;
(statearr_53199[(33)] = inst_53069);

(statearr_53199[(34)] = inst_53064);

return statearr_53199;
})();
var statearr_53200_53263 = state_53128__$1;
(statearr_53200_53263[(2)] = inst_53071);

(statearr_53200_53263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (16))){
var state_53128__$1 = state_53128;
var statearr_53201_53264 = state_53128__$1;
(statearr_53201_53264[(2)] = reload_dependents);

(statearr_53201_53264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (38))){
var inst_53081 = (state_53128[(16)]);
var inst_53099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53081);
var state_53128__$1 = state_53128;
var statearr_53202_53265 = state_53128__$1;
(statearr_53202_53265[(2)] = inst_53099);

(statearr_53202_53265[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (30))){
var state_53128__$1 = state_53128;
var statearr_53203_53266 = state_53128__$1;
(statearr_53203_53266[(2)] = null);

(statearr_53203_53266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (10))){
var inst_53001 = (state_53128[(22)]);
var inst_53003 = cljs.core.chunked_seq_QMARK_.call(null,inst_53001);
var state_53128__$1 = state_53128;
if(inst_53003){
var statearr_53204_53267 = state_53128__$1;
(statearr_53204_53267[(1)] = (13));

} else {
var statearr_53205_53268 = state_53128__$1;
(statearr_53205_53268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (18))){
var inst_53035 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
if(cljs.core.truth_(inst_53035)){
var statearr_53206_53269 = state_53128__$1;
(statearr_53206_53269[(1)] = (19));

} else {
var statearr_53207_53270 = state_53128__$1;
(statearr_53207_53270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (42))){
var state_53128__$1 = state_53128;
var statearr_53208_53271 = state_53128__$1;
(statearr_53208_53271[(2)] = null);

(statearr_53208_53271[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (37))){
var inst_53094 = (state_53128[(2)]);
var state_53128__$1 = state_53128;
var statearr_53209_53272 = state_53128__$1;
(statearr_53209_53272[(2)] = inst_53094);

(statearr_53209_53272[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53129 === (8))){
var inst_52988 = (state_53128[(9)]);
var inst_53001 = (state_53128[(22)]);
var inst_53001__$1 = cljs.core.seq.call(null,inst_52988);
var state_53128__$1 = (function (){var statearr_53210 = state_53128;
(statearr_53210[(22)] = inst_53001__$1);

return statearr_53210;
})();
if(inst_53001__$1){
var statearr_53211_53273 = state_53128__$1;
(statearr_53211_53273[(1)] = (10));

} else {
var statearr_53212_53274 = state_53128__$1;
(statearr_53212_53274[(1)] = (11));

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
});})(c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50453__auto__,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto____0 = (function (){
var statearr_53213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53213[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto__);

(statearr_53213[(1)] = (1));

return statearr_53213;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto____1 = (function (state_53128){
while(true){
var ret_value__50455__auto__ = (function (){try{while(true){
var result__50456__auto__ = switch__50453__auto__.call(null,state_53128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50456__auto__;
}
break;
}
}catch (e53214){if((e53214 instanceof Object)){
var ex__50457__auto__ = e53214;
var statearr_53215_53275 = state_53128;
(statearr_53215_53275[(5)] = ex__50457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53276 = state_53128;
state_53128 = G__53276;
continue;
} else {
return ret_value__50455__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto__ = function(state_53128){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto____1.call(this,state_53128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50454__auto__;
})()
;})(switch__50453__auto__,c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__50543__auto__ = (function (){var statearr_53216 = f__50542__auto__.call(null);
(statearr_53216[(6)] = c__50541__auto__);

return statearr_53216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50543__auto__);
});})(c__50541__auto__,map__52973,map__52973__$1,opts,before_jsload,on_jsload,reload_dependents,map__52974,map__52974__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__50541__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53279,link){
var map__53280 = p__53279;
var map__53280__$1 = ((((!((map__53280 == null)))?((((map__53280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53280):map__53280);
var file = cljs.core.get.call(null,map__53280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__53280,map__53280__$1,file){
return (function (p1__53277_SHARP_,p2__53278_SHARP_){
if(cljs.core._EQ_.call(null,p1__53277_SHARP_,p2__53278_SHARP_)){
return p1__53277_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__53280,map__53280__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53283){
var map__53284 = p__53283;
var map__53284__$1 = ((((!((map__53284 == null)))?((((map__53284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53284):map__53284);
var match_length = cljs.core.get.call(null,map__53284__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53284__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53282_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53282_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53286_SHARP_,p2__53287_SHARP_){
return cljs.core.assoc.call(null,p1__53286_SHARP_,cljs.core.get.call(null,p2__53287_SHARP_,key),p2__53287_SHARP_);
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
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_53288 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53288);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53288);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53289,p__53290){
var map__53291 = p__53289;
var map__53291__$1 = ((((!((map__53291 == null)))?((((map__53291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53291):map__53291);
var on_cssload = cljs.core.get.call(null,map__53291__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53292 = p__53290;
var map__53292__$1 = ((((!((map__53292 == null)))?((((map__53292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53292):map__53292);
var files_msg = map__53292__$1;
var files = cljs.core.get.call(null,map__53292__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521587972666
