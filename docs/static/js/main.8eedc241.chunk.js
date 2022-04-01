(this["webpackJsonpmeeting-planner-react"]=this["webpackJsonpmeeting-planner-react"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(8),r=n.n(c),o=n(33),s=n(9),i=n(11),l=n(17),u=(n(72),n(23)),d=n.n(u),j=n(24),m=n(5),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],o=function(){r(e)},s=function(e){var t=e.target;r(Object(m.a)(Object(m.a)({},c),{},Object(j.a)({},t.name,t.value)))};return[c,s,o]},f=n(12),p=n.n(f),O=n(20),v="".concat("https://events-calendar-backend.herokuapp.com/api"),h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e);return"GET"!==n?fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)}):fetch(a)},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(v,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"!==n?fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c}})},g="[auth]: Login",y="[auth]: Finish checking",N="[auth]: Logout",w="[ui] Open modal",k="[ui] Close modal",C="[event] Add new",E="[event] Set active",S="[event] Clear active",A="[event] Updated",D="[event] Deleted",_="[events] Loaded",P="[events] Clear",T="[calendar] Date selected",I=n(16),H=n.n(I),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{start:H()(e.start).toDate(),end:H()(e.end).toDate()})}))},M=function(e){return{type:E}},G=function(e){return{type:C,payload:e}},R=function(e){return{type:A,payload:e}},V=function(e){localStorage.setItem("token",e),localStorage.setItem("token-init-date",(new Date).getTime())},F=function(e,t){if(!e)for(var n in e="",t){if(t.hasOwnProperty(n))e+=t[n].msg,e+="<br>"}return d.a.fire({icon:"error",title:"Oops...",html:e})},J=function(e){return{type:g,payload:e}},U=function(){return function(e){localStorage.removeItem("token"),localStorage.removeItem("token-init-date"),e({type:P}),e({type:N})}},X=n(3);function q(){var e=Object(i.b)(),t=b({lEmail:"",lPassword:""}),n=Object(l.a)(t,2),a=n[0],c=n[1],r=a.lEmail,o=a.lPassword,s=b({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),u=Object(l.a)(s,2),j=u[0],m=u[1],f=j.rName,v=j.rEmail,x=j.rPassword1,g=j.rPassword2;return Object(X.jsx)("div",{className:"login-container",children:Object(X.jsx)("div",{className:"container",children:Object(X.jsxs)("div",{className:"row forms-container",children:[Object(X.jsxs)("div",{className:"col-md-6 login-form-1 mt-2 p-4",children:[Object(X.jsx)("h3",{className:"text-white text-center",children:"Ingreso"}),Object(X.jsxs)("form",{className:"form-container",onSubmit:function(t){var n,a;t.preventDefault(),e((n=r,a=o,function(){var e=Object(O.a)(p.a.mark((function e(t){var c,r,o,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth/login",{email:n,password:a},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(r=e.sent).status?(o=r.token,s=r._id,i=r.name,V(o),t(J({_id:s,name:i}))):F(r.message,r.errors);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control input-form",placeholder:"Correo",name:"lEmail",value:r,onChange:c,autoComplete:"off"})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control input-form",placeholder:"Contrase\xf1a",name:"lPassword",value:o,onChange:c,autoComplete:"off"})}),Object(X.jsx)("div",{className:"form-group d-flex justify-content-center",children:Object(X.jsx)("input",{type:"submit",className:"btn-submit",value:"Login",autoComplete:"off"})})]})]}),Object(X.jsxs)("div",{className:"col-md-6 login-form-2 mt-2 p-4",children:[Object(X.jsx)("h3",{className:"text-white text-center",children:"Registro"}),Object(X.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),x!==g)return d.a.fire({icon:"error",title:"Error",text:"Las contranse\xf1as no son iguales"});var n,a,c;e((n=f,a=v,c=x,function(){var e=Object(O.a)(p.a.mark((function e(t){var r,o,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("auth/register",{name:n,email:a,password:c},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(o=e.sent).status?(s=o.token,i=o._id,V(s),t(J({_id:i,name:n}))):F(o.message,o.errors);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"text",className:"form-control input-form",placeholder:"Nombre",name:"rName",value:f,onChange:m,autoComplete:"off"})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"email",className:"form-control input-form",placeholder:"Correo",name:"rEmail",value:v,onChange:m,autoComplete:"off"})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control input-form",placeholder:"Contrase\xf1a",name:"rPassword1",value:x,onChange:m,autoComplete:"off"})}),Object(X.jsx)("div",{className:"form-group",children:Object(X.jsx)("input",{type:"password",className:"form-control input-form",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:g,onChange:m,autoComplete:"off"})}),Object(X.jsx)("div",{className:"form-group d-flex justify-content-center",children:Object(X.jsx)("input",{type:"submit",className:"btn-submit",value:"Crear cuenta",autoComplete:"off"})})]})]})]})})})}var z=n(50),B=(n(76),n(77),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}});function K(e){var t=e.event,n=t.title,a=t.user;return Object(X.jsxs)("div",{children:[Object(X.jsx)("strong",{children:n}),Object(X.jsxs)("span",{children:["-",a.name]})]})}var Q=n(45),W=n.n(Q),Y=n(46),Z=n.n(Y),$=(n(106),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});W.a.setAppElement("#root");var ee=H()().minutes(0).seconds(0).add(1,"hours"),te=ee.clone().add(1,"hours"),ne={title:"",notes:"",start:ee.toDate(),end:te.toDate()};function ae(){var e=Object(i.c)((function(e){return e.ui})).modalOpen,t=Object(i.c)((function(e){return e.calendar})),n=t.eventActive,c=t.calendarDateSelected,r=Object(i.b)(),o=Object(a.useState)(ne),s=Object(l.a)(o,2),u=s[0],b=s[1],f=u.title,v=u.notes,h=u.start,g=u.end,y=f.trim().length<2,N=Object(a.useState)(!1),w=Object(l.a)(N,2),C=w[0],E=w[1];Object(a.useEffect)((function(){c&&b(Object(m.a)(Object(m.a)({},ne),{},{start:c}))}),[c]),Object(a.useEffect)((function(){b(n||ne)}),[n]);var S=function(e){var t=e.target;b(Object(m.a)(Object(m.a)({},u),{},Object(j.a)({},t.name,t.value))),E(!y)},A=function(e){r({type:k}),r(M()),b(ne)},D=function(e){return d.a.fire({icon:"error",title:"Oops...",text:e})};return Object(X.jsxs)(W.a,{isOpen:e,onRequestClose:A,style:$,contentLabel:"Example Modal",overlayClassName:"modal-fondo",closeTimeoutMS:200,ariaHideApp:!0,children:[Object(X.jsx)("h1",{children:n?"Editar Evento":"Nuevo Evento"}),Object(X.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var t,a=H()(h),c=H()(g);return a.isSameOrAfter(c)?D("La fecha fin debe ser mayor a la inicial"):y?D("El titulo es obligatorio"):(r(n?(t=u,function(){var e=Object(O.a)(p.a.mark((function e(n){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events/".concat(t.id),t,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(c=e.sent).status?n(R(t)):F(c.message,c.errors),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(O.a)(p.a.mark((function t(n,a){var c,r,o,s,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("events",e,"POST");case 2:return c=t.sent,t.next=5,c.json();case 5:r=t.sent,o=a().auth,s=o._id,i=o.name,r.status?(e.id=r.event.id,e.user={_id:s,name:i},n(G(e))):F(r.message,r.errors);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(u)),void A())},children:[Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora inicio"}),Object(X.jsx)(Z.a,{className:"form-control",onChange:function(e){b(Object(m.a)(Object(m.a)({},u),{},{start:e}))},value:h,format:"y-MM-dd HH:mm:ss a"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Fecha y hora fin"}),Object(X.jsx)(Z.a,{className:"form-control",onChange:function(e){b(Object(m.a)(Object(m.a)({},u),{},{end:e}))},value:g,format:"y-MM-dd HH:mm:ss a",minDate:h})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("label",{children:"Titulo y notas"}),Object(X.jsx)("input",{type:"text",className:"form-control ".concat(C?"is-valid":"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:f,onChange:S,autoComplete:"off"}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(X.jsxs)("div",{className:"form-group",children:[Object(X.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:v,onChange:S}),Object(X.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(X.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(X.jsx)("i",{className:"far fa-save"}),Object(X.jsx)("span",{children:" Guardar"})]})]})]})}n(107),n(108);function ce(e){var t=e.className,n=e.handleClick,a=e.text;return Object(X.jsx)("button",{className:"btn ".concat(t),onClick:n,children:a})}function re(){var e=Object(i.c)((function(e){return e.auth})).name,t=Object(i.b)();return Object(X.jsx)("div",{className:"navbar navbar-dark bg-dark mb-4",children:Object(X.jsxs)("div",{className:"container",children:[Object(X.jsx)("span",{className:"navbar-brand",children:e}),Object(X.jsxs)("button",{className:"btn btn-danger",onClick:function(){t(U())},children:[Object(X.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(X.jsx)("span",{children:"Salir"})]})]})})}H.a.locale("es");var oe=Object(z.b)(H.a);function se(){var e=Object(i.c)((function(e){return e.calendar})),t=e.events,n=e.eventActive,c=Object(i.c)((function(e){return e.auth}))._id,r=Object(i.b)(),o=Object(a.useState)(localStorage.getItem("currentView")||"week"),s=Object(l.a)(o,2),u=s[0],d=s[1];Object(a.useEffect)((function(){r(function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("events");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).status?(c=L(a.events),t({type:_,payload:c})):F(a.message,a.errors),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[r]);var j=function(e){r({type:w})},m={event:K};return Object(X.jsxs)("div",{className:"main-calendar",children:[Object(X.jsx)(re,{}),Object(X.jsx)(z.a,{localizer:oe,events:t,startAccessor:"start",endAccessor:"end",messages:B,eventPropGetter:function(e,t,n,a){return{className:"event-calendar ".concat(e.user._id===c?"event-own":"event-not-own")}},onDoubleClickEvent:j,onSelectEvent:function(e){r({type:E,payload:e})},onView:function(e){d(e),localStorage.setItem("currentView",e)},view:u,components:m,onSelectSlot:function(e){var t=e.start;r({type:T,payload:t}),n&&r(M())},selectable:!0}),Object(X.jsx)(ce,{className:"btn-primary fab-add",text:Object(X.jsx)("i",{className:"fas fa-plus"}),handleClick:j}),n&&Object(X.jsx)(ce,{className:"btn-danger fab-delete",text:Object(X.jsx)("i",{className:"fas fa-trash"}),handleClick:function(e){r(function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.eventActive.id,e.prev=1,e.next=4,x("events/".concat(a),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(r=e.sent).status?t({type:D}):F(r.message,r.errors),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())}}),Object(X.jsx)(ae,{})]})}var ie=n(36);function le(e){var t=e.isAuthenticated,n=e.component,a=Object(ie.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(s.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return t?Object(X.jsx)(n,Object(m.a)({},e)):Object(X.jsx)(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function ue(e){var t=e.isAuthenticated,n=e.component,a=Object(ie.a)(e,["isAuthenticated","component"]);return Object(X.jsx)(s.b,Object(m.a)(Object(m.a)({},a),{},{component:function(e){return t?Object(X.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}}):Object(X.jsx)(n,Object(m.a)({},e))}}))}function de(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),n=t.checking,c=!!t._id;return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a,c,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/renew-token");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).status?(c=a.token,r=a._id,o=a.name,V(c),t(J({_id:r,name:o}))):t({type:y});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(X.jsx)("h3",{children:"Checking..."}):Object(X.jsx)(o.a,{children:Object(X.jsx)("div",{children:Object(X.jsxs)(s.d,{children:[Object(X.jsx)(ue,{exact:!0,path:"/login",component:q,isAuthenticated:c}),Object(X.jsx)(le,{exact:!0,path:"/",component:se,isAuthenticated:c}),Object(X.jsx)(s.a,{to:"/"})]})})})}n(112);var je=n(25),me=n(62),be={modalOpen:!1},fe=n(51),pe={events:[],eventActive:null,calendarDateSelected:null},Oe={checking:!0,_id:"",name:""},ve=Object(je.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!0});case k:return Object(m.a)(Object(m.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(m.a)(Object(m.a)({},e),{},{calendarDateSelected:null,eventActive:t.payload});case S:return Object(m.a)(Object(m.a)({},e),{},{eventActive:null});case C:return Object(m.a)(Object(m.a)({},e),{},{events:[].concat(Object(fe.a)(e.events),[t.payload])});case A:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case D:return Object(m.a)(Object(m.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.eventActive.id})),eventActive:null});case _:return Object(m.a)(Object(m.a)({},e),{},{events:Object(fe.a)(t.payload)});case T:return Object(m.a)(Object(m.a)({},e),{},{calendarDateSelected:t.payload});case P:return Object(m.a)(Object(m.a)({},e),pe);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(m.a)(Object(m.a)(Object(m.a)({},e),t.payload),{},{checking:!1});case y:return Object(m.a)(Object(m.a)({},e),{},{checking:!1});case N:return{checking:!1};default:return e}}}),he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.c,xe=Object(je.d)(ve,he(Object(je.a)(me.a)));function ge(){return Object(X.jsx)(i.a,{store:xe,children:Object(X.jsx)(de,{})})}r.a.render(Object(X.jsx)(ge,{}),document.getElementById("root"))},72:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.8eedc241.chunk.js.map