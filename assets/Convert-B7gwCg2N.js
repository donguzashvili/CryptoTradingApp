import{g as S,a as w,s as L,P as R,r as l,u as M,d as _,_ as f,j as e,e as I,h as N,T as h,B as x,o as V,L as O}from"./index-Bbemf2EA.js";import{g as W,f as A}from"./index-sMPNtcqS.js";import{I as F,C as Y,B as k}from"./Select-ynFyAjCy.js";import{r as z,f as G}from"./createSvgIcon-azMob84g.js";function H(t){return S("MuiCard",t)}w("MuiCard",["root"]);const J=["className","raised"],K=t=>{const{classes:r}=t;return N({root:["root"]},H,r)},Q=L(R,{name:"MuiCard",slot:"Root",overridesResolver:(t,r)=>r.root})(()=>({overflow:"hidden"})),X=l.forwardRef(function(r,s){const o=M({props:r,name:"MuiCard"}),{className:a,raised:c=!1}=o,n=_(o,J),d=f({},o,{raised:c}),u=K(d);return e.jsx(Q,f({className:I(u.root,a),elevation:c?8:void 0,ref:s,ownerState:d},n))}),Z=X;function ee(t){return S("MuiCardContent",t)}w("MuiCardContent",["root"]);const te=["className","component"],se=t=>{const{classes:r}=t;return N({root:["root"]},ee,r)},ae=L("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),re=l.forwardRef(function(r,s){const o=M({props:r,name:"MuiCardContent"}),{className:a,component:c="div"}=o,n=_(o,te),d=f({},o,{component:c}),u=se(d);return e.jsx(ae,f({as:c,className:I(u.root,a),ownerState:d,ref:s},n))}),ne=re,y=({children:t,sx:r})=>e.jsx(x,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",...r},children:t}),b=({cardLabel:t,currency:r,onSelectChange:s,selectVal:o,cardValue:a,selectOptions:c,onInputChange:n,disableInput:d,error:u,clearError:m})=>{const g=p=>{m&&m(),n&&n(p)};return e.jsx(Z,{component:R,sx:{maxWidth:"400px"},children:e.jsxs(ne,{children:[e.jsxs(y,{children:[e.jsx(h,{children:t}),e.jsxs(h,{children:["Balance: --",r]})]}),e.jsxs(y,{sx:{paddingTop:1},children:[e.jsx(x,{children:e.jsx(F,{error:u,disabled:d,placeholder:"0.00",sx:u?{}:{"&::before":{content:"none"}},value:a,onChange:p=>g(p.currentTarget.value)})}),e.jsx(x,{children:e.jsx(Y,{onChange:s,value:o,options:c})})]})]})})};var v={},oe=V;Object.defineProperty(v,"__esModule",{value:!0});var B=v.default=void 0,le=oe(z()),ie=e;B=v.default=(0,le.default)((0,ie.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const Ce=()=>{const[t,r]=l.useState([]),[s,o]=l.useState(),[a,c]=l.useState(),[n,d]=l.useState(),[u,m]=l.useState(),[g,p]=l.useState(!1),[E,$]=l.useState(!1);l.useEffect(()=>{P()},[]);const P=async()=>{p(!0);const C=(await W({start:1,limit:10})).map(j=>({value:j.id,label:j.symbol}));r(C);const T=C.slice(1,C.length);o(C[0]),c(T[0]),p(!1)},U=l.useMemo(()=>a?t.filter(i=>i.value!==a.value):t,[a,t]),D=l.useMemo(()=>s?t.filter(i=>i.value!==s.value):t,[s,t]),q=async()=>{const C=(await A(`${s==null?void 0:s.value}`,`${a==null?void 0:a.label}`))[Number(s==null?void 0:s.value)].quote[a==null?void 0:a.label].price;m(`${G(Number(n)*C,8)}`)};return e.jsx(e.Fragment,{children:g?e.jsx(O,{}):e.jsx(x,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexGrow:1},children:e.jsxs(x,{sx:{display:"flex",flexFlow:"column",alignItems:"center"},children:[e.jsx(b,{cardLabel:"From",currency:String(s==null?void 0:s.label),cardValue:n,selectOptions:U,onSelectChange:i=>o(i),onInputChange:i=>d(i),selectVal:s,error:E,clearError:()=>$(!1)}),e.jsx(B,{sx:{transform:"rotate(90deg)",marginY:2}}),e.jsx(b,{cardLabel:"To",currency:String(a==null?void 0:a.label),cardValue:u,selectOptions:D,onSelectChange:i=>c(i),selectVal:a,disableInput:!0}),e.jsx(k,{variant:"contained",sx:{marginY:2,width:"100%"},onClick:q,disabled:!n||(n==null?void 0:n.length)===0,children:!n||(n==null?void 0:n.length)===0?"Enter an amount":"Convert"})]})})})};export{Ce as default};
