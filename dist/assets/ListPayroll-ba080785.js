var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListPayroll"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ListPayrollInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListPayroll"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalRecords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pageTotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPrevPage"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"docs"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:258}};u.loc.source={body:`query ListPayroll($input: ListPayrollInput) {
  ListPayroll(input: $input) {
    success
    message
    data {
      pagination {
        totalRecords
        pageTotal
        hasNextPage
        hasPrevPage
      }
      docs
    }
    returnStatus
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,i)}),e.definitions&&e.definitions.forEach(function(a){r(a,i)})}var o={};(function(){u.definitions.forEach(function(i){if(i.name){var n=new Set;r(i,n),o[i.name.value]=n}})})();function c(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function f(e,i){var n={kind:e.kind,definitions:[c(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=o[i]||new Set,d=new Set,s=new Set;for(a.forEach(function(t){s.add(t)});s.size>0;){var m=s;s=new Set,m.forEach(function(t){if(!d.has(t)){d.add(t);var l=o[t]||new Set;l.forEach(function(v){s.add(v)})}})}return d.forEach(function(t){var l=c(e,t);l&&n.definitions.push(l)}),n}const k=f(u,"ListPayroll");export{k as ListPayroll,u as default};
//# sourceMappingURL=ListPayroll-ba080785.js.map
