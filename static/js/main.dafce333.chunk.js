(this.webpackJsonpapocrypta=this.webpackJsonpapocrypta||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(6),a=t(24),i=t.n(a),r=i.a.mark(o);function o(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e;case 1:return t.next=4,n++;case 4:t.next=1;break;case 6:case"end":return t.stop()}}),r)}var l=o(0),s=function e(n){Object(c.a)(this,e),this.name=void 0,this.id=void 0,this.direction="encode",this.id=n||l.next().value}},function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return o}));var c=t(6),a=t(10),i=t(12),r=t(11),o=function(n){Object(i.a)(o,n);var t=Object(r.a)(o);function o(){var e;Object(c.a)(this,o);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).name="Base64",e}return Object(a.a)(o,[{key:"encode",value:function(n){return e.from(n).toString("base64")}},{key:"decode",value:function(n){return e.from(n,"base64").toString()}}]),o}(t(13).a)}).call(this,t(34).Buffer)},,,,,,,,,,,,,,,function(e,n,t){},,,,,,,,,,,function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c,a=t(0),i=t.n(a),r=t(9),o=t.n(r),l=(t(29),t(5)),s=t(4),u=t(7),d=function(e){return"settings"in e},h=t(14),p=t(6),f=t(10),j=t(12),b=t(11),v=t(13),x=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(p.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).name="Clear",e}return Object(f.a)(t,[{key:"encode",value:function(e){return e}},{key:"decode",value:function(e){return e}}]),t}(v.a),O=t(19),g=Object.freeze(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),m=(Object.freeze(Object(O.a)(g.map((function(e){return e.toUpperCase()})))),Object.freeze({a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25})),C=function(e){return function(n){return n in m?g[function(e,n){return(e+n)%n}(m[n]+e,g.length)]:n}},y=function(e){Object(j.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(p.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=n.call.apply(n,[this].concat(a))).name="Shift",e.settings={value:1},e}return Object(f.a)(t,[{key:"encode",value:function(e){var n=C(this.settings.value);return e.split("").map(n).join("")}},{key:"decode",value:function(e){var n=C(-1*this.settings.value);return e.split("").map(n).join("")}}]),t}(v.a),w=(c={},Object(u.a)(c,(new x).name,x),Object(u.a)(c,(new h.a).name,h.a),Object(u.a)(c,(new y).name,y),c),I=Object.freeze(Object.keys(w)),k=function(e,n){return new w[e](n)},N=function(e){return Object(s.a)({name:e.name,id:e.id,direction:e.direction},d(e)?{settings:e.settings}:{})},S=function(e){var n=k(e.name,e.id);return n.direction=e.direction,d(n)&&d(e)&&(n.settings=e.settings),n},V=t(17),A=t(15),W=t(20);(new h.a).direction="decode",(new y).direction="decode";var z={rootValue:"Experience is the teacher of all things.",calculations:[{ciphers:[N(new y),N(new h.a)],result:""}]},D=Object(W.b)({name:"calculations",initialState:z,reducers:{addCalculation:function(e,n){e.calculations.push({ciphers:n.payload.ciphers,result:""})},removeCalculation:function(e,n){e.calculations.splice(n.payload.index,1)},moveCalculation:function(e,n){var t=e.calculations.splice(n.payload.fromIndex,1),c=Object(A.a)(t,1)[0];e.calculations.splice(n.payload.toIndex,0,c)},addCipher:function(e,n){e.calculations[n.payload.calculationIndex].ciphers.push(n.payload.cipher)},removeCipher:function(e,n){e.calculations[n.payload.calculationIndex].ciphers.splice(n.payload.cipherIndex,1)},moveCipher:function(e,n){var t=e.calculations[n.payload.calculationIndex].ciphers.splice(n.payload.fromIndex,1),c=Object(A.a)(t,1)[0];e.calculations[n.payload.calculationIndex].ciphers.splice(n.payload.toIndex,0,c)},setCipherName:function(e,n){e.calculations[n.payload.calculationIndex].ciphers[n.payload.cipherIndex]=N(k(n.payload.name))},setCipherDirection:function(e,n){e.calculations[n.payload.calculationIndex].ciphers[n.payload.cipherIndex].direction=n.payload.direction},setCipherSettings:function(e,n){var t=e.calculations[n.payload.calculationIndex].ciphers[n.payload.cipherIndex];d(t)&&(t.settings=Object(s.a)(Object(s.a)({},t.settings),n.payload.settings))},recalculate:function(e){e.calculations.forEach((function(n,t){n.result=n.ciphers.reduce((function(e,n){return"encode"===n.direction?S(n).encode(e):S(n).decode(e)}),0===t?e.rootValue:e.calculations[t-1].result)}))},setRootValue:function(e,n){e.rootValue=n.payload}}}),E=D.actions,P=E.addCalculation,R=(E.removeCalculation,E.moveCalculation,E.recalculate),B=E.setRootValue,F=E.addCipher,L=E.removeCipher,M=E.moveCipher,T=E.setCipherDirection,U=E.setCipherSettings,q=E.setCipherName,J=D.reducer,H=(t(40),t(1));function $(e){var n=e.icon,t=e.title,c=e.onClick;return Object(H.jsx)("button",{className:"btn-img",onClick:c,title:t,children:Object(H.jsx)("img",{src:n,alt:t})})}t(42);var G=t.p+"static/media/close.4200050a.svg";t(43);function K(e){var n=e.direction,t=e.onChange;return Object(H.jsx)("button",{className:"cipherdirection ".concat(n),onClick:function(){return t("decode"===n?"encode":"decode")},children:"decode"===n?"dec":"enc"})}t(44);function Q(e){var n=e.value,t=e.values,c=e.onChange,i=Object(a.useCallback)((function(e){return c(e.target.value)}),[c]);return Object(H.jsx)("select",{className:"cipherbox-select",value:n,onChange:i,children:t.map((function(e){return Object(H.jsx)("option",{value:e,children:e},e)}))})}function X(e){var n=e.cipher,t=e.onNameChange,c=e.onDirectionChange,a=(e.onSettingChange,e.onClose),i=e.index;return Object(H.jsx)(V.b,{draggableId:n.id.toString(),index:i,children:function(e){return Object(H.jsxs)("div",Object(s.a)(Object(s.a)(Object(s.a)({className:"cipherarrow",ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[Object(H.jsx)("div",{className:"cipherarrow-iconlist",children:Object(H.jsx)($,{icon:G,onClick:a,title:"Remove"})}),Object(H.jsx)("div",{className:"cipherarrow-wrapper",children:Object(H.jsxs)("div",{className:"cipherarrow-display",children:[Object(H.jsx)(K,{direction:n.direction,onChange:c}),Object(H.jsx)(Q,{value:n.name,values:I,onChange:function(e){return t(e)}})]})})]}))}})}t(45);var Y=function(e){var n=e.value,t=e.onValueChange,c=Object(a.useCallback)((function(e){return t(e.target.value)}),[t]);return Object(H.jsxs)("div",{className:"cipherbox",children:[Object(H.jsx)("div",{className:"cipherbox-titlebar",children:Object(H.jsx)("div",{className:"cipherbox-handle"})}),Object(H.jsx)("textarea",{className:"cipherbox-content",value:n,onChange:c})]})};t(46);function Z(e){var n=e.calculation,t=e.calculationIndex,c=Object(l.c)(),i=Object(a.useCallback)((function(e){e.destination&&e.destination.index!==e.source.index&&c(M({calculationIndex:t,fromIndex:e.source.index,toIndex:e.destination.index}))}),[t,c]);return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(V.a,{onDragEnd:i,children:Object(H.jsx)(V.c,{droppableId:"cipherlist",direction:"horizontal",children:function(e){return Object(H.jsxs)("div",Object(s.a)(Object(s.a)({className:"cipherbox-container",ref:e.innerRef},e.droppableProps),{},{children:[n.ciphers.map((function(e,n){return Object(H.jsx)(X,{index:n,cipher:e,onNameChange:function(e){return c(q({calculationIndex:t,cipherIndex:n,name:e}))},onSettingChange:function(e,a){return c(U({calculationIndex:t,cipherIndex:n,settings:Object(u.a)({},e,a)}))},onClose:function(){return c(L({calculationIndex:t,cipherIndex:n}))},onDirectionChange:function(e){return c(T({calculationIndex:t,cipherIndex:n,direction:e}))}},e.id)})),e.placeholder]}))}})}),Object(H.jsx)("button",{className:"btn-addcipher",onClick:function(){return c(F({calculationIndex:t,cipher:N(new x)}))},children:"+"}),Object(H.jsx)(Y,{value:n.result,onValueChange:function(){}})]})}t(47);function _(){return Object(H.jsx)("footer",{className:"app-footer",children:"Made by me."})}t(48);var ee="Apocrypta",ne=function(){return g[(e=0,n=g.length,Math.floor(Math.random()*(n-e)+e))];var e,n};function te(){var e=Object(a.useState)(new Array(ee.length).fill("").map(ne)),n=Object(A.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(0),r=Object(A.a)(i,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var n=[];l(o+.1);for(var a=0;a<t.length;a++)a<o?n.push(ee[a]):n.push(ne());c(n),o===t.length&&clearInterval(e)}),500/(10*ee.length));return function(){return clearInterval(e)}})),Object(H.jsx)("header",{className:"app-header",children:Object(H.jsx)("h1",{className:"app-title",children:t.map((function(e,n){return Object(H.jsx)("span",{className:"app-title-letter",children:e},n)}))})})}var ce=t(8),ae=function(e){return e.calculations},ie=Object(ce.a)(ae,(function(e){return e.rootValue})),re=Object(ce.a)(ae,(function(e){return e.calculations})),oe=(t(49),function(){var e=Object(l.c)(),n=Object(l.d)(ie),t=Object(l.d)(re);return Object(H.jsxs)("div",{className:"app dark",children:[Object(H.jsx)(te,{}),Object(H.jsxs)("main",{className:"cipherlist-container",children:[Object(H.jsx)(Y,{value:n,onValueChange:function(n){e(B(n))}}),t.map((function(e,n){return Object(H.jsx)(Z,{calculation:e,calculationIndex:n},n)})),Object(H.jsx)("button",{className:"btn-addcalculation",onClick:function(){return e(P({ciphers:[N(new x)]}))},children:"+"})]}),Object(H.jsx)(_,{})]})}),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),i(e),r(e)}))},de=t(3),he=Object(de.c)({calculations:J}),pe=[function(e){return function(e){return function(n){e(n),["calculations/moveCipher","calculations/setRootValue","calculations/moveCalculation","calculations/setCipherName","calculations/setCipherDirection"].includes(n.type)&&fe.dispatch(R())}}}],fe=Object(W.a)({reducer:he,middleware:function(e){return[].concat(Object(O.a)(e()),pe)}});function je(e){var n=e.children;return Object(H.jsx)(l.a,{store:fe,children:n})}o.a.render(Object(H.jsx)(i.a.StrictMode,{children:Object(H.jsx)(je,{children:Object(H.jsx)(oe,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/apocrypta",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/apocrypta","/service-worker.js");le?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):se(n,e)}))}}(),ue()}],[[50,1,2]]]);
//# sourceMappingURL=main.dafce333.chunk.js.map