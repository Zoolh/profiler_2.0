(this["webpackJsonpfront-react-profiler"]=this["webpackJsonpfront-react-profiler"]||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),i=n.n(r),o=n(62),c=(n(72),n(73),n(5)),s=(n(74),n(57)),u=n.n(s).a.create({baseURL:"https://profiler-prod.herokuapp.com/api",headers:{"Content-type":"application/json","Content-Type":"application/x-www-form-urlencoded"}}),d=function(){return u.get("/questions")},m=n(10),f=n(23),p=function(e){return u.get("/propositions/getByQuestions",{params:{id:e}})},E=function(e){return{type:"SET_IS_MINOR",isMinor:e}},b=function(e){return{type:"SET_PROFIL_PRUDENT_AUTO",isProfilPrudent:e}},O=function(e){return{type:"SET_PROFIL_TRADER_AUTO",isProfilTraderAuto:e}},v=function(e,t){return{type:"SET_LAST_ANSWER",dispatchToCall:e,valueToGive:t}},g=(n(96),function(e){var t=Object(m.b)(),n=Object(a.useState)(),r=Object(c.a)(n,2),i=r[0],o=r[1];Object(a.useEffect)((function(){return s()}),[e.idQuestion]);var s=function(){p(e.idQuestion).then((function(e){o(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"list-group list-group-flush proposition-container "},l.a.createElement(f.For,{of:i,as:function(n){return l.a.createElement("div",{className:"list-group-item proposition-card",onClick:function(a){return function(n){1===n.id&&(t(E(!0)),t(v("setIsMinor",!0))),42!==n.id&&78!==n.id&&51!==n.id&&9!==n.id&&13!==n.id||(t(b(!0)),t(v("profilPrudentAuto",!0))),16!==n.id&&17!==n.id&&46!==n.id||(t(O(!0)),t(v("profilTraderAuto",!0))),n.pointsProfil&&(t({type:"ADD_RESPONSE_COUNT"}),t({type:"ADD_POINT_PROFIL",pointProfil:n.pointsProfil}),t(v("incrementPointProfil",n.pointsProfil))),n.pointsTypeGestion&&(t({type:"ADD_RESPONSE_GESTION_COUNT"}),t({type:"ADD_POINT_GESTION",pointGestion:n.pointsTypeGestion}),t(v("incrementPointGestion",n.pointsTypeGestion))),e.setIndexHandler()}(n)}},n.libelle)}}))}),P=(n(97),n(32)),R=n(33),j=function(e){var t=Object(m.b)(),n={id:e.listQuestion[0].id,libelle:e.listQuestion[0].libelle},r=Object(a.useState)(n),i=Object(c.a)(r,2),o=i[0],s=i[1],u=Object(a.useState)(0),d=Object(c.a)(u,2),f=d[0],p=d[1],v=Object(a.useState)(0),j=Object(c.a)(v,2),h=j[0],T=j[1],S=Object(m.c)((function(e){return{answersList:e.proposition.answersList}})).answersList;Object(a.useEffect)((function(){return s(e.listQuestion[f],[f])}));var N=function(){var e=S[S.length-1];Object.entries(e).map((function(e){var n=Object(c.a)(e,2),a=n[0],l=n[1];"setIsMinor"===a&&t(!0===l?E(!1):null),"profilPrudentAuto"===a&&t(!0===l?b(!1):null),"profilTraderAuto"===a&&t(!0===l?O(!1):null),"incrementPointProfil"===a&&(t({type:"REMOVE_POINT_PROFIL",pointProfilToRemove:l}),t({type:"REMOVE_ONE_RESPONSE"})),"incrementPointGestion"===a&&(t({type:"REMOVE_POINT_GESTION",pointGestionToRemove:l}),t({type:"REMOVE_ONE_RESPONSE_GESTION"})),t({type:"REMOVE_LAST_ANSWER"})}))};Object(a.useEffect)((function(){T(_)}),[f]);var _=100*(f+1)/(e.listQuestion.length-1);return o?o?l.a.createElement("div",{className:"question-container"},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",style:{width:h+"%"}},"Question ",f+1," sur ",e.listQuestion.length)),l.a.createElement("h3",{className:"titre-question"},o.libelle),l.a.createElement("div",{className:"indexQuestion"}),f>0?l.a.createElement(P.a,{icon:R.a,onClick:function(){S&&N(),p(f-1)},id:"arrowLeft"}):null,l.a.createElement(g,{setIndexHandler:function(){p(f+1)},idQuestion:o.id}),l.a.createElement("br",null)):void 0:l.a.createElement("div",null,void e.displayProfil())},h=n(13),T=n(25),S=function(){return u.get("/profils")},N=function(e){return u.get("/profils/".concat(e))},_=n(121),y=n(123),A=n(124),I=n(125),w=function(e){var t=Object(_.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),n=Object(a.useState)({id:null,libelle:"",temps:"",variation:"",actif_profil:[],conseil_profil:[],description:""}),r=Object(c.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)([]),u=Object(c.a)(s,2),d=u[0],f=u[1],p=t(),E=Object(m.c)((function(e){return e.profil.isMinor})),b=Object(m.c)((function(e){return e.profil.isProfilTraderAuto}));Object(a.useEffect)((function(){E||O(),v()}),[]);var O=function(){N(e.ResultatProfil).then((function(e){o({id:e.data.id,libelle:e.data.libelle,temps:e.data.temps,variation:e.data.variation,actif_profil:e.data.actif_profil,description:e.data.description})})).catch((function(e){console.log(e)}))},v=function(){S().then((function(e){f(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",null,E?l.a.createElement("h3",{style:{backgroundColor:"LightCoral",fontStyle:"italic"}},"Il faut avoir 16 ans pour investir sur les march\xe9s financiers ! "):null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que vous pouvez opter pour un niveau de risque"),d.map((function(e,t){return l.a.createElement(y.a,{key:t,className:p.root,style:{backgroundColor:b?e.libelle===i.libelle||"Trader"===e.libelle?"Trader"===e.libelle?"Red":"LightBlue":null:e.libelle===i.libelle?"LightBlue":null}},l.a.createElement(A.a,null,l.a.createElement(I.a,{className:p.title,color:"textSecondary",gutterBottom:!0},e.libelle),l.a.createElement(I.a,{variant:"body2",component:"p"},"Variation moyenne annuelle cible : ",e.variation,l.a.createElement("br",null),"Temps \xe0 y consacrer (Sauf gestion d\xe9l\xe9gu\xe9e) : ",e.temps,"Trader"===i.libelle&&"Trader"===e.libelle?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Vos r\xe9ponses permettent de d\xe9terminer qu'en plus de votre profil d'investisseur vous pouvez envisager le profil Trader")):null)))})))},k=function(){return u.get("/typesGestion")},L=function(e){return u.get("/typesGestion/".concat(e))},B=function(e){var t=Object(a.useState)({id:null,libelle:"",description:""}),n=Object(c.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)([]),s=Object(c.a)(o,2),u=s[0],d=s[1],m=Object(_.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})();return Object(a.useEffect)((function(){k().then((function(e){d(e.data)})).catch((function(e){console.log(e)})),L(e.ResultatGestion).then((function(e){i({id:e.data.id,libelle:e.data.libelle,description:e.data.description})})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que vous pouvez opter pour une gestion"),u.map((function(e,t){return l.a.createElement(y.a,{key:t,className:m.root,style:{backgroundColor:e.libelle===r.libelle?"LightBlue":null}},l.a.createElement(A.a,null,l.a.createElement(I.a,{className:m.title,color:"textSecondary",gutterBottom:!0},e.libelle),l.a.createElement(I.a,{variant:"body2",component:"p"},e.description)))})))},C=function(e){var t={idProfil:e};return u.post("/actifs/getByProfilId/",{params:t})},G=n(127),D=n(131),F=n(130),M=n(126),V=n(128),q=n(129),x=n(103),z=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)([]),s=Object(c.a)(o,2),u=s[0],d=s[1];Object(a.useEffect)((function(){p(),f()}),[]);var f=function(){S().then((function(e){d(e.data)})).catch((function(e){console.log(e)}))},p=function(){C(e.ResultatProfil).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))},E=Object(_.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})(),b=Object(m.c)((function(e){return e.profil.isProfilTraderAuto}));return l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que vous pouvez investir sur les march\xe9s et produits suivants"),u.map((function(t,n){return l.a.createElement(y.a,{key:n,className:E.root,style:{backgroundColor:b?t.id===e.ResultatProfil||5===t.id?5===t.id?"Red":"LightBlue":null:t.id===e.ResultatProfil?"LightBlue":null}},l.a.createElement(A.a,null,l.a.createElement(I.a,{className:E.title,color:"textSecondary",gutterBottom:!0},t.libelle),b?t.id===e.ResultatProfil||5===t.id?l.a.createElement("div",null,l.a.createElement(M.a,{component:x.a},l.a.createElement(G.a,{"aria-label":"simple table"},l.a.createElement(V.a,null,l.a.createElement(q.a,null,l.a.createElement(F.a,null,"Types d'Actifs"),l.a.createElement(F.a,{align:"left"},"Pond\xe9ration"),l.a.createElement(F.a,{align:"left"},"Produits"))),l.a.createElement(D.a,null,r.map((function(e,t){return l.a.createElement(q.a,{key:t},l.a.createElement(F.a,{component:"th",scope:"row"},e.libelle),l.a.createElement(F.a,{align:"left"},e.ponderation),l.a.createElement(F.a,{align:"left"},e.produit_actif.map((function(e,t){return l.a.createElement("div",{key:t},e.libelle)}))))})))))):null:t.id===e.ResultatProfil?l.a.createElement("div",null,l.a.createElement(M.a,{component:x.a},l.a.createElement(G.a,{"aria-label":"simple table"},l.a.createElement(V.a,null,l.a.createElement(q.a,null,l.a.createElement(F.a,null,"Types d'Actifs"),l.a.createElement(F.a,{align:"left"},"Pond\xe9ration"),l.a.createElement(F.a,{align:"left"},"Produits"))),l.a.createElement(D.a,null,r.map((function(e,t){return l.a.createElement(q.a,{key:t},l.a.createElement(F.a,{component:"th",scope:"row"},e.libelle),l.a.createElement(F.a,{align:"left"},e.ponderation),l.a.createElement(F.a,{align:"left"},e.produit_actif.map((function(e,t){return l.a.createElement("div",{key:t},e.libelle)}))))})))))):null))})))},Q=function(e){return l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.boursedirect.fr/fr/support/debuter-en-bourse",target:"_blank",rel:"noopener noreferrer"},'Rendez-vous sur notre rubrique "Formation" pour trouver : nos guides, nos formations gratuites, nos coachings personnalis\xe9s et des vid\xe9os'))},U=function(){return u.get("/conseils")},W=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(),s=Object(c.a)(o,2),u=s[0],d=s[1],m=Object(a.useState)(!1),p=Object(c.a)(m,2),E=p[0],b=p[1];Object(a.useEffect)((function(){v()}),[]);var O=function(e){d(e)},v=function(){U().then((function(e){i(e.data)})).catch((function(e){console.log(e)}))},g=function(e){return e.length>60?e.substring(0,60)+"...":e},P=function(e){return l.a.createElement(h.a,Object.assign({},e,{dialogClassName:"modal-bloc","aria-labelledby":"contained-modal-title-vcenter"}),l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"},u?l.a.createElement("p",null,u.libelle):l.a.createElement("p",null,"NADA"))),l.a.createElement(h.a.Body,null,u?l.a.createElement("p",null,u.description):l.a.createElement("p",null,"NADA")),l.a.createElement(h.a.Footer,null,l.a.createElement(T.a,{onClick:e.onHide,className:"btn-close"},"Fermer")))};return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Voici les principales r\xe8gles \xe0 conna\xeetre pour devenir un ",5===e.ResultatProfil?"Trader":"Investisseur"," performant !"),5===e.ResultatProfil?l.a.createElement(f.For,{of:r,as:function(e){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(T.a,{className:"bloc-btn",onClick:function(){b(!0),O(e)}},g(e.libelle)))}}):l.a.createElement(f.For,{of:r.filter((function(e){return 9!==e.id&&10!==e.id&&11!==e.id&&12!==e.id&&13!==e.id&&14!==e.id})),as:function(e){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(T.a,{className:"bloc-btn",onClick:function(){b(!0),O(e)}},g(e.libelle)))}}),l.a.createElement(P,{show:E,onHide:function(){return b(!1)}})))},H=function(){return u.get("/supportsInv")},J=function(e){var t=Object(_.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})(),n=Object(a.useState)([]),r=Object(c.a)(n,2),i=r[0],o=r[1],s=Object(a.useState)([]),u=Object(c.a)(s,2),d=u[0],m=u[1];Object(a.useEffect)((function(){f()}),[]);var f=function(){H().then((function(t){m(t.data);var n=[];1===e.ResultatProfil&&(n=t.data.filter((function(e){return 2===e.id||3===e.id}))),2===e.ResultatProfil&&(n=t.data.filter((function(e){return 1===e.id||2===e.id||3===e.id||4===e.id}))),3===e.ResultatProfil&&(n=t.data.filter((function(e){return 1===e.id||2===e.id||3===e.id||4===e.id||5===e.id}))),4===e.ResultatProfil&&(n=t.data.filter((function(e){return 1===e.id||2===e.id||5===e.id}))),5===e.ResultatProfil&&(n=t.data.filter((function(e){return 1===e.id||2===e.id||5===e.id}))),o(n)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que les supports d'investissement qui vous correspondent sont"),d.map((function(e,n){var a=i.some((function(t){return t.libelle===e.libelle}));return l.a.createElement(y.a,{key:n,className:t.root,style:{backgroundColor:a?"LightBlue":null}},l.a.createElement(A.a,null,l.a.createElement(I.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.libelle),l.a.createElement(I.a,{variant:"body2",component:"p"},l.a.createElement("br",null),l.a.createElement("a",{href:e.description,target:"_blank",rel:"noopener noreferrer"},"Pour plus d'infos, suivez ce lien"))))})))},$=(n(100),function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(),s=Object(c.a)(o,2),u=s[0],d=s[1],p=Object(m.c)((function(e){return e.profil.point})),E=Object(m.c)((function(e){return e.profil.nbReponses})),b=Object(m.c)((function(e){return e.profil.isProfilPrudentAuto})),O=0;O=b?1:Number((p/E).toFixed(0));var v=Object(m.c)((function(e){return e.gestion.point})),g=Object(m.c)((function(e){return e.gestion.nbReponses})),j=Number((v/g).toFixed(0)),S=function(e){return l.a.createElement(h.a,Object.assign({},e,{dialogClassName:"modal-bloc","aria-labelledby":"contained-modal-title-vcenter"}),l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"},u?l.a.createElement("p",null,u):l.a.createElement("p",null,"NADA"))),l.a.createElement(h.a.Body,null,"Type de Gestion"===u?l.a.createElement(B,{ResultatGestion:j}):null,"Profil risque gain"===u?l.a.createElement(w,{ResultatProfil:O}):null,"Support d'investissement"===u?l.a.createElement(J,{ResultatProfil:O}):null,"March\xe9s & Produits"===u?l.a.createElement(z,{ResultatProfil:O}):null,"R\xe8gles d'Or"===u?l.a.createElement(W,{ResultatProfil:O}):null,"Pour aller plus loin"===u?l.a.createElement(Q,null):null),l.a.createElement(h.a.Footer,null,l.a.createElement(T.a,{onClick:e.onHide,className:"btn-close"},"Fermer")))};return l.a.createElement("div",null,l.a.createElement("div",{id:"result-div"},l.a.createElement("h1",null,"RESULTATS"),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.For,{of:["Type de Gestion","Profil risque gain","Support d'investissement","March\xe9s & Produits","R\xe8gles d'Or","Pour aller plus loin"],as:function(e){return l.a.createElement("div",{className:"resultCard"},l.a.createElement(T.a,{className:"bloc-btn",onClick:function(){i(!0),function(e){d(e)}(e)}},e))}}),l.a.createElement(S,{show:r,onHide:function(){return i(!1)}}))),l.a.createElement("br",null),l.a.createElement("div",{id:"home-div"},l.a.createElement(P.a,{icon:R.b,size:"3x",className:"home-btn",onClick:function(){window.location.reload(!1)}})))}),K=function(e){var t=Object(a.useState)(),n=Object(c.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)("accueil"),s=Object(c.a)(o,2),u=s[0],m=s[1];return"profil"===u?l.a.createElement($,null):"accueil"===u?l.a.createElement("div",{className:"div-accueil"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null,"R\xe9pondez le plus naturellement \xe0 ces questions afin de d\xe9terminer VOTRE PROFIL !")," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-start",onClick:function(){d().then((function(e){i(e.data),m("questionnaire")})).catch((function(e){console.log(e)}))}},"Commencer le questionnaire")):"questionnaire"===u?l.a.createElement(j,{listQuestion:r,displayProfil:function(){m("profil")}}):void 0};var X=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("h1",null,"PROFILER"),l.a.createElement("span",null,"Bien se conna\xeetre pour mieux investir")),l.a.createElement("div",{className:"main-container"},l.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(22),Z=n(60),ee=n(11),te={point:0,nbReponses:0,isMinor:!1,isProfilPrudentAuto:!1,isProfilTraderAuto:!1};var ne={point:0,nbReponses:0};var ae=n(36),le=n(63);var re=Object(Y.c)({profil:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POINT_PROFIL":return Object(ee.a)({},e,{point:e.point+t.pointProfil});case"REMOVE_POINT_PROFIL":return Object(ee.a)({},e,{point:e.point-t.pointProfilToRemove});case"ADD_RESPONSE_COUNT":return Object(ee.a)({},e,{nbReponses:e.nbReponses+1});case"REMOVE_ONE_RESPONSE":return Object(ee.a)({},e,{nbReponses:e.nbReponses-1});case"SET_IS_MINOR":return Object(ee.a)({},e,{isMinor:t.isMinor});case"SET_PROFIL_PRUDENT_AUTO":return Object(ee.a)({},e,{isProfilPrudentAuto:t.isProfilPrudent});case"SET_PROFIL_TRADER_AUTO":return Object(ee.a)({},e,{isProfilTraderAuto:t.isProfilTraderAuto});default:return e}},gestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POINT_GESTION":return Object(ee.a)({},e,{point:e.point+t.pointGestion});case"REMOVE_POINT_GESTION":return Object(ee.a)({},e,{point:e.point-t.pointGestionToRemove});case"ADD_RESPONSE_GESTION_COUNT":return Object(ee.a)({},e,{nbReponses:e.nbReponses+1});case"REMOVE_ONE_RESPONSE_GESTION":return Object(ee.a)({},e,{nbReponses:e.nbReponses-1});default:return e}},proposition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{answersList:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LAST_ANSWER":return Object(ee.a)({},e,{answersList:[].concat(Object(le.a)(e.answersList),[Object(ae.a)({},t.dispatchToCall,t.valueToGive)])});case"REMOVE_LAST_ANSWER":return Object(ee.a)({},e,{answersList:e.answersList.slice(0,-1)});default:return e}}}),ie=Object(Y.d)(re,Object(Y.a)(Z.a));i.a.render(l.a.createElement(m.a,{store:ie},l.a.createElement(o.a,null,l.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,n){e.exports=n(102)},73:function(e,t,n){},74:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.f9c3a7c0.chunk.js.map