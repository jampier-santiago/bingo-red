(this["webpackJsonpbingo-red"]=this["webpackJsonpbingo-red"]||[]).push([[0],{30:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(19),s=a.n(i),r=(a(36),a(4)),o=a(3),l=a(6),d=a.n(l),j=(a(42),a.p+"static/media/logo.cdfcfbb6.png"),u=a(0);function m(){function e(e){var t=document.getElementById("".concat(e.target.id)),a=document.getElementById("border".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),n=document.getElementById("label".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1)));""!==t.value&&""!==t.value.trim()?(a.classList.contains("warning")&&a.classList.remove("warning"),n.classList.contains("warning")&&n.classList.remove("warning"),a.classList.add("on"),n.classList.add("on")):(a.classList.contains("on")&&a.classList.remove("on"),n.classList.contains("on")&&n.classList.remove("on"),a.classList.add("warning"),n.classList.add("warning"))}function t(e){var t=document.getElementById("".concat(e.target.id)),a=document.getElementById("border".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),n=document.getElementById("label".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1)));""!==t.value&&""!==t.value.trim()?t.style.height="20px":(t.style.height="0px",n.style.fontSize="14px"),a.classList.contains("on")&&a.classList.remove("on"),n.classList.remove("on")&&n.classList.remove("on")}return Object(u.jsx)("section",{className:"container-login",children:Object(u.jsx)("div",{className:"modal-login",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("div",{className:"modal-login__image",children:Object(u.jsx)("img",{src:j,alt:"Logo de Bingo Red"})}),Object(u.jsxs)("div",{className:"modal-login__container-input",children:[Object(u.jsxs)("div",{className:"container-input-form",children:[Object(u.jsx)("label",{htmlFor:"inputEmail",id:"labelInputEmail",className:"label-input-form",children:"Correo"}),Object(u.jsx)("input",{type:"email",name:"inputEmail",id:"inputEmail",onChange:e,onFocus:e,onBlur:t}),Object(u.jsx)("span",{className:"line-input-form",id:"borderInputEmail"})]}),Object(u.jsxs)("div",{className:"container-input-form",children:[Object(u.jsx)("label",{htmlFor:"inputPassword",id:"labelInputPassword",className:"label-input-form",children:"Contrase\xf1a"}),Object(u.jsx)("input",{type:"password",name:"inputPassword",id:"inputPassword",onChange:e,onFocus:e,onBlur:t}),Object(u.jsx)("span",{className:"line-input-form",id:"borderInputPassword"})]})]}),Object(u.jsxs)("div",{className:"modal-login__btn",children:[Object(u.jsxs)("button",{type:"button",onClick:function(){var e=document.getElementById("inputEmail"),t=document.getElementById("inputPassword");if(""!==e.value&&""!==t.value)if(""!==e.value.trim()&&""!==t.value.trim()){var a=new Headers;a.append("Content-Type","application/json");var n=JSON.stringify({username:e.value.trim(),password:t.value.trim()});fetch("https://java.bocetos.co/userred-0.0.1-SNAPSHOT/auth",{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){if(JSON.parse(e)){var t=JSON.parse(e),a=t.Authorization;localStorage.setItem("token",a),localStorage.setItem("userName",t.name),window.location="/dashboard"}})).catch((function(){return d.a.fire({icon:"error",title:"Error en inicio de sesion",text:"Los datos son incorrectos, int\xe9ntelo nuevamente."})}))}else d.a.fire({icon:"error",title:"Datos incompletos",text:"Uno de los campos esta vac\xedo"});else d.a.fire({icon:"error",title:"Datos incompletos",text:"Uno de los campos esta vac\xedo"})},children:[Object(u.jsx)("span",{className:"text-button",children:"iniciar sesi\xf3n"}),Object(u.jsx)("span",{className:"border-button"})]}),Object(u.jsx)("span",{children:"Version: 23 de Febrero 2020"})]})]})})})}var b=a(2),h=a(9),O=a.n(h),p=a.p+"static/media/users-dark.c4989f04.svg",g=a.p+"static/media/dado.f90e455e.svg",x=a.p+"static/media/shopping-cart.327b94e4.svg",f=a.p+"static/media/clipboard.dbbe2c72.svg",v=a.p+"static/media/tablero.d2ba3025.svg",N=a.p+"static/media/list.32e5430d.svg",w=a.p+"static/media/tablet.de977fe6.svg",y=a.p+"static/media/shopping-bag.ad287c9f.svg";a(44);function _(e){var t=e.seeMenu;return Object(u.jsxs)("section",{className:"container-menu",style:t?{display:"flex"}:{display:"none"},children:[Object(u.jsx)("div",{className:"container-menu__img",children:Object(u.jsx)("img",{src:j,alt:"Logo de Bingo Red"})}),Object(u.jsx)("div",{className:"container-menu__user-name",children:Object(u.jsx)("span",{children:localStorage.getItem("userName")})}),Object(u.jsxs)("div",{className:"container-menu__routes",children:[Object(u.jsxs)(r.b,{className:"item-menu",to:"/dashboard",children:[Object(u.jsx)("img",{src:f,alt:"Icono de una tabla de tareas"}),Object(u.jsx)("span",{children:"Dashboard"})]}),Object(u.jsxs)("div",{className:"item-menu",children:[Object(u.jsx)("img",{src:p,alt:"Icono de un grupo de usuarios"}),Object(u.jsx)("span",{children:"Usuarios"})]}),Object(u.jsxs)("div",{className:"item-menu",children:[Object(u.jsx)("img",{src:g,alt:"Icono de un dado"}),Object(u.jsx)("span",{children:"Reyes"})]}),Object(u.jsxs)("div",{className:"item-menu",children:[Object(u.jsx)("img",{src:y,alt:"icono de una bolsa de compras"}),Object(u.jsx)("span",{children:"Acumulados"})]}),Object(u.jsxs)("div",{className:"item-menu",children:[Object(u.jsx)("img",{src:N,alt:"Icono de una lista"}),Object(u.jsx)("span",{children:"Cartones y modulos"})]}),Object(u.jsxs)(r.b,{className:"item-menu",to:"/figuras",children:[Object(u.jsx)("img",{src:v,alt:"Icono de un tablero de bingo"}),Object(u.jsx)("span",{children:"Figuras y modalidades"})]}),Object(u.jsxs)("div",{className:"item-menu",children:[Object(u.jsx)("img",{src:x,alt:"icono de un carrito de compras"}),Object(u.jsx)("span",{children:"Valores unitarios"})]}),Object(u.jsxs)("div",{className:"item-menu",children:[Object(u.jsx)("img",{src:w,alt:"Icono de una tablet"}),Object(u.jsx)("span",{children:"Tablets"})]})]})]})}var S=a.p+"static/media/menu.f7911658.svg",I=a.p+"static/media/user.0f9ecbd9.svg",E=a.p+"static/media/brush.c93d07b6.svg",C=a.p+"static/media/cerrar-sesion.5f82e10b.svg",k=a.p+"static/media/profile-user.705a0456.svg";a(50);function A(e){return e.seeModal?Object(u.jsxs)("section",{className:"container-modal-nav",children:[Object(u.jsx)("header",{className:"container-modal-nav__header",children:Object(u.jsx)("h3",{children:localStorage.getItem("userName")})}),Object(u.jsxs)("section",{className:"container-modal-nav__info",children:[Object(u.jsxs)(r.b,{className:"item-modal-nav",to:"/perfil",children:[Object(u.jsx)("img",{src:k,alt:"Icono para entrar al perfil del usuario"}),Object(u.jsx)("span",{children:"Perfil"})]}),Object(u.jsxs)("div",{className:"item-modal-nav",children:[Object(u.jsx)("img",{src:E,alt:"Icono de un pincel"}),Object(u.jsx)("span",{children:"Temas"})]}),Object(u.jsxs)("div",{className:"item-modal-nav",onClick:function(){window.location="/"},children:[Object(u.jsx)("img",{src:C,alt:"Icono para cerrar sesi\xf3n"}),Object(u.jsx)("span",{children:"Cerrar sesi\xf3n"})]})]})]}):null}a(51);function B(e){var t=e.setSeeMenu,a=e.seeMenu,c=Object(n.useState)(!1),i=Object(b.a)(c,2),s=i[0],r=i[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A,{seeModal:s}),Object(u.jsxs)("nav",{className:"nav-menu",children:[Object(u.jsxs)("div",{className:"nav-left",children:[Object(u.jsx)("div",{className:"nav-menu__btn-menu",children:Object(u.jsx)("img",{src:S,alt:"Icono de menu",onClick:function(){t(!a)}})}),Object(u.jsx)("div",{className:"nav-menu__title",children:Object(u.jsx)("h2",{children:"SALA Verano 22"})})]}),Object(u.jsx)("div",{className:"nav-right",children:Object(u.jsx)("img",{src:I,alt:"Icono de usuario",onClick:function(){return r(!s)}})})]})]})}var M=a.p+"static/media/left-arrow.a8328f22.svg",F=a.p+"static/media/user-dark.a6d54a30.svg",L=a.p+"static/media/calendar.2416ff66.svg",H=a.p+"static/media/chair.14e9aad5.svg",z=a.p+"static/media/code.e3b23a51.svg",T=a.p+"static/media/imgUser.757b6494.svg";a(52);function P(){var e=O()(d.a),t=Object(n.useState)(localStorage.getItem("seeMenu")),a=Object(b.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(null),r=Object(b.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(null),m=Object(b.a)(j,2),h=m[0],g=m[1],x=Object(n.useState)(null),f=Object(b.a)(x,2),v=f[0],N=f[1],w=Object(n.useState)(null),y=Object(b.a)(w,2),S=y[0],I=y[1],E=Object(n.useState)(null),C=Object(b.a)(E,2),k=C[0],A=C[1];return Object(n.useEffect)((function(){document.title="Bingo RED - perfil",function(){var t=localStorage.getItem("token"),a=new Headers;a.append("Authorization",t),fetch("https://java.bocetos.co/userred-0.0.1-SNAPSHOT/myprofile",{method:"GET",headers:a,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);l(t.data.username),N(t.data.lastNames),g(t.data.names),I(t.data.rolDTO.name);var a=t.data.createdAt.split("T")[0].split("-"),n=a[0];a[0]=a[2],a[2]=n;var c="";switch(a[1]){case"01":c="Enero";break;case"02":c="Febrero";break;case"03":c="Marzo";break;case"04":c="Abril";break;case"05":c="Mayo";break;case"06":c="Junio";break;case"07":c="Julio";break;case"08":c="Agosto";break;case"09":c="Septiembre";break;case"10":c="Octubre";break;case"11":c="Noviembre";break;case"12":c="Diciembre"}A(a[0]+" "+c+" "+a[2])})).catch((function(){return e.fire({icon:"error",title:"Error en el servidor",text:"Hemos tenido un problema para traer los datos, int\xe9ntelo en otra ocasi\xf3n."}).then((function(e){e.isConfirmed&&(window.location="/")}))}))}()}),[]),Object(u.jsxs)("section",{className:"container-perfil",children:[Object(u.jsx)(_,{seeMenu:c}),Object(u.jsxs)("section",{className:"container-panel",style:c&&window.screen.width>766?{width:"80%",marginLeft:"20%"}:{width:"100%"},children:[Object(u.jsx)("header",{className:"container__header",children:Object(u.jsx)(B,{setSeeMenu:i,seeMenu:c})}),Object(u.jsxs)("div",{className:"container-panel__info",children:[Object(u.jsx)("div",{className:"btn-back",children:Object(u.jsx)("div",{className:"container-btn-back",children:Object(u.jsx)("img",{src:M,alt:"Icono de una flecha apuntando al lado izquierdo"})})}),Object(u.jsxs)("div",{className:"panel",children:[Object(u.jsxs)("div",{className:"panel--left",children:[Object(u.jsxs)("div",{className:"item-panel",children:[Object(u.jsx)("div",{className:"item-panel__image",children:Object(u.jsx)("img",{src:F,alt:"Icono de un usuario"})}),Object(u.jsxs)("div",{className:"item-panel__info",children:[Object(u.jsx)("span",{children:Object(u.jsx)("small",{children:"Nombre"})}),Object(u.jsx)("span",{children:Object(u.jsx)("strong",{children:h})})]})]}),Object(u.jsxs)("div",{className:"item-panel",children:[Object(u.jsx)("div",{className:"item-panel__image",children:Object(u.jsx)("img",{src:p,alt:"Icono de un grupo de usuarios"})}),Object(u.jsxs)("div",{className:"item-panel__info",children:[Object(u.jsx)("span",{children:Object(u.jsx)("small",{children:"Apellidos"})}),Object(u.jsx)("span",{children:Object(u.jsx)("strong",{children:v})})]})]}),Object(u.jsxs)("div",{className:"item-panel",children:[Object(u.jsx)("div",{className:"item-panel__image",children:Object(u.jsx)("img",{src:z,alt:"icono de programaci\xf3n"})}),Object(u.jsxs)("div",{className:"item-panel__info",children:[Object(u.jsx)("span",{children:Object(u.jsx)("small",{children:"Nombre del usuario"})}),Object(u.jsx)("span",{children:Object(u.jsx)("strong",{children:o})})]})]}),Object(u.jsxs)("div",{className:"item-panel",children:[Object(u.jsx)("div",{className:"item-panel__image",children:Object(u.jsx)("img",{src:H,alt:"Icono de una silla"})}),Object(u.jsxs)("div",{className:"item-panel__info",children:[Object(u.jsx)("span",{children:Object(u.jsx)("small",{children:"Rol"})}),Object(u.jsx)("span",{children:Object(u.jsx)("strong",{children:S})})]})]}),Object(u.jsxs)("div",{className:"item-panel",children:[Object(u.jsx)("div",{className:"item-panel__image",children:Object(u.jsx)("img",{src:L,alt:"Icono de un calendario"})}),Object(u.jsxs)("div",{className:"item-panel__info",children:[Object(u.jsx)("span",{children:Object(u.jsx)("small",{children:"Fecha de creacion"})}),Object(u.jsx)("span",{children:Object(u.jsx)("strong",{children:k})})]})]})]}),Object(u.jsx)("div",{className:"panel--right",children:Object(u.jsx)("div",{className:"container-image",children:Object(u.jsx)("img",{src:T,alt:"Imagen del perfil del usuario"})})})]}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("span",{children:["Bingo RED. Hecho por",Object(u.jsx)("a",{href:"https://progracol.com",target:"_blank",children:"prograCol"})]})})]})]})]})}var D=a.p+"static/media/add.aa40e898.svg",J=a.p+"static/media/edit.14e5d794.svg",U=a.p+"static/media/cancel.76176fdb.svg";a(53);function R(){var e=O()(d.a),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){!function(){var t=new Headers;t.append("Authorization",localStorage.getItem("token")),fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure",{method:"GET",headers:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);console.log(t.data),i(t.data)})).catch((function(){e.fire({icon:"error",title:"Error en el servidor",text:"Hemos tenido un problema para traer los datos, int\xe9ntelo en otra ocasi\xf3n."}).then((function(e){e.isConfirmed&&(window.location="/")}))}))}()}),[]),Object(u.jsxs)("section",{className:"container-table-figures",children:[Object(u.jsx)("div",{className:"container-table-figures__add",children:Object(u.jsx)(r.b,{className:"container-add",to:"nueva-figura",children:Object(u.jsx)("img",{src:D,alt:"Icono del signo +"})})}),Object(u.jsxs)("div",{className:"container-table-figures__body",children:[c&&c.map((function(e,t){if(!e.deleteAt)return Object(u.jsxs)("div",{className:"card-figure",children:[Object(u.jsxs)("div",{className:"card-figure__header",children:[Object(u.jsx)("span",{children:e.name}),Object(u.jsxs)("div",{children:[Object(u.jsx)(r.b,{to:"/figuras/".concat(e.id),children:Object(u.jsx)("img",{src:J,alt:"Icono de un l\xe1piz"})}),Object(u.jsx)("img",{src:U,alt:"Icono de una X"})]})]}),Object(u.jsx)("div",{className:"card-figure__body",children:Object.values(e.positionsWinner).map((function(e,t){return Object(u.jsx)("div",{className:e?"position-card active":"position-card"},t)}))})]},t)})),!c&&Object(u.jsx)("section",{className:"container-icon-loader",children:Object(u.jsx)("div",{className:"icon-loader"})})]})]})}var G=a.p+"static/media/delete.b8d2a79c.svg";a(54);function V(){var e=O()(d.a),t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){!function(){var t=new Headers;t.append("Authorization",localStorage.getItem("token"));var a={method:"GET",headers:t,redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure?&Authorization=".concat(localStorage.getItem("token")),a).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);i(t.data)})).catch((function(){return e.fire({icon:"error",title:"Error en el servidor",text:"Hemos tenido un problema para traer los datos, int\xe9ntelo en otra ocasi\xf3n."}).then((function(e){e.isConfirmed&&(window.location="/")}))}))}()}),[]),Object(u.jsxs)("section",{className:"container-table-modalities",children:[Object(u.jsx)("div",{className:"container-table-modalities__add",children:Object(u.jsx)("div",{className:"container-add",children:Object(u.jsx)("img",{src:D,alt:"Icono del signno +"})})}),Object(u.jsxs)("div",{className:"container-table-modalities__table",children:[Object(u.jsxs)("div",{className:"header-table-modalities",children:[Object(u.jsx)("div",{className:"header-table-modalities__item",children:Object(u.jsx)("span",{children:"Nombre de la modalidad"})}),Object(u.jsx)("div",{className:"header-table-modalities__item",children:Object(u.jsx)("span",{children:"Oportunidad"})}),Object(u.jsx)("div",{className:"header-table-modalities__item",children:Object(u.jsx)("span",{children:"Cerrar al azar"})}),Object(u.jsx)("div",{className:"header-table-modalities__item",children:Object(u.jsx)("span",{children:"Accciones"})})]}),Object(u.jsx)("div",{className:"body-table-modalities",children:c&&Object.values(c).map((function(e,t){return Object(u.jsxs)("div",{className:"row-table-modalities",children:[Object(u.jsx)("span",{children:e.name}),Object(u.jsx)("span",{children:e.opportunity}),Object(u.jsx)("span",{children:e.closeAt}),Object(u.jsxs)("div",{className:"actions-table-modalities",children:[Object(u.jsx)(r.b,{to:"/modalidades/".concat(e.id),children:Object(u.jsx)("img",{src:J,alt:"Icono de un l\xe1piz"})}),Object(u.jsx)("img",{src:G,alt:"Icono de una X"})]})]},t)}))})]})]})}a(55);function q(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),s=Object(b.a)(i,2),r=s[0],o=s[1];return Object(n.useEffect)((function(){document.title="Bingo RED - Figuras"}),[]),Object(u.jsxs)("section",{className:"container small",children:[Object(u.jsx)(_,{seeMenu:a}),Object(u.jsxs)("section",{className:"container-panel",style:a&&window.screen.width>766?{width:"80%",marginLeft:"20%"}:{width:"100%"},children:[Object(u.jsx)("header",{className:"container__header",children:Object(u.jsx)(B,{setSeeMenu:c,seeMenu:a})}),Object(u.jsxs)("div",{className:"container-panel__info",children:[Object(u.jsxs)("div",{className:"container-figures",children:[Object(u.jsxs)("div",{className:"container-figures__groups",children:[Object(u.jsx)("div",{className:1==r?"item-figures-group active":"item-figures-group",onClick:function(){o(1)},children:Object(u.jsx)("h2",{children:"lista con figuras"})}),Object(u.jsx)("div",{className:2==r?"item-figures-group active":"item-figures-group",onClick:function(){o(2)},children:Object(u.jsx)("h2",{children:"Lista con modalidades"})})]}),1==r&&Object(u.jsx)(R,{seeMenu:a}),2==r&&Object(u.jsx)(V,{})]}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("span",{children:["Bingo RED. Hecho por"," ",Object(u.jsx)("a",{href:"https://progracol.com",target:"_blank",children:"prograCol"})]})})]})]})]})}var W=a(16);a(30);function X(){var e=O()(d.a),t=Object(n.useState)(localStorage.getItem("seeMenu")),a=Object(b.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)([]),o=Object(b.a)(s,2),l=o[0],j=o[1],m=Object(n.useState)(!1),h=Object(b.a)(m,2),p=h[0],g=h[1],x=Object(n.useState)([]),f=Object(b.a)(x,2),v=f[0],N=f[1],w=Object(n.useState)(!0),y=Object(b.a)(w,2),S=y[0],I=y[1];function E(e){var t=document.getElementById("".concat(e.target.id)),a=document.getElementById("border".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),n=document.getElementById("label".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),c=document.getElementById("deleteElement");n.classList.add("active"),t.classList.add("active"),a.classList.add("active"),c.style.display="none"}function C(e){var t=document.getElementById("".concat(e.target.id)),a=document.getElementById("border".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),n=document.getElementById("label".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1)));n.classList.remove("active"),a.classList.remove("active"),"0"==t.value||""==t.value?t.classList.remove("active"):n.style.top="-16px"}return Object(n.useEffect)((function(){document.title="Bingo Red - Nueva Figura",function(){var t=new Headers;t.append("Authorization",localStorage.getItem("token"));var a={method:"GET",headers:t,redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure?&Authorization=".concat(localStorage.getItem("token")),a).then((function(e){return e.text()})).then((function(e){var t=[],a=JSON.parse(e);Object.values(a.data).forEach((function(e){t.push({name:e.name,id:e.id})})),j(t)})).catch((function(){return e.fire({icon:"error",title:"Error en el servidor",text:"Hemos tenido un problema para traer los datos, int\xe9ntelo en otra ocasi\xf3n."}).then((function(e){e.isConfirmed&&(window.location="/")}))}))}(),function(){for(var e=[],t=0;t<25;t++)e.push(!1);N(e)}()}),[]),Object(u.jsxs)("section",{className:"container",children:[Object(u.jsx)(_,{seeMenu:c}),Object(u.jsxs)("section",{className:"container-panel-new-figure",style:c&&window.screen.width>766?{width:"80%",marginLeft:"20%"}:{width:"100%"},children:[Object(u.jsx)("header",{className:"container__header",children:Object(u.jsx)(B,{setSeeMenu:i,seeMenu:c})}),Object(u.jsxs)("div",{className:"container-panel-new-figure__info",children:[Object(u.jsxs)("div",{className:"header-panel-new-figure",children:[Object(u.jsx)(r.b,{className:"header-panel-new-figure__back",to:"/figuras",children:Object(u.jsx)("img",{src:M,alt:"Icono de una flecha apuntando al lado izquierdo"})}),Object(u.jsxs)("div",{className:"header-panel-new-figure__options",children:[Object(u.jsx)("span",{htmlFor:"modalities",id:"labelModalities",children:"Elegir modalidad"}),Object(u.jsxs)("select",{name:"modalities",id:"modalities",onFocus:E,onBlur:C,onChange:function(){"0"!=document.getElementById("modalities").value&&g(!0)},children:[Object(u.jsx)("option",{value:"0",id:"deleteElement"}),Object.values(l).map((function(e,t){return Object(u.jsx)("option",{value:e.id,children:e.name},t)}))]}),Object(u.jsx)("span",{className:"border-input-modalities",id:"borderModalities"})]})]}),p&&Object(u.jsxs)("section",{className:"body-panel-new-figure",children:[Object(u.jsx)("div",{className:"body-panel-new-figure__header",children:Object(u.jsx)("h2",{children:"A\xf1adir nueva figura"})}),Object(u.jsxs)("div",{className:"body-panel-new-figure__info",children:[Object(u.jsxs)("div",{className:"name-new-figure",children:[Object(u.jsx)("label",{htmlFor:"nameNewFigure",id:"labelNameNewFigure",children:"Nombre de figura"}),Object(u.jsx)("input",{type:"text",name:"nameNewFigure",id:"nameNewFigure",onFocus:E,onBlur:C,onChange:function(){var e=document.getElementById("nameNewFigure");""!==e.value&&""!==e.value.trim()?I(!1):I(!0)}}),Object(u.jsx)("span",{className:"border-input-name",id:"borderNameNewFigure"})]}),Object(u.jsx)("div",{className:"board-new-figure",children:Object.values(v).map((function(e,t){return Object(u.jsx)("div",{className:e?"position-card active":"position-card",style:t==Math.floor(12.5)?{backgroundColor:"rgb(83, 83, 83)",borderColor:"rgb(170, 58, 58)"}:{},onClick:function(){if(t!=Math.floor(12.5)){var e=Object(W.a)(v);e[t]=!e[t],N(e)}}},t)}))}),Object(u.jsx)("div",{className:"container-btn-new-figure",children:Object(u.jsx)("button",{disabled:S,type:"button",onClick:function(){var t=document.getElementById("nameNewFigure").value,a=document.getElementById("modalities").value;if(0!=a){var n={figureName:t,idFigureGroup:a,positions:v},c=new Headers;c.append("Content-Type","application/json"),c.append("Authorization",localStorage.getItem("token"));var i=JSON.stringify(n);fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure",{method:"POST",headers:c,body:i,redirect:"follow"}).then((function(e){return e.text()})).then((function(){return e.fire({icon:"success",title:"Exito",text:"Figura creada con exito."}).then((function(){window.location="/figuras"}))})).catch((function(){e.fire({icon:"error",title:"Error en envio de datos",text:"ocurrio un error subiendo los datos, vuelvalo a intentar."})}))}else e.fire({icon:"error",title:"Datos incompletos",text:"Falta seleccionar la modalidad de la figura."})},children:"Guardar"})}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("span",{children:["Bingo RED. Hecho por"," ",Object(u.jsx)("a",{href:"https://progracol.com",target:"_blank",children:"prograCol"})]})})]})]})]})]})]})}a(56);function K(){var e=O()(d.a),t=Object(o.f)().id,a=Object(n.useState)(localStorage.getItem("seeMenu")),c=Object(b.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)([]),j=Object(b.a)(l,2),m=j[0],h=j[1],p=Object(n.useState)([]),g=Object(b.a)(p,2),x=g[0],f=g[1],v=Object(n.useState)(!1),N=Object(b.a)(v,2),w=N[0],y=N[1],S=Object(n.useState)(""),I=Object(b.a)(S,2),E=I[0],C=I[1],k=Object(n.useState)("0"),A=Object(b.a)(k,2),F=A[0],L=A[1];function H(e){var t=document.getElementById("".concat(e.target.id)),a=document.getElementById("border".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),n=document.getElementById("label".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),c=document.getElementById("deleteElement");n.classList.add("active"),t.classList.add("active"),a.classList.add("active"),c.style.display="none"}function z(e){var t=document.getElementById("".concat(e.target.id)),a=document.getElementById("border".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1))),n=document.getElementById("label".concat(e.target.id.charAt(0).toUpperCase()+e.target.id.slice(1)));n.classList.remove("active"),a.classList.remove("active"),"0"==t.value||""==t.value?t.classList.remove("active"):n.style.top="-16px"}return Object(n.useEffect)((function(){document.title="Bingo Red - Editar figura",function(){var t=new Headers;t.append("Authorization",localStorage.getItem("token"));var a={method:"GET",headers:t,redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure?&Authorization=".concat(localStorage.getItem("token")),a).then((function(e){return e.text()})).then((function(e){var t=[],a=JSON.parse(e);Object.values(a.data).forEach((function(e){t.push({name:e.name,id:e.id})})),h(t)})).catch((function(){return e.fire({icon:"error",title:"Error en el servidor",text:"Hemos tenido un problema para traer los datos, int\xe9ntelo en otra ocasi\xf3n."}).then((function(e){e.isConfirmed&&(window.location="/")}))}))}(),function(){var a=new Headers;a.append("Authorization",localStorage.getItem("token"));var n={method:"GET",headers:a,redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure/".concat(t),n).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e).data;console.log(t),C(t.name),f(t.positionsWinner),L(t.groupFigureId.id)})).catch((function(){return e.fire({icon:"error",title:"Error en encontrar la figura",text:"Ocurrio un error trayendo la informaci\xf3n de la figura, intentelo nuevamente."}).then((function(){window.location="/figuras"}))}))}()}),[]),Object(u.jsxs)("section",{className:"container",children:[Object(u.jsx)(_,{seeMenu:i}),Object(u.jsxs)("section",{className:"container-panel-new-figure",style:i&&window.screen.width>766?{width:"80%",marginLeft:"20%"}:{width:"100%"},children:[Object(u.jsx)("header",{className:"container__header",children:Object(u.jsx)(B,{setSeeMenu:s,seeMenu:i})}),Object(u.jsxs)("div",{className:"container-panel-new-figure__info",children:[Object(u.jsxs)("div",{className:"header-panel-new-figure",children:[Object(u.jsx)(r.b,{className:"header-panel-new-figure__back",to:"/figuras",children:Object(u.jsx)("img",{src:M,alt:"Icono de una flecha apuntando al lado izquierdo"})}),Object(u.jsxs)("div",{className:"header-panel-new-figure__options",children:[Object(u.jsx)("span",{htmlFor:"modalities",id:"labelModalities",className:"active",children:"Modalidad"}),Object(u.jsxs)("select",{name:"modalities",id:"modalities",onFocus:H,onBlur:z,value:F,disabled:!0,children:[Object(u.jsx)("option",{value:"0",id:"deleteElement"}),Object.values(m).map((function(e,t){return Object(u.jsx)("option",{value:e.id,children:e.name},t)}))]}),Object(u.jsx)("span",{className:"border-input-modalities",id:"borderModalities"})]})]}),Object(u.jsxs)("section",{className:"body-panel-new-figure small",children:[Object(u.jsx)("div",{className:"body-panel-new-figure__header",children:Object(u.jsx)("h2",{children:"Actualizar la figura"})}),Object(u.jsxs)("div",{className:"body-panel-new-figure__info",children:[Object(u.jsxs)("div",{className:"name-new-figure",children:[Object(u.jsx)("label",{htmlFor:"nameNewFigure",className:"active",id:"labelNameNewFigure",children:"Nombre de figura"}),Object(u.jsx)("input",{type:"text",name:"nameNewFigure",id:"nameNewFigure",onFocus:H,onBlur:z,onChange:function(){var e=document.getElementById("nameNewFigure");""!==e.value&&""!==e.value.trim()?y(!1):y(!0)},defaultValue:E}),Object(u.jsx)("span",{className:"border-input-name",id:"borderNameNewFigure"})]}),Object(u.jsx)("div",{className:"board-new-figure",children:Object.values(x).map((function(e,t){return Object(u.jsx)("div",{className:e?"position-card active":"position-card",onClick:function(){var e=Object(W.a)(x);e[t]=!e[t],console.log(e),f(e)}},t)}))}),Object(u.jsx)("div",{className:"container-btn-new-figure",children:Object(u.jsx)("button",{disabled:w,type:"button",onClick:function(){var a=document.getElementById("nameNewFigure"),n=new Headers;n.append("Content-Type","application/json"),n.append("Authorization",localStorage.getItem("token"));var c={method:"PUT",headers:n,body:JSON.stringify({idFigureGroup:F,figureName:a.value,positions:x}),redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/figure/".concat(t),c).then((function(e){return e.text()})).then((function(t){e.fire({icon:"success",title:"Exito",text:"Figura actualizada con exito."}).then((function(){window.location="/figuras"}))})).catch((function(){return e.fire({icon:"error",title:"Error en encontrar la figura",text:"Ocurrio un error actualizando la figura, intentelo nuevamente."}).then((function(){window.location="/figuras"}))}))},children:"Guardar"})})]})]}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("span",{children:["Bingo RED. Hecho por"," ",Object(u.jsx)("a",{href:"https://progracol.com",target:"_blank",children:"prograCol"})]})})]})]})]})}a(57);function Q(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){document.title="Bingo Red - Dashboard"}),[]),Object(u.jsxs)("section",{className:"container-dashboard",children:[Object(u.jsx)(_,{seeMenu:a}),Object(u.jsxs)("section",{className:"container-panel-dashboard",style:a&&window.screen.width>766?{width:"80%",marginLeft:"20%"}:{width:"100%"},children:[Object(u.jsx)("header",{className:"container__header",children:Object(u.jsx)(B,{setSeeMenu:c,seeMenu:a})}),Object(u.jsxs)("section",{className:"container-panel-dashboard__body",children:[Object(u.jsxs)("div",{className:"item-dashboard",children:[Object(u.jsx)("img",{src:p,alt:"Icono de un grupo de usuarios"}),Object(u.jsx)("h2",{children:"usuarios"})]}),Object(u.jsxs)("div",{className:"item-dashboard",children:[Object(u.jsx)("img",{src:g,alt:"Icono de un dado"}),Object(u.jsx)("h2",{children:"reyes"})]}),Object(u.jsxs)("div",{className:"item-dashboard",children:[Object(u.jsx)("img",{src:y,alt:"Icono de una bolsa de compras"}),Object(u.jsx)("h2",{children:"acumulados"})]}),Object(u.jsxs)("div",{className:"item-dashboard",children:[Object(u.jsx)("img",{src:f,alt:"Icono de un tablero de tareas"}),Object(u.jsx)("h2",{children:"cartones y modulos"})]}),Object(u.jsxs)(r.b,{className:"item-dashboard",to:"/figuras",children:[Object(u.jsx)("img",{src:v,alt:"Icono de una grilla"}),Object(u.jsx)("h2",{children:"figuras y modalidades"})]}),Object(u.jsxs)("div",{className:"item-dashboard",children:[Object(u.jsx)("img",{src:w,alt:"Icono de una tablet"}),Object(u.jsx)("h2",{children:"valores unitarios"})]})]}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("span",{children:["Bingo RED. Hecho por"," ",Object(u.jsx)("a",{href:"https://progracol.com",target:"_blank",children:"prograCol"})]})})]})]})}a(58);function Y(){var e=Object(o.f)().id,t=O()(d.a),a=Object(n.useState)(!1),c=Object(b.a)(a,2),i=c[0],s=c[1],l=Object(n.useState)(null),j=Object(b.a)(l,2),m=j[0],h=j[1],p=Object(n.useState)(null),g=Object(b.a)(p,2),x=g[0],f=g[1],v=Object(n.useState)(null),N=Object(b.a)(v,2),w=N[0],y=N[1],S=Object(n.useState)(null),I=Object(b.a)(S,2),E=(I[0],I[1]);return Object(n.useEffect)((function(){document.title="Bingo Red - Editar modalidad",function(){var a=new Headers;a.append("Authorization",localStorage.getItem("token"));var n={method:"GET",headers:a,redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure/".concat(e),n).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e).data;h(t.name),f(t.closeAt),y(t.opportunity),E(t.id)})).catch((function(){return t.fire({icon:"error",title:"Error en el servidor",text:"Hemos tenido un problema para traer los datos, int\xe9ntelo en otra ocasi\xf3n."}).then((function(e){e.isConfirmed&&(window.location="/")}))}))}()}),[]),Object(u.jsxs)("section",{className:"container",children:[Object(u.jsx)(_,{seeMenu:i}),Object(u.jsxs)("section",{className:"container-panel-edit-modality",style:i&&window.screen.width>766?{width:"80%",marginLeft:"20%"}:{width:"100%"},children:[Object(u.jsx)("header",{className:"container__header",children:Object(u.jsx)(B,{setSeeMenu:s,seeMenu:i})}),Object(u.jsxs)("section",{className:"container-edit-modality",children:[Object(u.jsx)("div",{className:"container-edit-modality__back",children:Object(u.jsx)(r.b,{className:"container-btn-back",to:"/figuras",children:Object(u.jsx)("img",{src:M,alt:"Icono de una flecha apuntando al lado izquierdo"})})}),Object(u.jsx)("div",{className:"container-edit-modality__title",children:Object(u.jsx)("h2",{children:"Editar modalidad"})}),Object(u.jsxs)("div",{className:"container-edit-modality__board",children:[Object(u.jsxs)("div",{className:"item-modality-board",children:[Object(u.jsx)("label",{htmlFor:"nameModality",children:"Nombre de la modalidad"}),Object(u.jsx)("input",{type:"text",name:"nameModality",id:"nameModality",defaultValue:m})]}),Object(u.jsxs)("div",{className:"item-modality-board",children:[Object(u.jsx)("label",{htmlFor:"opportunityModality",children:"Oportunidad"}),Object(u.jsx)("input",{type:"text",name:"opportunityModality",id:"opportunityModality",defaultValue:w})]}),Object(u.jsxs)("div",{className:"item-modality-board",children:[Object(u.jsx)("label",{htmlFor:"closeModality",children:"Cerrar al azar"}),Object(u.jsx)("input",{type:"text",name:"closeModality",id:"closeModality",defaultValue:x})]}),Object(u.jsx)("div",{className:"btn-edit-modality",children:Object(u.jsx)("button",{type:"button",onClick:function(){var a=document.getElementById("nameModality").value,n=document.getElementById("closeModality").value,c=document.getElementById("opportunityModality").value;if(""!=a&&""!=n&&""!=c)if(""!=a.trim()&&""!=n.trim()&&""!=c.trim()){var i=new Headers;i.append("Content-Type","application/json"),i.append("Authorization",localStorage.getItem("token"));var s={method:"PUT",headers:i,body:JSON.stringify({name:"LINEAL Maloi",opportunity:1,closeAt:1,selectFigure:!1}),redirect:"follow"};fetch("https://java.bocetos.co/gamered-0.0.1-SNAPSHOT/groupfigure/".concat(e),s).then((function(e){return e.text()})).then((function(e){console.log(e),JSON.parse(e).data?t.fire({icon:"success",title:"Exito",text:"Modalidad actualizada con exito."}):t.fire({icon:"error",title:"Error con el servidor",text:"No se pudo actualizar la informaci\xf3n, int\xe9ntelo en otra ocasi\xf3n."}).then((function(){window.location="/figuras"}))})).catch((function(){return t.fire({icon:"error",title:"Error con el servidor",text:"No se pudo actualizar la informaci\xf3n, int\xe9ntelo en otra ocasi\xf3n."}).then((function(){window.location="/figuras"}))}))}else t.fire({icon:"error",title:"Error con los datos",text:"Debe llenar toda la informaci\xf3n antes de subir la actualizaci\xf3n."});else t.fire({icon:"error",title:"Error con los datos",text:"Debe llenar toda la informaci\xf3n antes de subir la actualizaci\xf3n."})},children:"Actualizar"})})]})]}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("span",{children:["Bingo RED. Hecho por",Object(u.jsx)("a",{href:"https://progracol.com",target:"_blank",children:"prograCol"})]})})]})]})}var Z=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(u.jsx)(o.a,{exact:!0,path:"/dashboard",component:Q}),Object(u.jsx)(o.a,{exact:!0,path:"/perfil",component:P}),Object(u.jsx)(o.a,{exact:!0,path:"/figuras",component:q}),Object(u.jsx)(o.a,{path:"/nueva-figura",component:X}),Object(u.jsx)(o.a,{path:"/figuras/:id",children:Object(u.jsx)(K,{})}),Object(u.jsx)(o.a,{path:"/modalidades/:id",children:Object(u.jsx)(Y,{})})]})})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),$()}},[[59,1,2]]]);
//# sourceMappingURL=main.8a3fa5ea.chunk.js.map