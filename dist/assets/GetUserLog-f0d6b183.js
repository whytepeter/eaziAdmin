var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetUserLog"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetUserLog"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:90}};u.loc.source={body:`query GetUserLog {
  GetUserLog {
    success
    message
    data
    returnStatus
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){o(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){o(t,n)}),e.definitions&&e.definitions.forEach(function(t){o(t,n)})}var f={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;o(n,i),f[n.name.value]=i}})})();function d(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function m(e,n){var i={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=f[n]||new Set,c=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var l=r;r=new Set,l.forEach(function(a){if(!c.has(a)){c.add(a);var s=f[a]||new Set;s.forEach(function(v){r.add(v)})}})}return c.forEach(function(a){var s=d(e,a);s&&i.definitions.push(s)}),i}const k=m(u,"GetUserLog");export{k as GetUserLog,u as default};
//# sourceMappingURL=GetUserLog-f0d6b183.js.map
