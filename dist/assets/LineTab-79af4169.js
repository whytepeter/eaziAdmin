import{b as x,g as b,o as a,c as o,a as n,F as v,e as f,n as l,k,t as c,x as y,f as _,m as g}from"./index-351c9552.js";const L={class:"w-full border-b border-dark-300 flex items-center gap-2"},B=["onClick"],h={__name:"LineTab",props:{tabItems:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["onSetActive"],setup(s,{emit:i}){const d=s,e=x("");b(()=>{e.value==""&&(e.value=d.tabItems[0].title)});const p=r=>{e.value=r.title,i("onSetActive",r)};return(r,C)=>{const m=g("easiLineLoarder");return a(),o("div",null,[n("div",L,[(a(!0),o(v,null,f(s.tabItems,(t,u)=>(a(),o("div",{onClick:F=>p(t),key:`tabs-${u}`,class:l([[e.value==t.title?"text-primary border-b-2 border-primary":"text-dark-500"],"text-sm -mb-[1px] py-1 px-4 cursor-pointer flex items-center gap-1"])},[k(c(t.title)+" ",1),n("span",{class:l([[e.value==t.title?"text-primary":"text-dark-500"],"text-xs bg-[#F2F1F1] p-1 rounded-lg"])},c(t.value),3)],10,B))),128))]),s.loading?(a(),y(m,{key:0,class:"-mt-[1px]"})):_("",!0)])}}};export{h as _};
//# sourceMappingURL=LineTab-79af4169.js.map
