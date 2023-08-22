var c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetPayrollReceipt"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NamedType",name:{kind:"Name",value:"GetPayrollReceiptInput"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"GetPayrollReceipt"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pagination"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalRecords"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pageTotal"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPrevPage"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"docs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"amountPaid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"emplyeesPaid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"registrationType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"pfp"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"companyName"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:383}};c.loc.source={body:`query GetPayrollReceipt($input: GetPayrollReceiptInput) {
  GetPayrollReceipt(input: $input) {
    data {
      pagination {
        totalRecords
        pageTotal
        hasNextPage
        hasPrevPage
      }
      docs {
        date
        status
        amountPaid
        emplyeesPaid
        registrationType
        pfp
        logo
        companyName
      }
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,i){if(e.kind==="FragmentSpread")i.add(e.name.value);else if(e.kind==="VariableDefinition"){var n=e.type;n.kind==="NamedType"&&i.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){r(a,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){r(a,i)}),e.definitions&&e.definitions.forEach(function(a){r(a,i)})}var o={};(function(){c.definitions.forEach(function(i){if(i.name){var n=new Set;r(i,n),o[i.name.value]=n}})})();function u(e,i){for(var n=0;n<e.definitions.length;n++){var a=e.definitions[n];if(a.name&&a.name.value==i)return a}}function k(e,i){var n={kind:e.kind,definitions:[u(e,i)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var a=o[i]||new Set,s=new Set,d=new Set;for(a.forEach(function(t){d.add(t)});d.size>0;){var m=d;d=new Set,m.forEach(function(t){if(!s.has(t)){s.add(t);var l=o[t]||new Set;l.forEach(function(v){d.add(v)})}})}return s.forEach(function(t){var l=u(e,t);l&&n.definitions.push(l)}),n}const f=k(c,"GetPayrollReceipt");export{f as GetPayrollReceipt,c as default};
//# sourceMappingURL=GetPayrollReceipt-1dab021c.js.map
