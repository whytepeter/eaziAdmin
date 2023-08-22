var f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListByRegistrationTypes"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListByRegistrationTypes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"privileges"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:131}};f.loc.source={body:`query ListByRegistrationTypes {
  ListByRegistrationTypes {
    success
    message
    returnStatus
    data
    privileges
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){o(t,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){o(t,i)}),e.definitions&&e.definitions.forEach(function(t){o(t,i)})}var d={};(function(){f.definitions.forEach(function(i){if(i.name){var n=new Set;o(i,n),d[i.name.value]=n}})})();function l(e,i){for(var n=0;n<e.definitions.length;n++){var t=e.definitions[n];if(t.name&&t.name.value==i)return t}}function m(e,i){var n={kind:e.kind,definitions:[l(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var t=d[i]||new Set,c=new Set,s=new Set;for(t.forEach(function(a){s.add(a)});s.size>0;){var u=s;s=new Set,u.forEach(function(a){if(!c.has(a)){c.add(a);var r=d[a]||new Set;r.forEach(function(v){s.add(v)})}})}return c.forEach(function(a){var r=l(e,a);r&&n.definitions.push(r)}),n}const k=m(f,"ListByRegistrationTypes");export{k as ListByRegistrationTypes,f as default};
//# sourceMappingURL=ListByRegistrationTypes-7e343188.js.map
