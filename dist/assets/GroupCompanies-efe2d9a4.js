var l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"groupCompanies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"GroupCompanyInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"groupCompanies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companiesByMonth"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employeeTotal"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:204}};l.loc.source={body:`query groupCompanies($input: GroupCompanyInput!) {
  groupCompanies(input: $input) {
    success
    message
    returnStatus
    data {
      total
      companiesByMonth
      employeeTotal
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,n)}),e.definitions&&e.definitions.forEach(function(a){s(a,n)})}var d={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;s(n,i),d[n.name.value]=i}})})();function c(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=d[n]||new Set,u=new Set,o=new Set;for(a.forEach(function(t){o.add(t)});o.size>0;){var m=o;o=new Set,m.forEach(function(t){if(!u.has(t)){u.add(t);var r=d[t]||new Set;r.forEach(function(f){o.add(f)})}})}return u.forEach(function(t){var r=c(e,t);r&&i.definitions.push(r)}),i}const p=v(l,"groupCompanies");export{l as default,p as groupCompanies};
//# sourceMappingURL=GroupCompanies-efe2d9a4.js.map
