import{j as d}from"./jsx-runtime-BjgbQsUx.js";import"./index-D2MAbzvX.js";var $=(...a)=>a.reduce((o,r)=>r?typeof r=="string"?`${o} ${r}`:`${o} ${Object.entries(r).filter(([,e])=>!!e).map(([e])=>e).join(" ")}`:o,"").trim(),w={button:"_button_1ocxg_1"},B={"size-1":"_size-1_p5svb_1","size-2":"_size-2_p5svb_9","size-3":"_size-3_p5svb_17","size-4":"_size-4_p5svb_25","size-5":"_size-5_p5svb_33"},P={"variant-primary":"_variant-primary_1nypw_1","variant-secondary":"_variant-secondary_1nypw_11","variant-secondary-color":"_variant-secondary-color_1nypw_22","variant-tertiary":"_variant-tertiary_1nypw_33","variant-tertiary-color":"_variant-tertiary-color_1nypw_46"},E=({children:a,className:p,size:o=1,variant:r="primary",disabled:e})=>{const h=$(w.button,p,B[`size-${o}`],P[`variant-${r}`]);return d.jsx("button",{disabled:e,className:h,children:a})};const F={title:"Components/Button",component:E,parameters:{docs:{autodocs:!0}},decorators:[a=>d.jsx("div",{children:d.jsx(a,{})})],tags:["autodocs"],args:{children:"Button"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","secondary-color","tertiary","tertiary-color"],description:"Define o estilo do botão."},disabled:{control:{type:"radio"},options:[!0,!1]},size:{control:{type:"select"},options:[1,2,3,4,5],description:"Tamanho do botão."},children:{control:{type:"text"},description:"Texto ou elementos filhos do botão."},onPress:{action:"onPress",description:"Função chamada ao clicar no botão."}}},t={args:{variant:"primary"}},s={args:{variant:"secondary"}},n={args:{variant:"secondary-color"}},i={args:{variant:"tertiary"}},c={args:{variant:"tertiary-color"}};var y,l,m;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var _,u,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,b,z;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'secondary-color'
  }
}`,...(z=(b=n.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var f,x,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,C,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary-color'
  }
}`,...(T=(C=c.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const N=["Primary","Secondary","SecondaryColor","Tertiary","TertiaryColor"];export{t as Primary,s as Secondary,n as SecondaryColor,i as Tertiary,c as TertiaryColor,N as __namedExportsOrder,F as default};
