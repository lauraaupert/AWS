(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/BIGTOP.5995e5fc.jpeg"},38:function(e,t,n){e.exports=n(69)},43:function(e,t,n){},44:function(e,t,n){},67:function(e){e.exports=JSON.parse('[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"weight":"0.20"},{"lightness":"28"},{"saturation":"23"},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#494949"},{"lightness":13},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]')},69:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),l=n.n(r),c=(n(43),n(44),n(6)),i=n(18),s=n(7),u=n(72),m=n(33),f=n(15),p=n(10),d=n.n(p),g=n(14),y=n(16),h=n.n(y),E=function(e,t,n,a,o,r){return console.log(e,t,n,a),h.a.post("/api/friends",{name:e,email:t,show:n,location:{lat:a,lng:o},photo:r})},b=function(){return h.a.get("/api/friends")},v=function(e){return h.a.get("http://api.positionstack.com/v1/forward?access_key=766fe22fc23d6d88d49cf420c88aed9e&query="+e)},w=Object(a.createContext)(),j=function(e){var t=e.children,n=Object(a.useState)([]),r=Object(c.a)(n,2),l=r[0],i=r[1];return console.log(l),o.a.createElement(w.Provider,{value:{list:l,setList:i}},t)};var O=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(n),i=Object(c.a)(l,2),p=(i[0],i[1]),d=Object(a.useContext)(w);return Object(a.useEffect)((function(){b().then((function(e){console.log(e.data),r(e.data),p(e.data),d.setList(e.data)})).catch((function(e){console.log("Error getting data: "+e)}))}),[]),o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(m.a,{lg:11},o.a.createElement(s.a.Group,{controlId:"formBasicEmail"},o.a.createElement(s.a.Control,{type:"name",placeholder:"Find Someone",style:{marginBottom:"20px",marginLeft:"10px"},onChange:function(e){return function(e){var t=e.target.value,a=[];if(console.log(t),(a=n.filter((function(e){return-1!==e.username.search(t)}))).length<1){a=n.filter((function(e){return-1!==e.show.search(t)})),console.log(a)}p(a),d.setList(a)}(e)}}))),o.a.createElement(m.a,{lg:1},o.a.createElement(f.a,{variant:"warning",type:"submit",onClick:function(e){e.preventDefault()},block:!0},"Search")))))};n(23);var k=n(67),T=function(){var e=Object(a.useState)({}),t=Object(c.a)(e,2),n=t[0],r=t[1];console.log(n);var l=Object(a.useContext)(w);console.log(l.list);return o.a.createElement(i.c,{googleMapsApiKey:"AIzaSyD38kFky899eBip0oY_NzWFj65Qor-oZ3U"},o.a.createElement(O,null),o.a.createElement(i.a,{mapContainerStyle:{height:"70vh",width:"100%",opacity:".85"},options:{styles:k},zoom:2.3,center:{lat:41.3851,lng:2.1734}},l.list.map((function(e){return o.a.createElement(i.d,{key:e.username,position:e.location,onClick:function(){return function(e){r(e)}(e)}})})),n.location&&o.a.createElement(i.b,{position:n.location,clickable:!0,onCloseClick:function(){return r({})}},o.a.createElement("div",null,o.a.createElement("p",{style:{fontSize:"20px"}},n.name),o.a.createElement("p",null,n.show),o.a.createElement("p",null,n.email),n.photo?o.a.createElement("img",{style:{height:"200px",width:"auto"},src:n.photo}):o.a.createElement("p",null)))))},C=n(35),S=n(36);var x=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),i=Object(c.a)(l,2),u=i[0],m=i[1],p=Object(a.useState)(""),y=Object(c.a)(p,2),h=y[0],b=y[1],w=Object(a.useState)(""),j=Object(c.a)(w,2),O=j[0],k=j[1],T=Object(a.useState)(""),C=Object(c.a)(T,2),S=C[0],x=C[1],L=Object(a.useState)(""),I=Object(c.a)(L,2),F=I[0],B=I[1],N=Object(a.useState)(""),z=Object(c.a)(N,2),A=z[0],D=z[1],G=Object(a.useState)(""),W=Object(c.a)(G,2),P=W[0],Y=W[1],U=Object(a.useState)(""),H=Object(c.a)(U,2),J=H[0],R=H[1],_=Object(a.useRef)(null);function q(){return(q=Object(g.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""===n||""===u||""===h||""===O?alert("Please fill out your name, email, show, and location"):P?E(n,u,h,A,P,J):v(O).then((function(e){var t=e.data.data[0].latitude,a=e.data.data[0].longitude;console.log("Friend Data: ",n,u,h,t,a),E(n,u,h,t,a,J)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){console.log(e.coords),x(e.coords.latitude),B(e.coords.longitude)}))}),[]),o.a.createElement(s.a,null,o.a.createElement(s.a.Group,{controlId:"name"},o.a.createElement(s.a.Label,null,"Name"),o.a.createElement(s.a.Control,{type:"email",placeholder:"Enter your name",onChange:function(e){return r(e.target.value)},value:n,name:"username"})),o.a.createElement("br",null),o.a.createElement(s.a.Group,{controlId:"email"},o.a.createElement(s.a.Label,null,"Email"),o.a.createElement(s.a.Control,{type:"email",placeholder:"Email",onChange:function(e){return m(e.target.value)},value:u,name:"email"})),o.a.createElement("br",null),o.a.createElement(s.a.Group,{controlId:"show"},o.a.createElement(s.a.Label,null,"Which show were you on?"),o.a.createElement(s.a.Control,{type:"email",placeholder:"Show",onChange:function(e){return b(e.target.value)},value:h,name:"show"})),o.a.createElement("br",null),o.a.createElement(s.a.Group,{controlId:"address"},o.a.createElement(s.a.Label,null,"Where are you located?"),o.a.createElement(s.a.Control,{type:"address",placeholder:"Address",onChange:function(e){return k(e.target.value)},value:O}),o.a.createElement(f.a,{variant:"success",onClick:function(e){e.preventDefault(),D(S),Y(F),k(S,F)}},"Use Current Location")),o.a.createElement("br",null),o.a.createElement(s.a.Group,{controlId:"photo"},o.a.createElement("input",{type:"file",ref:_,className:"form-input p-2"}),o.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault();var t=new FormData;console.log(_),t.append("image",_.current.files[0]),console.log(t),function(){var e=Object(g.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/image-upload",{mode:"cors",method:"POST",body:t});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:return a=e.sent,R(a.Location),console.log("postImage: ",a.Location),e.abrupt("return",a.Location);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}()()},type:"submit"},"Upload")),o.a.createElement(f.a,{variant:"primary",type:"submit",onClick:function(e){return q.apply(this,arguments)}},"Submit"))},L=n(17);function I(e){return o.a.createElement(L.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(L.a.Header,null,o.a.createElement(L.a.Title,{id:"contained-modal-title-vcenter"},"Add Yourself!")),o.a.createElement(L.a.Body,null,o.a.createElement("h4",null,"Enter Your Info:"),o.a.createElement(x,null)),o.a.createElement(L.a.Footer,null,o.a.createElement(f.a,{onClick:function(){e.onHide(),window.location.reload()}},"Close")))}var F=function(){var e=o.a.useState(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{variant:"primary",size:"lg",block:!0,onClick:function(){return a(!0)}},"Add Yourself!"),o.a.createElement(I,{show:n,onHide:function(){return a(!1)}}))};var B=function(){return o.a.createElement(C.a,{fluid:!0},o.a.createElement(S.a,{style:{height:"200px",paddingTop:"150px",paddingBottom:"200px"}},o.a.createElement("h1",{style:{color:"white"}},"Find Each Other"),o.a.createElement("p",{style:{color:"white"}},"Your Circus Family is just a click away"),o.a.createElement(F,null)))},N=n(37),z=n.n(N);var A=function(){return o.a.createElement("div",{className:"App",style:{backgroundSize:"cover",backgroundImage:"url("+z.a+")",backgroundPositionY:"30%",margin:0}},o.a.createElement(j,null,o.a.createElement(B,null),o.a.createElement(T,null)))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(68);l.a.render(o.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");D?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):G(e)}))}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.cfc615cb.chunk.js.map