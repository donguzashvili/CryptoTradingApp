import{g as S,a as w,s as L,P as R,r as l,u as M,d as _,_ as f,j as e,e as I,h as N,T as j,B as x,o as T,L as V}from"./index-CSw7mJlH.js";import{g as O,f as W}from"./index-C4tS9gui.js";import{I as A,C as Y,B as k}from"./Select-Bt66w6aW.js";import{r as z,f as G}from"./createSvgIcon-_-AT3ouC.js";function H(t){return S("MuiCard",t)}w("MuiCard",["root"]);const J=["className","raised"],K=t=>{const{classes:r}=t;return N({root:["root"]},H,r)},Q=L(R,{name:"MuiCard",slot:"Root",overridesResolver:(t,r)=>r.root})(()=>({overflow:"hidden"})),X=l.forwardRef(function(r,a){const o=M({props:r,name:"MuiCard"}),{className:s,raised:i=!1}=o,n=_(o,J),d=f({},o,{raised:i}),u=K(d);return e.jsx(Q,f({className:I(u.root,s),elevation:i?8:void 0,ref:a,ownerState:d},n))}),Z=X;function ee(t){return S("MuiCardContent",t)}w("MuiCardContent",["root"]);const te=["className","component"],se=t=>{const{classes:r}=t;return N({root:["root"]},ee,r)},ae=L("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),re=l.forwardRef(function(r,a){const o=M({props:r,name:"MuiCardContent"}),{className:s,component:i="div"}=o,n=_(o,te),d=f({},o,{component:i}),u=se(d);return e.jsx(ae,f({as:i,className:I(u.root,s),ownerState:d,ref:a},n))}),ne=re,y=({children:t,sx:r})=>e.jsx(x,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",...r},children:t}),b=({cardLabel:t,currency:r,onSelectChange:a,selectVal:o,cardValue:s,selectOptions:i,onInputChange:n,disableInput:d,error:u,clearError:m})=>{const g=p=>{m&&m(),n&&n(p)};return e.jsx(Z,{component:R,sx:{maxWidth:"400px"},children:e.jsxs(ne,{children:[e.jsxs(y,{children:[e.jsx(j,{children:t}),e.jsxs(j,{children:["Balance: --",r]})]}),e.jsxs(y,{sx:{paddingTop:1},children:[e.jsx(x,{children:e.jsx(A,{error:u,disabled:d,placeholder:"0.00",sx:u?{}:{"&::before":{content:"none"}},value:s,onChange:p=>g(p.currentTarget.value)})}),e.jsx(x,{children:e.jsx(Y,{onChange:a,value:o,options:i})})]})]})})};var v={},oe=T;Object.defineProperty(v,"__esModule",{value:!0});var B=v.default=void 0,le=oe(z()),ce=e;B=v.default=(0,le.default)((0,ce.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const Ce=()=>{const[t,r]=l.useState([]),[a,o]=l.useState(),[s,i]=l.useState(),[n,d]=l.useState(),[u,m]=l.useState(),[g,p]=l.useState(!1),[E,$]=l.useState(!1);l.useEffect(()=>{P()},[]);const P=async()=>{p(!0);const C=(await O({start:1,limit:10})).data.map(h=>({value:h.id,label:h.symbol}));r(C);const F=C.slice(1,C.length);o(C[0]),i(F[0]),p(!1)},U=l.useMemo(()=>s?t.filter(c=>c.value!==s.value):t,[s,t]),D=l.useMemo(()=>a?t.filter(c=>c.value!==a.value):t,[a,t]),q=async()=>{const C=(await W(`${a==null?void 0:a.value}`,`${s==null?void 0:s.label}`)).data[1].quote[s==null?void 0:s.label].price;m(`${G(Number(n)*C)}`)};return e.jsx(e.Fragment,{children:g?e.jsx(V,{}):e.jsx(x,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexGrow:1},children:e.jsxs(x,{sx:{display:"flex",flexFlow:"column",alignItems:"center"},children:[e.jsx(b,{cardLabel:"From",currency:String(a==null?void 0:a.label),cardValue:n,selectOptions:U,onSelectChange:c=>o(c),onInputChange:c=>d(c),selectVal:a,error:E,clearError:()=>$(!1)}),e.jsx(B,{sx:{transform:"rotate(90deg)",marginY:2}}),e.jsx(b,{cardLabel:"To",currency:String(s==null?void 0:s.label),cardValue:u,selectOptions:D,onSelectChange:c=>i(c),selectVal:s,disableInput:!0}),e.jsx(k,{variant:"contained",sx:{marginY:2,width:"100%"},onClick:q,disabled:!n||(n==null?void 0:n.length)===0,children:!n||(n==null?void 0:n.length)===0?"Enter an amount":"Convert"})]})})})};export{Ce as default};