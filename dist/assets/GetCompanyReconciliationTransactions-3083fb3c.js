var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetCompanyReconciliationTransactions"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetCompanyReconciliationTransactionsInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetCompanyReconciliationTransactions"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalRecords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pageTotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPrevPage"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"docs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transactionId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transactionType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"walletBalance"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:423}};r.loc.source={body:`query GetCompanyReconciliationTransactions($input: GetCompanyReconciliationTransactionsInput) {
  GetCompanyReconciliationTransactions(input: $input) {
    data {
      pagination {
        totalRecords
        pageTotal
        hasNextPage
        hasPrevPage
      }
      docs {
        transactionId
        amount
        transactionType
        createdAt
        description
        walletBalance
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){d(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){d(a,n)}),e.definitions&&e.definitions.forEach(function(a){d(a,n)})}var l={};(function(){r.definitions.forEach(function(n){if(n.name){var i=new Set;d(n,i),l[n.name.value]=i}})})();function u(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[u(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=l[n]||new Set,s=new Set,o=new Set;for(a.forEach(function(t){o.add(t)});o.size>0;){var m=o;o=new Set,m.forEach(function(t){if(!s.has(t)){s.add(t);var c=l[t]||new Set;c.forEach(function(v){o.add(v)})}})}return s.forEach(function(t){var c=u(e,t);c&&i.definitions.push(c)}),i}const f=k(r,"GetCompanyReconciliationTransactions");export{f as GetCompanyReconciliationTransactions,r as default};
//# sourceMappingURL=GetCompanyReconciliationTransactions-3083fb3c.js.map
