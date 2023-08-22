var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateRole"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"CreateRoleInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"CreateRole"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:152}};d.loc.source={body:`mutation CreateRole($input: CreateRoleInput) {
  CreateRole(input: $input) {
    success
    message
    returnStatus
    data {
      role
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function l(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){l(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){l(a,n)}),e.definitions&&e.definitions.forEach(function(a){l(a,n)})}var u={};(function(){d.definitions.forEach(function(n){if(n.name){var i=new Set;l(n,i),u[n.name.value]=i}})})();function c(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=u[n]||new Set,s=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var f=r;r=new Set,f.forEach(function(t){if(!s.has(t)){s.add(t);var o=u[t]||new Set;o.forEach(function(m){r.add(m)})}})}return s.forEach(function(t){var o=c(e,t);o&&i.definitions.push(o)}),i}const k=v(d,"CreateRole");export{k as CreateRole,d as default};
//# sourceMappingURL=CreateRole-4651ce81.js.map
