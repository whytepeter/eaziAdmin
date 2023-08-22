var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LoanContract"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"companyId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"creatorId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loanId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loanInput"}},type:{kind:"NamedType",name:{kind:"Name",value:"CreateLoanV3Input"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"LoanContract"},arguments:[{kind:"Argument",name:{kind:"Name",value:"companyId"},value:{kind:"Variable",name:{kind:"Name",value:"companyId"}}},{kind:"Argument",name:{kind:"Name",value:"creatorId"},value:{kind:"Variable",name:{kind:"Name",value:"creatorId"}}},{kind:"Argument",name:{kind:"Name",value:"loanId"},value:{kind:"Variable",name:{kind:"Name",value:"loanId"}}},{kind:"Argument",name:{kind:"Name",value:"loanInput"},value:{kind:"Variable",name:{kind:"Name",value:"loanInput"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:277}};u.loc.source={body:`query LoanContract(
  $companyId: String!
  $creatorId: String!
  $loanId: String
  $loanInput: CreateLoanV3Input
) {
  LoanContract(
    companyId: $companyId
    creatorId: $creatorId
    loanId: $loanId
    loanInput: $loanInput
  ) {
    success
    data
    message
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function o(n,e){if(n.kind==="FragmentSpread")e.add(n.name.value);else if(n.kind==="VariableDefinition"){var a=n.type;a.kind==="NamedType"&&e.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(i){o(i,e)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(i){o(i,e)}),n.definitions&&n.definitions.forEach(function(i){o(i,e)})}var c={};(function(){u.definitions.forEach(function(e){if(e.name){var a=new Set;o(e,a),c[e.name.value]=a}})})();function m(n,e){for(var a=0;a<n.definitions.length;a++){var i=n.definitions[a];if(i.name&&i.name.value==e)return i}}function s(n,e){var a={kind:n.kind,definitions:[m(n,e)]};n.hasOwnProperty("loc")&&(a.loc=n.loc);var i=c[e]||new Set,l=new Set,d=new Set;for(i.forEach(function(t){d.add(t)});d.size>0;){var v=d;d=new Set,v.forEach(function(t){if(!l.has(t)){l.add(t);var r=c[t]||new Set;r.forEach(function(k){d.add(k)})}})}return l.forEach(function(t){var r=m(n,t);r&&a.definitions.push(r)}),a}const f=s(u,"LoanContract");export{f as LoanContract,u as default};
//# sourceMappingURL=LoanContract-02c268cd.js.map
