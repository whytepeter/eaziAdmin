var u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListCompanies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ListCompaniesPagingInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListCompanies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"returnStatus"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companies"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companySize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"industry"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employerPensionCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bank"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountResolved"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recipientCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankAccountType"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"employeesCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAtFormatted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyAdmins"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationConfirmed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twoFactor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referralCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referredBy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activeAccount"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalRecords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pageTotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPrevPage"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1213}};u.loc.source={body:`query ListCompanies($input: ListCompaniesPagingInput!) {
  ListCompanies(input: $input) {
    success
    message
    returnStatus
    data {
      count
      companies {
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
          logo
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
        }
        employeesCount
        createdAtFormatted
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
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,n)}),e.definitions&&e.definitions.forEach(function(a){s(a,n)})}var l={};(function(){u.definitions.forEach(function(n){if(n.name){var i=new Set;s(n,i),l[n.name.value]=i}})})();function c(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[c(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=l[n]||new Set,r=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var o=d;d=new Set,o.forEach(function(t){if(!r.has(t)){r.add(t);var m=l[t]||new Set;m.forEach(function(v){d.add(v)})}})}return r.forEach(function(t){var m=c(e,t);m&&i.definitions.push(m)}),i}const g=k(u,"ListCompanies");export{g as ListCompanies,u as default};
//# sourceMappingURL=ListCompanies-ebbb4890.js.map
