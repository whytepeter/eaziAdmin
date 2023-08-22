import{E as x,_ as n}from"./EmployeeList-f535c26a.js";import{A as w,b as I,av as k,c,i as s,j as t,u as o,L as C,a as e,C as N,o as d,k as f,t as u,at as A,f as P,m as _}from"./index-351c9552.js";import{M as B,L as E,C as L}from"./location-ccb2798c.js";import"./CopyIcon-0dbe4dba.js";const U=e("h3",{class:"mb-6 font-normal"},"Admin(s)",-1),V={class:"flex items-start gap-8 admin-list-layout"},j={class:"w-3/12 h-full flex flex-col overflow-hidden"},F={class:"w-9/12 h-full"},D={key:0,class:"card card-white h-full"},M={class:"flex gap-8"},K={class:"flex-shrink-0 h-98 w-72 rounded-lg overflow-hidden"},Q=["src"],R={key:1,class:"bg-gray-300 h-full"},S={class:"flex-1"},T={class:"flex items-center justify-between mb-10"},$={class:"grid grid-cols-2 gap-8 gap-y-10"},q={href:"#"},z=e("div",{class:"mb-2"},"Identification",-1),G={class:"flex gap-3"},H=e("div",{class:"flex-1"},[e("div",{class:"text-[#515251] mb-2"},"international passport"),e("div",{class:"flex items-center justify-between"},[e("span",null,"257KB"),e("span",null,"Preview")])],-1),ee={__name:"Admins",setup(J){const h=N().params.slug,{data:i,error:p}=w("ListCompanyAdmins",{companyId:h}),m=l=>l.firstName+" "+l.lastName,a=I(null);return k(()=>{if(i.value&&!a.value){const{companyAdmins:l}=i.value;l&&l.length>0&&(a.value=l[0])}}),(l,v)=>{const g=_("easi-button"),b=_("BankIcon"),y=_("ImageFileIcon");return d(),c("div",null,[U,s(C,{data:o(i),error:o(p)},{default:t(()=>[e("div",null,[e("div",V,[e("div",j,[s(x,{selected:a.value,"onUpdate:selected":v[0]||(v[0]=r=>a.value=r),class:"bg-white rounded-md p-3",data:o(i).companyAdmins},{name:t(r=>[f(u(m(r.data)),1)]),_:1},8,["selected","data"])]),e("div",F,[a.value?(d(),c("div",D,[e("div",M,[e("picture",K,[a.value.pictureUrl?(d(),c("img",{key:0,src:a.value.pictureUrl,class:"h-full w-full object-cover"},null,8,Q)):(d(),c("div",R))]),e("div",S,[e("div",null,[e("div",T,[e("h3",null,u(m(a.value)),1),e("div",null,[s(g,null,{default:t(()=>[f("Edit Director")]),_:1})])]),e("div",$,[s(n,{noPadding:"",label:"Position",value:"Chief Accountant"},{icon:t(()=>[s(o(A))]),_:1}),s(n,{noPadding:"",label:"Email"},{value:t(()=>[e("a",q,u(a.value.email),1)]),icon:t(()=>[s(o(B))]),_:1}),s(n,{noPadding:"",label:"Address",value:a.value.address},{icon:t(()=>[s(o(E))]),_:1},8,["value"]),s(n,{noPadding:"",label:"BVN",value:a.value.bvn},{icon:t(()=>[s(b)]),_:1},8,["value"]),s(n,{noPadding:"",label:"Phone Number",value:a.value.phoneNumber},{icon:t(()=>[s(o(L))]),_:1},8,["value"]),e("div",null,[z,e("div",G,[e("div",null,[s(y)]),H])])])])])])])):P("",!0)])])])]),_:1},8,["data","error"])])}}};export{ee as default};
//# sourceMappingURL=Admins-91420d93.js.map
