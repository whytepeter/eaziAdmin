var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListTotalProcessed"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ListTotalProcessedInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListTotalProcessed"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"payrollGraphData"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"payrollFigures"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"complianceGraphData"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"complianceFigures"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:256}};c.loc.source={body:`query ListTotalProcessed($input: ListTotalProcessedInput) {
  ListTotalProcessed(input: $input) {
    success
    message
    data {
      payrollGraphData
      payrollFigures
      complianceGraphData
      complianceFigures
    }
    returnStatus
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,i)}),e.definitions&&e.definitions.forEach(function(a){l(a,i)})}var d={};(function(){c.definitions.forEach(function(i){if(i.name){var n=new Set;l(i,n),d[i.name.value]=n}})})();function u(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function v(e,i){var n={kind:e.kind,definitions:[u(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=d[i]||new Set,o=new Set,s=new Set;for(a.forEach(function(t){s.add(t)});s.size>0;){var m=s;s=new Set,m.forEach(function(t){if(!o.has(t)){o.add(t);var r=d[t]||new Set;r.forEach(function(f){s.add(f)})}})}return o.forEach(function(t){var r=u(e,t);r&&n.definitions.push(r)}),n}const k=v(c,"ListTotalProcessed");export{k as ListTotalProcessed,c as default};
//# sourceMappingURL=ListTotalProcessed-cc508d5e.js.map
