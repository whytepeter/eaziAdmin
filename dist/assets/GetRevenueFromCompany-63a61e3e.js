var l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetRevenueFromCompany"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetRevenueFromCompanyInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetRevenueFromCompany"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"revenueData"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:201}};l.loc.source={body:`query GetRevenueFromCompany($input: GetRevenueFromCompanyInput) {
  GetRevenueFromCompany(input: $input) {
    success
    message
    returnStatus
    data {
      total
      revenueData
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function u(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){u(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){u(a,n)}),e.definitions&&e.definitions.forEach(function(a){u(a,n)})}var d={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;u(n,i),d[n.name.value]=i}})})();function m(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function f(e,n){var i={kind:e.kind,definitions:[m(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=d[n]||new Set,s=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var c=r;r=new Set,c.forEach(function(t){if(!s.has(t)){s.add(t);var o=d[t]||new Set;o.forEach(function(v){r.add(v)})}})}return s.forEach(function(t){var o=m(e,t);o&&i.definitions.push(o)}),i}const k=f(l,"GetRevenueFromCompany");export{k as GetRevenueFromCompany,l as default};
//# sourceMappingURL=GetRevenueFromCompany-63a61e3e.js.map
