import{G as P,s as T,b as c,d as B,H as C,g as R,c as S,a as n,i as s,u as m,j as _,x as $,f as q,m as p,o as y,t as w,I}from"./index-351c9552.js";const K={class:"flex flex-col gap-4"},M={class:"flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6"},E={class:"my-6 w-full md:w-6/12 flex flex-wrap gap-4 items-center justify-around"},F={class:"applicant"},G={class:"applicant-avatar"},H=["src"],J={key:1,class:"w-full h-full bg-primary flex items-center justify-center text-white font-medium;"},O={class:"applicant-name"},Z={__name:"Index",setup(Q){const{formatAmount:W,formatDate:x,initials:N}=I;P();const A=T(),{query:z}=A,v=c(""),r=c([]),f=c(!1),i=c([]),d=B(()=>A.getAdminLogs),l=c(0),o=c(10),h=e=>{l.value=e,g()},g=()=>{let e=d.value;i.value=e.slice(l.value*o.value,l.value*o.value+o.value),i.value.length==0&&l.value>0&&h(l.value-1)},V=e=>{r.value.push(e.data)},k=e=>{r.value=r.value.filter(a=>a._id!==e.data._id)},b=()=>{const e=v.value.toLowerCase();console.log(e),e.trim()!==""?i.value=d.value.filter(a=>a.user.firstName.toLowerCase().includes(e)||a.user.lastName.toLowerCase().includes(e)||a.activity.toLowerCase().includes(e)):g()};return C(v,()=>{b()}),C(d,()=>{g()}),R(()=>{g()}),(async e=>{try{f.value=!0;const a={pagination:{page:9,limit:null},filter:{company:"ASC",amount:null}};console.log(e);const L=await z({endpoint:"ListAdminActivities",payload:{input:e||a},storeKey:"adminLogs"});f.value=!1}catch(a){f.value=!1,console.log(a.message)}})(),(e,a)=>{const L=p("easiSearch"),D=p("easiPaginate"),u=p("Column"),U=p("DataTable"),j=p("easiLoader");return y(),S("main",K,[n("div",M,[n("div",E,[s(L,{class:"grow",modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=t=>v.value=t),onKeyup:b,onSearch:b},null,8,["modelValue"])]),s(D,{data:m(d),"info-only":"","onPage:update":h,currentPage:l.value,pageSize:o.value,"onUpdate:pageSize":a[1]||(a[1]=t=>o.value=t),visibleData:i.value},null,8,["data","currentPage","pageSize","visibleData"])]),s(U,{selection:r.value,"onUpdate:selection":a[2]||(a[2]=t=>r.value=t),id:"table-style",scrollable:"",removableSort:"",value:i.value,onRowSelect:V,onRowUnselect:k},{default:_(()=>[s(u,{selectionMode:"multiple",headerStyle:"width: 2rem"}),s(u,{style:{"white-space":"nowrap"},sortable:"",field:"admin",header:"Admin"},{body:_(t=>[n("div",F,[n("div",G,[t.data.user.pfp?(y(),S("img",{key:0,src:t.data.user.pfp,alt:"",class:"object-cover h-full w-full"},null,8,H)):(y(),S("span",J,w(m(N)(`${t.data.user.firstName} ${t.data.user.lastName}`)),1))]),n("div",O,w(`${t.data.user.firstName} ${t.data.user.lastName}`),1)])]),_:1}),s(u,{sortable:"",field:"activity",header:"Activity"}),s(u,{field:"groupName",header:"Section"}),s(u,{sortable:"",style:{"white-space":"nowrap"},field:"createdAt",header:"Time"},{body:_(t=>[n("div",null,w(m(x)(t.data.createdAt,"time")),1)]),_:1}),s(u,{sortable:"",style:{"white-space":"nowrap"},field:"createdAt",header:"Date"},{body:_(t=>[n("div",null,w(m(x)(t.data.createdAt)),1)]),_:1})]),_:1},8,["selection","value"]),s(D,{data:m(d),"onPage:update":h,currentPage:l.value,pageSize:o.value,"onUpdate:pageSize":a[3]||(a[3]=t=>o.value=t),visibleData:i.value},null,8,["data","currentPage","pageSize","visibleData"]),f.value?(y(),$(j,{key:0})):q("",!0)])}}};export{Z as default};
//# sourceMappingURL=Index-c0795f32.js.map