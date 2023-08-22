var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ViewWalletReportSingle"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ViewWalletReportInputSingle"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ViewWalletReportSingle"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"transactions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transactionType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"transactionDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"walletBalance"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"openningBalance"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"closingBalance"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalInflow"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalOutflow"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:308}};s.loc.source={body:`query ViewWalletReportSingle($input: ViewWalletReportInputSingle) {
  ViewWalletReportSingle(input: $input) {
    transactions {
      amount
      transactionType
      transactionDate
      description
      walletBalance
    }
    openningBalance
    closingBalance
    totalInflow
    totalOutflow
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var c={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),c[n.name.value]=i}})})();function u(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[u(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=c[n]||new Set,d=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!d.has(t)){d.add(t);var o=c[t]||new Set;o.forEach(function(f){l.add(f)})}})}return d.forEach(function(t){var o=u(e,t);o&&i.definitions.push(o)}),i}const k=v(s,"ViewWalletReportSingle");export{k as ViewWalletReportSingle,s as default};
//# sourceMappingURL=ViewWalletReportSingle-e53d9b77.js.map
