var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PayrollDashboard"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"companyId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"PayrollDashboard"},arguments:[{kind:"Argument",name:{kind:"Name",value:"companyId"},value:{kind:"Variable",name:{kind:"Name",value:"companyId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"payrollRecords"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"employees"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"noOfemployees"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"account"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"payrollTotals"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:288}};c.loc.source={body:`query PayrollDashboard($companyId: String) {
  PayrollDashboard(companyId: $companyId) {
    success
    message
    data {
      payrollRecords {
        employees
        noOfemployees
        date
        amount
        account
      }
      payrollTotals
    }
    returnStatus
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var s={};(function(){c.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),s[n.name.value]=i}})})();function m(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function f(e,n){var i={kind:e.kind,definitions:[m(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=s[n]||new Set,o=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!o.has(t)){o.add(t);var l=s[t]||new Set;l.forEach(function(v){d.add(v)})}})}return o.forEach(function(t){var l=m(e,t);l&&i.definitions.push(l)}),i}const k=f(c,"PayrollDashboard");export{k as PayrollDashboard,c as default};
//# sourceMappingURL=PayrollDashboard-1607d0de.js.map
