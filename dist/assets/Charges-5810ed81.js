import{_ as q}from"./LineTab-79af4169.js";import{_ as F}from"./UploadReceipt-9feb109a.js";import{s as B,d as C,b as y,H as V,g as M,o as r,c as p,a as e,i as l,j as _,t as w,u as k,F as D,e as L,n as z,y as G,I as Y,m as T,G as H,x as j,f as K,k as J}from"./index-351c9552.js";const Q={class:"flex flex-col gap-4"},W={class:"flex items-center justify-between"},X=e("h2",{class:"text-xl"},"Charges Transaction List",-1),Z=["onClick"],ee={class:"applicant-avatar"},ae=["src"],te={key:1,class:"w-full h-full bg-primary flex items-center justify-center text-white font-medium;"},oe={class:"applicant-name"},se=e("div",null,"N/A",-1),le={class:"flex items-center gap-4"},ne=["onClick"],ie={__name:"ChargesTable",props:{user:String,searchText:{type:String,default:""},transactions:{type:Array,default:()=>[]}},setup(A){const f=A;B();const I=G(),{formatAmount:O,formatDate:S,initials:P}=Y,m=C(()=>f.searchText),o=C(()=>f.transactions),R=y(!1),v=y([]),h=y([]),d=y(0),g=y(10),n=a=>{d.value=a,s()},s=()=>{let a=f.transactions;v.value=a.slice(d.value*g.value,d.value*g.value+g.value),v.value.length==0&&d.value>0&&n(d.value-1)},u=C(()=>[{title:"View",icon:"pi pi-eye",action(a){console.log(a)}},{title:"Download",icon:"pi pi-download",action(a){console.log(a)}},{title:"Upload",icon:"pi pi-upload",action(a){R.value=!0}}]);V(m,()=>{m.value.trim()!==""?v.value=f.transactions.filter(a=>a.companyId.company.companyName.toLowerCase().includes(m.value.toLowerCase())):s()}),V(o,()=>{s()}),M(()=>{s()});const $=a=>{console.log(a);const i=a._id;I.push({name:"ViewReconciliation",params:{id:i}})},x=a=>{h.value.push(a.data)},c=a=>{h.value=h.value.filter(i=>i._id!==a.data._id)};return(a,i)=>{const U=T("easiPaginate"),b=T("Column"),E=T("DataTable");return r(),p(D,null,[e("div",Q,[e("div",W,[X,l(U,{data:A.transactions,"info-only":"","onPage:update":n,currentPage:d.value,pageSize:g.value,"onUpdate:pageSize":i[0]||(i[0]=t=>g.value=t),visibleData:v.value},null,8,["data","currentPage","pageSize","visibleData"])]),l(E,{selection:h.value,"onUpdate:selection":i[1]||(i[1]=t=>h.value=t),id:"table-style",scrollable:"",value:v.value,onRowSelect:x,onRowUnselect:c},{default:_(()=>[l(b,{selectionMode:"multiple",headerStyle:"width: 2rem"}),l(b,{style:{"white-space":"nowrap"},sortable:"",field:"companyName",header:"Company Name"},{body:_(t=>[e("div",{onClick:N=>$(t.data),class:"applicant"},[e("div",null,[e("div",ee,[t.data.companyId.company.logo?(r(),p("img",{key:0,src:t.data.companyId.company.logo,alt:"",class:"object-cover h-full w-full"},null,8,ae)):(r(),p("span",te,w(k(P)(t.data.companyId.company.companyName)),1))])]),e("div",oe,w(t.data.companyId.company.companyName),1)],8,Z)]),_:1}),l(b,{sortable:"",header:" SUBCRIPTION PLAN"},{body:_(t=>[se]),_:1}),l(b,{sortable:"",field:"paidEmployees",header:" No. Employees Paid"},{body:_(t=>[e("div",null,w(t.data.employees.length),1)]),_:1}),l(b,{sortable:"",field:"charge",header:"Amount Paid"},{body:_(t=>[e("div",null,w(k(O)(t.data.charge)),1)]),_:1}),l(b,{sortable:"",style:{"white-space":"nowrap"},field:"createdAt",header:"Date"},{body:_(t=>[e("div",null,w(k(S)(t.data.createdAt)),1)]),_:1}),l(b,{header:"Action"},{body:_(t=>[e("div",le,[(r(!0),p(D,null,L(k(u),N=>(r(),p("span",{onClick:fe=>N.action(t.data),key:N.title,class:"cursor-pointer hover:text-primary"},[e("i",{class:z([N.icon])},null,2)],8,ne))),128))])]),_:1})]),_:1},8,["selection","value"]),l(U,{data:A.transactions,"onPage:update":n,currentPage:d.value,pageSize:g.value,"onUpdate:pageSize":i[2]||(i[2]=t=>g.value=t),visibleData:v.value},null,8,["data","currentPage","pageSize","visibleData"])]),l(F,{isOpen:R.value,onClose:i[3]||(i[3]=t=>R.value=!1)},null,8,["isOpen"])],64)}}},ce={class:"flex flex-col gap-8"},re={class:"flex flex-col sm:flex-row sm:items-center justify-between gap-4"},ue=e("h2",{class:"text-2xl font-medium"},"Charges Receipt",-1),de={class:"flex items-center gap-4"},pe={class:"flex flex-col gap-3"},me={class:"flex flex-col sm:flex-row sm:items-center gap-4 justify-between"},ve={class:"flex items-center gap-4 gap-2 md:gap-4 flex-wrap"},ge=["onClick"],_e={class:"text-dark-500 text-xs"},ye={class:"flex items-center gap-2 w-full sm:w-6/12 md:w-5/12"},we={__name:"Charges",setup(A){const f=B(),{query:I,mutate:O}=f;H();const S=y(!1),P=y(""),m=y([]),o=C(()=>f.getChargeReceipt);console.log("chargeReceipt",o.value);const R=C(()=>{const n=o.value&&o.value.filter(u=>u.companyId.registrationType=="COMPANY"),s=o.value&&o.value.filter(u=>u.companyId.registrationType=="PERSONAL");return[{title:"All",value:o.value&&o.value.length},{title:"Company",value:n&&n.length},{title:"Personal",value:s&&s.length}]}),v=n=>{const s=o.value&&o.value.filter(x=>x.companyId.registrationType=="COMPANY"),u=o.value&&o.value.filter(x=>x.companyId.registrationType=="PERSONAL"),$={Company:s,Personal:u,All:o.value};m.value=$[n.title]},h=C(()=>[]),d=C(()=>[{title:"Download",icon:"pi pi-download",action(){console.log("Mark as True")}},{title:"Share",icon:"pi pi-share-alt",action(){console.log("Share")}},{title:"Print",icon:"pi pi-print",action(){console.log("Print")}}]);return V(o,()=>{m.value=o.value}),M(()=>{m.value=o.value}),(async n=>{try{S.value=!0;const u=await I({endpoint:"GetChargesReceipt",payload:{input:n||{pagination:{page:null,limit:1e3}}},storeKey:"chargeReceipt"});S.value=!1}catch(s){S.value=!1,console.log(s.message)}})(),(n,s)=>{const u=T("easiButton"),$=T("easiSearch"),x=T("easiLoader");return r(),p("main",ce,[e("div",re,[ue,e("div",de,[(r(!0),p(D,null,L(k(d),(c,a)=>(r(),j(u,{key:`button-${a}`,onClick:c.action,variant:"outlined",class:"flex items-center gap-2"},{default:_(()=>[e("i",{class:z([c.icon])},null,2),J(" "+w(c.title),1)]),_:2},1032,["onClick"]))),128))])]),e("div",pe,[l(q,{tabItems:k(R),onOnSetActive:v},null,8,["tabItems"]),e("div",me,[e("div",ve,[(r(!0),p(D,null,L(k(h),(c,a)=>(r(),p("button",{onClick:c.action,key:`btn-${a}`,class:"border border-dark-200 rounded-full px-2 py-[1.5px] hover:opacity-70"},[e("i",{class:z([c.icon,"text-xs text-dark-500 mr-1"])},null,2),e("span",_e,w(c.title),1)],8,ge))),128))]),e("div",ye,[l($,{modelValue:P.value,"onUpdate:modelValue":s[0]||(s[0]=c=>P.value=c),class:"grow"},null,8,["modelValue"])])])]),l(ie,{searchText:P.value,transactions:m.value},null,8,["searchText","transactions"]),S.value?(r(),j(x,{key:0})):K("",!0)])}}};export{we as default};
//# sourceMappingURL=Charges-5810ed81.js.map
