var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListBlackListedLoanCompanies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"JSON"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListBlackListedLoanCompanies"},arguments:[{kind:"Argument",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companies"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companySize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"industry"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"employerPensionCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"country"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bank"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"accountResolved"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"recipientCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bankAccountType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"companyAdmins"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countryCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationConfirmed"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"twoFactor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referralCode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"referredBy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"activeAccount"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1022}};c.loc.source={body:`query ListBlackListedLoanCompanies($sort: JSON) {
  ListBlackListedLoanCompanies(sort: $sort) {
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
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function m(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){m(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){m(a,n)}),e.definitions&&e.definitions.forEach(function(a){m(a,n)})}var l={};(function(){c.definitions.forEach(function(n){if(n.name){var i=new Set;m(n,i),l[n.name.value]=i}})})();function o(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function v(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=l[n]||new Set,s=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!s.has(t)){s.add(t);var r=l[t]||new Set;r.forEach(function(k){d.add(k)})}})}return s.forEach(function(t){var r=o(e,t);r&&i.definitions.push(r)}),i}const N=v(c,"ListBlackListedLoanCompanies");export{N as ListBlackListedLoanCompanies,c as default};
//# sourceMappingURL=ListBlackListedLoanCompanies-02b2aaaf.js.map
