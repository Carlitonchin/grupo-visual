(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{519:function(e,t,l){Promise.resolve().then(l.bind(l,5575)),Promise.resolve().then(l.bind(l,4756)),Promise.resolve().then(l.bind(l,7023)),Promise.resolve().then(l.bind(l,6486)),Promise.resolve().then(l.bind(l,8976)),Promise.resolve().then(l.bind(l,5881)),Promise.resolve().then(l.bind(l,6630)),Promise.resolve().then(l.bind(l,7476)),Promise.resolve().then(l.bind(l,2771)),Promise.resolve().then(l.bind(l,7782)),Promise.resolve().then(l.bind(l,8538))},5575:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var n=l(7437),a=l(6365),r=l.n(a);l(3023);var s=l(2265);function i(e){let{children:t}=e;return(0,s.useEffect)(()=>{let e=document.querySelectorAll("*[data-aos-delay]"),t=document.querySelectorAll("*[my-data-aos]");for(let t of e){let e=window.innerWidth;e<1e3&&t.setAttribute("data-aos-delay",0)}for(let e of t)e.setAttribute("data-aos",e.getAttribute("my-data-aos"));r().init({once:!0})},[]),(0,n.jsx)(n.Fragment,{children:t})}},2927:function(e,t,l){"use strict";l.r(t),l.d(t,{ReactPixelProvider:function(){return s},useReactPixel:function(){return i}});var n=l(7437),a=l(2265);let r=(0,a.createContext)({setReactPixel:e=>{},reactPixel:null}),s=e=>{let{children:t}=e,[l,s]=(0,a.useState)(null);return(0,n.jsx)(r.Provider,{value:{reactPixel:l,setReactPixel:s},children:t})},i=()=>(0,a.useContext)(r)},4756:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return u}});var n=l(7437),a=l(3050),r=l(1068),s=l(2899),i=l(2265),c=l(8538),o=l(8290),d=0;function u(e){let{courses:t,title:l,buttonUrl:u,buttonText:f,buttonExtern:m}=e,x=(0,i.useRef)(null),[h,v]=(0,i.useState)(!1),[p,g]=(0,i.useState)(!1),[w,y]=(0,i.useState)(!0);function b(){v(!1)}function j(e){let t=x.current.scrollWidth-x.current.clientWidth;g(e>0),y(e<t)}return(0,i.useEffect)(()=>(window.addEventListener("mouseup",b),window.addEventListener("touchend",b),()=>{window.removeEventListener("mouseup",b),window.removeEventListener("touchend",b)}),[]),(0,i.useEffect)(()=>{let e=document.querySelector(".item-carousel-3");d=(null==e?void 0:e.clientWidth)||100}),(0,n.jsxs)("section",{className:"flex flex-col justify-center items-center",children:[(0,n.jsx)("div",{"data-aos-delay":"200","my-data-aos":"fade-down",children:(0,n.jsx)(o.Z,{className:"text-center w-full",variant:"h2",children:l})}),(0,n.jsxs)("div",{className:"relative flex items-center w-full justify-center mt-8",children:[(0,n.jsx)(r.Z,{sx:{width:"2.5rem",height:"2.5rem",display:p?"block":"none",left:"-0.45rem"},onClick:function(){let e=x.current.scrollLeft-d;e<d/10&&(e=0),e=Math.max(e,0),x.current.scrollLeft=e,setTimeout(()=>j(e),300)},className:"rounded-full bg-gray-300 bg-opacity-90 cursor-pointer absolute z-10 duration-500 hover:scale-105 "}),(0,n.jsx)("div",{ref:x,className:(h?"cursor-grab auto-scroll":"")+" smooth-scroll whitespace-nowrap overflow-hidden w-full z-0  ",children:t.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.default,{"my-data-aos":"flip-left",img:e.img,text:e.text,stars:e.stars,url:e.url,category:e.category,index:t+1,animation:!0})}))}),(0,n.jsx)("div",{"my-data-aos":"fade-left",children:(0,n.jsx)(s.Z,{sx:{width:"2.5rem",height:"2.5rem",display:w?"block":"none",right:"-0.45rem"},className:"rounded-full  bg-gray-300 bg-opacity-90 cursor-pointer absolute z-10 duration-500 hover:scale-105 ",onClick:function(){let e=x.current.scrollWidth-x.current.clientWidth,t=Math.min(x.current.scrollLeft+=d,e);e-t<d/10&&(t=e),x.current.scrollLeft=t,setTimeout(()=>j(t),300)}})})]}),(0,n.jsx)(c.default,{animation:!0,className:"mt-4",url:u,text:f,extern:!!m})]})}},7023:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return s}});var n=l(7437),a=l(2265),r=l(8538);function s(e){let{cards:t,buttonUrl:l,buttonText:s,buttonExtern:i}=e,[c,o]=(0,a.useState)(!1),d=(0,a.useRef)(null);return(0,n.jsxs)("section",{ref:d,className:"bg-gray-200 py-10 w-full h-fit flex flex-col justify-center items-center md:-mt-24 transition-all duration-1000",children:[(0,n.jsx)("div",{className:"h-fit w-full  flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-5 lg:gap-x-10",children:t.map((e,t)=>(0,n.jsx)("a",{href:e.href,style:{zIndex:20},target:(null==e?void 0:e.extern_link)?"_blank":"",children:(0,n.jsxs)("div",{className:" w-[85vw] max-w-[30rem] max-h-[30rem] h-[85vw] md:h-96 md:w-96 md:max-w-[30vw] md:max-h-[30vw] relative overflow-hidden pointer-events-none rounded-md",children:[(0,n.jsx)("div",{className:"w-full h-full hover:scale-110 cursor-pointer pointer-events-auto transition-all duration-300",style:{backgroundImage:"url(".concat(e.img,")"),backgroundPosition:"center",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full flex items-end bg-gray-800 bg-opacity-30",children:(0,n.jsx)("span",{className:"w-full text-center font-bold mb-4 text-2xl text-white",children:e.text})})]})},e.href))}),(0,n.jsx)(r.default,{text:s,url:l,className:"mt-4",extern:i})]})}l(8290)},6486:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var n=l(7437),a=l(601),r=l(8163),s=l(2265),i=l(8290);function c(e){let{slides:t}=e;return(0,s.useEffect)(()=>{let e=setInterval(()=>{!function(){if(!(null==t?void 0:t.length))return;let e=document.getElementById("slider-container-home-main");if(!e)return;let l=(t.length-1)*100;e.childNodes.forEach(e=>{var t,n;let a=Number(e.style.left.split("%")[0]),r=e.getElementsByClassName("home-container-text");100==a?(e.style.zIndex=1,e.style.transition="left 0.8s ease-in-out",(null==r?void 0:r.length)&&(null===(t=r[0])||void 0===t?void 0:t.style)&&setTimeout(()=>{r[0].style.opacity="1"},300)):(e.style.zIndex=0,e.style.transition="none",(null==r?void 0:r.length)&&(null===(n=r[0])||void 0===n?void 0:n.style)&&setTimeout(()=>{r[0].style.opacity="0"},2e3)),(a-=100)<0&&(a=l),a<l?e.style.left="".concat(a,"%"):setTimeout(()=>{e.style.left="".concat(a,"%")},2e3)})}()},5e3);return()=>{clearInterval(e)}},[]),(0,n.jsx)("main",{className:"flex h-[75vh] flex-col items-center justify-between  color-white",children:(0,n.jsx)("div",{id:"slider-container-home-main",className:"w-screen h-[75vh] flex overflow-hidden relative z-10",children:t.map((e,t)=>(0,n.jsx)("div",{className:"w-screen h-[75vh] absolute top-0",style:{left:"".concat(100*t,"%")},children:(0,n.jsx)("div",{style:{width:"100%",minHeight:"75vh",backgroundImage:'url("'.concat(e.img,'")'),backgroundSize:"cover",backgroundPosition:"center"},className:"relative",children:(0,n.jsx)("div",{className:"absolute w-full h-full bg-gray-800 bg-opacity-75 bg-blur flex items-center justify-center lg:justify-start",children:(0,n.jsxs)("div",{style:{opacity:0==t?"1":"0"},className:"home-container-text transition-opacity duration-1000 w-full max-w-4xl px-4 sm:px-10 text-center lg:text-left lg:px-40",children:[(0,n.jsx)(i.Z,{font:"Custom",variant:"h1",className:"text-white",children:e.text1}),(0,n.jsx)("p",{className:"text-white mt-2",children:e.text2}),(0,n.jsx)(r.A,{as:a.O,href:e.url,target:(null==e?void 0:e.extern_link)?"_blank":void 0,className:"bg-white font-bold uppercase mt-4",variant:"shadow",children:e.buttonText})]})})})},t))})})}},8976:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var n=l(7437),a=l(2927),r=l(8290),s=l(6412),i=l(2265);let c="home";function o(e){let{videoUrl:t,title:l,options:o}=e,[d,u]=(0,i.useState)(0),[f,m]=(0,i.useState)(!1),[x,h]=(0,i.useState)(!1),{reactPixel:v}=(0,a.useReactPixel)();return(0,i.useEffect)(()=>{let e=document.getElementById("text-option-presentation-0");e&&(e.style.opacity="1")},[]),(0,n.jsx)("section",{className:" w-full h-fit ",children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-between xl:flex-row xl:items-start w-full gap-y-4 gap-x-8",children:[(0,n.jsx)("video",{"my-data-aos":"fade-right",id:"presentation-video",controls:!0,width:"600",height:"600",autoPlay:!0,muted:!0,onVolumeChange:function(){let e=document.getElementById("presentation-video");!e||e.muted||f||(m(!0),(0,s.NW)(v,c))},onTimeUpdate:function(){let e=document.getElementById("presentation-video");(null==e?void 0:e.duration)&&e.currentTime/e.duration>.9&&!x&&(h(!0),(0,s.f9)(v,c))},children:(0,n.jsx)("source",{src:t})}),(0,n.jsxs)("div",{"my-data-aos":"fade-left",className:"w-full max-w-2xl flex flex-col justify-center items-center gap-y-4 h-fit xl:pt-9 xl:items-start",children:[(0,n.jsx)(r.Z,{className:"text-center w-full mb-4",variant:"h2",children:l}),(0,n.jsxs)("div",{className:"w-full sm:w-3/4 md:w-full ",children:[(0,n.jsx)("div",{className:"w-full flex flex-col  md:flex-row justify-center gap-y-2 ",children:Object.keys(o).map((e,t)=>(0,n.jsxs)("div",{className:"w-full h-10 flex flex-col  relative ",children:[(0,n.jsx)(r.Z,{variant:"span",className:"px-4 lg:px-8 h-10 font-bold uppercase text-medium cursor-pointer text-center min-w-min hover:text-black transition-all duration-300 ".concat(t==d?"text-black":"text-gray-500"),onClick:e=>{let l,n;return l=document.getElementById("text-option-presentation-"+d),n=document.getElementById("text-option-presentation-"+t),void(l&&n&&(l.style.display="none",n.style.display="block",setTimeout(()=>{l.style.opacity="0",n.style.opacity="1"},50),u(t)))},children:e},t),(0,n.jsx)("span",{className:"absolute bottom-0 left-0 h-1 w-full bg-gray-500"}),(0,n.jsx)("span",{className:"absolute bottom-0 left-0 transition-all h-1 bg-black duration-300 "+(t==d?"w-full":"w-0")})]},t))}),Object.keys(o).map((e,t)=>(0,n.jsx)("span",{id:"text-option-presentation-"+t,className:"transition-opacity mt-2 text-base text-gray-500  text-center duration-700 w-full  "+(t==d?"block":"hidden"),style:{opacity:"0"},children:o[e]},t))]})]})]})})}},5881:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var n=l(7437);function a(e){let{url:t,text:l,className:a,animation:r=!1,index:s=1}=e;return(0,n.jsx)("div",{"my-data-aos":r?"zoom-in":void 0,"data-aos-delay":"".concat(100*s+100),className:a||"item-4 relative",children:(0,n.jsx)("div",{className:"absolute h-full rounded-sm shadow-sm",style:{width:"calc(100% - 1rem)",left:"0.5rem",backgroundImage:"url('".concat(t,"')"),backgroundPosition:"center",backgroundSize:"cover"},children:(0,n.jsx)("div",{className:"w-full overflow-hidden h-full transition-opacity duration-200 opacity-0 hover:opacity-100 bg-black bg-opacity-75 p-4 flex items-center justify-center",children:(0,n.jsx)("span",{className:"text-center w-full  overflow-hidden text-white text-base",children:l})})})})}var r=l(2265),s=l(8163),i=l(8290);function c(e){let{students:t,texts:l}=e,[c,o]=(0,r.useState)(!1);return(0,n.jsxs)("section",{className:"py-10 flex flex-col justify-center items-center bg-gray-200",children:[(0,n.jsx)("div",{"data-aos-delay":"200","my-data-aos":"fade-down",children:(0,n.jsx)(i.Z,{variant:"h2",className:"text-center w-full mb-8",children:l.titulo})}),(0,n.jsx)("div",{className:"w-full h-fit flex flex-wrap gap-y-4 justify-center items-center",children:t.filter((e,t)=>t<4).map((e,t)=>(0,n.jsx)(a,{index:t+1,animation:!0,text:e.text,url:e.url},t))}),t.length>4&&(0,n.jsx)("div",{className:"mt-4 w-full h-fit flex flex-wrap gap-y-4 justify-center items-center",children:t.filter((e,t)=>t>=4).map((e,t)=>(0,n.jsx)(a,{className:"overflow-hidden relative ".concat(c?"scale-100 item-4":"duration-500 w-0 h-0"),url:e.url,text:e.text},t+4))}),(0,n.jsx)("div",{"my-data-aos":"zoom-in",children:(0,n.jsx)(s.A,{onClick:()=>o(!c),className:"text-md mt-2 duration-200 text-base font-semibold",variant:"light",children:(0,n.jsx)("span",{children:c?l.ver_menos:l.ver_mais})})})]})}},6630:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var n=l(7437),a=l(301),r=l(160),s=l(6507),i=function(e){let{color:t,icon:l,title:a,description:i,direction:c,small:o}=e;return(0,n.jsxs)(s.Z,{lineHeight:1,p:"center"===c?2:0,textAlign:c,className:"flex flex-col",children:["string"==typeof l?(0,n.jsx)(r.Z,{children:l}):l,(0,n.jsx)("span",{className:"text-center lg:text-left font-bold mt-2 mb-0.5 text-slate-800",children:a}),(0,n.jsx)("span",{className:"text-center lg:text-left text-base text-gray-500",children:i})]})},c=l(8163),o=l(601),d=l(8874),u=l(8290);function f(e){let{teachers:t,cardData:l}=e;return(0,n.jsxs)("section",{className:"py-10 flex flex-col lg:flex-row bg-gray-200 justify-center gap-y-10 gap-x-20 items-center h-max",children:[(0,n.jsx)("div",{"my-data-aos":"fade-right","data-aos-delay":"100","data-aos-duration":"500",className:"w-full sm:w-[60%] lg:w-[30%] lg:max-w-[25rem] ",style:{height:"30rem"},children:(0,n.jsx)("div",{className:"group h-full [perspective:1000px]",children:(0,n.jsxs)("div",{style:{transitionDuration:"500ms"},className:"relative h-full w-full transition-all rounded-xl shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ",children:[(0,n.jsx)("div",{className:"absolute inset-0",children:(0,n.jsx)("div",{className:"w-full h-full  rounded-xl object-cover shadow-xl shadow-black/40",style:{backgroundImage:"url(".concat(l.img_frente,")"),backgroundPosition:"center",backgroundSize:"cover"},children:(0,n.jsxs)("div",{className:"bg-black flex flex-col justify-center px-8 items-center w-full h-full shadow-black/40 bg-opacity-50 rounded-xl object-cover",children:[(0,n.jsx)(u.Z,{className:"font-bold text-center text-white",variant:"h4",children:l.texto_frente}),(0,n.jsx)(a.Z,{sx:{width:"2.8rem",height:"2.8rem",fill:"white",marginTop:"2rem"}})]})})}),(0,n.jsx)("div",{style:{backgroundImage:"url(".concat(l.img_atras,")"),backgroundPosition:"center",backgroundSize:"cover"},className:"absolute inset-0 h-full w-full rounded-xl text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]",children:(0,n.jsxs)("div",{className:"flex flex-col bg-black shadow-black/40 bg-opacity-70 h-full w-full rounded-xl px-8 justify-center items-center",children:[(0,n.jsx)(u.Z,{className:"font-bold",variant:"h4",children:l.texto_atras}),(0,n.jsx)(c.A,{as:o.O,href:l.url_botao,target:(null==l?void 0:l.link_externo)?"_blank":void 0,variant:"shadow",className:"bg-white text-black uppercase font-bold mt-8",children:l.texto_botao})]})})]})})}),(0,n.jsx)("div",{"my-data-aos":"fade-left","data-aos-delay":"300","data-aos-duration":"500",className:"w-full lg:w-[50%] flex items-center justify-center",children:(0,n.jsx)(d.ZP,{container:!0,spacing:4.5,className:"h-fit",children:t.map((e,t)=>(0,n.jsx)(d.ZP,{item:!0,xs:12,lg:6,className:"flex flex-col",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left w-full lg:w-64 max-w-full",children:[(0,n.jsx)("img",{className:"w-14 h-14 rounded-full",src:e.img,alt:e.alt}),(0,n.jsx)(i,{title:e.nome,description:e.descricao})]})},t))})})]})}},8538:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var n=l(7437),a=l(4643),r=l(601),s=l(8163),i=l(2265);function c(e){let{url:t,text:l,className:c,extern:o,animation:d=!1}=e,[u,f]=(0,i.useState)(!1);return(0,n.jsx)("div",{"my-data-aos":d?"zoom-in":void 0,children:(0,n.jsxs)(s.A,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:"text-lg font-semibold uppercase "+c,variant:"light",target:o?"_blank":void 0,as:r.O,href:t,children:[(0,n.jsx)("span",{children:l}),(0,n.jsx)(a.Z,{className:"transition-all duration-100 ".concat(u?"ml-1":"ml-0")})]})})}l(8290)},7476:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var n=l(7437),a=l(8163),r=l(601),s=l(2265);function i(e,t,l){return(0,n.jsxs)("div",{onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),className:"absolute w-full h-full cursor-pointer overflow-hidden  shadow-md hover:shadow-lg duration-300 rounded-md",style:{width:"calc(100% - 1rem)",left:"0.5rem"},children:[(0,n.jsxs)("div",{className:"w-full h-2/5 overflow-hidden relative",children:[(0,n.jsx)("div",{className:"w-full h-full duration-300 absolute",style:{backgroundImage:"url('".concat(l.img,"')"),backgroundPosition:"center",backgroundSize:"cover",scale:e?"1.05":"1"}}),(0,n.jsx)("div",{className:"w-full h-full bg-black absolute duration-300 ".concat(e?"opacity-30":"opacity-0")})]}),(0,n.jsxs)("div",{className:"w-full h-3/5 p-2 text-center",children:[(0,n.jsx)("span",{className:"w-full text-center whitespace-normal line-clamp-2 font-bold ",style:{fontSize:"1.1rem"},children:l.titulo}),(0,n.jsx)("span",{className:"w-full mt-2 line-clamp-3 lg:line-clamp-4 text-base text-gray-500",children:l.texto}),(0,n.jsx)(a.A,{variant:"shadow",className:"absolute bottom-0 left-0 m-4 mb-2 bg-black uppercase font-bold "+(e?"text-orange-500":"text-white"),as:r.O,target:l.link_externo?"_blank":void 0,style:{width:"calc(100% - 2rem)"},href:l.url,children:l.texto_botao})]})]})}function c(e){let{blog:t,animation:l=!1,index:a=1}=e,[r,c]=(0,s.useState)(!1),[o,d]=(0,s.useState)(!1);return(0,s.useEffect)(()=>d(!0),[]),(0,n.jsx)("div",{"data-aos-delay":"".concat(100*a+200),"my-data-aos":l?"flip-left":void 0,"data-aos-duration":"800",className:"item-carousel-3 inline-block relative ",children:o?(0,n.jsx)("a",{href:t.url,target:(null==t?void 0:t.link_externo)?"_blank":void 0,children:i(r,c,t)}):i(r,c,t)})}},3050:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var n=l(7437),a=l(8163),r=l(601),s=l(2265);function i(e){let{width:t="10",height:l="10",fill:a="none",stroke:r="none"}=e;return(0,n.jsx)("svg",{width:t,height:l,viewBox:"0 0 24 24",fill:a,xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("g",{id:"Interface / Star",children:(0,n.jsx)("path",{id:"Vector",d:"M2.33496 10.3368C2.02171 10.0471 2.19187 9.52339 2.61557 9.47316L8.61914 8.76107C8.79182 8.74059 8.94181 8.63215 9.01465 8.47425L11.5469 2.98446C11.7256 2.59703 12.2764 2.59695 12.4551 2.98439L14.9873 8.47413C15.0601 8.63204 15.2092 8.74077 15.3818 8.76124L21.3857 9.47316C21.8094 9.52339 21.9791 10.0472 21.6659 10.3369L17.2278 14.4419C17.1001 14.56 17.0433 14.7357 17.0771 14.9063L18.255 20.8359C18.3382 21.2544 17.8928 21.5787 17.5205 21.3703L12.2451 18.4166C12.0934 18.3317 11.9091 18.3321 11.7573 18.417L6.48144 21.3695C6.10913 21.5779 5.66294 21.2544 5.74609 20.8359L6.92414 14.9066C6.95803 14.7361 6.90134 14.5599 6.77367 14.4419L2.33496 10.3368Z",stroke:r,strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})})}function c(e){let{width:t="10",height:l="10",fill:a="none",stroke:r="none"}=e;return(0,n.jsx)("svg",{fill:a,height:l,width:t,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 276.901 276.901",xmlSpace:"preserve",children:(0,n.jsx)("path",{strokeWidth:"10",d:"M275.922,105.676c-2.353-7.24-8.612-12.517-16.146-13.611l-71.441-10.381l-31.95-64.737   c-3.369-6.826-10.322-11.148-17.935-11.148c-7.613,0-14.565,4.322-17.935,11.148L88.566,81.684L17.125,92.065   c-7.533,1.095-13.793,6.371-16.146,13.611s-0.391,15.188,5.062,20.502l51.695,50.391l-12.203,71.153   c-1.287,7.504,1.798,15.087,7.956,19.562c6.159,4.475,14.326,5.065,21.063,1.521l63.898-33.594l63.899,33.594   c2.927,1.539,6.121,2.298,9.305,2.298c4.146,0,8.273-1.288,11.758-3.819c6.159-4.475,9.243-12.059,7.956-19.562l-12.204-71.153   l51.696-50.39C276.312,120.864,278.274,112.916,275.922,105.676z M183.715,155.264c-4.714,4.595-6.865,11.215-5.752,17.703   l7.131,41.575l-37.337-19.629c-2.913-1.532-6.11-2.298-9.306-2.298V70.99l18.669,37.826c2.913,5.902,8.545,9.994,15.059,10.94   l41.743,6.065L183.715,155.264z"})})}function o(e){let{width:t="10",height:l="10",fill:a="none",stroke:r="none"}=e;return(0,n.jsx)("svg",{version:"1.0",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:t,height:l,viewBox:"0 0 64 64","enable-background":"new 0 0 64 64",xmlSpace:"preserve",children:(0,n.jsx)("path",{strokeWidth:"10",fill:a,d:"M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265   C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642   c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854   c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72   c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"})})}var d=l(8290);function u(e,t,l,s,u,f,m,x){return(0,n.jsxs)("div",{className:u+" inline-block absolute cursor-pointer overflow-hidden  shadow-md hover:shadow-lg duration-300 rounded-md",style:{outline:"1px solid rgb(192, 185, 185)",width:"calc(100% - 1rem)",left:"0.5rem",height:"100%"},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),children:[(0,n.jsxs)("div",{className:"w-full h-[60%] xl:h-[55%] overflow-hidden relative",children:[(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full transition-all duration-500 "+(f?"scale-110":""),style:{backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundSize:"cover"}}),(0,n.jsx)("span",{className:"absolute z-20 top-0 left-0 rounded-br-md px-4",style:{backgroundColor:x.color},children:(0,n.jsx)(d.Z,{variant:"span",className:"w-full font-bold text-white z-20 -mt-2 text-center whitespace-normal",children:x.text})}),(0,n.jsx)("div",{className:"absolute top-0 left-0 h-full w-full transition-all duration-500 bg-black "+(f?"opacity-30":"opacity-0")})]}),(0,n.jsxs)("div",{className:"w-full h-[40%] xl:h-[45%] p-4 pt-4 py-2 flex flex-col items-center justify-between gap-y-4",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-y-4 w-full",children:[(0,n.jsx)("span",{className:"w-full font-bold -mt-2 text-center whitespace-normal",sx:{fontSize:"1.1rem"},children:t}),(0,n.jsxs)("div",{className:"w-full -mt-3 flex items-center justify-center gap-x-1",children:[Array(Math.ceil(l)).fill(0).map((e,t)=>t+1<=l?(0,n.jsx)(o,{fill:"#f97316",width:"25",height:"25"},t):(0,n.jsx)(n.Fragment,{})),Math.ceil(l)>l&&(0,n.jsx)(c,{fill:"#f97316",width:"25",height:"25"}),Array(5-Math.ceil(l)).fill(0).map(e=>(0,n.jsx)(i,{stroke:"#f97316",width:"27",height:"27"},5+e))]})]}),(0,n.jsx)(a.A,{as:r.O,className:"w-full bg-black font-bold uppercase ".concat(f?"text-orange-500":"text-white"),href:"/cursos"+s,variant:"shadow",children:"Saiba mais"})]})]})}function f(e){let{img:t,text:l,stars:a,url:r,className:i,category:c,index:o=1,animation:d=!1}=e,[f,m]=(0,s.useState)(!1),[x,h]=(0,s.useState)(!1);return(0,s.useEffect)(()=>h(!0),[]),(0,n.jsx)("div",{"data-aos-delay":"".concat(100*o+200),"my-data-aos":d&&o<=3?"flip-left":void 0,"data-aos-duration":"800",className:"item-carousel-3 inline-block relative w-full",children:x?(0,n.jsx)("a",{href:"/cursos"+r,draggable:!1,className:"w-fit h-fit",children:u(t,l,a,r,i,f,m,c)}):u(t,l,a,r,i,f,m,c)})}},2771:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var n=l(7437),a=l(2265),r=l(7053),s=l(4199),i=l(2057),c=l(5873),o=l(8768);let d=(0,r.ZP)(e=>(0,n.jsx)(i.Z,{disableGutters:!0,elevation:0,square:!0,...e}))(e=>{let{theme:t}=e;return{borderBottom:"1px solid rgba(187, 185, 185, 0.708);","&:before":{display:"none"}}}),u=(0,r.ZP)(e=>(0,n.jsx)(c.Z,{expandIcon:(0,n.jsx)(s.Z,{sx:{fontSize:"0.9rem",fill:"inherit"}}),...e}))(e=>{let{theme:t}=e;return{width:"100%",backgroundColor:"#00000000",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:t.spacing(1)}}}),f=(0,r.ZP)(o.Z)(e=>{let{theme:t}=e;return{padding:t.spacing(2),width:"100%"}});function m(e){let{faqs:t}=e,[l,r]=(0,a.useState)(""),s=e=>(t,l)=>{r(!!l&&e)};return(0,n.jsx)(n.Fragment,{children:t.map((e,t)=>(0,n.jsxs)(d,{expanded:l==="panel".concat(t+1),onChange:s("panel".concat(t+1)),sx:{fill:"black",backgroundColor:"transparent",color:"black"},className:" bg-transparent   w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center",children:[(0,n.jsx)(u,{className:"w-full flex","aria-controls":"panel1d-content",id:"panel1d-header",children:(0,n.jsx)("h6",{className:" w-full text-black font-bold",children:e.pergunta})}),(0,n.jsx)(f,{className:"w-full",children:(0,n.jsx)("span",{className:"text-gray-500 w-full text-left",children:e.resposta})})]},t))})}},7782:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return r}});var n=l(7437),a=l(2265);function r(){return(0,a.useEffect)(()=>{let e=document.createElement("script");return e.type="text/javascript",e.src="https://smartarget.online/loader.js?u=603da0f4880eac03c4a04e4192a85450c044deef",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,n.jsx)(n.Fragment,{})}},8290:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var n=l(7437),a=l(3317),r=l.n(a);function s(e){let{variant:t="h2",font:l="Custom",className:a,onClick:s,children:i,id:c,style:o}=e,d=r().className;switch(t){case"h1":return(0,n.jsx)("h1",{style:o,id:c,onClick:s,className:d+" "+a,children:i});case"h2":return(0,n.jsx)("h2",{style:o,id:c,onClick:s,className:d+" "+a,children:i});case"h3":return(0,n.jsx)("h3",{style:o,id:c,onClick:s,className:d+" "+a,children:i});case"h4":return(0,n.jsx)("h4",{style:o,id:c,onClick:s,className:d+" "+a,children:i});case"h5":return(0,n.jsx)("h5",{style:o,id:c,onClick:s,className:d+" "+a,children:i});default:return(0,n.jsx)("span",{style:o,id:c,onClick:s,className:d+" "+a,children:i})}}},6412:function(e,t,l){"use strict";l.d(t,{Cz:function(){return n},NW:function(){return i},VO:function(){return o},Xq:function(){return d},af:function(){return x},e_:function(){return f},f9:function(){return c},hP:function(){return m},qt:function(){return u}});let n=795890068897751,a={ViewContent:"ViewContent",AddToCart:"AddToCart",InitiateCheckout:"InitiateCheckout",Purchase:"Purchase"},r=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e&&e.track(t,l)},s=function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e&&e.trackCustom(t,l)},i=(e,t)=>{s(e,"AtivarSon",t?{video:t}:{})},c=(e,t)=>{s(e,"VerVideo",t?{video:t}:{})},o=(e,t)=>{(null==t?void 0:t.text)&&r(e,a.ViewContent,{contents:[{id:t.text.trim().replaceAll(" ","_"),quantity:1}],content_type:"course",value:t.price||0,currency:"BRL"})},d=(e,t)=>{var l;if(!(null==t?void 0:t.length))return;let n=0;for(let e=0;e<t.length;e++)n+=((null===(l=t[e].item)||void 0===l?void 0:l.price)||0)*t[e].cant;r(e,a.AddToCart,{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:n||0,currency:"BRL"})},u=(e,t,l,n)=>{var s;if(!(null==t?void 0:t.length))return;let i=0;for(let e=0;e<t.length;e++)i+=((null===(s=t[e].item)||void 0===s?void 0:s.price)||0)*t[e].cant;r(e,a.InitiateCheckout,{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:i||0,currency:"BRL",customer:l,orderId:n,orderId:n})},f=(e,t)=>{var l;if(!(null==t?void 0:t.length))return;let n=0;for(let e=0;e<t.length;e++)n+=((null===(l=t[e].item)||void 0===l?void 0:l.price)||0)*t[e].cant;r(e,a.Purchase,{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:n||0,currency:"BRL"})},m=(e,t)=>{var l;if(!(null==t?void 0:t.length))return;let n=0;for(let e=0;e<t.length;e++)n+=((null===(l=t[e].item)||void 0===l?void 0:l.price)||0)*t[e].cant;s(e,"ViuCarrinho",{contents:t.map(e=>({id:e.item.text.trim().replaceAll(" ","_"),quantity:e.cant})),content_type:"course",value:n||0,currency:"BRL"})},x=(e,t)=>{s(e,"Matricula",{contents:[{id:t.text.trim().replaceAll(" ","_"),quantity:1}],content_type:"course",value:t.price||0,currency:"BRL"})}}},function(e){e.O(0,[776,163,202,659,523,740,506,971,864,744],function(){return e(e.s=519)}),_N_E=e.O()}]);