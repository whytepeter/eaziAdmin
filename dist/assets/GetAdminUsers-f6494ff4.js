var l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAdminUsers"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetAdminUsersInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetAdminUsers"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"admin"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:130}};l.loc.source={body:`query GetAdminUsers($input: GetAdminUsersInput) {
  GetAdminUsers(input: $input) {
    data {
      count
      admin
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function d(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){d(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){d(a,n)}),e.definitions&&e.definitions.forEach(function(a){d(a,n)})}var c={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;d(n,i),c[n.name.value]=i}})})();function u(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[u(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=c[n]||new Set,o=new Set,r=new Set;for(a.forEach(function(t){r.add(t)});r.size>0;){var f=r;r=new Set,f.forEach(function(t){if(!o.has(t)){o.add(t);var s=c[t]||new Set;s.forEach(function(m){r.add(m)})}})}return o.forEach(function(t){var s=u(e,t);s&&i.definitions.push(s)}),i}const k=v(l,"GetAdminUsers");export{k as GetAdminUsers,l as default};
//# sourceMappingURL=GetAdminUsers-f6494ff4.js.map
