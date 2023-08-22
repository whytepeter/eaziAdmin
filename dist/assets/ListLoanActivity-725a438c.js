var s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListLoanActivity"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loanId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListLoanActivity"},arguments:[{kind:"Argument",name:{kind:"Name",value:"loanId"},value:{kind:"Variable",name:{kind:"Name",value:"loanId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"loanId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companySize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"industry"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employerPensionCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bank"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountResolved"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recipientCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankAccountType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"creatorId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:703}};s.loc.source={body:`query ListLoanActivity($loanId: String!) {
  ListLoanActivity(loanId: $loanId) {
    data {
      loanId
      amount
      type
      companyId {
        company {
          countryCode
          companySize
          companyName
          website
          industry
          employerPensionCode
          tin
          address
          country
          state
          email
          bank {
            currency
            bankName
            accountName
            accountNumber
            accountResolved
            bankCode
            recipientCode
            bankAccountType
          }
          logo
        }
        _id
      }
      creatorId
      createdAt
    }
    count
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function m(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,n)}),e.definitions&&e.definitions.forEach(function(a){m(a,n)})}var c={};(function(){s.definitions.forEach(function(n){if(n.name){var i=new Set;m(n,i),c[n.name.value]=i}})})();function o(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=c[n]||new Set,l=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!l.has(t)){l.add(t);var r=c[t]||new Set;r.forEach(function(v){d.add(v)})}})}return l.forEach(function(t){var r=o(e,t);r&&i.definitions.push(r)}),i}const f=k(s,"ListLoanActivity");export{f as ListLoanActivity,s as default};
//# sourceMappingURL=ListLoanActivity-725a438c.js.map
