import{_ as k,o as d,c as m,a as e,r as O,b as p,d as C,t as I,F as V,e as F,w as M,v as j,u as $,f as R,n as K,g as U,h as q,i as w,j as S,k as D,l as P,m as T,p as A,q as L,s as W,x as z,y as Q}from"./index-351c9552.js";import{_ as G}from"./new-logo-green-213c5130.js";const H="/assets/curve-313bef22.svg",Y="/assets/arrow-left-501d6f5c.svg",Z="/assets/openingQuote-2727d852.svg",J="/assets/topFrame-8e33310f.svg",X="/assets/bottomFrame-42d651cc.svg",ee="/assets/closingQuote-273a14e3.svg",te={},se={class:"relative"},oe=e("div",{class:"flex absolute top-0 left-0 w-full gap-2 items-start"},[e("img",{src:Z,class:"relative -top-4 h-10 inline-block"}),e("img",{class:"w-full",src:J})],-1),ae={class:"px-12 py-10 text-white font-bold",style:{"font-size":"36px","line-height":"48px"}},ne=e("div",{class:"flex absolute bottom-0 w-full left-0 gap-2 items-baseline"},[e("img",{class:"w-full",src:X}),e("img",{class:"h-10 relative -bottom-4",src:ee})],-1);function le(a,v){return d(),m("div",se,[oe,e("div",ae,[O(a.$slots,"default")]),ne])}const re=k(te,[["render",le]]);const ie={class:"text-[#515251] mb-2 inline-block"},ce={class:"flex items-center gap-4"},ue=["data-key","onUpdate:modelValue","onPaste","onKeydown","onInput"],de={key:0,class:"pin-input-error"},_e={__name:"PinInput",props:{label:String,length:Number,error:Boolean||String},emits:["change"],setup(a,{emit:v}){const c=a,s=p(Array(c.length).fill("")),_=p([]),u=C(()=>typeof c.error=="string"?c.error:!1),b="Backspace",f="ArrowLeft",y="ArrowRight",g=()=>{v("change",s.value.join(""))},x=(l,r)=>{const t=l.key;let n=_.value[r+1],h=_.value[r-1],N=s.value[r];switch(t){case b:l.preventDefault(),N?(s.value[r]="",g()):h&&(h.focus(),h.select());break;case f:l.preventDefault(),h&&(h.focus(),h.select());break;case y:l.preventDefault(),n&&(n.focus(),n.select());break}},i=(l,r)=>{l.preventDefault();let t=l.target.value;if(!t)return;s.value[r]=t,g();let n=_.value[r+1];n&&(n.focus(),n.select())},o=(l,r)=>{l.preventDefault();const t=l.clipboardData.getData("text/plain");let n=r,h=[...s.value.slice(0,n),...t].slice(0,c.length);s.value=h,g()};return(l,r)=>(d(),m("div",{class:K(["pin-input",{error:!!a.error}])},[e("label",ie,I(a.label),1),e("div",ce,[(d(!0),m(V,null,F(a.length,t=>(d(),m("div",{key:`input-${t}`,class:"flex-1"},[M(e("input",{"data-key":t-1,"onUpdate:modelValue":n=>s.value[t-1]=n,onPaste:n=>o(n,t-1),maxlength:1,type:"text",ref_for:!0,ref_key:"inputRefs",ref:_,onKeydown:n=>x(n,t-1),onInput:n=>i(n,t-1),class:""},null,40,ue),[[j,s.value[t-1]]])]))),128))]),$(u)?(d(),m("div",de,I($(u)),1)):R("",!0)],2))}},pe=k(_e,[["__scopeId","data-v-303dedce"]]);const B=a=>(A("data-v-eb6c7d1e"),a=a(),L(),a),me=["onSubmit"],ve=B(()=>e("p",{class:"mb-8 text-center text-[#292A29] font-bold"}," We’ve sent OTP to your mail and phone number. ",-1)),fe={class:"grid gap-6 mb-6"},ge={class:"flex justify-between items-center mb-8"},he=["disabled"],be={class:"text-sm font-bold"},ye={class:"time-left"},we=B(()=>e("span",{class:"text-base inline-block mx-1"},":",-1)),xe={class:"time-left"},ke={__name:"OTPForm",props:["loading","error"],emits:["submit"],setup(a,{emit:v}){const s=p(180),_=p(!1),u=p(""),b=()=>{v("submit",u.value)};let f;const y=()=>{s.value=180,_.value=!1,f=setInterval(()=>{s.value=s.value-1,s.value===0&&(clearInterval(f),_.value=!0)},1e3)};U(()=>{y()}),q(()=>{clearInterval(f)});const g=C(()=>{let i=parseInt(s.value/60),o=s.value%60;return i=i.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),{minutes:i,seconds:o}}),x=()=>{y()};return(i,o)=>{const l=T("easiButton2");return d(),m("div",null,[e("form",{onSubmit:P(b,["prevent"])},[ve,e("div",fe,[w(pe,{length:6,label:"OTP",onChange:o[0]||(o[0]=r=>u.value=r),error:a.error},null,8,["error"])]),e("div",ge,[e("button",{type:"button",disabled:!_.value,onClick:x,class:"text-[#EA4E4B] disabled:opacity-50 tracking-[0.25px] text-sm"}," Resend ",8,he),e("div",be,[e("span",ye,I($(g).minutes),1),we,e("span",xe,I($(g).seconds),1)])]),w(l,{"is-loading":a.loading,block:"",type:"submit"},{default:S(()=>[D("Submit")]),_:1},8,["is-loading"])],40,me)])}}},Se=k(ke,[["__scopeId","data-v-eb6c7d1e"]]),Ie={},$e={width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ee=e("path",{d:"M2.66663 14.2005C2.66663 12.3596 5.05444 10.8672 7.99996 10.8672C10.9455 10.8672 13.3333 12.3596 13.3333 14.2005",stroke:"#8D8E8D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),De=e("path",{d:"M7.99996 8.86686C9.84091 8.86686 11.3333 7.37448 11.3333 5.53353C11.3333 3.69258 9.84091 2.2002 7.99996 2.2002C6.15901 2.2002 4.66663 3.69258 4.66663 5.53353C4.66663 7.37448 6.15901 8.86686 7.99996 8.86686Z",stroke:"#8D8E8D","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Te=[Ee,De];function Ce(a,v){return d(),m("svg",$e,Te)}const Re=k(Ie,[["render",Ce]]);const E=a=>(A("data-v-dae491c6"),a=a(),L(),a),Pe={class:"grid lg:grid-cols-2 h-screen overflow-hidden"},Ae={class:"bg-primary hidden lg:block overflow-auto relative"},Le=E(()=>e("img",{src:H,class:"absolute bottom-4 w-full left-0"},null,-1)),Be={class:"w-8/12 mx-auto mt-40 py-8 relative"},Ne={class:"h-full overflow-auto bg-[#F0F7EB]"},Oe={class:"mt-[15vh] py-6 px-6"},Ve={class:"login-card max-w-[420px] shadow-sm mx-auto bg-white p-8 rounded-[40px]"},Fe={class:"flex justify-center mb-7 relative"},Me={key:0,class:"absolute left-0 top-0 bottom-0 inline-grid place-items-center"},je=E(()=>e("img",{src:Y},null,-1)),Ke=[je],Ue=E(()=>e("div",null,[e("img",{src:G})],-1)),qe=["onSubmit"],We=E(()=>e("p",{class:"mb-8 text-center text-[#292A29] font-bold"},"Please input your username",-1)),ze={class:"mb-6"},Qe={__name:"Login",setup(a){const v=W(),c=p(!1),s=p(!1),_=Q(),u=p(""),b=p(""),f=p(!1),y=async()=>{b.value="";const i={input:{email:u.value,loginWith:"EMAIL",rememberMe:!0}};c.value=!0;try{let o=await v.mutate({endpoint:"EaziAdminLogin",data:i});c.value=!1,s.value=!0,localStorage.setItem("token",o.token),localStorage.setItem("userEmail",u.value),u.value=""}catch(o){c.value=!1,console.log(o),b.value=o.message??"error occurred"}},g=async i=>{const o=localStorage.getItem("token"),l=localStorage.getItem("userEmail"),r={reference:o,value:l,code:i};c.value=!0;try{f.value=null;let t=await v.mutate({endpoint:"ConfirmLoginOtp",data:{input:r}});if(t.success!==!0)throw new Error("Invalid Token. The token you provided is not valid or has expired");c.value=!1,localStorage.removeItem("userEmail");let{token:n}=t;n&&localStorage.setItem("token",t.token),localStorage.setItem("userData",t.data),localStorage.setItem("privileges",t.privileges),await x(),_.push("/admin/dashboard")}catch(t){c.value=!1,f.value=t.message??"error occurred",console.log(t)}},x=async()=>{try{let i=await v.query({endpoint:"GetMyProfile",storeKey:"user"});console.log(i)}catch(i){console.log(i)}};return(i,o)=>{const l=T("easiTextInput"),r=T("easiButton2");return d(),m("div",Pe,[e("aside",Ae,[Le,e("div",Be,[w(re,null,{default:S(()=>[D(" Do what you do so well that customers will want to use it again and bring their friends. ")]),_:1})])]),e("div",Ne,[e("main",Oe,[e("div",Ve,[e("div",Fe,[s.value?(d(),m("div",Me,[e("button",{onClick:o[0]||(o[0]=t=>s.value=!1)},Ke)])):R("",!0),Ue]),s.value?(d(),z(Se,{key:0,loading:c.value,onSubmit:g,error:f.value},null,8,["loading","error"])):(d(),m("form",{key:1,onSubmit:P(y,["prevent"])},[We,e("div",ze,[w(l,{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=t=>u.value=t),type:"email",label:"Email",autofocus:"",required:"",error:b.value},{append:S(()=>[w(Re)]),_:1},8,["modelValue","error"])]),w(r,{block:"","is-loading":c.value},{default:S(()=>[D(" Take me in ")]),_:1},8,["is-loading"])],40,qe))])])])])}}},Ye=k(Qe,[["__scopeId","data-v-dae491c6"]]);export{Ye as default};
//# sourceMappingURL=Login-15085f1c.js.map