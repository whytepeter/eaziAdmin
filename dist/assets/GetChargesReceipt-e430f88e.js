var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetChargesReceipt"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetChargesReceiptInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetChargesReceipt"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:134}};d.loc.source={body:`query GetChargesReceipt($input: GetChargesReceiptInput) {
  GetChargesReceipt(input: $input) {
    success
    message
    data
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function c(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){c(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){c(a,i)}),e.definitions&&e.definitions.forEach(function(a){c(a,i)})}var u={};(function(){d.definitions.forEach(function(i){if(i.name){var n=new Set;c(i,n),u[i.name.value]=n}})})();function l(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function m(e,i){var n={kind:e.kind,definitions:[l(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=u[i]||new Set,o=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var f=r;r=new Set,f.forEach(function(t){if(!o.has(t)){o.add(t);var s=u[t]||new Set;s.forEach(function(v){r.add(v)})}})}return o.forEach(function(t){var s=l(e,t);s&&n.definitions.push(s)}),n}const p=m(d,"GetChargesReceipt");export{p as GetChargesReceipt,d as default};
//# sourceMappingURL=GetChargesReceipt-e430f88e.js.map
