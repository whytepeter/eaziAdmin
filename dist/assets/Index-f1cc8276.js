import{_ as b,a as k,U as C,M as N,L as B,C as I,b as $}from"./location-8b461d59.js";import{s as P,b as d,d as p,c as v,a,i as r,u as s,t as f,j as U,F as _,e as D,m as M,o as u,k as E,x as F,I as L}from"./index-351c9552.js";import"./CopyIcon-0dbe4dba.js";const V={class:"border p-4 sm:px-6 sm:pt-6 sm:pb-14 rounded-2xl mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-9/12 flex gap-6 flex-col md:flex-row"},j={class:"grow"},q={class:"flex items-center justify-between"},A={class:"text-xl sm:text-2xl"},O={class:"grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center pt-8 pb-4"},z={__name:"Index",setup(S){const i=P(),{query:x}=i,{formatPhone:g,formatDate:T}=L,o=d(!1),l=d(!1),e=p(()=>i.getUser);console.log("User",e.value);const y=p(()=>[{title:"Role",value:e.value&&e.value.accountType,icon:C},{title:"Email",value:e.value&&e.value.email,link:`mailto:${e.value&&e.value.email}`,icon:N,copy:!0},{title:"Address",value:e.value&&e.value.address?e.value.address:"N/A",icon:B},{title:"Phone Number",value:g(e.value&&e.value.phoneNumber),icon:I}]),c=async()=>{try{l.value=!0,await x({endpoint:"GetMyProfile",storeKey:"user"}),l.value=!1}catch(m){l.value=!1,console.log(m.message)}};return c(),(m,t)=>{const h=M("easiButton");return u(),v(_,null,[a("div",V,[r(b,{profile:"",user:s(e)},null,8,["user"]),a("div",j,[a("div",q,[a("h4",A,f(s(e)&&s(e).firstName)+" "+f(s(e)&&s(e).lastName),1),r(h,{onClick:t[0]||(t[0]=n=>o.value=!0)},{default:U(()=>[E("Edit Profile")]),_:1})]),a("div",O,[(u(!0),v(_,null,D(s(y),(n,w)=>(u(),F($,{data:n,key:w},null,8,["data"]))),128))])])]),r(k,{onComplete:c,user:s(e),isOpen:o.value,onClose:t[1]||(t[1]=n=>o.value=!1)},null,8,["user","isOpen"])],64)}}};export{z as default};
//# sourceMappingURL=Index-f1cc8276.js.map
