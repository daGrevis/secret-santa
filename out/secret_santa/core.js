// Compiled by ClojureScript 0.0-2371
goog.provide('secret_santa.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
secret_santa.core.in_QMARK_ = (function in_QMARK_(coll,x){return !((cljs.core.some.call(null,(function (p1__5387_SHARP_){return cljs.core._EQ_.call(null,x,p1__5387_SHARP_);
}),coll) == null));
});
secret_santa.core.get_pairs_BANG_ = (function get_pairs_BANG_(people,pairs_banned){while(true){
var pairs = cljs.core.zipmap.call(null,people,cljs.core.shuffle.call(null,people));if((cljs.core.some.call(null,((function (pairs){
return (function (p__5390){var vec__5391 = p__5390;var person_a = cljs.core.nth.call(null,vec__5391,(0),null);var person_b = cljs.core.nth.call(null,vec__5391,(1),null);return (cljs.core._EQ_.call(null,person_a,person_b)) || (secret_santa.core.in_QMARK_.call(null,pairs_banned,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_a,person_b], null))) || (secret_santa.core.in_QMARK_.call(null,pairs_banned,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_b,person_a], null)));
});})(pairs))
,pairs) == null))
{return pairs;
} else
{{
continue;
}
}
break;
}
});
secret_santa.core.people = reagent.core.atom.call(null,cljs.core.sorted_map.call(null,(1),"foo",(2),"bar",(3),"fizz",(4),"buzz"));
secret_santa.core.people_counter = reagent.core.atom.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,secret_santa.core.people)));
secret_santa.core.pairs_banned = reagent.core.atom.call(null,cljs.core.sorted_map.call(null,(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo","bar"], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fizz","buzz"], null)));
secret_santa.core.pairs_banned_counter = reagent.core.atom.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,secret_santa.core.pairs_banned)));
secret_santa.core.pairs = reagent.core.atom.call(null,null);
secret_santa.core.remove_person_component = (function remove_person_component(id){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.swap_BANG_.call(null,secret_santa.core.people,cljs.core.dissoc,id);
})], null),"[x]"], null);
});
secret_santa.core.people_list_component = (function people_list_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4379__auto__ = (function iter__5400(s__5401){return (new cljs.core.LazySeq(null,(function (){var s__5401__$1 = s__5401;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5401__$1);if(temp__4126__auto__)
{var s__5401__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5401__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5401__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5403 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5402 = (0);while(true){
if((i__5402 < size__4378__auto__))
{var vec__5406 = cljs.core._nth.call(null,c__4377__auto__,i__5402);var id = cljs.core.nth.call(null,vec__5406,(0),null);var person = cljs.core.nth.call(null,vec__5406,(1),null);cljs.core.chunk_append.call(null,b__5403,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),person,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.remove_person_component,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));
{
var G__5408 = (i__5402 + (1));
i__5402 = G__5408;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5403),iter__5400.call(null,cljs.core.chunk_rest.call(null,s__5401__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5403),null);
}
} else
{var vec__5407 = cljs.core.first.call(null,s__5401__$2);var id = cljs.core.nth.call(null,vec__5407,(0),null);var person = cljs.core.nth.call(null,vec__5407,(1),null);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),person,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.remove_person_component,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),iter__5400.call(null,cljs.core.rest.call(null,s__5401__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.deref.call(null,secret_santa.core.people));
})()], null);
});
secret_santa.core.people_form_component = (function people_form_component(){var person = reagent.core.atom.call(null,"");return ((function (person){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (person){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,person),""))
{cljs.core.swap_BANG_.call(null,secret_santa.core.people,cljs.core.assoc,cljs.core.swap_BANG_.call(null,secret_santa.core.people_counter,cljs.core.inc),cljs.core.deref.call(null,person));
return cljs.core.reset_BANG_.call(null,person,"");
} else
{return null;
}
});})(person))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,person),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (person){
return (function (p1__5409_SHARP_){return cljs.core.reset_BANG_.call(null,person,p1__5409_SHARP_.target.value);
});})(person))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Add person"], null)], null);
});
;})(person))
});
secret_santa.core.remove_banned_pair_component = (function remove_banned_pair_component(id){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.swap_BANG_.call(null,secret_santa.core.pairs_banned,cljs.core.dissoc,id);
})], null),"[x]"], null);
});
secret_santa.core.pairs_banned_list_component = (function pairs_banned_list_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4379__auto__ = (function iter__5422(s__5423){return (new cljs.core.LazySeq(null,(function (){var s__5423__$1 = s__5423;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5423__$1);if(temp__4126__auto__)
{var s__5423__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5423__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5423__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5425 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5424 = (0);while(true){
if((i__5424 < size__4378__auto__))
{var vec__5430 = cljs.core._nth.call(null,c__4377__auto__,i__5424);var id = cljs.core.nth.call(null,vec__5430,(0),null);var vec__5431 = cljs.core.nth.call(null,vec__5430,(1),null);var a = cljs.core.nth.call(null,vec__5431,(0),null);var b = cljs.core.nth.call(null,vec__5431,(1),null);cljs.core.chunk_append.call(null,b__5425,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),a," -> ",b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.remove_banned_pair_component,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));
{
var G__5434 = (i__5424 + (1));
i__5424 = G__5434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5425),iter__5422.call(null,cljs.core.chunk_rest.call(null,s__5423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5425),null);
}
} else
{var vec__5432 = cljs.core.first.call(null,s__5423__$2);var id = cljs.core.nth.call(null,vec__5432,(0),null);var vec__5433 = cljs.core.nth.call(null,vec__5432,(1),null);var a = cljs.core.nth.call(null,vec__5433,(0),null);var b = cljs.core.nth.call(null,vec__5433,(1),null);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),a," -> ",b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.remove_banned_pair_component,id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),iter__5422.call(null,cljs.core.rest.call(null,s__5423__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.deref.call(null,secret_santa.core.pairs_banned));
})()], null);
});
secret_santa.core.pairs_banned_form_component = (function pairs_banned_form_component(){var person_a = reagent.core.atom.call(null,"");var person_b = reagent.core.atom.call(null,"");return ((function (person_a,person_b){
return (function (){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (person_a,person_b){
return (function (e){e.preventDefault();
if((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,person_a),"")) && (cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,person_b),"")))
{cljs.core.swap_BANG_.call(null,secret_santa.core.pairs_banned,cljs.core.assoc,cljs.core.swap_BANG_.call(null,secret_santa.core.pairs_banned_counter,cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,person_a),cljs.core.deref.call(null,person_b)], null));
cljs.core.reset_BANG_.call(null,person_a,"");
return cljs.core.reset_BANG_.call(null,person_b,"");
} else
{return null;
}
});})(person_a,person_b))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,person_a),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (person_a,person_b){
return (function (p1__5435_SHARP_){return cljs.core.reset_BANG_.call(null,person_a,p1__5435_SHARP_.target.value);
});})(person_a,person_b))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,person_b),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (person_a,person_b){
return (function (p1__5436_SHARP_){return cljs.core.reset_BANG_.call(null,person_b,p1__5436_SHARP_.target.value);
});})(person_a,person_b))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Add banned pair"], null)], null);
});
;})(person_a,person_b))
});
secret_santa.core.pairs_component = (function pairs_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4379__auto__ = (function iter__5445(s__5446){return (new cljs.core.LazySeq(null,(function (){var s__5446__$1 = s__5446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5446__$1);if(temp__4126__auto__)
{var s__5446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5446__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5446__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5448 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5447 = (0);while(true){
if((i__5447 < size__4378__auto__))
{var vec__5451 = cljs.core._nth.call(null,c__4377__auto__,i__5447);var person_a = cljs.core.nth.call(null,vec__5451,(0),null);var person_b = cljs.core.nth.call(null,vec__5451,(1),null);cljs.core.chunk_append.call(null,b__5448,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),person_a," gives to ",person_b], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_a,person_b], null)], null)));
{
var G__5453 = (i__5447 + (1));
i__5447 = G__5453;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5448),iter__5445.call(null,cljs.core.chunk_rest.call(null,s__5446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5448),null);
}
} else
{var vec__5452 = cljs.core.first.call(null,s__5446__$2);var person_a = cljs.core.nth.call(null,vec__5452,(0),null);var person_b = cljs.core.nth.call(null,vec__5452,(1),null);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),person_a," gives to ",person_b], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_a,person_b], null)], null)),iter__5445.call(null,cljs.core.rest.call(null,s__5446__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.deref.call(null,secret_santa.core.pairs));
})()], null);
});
secret_santa.core.root_component = (function root_component(){return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Secret Santa"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.people_list_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.people_form_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"People: ",cljs.core.count.call(null,cljs.core.deref.call(null,secret_santa.core.people))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.pairs_banned_list_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.pairs_banned_form_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Pairs banned: ",cljs.core.count.call(null,cljs.core.deref.call(null,secret_santa.core.pairs_banned))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,secret_santa.core.pairs,secret_santa.core.get_pairs_BANG_.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,secret_santa.core.people)),cljs.core.vals.call(null,cljs.core.deref.call(null,secret_santa.core.pairs_banned))));
})], null),"Recalculate pairs"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.pairs_component], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [secret_santa.core.root_component], null),document.body);

//# sourceMappingURL=core.js.map