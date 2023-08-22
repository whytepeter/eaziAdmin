var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListCompanyAdmins"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"companyId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListCompanyAdmins"},arguments:[{kind:"Argument",name:{kind:"Name",value:"companyId"},value:{kind:"Variable",name:{kind:"Name",value:"companyId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"companyAdmins"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyAdmin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employeeAdmin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyId"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"employeesWithRoles"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roles"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyAdmin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employeeAdmin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyId"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:547}};c.loc.source={body:`query ListCompanyAdmins($companyId: String) {
  ListCompanyAdmins(companyId: $companyId) {
    data {
      companyAdmins {
        _id
        firstName
        lastName
        email
        pfp
        roles
        createdAt
        updatedAt
        companyAdmin
        employeeAdmin
        companyId
      }
      employeesWithRoles {
        _id
        firstName
        lastName
        email
        pfp
        roles
        createdAt
        updatedAt
        companyAdmin
        employeeAdmin
        companyId
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,n)}),e.definitions&&e.definitions.forEach(function(a){s(a,n)})}var r={};(function(){c.definitions.forEach(function(n){if(n.name){var i=new Set;s(n,i),r[n.name.value]=i}})})();function o(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=r[n]||new Set,l=new Set,t=new Set;for(a.forEach(function(d){t.add(d)});t.size>0;){var u=t;t=new Set,u.forEach(function(d){if(!l.has(d)){l.add(d);var m=r[d]||new Set;m.forEach(function(v){t.add(v)})}})}return l.forEach(function(d){var m=o(e,d);m&&i.definitions.push(m)}),i}const f=k(c,"ListCompanyAdmins");export{f as ListCompanyAdmins,c as default};
//# sourceMappingURL=ListCompanyAdmins-6f57f632.js.map
