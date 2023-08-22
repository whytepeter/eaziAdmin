import{d as f,o as r,c as v,a as e,n as D,u as t,t as l,J as Z,s as U,G as ee,b as h,D as te,x as $,j as u,k as p,f as w,i as d,F as Y,I as q,m as I,C as se,y as oe}from"./index-351c9552.js";import{_ as ae}from"./LoanRepaymentBreakDown-febd19b3.js";import{C as M}from"./confirm-cfbddac4.js";import{_ as ne}from"./LoanActivities-2c0d1c2b.js";const le=e("div",{class:"text-center text-lg font-bold"},"Credit Report",-1),ce={class:"font-bold text-dark-800"},ie={class:"text-xs -mt-1 capitalize"},re=e("i",{class:"fas fa-circle"},null,-1),de={class:"font-bold"},G={__name:"LoanCreditScore",props:{type:{type:String,default:"default"},score:Number},setup(s){const n=s,C=f(()=>{if(n.score>=70)return"excellent";if(n.score>=50)return"good";if(n.score<=49)return"poor"}),_=f(()=>({excellent:{chart:"#219653",bg:"bg-[#F0F7EB]",text:"text-[#219653]"},good:{chart:"#B4A572",bg:"bg-[#FFFCEC]",text:"text-[#B4A572]"},poor:{chart:"#EF4444",bg:"bg-[#FFEDEC]",text:"text-[#EF4444]"}})[C.value]);return(k,x)=>s.type=="default"?(r(),v("div",{key:0,class:D([[t(_).bg],"w-full h-full p-4 rounded-2xl"])},[le,e("div",{style:Z(`background: conic-gradient(${t(_).chart} ${s.score*3.6}deg, #fff 0deg)`),class:"relative rounded-full w-24 h-24 p-2.5 rounded-full mx-auto my-3"},[e("div",{class:D([[t(_).bg],"w-full h-full flex flex-col items-center justify-center rounded-full"])},[e("span",ce,l(s.score)+"%",1),e("span",ie,l(t(C)),1)],2)],4)],2)):(r(),v("div",{key:1,class:D([[t(_).text],"flex items-center gap-2"])},[re,e("span",de,"Credit Score: "+l(s.score?s.score:"N/A"),1)],2))}},ue={class:"flex flex-wrap items-center justify-between gap-4"},me={class:"text-lg"},pe={class:"flex items-center gap-4"},fe={class:"capitalize"},ve={key:1,class:"flex items-center gap-2 sm:gap-4 md:gap-6"},_e={key:0,class:"flex flex-col gap-2"},xe={class:"text-xs"},ye={class:"flex flex-col sm:flex-row items-center text-sm mt-4"},ge={class:"w-full sm:w-1/2 sm:pr-8 sm:border-r"},be=e("div",{class:"font-bold"},"Loan Details",-1),he={class:"border-b pt-4 pb-3 flex items-center justify-between"},we=e("span",null,"Applicant",-1),Ce={class:"text-primary"},Ae={class:"border-b pt-4 pb-3 flex items-center justify-between"},ke=e("span",null,"Loan Amount",-1),Ee={class:"text-primary"},Le={class:"border-b pt-4 pb-3 flex items-center justify-between"},$e=e("span",null,"Loan Interest",-1),De={class:"text-primary"},je={class:"border-b pt-4 pb-3 flex items-center justify-between"},Re=e("span",null,"Book Date",-1),Ie={class:"text-primary"},Ne={class:"pt-4 pb-3 flex items-center justify-between"},Fe=e("span",null,"Maturity Date",-1),Pe={class:"text-primary"},Be={class:"w-full sm:w-1/2 sm:pl-8 mt-6 sm:mt-0"},Te=e("div",{class:"font-bold"},"Repayment",-1),Se={class:"border-b pt-4 pb-3 flex items-center justify-between"},Ve=e("span",null,"Total Amount Paid",-1),Oe={class:"text-primary"},ze={class:"border-b pt-4 pb-3 flex items-center justify-between"},Me=e("span",null,"Total Balance",-1),Ue={class:"text-primary"},Ye={class:"border-b pt-4 pb-3 flex items-center justify-between"},qe=e("span",null,"Overdue",-1),Ge={class:"text-primary"},He={class:"border-b pt-4 pb-3 flex items-center justify-between"},Je=e("span",null,"Next Repayment Amount",-1),Ke={class:"text-primary"},Qe={class:"pt-4 pb-3 flex items-center justify-between"},We=e("span",null,"Next Repayment Date",-1),Xe={class:"text-primary"},Ze={key:1,class:"flex flex-col gap-2 text-sm"},et=e("span",{class:"text-sm"},"Loan Purpose",-1),tt={class:"border rounded-lg px-4 pt-2 pb-8 font-bold"},st=e("i",{class:"far fa-file-alt"},null,-1),ot=e("span",null,"View Contract",-1),at={class:"grid grid-cols-2 gap-2"},nt={class:"flex flex-col gap-6"},lt={class:"grid grid-cols-2 gap-2"},ct={__name:"LoanDetails",props:{showCreditScore:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},loan:{type:Object,default:()=>({})}},setup(s){const n=s,C=U(),{query:_,mutate:k}=C,x=ee(),{formatAmount:c,formatDate:E,viewPDF:b}=q,y=h(!1),m=h(!1),L=h(!1),A=h(!1),F=h(""),j=h(!1),R=h(""),T=te({reject:!1}),S=f(()=>C.getUser),H=f(()=>({PAYROLL_COVER:"Payroll Cover Loan",ENTERPRISE_LOAN:"Enterprise Loan",SALARY_ADVANCE:"Salary Advance Loan"})[n.loan&&n.loan.type]),J=f(()=>{let o=0;return n.loan&&n.loan.repaymentBreakDown.find((a,i)=>{a.status=="active"&&(o=i+1)}),o}),V=f(()=>{let o=0,a="";return n.loan&&n.loan.repaymentBreakDown.find((i,z)=>{i.status=="active"&&(o=i.totalAmount,a=i.dueDate)}),{amount:o,date:a}}),P=["APPROVED","COMPLETED","DECLINED","CUSTOMER_CANCELED"],N=f(()=>{const o={APPROVED:{text:"text-[#359AA0]",bg:"bg-[#359AA0]",status:"Active",color:"#359AA0"},COMPLETED:{text:"text-[#219653]",bg:"bg-[#219653]",status:"Completed",color:"#219653"},DECLINED:{text:"text-[#EF4444]",bg:"bg-[#EF4444]",status:"Rejected",color:"#EF4444"},CUSTOMER_CANCELED:{text:"text-[#EF4444]",bg:"bg-[#EF4444]",status:"Cancelled",color:"#EF4444"}};return P.includes(n.loan&&n.loan.status)?o[n.loan&&n.loan.status]:""}),K=async()=>{y.value=!0;try{const o=await _({endpoint:"LoanContract",payload:{loanId:n.loan&&n.loan._id,companyId:n.loan&&n.loan.companyId._id,creatorId:S.value&&S.value._id}});console.log(o);const{base64:a}=o.data;b(a),y.value=!1}catch(o){y.value=!1,m.value=!1,console.log(o.message),x.error(o.message)}},Q=async()=>{m.value=!0;try{const o=await k({endpoint:"ApproveLoan",data:{loanId:[n.loan._id]}});m.value=!1,L.value=!1,console.log(o),o.success?(F.value="You have successfully approved this loan..",A.value=!0,O(),setTimeout(()=>{A.value=!1},3e3)):x.error(o.message)}catch(o){m.value=!1,console.log(o.message),x.error(o.message)}},W=async()=>{if(R.value.trim()!==""){m.value=!0;try{const o=await k({endpoint:"CancelLoan",data:{loanId:[n.loan._id],reason:R.value}});R.value="",m.value=!1,j.value=!1,console.log(o),o.success?(await O(),F.value="This loan application has been successfully rejected.",A.value=!0,setTimeout(()=>{A.value=!1},3e3)):x.error(o.message)}catch(o){m.value=!1,console.log(o.message),x.error(o.message)}}else T.reject="Please add a reason"},O=async()=>{const o={paging:{limit:1e3,skip:0,search:""},filter:{type:null,status:null},sort:{createdAt:-1}};try{const a=await _({endpoint:"ListLoans",payload:o,storeKey:"loans"});console.log(a)}catch(a){console.log(a.message)}};return(o,a)=>{const i=I("easiButton"),z=I("easiRange"),B=I("easiAlert"),X=I("easiTextInput");return r(),v(Y,null,[e("div",{class:D([{"rounded-2xl border":!s.borderless},"p-6 px-4 sm:px-8 flex flex-col gap-6"])},[e("div",ue,[e("span",me,l(t(H)),1),e("div",pe,[P.includes(s.loan.status)?(r(),v("div",{key:0,class:D([[t(N).text],"flex items-center gap-2 text-xs font-bold"])},[e("div",{class:D([[t(N).bg],"h-3 w-3 rounded-full"])},null,2),e("span",fe,l(t(N).status),1),s.loan.status=="APPROVED"?(r(),$(i,{key:0,size:"medium",class:"ml-6"},{default:u(()=>[p("Clear Loan")]),_:1})):w("",!0)],2)):(r(),v("div",ve,[s.showCreditScore?(r(),$(G,{key:0,type:"text"})):w("",!0),d(i,{variant:"outlined",size:"medium"},{default:u(()=>[p("View Document")]),_:1}),d(i,{variant:"outlined",size:"medium",onClick:a[0]||(a[0]=g=>j.value=!0)},{default:u(()=>[p("Reject")]),_:1}),d(i,{size:"medium",onClick:a[1]||(a[1]=g=>L.value=!0)},{default:u(()=>[p("Approve")]),_:1})]))])]),P.includes(s.loan.status)?(r(),v("div",_e,[e("span",xe,"In prograss (Stage 1/"+l(s.loan.repaymentBreakDown.length)+")",1),d(z,{max:s.loan.repaymentBreakDown.length,color:t(N).color,disabled:"",value:s.loan.status=="PENDING"||s.loan.status=="CUSTOMER_CANCELED"?0:t(J)},null,8,["max","color","value"])])):w("",!0),e("div",ye,[e("div",ge,[be,e("div",he,[we,e("span",Ce,l(s.loan.companyId&&s.loan.companyId.companyAdmin&&`${s.loan.companyId.companyAdmin.firstName} ${s.loan.companyId.companyAdmin.lastName}`),1)]),e("div",Ae,[ke,e("span",Ee,l(t(c)(s.loan.loanAmountApplied)),1)]),e("div",Le,[$e,e("span",De,l(s.loan.totalIntrest.toLocaleString())+"%",1)]),e("div",je,[Re,e("span",Ie,l(t(E)(s.loan.createdAt)),1)]),e("div",Ne,[Fe,e("span",Pe,l(t(E)(s.loan.durationEndedAt)),1)])]),e("div",Be,[Te,e("div",Se,[Ve,e("span",Oe,l(t(c)(s.loan.totalRepaymentPaid)),1)]),e("div",ze,[Me,e("span",Ue,l(t(c)(s.loan.totalRepaymentAmount)),1)]),e("div",Ye,[qe,e("span",Ge,l(t(c)(0)),1)]),e("div",He,[Je,e("span",Ke,l(t(c)(t(V).amount)),1)]),e("div",Qe,[We,e("span",Xe,l(t(E)(t(V).date)),1)])])]),s.loan&&s.loan.purpose?(r(),v("div",Ze,[et,e("div",tt,l(s.loan&&s.loan.purpose),1)])):w("",!0),d(ae,{loan:s.loan},null,8,["loan"]),d(i,{onClick:K,variant:"text",size:"medium",loading:y.value,color:"#359AA0",class:"text-[#359AA0] text-sm flex items-center justify-center italic gap-2 mx-auto"},{default:u(()=>[st,ot]),_:1},8,["loading"])],2),A.value?(r(),$(B,{key:0,onClose:a[3]||(a[3]=g=>A.value=!1),caption:F.value},{default:u(()=>[d(i,{onClick:a[2]||(a[2]=g=>A.value=!1),block:""},{default:u(()=>[p("Okay")]),_:1})]),_:1},8,["caption"])):w("",!0),L.value?(r(),$(B,{key:1,onClose:a[5]||(a[5]=g=>L.value=!1),icon:t(M),title:"Approve Loan",caption:"Are you sure you want to approve this loan? However this action will not be reversible once taken."},{default:u(()=>[e("div",at,[d(i,{onClick:a[4]||(a[4]=g=>L.value=!1),variant:"outlined",block:""},{default:u(()=>[p("Cancel")]),_:1}),d(i,{onClick:Q,loading:m.value,block:""},{default:u(()=>[p("Yes")]),_:1},8,["loading"])])]),_:1},8,["icon"])):w("",!0),j.value?(r(),$(B,{key:2,onClose:a[8]||(a[8]=g=>j.value=!1),icon:t(M),title:"Reject Loan Application",caption:"Are you sure you want to reject this loan application? Please give a reason why the loan is rejected."},{default:u(()=>[e("div",nt,[d(X,{modelValue:R.value,"onUpdate:modelValue":a[6]||(a[6]=g=>R.value=g),error:T.reject,label:"Please give a reason"},null,8,["modelValue","error"]),e("div",lt,[d(i,{onClick:a[7]||(a[7]=g=>j.value=!1),variant:"outlined",block:""},{default:u(()=>[p("Cancel")]),_:1}),d(i,{onClick:W,loading:m.value,block:""},{default:u(()=>[p("Confirm")]),_:1},8,["loading"])])])]),_:1},8,["icon"])):w("",!0)],64)}}};const it={class:"text-sm text-dark-600 flex gap-1 items-center"},rt={class:"capitalize"},dt={class:"w-full md:w-10/12 l mx-auto mt-6 flex flex-col gap-6"},ut={class:"grid grid-cols-12 gap-4 md:gap-8 place-content-center items-center"},mt={class:"wave col-span-12 sm:col-span-8 text-white p-6 pb-16 md:px-8 rounded-2xl border bg-primary flex justify-between"},pt={class:"font-bold text-2xl capitalize"},ft=e("div",{class:"mt-2 flex items-center gap-2 text-sm sm:text-base"},[e("span",null,"Company Account"),p(" | "),e("span",null,"Registered")],-1),vt={class:"w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden bg-tertiary rounded-full"},_t=["src"],xt={key:1,class:"w-full h-full flex items-center justify-center uppercase text-primary text-2xl font-bold"},yt={class:"col-span-12 sm:col-span-4"},Ct={__name:"ViewLoan",setup(s){const{initials:n}=q,C=U(),_=se();oe();const k=h(!1),x=f(()=>C.getAllLoans),c=f(()=>{const b=_.params.id;return x.value&&x.value.find(y=>y._id==b)}),E=f(()=>{const b=c.value&&c.value.companyId.company.companyName;return b||"N/A"});return console.log(c.value),(b,y)=>{const m=I("easiLoader");return r(),v(Y,null,[e("div",it,[e("span",{onClick:y[0]||(y[0]=L=>b.$router.go(-1)),class:"cursor-pointer hover:underline hover:text-dark-800"},"Loan Management"),p("/ "),e("span",rt,l(t(E)),1)]),e("div",dt,[e("div",ut,[e("div",mt,[e("div",null,[e("h5",pt,l(t(E)),1),ft]),e("div",vt,[t(c)&&t(c).companyId.company.logo?(r(),v("img",{key:0,src:t(c)&&t(c).companyId.company.logo,alt:"",class:"object-cover h-full w-full"},null,8,_t)):(r(),v("div",xt,l(t(n)(t(c)&&t(c).companyId.company.companyName)),1))])]),e("div",yt,[d(G,{score:t(c)&&t(c).creditReport},null,8,["score"])])]),d(ct,{loan:t(c)},null,8,["loan"]),d(ne,{loan:t(c)},null,8,["loan"]),k.value?(r(),$(m,{key:0})):w("",!0)])],64)}}};export{Ct as default};
//# sourceMappingURL=ViewLoan-803d8ce6.js.map
