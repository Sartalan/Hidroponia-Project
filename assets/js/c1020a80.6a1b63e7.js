"use strict";(self.webpackChunkherzarmband_blog=self.webpackChunkherzarmband_blog||[]).push([[816],{4266:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=r(4848),n=r(8453);const t={slug:"nota/two",title:"Nota",authors:["Team"],tags:["app","indoor"]},s=void 0,i={permalink:"/Hidroponia-Project/blog/nota/two",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Notas/2024-8-11.md",source:"@site/blog/Notas/2024-8-11.md",title:"Nota",description:'Muy seguramente vayamos a\xf1adiendo una secci\xf3n de "Notas" para a\xf1adir actualizaciones y/o ideas nuevas respecto a qu\xe9 pensamos integrar y que no; algo hablado con nuestro profesor fue integrar una aplicaci\xf3n que estuvimos desarrollando para el que iba a ser nuestro primer proyecto del a\xf1o, pero se cancel\xf3.',date:"2024-08-11T00:00:00.000Z",tags:[{label:"app",permalink:"/Hidroponia-Project/blog/tags/app"},{label:"indoor",permalink:"/Hidroponia-Project/blog/tags/indoor"}],readingTime:2.055,hasTruncateMarker:!1,authors:[{name:"Wolfsrudel",title:"All the Team",url:"https://github.com/Sartalan/Hidroponia-Project",imageURL:"https://img.desmotivaciones.es/202303/tonto-perro-imagenes.jpg",key:"Team"}],frontMatter:{slug:"nota/two",title:"Nota",authors:["Team"],tags:["app","indoor"]},unlisted:!1,nextItem:{title:"Release",permalink:"/Hidroponia-Project/blog/pcb/one"}},c={authorsImageUrls:[void 0]},l=[{value:"\xbfQu\xe9 m\xe1s aparte de mostrar la frecuencia card\xedaca iba a hacer?",id:"qu\xe9-m\xe1s-aparte-de-mostrar-la-frecuencia-card\xedaca-iba-a-hacer",level:3}];function d(e){const a={a:"a",h3:"h3",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:'Muy seguramente vayamos a\xf1adiendo una secci\xf3n de "Notas" para a\xf1adir actualizaciones y/o ideas nuevas respecto a qu\xe9 pensamos integrar y que no; algo hablado con nuestro profesor fue integrar una aplicaci\xf3n que estuvimos desarrollando para el que iba a ser nuestro primer proyecto del a\xf1o, pero se cancel\xf3.\nEste se trataba de un Indoor, el cu\xe1l iba a tener una funcionalidad muy parecida a lo que estamos haciendo con la Hidroponia al tener que, tambi\xe9n, tener el control absoluto del ambiente para cuidar de una planta.'}),"\n",(0,o.jsxs)(a.p,{children:["\xc9sta, al claramente haberse cancelado el proyecto, se le cancel\xf3 su desarrollo; pero eso no supuso su extinci\xf3n, se la quiso agregar a nuestro pr\xf3ximo proyecto: Herzarmband.\nHerzarmband iba a ser un reloj/brazalete -nunca se decidi\xf3- que tomar\xeda la frecuencia card\xedaca y, por aprovechar el c\xf3digo previamente creado para la aplicaci\xf3n. Aunque esto claramente era ",(0,o.jsx)(a.strong,{children:"muy"})," impr\xe1ctico y: sin sentido."]}),"\n",(0,o.jsx)(a.h3,{id:"qu\xe9-m\xe1s-aparte-de-mostrar-la-frecuencia-card\xedaca-iba-a-hacer",children:"\xbfQu\xe9 m\xe1s aparte de mostrar la frecuencia card\xedaca iba a hacer?"}),"\n",(0,o.jsx)(a.p,{children:"Era un completo sin sentido, salvo que, se pensar\xe1 a\xf1adir alg\xfan tipo de algoritmo que predijera y detectar\xe1 de una forma u otra problemas cardiovasculares -como los hacen muchos en el mercado-  pero eso ya dejar\xeda de ser un proyecto de Electr\xf3nica y se convertir\xeda en uno de Software; no es la idea de la materia."}),"\n",(0,o.jsx)(a.p,{children:"Pero afortunadamente es genuinamente pr\xe1ctica para integrarla en \xe9ste proyecto, sirviendo perfectamente como una interf\xe1z gr\xe1fica para visualizar en tiempo real por wifi el estado de tus plantas e hidroponia en general."}),"\n",(0,o.jsxs)(a.p,{children:["A ra\xedz de esto a\xf1adiremos la app al proyecto; la idea es crear una comunicaci\xf3n HTTP entre la Raspberry Pi y la Aplicaci\xf3n de celular. Para ello nuestra idea es crear un servidor con ",(0,o.jsx)(a.strong,{children:"Javascript y Express"})," (Libreria Backend de Nodejs) que tenga interacci\xf3n con el recibo de datos que reciba la Raspberry del circuito -ya sea por wifi o alg\xfan diferente protocolo de comunicaci\xf3n- y, setear dichos datos con una API la cu\xe1l tendr\xe1 un endpoint donde la aplicaci\xf3n de celular, la cual tambi\xe9n est\xe1 escrita con Javascript -concretamente con el Framework de ",(0,o.jsx)(a.strong,{children:"React Native"})," se conectar\xe1.\nMuy posiblemente utilizando archivos ",(0,o.jsx)(a.strong,{children:"JSON"})," para almacenar la informaci\xf3n."]}),"\n",(0,o.jsx)(a.p,{children:"Para la fecha actual, la app luce de la siguiente forma:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"App Indoor",src:r(6487).A+"",width:"382",height:"828"})}),"\n",(0,o.jsx)(a.p,{children:"El diagrama de bloques que dise\xf1amos para explicar su comunicaci\xf3n HTTP para proponerselo a nuestro profesor es:"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.img,{alt:"Diagrama De Comunicaci\xf3n entre Servidor-Cliente | HTTP",src:r(7498).A+"",width:"1241",height:"1600"})}),"\n",(0,o.jsxs)(a.p,{children:["S\xed usted quiere ver m\xe1s en profundidad su desarrollo, su repositorio y ramal de Github donde se programo se encuentra ",(0,o.jsx)(a.a,{href:"https://github.com/Sartalan/Indoor-Project/tree/App",children:"aqu\xed"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7498:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/App-Communication-96e2b9edb873bff650acd4d0736ca47b.jpeg"},6487:(e,a,r)=>{r.d(a,{A:()=>o});const o=r.p+"assets/images/App-Indoor-d8a7455cad9dd702de67d2fd6cfe988a.gif"},8453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>i});var o=r(6540);const n={},t=o.createContext(n);function s(e){const a=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(t.Provider,{value:a},e.children)}}}]);