(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{3318:function(e,r,n){Promise.resolve().then(n.bind(n,7447)),Promise.resolve().then(n.bind(n,9773))},4560:function(e,r,n){"use strict";n.d(r,{T:function(){return t}});let t="http://localhost:3001/api/"},9773:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return v}});var t=n(7437),i=n(352),a=n(8874),s=n(4081),l=n(819),o=n(715),d=n(5550),c=n(9804),h=n(6882),m=n(7292),u=n(3953),x=n(9441),f=n(2265),g=n(1414),j=n(9222),Z=n(4560),y=n(3434);let p=(0,f.forwardRef)(function(e,r){let{onChange:n,...i}=e;return(0,t.jsx)(x.oc,{...i,mask:"(#00) 000-0000",definitions:{"#":/[1-9]/},inputRef:r,onAccept:r=>n({target:{name:e.name,value:r}}),overwrite:!0})});function v(){let[e,r]=(0,f.useState)({name:"",phone:"",age:"",course:"",email:"",city:"",state:"",message:""}),[n,x]=(0,f.useState)({name:"",phone:"",age:"",course:"",email:"",city:"",state:"",message:""}),v=["name","phone","age","email","city","state","message"],[w,b]=(0,f.useState)(!1),[C,k]=(0,f.useState)(!1),[N,W]=(0,f.useState)(!1),[P,S]=(0,f.useState)(!1);function E(t){r({...e,[t.target.name]:t.target.value}),x({...n,[t.target.name]:(0,g.l)(t.target.value)})}async function F(r){let n,t;r.preventDefault(),W(!0);let i=(n={},t=!1,Object.keys(e).forEach(r=>{if(v.includes(r)){let i=(0,g.l)(e[r]);i&&(t=!0),n[r]=i}}),x(n),t);if(!i){S(!0);try{await j.Z.post(Z.T+"send-email",e),k(!0)}catch(e){b(!0)}finally{S(!1)}}}return(0,t.jsxs)("div",{className:"w-full h-fit max-w-4xl",children:[P&&(0,t.jsx)("div",{className:"w-screen z-40  h-screen fixed top-0 left-0 flex justify-center items-center",children:(0,t.jsx)(h.Z,{sx:{color:y.default.dark.main}})}),(0,t.jsx)(m.Z,{open:C,autoHideDuration:6e3,onClose:()=>k(!1),children:(0,t.jsx)(c.Z,{onClose:()=>k(!1),severity:"success",sx:{width:"100%",backgroundColor:"green"},variant:"filled",elevation:6,children:"Email enviado com sucesso!"})}),(0,t.jsx)(m.Z,{open:w,autoHideDuration:6e3,onClose:()=>b(!1),children:(0,t.jsx)(c.Z,{onClose:()=>b(!1),severity:"error",sx:{width:"100%"},variant:"filled",elevation:6,children:"Ocorreu um erro inesperado, tentei se comunicar por whatsapp"})}),(0,t.jsx)("form",{className:"w-full",children:(0,t.jsx)(i.Z,{width:"100%",component:"form",method:"post",className:"px-0",autoComplete:"off",children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.name),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"name",children:"Nome Completo"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"name",onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.name})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.phone),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"phone",children:"Telefone"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"phone",onChange:E,inputComponent:p}),N&&(0,t.jsx)(d.Z,{children:n.phone})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.age),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"age",children:"Idade"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"age",type:"number",onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.age})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.course),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"course",children:"Curso"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"course",onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.course})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.email),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"email",children:"Email"}),(0,t.jsx)(o.Z,{fullWidth:!0,type:"email",name:"email",onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.email})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.city),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"city",children:"Cidade"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"city",onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.city})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.state),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{htmlFor:"state",children:"Estado"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"state",onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.state})]})}),(0,t.jsx)(a.ZP,{item:!0,xs:12,children:(0,t.jsxs)(s.Z,{error:!!(N&&n.message),variant:"standard",fullWidth:!0,children:[(0,t.jsx)(l.Z,{sx:{paddingBottom:"2px"},htmlFor:"message",children:"Mensagem"}),(0,t.jsx)(o.Z,{fullWidth:!0,name:"message",rows:6,multiline:!0,onChange:E}),N&&(0,t.jsx)(d.Z,{children:n.message})]})})]}),(0,t.jsx)(a.ZP,{container:!0,item:!0,justifyContent:"center",xs:12,my:2,children:(0,t.jsx)(u.Z,{href:"#",variant:"gradient",color:"dark",fullWidth:!0,onClick:e=>{F(e)},children:"Enviar"})})]})})})]})}},7447:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return l}});var t=n(7437),i=n(4703),a=n(3740),s=n(876);function l(){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{style:{width:"100%",height:"45vh",minHeight:"460px",maxHeight:"500px",backgroundImage:'url("/bg1.jpeg")',backgroundSize:"cover",backgroundPosition:"center",textAlign:"center"},children:(0,t.jsxs)("div",{className:"w-full h-full pb-12 bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-end",children:[(0,t.jsx)(i.Z,{variant:"h1",color:"white",sx:e=>{let{breakpoints:r,typography:{size:n}}=e;return{[r.down("md")]:{fontSize:n["4xl"]}}},children:"Fale Conosco"}),(0,t.jsx)(i.Z,{variant:"body1",color:"white",mt:1,children:"Atendemos todo o Brasil"}),(0,t.jsxs)("div",{className:"mt-4 text-center justify-center",children:[(0,t.jsxs)("div",{className:"flex justify-center",children:[(0,t.jsx)(a.Z,{className:"fill-white w-8 h-8"}),(0,t.jsx)(i.Z,{variant:"h3",color:"white",className:"text-2xl",sx:e=>{let{breakpoints:r,typography:{size:n}}=e;return{[r.down("md")]:{fontSize:n["4xl"]}}},children:"Telefone"})]}),(0,t.jsx)(i.Z,{variant:"body2",color:"white",children:(0,t.jsx)("a",{href:"tel:+554630554355",children:"(46) 3055-4355"})}),(0,t.jsxs)("div",{className:"flex text-center justify-center  mt-4",children:[(0,t.jsx)(s.Z,{className:"w-8 h-8 fill-white"}),(0,t.jsx)(i.Z,{variant:"h3",color:"white",className:"text-2xl",sx:e=>{let{breakpoints:r,typography:{size:n}}=e;return{[r.down("md")]:{fontSize:n["4xl"]}}},children:"Email"})]}),(0,t.jsx)(i.Z,{variant:"body2",color:"white",children:(0,t.jsx)("a",{href:"mailto:grupovisualfb@gmail.com",children:"grupovisualfb@gmail.com"})})]})]})})})}},352:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t=n(7437),i=n(2265),a=n(4275),s=n.n(a),l=n(9227),o=(0,n(5843).ZP)(l.Z)(e=>{let{theme:r,ownerState:n}=e,{palette:t,functions:i,borders:a,boxShadows:s}=r,{variant:l,bgColor:o,color:d,opacity:c,borderRadius:h,shadow:m,coloredShadow:u}=n,{gradients:x,grey:f,white:g}=t,{linearGradient:j}=i,{borderRadius:Z}=a,{colored:y}=s,p={"grey-100":f[100],"grey-200":f[200],"grey-300":f[300],"grey-400":f[400],"grey-500":f[500],"grey-600":f[600],"grey-700":f[700],"grey-800":f[800],"grey-900":f[900]},v=["transparent","white","black","primary","secondary","info","success","warning","error","light","dark","text","grey-100","grey-200","grey-300","grey-400","grey-500","grey-600","grey-700","grey-800","grey-900"],w=o;w="gradient"===l?["primary","secondary","info","success","warning","error","dark","light"].find(e=>e===o)?j(x[o].main,x[o].state):g.main:v.find(e=>e===o)?t[o]?t[o].main:p[o]:o;let b=d;v.find(e=>e===d)&&(b=t[d]?t[d].main:p[d]);let C=h;["xs","sm","md","lg","xl","xxl","section"].find(e=>e===h)&&(C=Z[h]);let k="none";return["xs","sm","md","lg","xl","xxl","inset"].find(e=>e===m)?k=s[m]:u&&(k=y[u]?y[u]:"none"),{opacity:c,background:w,color:b,borderRadius:C,boxShadow:k}});let d=(0,i.forwardRef)((e,r)=>{let{variant:n,bgColor:i,color:a,opacity:s,borderRadius:l,shadow:d,coloredShadow:c,...h}=e;return(0,t.jsx)(o,{...h,ref:r,ownerState:{variant:n,bgColor:i,color:a,opacity:s,borderRadius:l,shadow:d,coloredShadow:c}})});d.defaultProps={variant:"contained",bgColor:"transparent",color:"dark",opacity:1,borderRadius:"none",shadow:"none",coloredShadow:"none"},d.propTypes={variant:s().oneOf(["contained","gradient"]),bgColor:s().string,color:s().string,opacity:s().number,borderRadius:s().string,shadow:s().string,coloredShadow:s().oneOf(["primary","secondary","info","success","warning","error","light","dark","none"])},d.displayName="MKBox";var c=d},1414:function(e,r,n){"use strict";n.d(r,{l:function(){return t},o:function(){return i}});let t=e=>e&&e.trim()?"":"Campo obrigat\xf3rio",i=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?"":"Email inv\xe1lido"}},function(e){e.O(0,[354,998,699,75,405,466,161,971,596,744],function(){return e(e.s=3318)}),_N_E=e.O()}]);