var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ViewWalletBalance"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ViewWalletBalanceInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ViewWalletBalance"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"balance"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:113}};u.loc.source={body:`query ViewWalletBalance($input: ViewWalletBalanceInput) {
  ViewWalletBalance(input: $input) {
    balance
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){o(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){o(a,n)}),e.definitions&&e.definitions.forEach(function(a){o(a,n)})}var f={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;o(n,i),f[n.name.value]=i}})})();function d(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function m(e,n){var i={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=f[n]||new Set,r=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var s=l;l=new Set,s.forEach(function(t){if(!r.has(t)){r.add(t);var c=f[t]||new Set;c.forEach(function(v){l.add(v)})}})}return r.forEach(function(t){var c=d(e,t);c&&i.definitions.push(c)}),i}const k=m(u,"ViewWalletBalance");export{k as ViewWalletBalance,u as default};
//# sourceMappingURL=ViewWalletBalance-f36d9fdd.js.map
