(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{307:function(e,t,n){Promise.resolve().then(n.bind(n,2681)),Promise.resolve().then(n.bind(n,6328))},9763:function(e,t,n){"use strict";n.d(t,{T5:function(){return i}});var s=n(2601);let i="https://wisg21tz2f.execute-api.sa-east-1.amazonaws.com/dev/",a=s.env.STRAPI_URL,r=s.env.STRAPI_TOKEN,l={"Content-Type":"Application/Json",Authorization:"Bearer ".concat(r)},c=async function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?populate=*",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&pagination[pageSize]=1000000",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;try{let r=a+e+n+s+i;t=await axios.get(r,{timeout:6e4,headers:l})}catch(t){if(++r<5)return await c(e,n,s,i,r)}return t.data.data}},2681:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(7437),i=n(6507),a=n(8874),r=n(4081),l=n(819),c=n(715),o=n(5550),d=n(9804),h=n(6882),m=n(2923),x=n(8163),u=n(9441),f=n(2265),j=n(8786),g=n(9222),Z=n(9763);let p=(0,f.forwardRef)(function(e,t){let{onChange:n,...i}=e;return(0,s.jsx)(u.oc,{...i,mask:"(00) 0000-0000",definitions:{"#":/[1-9]/},inputRef:t,onAccept:t=>n({target:{name:e.name,value:t}}),overwrite:!0})});function v(e){let{text:t}=e,[n,u]=(0,f.useState)({name:"",phone:"",age:"",course:"",email:"",city:"",state:"",message:""}),[v,w]=(0,f.useState)({name:"",phone:"",age:"",course:"",email:"",city:"",state:"",message:""}),C=["name","phone","age","email","city","state","message"],[y,N]=(0,f.useState)(!1),[b,k]=(0,f.useState)(!1),[W,P]=(0,f.useState)(!1),[E,S]=(0,f.useState)(!1);function A(e){u({...n,[e.target.name]:e.target.value}),w({...v,[e.target.name]:(0,j.l)(e.target.value)})}async function _(e){let t,s;e.preventDefault(),P(!0);let i=(t={},s=!1,Object.keys(n).forEach(e=>{if(C.includes(e)){let i=(0,j.l)(n[e]);i&&(s=!0),t[e]=i}}),w(t),s);if(!i){S(!0);try{await g.Z.post(Z.T5+"send-email",n),k(!0)}catch(e){N(!0)}finally{S(!1)}}}return(0,s.jsxs)("div",{className:"w-full h-fit max-w-4xl",children:[E&&(0,s.jsx)("div",{className:"w-screen z-40  h-screen fixed top-0 left-0 flex justify-center items-center",children:(0,s.jsx)(h.Z,{sx:{color:"#000"}})}),(0,s.jsx)(m.Z,{open:b,autoHideDuration:6e3,onClose:()=>k(!1),children:(0,s.jsx)(d.Z,{onClose:()=>k(!1),severity:"success",sx:{width:"100%",backgroundColor:"green"},variant:"filled",elevation:6,children:"Email enviado com sucesso!"})}),(0,s.jsx)(m.Z,{open:y,autoHideDuration:6e3,onClose:()=>N(!1),children:(0,s.jsx)(d.Z,{onClose:()=>N(!1),severity:"error",sx:{width:"100%"},variant:"filled",elevation:6,children:"Ocorreu um erro inesperado, tentei se comunicar por whatsapp"})}),(0,s.jsx)("form",{className:"w-full",children:(0,s.jsx)(i.Z,{width:"100%",component:"form",method:"post",className:"px-0",autoComplete:"off",children:(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,s.jsx)(a.ZP,{item:!0,xs:12,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.name),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"name",children:"Nome Completo"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"name",onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.name})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.phone),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"phone",children:"Telefone"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"phone",onChange:A,inputComponent:p}),W&&(0,s.jsx)(o.Z,{children:v.phone})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.age),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"age",children:"Idade"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"age",type:"number",onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.age})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.course),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"course",children:"Curso"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"course",onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.course})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.email),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"email",children:"Email"}),(0,s.jsx)(c.Z,{fullWidth:!0,type:"email",name:"email",onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.email})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.city),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"city",children:"Cidade"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"city",onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.city})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.state),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{htmlFor:"state",children:"Estado"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"state",onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.state})]})}),(0,s.jsx)(a.ZP,{item:!0,xs:12,children:(0,s.jsxs)(r.Z,{error:!!(W&&v.message),variant:"standard",fullWidth:!0,children:[(0,s.jsx)(l.Z,{sx:{paddingBottom:"2px"},htmlFor:"message",children:"Mensagem"}),(0,s.jsx)(c.Z,{fullWidth:!0,name:"message",rows:6,multiline:!0,onChange:A}),W&&(0,s.jsx)(o.Z,{children:v.message})]})})]}),(0,s.jsx)(a.ZP,{container:!0,item:!0,justifyContent:"center",xs:12,my:2,children:(0,s.jsx)(x.A,{variant:"shadow",className:"w-full bg-black uppercase font-bold text-white",onClick:e=>{_(e)},children:t||"Enviar"})})]})})})]})}},6328:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(7437),i=n(3740),a=n(876),r=n(8290);function l(e){let{info:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{width:"100%",height:"50vh",minHeight:"500px",maxHeight:"550px",backgroundImage:'url("'.concat(t.fundo,'")'),backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed",textAlign:"center"},children:(0,s.jsxs)("div",{className:"w-full h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center pt-[150px] sm:pt-[80px]",children:[(0,s.jsx)(r.Z,{font:"Custom",variant:"h1",className:"text-white",children:t.titulo}),(0,s.jsx)("span",{className:"text-white mt-2",children:t.texto}),(0,s.jsxs)("div",{className:"mt-4 text-center justify-center",children:[(0,s.jsxs)("div",{className:"flex justify-center",children:[(0,s.jsx)(i.Z,{sx:{fill:"white",width:"2rem",height:"2rem",marginRight:"0.25rem"}}),(0,s.jsx)(r.Z,{font:"Custom",variant:"h3",className:"text-2xl text-white",children:"Telefone"})]}),(0,s.jsx)("span",{className:"text-white text-base",children:(0,s.jsx)("a",{href:"tel:".concat(t.telefone),children:t.telefone_formatado})}),(0,s.jsxs)("div",{className:"flex text-center justify-center  mt-4",children:[(0,s.jsx)(a.Z,{sx:{fill:"white",width:"2rem",height:"2rem",marginRight:"0.25rem"}}),(0,s.jsx)(r.Z,{font:"Custom",variant:"h3",className:"text-2xl text-white",children:"Email"})]}),(0,s.jsx)("span",{className:"text-white text-base",children:(0,s.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})})]})]})})})}},8290:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(7437),i=n(3317),a=n.n(i);function r(e){let{variant:t="h2",font:n="Custom",className:i,onClick:r,children:l,id:c,style:o}=e,d=a().className;switch(t){case"h1":return(0,s.jsx)("h1",{style:o,id:c,onClick:r,className:d+" "+i,children:l});case"h2":return(0,s.jsx)("h2",{style:o,id:c,onClick:r,className:d+" "+i,children:l});case"h3":return(0,s.jsx)("h3",{style:o,id:c,onClick:r,className:d+" "+i,children:l});case"h4":return(0,s.jsx)("h4",{style:o,id:c,onClick:r,className:d+" "+i,children:l});case"h5":return(0,s.jsx)("h5",{style:o,id:c,onClick:r,className:d+" "+i,children:l});default:return(0,s.jsx)("span",{style:o,id:c,onClick:r,className:d+" "+i,children:l})}}},8786:function(e,t,n){"use strict";n.d(t,{l:function(){return s},o:function(){return i}});let s=e=>e&&e.trim()?"":"Campo obrigat\xf3rio",i=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?"":"Email inv\xe1lido"}},function(e){e.O(0,[776,163,202,659,523,937,65,702,971,864,744],function(){return e(e.s=307)}),_N_E=e.O()}]);