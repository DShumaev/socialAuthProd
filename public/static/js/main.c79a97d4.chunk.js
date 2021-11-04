(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(35),n=c.n(a),r=(c(47),c(32)),l=c(2),i=c(42),o=c(9);function u(){}var j=Object(s.createContext)({token:null,userId:null,userName:null,login:u,logout:u,isAuthenticated:!1}),d=c(41),b=Object(d.a)(),h=c(1),O=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useRef)(null),r=Object(s.useContext)(j);Object(s.useEffect)((function(){b.on("MESSAGE_FROM_SERVER",(function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))}))}),[]),Object(s.useEffect)((function(){n.current.scrollTo(0,99999)}),[c]);return Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col s8",children:Object(h.jsxs)("div",{className:"card teal darken-1 mainBlock",children:[Object(h.jsx)("div",{className:"center-align",children:Object(h.jsx)("h5",{className:"white-text",children:r.userName})}),Object(h.jsx)("div",{name:"dialog",ref:n,className:"messages #c8e6c9 teal lighten-1",children:c.length>0?c.map((function(e,t){return Object(h.jsxs)("div",{className:"message",children:[Object(h.jsx)("p",{children:e.text}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"text-darken-3",children:"Sent by ".concat(e.userName," at ").concat(e.date)})})]},t)})):Object(h.jsx)("span",{children:"No messages yet :("})}),Object(h.jsxs)("div",{className:"buttonContainer",children:[Object(h.jsx)("a",{className:"waves-effect waves-light btn",onClick:function(){b.emit("MESSAGE_TO_SERVER",{type:"bro",text:"Bro!",userName:r.userName,userId:r.userId,date:null})},children:"Bro"}),Object(h.jsx)("a",{className:"waves-effect waves-light btn",onClick:function(){b.emit("MESSAGE_TO_SERVER",{type:"sis",text:"Sis!",userName:r.userName,userId:r.userId,date:null})},children:"Sis"}),Object(h.jsx)("a",{className:"waves-effect waves-light btn",onClick:function(){r.logout()},children:"Exit"})]})]})})})},m=c(28),f=c(26),x=c(18),p=c.n(x),v=c(22),g=function(){var e=Object(s.useContext)(j),t=Object(s.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),c=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(o.a)(n,2),l=r[0],i=r[1],u=Object(s.useCallback)(function(){var e=Object(v.a)(p.a.mark((function e(t){var c,s,n,r,l,o=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",s=o.length>2&&void 0!==o[2]?o[2]:null,n=o.length>3&&void 0!==o[3]?o[3]:{},a(!0),e.prev=4,s&&(s=JSON.stringify(s),n["Content-Type"]="application/json"),e.next=8,fetch(t,{method:c,body:s,headers:n});case 8:return r=e.sent,console.log(r),e.next=12,r.json();case 12:if(l=e.sent,console.log(l),r.ok){e.next=16;break}throw new Error(l.message||"Something problem with http request");case 16:return a(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(4),a(!1),i(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:u,loading:c,error:l,clearError:Object(s.useCallback)((function(){i(null)}),[])}}(),a=c.loading,n=c.error,r=c.request,l=c.clearError,i=Object(s.useState)({email:"",password:""}),u=Object(o.a)(i,2),d=u[0],O=u[1],x=Object(s.useState)({bro:0,sis:0}),g=Object(o.a)(x,2),N=g[0],w=g[1];Object(s.useEffect)((function(){b.emit("STATISTIC_FROM_SERVER",{roomId:"all"}),b.on("STATISTIC_FOR_CLIENT",(function(e){console.log("\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438"),w({bro:e.bro,sis:e.sis})}))}),[]),Object(s.useEffect)(Object(v.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("/auth/social_network/get_token");case 2:(c=t.sent).token&&c.userId&&c.userName&&e.login(c.token,c.userId,c.userName);case 4:case"end":return t.stop()}}),t)}))),[]),Object(s.useEffect)((function(){t(n),l()}),[n,t,l]),Object(s.useEffect)((function(){window.M.updateTextFields()}),[]);var k=function(e){O(Object(f.a)(Object(f.a)({},d),{},Object(m.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(v.a)(p.a.mark((function e(){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("/auth/register","POST",Object(f.a)({},d));case 3:c=e.sent,t(c.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var t=Object(v.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r("/auth/login","POST",Object(f.a)({},d));case 3:c=t.sent,e.login(c.token,c.userId,c.userName),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"row mainContainer",children:Object(h.jsx)("div",{className:"col s6 offset-s3",children:Object(h.jsxs)("div",{className:"card teal darken-1",children:[Object(h.jsxs)("div",{className:"card-content white-text",children:[Object(h.jsx)("span",{className:"card-title",children:"Login or register "}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"enter email",id:"email",type:"text",name:"email",value:d.email,onChange:k}),Object(h.jsx)("p",{}),Object(h.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(h.jsxs)("div",{className:"input-field",children:[Object(h.jsx)("input",{placeholder:"enter password",id:"password",type:"password",name:"password",value:d.password,onChange:k}),Object(h.jsx)("label",{htmlFor:"password",children:"Password"})]})]})]}),Object(h.jsxs)("div",{className:"card-action",children:[Object(h.jsx)("button",{className:"waves-effect waves-light btn",style:{marginRight:10},onClick:E,disabled:a,children:"Sign In"}),Object(h.jsx)("button",{className:"btn grey lighten-1 black-text",onClick:S,disabled:a,children:"Sign Up"})]}),Object(h.jsx)("div",{className:"card-action",children:Object(h.jsx)("span",{className:"white-text",children:"or just use one of social networks below"})}),Object(h.jsxs)("div",{className:"card-action",children:[Object(h.jsx)("a",{className:"waves-effect waves-light btn socialAuthBtn",href:"https://sisbro.herokuapp.com/auth/facebook/login",children:"Facebook"}),Object(h.jsx)("a",{className:"waves-effect waves-light btn socialAuthBtn",href:"https://sisbro.herokuapp.com/auth/google/login",children:"Google"}),Object(h.jsx)("a",{className:"waves-effect waves-light btn socialAuthBtn",href:"https://sisbro.herokuapp.com/auth/vkontakte/login",children:"Vkontakte"})]}),Object(h.jsx)("div",{className:"card-action",children:Object(h.jsxs)("div",{className:"collapsible",children:[Object(h.jsxs)("div",{className:"collapsible-header",children:['Count of "Bro!" message:',Object(h.jsx)("span",{className:"badge",children:N.bro})]}),Object(h.jsxs)("div",{className:"collapsible-header",children:['Count of "Sis!" message:',Object(h.jsx)("span",{className:"badge right-aligned",children:N.sis})]})]})})]})})})},N="userData",w=function(){return Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"},children:Object(h.jsx)("div",{className:"preloader-wrapper active",children:Object(h.jsxs)("div",{className:"spinner-layer spinner-red-only",children:[Object(h.jsx)("div",{className:"circle-clipper left",children:Object(h.jsx)("div",{className:"circle"})}),Object(h.jsx)("div",{className:"gap-patch",children:Object(h.jsx)("div",{className:"circle"})}),Object(h.jsx)("div",{className:"circle-clipper right",children:Object(h.jsx)("div",{className:"circle"})})]})})})};var k=function(){var e=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(o.a)(n,2),l=r[0],i=r[1],u=Object(s.useState)(null),j=Object(o.a)(u,2),d=j[0],b=j[1],h=Object(s.useState)(!1),O=Object(o.a)(h,2),m=O[0],f=O[1],x=Object(s.useCallback)((function(e,t,c){a(e),i(t),b(c);try{localStorage.setItem(N,JSON.stringify({userId:t,userName:c,token:e}))}catch(s){s==window.QUOTA_EXCEEDED_ERR&&alert("Limit of data is exceeded for Local Storage")}}),[]),p=Object(s.useCallback)((function(){a(null),i(null),b(null),localStorage.removeItem(N)}),[x]);return Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem(N));e&&e.token&&x(e.token,e.userId,e.userName),f(!0)}),[x]),{login:x,logout:p,token:c,userId:l,userName:d,ready:m}}(),t=e.login,c=e.logout,a=e.token,n=e.userId,i=e.userName,u=e.ready,d=function(e){return e?Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/main",exact:!0,children:Object(h.jsx)(O,{})}),Object(h.jsx)(l.a,{to:"/main"})]}):Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:"/auth",exact:!0,children:Object(h.jsx)(g,{})}),Object(h.jsx)(l.a,{to:"/auth"})]})}(!!a);return u?Object(h.jsx)(j.Provider,{value:{login:t,logout:c,token:a,userId:n,userName:i,ready:u},children:Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{className:"container",children:d})})}):Object(h.jsx)(w,{})};c(61);n.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c79a97d4.chunk.js.map