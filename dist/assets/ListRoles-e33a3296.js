var f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListRoles"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListRoles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roles"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:79}};f.loc.source={body:`query ListRoles {
  ListRoles {
    data {
      count
      roles
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){r(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){r(t,i)}),e.definitions&&e.definitions.forEach(function(t){r(t,i)})}var l={};(function(){f.definitions.forEach(function(i){if(i.name){var n=new Set;r(i,n),l[i.name.value]=n}})})();function d(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function m(e,i){var n={kind:e.kind,definitions:[d(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=l[i]||new Set,c=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var u=o;o=new Set,u.forEach(function(a){if(!c.has(a)){c.add(a);var s=l[a]||new Set;s.forEach(function(v){o.add(v)})}})}return c.forEach(function(a){var s=d(e,a);s&&n.definitions.push(s)}),n}const k=m(f,"ListRoles");export{k as ListRoles,f as default};
//# sourceMappingURL=ListRoles-e33a3296.js.map
