import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{N as m,c as l}from"./index-BCYsT9mm.js";import"./iframe-B2jeJJgB.js";import"./index-DmM0KDA7.js";import"./index-CnHy7ftH.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const{addons:d}=__STORYBOOK_MODULE_PREVIEW_API__,i=d.getChannel(),p=({children:t,context:o})=>{var r,a,s,n;const e=((n=(s=(a=(r=i.data)==null?void 0:r.globalsUpdated)==null?void 0:a[0])==null?void 0:s.globals)==null?void 0:n.theme)||"dark";return c.jsx(l,{theme:m[e],context:o,children:t})},x={globalTypes:{theme:{description:"Global theme for components",toolbar:{title:"Theme",icon:"circlehollow",items:["light","dark"],dynamicTitle:!0}}},initialGlobals:{theme:"dark"},parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},backgrounds:{disable:!0},docs:{container:p,theme:m.dark}},decorators:[(t,o)=>{const e=o.globals.theme;return document.body.style.backgroundColor=e==="dark"?"#333333":"#ccc",document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add(e),document.body.style.padding="0",c.jsx(t,{})}]};export{x as default};
