var o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GroupReturningAndNew"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"ListNewAndReturningUsersInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GroupReturningAndNew"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"newUsers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returningUsers"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"newUsersLength"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returningUsersLength"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:256}};o.loc.source={body:`query GroupReturningAndNew($input: ListNewAndReturningUsersInput) {
  GroupReturningAndNew(input: $input) {
    success
    message
    data {
      newUsers
      returningUsers
      newUsersLength
      returningUsersLength
    }
    returnStatus
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function u(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){u(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){u(t,n)}),e.definitions&&e.definitions.forEach(function(t){u(t,n)})}var l={};(function(){o.definitions.forEach(function(n){if(n.name){var i=new Set;u(n,i),l[n.name.value]=i}})})();function c(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function v(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=l[n]||new Set,d=new Set,r=new Set;for(t.forEach(function(a){r.add(a)});r.size>0;){var f=r;r=new Set,f.forEach(function(a){if(!d.has(a)){d.add(a);var s=l[a]||new Set;s.forEach(function(m){r.add(m)})}})}return d.forEach(function(a){var s=c(e,a);s&&i.definitions.push(s)}),i}const k=v(o,"GroupReturningAndNew");export{k as GroupReturningAndNew,o as default};
//# sourceMappingURL=GroupReturningAndNew-65275e28.js.map
