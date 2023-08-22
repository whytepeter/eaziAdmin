var l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RecentTransactions"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"RecentTransactions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyLogo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"noOfStaff"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subscription"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:188}};l.loc.source={body:`query RecentTransactions {
  RecentTransactions {
    data {
      company
      companyLogo
      noOfStaff
      subscription
      type
      amount
      date
      status
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function c(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,n)}),e.definitions&&e.definitions.forEach(function(a){c(a,n)})}var d={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;c(n,i),d[n.name.value]=i}})})();function u(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[u(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=d[n]||new Set,r=new Set,s=new Set;for(a.forEach(function(t){s.add(t)});s.size>0;){var f=s;s=new Set,f.forEach(function(t){if(!r.has(t)){r.add(t);var o=d[t]||new Set;o.forEach(function(m){s.add(m)})}})}return r.forEach(function(t){var o=u(e,t);o&&i.definitions.push(o)}),i}const k=v(l,"RecentTransactions");export{k as RecentTransactions,l as default};
//# sourceMappingURL=RecentTransactions-bf17ac80.js.map
