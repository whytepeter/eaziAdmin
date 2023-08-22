var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetMyProfile"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetMyProfile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"admin"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:73}};s.loc.source={body:`query GetMyProfile {
  GetMyProfile {
    data {
      admin
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function f(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){f(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){f(t,i)}),e.definitions&&e.definitions.forEach(function(t){f(t,i)})}var l={};(function(){s.definitions.forEach(function(i){if(i.name){var n=new Set;f(i,n),l[i.name.value]=n}})})();function d(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function m(e,i){var n={kind:e.kind,definitions:[d(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=l[i]||new Set,c=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var u=o;o=new Set,u.forEach(function(a){if(!c.has(a)){c.add(a);var r=l[a]||new Set;r.forEach(function(v){o.add(v)})}})}return c.forEach(function(a){var r=d(e,a);r&&n.definitions.push(r)}),n}const S=m(s,"GetMyProfile");export{S as GetMyProfile,s as default};
//# sourceMappingURL=GetMyProfile-7707edb4.js.map
