var l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetCompanySummary"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"companyId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetCompanySummary"},arguments:[{kind:"Argument",name:{kind:"Name",value:"companyId"},value:{kind:"Variable",name:{kind:"Name",value:"companyId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"branchesCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employeesCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyAdmins"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationConfirmed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twoFactor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referralCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referredBy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activeAccount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companySize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"industry"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employerPensionCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bank"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountResolved"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recipientCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankAccountType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:1086}};l.loc.source={body:`query GetCompanySummary($companyId: String!) {
  GetCompanySummary(companyId: $companyId) {
    success
    message
    returnStatus
    data {
      branchesCount
      employeesCount
      company {
        _id
        companyAdmins {
          _id
          firstName
          lastName
          email
          pfp
          phoneNumber
          countryCode
          registrationConfirmed
          twoFactor
          referralCode
          referredBy
          registrationType
          createdAt
          updatedAt
        }
        registrationType
        activeAccount
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
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,n)}),e.definitions&&e.definitions.forEach(function(a){r(a,n)})}var u={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;r(n,i),u[n.name.value]=i}})})();function c(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=u[n]||new Set,s=new Set,t=new Set;for(a.forEach(function(d){t.add(d)});t.size>0;){var o=t;t=new Set,o.forEach(function(d){if(!s.has(d)){s.add(d);var m=u[d]||new Set;m.forEach(function(k){t.add(k)})}})}return s.forEach(function(d){var m=c(e,d);m&&i.definitions.push(m)}),i}const N=v(l,"GetCompanySummary");export{N as GetCompanySummary,l as default};
//# sourceMappingURL=GetCompanySummary-44101b31.js.map
