var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListAdminActivities"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListAdminActivities"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activities"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:104}};d.loc.source={body:`query ListAdminActivities {
  ListAdminActivities {
    data {
      count
      activities
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(i,e){if(i.kind==="FragmentSpread")e.add(i.name.value);else if(i.kind==="VariableDefinition"){var n=i.type;n.kind==="NamedType"&&e.add(n.name.value)}i.selectionSet&&i.selectionSet.selections.forEach(function(t){o(t,e)}),i.variableDefinitions&&i.variableDefinitions.forEach(function(t){o(t,e)}),i.definitions&&i.definitions.forEach(function(t){o(t,e)})}var f={};(function(){d.definitions.forEach(function(e){if(e.name){var n=new Set;o(e,n),f[e.name.value]=n}})})();function l(i,e){for(var n=0;n<i.definitions.length;n++){var t=i.definitions[n];if(t.name&&t.name.value==e)return t}}function m(i,e){var n={kind:i.kind,definitions:[l(i,e)]};i.hasOwnProperty("loc")&&(n.loc=i.loc);var t=f[e]||new Set,r=new Set,c=new Set;for(t.forEach(function(a){c.add(a)});c.size>0;){var u=c;c=new Set,u.forEach(function(a){if(!r.has(a)){r.add(a);var s=f[a]||new Set;s.forEach(function(v){c.add(v)})}})}return r.forEach(function(a){var s=l(i,a);s&&n.definitions.push(s)}),n}const k=m(d,"ListAdminActivities");export{k as ListAdminActivities,d as default};
//# sourceMappingURL=ListAdminActivities-f735a12a.js.map
