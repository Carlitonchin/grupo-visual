(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{823:function(e,t,l){Promise.resolve().then(l.bind(l,1378)),Promise.resolve().then(l.bind(l,1376))},1378:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return s}});var n=l(7437),i=l(4703),r=l(2265);function s(e){let{cards:t}=e,[l,s]=(0,r.useState)(!1),o=(0,r.useRef)(null);function a(){var e,t;!l&&!(window.scrollY<80)&&(null==o?void 0:o.current)&&(s(!0),null!==(t=o.current)&&void 0!==t&&null!==(e=t.classList)&&void 0!==e&&e.contains("opacity-100")||(o.current.classList.remove("opacity-0"),o.current.classList.add("opacity-100"),o.current.classList.remove("md:-mt-60"),o.current.classList.add("md:-mt-20")))}return(0,r.useEffect)(()=>{if(!l)return window.addEventListener("scroll",a),a(),()=>{window.removeEventListener("scroll",a)}},[]),(0,n.jsx)("section",{ref:o,className:" w-full h-fit py-4 md:-mt-60 z-10 opacity-0 transition-all duration-1000",children:(0,n.jsx)("div",{className:"h-fit w-full z-10 flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-y-0 md:gap-x-5 lg:gap-x-10",children:t.map(e=>(0,n.jsx)("a",{href:e.href,children:(0,n.jsxs)("div",{className:"w-[85vw] max-w-[30rem] max-h-[30rem] h-[85vw] md:h-96 md:w-96 md:max-w-[30vw] md:max-h-[30vw] relative overflow-hidden pointer-events-none rounded-md",children:[(0,n.jsx)("div",{className:"w-full h-full hover:scale-110 cursor-pointer pointer-events-auto transition-all duration-300",style:{backgroundImage:"url(".concat(e.img,")"),backgroundPosition:"center",backgroundSize:"cover"}}),(0,n.jsx)("div",{className:"absolute top-0 left-0 w-full h-full flex items-end bg-gray-800 bg-opacity-30",children:(0,n.jsx)(i.Z,{color:"white",className:"w-full text-center font-bold mb-4 text-3xl",children:e.text})})]})},e.href))})})}},1376:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var n=l(7437);l(352);var i=l(3953),r=l(4703),s=l(1396),o=l.n(s),a=l(2265);function c(e){let{slides:t}=e;return(0,a.useEffect)(()=>{setInterval(()=>{!function(){if(!(null==t?void 0:t.length))return;let e=document.getElementById("slider-container-home-main");if(!e)return;let l=(t.length-1)*100;e.childNodes.forEach(e=>{var t,n;let i=Number(e.style.left.split("%")[0]),r=e.getElementsByClassName("home-container-text");100==i?(e.style.zIndex=0,e.style.transition="left 0.8s ease-in-out",(null==r?void 0:r.length)&&(null===(t=r[0])||void 0===t?void 0:t.style)&&setTimeout(()=>{r[0].style.opacity="1"},300)):(e.style.zIndex="-1",e.style.transition="none",(null==r?void 0:r.length)&&(null===(n=r[0])||void 0===n?void 0:n.style)&&setTimeout(()=>{r[0].style.opacity="0"},2e3)),(i-=100)<0&&(i=l),i<l?e.style.left="".concat(i,"%"):setTimeout(()=>{e.style.left="".concat(i,"%")},2e3)})}()},5e3)},[]),(0,n.jsx)("main",{className:"flex h-fit flex-col items-center justify-between  color-white",children:(0,n.jsx)("div",{id:"slider-container-home-main",className:"w-screen min-h-screen flex overflow-hidden relative",children:t.map((e,t)=>(0,n.jsx)("div",{className:"w-screen min-h-screen absolute top-0",style:{left:"".concat(100*t,"%")},children:(0,n.jsx)("div",{style:{width:"100%",minHeight:"100vh",backgroundImage:'url("'.concat(e.img,'")'),backgroundSize:"cover",backgroundPosition:"top"},className:"relative",children:(0,n.jsx)("div",{style:{backdropFilter:"blur(3px)"},className:"absolute w-full h-full bg-gray-800 bg-opacity-75 bg-blur flex items-center justify-center lg:justify-start",children:(0,n.jsxs)("div",{style:{opacity:0==t?"1":"0"},className:"home-container-text transition-opacity duration-1000 w-full max-w-4xl px-4 sm:px-10 text-center lg:text-left lg:px-40",children:[(0,n.jsx)(r.Z,{variant:"h1",color:"white",mt:-6,mb:1,sx:e=>{let{breakpoints:t,typography:{size:l}}=e;return{[t.down("md")]:{fontSize:l["4xl"]}}},children:e.text1}),(0,n.jsx)(r.Z,{variant:"body1",color:"white",mt:1,children:e.text2}),(0,n.jsx)(i.Z,{className:"mt-4",color:"light",variant:"gradient",component:o(),href:e.url,children:e.buttonText})]})})})},t))})})}}},function(e){e.O(0,[883,133,971,596,744],function(){return e(e.s=823)}),_N_E=e.O()}]);