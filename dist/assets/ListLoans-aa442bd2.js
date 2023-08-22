var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListLoans"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"paging"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Paging"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"FetchLoanFilter"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListLoans"},arguments:[{kind:"Argument",name:{kind:"Name",value:"paging"},value:{kind:"Variable",name:{kind:"Name",value:"paging"}}},{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyId"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companySize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"industry"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employerPensionCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bank"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountResolved"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recipientCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankAccountType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"creatorId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"purpose"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"termsAndConditions"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"termsAndConditionsAccepted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"reasons"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"loanAmountApplied"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"loanAmountPaid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalRepaymentAmount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalIntrest"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalRepaymentPaid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"durationInDays"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"durationEndedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"durationPeriod"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employeesDetails"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"repaymentBreakDown"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"creditReport"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1120}};u.loc.source={body:`query ListLoans($paging: Paging!, $filter: FetchLoanFilter!, $sort: JSON) {
  ListLoans(paging: $paging, filter: $filter, sort: $sort) {
    count
    data {
      _id
      companyId {
        _id
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
      }
      creatorId
      type
      purpose
      status
      termsAndConditions
      termsAndConditionsAccepted
      reasons
      loanAmountApplied
      loanAmountPaid
      totalRepaymentAmount
      totalIntrest
      totalRepaymentPaid
      duration
      durationInDays
      durationEndedAt
      createdAt
      updatedAt
      durationPeriod
      employeesDetails
      repaymentBreakDown
      creditReport
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var s={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),s[n.name.value]=i}})})();function o(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=s[n]||new Set,l=new Set,t=new Set;for(a.forEach(function(d){t.add(d)});t.size>0;){var c=t;t=new Set,c.forEach(function(d){if(!l.has(d)){l.add(d);var m=s[d]||new Set;m.forEach(function(k){t.add(k)})}})}return l.forEach(function(d){var m=o(e,d);m&&i.definitions.push(m)}),i}const N=v(u,"ListLoans");export{N as ListLoans,u as default};
//# sourceMappingURL=ListLoans-aa442bd2.js.map
