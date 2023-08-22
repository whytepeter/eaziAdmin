var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListCompanyExecs"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"companyId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"ListCompanyExecs"},arguments:[{kind:"Argument",name:{kind:"Name",value:"companyId"},value:{kind:"Variable",name:{kind:"Name",value:"companyId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"companyExecs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"_id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phoneNumber"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bvn"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"idUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"idType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pictureUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"execType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"role"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"signatureImage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"personalDocument"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"interntionlPassport"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videoVerification"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"votersCard"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"front"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"back"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"driversLicense"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"front"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"back"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"bvn"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:615}};c.loc.source={body:`query ListCompanyExecs($companyId: String!) {
  ListCompanyExecs(companyId: $companyId) {
    data {
      companyExecs {
        _id
        title
        fullName
        email
        phoneNumber
        address
        bvn
        idUrl
        idType
        pictureUrl
        execType
        role
        signatureImage
        personalDocument {
          interntionlPassport
          nin
          videoVerification
          votersCard {
            front
            back
          }
          driversLicense {
            front
            back
          }
          bvn
        }
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function s(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){s(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){s(a,n)}),e.definitions&&e.definitions.forEach(function(a){s(a,n)})}var m={};(function(){c.definitions.forEach(function(n){if(n.name){var i=new Set;s(n,i),m[n.name.value]=i}})})();function o(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}function k(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=m[n]||new Set,l=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var u=d;d=new Set,u.forEach(function(t){if(!l.has(t)){l.add(t);var r=m[t]||new Set;r.forEach(function(v){d.add(v)})}})}return l.forEach(function(t){var r=o(e,t);r&&i.definitions.push(r)}),i}const f=k(c,"ListCompanyExecs");export{f as ListCompanyExecs,c as default};
//# sourceMappingURL=ListCompanyExecs-c41dea3e.js.map
