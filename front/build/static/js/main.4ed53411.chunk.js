(this["webpackJsonpfront-react-profiler"]=this["webpackJsonpfront-react-profiler"]||[]).push([[0],{61:function(e,t,n){e.exports=n(97)},67:function(e,t,n){},68:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),o=n.n(r),i=n(57),c=(n(66),n(67),n(5)),s=(n(68),n(52)),u=n.n(s).a.create({baseURL:"https://profiler-prod.herokuapp.com/api",headers:{"Content-type":"application/json"}}),m=function(){return u.get("/questions")},d=n(13),p=n(23),f=function(e){return u.get("/propositions/getByQuestions",{params:{id:e}})},b=(n(90),function(e){var t=Object(d.b)(),n=Object(a.useState)(),r=Object(c.a)(n,2),o=r[0],i=r[1];Object(a.useEffect)((function(){return s()}),[e.idQuestion]);var s=function(){f(e.idQuestion).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"list-group list-group-flush proposition-container "},l.a.createElement(p.For,{of:o,as:function(n){return l.a.createElement("div",{className:"list-group-item proposition-card",onClick:function(a){return function(n){n.pointsProfil&&(t({type:"ADD_RESPONSE_COUNT"}),t({type:"ADD_POINT_PROFIL",pointProfil:n.pointsProfil})),n.pointsTypeGestion&&(t({type:"ADD_RESPONSE_GESTION_COUNT"}),t({type:"ADD_POINT_GESTION",pointGestion:n.pointsTypeGestion})),38!=n.id&&39!=n.id&&40!=n.id&&41!=n.id||t({type:"SET_PROPOSITION_SELECTED",propositionId:n.id}),e.setIndexHandler()}(n)}},n.libelle)}}))}),E=(n(91),n(92),function(e){var t={id:e.listQuestion[0].id,libelle:e.listQuestion[0].libelle},n=Object(a.useState)(t),r=Object(c.a)(n,2),o=r[0],i=r[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),m=u[0],d=u[1],p=Object(a.useState)(0),f=Object(c.a)(p,2),E=f[0],v=f[1];Object(a.useEffect)((function(){return i(e.listQuestion[m],[m])}));var O=100*(m+1)/(e.listQuestion.length-1);return o?o?l.a.createElement("div",{className:"question-container"},l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",style:{width:E+"%"}},"Question ",m+1," sur ",e.listQuestion.length)),l.a.createElement("h3",{className:"titre-question"},o.libelle),l.a.createElement("div",{className:"indexQuestion"}),l.a.createElement(b,{setIndexHandler:function(){v(O),d(m+1)},idQuestion:o.id}),l.a.createElement("br",null)):void 0:l.a.createElement("div",null,void e.displayProfil())}),v=n(12),O=n(25),g=function(){return u.get("/profils")},h=function(e){return u.get("/profils/".concat(e))},j=n(117),S=n(119),y=n(120),N=n(121),P=function(e){var t=Object(j.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),n=Object(a.useState)({id:null,libelle:"",temps:"",variation:"",actif_profil:[],conseil_profil:[],description:""}),r=Object(c.a)(n,2),o=r[0],i=r[1],s=Object(a.useState)([]),u=Object(c.a)(s,2),m=u[0],d=u[1],p=t();Object(a.useEffect)((function(){f(),b()}),[]);var f=function(){h(e.ResultatProfil).then((function(e){i({id:e.data.id,libelle:e.data.libelle,temps:e.data.temps,variation:e.data.variation,actif_profil:e.data.actif_profil,description:e.data.description})})).catch((function(e){console.log(e)}))},b=function(){g().then((function(e){d(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que vous pouvez opter pour un niveau de risque"),m.map((function(e,t){return l.a.createElement(S.a,{key:t,className:p.root,style:{backgroundColor:e.libelle===o.libelle?"LightGreen":null}},l.a.createElement(y.a,null,l.a.createElement(N.a,{className:p.title,color:"textSecondary",gutterBottom:!0},e.libelle),l.a.createElement(N.a,{variant:"body2",component:"p"},"Variation moyenne annuelle cible : ",e.variation,l.a.createElement("br",null),"Temps \xe0 y consacrer (Sauf gestion d\xe9l\xe9gu\xe9e) : ",e.temps,"Trader"===o.libelle&&"Trader"===e.libelle?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"Vos r\xe9ponses permettent de d\xe9terminer qu'en plus de votre profil d'investisseur vous pouvez envisager le profil Trader")):null)))})))},R=function(){return u.get("/typesGestion")},T=function(e){return u.get("/typesGestion/".concat(e))},I=function(e){var t=Object(a.useState)({id:null,libelle:"",description:""}),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)([]),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Object(j.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})();return Object(a.useEffect)((function(){R().then((function(e){m(e.data),console.log(e.data)})).catch((function(e){console.log(e)})),T(e.ResultatGestion).then((function(e){o({id:e.data.id,libelle:e.data.libelle,description:e.data.description})})).catch((function(e){console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que vous pouvez opter pour une gestion"),u.map((function(e,t){return console.log(e),l.a.createElement(S.a,{key:t,className:d.root,style:{backgroundColor:e.libelle===r.libelle?"LightGreen":null}},l.a.createElement(y.a,null,l.a.createElement(N.a,{className:d.title,color:"textSecondary",gutterBottom:!0},e.libelle),l.a.createElement(N.a,{variant:"body2",component:"p"},e.description)))})))},_=function(e){var t={idProfil:e};return u.post("/actifs/getByProfilId/",{params:t})},k=n(123),D=n(127),B=n(126),C=n(122),A=n(124),q=n(125),G=n(98),L=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)([]),s=Object(c.a)(i,2),u=s[0],m=s[1];Object(a.useEffect)((function(){p(),d()}),[]);var d=function(){g().then((function(e){m(e.data)})).catch((function(e){console.log(e)}))},p=function(){_(e.ResultatProfil).then((function(e){o(e.data)})).catch((function(e){console.log(e)}))},f=Object(j.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})();return l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que vous pouvez investir sur les march\xe9s et produits suivants"),u.map((function(t,n){return l.a.createElement(S.a,{key:n,className:f.root,style:{backgroundColor:t.id===e.ResultatProfil?"LightGreen":null}},l.a.createElement(y.a,null,l.a.createElement(N.a,{className:f.title,color:"textSecondary",gutterBottom:!0},t.libelle),t.id===e.ResultatProfil?l.a.createElement("div",null,l.a.createElement(C.a,{component:G.a},l.a.createElement(k.a,{"aria-label":"simple table"},l.a.createElement(A.a,null,l.a.createElement(q.a,null,l.a.createElement(B.a,null,"Types d'Actifs"),l.a.createElement(B.a,{align:"left"},"Pond\xe9ration"),l.a.createElement(B.a,{align:"left"},"Produits"))),l.a.createElement(D.a,null,r.map((function(e,t){return l.a.createElement(q.a,{key:t},l.a.createElement(B.a,{component:"th",scope:"row"},e.libelle),l.a.createElement(B.a,{align:"left"},e.ponderation),l.a.createElement(B.a,{align:"left"},e.produit_actif.map((function(e,t){return l.a.createElement("div",{key:t},e.libelle)}))))})))))):null))})))},w=function(e){return l.a.createElement("div",null,"DANS LE MODAL PLUS LOIN")},x=function(){return u.get("/conseils")},F=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)([]),s=Object(c.a)(i,2),u=(s[0],s[1],Object(a.useState)()),m=Object(c.a)(u,2),d=m[0],f=m[1],b=Object(a.useState)(!1),E=Object(c.a)(b,2),g=E[0],h=E[1];Object(a.useEffect)((function(){S()}),[]);var j=function(e){f(e)},S=function(){x().then((function(e){o(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},y=function(e){return e.length>60?e.substring(0,60)+"...":e},N=function(e){return l.a.createElement(v.a,Object.assign({},e,{dialogClassName:"modal-bloc","aria-labelledby":"contained-modal-title-vcenter"}),l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},d?l.a.createElement("p",null,d.libelle):l.a.createElement("p",null,"NADA"))),l.a.createElement(v.a.Body,null,d?l.a.createElement("p",null,d.description):l.a.createElement("p",null,"NADA")),l.a.createElement(v.a.Footer,null,l.a.createElement(O.a,{onClick:e.onHide,className:"btn-close"},"Fermer")))};return l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Voici les principales r\xe8gles \xe0 conna\xeetre pour devenir un ",5===e.ResultatProfil?"Trader":"Investisseur"," performant !"),5===e.ResultatProfil?l.a.createElement(p.For,{of:r,as:function(e){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(O.a,{className:"bloc-btn",onClick:function(){h(!0),j(e)}},y(e.libelle)))}}):l.a.createElement(p.For,{of:r.filter((function(e){return 9!=e.id&&10!=e.id&&11!=e.id&&12!=e.id&&13!=e.id&&14!=e.id})),as:function(e){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(O.a,{className:"bloc-btn",onClick:function(){h(!0),j(e)}},y(e.libelle)))}}),l.a.createElement(N,{show:g,onHide:function(){return h(!1)}})))},Q=function(){return u.get("/supportsInv")},z=function(e){var t={idProposition:e};return u.post("/supportsInv/getByPropositionId/",{params:t})},H=function(e){var t=Object(j.a)({root:{minWidth:275,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}})(),n=Object(a.useState)([]),r=Object(c.a)(n,2),o=r[0],i=r[1],s=Object(a.useState)([]),u=Object(c.a)(s,2),m=u[0],d=u[1];Object(a.useEffect)((function(){p(),f()}),[]);var p=function(){z(e.IdPropositionSupport).then((function(e){i(e.data)})).catch((function(e){console.log(e)}))},f=function(){Q().then((function(e){d(e.data)})).catch((function(e){console.log(e)}))};return l.a.createElement("div",null,l.a.createElement("div",null,"Vos r\xe9ponses permettent de d\xe9terminer que les supports d'investissement qui vous correspondent sont"),m.map((function(e,n){var a=o.some((function(t){return t.libelle===e.libelle}));return l.a.createElement(S.a,{key:n,className:t.root,style:{backgroundColor:a?"LightGreen":null}},l.a.createElement(y.a,null,l.a.createElement(N.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.libelle),l.a.createElement(N.a,{variant:"body2",component:"p"},l.a.createElement("br",null),l.a.createElement("a",{href:e.description,target:"_blank"},"Pour plus d'infos, suivez ce lien"))))})))},U=(n(95),function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(),s=Object(c.a)(i,2),u=s[0],m=s[1],f=Object(d.c)((function(e){return e.profil.point})),b=Object(d.c)((function(e){return e.profil.nbReponses})),E=Number((f/b).toFixed(0)),g=Object(d.c)((function(e){return e.gestion.point})),h=Object(d.c)((function(e){return e.gestion.nbReponses})),j=Number((g/h).toFixed(0)),S=Object(d.c)((function(e){return e.support.propositionSelected})),y=function(e){return l.a.createElement(v.a,Object.assign({},e,{dialogClassName:"modal-bloc","aria-labelledby":"contained-modal-title-vcenter"}),l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},u?l.a.createElement("p",null,u):l.a.createElement("p",null,"NADA"))),l.a.createElement(v.a.Body,null,"Type de Gestion"===u?l.a.createElement(I,{ResultatGestion:j}):null,"Profil risque gain"===u?l.a.createElement(P,{ResultatProfil:E}):null,"Support d'investissement"===u?l.a.createElement(H,{IdPropositionSupport:S}):null,"March\xe9s & Produits"===u?l.a.createElement(L,{ResultatProfil:E}):null,"R\xe8gles d'Or"===u?l.a.createElement(F,{ResultatProfil:E}):null,"Pour aller plus loin"===u?l.a.createElement(w,null):null),l.a.createElement(v.a.Footer,null,l.a.createElement(O.a,{onClick:e.onHide,className:"btn-close"},"Fermer")))};return l.a.createElement("div",null,l.a.createElement("h1",null,"RESULTATS"),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.For,{of:["Type de Gestion","Profil risque gain","Support d'investissement","March\xe9s & Produits","R\xe8gles d'Or","Pour aller plus loin"],as:function(e){return l.a.createElement("div",{className:"resultCard"},l.a.createElement(O.a,{className:"bloc-btn",onClick:function(){o(!0),function(e){m(e)}(e)}},e))}}),l.a.createElement(y,{show:r,onHide:function(){return o(!1)}})))}),V=function(e){var t=Object(a.useState)(),n=Object(c.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)("accueil"),s=Object(c.a)(i,2),u=s[0],d=s[1];return"profil"===u?l.a.createElement(U,null):"accueil"===u?l.a.createElement("div",{className:"div-accueil"},l.a.createElement("h1",null,"D\xe9terminez votre profil boursier"),l.a.createElement("span",null,"L'un des crit\xe8res fondamentaux consiste \xe0 d\xe9terminer si vous \xeates Investisseur, Trader ou les 2.",l.a.createElement("br",null),"La confusion entre ces deux profils conduit fr\xe9quemment \xe0 l'\xe9chec et \xe0 des contre-performances."),l.a.createElement("br",null),l.a.createElement("span",null,"En r\xe9pondant le plus naturellement possible \xe0 ces questions, vous pourrez d\xe9terminer votre profil d'investisseur et savoir ce qui vous correspond le mieux sur les march\xe9s actuels.")," ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-start",onClick:function(){m().then((function(e){o(e.data),d("questionnaire")})).catch((function(e){console.log(e)}))}},"D\xe9marrer le questionnaire")):"questionnaire"===u?l.a.createElement(E,{listQuestion:r,displayProfil:function(){d("profil")}}):void 0};var W=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("h1",null,"PROFILER"),l.a.createElement("span",null,"Les cl\xe9s pour d\xe9buter dans la bourse en toute s\xe9r\xe9nit\xe9")),l.a.createElement("div",{className:"main-container"},l.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(22),J=n(55),$=n(19),K={point:0,nbReponses:0};var X={point:0,nbReponses:0};var Y={propositionSelected:0};var Z=Object(M.c)({profil:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POINT_PROFIL":return Object($.a)({},e,{point:e.point+t.pointProfil});case"ADD_RESPONSE_COUNT":return Object($.a)({},e,{nbReponses:e.nbReponses+1});default:return e}},gestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POINT_GESTION":return Object($.a)({},e,{point:e.point+t.pointGestion});case"ADD_RESPONSE_GESTION_COUNT":return Object($.a)({},e,{nbReponses:e.nbReponses+1});default:return e}},support:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROPOSITION_SELECTED":return Object($.a)({},e,{propositionSelected:t.propositionId});default:return e}}}),ee=Object(M.d)(Z,Object(M.a)(J.a));o.a.render(l.a.createElement(d.a,{store:ee},l.a.createElement(i.a,null,l.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.4ed53411.chunk.js.map