(this.webpackJsonpaprendeae=this.webpackJsonpaprendeae||[]).push([[0],{127:function(e,t,a){},266:function(e,t,a){},282:function(e,t){},284:function(e,t){},312:function(e,t){},314:function(e,t){},324:function(e,t){},326:function(e,t){},351:function(e,t){},353:function(e,t){},354:function(e,t){},360:function(e,t){},362:function(e,t){},380:function(e,t){},382:function(e,t){},394:function(e,t){},397:function(e,t){},430:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),c=a(13),o=a.n(c),s=(a(266),a(127),a(18)),l=a(431),u=a(484),d=a(245),j=a.n(d),b=a(476),p=a(246),h=a.n(p),f=a(477),O=a(473),x=a(475),m=a(470),v=a(472),g=a(486),w=a(474),C=a(467),y=a(10),R=a.n(y),k=a(24);function F(){return(F=Object(k.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=a(32)).serverURL="https://parseapi.back4app.com",n.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),n.User.become(localStorage.getItem("TOKEN"))?(n.User.logOut(),localStorage.setItem("TOKEN",""),console.log("Desconectado"),t(!1)):console.log("J\xe1 est\xe1 desconectado");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(k.a)(R.a.mark((function e(t,n,r){var i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=a(32)).serverURL="https://parseapi.back4app.com",i.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),i.User.logIn(t,n).then((function(e){console.log("Logged in user",e),localStorage.setItem("TOKEN",e.get("sessionToken")),localStorage.setItem("USER",JSON.stringify(e)),r(!0)})).catch((function(e){console.error("Error while logging in user",e),r(!1)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=a(251),M=a(487),N=Object(C.a)({loginbutton:{backgroundColor:"green"}}),Q=Object(C.a)({root:{"& .MuiOutlinedInput-root":{color:"white","& fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{border:"2px solid white"}},"& .MuiFormLabel-root":{color:"white"}}});function z(){var e=N(),t=Q(),c=i.a.useState(null),o=Object(s.a)(c,2),d=o[0],p=o[1],C=function(){p(null)},y=Object(r.useState)(!1),R=Object(s.a)(y,2),k=R[0],S=R[1];return Object(r.useEffect)((function(){!function(e){var t=a(32);t.serverURL="https://parseapi.back4app.com",t.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),t.User.become(localStorage.getItem("TOKEN")).then((function(t){console.log("logado"),e(!0)}),(function(t){console.log("n\xe3o logado"),e(!1)}))}(S)}),[]),Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{position:"static",children:Object(n.jsx)(v.a,{children:Object(n.jsxs)(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(O.a,{item:!0,xs:8,children:Object(n.jsxs)(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",children:[Object(n.jsx)(O.a,{item:!0,xs:4,children:Object(n.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(n.jsx)(j.a,{})})}),Object(n.jsx)(O.a,{item:!0,xs:4,children:Object(n.jsx)(x.a,{href:"/aprendizadocolaborativo/",style:{color:"white"},variant:"h6",children:"AprendeAe"})}),Object(n.jsx)(O.a,{item:!0,xs:4,children:Object(n.jsx)(u.a,{id:"outlined-basic",label:"Busca",variant:"outlined",className:t.root,InputProps:{startAdornment:Object(n.jsx)(b.a,{position:"start",children:Object(n.jsx)(h.a,{})})}})})]})}),Object(n.jsx)(O.a,{item:!0,xs:4,children:k?Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{"aria-controls":"avatar-menu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},children:"L"}),Object(n.jsxs)(U.a,{id:"avatar-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:C,children:[Object(n.jsx)(M.a,{onClick:C,children:"Perfil"}),Object(n.jsx)(M.a,{onClick:C,children:"Minha Conta"}),Object(n.jsx)(M.a,{onClick:function(){console.log("logtout?"),function(e){F.apply(this,arguments)}(S),p(null)},children:"Logout"})]})]}):Object(n.jsx)(f.a,{children:Object(n.jsx)(l.a,{href:"/aprendizadocolaborativo/#/login",variant:"contained",color:"primary",className:e.loginbutton,children:"Login"})})})]})})})})}var D=a(83),A=a(253);function E(){return Object(n.jsx)("div",{children:Object(n.jsx)(A.a,{variant:"outlined",children:Object(n.jsx)(D.a,{variant:"h4",children:"Venha aprender mais conosco!"})})})}var L=a(478),I=a(480),T=a(479),B=Object(C.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});function q(e){var t=B();return Object(n.jsxs)(L.a,{className:t.root,variant:"outlined",children:[Object(n.jsx)(T.a,{children:Object(n.jsx)(D.a,{variant:"h5",component:"h2",children:e.disciplina||"Carregando"})}),Object(n.jsx)(I.a,{children:Object(n.jsx)(l.a,{href:"/aprendizadocolaborativo/#/perguntasde"+e.coddisciplina||!1,size:"small",children:e.disciplina||"Carregando"})})]})}function V(){var e=Object(r.useState)({}),t=Object(s.a)(e,2),i=t[0],c=t[1],o=a(32);function l(){return(l=Object(k.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.Object.extend("Disciplinas"),(a=new o.Query(t)).limit(10),e.next=5,a.find().then((function(e){c(e)}),(function(e){console.error("Error while fetching Disciplinas",e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.serverURL="https://parseapi.back4app.com",o.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),Object(r.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]);var u=i.length>0?i.map((function(e){return Object(n.jsx)(O.a,{item:!0,sm:12,md:3,children:Object(n.jsx)(q,{disciplina:e.attributes.Nome,coddisciplina:e.attributes.URLid})},e.id)})):Object(n.jsx)("div",{});return Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",children:u})})}function G(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(E,{}),Object(n.jsx)(V,{})]})}var X=a(93),P=a(15),K=Object(C.a)((function(e){return{loginbutton:{backgroundColor:"green"},root:{"& .MuiTextField-root":{margin:e.spacing(3),width:"50ch"}}}}));function H(){var e=K(),t=Object(P.f)(),a=Object(r.useRef)(),i=Object(r.useRef)(),c=function(e){console.log("Login successeful"),t.replace("/")},o=function(){!function(e,t,a){S.apply(this,arguments)}(a.current.value,i.current.value,c)};return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:e.root,onSubmit:function(e){e.preventDefault(),o()},children:[Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:a,required:!0,id:"username",label:"Username",type:"username",autoComplete:"username"})}),Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:i,required:!0,id:"standard-required",label:"Senha",type:"password",autoComplete:"current-password"})}),Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{variant:"contained",color:"primary",className:e.loginbutton,type:"submit",children:"Login"})}),Object(n.jsx)(x.a,{href:"/aprendizadocolaborativo/#/signup",children:"N\xe3o possui conta. Crie a sua aqui."})]})})}var J=a(248),W=a(249),Z=a(481),Y=a(482),$=a(121),_=a(117),ee=a.n(_),te=a(119),ae=a.n(te),ne=a(250),re=a.n(ne),ie=a(118),ce=a.n(ie),oe=Object(C.a)((function(e){return{root:{maxWidth:800,textAlign:"left",marginTop:"8px",marginLeft:"auto",marginRight:"auto"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:$.a[500]}}}));function se(e){var t=oe(),a=i.a.useState(!1),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{className:t.root,children:[Object(n.jsx)(Z.a,{avatar:Object(n.jsx)(g.a,{"aria-label":"user",className:t.avatar,children:"R"}),title:e.cabecalho,subheader:"Postado a "+e.createdAt+" horas"}),Object(n.jsx)(T.a,{children:Object(n.jsx)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:e.descricao.substring(0,100)})}),Object(n.jsx)(Y.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(T.a,{children:Object(n.jsx)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:e.descricao.substring(101)})})}),Object(n.jsxs)(I.a,{disableSpacing:!0,children:[Object(n.jsx)(w.a,{"aria-label":"add to favorites",children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)(w.a,{"aria-label":"dislike",children:Object(n.jsx)(ce.a,{})}),Object(n.jsx)(w.a,{"aria-label":"share",children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)(x.a,{href:"/aprendizadocolaborativo/#/perguntaid"+e.id,children:"Ver Respostas"}),Object(n.jsx)(w.a,{className:Object(W.a)(t.expand,Object(J.a)({},t.expandOpen,c)),onClick:function(){o(!c)},"aria-expanded":c,"aria-label":"mostrar mais",children:Object(n.jsx)(re.a,{})})]})]})})}se.defaultProps={cabecalho:"Carregando",descricao:"carregando"};var le=a(485),ue=a(483),de=a(120),je=a.n(de);function be(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var pe=Object(C.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},fab:{position:"fixed",bottom:"5%",right:"5%"},loginbutton:{backgroundColor:"green"},root:{"& .MuiTextField-root":{margin:e.spacing(3),width:"80%"}}}}));function he(e){var t=Object(r.useRef)(),c=Object(r.useRef)(),o=a(32);function d(){return(d=Object(k.a)(R.a.mark((function a(){var n,r;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=o.Object.extend("Perguntas"),(r=new n).set("HeaderText",t.current.value),r.set("Description",c.current.value),o.User.become(localStorage.getItem("TOKEN")).then((function(t){r.set("usuarioId",t);var a=o.Object.extend("Disciplinas"),n=new o.Query(a);n.equalTo("URLid",e.disciplina),n.first().then((function(t){r.set("disciplinaId",t),r.save().then((function(t){alert("Pergunta criada",t),m(),e.refresh()}),(function(e){console.error("Erro enquanto criava pergunta: ",e)}))}))}));case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}o.serverURL="https://parseapi.back4app.com",o.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV",localStorage.getItem("TOKEN"));var j=pe(),b=i.a.useState(be),p=Object(s.a)(b,1)[0],h=i.a.useState(!1),f=Object(s.a)(h,2),O=f[0],x=f[1],m=function(){x(!1)},v=Object(n.jsxs)("div",{style:p,className:j.paper,children:[Object(n.jsx)("h2",{id:"simple-modal-title",children:"Fa\xe7a sua pergunta"}),Object(n.jsxs)("form",{className:j.root,onSubmit:function(e){e.preventDefault(),function(){d.apply(this,arguments)}()},children:[Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{value:"C\xe1lculo I",label:"Disciplina",disabled:!0,variant:"outlined",color:"secondary"})}),Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:t,label:"T\xf3pico da Pergunta",autoFocus:!0,variant:"outlined",multiline:!0})}),Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:c,label:"Descri\xe7\xe3o",variant:"outlined",multiline:!0})}),Object(n.jsx)(l.a,{className:j.loginbutton,variant:"contained",color:"primary",type:"submit",children:"Perguntar"})]})]});return Object(n.jsxs)("div",{children:[Object(n.jsx)(ue.a,{className:j.fab,color:"primary","aria-label":"add",type:"button",onClick:function(){x(!0)},children:Object(n.jsx)(je.a,{})}),Object(n.jsx)(le.a,{open:O,onClose:m,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:v})]})}function fe(){var e=Object(P.g)().disciplina,t=Object(r.useState)({}),i=Object(s.a)(t,2),c=i[0],o=i[1],l=a(32);function u(){return d.apply(this,arguments)}function d(){return(d=Object(k.a)(R.a.mark((function t(){var a,n,r,i;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=l.Object.extend("Disciplinas"),(n=new l.Query(a)).equalTo("URLid",e),r=l.Object.extend("Perguntas"),(i=new l.Query(r)).limit(10),i.matchesQuery("disciplinaId",n),i.find().then((function(e){o(e)}),(function(e){console.error("Error while fetching Perguntas",e)}));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}l.serverURL="https://parseapi.back4app.com",l.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),Object(r.useEffect)((function(){u()}),[]);var j=c.length>0?c.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(se,{id:e.id,cabecalho:e.attributes.HeaderText,descricao:e.attributes.Description,createdAt:Math.floor((Date.now()-e.createdAt.getTime())/36e5)})},e.id)})):Object(n.jsx)("div",{});return Object(n.jsxs)("div",{children:[j,Object(n.jsx)(he,{disciplina:e,refresh:function(){return u()}})]})}var Oe=Object(C.a)((function(e){return{root:{maxWidth:800,textAlign:"left",marginTop:"8px",marginLeft:"auto",marginRight:"auto",backgroundColor:"floralwhite"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:$.a[500]}}}));function xe(e){var t=Oe();return Object(n.jsx)("div",{children:Object(n.jsxs)(L.a,{className:t.root,children:[Object(n.jsx)(Z.a,{avatar:Object(n.jsx)(g.a,{"aria-label":"recipe",className:t.avatar,children:e.email.charAt(0)}),subheader:"Postado a "+e.createdAt+" horas"}),Object(n.jsx)(T.a,{children:Object(n.jsx)(D.a,{variant:"body2",color:"textSecondary",component:"p",children:e.comentario})}),Object(n.jsxs)(I.a,{disableSpacing:!0,children:[Object(n.jsx)(w.a,{"aria-label":"add to favorites",children:Object(n.jsx)(ee.a,{})}),Object(n.jsx)(w.a,{"aria-label":"dislike",children:Object(n.jsx)(ce.a,{})}),Object(n.jsx)(w.a,{"aria-label":"share",children:Object(n.jsx)(ae.a,{})})]})]})})}function me(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}xe.defaultProps={cabecalho:"Carregando",descricao:"",email:"R@email.com",comentario:"carregando"};var ve=Object(C.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},fab:{position:"fixed",bottom:"5%",right:"5%"},loginbutton:{backgroundColor:"green"},root:{"& .MuiTextField-root":{margin:e.spacing(3),width:"80%"}}}}));function ge(e){var t=Object(r.useRef)(),c=a(32);function o(){return(o=Object(k.a)(R.a.mark((function a(){var n,r;return R.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=c.Object.extend("Respostas"),(r=new n).set("resposta",t.current.value),c.User.become(localStorage.getItem("TOKEN")).then((function(t){r.set("usuarioId",t);var a=c.Object.extend("Perguntas"),n=new c.Query(a);n.equalTo("objectId",e.pergunta),n.first().then((function(t){r.set("perguntaId",t),r.save().then((function(t){alert("Resposta criada",t),x(),e.refresh()}),(function(e){console.error("Erro enquanto respondia: ",e)}))}))}));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}c.serverURL="https://parseapi.back4app.com",c.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV",localStorage.getItem("TOKEN"));var d=ve(),j=i.a.useState(me),b=Object(s.a)(j,1)[0],p=i.a.useState(!1),h=Object(s.a)(p,2),f=h[0],O=h[1],x=function(){O(!1)},m=Object(n.jsxs)("div",{style:b,className:d.paper,children:[Object(n.jsx)("h2",{id:"simple-modal-title",children:"Ajude outros com a sua resposta:"}),Object(n.jsxs)("form",{className:d.root,onSubmit:function(e){e.preventDefault(),function(){o.apply(this,arguments)}()},children:[Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:t,label:"Resposta",variant:"outlined",multiline:!0})}),Object(n.jsx)(l.a,{className:d.loginbutton,variant:"contained",color:"primary",type:"submit",children:"Responder"})]})]});return Object(n.jsxs)("div",{children:[Object(n.jsx)(ue.a,{className:d.fab,color:"primary","aria-label":"add",type:"button",onClick:function(){O(!0)},children:Object(n.jsx)(je.a,{})}),Object(n.jsx)(le.a,{open:f,onClose:x,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:m})]})}function we(){var e=Object(P.g)().id,t=Object(r.useState)({}),i=Object(s.a)(t,2),c=i[0],o=i[1],l=Object(r.useState)({}),u=Object(s.a)(l,2),d=u[0],j=u[1],b=a(32);function p(){return(p=Object(k.a)(R.a.mark((function t(){var a,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=b.Object.extend("Perguntas"),(n=new b.Query(a)).get(e),n.find().then((function(e){o(e)}),(function(e){console.error("Error while fetching Perguntas",e)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return f.apply(this,arguments)}function f(){return(f=Object(k.a)(R.a.mark((function t(){var a,n;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=b.Object.extend("Respostas"),(n=new b.Query(a)).limit(10),n.matches("perguntaId",e),n.find().then((function(e){j(e)}),(function(e){console.error("Error while fetching Respostas",e)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}b.serverURL="https://parseapi.back4app.com",b.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),Object(r.useEffect)((function(){!function(){p.apply(this,arguments)}(),h()}),[]);var O=d.length>0?d.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(xe,{email:"resposta.attributes.HeaderText",comentario:e.attributes.resposta,createdAt:Math.floor((Date.now()-e.createdAt.getTime())/36e5)})},e.id)})):Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{variant:"h6",align:"left",children:"Ainda n\xe3o foram encontradas respostas, que tal ser primeiro a responder?"})}),x=c.length>0?Object(n.jsxs)("div",{children:[Object(n.jsx)(se,{id:e,cabecalho:c[0].attributes.HeaderText,descricao:c[0].attributes.Description,createdAt:Math.floor((Date.now()-c[0].createdAt.getTime())/36e5)}),Object(n.jsx)(D.a,{variant:"h5",align:"center",children:"Respostas "}),O,Object(n.jsx)(ge,{pergunta:e,refresh:function(){return h()}})]}):Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{children:" Pergunta n\xe3o encontrada. "})});return Object(n.jsx)("div",{children:x})}var Ce=Object(C.a)((function(e){return{loginbutton:{backgroundColor:"green"},root:{"& .MuiTextField-root":{margin:e.spacing(3),width:"50ch"}}}}));function ye(){var e=Ce(),t=Object(r.useRef)(),i=Object(r.useRef)(),c=Object(r.useRef)(),o=Object(r.useRef)(),s=a(32);function d(){return(d=Object(k.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.current.value===c.current.value){e.next=3;break}return alert("Senhas n\xe3o s\xe3o iguais!"),e.abrupt("return");case 3:(a=new s.User).set("username",o.current.value),a.set("email",t.current.value),a.set("password",i.current.value),a.signUp().then((function(e){alert("Usuario inscrito com sucesso",e)})).catch((function(e){console.error("Error while signing up user",e)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return s.serverURL="https://parseapi.back4app.com",s.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:e.root,onSubmit:function(e){e.preventDefault(),function(){d.apply(this,arguments)}()},children:[Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:o,required:!0,id:"username",label:"Usu\xe1rio",type:"username",autoComplete:"username"})}),Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:t,required:!0,id:"email",label:"E-mail",type:"email",autoComplete:"email"})}),Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:i,required:!0,id:"senha",label:"Senha",type:"password",autoComplete:"new-password"})}),Object(n.jsx)("div",{children:Object(n.jsx)(u.a,{inputRef:c,required:!0,id:"confirmasenha",label:"Confirmar Senha",type:"password",autoComplete:"new-password"})}),Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{variant:"contained",color:"primary",className:e.loginbutton,type:"submit",children:"Criar conta"})})]})})}function Re(){var e=Object(r.useState)({}),t=Object(s.a)(e,2),i=t[0],c=t[1],o=a(32);function l(){return(l=Object(k.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.Object.extend("Perguntas"),new o.Query(t).find().then((function(e){c(e)}),(function(e){console.error("Error while fetching Perguntas",e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.serverURL="https://parseapi.back4app.com",o.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),Object(r.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]);var u=i.length>0?i.map((function(e){return Object(n.jsxs)("div",{children:["Teste id= ",e.id]},e.id)})):Object(n.jsx)("div",{children:"Pergunta n\xe3o encontrada"});return Object(n.jsx)("div",{children:u})}var ke=function(){var e=a(32);return e.serverURL="https://parseapi.back4app.com",e.initialize("CFvZax1DamQQzQcoRRXaE1kHA8MKqMjaoWz2GU4G","ChVviJsDLFs5NaiS3iC2AnnXB03mFBl9Ms0bFUIV"),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(X.a,{basename:"/",children:[Object(n.jsx)(z,{}),Object(n.jsxs)(P.c,{children:[Object(n.jsx)(P.a,{exact:!0,path:"/",children:Object(n.jsx)(G,{})}),Object(n.jsx)(P.a,{path:"/login",children:Object(n.jsx)(H,{})}),Object(n.jsx)(P.a,{path:"/perguntasde:disciplina",children:Object(n.jsx)(fe,{})}),Object(n.jsx)(P.a,{path:"/perguntaid:id",children:Object(n.jsx)(we,{})}),Object(n.jsx)(P.a,{path:"/signup",children:Object(n.jsx)(ye,{})}),Object(n.jsx)(P.a,{path:"/test",children:Object(n.jsx)(Re,{})})]})]})})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,488)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(ke,{})}),document.getElementById("root")),Fe()}},[[430,1,2]]]);
//# sourceMappingURL=main.4592d7f4.chunk.js.map