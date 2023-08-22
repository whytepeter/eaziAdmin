var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetReconciliationList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetReconciliationListInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetReconciliationList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"docs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalInflow"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalOutflow"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"walletBalance"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reconciliationValue"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalRecords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pageTotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPrevPage"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:426}};r.loc.source={body:`query GetReconciliationList($input: GetReconciliationListInput) {
  GetReconciliationList(input: $input) {
    data {
      docs {
        _id
        company
        logo
        registrationType
        pfp
        totalInflow
        totalOutflow
        walletBalance
        reconciliationValue
      }
      pagination {
        totalRecords
        pageTotal
        hasNextPage
        hasPrevPage
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){o(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){o(a,i)}),e.definitions&&e.definitions.forEach(function(a){o(a,i)})}var s={};(function(){r.definitions.forEach(function(i){if(i.name){var n=new Set;o(i,n),s[i.name.value]=n}})})();function u(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function k(e,i){var n={kind:e.kind,definitions:[u(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=s[i]||new Set,c=new Set,l=new Set;for(a.forEach(function(t){l.add(t)});l.size>0;){var m=l;l=new Set,m.forEach(function(t){if(!c.has(t)){c.add(t);var d=s[t]||new Set;d.forEach(function(v){l.add(v)})}})}return c.forEach(function(t){var d=u(e,t);d&&n.definitions.push(d)}),n}const f=k(r,"GetReconciliationList");export{f as GetReconciliationList,r as default};
//# sourceMappingURL=GetReconciliationList-5a36b3c7.js.map
