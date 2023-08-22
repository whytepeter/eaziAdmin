import{_ as A,o as c,c as p,a as t,F as M,e as Z,t as _,u as e,K as L,M as tt,p as G,q as N,N as T,O as V,P as k,Q as I,R as Y,S as z,U as J,d as y,i as s,V as at,f,W as U,m as C,x as et,j as m,X as st,k as ot,Y as lt,Z as nt,D as rt,A as P,n as it,$ as O}from"./index-351c9552.js";import{_ as ct}from"./ReportHeader-887a12d4.js";import{_ as x,L as Q,h as D,E as dt,p as pt}from"./chartjs-plugin-datalabels.esm-5d41c6ea.js";import{T as ut}from"./TablePagination-dad6335d.js";import"./printer-32f9b510.js";import"./new-logo-green-213c5130.js";/* empty css                                                                        */const W=o=>(G("data-v-bdbf30e7"),o=o(),N(),o),_t={class:"table-scroller"},ht={class:"table-stripped"},gt=W(()=>t("thead",null,[t("tr",null,[t("th",null,"Business"),t("th",null,"Industry"),t("th",null,"Payroll Type"),t("th",null,"Total Payroll"),t("th",null,"Package"),t("th",null,"Payroll Date")])],-1)),mt={class:"flex items-center gap-2"},yt=W(()=>t("td",null,[t("span",{class:"package-starter"},"Stater")],-1)),ft={__name:"PayrollList",props:{data:{type:Array,default:()=>[]}},setup(o){return(n,i)=>(c(),p("div",_t,[t("table",ht,[gt,t("tbody",null,[(c(!0),p(M,null,Z(o.data,l=>(c(),p("tr",{key:l._id},[t("td",null,[t("div",mt,[t("div",null,_(l.company),1)])]),t("td",null,_(l.industry),1),t("td",null,_(l.payrollType),1),t("td",null,_(e(L)(l.totalPayroll)),1),yt,t("td",null,_(e(tt)(l.date,"MMMM DD, YYYY")),1)]))),128))])])]))}},q=A(ft,[["__scopeId","data-v-bdbf30e7"]]),bt={class:"card card-white"},vt={class:"flex items-center justify-between mb-4"},Pt=t("div",{class:"card-title"},"Total Payroll processed",-1),$t={key:0,class:"text-center font-bold text-xl mb-4"},wt={class:"mr-6"},xt={key:1,class:""},H={__name:"TotalPayrollProcessedChart",props:{data:Object,total:Object},setup(o){const n=o;T.register(V,k,I,Y,z,J);const i=y(()=>{if(n.data){let r=[],a=[];return n.data.forEach(({total:d,month:u})=>{r.push(u),a.push(d)}),{labels:r,datasets:[{data:a,backgroundColor:["#11453B"]}],borderColor:"green"}}return null}),l={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(r,a)=>(c(),p("div",bt,[t("div",vt,[Pt,t("div",null,[s(at)])]),o.total?(c(),p("div",$t,[t("span",wt,_(o.total[0].payrollProcessed),1),t("span",null,_(e(L)(o.total[0].totalSalary)),1)])):f("",!0),e(i)?(c(),p("div",xt,[s(e(U),{id:"my-chart-id",options:l,data:e(i)},null,8,["data"])])):f("",!0)]))}},Dt={class:"card card-white"},Ct={class:"flex items-center mb-4 justify-between"},Lt=t("div",{class:"card-title"},"Total compliance Processed",-1),Tt={key:0,class:"text-center font-bold text-xl mb-4"},kt={class:"mr-6"},It={key:1,class:"rounded-md"},K={__name:"TotalComplianceProcessedChart",props:{data:Object,total:Object},setup(o){const n=o;T.register(V,k,I,Y,z,J);const i=y(()=>{if(n.data){let r=[],a=[];return n.data.forEach(({total:d,month:u})=>{r.push(u),a.push(d)}),{labels:r,datasets:[{data:a,backgroundColor:["#11453B"]}],borderColor:"green"}}return null}),l={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}};return(r,a)=>{const d=C("DurationFilter");return c(),p("div",Dt,[t("div",Ct,[Lt,t("div",null,[s(d)])]),o.total?(c(),p("div",Tt,[t("span",kt,_(o.total[0].complianceProcessed),1),t("span",null,_(e(L)(o.total[0].totalCompliance)),1)])):f("",!0),e(i)?(c(),p("div",It,[s(e(U),{id:"my-chart-id",options:l,data:e(i)},null,8,["data"])])):f("",!0)])}}};const X=o=>(G("data-v-325c53f6"),o=o(),N(),o),Bt={class:"fixed opacity -z-2"},St={class:"grid gap-4 h-full"},Et=X(()=>t("h3",{class:"mb-3"},"Latest Transactions",-1)),jt=X(()=>t("h3",{class:"mb-3"},"Payroll List",-1)),Rt={__name:"Download",setup(o){const n=async()=>{const[i,{width:l,height:r}]=await D("#page1"),a=new dt({unit:"px",format:[l,r]});a.addImage(i,"JPEG",0,0,l,r),a.addPage();const[d]=await D("#page2");a.addImage(d,"JPEG",0,0,l,r),a.addPage();const[u]=await D("#page3");a.addImage(u,"JPEG",0,0,l,r),a.save("payroll-report.pdf")};return(i,l)=>{const r=C("DownloadIcon"),a=C("easiButton2");return c(),p(M,null,[(c(),et(st,{to:"body"},[t("div",Bt,[s(x,{id:"page1","report-title":"Payroll Report","page-no":"1","total-pages":"3"},{default:m(()=>[t("div",St,[s(H,{"chart-height":400}),s(K)])]),_:1}),s(x,{id:"page2","page-no":"2","total-pages":"3"},{default:m(()=>[t("div",null,[Et,s(Q)])]),_:1}),s(x,{id:"page3","page-no":"3","total-pages":"3"},{default:m(()=>[t("div",null,[jt,s(q)])]),_:1})])])),s(a,{outlined:"",onClick:n},{rightIcon:m(()=>[s(r)]),default:m(()=>[ot("Download ")]),_:1})],64)}}},Ft=A(Rt,[["__scopeId","data-v-325c53f6"]]),Ot={key:0},At={__name:"SubscriptionChart",props:{data:{type:Object}},setup(o){const n=o,i=[pt];T.register(lt,k,I);const l=y(()=>{let a=["#396F64","#B4A572","#8D8E8D","#BFA29E","#11453B"];const d=h=>(h>a.length-1&&(h=Math.floor(Math.random()*a.length)),a[h]);let u=[],$=[],g=[];return n.data?(n.data.breakdown.forEach(({percentage:h,subscription:b},v)=>{$.push(b),u.push(h),g.push(d(v))}),{labels:$,datasets:[{backgroundColor:g,data:u}]}):null}),r=y(()=>({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"right"},datalabels:{color:"white",font:{size:16},formatter(a){return`${a}%`}}}}));return(a,d)=>e(l)?(c(),p("div",Ot,[s(e(nt),{data:e(l),options:e(r),plugins:i},null,8,["data","options"])])):f("",!0)}},Mt={class:"grid grid-cols-2 gap-6 mb-16",id:"report"},Gt={class:"card card-white"},Nt=t("h3",{class:"font-normal mb-4"},"Payroll Subscriptions",-1),Vt=t("div",{class:"w-32 bg-blue-200 rounded-lg"},null,-1),Yt={class:"flex items-center justify-between mb-4"},zt=t("h3",{class:"font-normal"},"Latest Transactions",-1),Jt={class:"w-1/2"},Ut={class:"flex items-center justify-between mb-4"},Qt=t("h3",{class:"font-normal"},"Payroll List",-1),Wt={class:"max-w-md"},ea={__name:"index",setup(o){const n=rt({limit:10,page:1}),i=y(()=>({input:{pagination:{limit:n.limit,page:n.page}}})),{data:l,isLoading:r}=P("ListPayroll",i),{data:a}=P("ListTotalProcessed",{input:{}}),{data:d}=P("ListSubscriptionsReport",{input:{}}),{data:u}=P("ListRecentTransactions",{input:{}});return($,g)=>{var h,b,v,B,S,E,j,R,F;return c(),p("div",null,[s(ct,{title:"Payroll Report"},{download:m(()=>[s(Ft)]),_:1}),t("div",Mt,[s(H,{data:(h=e(a))==null?void 0:h.payrollGraphData,total:(b=e(a))==null?void 0:b.payrollFigures},null,8,["data","total"]),s(K,{data:(v=e(a))==null?void 0:v.complianceGraphData,total:(B=e(a))==null?void 0:B.complianceFigures},null,8,["data","total"]),t("div",Gt,[Nt,s(At,{data:e(d)},null,8,["data"]),Vt]),t("div",null,[t("div",Yt,[zt,t("div",Jt,[s(O,{"with-filter":""})])]),s(Q,{data:e(u)},null,8,["data"])])]),t("div",null,[t("div",Ut,[Qt,t("div",Wt,[s(O,{"with-filter":""})])]),t("div",{class:it({"opacity-50 pointer-events-none":e(r)})},[s(ut,{rowsPerPage:n.limit,"onUpdate:rowsPerPage":g[0]||(g[0]=w=>n.limit=w),page:n.page,"onUpdate:page":g[1]||(g[1]=w=>n.page=w),"total-pages":(E=(S=e(l))==null?void 0:S.pagination)==null?void 0:E.pageTotal,"total-records":(R=(j=e(l))==null?void 0:j.pagination)==null?void 0:R.totalRecords},null,8,["rowsPerPage","page","total-pages","total-records"]),s(q,{data:(F=e(l))==null?void 0:F.docs},null,8,["data"])],2)])])}}};export{ea as default};
//# sourceMappingURL=index-83560f0e.js.map