(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{3318:function(e,r,n){Promise.resolve().then(n.bind(n,7447)),Promise.resolve().then(n.bind(n,3501))},3501:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return y}});var a=n(7437),t=n(352),i=n(8874),s=n(4081),l=n(819),o=n(715),d=n(5550),c=n(9804),m=n(6882),h=n(7292),x=n(3953),u=n(9441),f=n(2265),g=n(1414),j=n(9222),Z=n(3434);let p=(0,f.forwardRef)(function(e,r){let{onChange:n,...t}=e;return(0,a.jsx)(u.oc,{...t,mask:"(#00) 000-0000",definitions:{"#":/[1-9]/},inputRef:r,onAccept:r=>n({target:{name:e.name,value:r}}),overwrite:!0})});function y(){let[e,r]=(0,f.useState)({name:"",phone:"",age:"",course:"",email:"",city:"",state:"",message:""}),[n,u]=(0,f.useState)({name:"",phone:"",age:"",course:"",email:"",city:"",state:"",message:""}),y=["name","phone","age","email","city","state","message"],[v,w]=(0,f.useState)(!1),[C,b]=(0,f.useState)(!1),[k,N]=(0,f.useState)(!1),[W,P]=(0,f.useState)(!1);function S(a){r({...e,[a.target.name]:a.target.value}),u({...n,[a.target.name]:(0,g.l)(a.target.value)})}async function E(r){let n,a;r.preventDefault(),N(!0);let t=(n={},a=!1,Object.keys(e).forEach(r=>{if(y.includes(r)){let t=(0,g.l)(e[r]);t&&(a=!0),n[r]=t}}),u(n),a);if(!t){P(!0);try{await j.Z.post("https://grupo-visual-api.vercel.app/api/send-email",e),b(!0)}catch(e){w(!0)}finally{P(!1)}}}return(0,a.jsxs)("div",{className:"w-full h-fit max-w-4xl",children:[W&&(0,a.jsx)("div",{className:"w-screen z-40  h-screen fixed top-0 left-0 flex justify-center items-center",children:(0,a.jsx)(m.Z,{sx:{color:Z.default.dark.main}})}),(0,a.jsx)(h.Z,{open:C,autoHideDuration:6e3,onClose:()=>b(!1),children:(0,a.jsx)(c.Z,{onClose:()=>b(!1),severity:"success",sx:{width:"100%",backgroundColor:"green"},variant:"filled",elevation:6,children:"Email enviado com sucesso!"})}),(0,a.jsx)(h.Z,{open:v,autoHideDuration:6e3,onClose:()=>w(!1),children:(0,a.jsx)(c.Z,{onClose:()=>w(!1),severity:"error",sx:{width:"100%"},variant:"filled",elevation:6,children:"Ocorreu um erro inesperado, tentei se comunicar por whatsapp"})}),(0,a.jsx)("form",{className:"w-full",children:(0,a.jsx)(t.Z,{width:"100%",component:"form",method:"post",className:"px-0",autoComplete:"off",children:(0,a.jsxs)(t.Z,{children:[(0,a.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,a.jsx)(i.ZP,{item:!0,xs:12,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.name),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"name",children:"Nome Completo"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"name",onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.name})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.phone),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"phone",children:"Telefone"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"phone",onChange:S,inputComponent:p}),k&&(0,a.jsx)(d.Z,{children:n.phone})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.age),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"age",children:"Idade"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"age",type:"number",onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.age})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.course),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"course",children:"Curso"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"course",onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.course})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.email),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"email",children:"Email"}),(0,a.jsx)(o.Z,{fullWidth:!0,type:"email",name:"email",onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.email})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.city),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"city",children:"Cidade"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"city",onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.city})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.state),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{htmlFor:"state",children:"Estado"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"state",onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.state})]})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,children:(0,a.jsxs)(s.Z,{error:!!(k&&n.message),variant:"standard",fullWidth:!0,children:[(0,a.jsx)(l.Z,{sx:{paddingBottom:"2px"},htmlFor:"message",children:"Mensagem"}),(0,a.jsx)(o.Z,{fullWidth:!0,name:"message",rows:6,multiline:!0,onChange:S}),k&&(0,a.jsx)(d.Z,{children:n.message})]})})]}),(0,a.jsx)(i.ZP,{container:!0,item:!0,justifyContent:"center",xs:12,my:2,children:(0,a.jsx)(x.Z,{href:"#",variant:"gradient",color:"dark",fullWidth:!0,onClick:e=>{E(e)},children:"Enviar"})})]})})})]})}},7447:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var a=n(7437),t=n(4703),i=n(3434),s=n(3740),l=n(876);function o(){return(0,a.jsxs)("div",{className:"w-fit min-w-fit max-w-full h-fit lg:mb-36",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Z,{variant:"h1",className:"text-4xl",color:i.default.dark.main,textGradient:!0,children:"Fale Conosco"}),(0,a.jsx)(t.Z,{variant:"body1",color:i.default.dark.main,mt:.5,children:"Atendemos todo o Brasil"})]}),(0,a.jsxs)("div",{className:"mt-8",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(s.Z,{className:"w-8 h-8"}),(0,a.jsx)(t.Z,{variant:"h3",color:i.default.dark.main,textGradient:!0,className:"ml-4 text-2xl",sx:e=>{let{breakpoints:r,typography:{size:n}}=e;return{[r.down("md")]:{fontSize:n["4xl"]}}},children:"Telefone"})]}),(0,a.jsx)(t.Z,{variant:"body2",color:i.default.dark.main,className:"ml-12",children:(0,a.jsx)("a",{href:"tel:+554630554355",children:"(46) 3055-4355"})})]}),(0,a.jsxs)("div",{className:"flex items-center mt-8",children:[(0,a.jsx)(l.Z,{className:"w-8 h-8"}),(0,a.jsx)(t.Z,{variant:"h3",color:i.default.dark.main,textGradient:!0,className:"ml-4 text-2xl",sx:e=>{let{breakpoints:r,typography:{size:n}}=e;return{[r.down("md")]:{fontSize:n["4xl"]}}},children:"Email"})]}),(0,a.jsx)(t.Z,{variant:"body2",color:i.default.dark.main,className:"ml-12",children:(0,a.jsx)("a",{href:"mailto:grupovisualfb@gmail.com",children:"grupovisualfb@gmail.com"})})]})}},352:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var a=n(7437),t=n(2265),i=n(4275),s=n.n(i),l=n(9227),o=(0,n(5843).ZP)(l.Z)(e=>{let{theme:r,ownerState:n}=e,{palette:a,functions:t,borders:i,boxShadows:s}=r,{variant:l,bgColor:o,color:d,opacity:c,borderRadius:m,shadow:h,coloredShadow:x}=n,{gradients:u,grey:f,white:g}=a,{linearGradient:j}=t,{borderRadius:Z}=i,{colored:p}=s,y={"grey-100":f[100],"grey-200":f[200],"grey-300":f[300],"grey-400":f[400],"grey-500":f[500],"grey-600":f[600],"grey-700":f[700],"grey-800":f[800],"grey-900":f[900]},v=["transparent","white","black","primary","secondary","info","success","warning","error","light","dark","text","grey-100","grey-200","grey-300","grey-400","grey-500","grey-600","grey-700","grey-800","grey-900"],w=o;w="gradient"===l?["primary","secondary","info","success","warning","error","dark","light"].find(e=>e===o)?j(u[o].main,u[o].state):g.main:v.find(e=>e===o)?a[o]?a[o].main:y[o]:o;let C=d;v.find(e=>e===d)&&(C=a[d]?a[d].main:y[d]);let b=m;["xs","sm","md","lg","xl","xxl","section"].find(e=>e===m)&&(b=Z[m]);let k="none";return["xs","sm","md","lg","xl","xxl","inset"].find(e=>e===h)?k=s[h]:x&&(k=p[x]?p[x]:"none"),{opacity:c,background:w,color:C,borderRadius:b,boxShadow:k}});let d=(0,t.forwardRef)((e,r)=>{let{variant:n,bgColor:t,color:i,opacity:s,borderRadius:l,shadow:d,coloredShadow:c,...m}=e;return(0,a.jsx)(o,{...m,ref:r,ownerState:{variant:n,bgColor:t,color:i,opacity:s,borderRadius:l,shadow:d,coloredShadow:c}})});d.defaultProps={variant:"contained",bgColor:"transparent",color:"dark",opacity:1,borderRadius:"none",shadow:"none",coloredShadow:"none"},d.propTypes={variant:s().oneOf(["contained","gradient"]),bgColor:s().string,color:s().string,opacity:s().number,borderRadius:s().string,shadow:s().string,coloredShadow:s().oneOf(["primary","secondary","info","success","warning","error","light","dark","none"])},d.displayName="MKBox";var c=d},1414:function(e,r,n){"use strict";n.d(r,{l:function(){return a},o:function(){return t}});let a=e=>e&&e.trim()?"":"Campo obrigat\xf3rio",t=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?"":"Email inv\xe1lido"}},function(e){e.O(0,[422,699,75,361,530,161,971,596,744],function(){return e(e.s=3318)}),_N_E=e.O()}]);