var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListWalletTransactions"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ListWalletTransactionInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListWalletTransactions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transactionType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"balanceLeft"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"narration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:244}};o.loc.source={body:`query ListWalletTransactions($input: ListWalletTransactionInput) {
  ListWalletTransactions(input: $input) {
    _id
    accountNumber
    companyId
    transactionType
    amount
    balanceLeft
    narration
    createdAt
    updatedAt
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,n)}),e.definitions&&e.definitions.forEach(function(a){l(a,n)})}var c={};(function(){o.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),c[n.name.value]=i}})})();function u(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[u(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=c[n]||new Set,s=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var m=r;r=new Set,m.forEach(function(t){if(!s.has(t)){s.add(t);var d=c[t]||new Set;d.forEach(function(f){r.add(f)})}})}return s.forEach(function(t){var d=u(e,t);d&&i.definitions.push(d)}),i}const k=v(o,"ListWalletTransactions");export{k as ListWalletTransactions,o as default};
//# sourceMappingURL=ListWalletTransactions-435a8b59.js.map
