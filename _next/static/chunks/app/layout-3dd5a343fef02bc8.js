(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{130:function(e,t,l){Promise.resolve().then(l.bind(l,5575)),Promise.resolve().then(l.t.bind(l,3054,23)),Promise.resolve().then(l.t.bind(l,3317,23)),Promise.resolve().then(l.bind(l,8823)),Promise.resolve().then(l.bind(l,1308)),Promise.resolve().then(l.bind(l,2927)),Promise.resolve().then(l.bind(l,8838)),Promise.resolve().then(l.bind(l,7514)),Promise.resolve().then(l.t.bind(l,1645,23)),Promise.resolve().then(l.bind(l,5759)),Promise.resolve().then(l.bind(l,3715)),Promise.resolve().then(l.bind(l,8783)),Promise.resolve().then(l.bind(l,8139))},5575:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var s=l(7437),r=l(6365),n=l.n(r);l(3023);var a=l(2265);function i(e){let{children:t}=e;return(0,a.useEffect)(()=>{let e=document.querySelectorAll("*[data-aos-delay]"),t=document.querySelectorAll("*[my-data-aos]");for(let t of e){let e=window.innerWidth;e<1e3&&t.setAttribute("data-aos-delay",0)}for(let e of t)e.setAttribute("data-aos",e.getAttribute("my-data-aos"));n().init({once:!0})},[]),(0,s.jsx)(s.Fragment,{children:t})}},8838:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return n}});var s=l(7437),r=l(9734);function n(e){let{children:t}=e;return(0,s.jsx)(r.w,{children:t})}},7514:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return h}});var s=l(7437),r=l(9763),n=l(9222),a=l(2265),i=l(2927),o=l(8823),c=l(6412),u=l(1308),d=3e4,m=3e4;function h(){let[e,t]=(0,a.useState)(0),[l,h]=(0,a.useState)(0),[f,x]=(0,a.useState)(0),[p,g]=(0,a.useState)(0),{reactPixel:v}=(0,i.useReactPixel)(),{CleanCart:j}=(0,o.useCart)(),{cleanOrderCart:w,cleanOrderEnroll:b,orderCart:N,orderEnroll:y}=(0,u.useOrder)();async function k(e){let t=await n.Z.get(r.T5+"buy-courses/".concat(e.orderId));return t.data}async function Z(l){if(!(f>10)&&!(e>60))try{let s=await k(l);if(null==s?void 0:s.closed){(0,c.e_)(v,l.courses),j(),w();return}setTimeout(()=>{Z(l)},m),t(e+1),m=e>50?6e4:3e4}catch(s){x(f+1),setTimeout(()=>{Z(l)},m),t(e+1),m=e>50?6e4:3e4}}async function C(t){if(!(p>10)&&!(l>60))try{let e=await k(t);if(null==e?void 0:e.closed){(0,c.e_)(v,t.courses),b();return}setTimeout(()=>{C(t)},d),h(l+1),d=l>50?6e4:3e4}catch(s){g(p+1),setTimeout(()=>{C(t)},d),h(e+1),d=l>50?6e4:3e4}}return(0,a.useEffect)(()=>{(null==y?void 0:y.orderId)&&(g(0),h(0),d=3e4,setTimeout(()=>{C(y)},15e3))},[y]),(0,a.useEffect)(()=>{(null==N?void 0:N.orderId)&&(x(0),t(0),m=3e4,setTimeout(()=>{Z(N)},15e3))},[N]),(0,s.jsx)(s.Fragment,{})}},5759:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var s=l(7437),r=l(2562),n=l(8823),a=l(8749),i=l(1797),o=l(6337),c=l(2834),u=l(2653),d=l(3533),m=l(3226),h=l(5938),f=l(4401),x=l(7754),p=l(9387),g=l(4128);function v(e){let t,{open:l,setOpen:r,courses:n,RemoveFromCart:v,AddToCart:j,SubFromCart:w}=e,b=()=>{r(!1)};return(0,s.jsx)("div",{className:"px-4 sm:px-8",children:(0,s.jsxs)(a.Z,{fullWidth:!0,maxWidth:"md",open:l,onClose:b,children:[(0,s.jsx)(i.Z,{className:"text-center sm:text-start",sx:{m:0,p:2},id:"customized-dialog-title",children:"Carrinho"}),(0,s.jsx)(u.Z,{"aria-label":"close",onClick:b,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,s.jsx)(d.Z,{})}),(0,s.jsx)(o.Z,{dividers:!0,children:(null==n?void 0:n.length)>0?(0,s.jsxs)(s.Fragment,{children:[n.map((e,t)=>{var l;return(0,s.jsxs)(m.Z,{mb:t<n.length-1?2:0,lineHeight:"1.2rem",fontSize:"1rem",className:"flex flex-col sm:flex-row items-center",gutterBottom:!0,children:[(0,s.jsxs)("span",{className:"flex -mt-1 text-gray-800 items-center font-bold gap-x-1 mb-1 mr-0 sm:mb-0 sm:mr-2",children:[(0,s.jsx)("button",{onClick:()=>w(e.item),children:(0,s.jsx)(f.Z,{className:" w-5 h-5"})}),e.cant,(0,s.jsx)("button",{onClick:()=>j(e.item),children:(0,s.jsx)(h.Z,{className:" w-5 h-5"})})]}),(0,s.jsxs)("span",{className:"flex flex-row justify-center items-start text-center sm:text-start sm:justify-start",children:[(0,s.jsx)("button",{onClick:()=>v(null==e?void 0:e.item),className:"w-fit h-fit p-0 -mt-1 sm:hidden",children:(0,s.jsx)(x.Z,{sx:{fill:"#ef4444"},className:"hover:scale-125 duration-200 p-0 m-0 w-6 h-6 mr-1 "})}),(0,s.jsxs)("span",{children:[e.item.text,": ",(0,s.jsx)("span",{className:"font-bold",children:g.e.format(e.cant*e.item.price)})]}),(0,s.jsx)("button",{onClick:()=>v(null==e?void 0:e.item),className:"w-fit h-fit p-0 -mt-1 hidden ml-1 sm:flex",children:(0,s.jsx)(x.Z,{sx:{fill:"#ef4444"},className:"hover:scale-125 duration-200 p-0 m-0 w-6 h-6 mr-1 "})})]})]},null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.id)}),(0,s.jsx)(m.Z,{mt:3,sx:{fontWeight:"bold"},className:"text-center sm:text-start",gutterBottom:!0,children:"Total: ".concat((t=0,(null==n?void 0:n.length)?(n.forEach(e=>{var l;return t+=((null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.price)||0)*((null==e?void 0:e.cant)||0)}),g.e.format(t)):t))})]}):(0,s.jsx)(m.Z,{gutterBottom:!0,children:"Sem cursos no carrinho"})}),(0,s.jsx)(c.Z,{children:(0,s.jsx)(p.Z,{courses:n,handleClose:b,isCart:!0})})]})})}var j=l(2265),w=l(2927),b=l(6412);function N(){var e;let t;let[l,a]=(0,j.useState)(!0),[i,o]=(0,j.useState)(!1),c=(0,n.useCart)(),{reactPixel:u}=(0,w.useReactPixel)();return(0,j.useEffect)(()=>{let e=window.location.pathname;if("/"==e&&!l){a(!0);return}"/"!=e&&l&&a(!1)}),(0,j.useEffect)(()=>o(!1),[c.cart]),(null==c?void 0:null===(e=c.cart)||void 0===e?void 0:e.length)>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{open:c.open,setOpen:c.setOpen,courses:c.cart,AddToCart:c.AddToCart,RemoveFromCart:c.RemoveFromCart,SubFromCart:c.SubFromCart}),(0,s.jsxs)("button",{style:{height:"3.2rem",width:"3.2rem",right:"1.5rem",bottom:l?"5.3rem":"2rem",zIndex:"39"},onClick:()=>{i||((0,b.hP)(u,c.cart),o(!0)),c.setOpen(!0)},className:"bg-blue-600 shadow-md fixed rounded-full hover:bg-blue-700",children:[(0,s.jsx)(r.Z,{sx:{width:"1.75rem",height:"1.75rem",fill:"white"}}),(0,s.jsx)("span",{style:{right:"1rem",bottom:l?"7.3rem":"4rem"},className:"text-white text-sm flex items-center justify-center text-center z-40 w-6 h-6 bg-red-500 font-bold fixed p-2 rounded-full",children:(t=0,c.cart.forEach(e=>t+=e.cant),t)})]})]}):(0,s.jsx)(s.Fragment,{})}},2771:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return h}});var s=l(7437),r=l(2265),n=l(7053),a=l(4199),i=l(2057),o=l(5873),c=l(8768);let u=(0,n.ZP)(e=>(0,s.jsx)(i.Z,{disableGutters:!0,elevation:0,square:!0,...e}))(e=>{let{theme:t}=e;return{borderBottom:"1px solid rgba(187, 185, 185, 0.708);","&:before":{display:"none"}}}),d=(0,n.ZP)(e=>(0,s.jsx)(o.Z,{expandIcon:(0,s.jsx)(a.Z,{sx:{fontSize:"0.9rem",fill:"inherit"}}),...e}))(e=>{let{theme:t}=e;return{width:"100%",backgroundColor:"#00000000",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}}),m=(0,n.ZP)(c.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(2),width:"100%"}});function h(e){let{faqs:t}=e,[l,n]=(0,r.useState)(""),a=e=>(t,l)=>{n(!!l&&e)};return(0,s.jsx)("div",{"my-data-aos":"fade-down",className:"w-full h-fit flex items-center justify-center flex-col",children:t.map((e,t)=>(0,s.jsxs)(u,{expanded:l==="panel".concat(t+1),onChange:a("panel".concat(t+1)),sx:{fill:"black",backgroundColor:"transparent",color:"black"},className:" bg-transparent   w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center",children:[(0,s.jsx)(d,{className:"w-full flex","aria-controls":"panel1d-content",id:"panel1d-header",children:(0,s.jsx)("h6",{className:" w-full text-black font-bold",children:e.pergunta})}),(0,s.jsx)(m,{className:"w-full",children:(0,s.jsx)("span",{className:"text-gray-500 w-full text-left",children:e.resposta})})]},t))})}},3715:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var s=l(7437);l(2771);var r=l(601),n=l(7628),a=l(3973),i=l(5037),o=l(2448),c=l(8295),u=l(5851),d=l(3422);function m(e){let{footerInfo:t,links:l}=e;return(0,s.jsx)("section",{id:"footer-section",className:"py-8 flex flex-col justify-center items-center bg-black bg-opacity-90",children:(0,s.jsxs)("div",{className:"flex w-full flex-col items-center lg:flex-row lg:justify-between xl:justify-center xl:gap-x-36 lg:items-end",children:[(0,s.jsxs)("div",{className:"w-full max-w-md lg:max-w-sm flex flex-col gap-y-2 text-left md:text-center items-center lg:text-start lg:items-start ",children:[(0,s.jsx)("img",{alt:t.alt_logo,className:"h-auto w-44",src:t.img_logo}),(0,s.jsx)("span",{className:" text-white ",children:t.descricao}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("span",{className:" text-white",children:t.texto_copyright})})]}),(0,s.jsx)("div",{className:"w-fit max-w-md lg:max-w-sm flex flex-row lg:flex-col flex-wrap mt-6 lg:mt-0 gap-y-1 gap-x-2 items-center justify-start md:justify-center lg:justify-start",children:l.map((e,t)=>(0,s.jsxs)("div",{className:"text-start w-fit lg:w-full",children:[(0,s.jsx)(r.O,{href:e.url,className:" text-white hover:text-orange-500",children:e.texto}),t<l.length-1&&(0,s.jsx)("span",{className:"lg:hidden text-white",children:" / "})]},t))}),(0,s.jsxs)("div",{className:"w-full max-w-md lg:max-w-xs xl:max-w-sm text-start md:text-center items-center mt-6 lg:mt-0 lg:text-start lg:items-start flex flex-col gap-y-2",children:[(0,s.jsxs)("div",{className:"w-full flex flex-col items-start md:items-center lg:items-start gap-y-2",children:[(0,s.jsxs)("a",{href:"tel:".concat(t.telefone),className:"fill-white duration-200 text-white hover:fill-orange-500 hover:text-orange-500",children:[(0,s.jsx)(n.Z,{className:"duration-0 w-6 h-6 fill-inherit"}),(0,s.jsx)("span",{className:" ml-2 text-inherit inline-block",children:t.telefone_formatado})]}),(0,s.jsxs)("a",{href:"mailto:".concat(t.email),className:"fill-white duration-200 text-white hover:fill-orange-500 hover:text-orange-500",children:[(0,s.jsx)(a.Z,{className:"duration-0 w-6 h-6 fill-inherit"}),(0,s.jsx)("span",{className:" ml-2 text-inherit inline-block",children:t.email})]}),(0,s.jsxs)("a",{target:"_blank",href:t.googlemaps_url,className:"fill-white flex duration-200 text-white hover:fill-orange-500 hover:text-orange-500",children:[(0,s.jsx)(i.Z,{className:"duration-0 w-6 h-6 fill-inherit"}),(0,s.jsxs)("span",{className:" ml-2 text-inherit inline-block",children:[t.endereco,(0,s.jsx)("br",{}),"CNPJ: ",t.cnpj]})]})]}),(0,s.jsxs)("div",{className:"w-full flex gap-x-4 mt-1 justify-start pl-8 md:justify-center md:pl-0 lg:justify-start items-center lg:pl-8",children:[!!(null==t?void 0:t.facebook_url)&&(0,s.jsx)("a",{target:"_blank",href:null==t?void 0:t.facebook_url,className:"p-1 hover:bg-orange-500 duration-200 bg-white rounded-full",children:(0,s.jsx)(c.Z,{className:"w-7 h-7"})}),!!(null==t?void 0:t.youtube_url)&&(0,s.jsx)("a",{target:"_blank",href:null==t?void 0:t.youtube_url,className:"p-1 hover:bg-orange-500 duration-200 bg-white rounded-full",children:(0,s.jsx)(u.Z,{className:"w-7 h-7"})}),!!(null==t?void 0:t.instagram_url)&&(0,s.jsx)("a",{target:"_blank",href:null==t?void 0:t.instagram_url,className:"p-1 hover:bg-orange-500 duration-200 bg-white rounded-full",children:(0,s.jsx)(o.Z,{className:"w-7 h-7"})}),!!(null==t?void 0:t.linkedin_url)&&(0,s.jsx)("a",{target:"_blank",href:null==t?void 0:t.linkedin_url,className:"p-1 hover:bg-orange-500 duration-200 bg-white rounded-full",children:(0,s.jsx)(d.Z,{className:"w-7 h-7"})})]})]})]})})}},8783:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return N}});var s=l(7437),r=l(9082),n=l(7231),a=l(1555),i=l(4533),o=l(5968),c=l(601),u=l(8991),d=l(2265),m=function(e){let{classNameContainer:t,className:l,mobile:r,courses:n}=e,[a,i]=(0,d.useState)(!1),[o,c]=(0,d.useState)(!1),m=(0,d.useRef)(null),h=(0,d.useRef)(null),[f,x]=(0,d.useState)(""),[p,g]=(0,d.useState)([]),[v,j]=(0,d.useState)(null);function w(){m.current.focus()}function b(e){if(!(null==p?void 0:p.length))return;let t=p.find(e=>e.id==v),l=p.indexOf(t);(l+=e)>=0&&l<5&&l<p.length?j(p[l].id):j(null)}return(0,d.useEffect)(()=>{if(!f.trim()){g([]);return}g(n.filter(e=>e.text.trim().toLowerCase().includes(f.trim().toLowerCase())))},[f]),(0,d.useEffect)(()=>{if(!(null==p?void 0:p.length)){j(null);return}if(null!=v&&!p.find(e=>e.id==v)){j(p[0].id);return}},[p]),(0,d.useEffect)(()=>{var e,t,l,s,n,i;if(!r&&(null==h?void 0:h.current)){if(!a&&!o){if(null===(s=h.current.classList)||void 0===s?void 0:s.contains("w-10"))return;null===(n=h.current.classList)||void 0===n||n.remove("w-72"),null===(i=h.current.classList)||void 0===i||i.add("w-10");return}null!==(e=h.current.classList)&&void 0!==e&&e.contains("w-72")||(null===(t=h.current.classList)||void 0===t||t.remove("w-10"),null===(l=h.current.classList)||void 0===l||l.add("w-72"))}},[a,o]),(0,s.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),window.location.href="/cursos?search="+((null==m?void 0:null===(t=m.current)||void 0===t?void 0:t.value)||"")},ref:h,onClick:w,className:"relative items-center flex cursor-pointer transition-all duration-300 text-black "+t,children:[(0,s.jsx)("input",{ref:m,"data-group":"search-group",placeholder:"Buscar",onMouseEnter:()=>c(!0),onMouseLeave:e=>{var t;(null==e?void 0:null===(t=e.relatedTarget)||void 0===t?void 0:t.getAttribute("data-group"))!="search-group"&&c(!1)},onFocus:e=>{e.preventDefault(),e.stopPropagation(),i(!0)},onBlur:e=>{var t;(null==e?void 0:null===(t=e.relatedTarget)||void 0===t?void 0:t.getAttribute("data-group"))!="search-group"&&(e.preventDefault(),e.stopPropagation(),j(null),i(!1))},onKeyDown:function(e){if("ArrowDown"==e.key)return e.preventDefault(),b(1);if("ArrowUp"==e.key)return e.preventDefault(),b(-1);if("Enter"==e.key&&v){e.preventDefault();let t=n.find(e=>e.id==v);t&&(window.location.href="/cursos"+t.url)}},onInput:e=>x(e.target.value),type:"text",className:"rounded-md w-full ".concat(!r&&"cursor-pointer"," focus:cursor-text px-2 pl-8 py-1 outline-none focus:shadow-sm text-base ")+l}),(0,s.jsx)(u.Z,{onMouseEnter:()=>c(!0),onMouseLeave:e=>{var t;(null==e?void 0:null===(t=e.relatedTarget)||void 0===t?void 0:t.getAttribute("data-group"))!="search-group"&&c(!1)},onClick:w,className:"text-black w-5 h-5 absolute transition-all duration-300 left-2.5 cursor-pointer"}),a&&p.length>0&&(0,s.jsx)("div",{className:"absolute z-50 mt-1 rounded-sm shadow-md bg-white top-full flex flex-col w-full",children:p.map((e,t)=>t>4?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("a",{onClick:()=>i(!0),"data-group":"search-group",href:"/cursos"+e.url,className:"hover:bg-gray-300 px-4 py-2 ".concat(v==e.id&&"bg-gray-300"," ").concat(4==t||t==p.length-1&&"rounded-b-sm"," ").concat(0==t&&"rounded-t-sm"),children:(0,s.jsx)("span",{children:e.text})},e.id))})]})},h=l(8163),f=l(6227),x=l(3409),p=l(618),g=l(8793),v=l(1344),j=l(811),w=l(8727);function b(e){let{courses:t,routes:l}=e,[r,n]=(0,d.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.h,{className:"pr-4",children:(0,s.jsx)(m,{courses:t,mobile:!0})}),l.map((e,t)=>{var l;return(null==e?void 0:null===(l=e.collapse)||void 0===l?void 0:l.length)?(0,s.jsxs)(j.h,{className:"mt-4",children:[(0,s.jsx)(c.O,{onClick:t=>{t.preventDefault(),r==e.name?n(""):n(e.name)},className:"text-white w-full text-xl",href:"#",children:(0,s.jsxs)("span",{className:"flex gap-x-2 items-center",children:[(0,s.jsx)("span",{children:e.name}),r==e.name?(0,s.jsx)(v.Z,{className:"w-6 h-6 fill-white"}):(0,s.jsx)(w.Z,{className:"w-6 h-6 fill-white"})]})}),(0,s.jsx)("div",{className:"".concat("Sobre"==r?"pl-2 py-1 h-fit":"h-0 p-0"," flex flex-col gap-y-1 h-0 overflow-hidden"),children:e.collapse[0].collapse.map((e,l)=>(0,s.jsx)(c.O,{className:"text-white",href:e.route,children:e.name},l+t+1))})]},t):(0,s.jsx)(j.h,{className:"mt-4",children:(0,s.jsx)(c.O,{className:"text-white w-full text-xl",href:e.route,children:e.name})},t)})]})}function N(e){let{routes:t,courses:l,urlLogo:u,altLogo:j,urlButton:w,textButton:N}=e,[y,k]=(0,d.useState)(!1),[Z,C]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{setTimeout(()=>{C(!y)},500)},[y]),(0,s.jsxs)(r.R,{maxWidth:"xl",isBlurred:!1,shouldHideOnScroll:Z,className:"bg-black fixed bg-opacity-90 top-0 text-white py-1 sm:py-2 h-[150px] sm:h-[80px]",onMenuOpenChange:k,children:[(0,s.jsxs)("div",{className:"flex flex-col w-full",children:[(0,s.jsxs)(n.U,{className:"w-full",children:[(0,s.jsx)(a.H,{children:(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{width:120,height:50,src:u,alt:j})})}),(0,s.jsx)("a",{href:w,target:"_blank",className:"hidden sm:block lg:hidden",children:(0,s.jsx)(h.A,{variant:"shadow",className:"bg-white uppercase font-bold",children:N})}),(0,s.jsx)(i.L,{"aria-label":y?"Fechar menu":"Abrir menu",className:"lg:hidden"})]}),(0,s.jsx)("a",{href:w,target:"_blank",className:"w-full sm:hidden",children:(0,s.jsx)(h.A,{variant:"shadow",className:"bg-white w-full uppercase font-bold",children:N})})]}),(0,s.jsxs)(n.U,{className:"hidden lg:flex gap-4 gap-x-8",justify:"center",children:[(0,s.jsx)(m,{courses:l}),t.map((e,t)=>{var l;return(null==e?void 0:null===(l=e.collapse)||void 0===l?void 0:l.length)?(0,s.jsxs)(f.F,{children:[(0,s.jsx)(x.S,{children:(0,s.jsx)(h.A,{disableRipple:!0,className:"p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-base",radius:"sm",endContent:(0,s.jsx)(v.Z,{className:"w-4 h-4 fill-white"}),variant:"light",children:e.name})}),(0,s.jsx)(p.a,{"aria-label":"menu",children:e.collapse[0].collapse.map((e,l)=>(0,s.jsx)(g.W,{children:(0,s.jsx)(c.O,{className:"text-slate-900 w-full",href:e.route,children:e.name})},t+l+1))})]},t):(0,s.jsx)(o.k,{children:(0,s.jsx)(c.O,{className:"text-white text-base",href:e.route,children:e.name})},t)})]}),(0,s.jsx)("a",{href:w,target:"_blank",className:"hidden lg:block ml-12",children:(0,s.jsx)(h.A,{variant:"shadow",className:"bg-white font-bold uppercase",children:N})}),(0,s.jsx)("div",{className:"bg-black flex flex-col gap-y-3  bg-opacity-90 fixed ".concat(y?"h-fit p-6 pt-2 opacity-100":"h-0 p-0 opacity-0"," left-0 top-[150px] sm:top-[80px] w-screen list-none text-white overflow-hidden duration-500 ease-in-out transition-all"),children:(0,s.jsx)(b,{courses:l,routes:t})})]})}},8139:function(e,t,l){"use strict";l.r(t),l.d(t,{FacebookPixel:function(){return i}});var s=l(2265),r=l(4033),n=l(6412),a=l(2927);let i=()=>{let e=(0,r.usePathname)(),t=(0,r.useSearchParams)(),{setReactPixel:i,reactPixel:o}=(0,a.useReactPixel)();return(0,s.useEffect)(()=>{if(o){o.pageView();return}l.e(894).then(l.t.bind(l,894,23)).then(e=>e.default).then(e=>{e.init("".concat(n.Cz)),e.pageView(),i(e)})},[e,t]),null};t.default=i},3054:function(){},1645:function(){}},function(e){e.O(0,[776,163,202,659,523,937,65,582,740,911,271,971,864,744],function(){return e(e.s=130)}),_N_E=e.O()}]);