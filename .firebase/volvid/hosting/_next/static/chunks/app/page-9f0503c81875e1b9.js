(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7992:function(e,t,l){Promise.resolve().then(l.bind(l,9974)),Promise.resolve().then(l.bind(l,5880)),Promise.resolve().then(l.bind(l,241)),Promise.resolve().then(l.bind(l,7869))},9974:function(e,t,l){"use strict";l.r(t),l.d(t,{Kontakt:function(){return c}});var n=l(9268),a=l(1033),s=l(8136),i=l(6006),r=l(5081),o=l(4214);let c=()=>{let[e,t]=(0,i.useState)(""),[l,c]=(0,i.useState)(""),[x,d]=(0,i.useState)(""),[m,u]=(0,i.useState)(""),[f,h]=(0,i.useState)(!1),[g,b]=(0,i.useState)(null),[p,v]=(0,i.useState)(null);async function w(t){t.preventDefault();try{let t=await o.Z.get("http://80.98.246.4:3001/api/emails",{params:{name:e,email:l,phone:x,selectedOption:JSON.stringify(g),selectedOption2:JSON.stringify(p),message:m},headers:{"Access-Control-Allow-Origin":"http://80.98.246.4:3001/"}});console.log("Email sent successfully"),console.log(t),h(!0)}catch(e){console.error(e)}}return(0,n.jsxs)("form",{className:"flex flex-col items-center gap-4 bg-[#1f1f1f] p-5 text-center",onSubmit:w,children:[(0,n.jsx)("p",{className:"text-2xl font-bold text-white",children:"Kontakt"}),(0,n.jsxs)("div",{className:"flex w-full items-center gap-4 text-center text-2xl md:w-2/3",children:[(0,n.jsx)(s.ZLT,{className:"hidden text-4xl text-white md:block"}),(0,n.jsx)("input",{id:"frm-first",type:"text",name:"first",placeholder:"N\xe9v",className:"w-full rounded-xl p-3 md:p-5",autoComplete:"name",required:!0,onChange:e=>{t(e.target.value)}})]}),(0,n.jsxs)("div",{className:" flex w-full items-center gap-4 text-center text-2xl md:w-2/3 ",children:[(0,n.jsx)(a.Dme,{className:"hidden text-4xl text-white md:block"}),(0,n.jsx)("input",{id:"frm-email",type:"email",placeholder:"Email",name:"email",autoComplete:"email",className:" w-full rounded-xl p-3 md:p-5",required:!0,onChange:e=>{c(e.target.value)}})]}),(0,n.jsxs)("div",{className:"flex w-full items-center gap-4 text-center text-2xl md:w-2/3",children:[(0,n.jsx)(a.Nhm,{className:"hidden text-4xl text-white md:block"}),(0,n.jsx)("input",{id:"frm-phone",type:"text",name:"phone",placeholder:"Telefonsz\xe1m",autoComplete:"tel",className:"w-full rounded-xl p-3  md:p-5",required:!0,onChange:e=>{d(e.target.value)}})]}),(0,n.jsxs)("div",{className:"flex w-full items-center gap-4 text-center text-2xl md:w-2/3",children:[(0,n.jsx)(s._JY,{className:"hidden text-4xl text-white md:block"}),(0,n.jsx)(r.ZP,{defaultValue:g,onChange:e=>{b(e)},placeholder:"Vizsg\xe1lati Elj\xe1r\xe1s",options:[{value:"RT",label:"Radiogr\xe1fiai vizsg\xe1lat"},{value:"PT",label:"Folyad\xe9kbehatol\xe1sos vizsg\xe1lat"},{value:"MT",label:"M\xe1gnesezhető poros vizsg\xe1lat"},{value:"HT",label:"Kem\xe9nys\xe9gm\xe9r\xe9s"},{value:"UT",label:"Ultrahangos vizsg\xe1lat"},{value:"LT",label:"T\xf6m\xf6rs\xe9gi vizsg\xe1lat"},{value:"VT",label:"Szemrev\xe9telez\xe9ses vizsg\xe1lat"},{value:"IT",label:"F\xe9mek fel\xfcleti szigetel\xe9s\xe9nek vizsg\xe1lata"},{value:"PMI",label:"Pozit\xedv anyagazonos\xedt\xe1s"},{value:"Other",label:"M\xe1s"}],isMulti:!0,className:"w-full rounded-xl"})]}),(0,n.jsxs)("div",{className:"flex w-full items-center gap-4 text-center text-2xl md:w-2/3",children:[(0,n.jsx)(a.RB5,{className:"hidden text-4xl text-white md:block"}),(0,n.jsx)(r.ZP,{defaultValue:p,onChange:e=>{v(e)},placeholder:"Vizsg\xe1lati szabv\xe1ny",options:[{value:"msz",label:"MSZ EN ISO"},{value:"asme",label:"ASME"}],isMulti:!0,className:"w-full rounded-xl"})]}),(0,n.jsxs)("div",{className:"flex w-full items-center gap-4 text-center text-2xl md:w-2/3",children:[(0,n.jsx)(a.e$J,{className:"hidden text-4xl text-white md:block"}),(0,n.jsx)("textarea",{id:"frm-message",placeholder:"\xdczenet",name:"message",className:"w-full rounded-xl p-3 md:w-full md:p-5",onChange:e=>{u(e.target.value)}})]}),(0,n.jsx)("button",{type:"submit",className:"flex flex-row items-center rounded-full bg-primary text-center md:m-3",children:(0,n.jsx)("span",{className:"rounded-full",children:"K\xfcld\xe9s"})})]})}},241:function(e,t,l){"use strict";l.r(t);var n=l(9268),a=l(6006),s=l(4526);t.default=()=>{function e(e){let t=document.getElementsByTagName("section");if(e>=0&&e<t.length){let l=t[e],n=l.offsetTop,a=document.documentElement.scrollTop||document.body.scrollTop;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,l=document.documentElement.scrollTop||document.body.scrollTop,n="now"in window.performance?performance.now():new Date().getTime(),a=function(){var s;let i="now"in window.performance?performance.now():new Date().getTime(),r=i-n;window.scroll(0,(s=r/(t/2))<1?e/2*s*s+l:-e/2*(--s*(s-2)-1)+l),r<t?requestAnimationFrame(a):window.scroll(0,l+e)};a()}(n-105-a)}l(!1)}let[t,l]=(0,a.useState)(!1);return(0,n.jsxs)("nav",{className:"fixed left-0 right-0 top-0 z-10 flex h-20 items-center justify-between bg-[#f5f5f5] bg-opacity-50 p-3 backdrop-blur-lg backdrop-filter md:h-24",children:[(0,n.jsx)("img",{src:"/images/logo.webp",alt:"logo",className:" h-16 md:h-20"}),(0,n.jsx)("button",{id:"nav-toggle",className:"menuu block h-12 w-auto items-center lg:hidden",onClick:()=>{l(!t)},children:(0,n.jsx)(s.vHB,{className:"h-full w-auto"})}),(0,n.jsx)("div",{className:" hidden lg:block lg:items-center",id:"nav-content",children:(0,n.jsxs)("div",{className:"flex flex-row justify-evenly gap-2",children:[(0,n.jsx)("button",{onClick:()=>{e(0)},className:"flex min-w-min flex-row  items-center rounded-full text-center transition  hover:text-white",children:(0,n.jsx)("span",{className:" rounded-full transition hover:bg-transparent",children:"Kontakt"})}),(0,n.jsx)("button",{onClick:()=>{e(0)},className:"flex min-w-min flex-row  items-center rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:" rounded-full hover:bg-white",children:"Főlap"})}),(0,n.jsx)("button",{onClick:()=>{e(1)},className:"flex min-w-min flex-row items-center  rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full hover:bg-white",children:"Aj\xe1nlataink"})}),(0,n.jsx)("button",{onClick:()=>{e(3)},className:"flex min-w-min flex-row items-center  rounded-full bg-transparent text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full hover:bg-white",children:"R\xf3lunk"})})]})}),(0,n.jsx)("div",{className:"fixed inset-y-0 left-0 z-20 flex w-64 flex-col justify-between bg-[#1f1f1f] lg:hidden ".concat(t?"block":"hidden"),id:"nav-panel",children:(0,n.jsxs)("div",{className:"flex flex-row flex-wrap content-around items-stretch justify-center gap-3 py-5",children:[(0,n.jsx)("button",{onClick:()=>{e(0)},className:"flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full bg-[#1f1f1f] text-white",children:"Főlap"})}),(0,n.jsx)("button",{onClick:()=>{e(1)},className:"flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full bg-[#1f1f1f] text-white",children:"Aj\xe1nlataink"})}),(0,n.jsx)("button",{onClick:()=>{e(2)},className:"flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full bg-[#1f1f1f] text-white",children:"Vezetőink"})}),(0,n.jsx)("button",{onClick:()=>{e(3)},className:"flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full bg-[#1f1f1f] text-white",children:"R\xf3lunk"})}),(0,n.jsx)("button",{onClick:()=>{e(4)},className:"flex min-w-min flex-row items-center  rounded-full bg-white text-center hover:bg-black hover:text-black hover:underline",children:(0,n.jsx)("span",{className:"rounded-full bg-[#1f1f1f] text-white",children:"Telephelyek"})})]})})]})}},5880:function(e,t,l){"use strict";l.r(t),l.d(t,{Projects:function(){return i}});var n=l(9268),a=l(6006),s=l(1033);let i=()=>{let[e,t]=(0,a.useState)(0),l=[{name:"MOL Nyrt. Dunai Finom\xedt\xf3",content:"\xdczemek \xe9s tart\xe1lyok anyagvizsg\xe1lata \xfczemk\xf6zi csővezet\xe9kek \xe1llapotfelm\xe9r\xe9se, \xfczemi \xe1talak\xedt\xe1sokvizsg\xe1latai."},{name:"N\xe9metorsz\xe1gban a BayernOil",content:"Ingolstadt k\xf6rny\xe9ki finom\xedt\xf3iban folyamatos vizsg\xe1latok."},{name:"N\xe9metorsz\xe1gban az OMV Burghauseni Finom\xedt\xf3ban, Wacker k\xe9miai \xfczemben",content:"Anyagvizsg\xe1latok v\xe9gz\xe9se folyamatosan."},{name:"BorsodChem Nyrt. Kazincbarcikai gy\xe1r",content:"\xdczemi le\xe1ll\xe1sok anyagvizsg\xe1lata, keretszerződ\xf6tt partner vagyunk."},{name:"P\xe9ti Nitrog\xe9n Művek",content:"Reaktor \xe9s hőcser\xe9lővizsg\xe1latok."},{name:"G\xf6nyűi Erőmű",content:"\xdczemi le\xe1ll\xe1s vizsg\xe1lata."},{name:"OMV Schwechati Finom\xedt\xf3",content:"Le\xe1ll\xe1sokon anyagvizsg\xe1latok, \xe9s le\xe1ll\xe1son k\xedv\xfcli időszakban \xe1llapotfelm\xe9r\xe9s."}];return(0,n.jsxs)("section",{className:"flex  flex-col gap-4 text-center",children:[(0,n.jsx)("p",{className:"text-2xl font-bold",children:"Jelentősebb projektek"}),(0,n.jsxs)("div",{className:" flex h-64 flex-col justify-between md:h-36 md:flex-row",children:[(0,n.jsx)("button",{className:"bg-transparent text-4xl text-primary hover:text-black",onClick:function(){let n=(e-1+l.length)%l.length;t(n)},children:(0,n.jsx)(s.kyg,{})}),(0,n.jsx)("div",{className:" w-full md:w-2/3",children:l.map((t,l)=>(0,n.jsx)("div",{className:"testimonial ".concat(l===e?"active":""," card flex h-40 items-center justify-center  p-1 text-center md:h-32 md:p-5 "),children:(0,n.jsxs)("div",{className:"flex h-full flex-col justify-evenly",children:[(0,n.jsx)("p",{className:"text-xl font-bold",children:t.name}),(0,n.jsx)("p",{className:" text-xl",children:t.content})]})},l))}),(0,n.jsx)("button",{className:"bg-transparent text-4xl text-primary hover:text-black",onClick:function(){let n=(e+1)%l.length;t(n)},children:(0,n.jsx)(s.mGl,{})})]})]})}},7869:function(e,t,l){"use strict";l.r(t),l.d(t,{S1:function(){return a}});var n=l(9268);let a=()=>(0,n.jsxs)("section",{id:"hero",className:"s1 flex h-96 flex-col  items-center justify-evenly bg-black text-center ",children:[(0,n.jsx)("div",{className:" -z-2 opacity-45 absolute h-96 w-full object-contain   ",children:(0,n.jsx)("img",{src:"/images/green.webp",alt:"bg",className:" h-full w-full object-cover"})}),(0,n.jsx)("p",{className:"z-10 text-6xl font-semibold text-white",children:"Volvid"}),(0,n.jsx)("div",{className:" z-10 text-xl text-white",children:"Minős\xe9g. Tapasztalat. Megb\xedzhat\xf3s\xe1g."}),(0,n.jsxs)("div",{className:"z-10 ",children:[" ",(0,n.jsx)("button",{onClick:()=>{!function(e){let t=document.getElementsByTagName("form");if(e>=0&&e<t.length){let l=t[e],n=l.offsetTop,a=document.documentElement.scrollTop||document.body.scrollTop;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,l=document.documentElement.scrollTop||document.body.scrollTop,n="now"in window.performance?performance.now():new Date().getTime(),a=function(){var s;let i="now"in window.performance?performance.now():new Date().getTime(),r=i-n;window.scroll(0,(s=r/(t/2))<1?e/2*s*s+l:-e/2*(--s*(s-2)-1)+l),r<t?requestAnimationFrame(a):window.scroll(0,l+e)};a()}(n-105-a)}}(0)},className:" z-10 items-center rounded-full text-center",children:(0,n.jsx)("span",{className:"rounded-full",children:"Kontakt"})})]})]})}},function(e){e.O(0,[776,59,141,777,667,488,744],function(){return e(e.s=7992)}),_N_E=e.O()}]);