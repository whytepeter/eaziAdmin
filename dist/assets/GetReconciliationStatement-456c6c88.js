var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetReconciliationStatement"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetReconciliationStatementInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetReconciliationStatement"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:161}};u.loc.source={body:`query GetReconciliationStatement($input: GetReconciliationStatementInput) {
  GetReconciliationStatement(input: $input) {
    success
    message
    data
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){l(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){l(t,n)}),e.definitions&&e.definitions.forEach(function(t){l(t,n)})}var s={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),s[n.name.value]=i}})})();function d(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function v(e,n){var i={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=s[n]||new Set,r=new Set,o=new Set;for(t.forEach(function(a){o.add(a)});o.size>0;){var f=o;o=new Set,f.forEach(function(a){if(!r.has(a)){r.add(a);var c=s[a]||new Set;c.forEach(function(m){o.add(m)})}})}return r.forEach(function(a){var c=d(e,a);c&&i.definitions.push(c)}),i}const k=v(u,"GetReconciliationStatement");export{k as GetReconciliationStatement,u as default};
//# sourceMappingURL=GetReconciliationStatement-456c6c88.js.map
