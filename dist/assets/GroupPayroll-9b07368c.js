var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GroupPayroll"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GroupPayrollInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GroupPayroll"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"paymentRecords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:177}};d.loc.source={body:`query GroupPayroll($input: GroupPayrollInput) {
  GroupPayroll(input: $input) {
    success
    message
    data {
      paymentRecords
      total
    }
    returnStatus
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){o(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){o(a,n)}),e.definitions&&e.definitions.forEach(function(a){o(a,n)})}var s={};(function(){d.definitions.forEach(function(n){if(n.name){var i=new Set;o(n,i),s[n.name.value]=i}})})();function c(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=s[n]||new Set,u=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var f=r;r=new Set,f.forEach(function(t){if(!u.has(t)){u.add(t);var l=s[t]||new Set;l.forEach(function(m){r.add(m)})}})}return u.forEach(function(t){var l=c(e,t);l&&i.definitions.push(l)}),i}const k=v(d,"GroupPayroll");export{k as GroupPayroll,d as default};
//# sourceMappingURL=GroupPayroll-9b07368c.js.map
