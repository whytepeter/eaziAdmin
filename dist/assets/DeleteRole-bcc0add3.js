var d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteRole"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"DeleteARoleInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"DeleteRole"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:136}};d.loc.source={body:`mutation DeleteRole($input: DeleteARoleInput) {
  DeleteRole(input: $input) {
    success
    message
    data {
      role
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var c={};(function(){d.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),c[n.name.value]=i}})})();function u(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function m(e,n){var i={kind:e.kind,definitions:[u(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=c[n]||new Set,s=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var f=l;l=new Set,f.forEach(function(t){if(!s.has(t)){s.add(t);var o=c[t]||new Set;o.forEach(function(v){l.add(v)})}})}return s.forEach(function(t){var o=u(e,t);o&&i.definitions.push(o)}),i}const k=m(d,"DeleteRole");export{k as DeleteRole,d as default};
//# sourceMappingURL=DeleteRole-bcc0add3.js.map
