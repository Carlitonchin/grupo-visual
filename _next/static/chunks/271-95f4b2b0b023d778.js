"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{9763:function(e,t,n){n.d(t,{T5:function(){return l}});var r=n(2601);let l="https://grupo-visual-api.vercel.app/api/",i=r.env.STRAPI_URL,a=r.env.STRAPI_TOKEN,o={"Content-Type":"Application/Json",Authorization:"Bearer ".concat(a)},u=async function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?populate=*",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&pagination[pageSize]=1000000",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;try{let a=i+e+n+r+l;t=await axios.get(a,{timeout:6e4,headers:o})}catch(t){if(++a<5)return await u(e,n,r,l,a)}return t.data.data}},8823:function(e,t,n){n.r(t),n.d(t,{CartProvider:function(){return u},useCart:function(){return c}});var r=n(7437),l=n(2265),i=n(2927),a=n(6412);let o=(0,l.createContext)({cart:[],open:!1,setOpen:e=>{},AddToCart:e=>{},SubFromCart:e=>{},RemoveFromCart:e=>{},CleanCart:()=>{}}),u=e=>{let{children:t}=e,[n,u]=(0,l.useState)([]),[c,d]=(0,l.useState)(!1),{reactPixel:s}=(0,i.useReactPixel)();function m(e){u(n.filter(t=>{var n;return(null==t?void 0:null===(n=t.item)||void 0===n?void 0:n.id)!=e.id}))}return(0,l.useEffect)(()=>{d(!1);let e=JSON.parse(localStorage.getItem("cart")||"[]")||[];u((null==e?void 0:e.length)==void 0?[]:e)},[]),(0,l.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(n)),(null==n?void 0:n.length)||d(!1)},[n]),(0,r.jsx)(o.Provider,{value:{cart:n,AddToCart:function(e){let t=n.find(t=>{var n;return(null==t?void 0:null===(n=t.item)||void 0===n?void 0:n.id)==(null==e?void 0:e.id)}),r=null;if(!t){u(r=n.concat([{item:e,cant:1}])),(0,a.Xq)(s,r);return}r=n.map(e=>{var n,r;return(null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.id)!=(null==t?void 0:null===(r=t.item)||void 0===r?void 0:r.id)?e:{item:e.item,cant:e.cant+1}}),(0,a.Xq)(s,r),u(r)},SubFromCart:function(e){let t=n.find(t=>{var n;return(null==t?void 0:null===(n=t.item)||void 0===n?void 0:n.id)==(null==e?void 0:e.id)});if(t){if((null==t?void 0:t.cant)==1){m(e);return}u(n.map(e=>{var n,r;return(null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.id)!=(null==t?void 0:null===(r=t.item)||void 0===r?void 0:r.id)?e:{item:e.item,cant:e.cant-1}}))}},RemoveFromCart:m,open:c,setOpen:d,CleanCart:function(){u([])}},children:t})},c=()=>(0,l.useContext)(o)},1308:function(e,t,n){n.r(t),n.d(t,{OrderProvider:function(){return a},useOrder:function(){return o}});var r=n(7437),l=n(2265);let i=(0,l.createContext)({setOrderCart:(e,t)=>{},orderCart:null,setOrderEnroll:(e,t)=>{},orderEnroll:null,cleanOrderEnroll:()=>{},cleanOrderCart:()=>{}}),a=e=>{let{children:t}=e,[n,a]=(0,l.useState)(null),[o,u]=(0,l.useState)(null);return(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("order")||"{}"),t=JSON.parse(localStorage.getItem("order_cart")||"{}");(null==e?void 0:e.orderId)&&a(e),(null==t?void 0:t.orderId)&&u(t)},[]),(0,r.jsx)(i.Provider,{value:{orderCart:o,setOrderCart:function(e,t){localStorage.setItem("order_cart",JSON.stringify({orderId:e,courses:t})),u({orderId:e,courses:t})},orderEnroll:n,setOrderEnroll:function(e,t){localStorage.setItem("order",JSON.stringify({orderId:e,courses:t})),a({orderId:e,courses:t})},cleanOrderCart:function(){u(null),localStorage.removeItem("order_cart")},cleanOrderEnroll:function(){a(null),localStorage.removeItem("order")}},children:t})},o=()=>(0,l.useContext)(i)},2927:function(e,t,n){n.r(t),n.d(t,{ReactPixelProvider:function(){return a},useReactPixel:function(){return o}});var r=n(7437),l=n(2265);let i=(0,l.createContext)({setReactPixel:e=>{},reactPixel:null}),a=e=>{let{children:t}=e,[n,a]=(0,l.useState)(null);return(0,r.jsx)(i.Provider,{value:{reactPixel:n,setReactPixel:a},children:t})},o=()=>(0,l.useContext)(i)},9387:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(7437),l=n(8163),i=n(2265),a=n(9804),o=n(6882),u=n(6507),c=n(2923),d=n(8786),s=n(9763),m=n(8874),v=n(4081),f=n(819),h=n(715),p=n(5550),x=n(9222),g=n(2927),C=n(6412),y=n(1308);function S(e){let{courses:t,handleClose:n,isCart:S}=e,{reactPixel:j}=(0,g.useReactPixel)(),{setOrderCart:_,setOrderEnroll:P}=(0,y.useOrder)(),[O,Z]=(0,i.useState)({name:"",email:""}),w=["name","email"],[A,R]=(0,i.useState)({name:"",email:""});async function I(e){let r,l;e.preventDefault(),b(!0);let i=(r={},l=!1,Object.keys(O).forEach(e=>{let t="";w.includes(e)&&(t=(0,d.l)(O[e])),t||"email"!=e||(t=(0,d.o)(O[e])),t&&(l=!0),r[e]=t}),R(r),l);if(!i){T(!0);try{let e=await x.Z.post(s.T5+"buy-courses",{customer:O,courses:t}),r=e.data.checkouts[0].payment_url;if(!r)throw Error("error");S?_(e.data.id,t):P(e.data.id,t),(0,C.qt)(j,t,O,e.data.id),window.open(r,"_blank"),n()}catch(e){E(!0)}finally{T(!1)}}}let[N,E]=(0,i.useState)(!1),[k,b]=(0,i.useState)(!1),[q,T]=(0,i.useState)(!1);function B(e){Z({...O,[e.target.name]:e.target.value});let t=(0,d.l)(e.target.value);t||"email"!=e.target.name||(t=(0,d.o)(e.target.value)),R({...A,[e.target.name]:t})}return(0,r.jsxs)(r.Fragment,{children:[q&&(0,r.jsx)("div",{className:"w-screen z-40  h-screen fixed top-0 left-0 flex justify-center items-center",children:(0,r.jsx)(o.Z,{sx:{color:"#000"}})}),(0,r.jsx)(c.Z,{open:N,autoHideDuration:6e3,onClose:()=>E(!1),children:(0,r.jsx)(a.Z,{onClose:()=>E(!1),severity:"error",sx:{width:"100%"},variant:"filled",elevation:6,children:"Ocorreu um erro inesperado, comunique-se com nossa equipe"})}),(0,r.jsx)("form",{className:"w-full",children:(0,r.jsx)(u.Z,{width:"100%",component:"form",method:"post",className:"px-0",autoComplete:"off",children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)("span",{className:"text-center text-xl sm:text-start font-bold mt-2 ",children:"Informe seus dados"}),(0,r.jsxs)(m.ZP,{container:!0,spacing:1.5,mt:.5,children:[(0,r.jsx)(m.ZP,{item:!0,xs:12,children:(0,r.jsxs)(v.Z,{error:!!(k&&A.name),variant:"standard",fullWidth:!0,children:[(0,r.jsx)(f.Z,{htmlFor:"name",children:"Nome Completo"}),(0,r.jsx)(h.Z,{fullWidth:!0,name:"name",onChange:B}),k&&(0,r.jsx)(p.Z,{children:A.name})]})}),(0,r.jsx)(m.ZP,{item:!0,xs:12,children:(0,r.jsxs)(v.Z,{error:!!(k&&A.email),variant:"standard",fullWidth:!0,children:[(0,r.jsx)(f.Z,{htmlFor:"email",children:"Email"}),(0,r.jsx)(h.Z,{fullWidth:!0,type:"email",name:"email",onChange:B}),k&&(0,r.jsx)(p.Z,{children:A.email})]})}),(0,r.jsx)(m.ZP,{container:!0,item:!0,justifyContent:"center",xs:12,mt:4,children:(0,r.jsx)(l.A,{variant:"shadow",className:"w-full bg-black text-white uppercase font-bold",onClick:e=>{I(e)},children:"Realizar Pagamento"})})]})]})})})]})}},4128:function(e,t,n){n.d(t,{e:function(){return r}});let r=Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"})},8786:function(e,t,n){n.d(t,{l:function(){return r},o:function(){return l}});let r=e=>e&&e.trim()?"":"Campo obrigat\xf3rio",l=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?"":"Email inv\xe1lido"},6412:function(e,t,n){n.d(t,{Cz:function(){return r},NW:function(){return o},VO:function(){return c},Xq:function(){return d},af:function(){return f},e_:function(){return m},f9:function(){return u},hP:function(){return v},qt:function(){return s}});let r=795890068897751,l={ViewContent:"ViewContent",AddToCart:"AddToCart",InitiateCheckout:"InitiateCheckout",Purchase:"Purchase"},i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e&&e.track(t,n)},a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e&&e.trackCustom(t,n)},o=(e,t)=>{a(e,"AtivarSon",t?{video:t}:{})},u=(e,t)=>{a(e,"VerVideo",t?{video:t}:{})},c=(e,t)=>{(null==t?void 0:t.text)&&i(e,l.ViewContent,{contents:[{id:t.text.trim().replaceAll(" ","_"),quantity:1}],content_type:"course",value:t.price||0,currency:"BRL"})},d=(e,t)=>{var n;if(!(null==t?void 0:t.length))return;let r=0;for(let e=0;e<t.length;e++)r+=((null===(n=t[e].item)||void 0===n?void 0:n.price)||0)*t[e].cant;i(e,l.AddToCart,{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:r||0,currency:"BRL"})},s=(e,t,n,r)=>{var a;if(!(null==t?void 0:t.length))return;let o=0;for(let e=0;e<t.length;e++)o+=((null===(a=t[e].item)||void 0===a?void 0:a.price)||0)*t[e].cant;i(e,l.InitiateCheckout,{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:o||0,currency:"BRL",customer:n,orderId:r,orderId:r})},m=(e,t)=>{var n;if(!(null==t?void 0:t.length))return;let r=0;for(let e=0;e<t.length;e++)r+=((null===(n=t[e].item)||void 0===n?void 0:n.price)||0)*t[e].cant;i(e,l.Purchase,{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:r||0,currency:"BRL"})},v=(e,t)=>{var n;if(!(null==t?void 0:t.length))return;let r=0;for(let e=0;e<t.length;e++)r+=((null===(n=t[e].item)||void 0===n?void 0:n.price)||0)*t[e].cant;a(e,"ViuCarrinho",{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:r||0,currency:"BRL"})},f=(e,t)=>{a(e,"Matricula",{contents:[{id:t.text.trim().replaceAll(" ","_"),quantity:1}],content_type:"course",value:t.price||0,currency:"BRL"})}}}]);