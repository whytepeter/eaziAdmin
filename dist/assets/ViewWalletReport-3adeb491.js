var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ViewWalletReport"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ViewWalletReportInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ViewWalletReport"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107}};c.loc.source={body:`query ViewWalletReport($input: ViewWalletReportInput) {
  ViewWalletReport(input: $input) {
    data
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,i)}),e.definitions&&e.definitions.forEach(function(a){r(a,i)})}var u={};(function(){c.definitions.forEach(function(i){if(i.name){var n=new Set;r(i,n),u[i.name.value]=n}})})();function d(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function p(e,i){var n={kind:e.kind,definitions:[d(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=u[i]||new Set,f=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var s=l;l=new Set,s.forEach(function(t){if(!f.has(t)){f.add(t);var o=u[t]||new Set;o.forEach(function(v){l.add(v)})}})}return f.forEach(function(t){var o=d(e,t);o&&n.definitions.push(o)}),n}const m=p(c,"ViewWalletReport");export{m as ViewWalletReport,c as default};
//# sourceMappingURL=ViewWalletReport-3adeb491.js.map
