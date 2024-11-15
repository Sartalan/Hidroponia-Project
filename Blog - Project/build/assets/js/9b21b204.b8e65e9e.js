"use strict";(self.webpackChunkherzarmband_blog=self.webpackChunkherzarmband_blog||[]).push([[3669],{5573:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(4848),i=a(8453);const r={sidebar_position:1},c=void 0,s={id:"Informe/Hardware",title:"Hardware",description:"Introducci\xf3n",source:"@site/docs/Informe/Hardware.md",sourceDirName:"Informe",slug:"/Informe/Hardware",permalink:"/Hidroponia-Project/docs/Informe/Hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Informe/Hardware.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Informe Final",permalink:"/Hidroponia-Project/docs/category/informe-final"},next:{title:"Software",permalink:"/Hidroponia-Project/docs/Informe/Software"}},l={},d=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:3},{value:"Explicaci\xf3n b\xe1sica",id:"explicaci\xf3n-b\xe1sica",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Aplicaci\xf3n real",id:"aplicaci\xf3n-real",level:3},{value:"Explicaci\xf3n m\xe1s a fondo",id:"explicaci\xf3n-m\xe1s-a-fondo",level:3},{value:"Monitoreo",id:"monitoreo",level:4},{value:"Disparo",id:"disparo",level:4},{value:"Conexionado b\xe1sico",id:"conexionado-b\xe1sico",level:3}];function t(e){const n={code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:'En este apartado hablaremos del disparo; la car\xe1cteristica m\xe1s interesante de nuestro proyecto. El "Disparo" es la capacidad que le dimos al circuito para, mediante Software, poder "cortar" la onda senoidal y con ello variar el valor del voltaje de la corriente alterna.'}),"\n",(0,o.jsx)(n.p,{children:'A\xfan no hablaremos de su accionamiento "real" en el proyecto. Esto es una explicaci\xf3n te\xf3rica con respecto al como nosotros logramos solucionar un problema.'}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"explicaci\xf3n-b\xe1sica",children:"Explicaci\xf3n b\xe1sica"}),"\n",(0,o.jsxs)(n.p,{children:['En primeras antes de hablar del c\xf3digo debemos de hablar del circuito; consta de dos partes: una de monitoreo y otra de control, en la primera se busca tener una lectura constante de la onda senoidal para determinar s\xed esta cruza por cero, y en la segunda se busca "disparar" hac\xeda la onda senoidal para cortarla, y poder as\xed ',(0,o.jsx)(n.strong,{children:"regular su intensidad"})]}),"\n",(0,o.jsx)(n.p,{children:"\xbfC\xf3mo la parte de control logra esto?"}),"\n",(0,o.jsx)(n.p,{children:"Para poder determinar cuando disparar o no por el c\xf3digo, b\xe1sicamente se la divide a la onda senoidal en varias partes.\nPrimero calculando su periodo, utilizando para ello la cuenta:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Calculo Uno",src:a(2712).A+"",width:"95",height:"36"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Luego, se la divide en 360 partes para as\xed tener un ciclo entero."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Calculo Dos",src:a(1424).A+"",width:"141",height:"36"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Una vez tenidos estos datos podemos asumir diversas cosas:"}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Un semiciclo de nuestra onda es equivalente a: 360/2."}),"\n",(0,o.jsx)(n.li,{children:"Cada 46\u03bcs recorremos 1\xb0 de nuestra onda."}),"\n",(0,o.jsxs)(n.li,{children:["46\u03bcs x (360/2) Es equivalente al recorrido ",(0,o.jsx)(n.strong,{children:"total"})," de tiempo que conlleva un solo semiciclo."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Ahora s\xed, comencemos con el c\xf3digo."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"\n    #include <TimerOne.h>\n    \n    int GradoElectrico = 0;\n    \n    void GradoZero(){\n      GradoElectrico = 0;\n    }\n\n    void Disparo() {\n      GradoElectrico++;\n\n      // Resto de instrucciones...\n      // (Instrucciones de cuando disparar)\n      \n    }\n    \n    void setup(){\n      attachInterrupt(0, GradoZero, CHANGE);\n      Timer1.initialize(46);\n      Timer1.attachInterrupt(Disparo);\n    }\n\n    void loop(){ // Resto de instrucciones...}\n"})}),"\n",(0,o.jsx)(n.p,{children:"B\xe1sicamente aplicamos todo lo aprendido:\nComencemos con la funci\xf3n Setup:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"    attachInterrupt(0,GradoZero,CHANGE);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Esta linea de c\xf3digo pertenece a la libreria de TimerOne, y se encarga de inicializar una entrada de datos en el pin 0 que por default es el 2 y, que cada vez que cambie de HIGH a LOW o viceversa, ejecuta la funci\xf3n GradoZero(), la cual reestablece los valores de la variable GradoElectrico."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"    Timer1.initialize(46);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Le indicamos al programa que inicialice un temporizador de 46\u03bcs."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"    Timer1.attachInterrupt(Disparo)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Cada vez que finaliza el temporizador de 46\u03bcs se ejecuta la funci\xf3n Disparo()"}),"\n",(0,o.jsx)(n.p,{children:"En resumidas cuentas, el c\xf3digo se encarga de ejecutar un cronometro que cada 46\u03bcs ejecuta una funci\xf3n, la cu\xe1l aumentar\xe1 una variable int; pero, reci\xe9n llegado a un valor LOW en la onda, es decir 180\xb0 o, 46\u03bcs x 180\xb0 de tiempo; el cronometro volver\xe1 a reiniciarse y la variable de grados tambi\xe9n lo har\xe1 junto con ella."}),"\n",(0,o.jsx)(n.p,{children:"Es decir, este simple c\xf3digo tiene la posibilidad de manipular por completo un ciclo de nuestra onda senoidal partiendola a \xe9sta en 180\xb0 al detectar el cruce por cero antes de terminar el ciclo completo. Pudiendo con ello ejecutar scripts de c\xf3digo que tan solo tengan que variar entre los valores de 1 - 180 de la variable int de GradoElectrico y, as\xed, determinando cuando disparar dentro del semiciclo."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Nota: Esta es una versi\xf3n ",(0,o.jsx)(n.em,{children:"muy"})," b\xe1sica del accionamiento del disparo, pero sirve."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Gif Simulaci\xf3n",src:a(5150).A+"",width:"1042",height:"552"})}),"\n",(0,o.jsx)(n.p,{children:"En este ejemplo estamos viendo la variaci\xf3n que puede lograr un disparo en la onda senoidal simulado en Proteus.\nPara esta simulaci\xf3n se utilizo el valor mapeado en c\xf3digo de un potenciometro con respecto a los 180\xb0 del semiciclo de la onda senoidal."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"aplicaci\xf3n-real",children:"Aplicaci\xf3n real"}),"\n",(0,o.jsx)(n.p,{children:"Retomando el informe de nuestro proyecto, nuestro circuito real no termin\xf3 por utilizar como car\xe1cteristica\nla regulaci\xf3n de voltaje en su aplicaci\xf3n. Esto ocurri\xf3 por diversos cambios a lo largo del proyecto que, de manera repentina, nos forz\xf3 a terminar por usar los disparos para prender cosas sencillas, de las que realmente con el uso de\nrel\xe9s ya se podr\xeda haber solucionado sin necesidad de un circuito tan complejo. De igual forma no es nada desmotivante; la posibilidad de usarlo sigue, y por suerte el problema est\xe1 solucionado."}),"\n",(0,o.jsx)(n.h3,{id:"explicaci\xf3n-m\xe1s-a-fondo",children:"Explicaci\xf3n m\xe1s a fondo"}),"\n",(0,o.jsx)(n.p,{children:"El circuito consta de dos partes -como se dijo en la introducci\xf3n- una de monitoreo y otra de disparo."}),"\n",(0,o.jsx)(n.h4,{id:"monitoreo",children:"Monitoreo"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"La de monitoreo tiene como \xfanico fin captar el cruce por cero del semiciclo. Cada vez que dicho cambio se realice,\nun optoacoplador (4N25) se encargar\xe1 de enviar un cambio de estado l\xf3gico con la intenci\xf3n de accionar un pin de interrupci\xf3n del microcontrolador. En el caso del Arduino Nano solo existen dos: el pin de interrupci\xf3n 2 y el pin de interrupci\xf3n 3. En nuestro circuito final terminamos por utilizar el pin 3."}),"\n",(0,o.jsxs)(n.p,{children:["La car\xe1cteristica m\xe1s importante que tiene una interrupci\xf3n en el uso de un microcontrolador es que, uno tiene la posibilidad de que todo el flujo de trabajo del c\xf3digo opere con normalidad, pero apenas haya un cambio l\xf3gico en X pin, se interrumpa el funcionamiento de ",(0,o.jsx)(n.em,{children:"todo"})," el c\xf3digo con tal de priorizar una nueva funci\xf3n que actuar\xe1 cuando esta interrupci\xf3n sea dada. En el caso de nuestro c\xf3digo la nueva funci\xf3n solo resetearia el valor de grado el\xe9ctrico, para luego hasta la siguiente interrupci\xf3n se siga teniendo un correcto seguimiento de la onda senoidal."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"disparo",children:"Disparo"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"La de disparo se encarga \xfanicamente de accionar un TRIAC que cerrar\xe1 un circuito AC en base a la se\xf1al l\xf3gica que reciba de un optoacoplador (MOC3021). Este optoacoplador ser\xe1 accionado por un pin del Arduino."}),"\n",(0,o.jsx)(n.p,{children:"La secci\xf3n de disparo tambi\xe9n tiene muchas integraciones de seguridad extra que fuimos incorporando a medida que pasaba el tiempo y nuestro circuito segu\xeda estallando."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"conexionado-b\xe1sico",children:"Conexionado b\xe1sico"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Circuito b\xe1sico",src:a(1343).A+"",width:"591",height:"416"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(t,{...e})}):t(e)}},1343:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/Prototipo-Simulacion-726f51f402393b2ff71e79d6bc6363ee.jpeg"},5150:(e,n,a)=>{a.d(n,{A:()=>o});const o=a.p+"assets/images/Video-Simulacion-1c4539cf24f67ac4ea4d9706b146f152.gif"},1424:(e,n,a)=>{a.d(n,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAAkCAQAAAAeRHEIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfoCBMQLxq3R+KYAAADv0lEQVRo3t2Z73GjOBiHn3hcgNbXAXSAsxUcdEBmK1jcAZ6r4IZ0QK6CXbsDsx3E6QB3sI47eO8DQuGPAI0nczb30xdBfmbQyyvpfaIHAYj5SonPD96wq+9QPJLxxKnhSlAAvHBh/hIklIMgCFKKp3vt1ncEkkos0vLvJBEEOUpmfcrMWjWUWF9mklttdodqhSaWo+4lEtx6WJ/RligCk/6/iS2JNe0AyNjr3sutZ8LnaIkHnPXVBc/imXZUrpKUCz4HCnM3Ac6s+Dm/1WfJCsxrnwHVG8S0AwIg4gmAko0OToLiGThwNjk1Gy16QRjXmKPeqwoy3VvzjQDYzC8wsDBTpdal55l2VPdK0w90L8fjyPvgJLxHxaSEhLDgBObVlXXY0w5a1c2H3vhCxCu7W4/XWQlfeeZEBgsuvOlCDXx+WuzTDoACX/eULguPJEChV6A5SJGxBU78yUDJF8ihVczZi0JPpFHBBFLq3ru+exSlK57k1jWKYwullFhiycQTHjQoeFxYk+vvHbJj26pPug6PDQEhBW8GHgI2lPiNp3icWTGfSichx+eE4ohfhcZuu58BhURsG2+mgHFS6xNelwJTswBU2lEQ8w9fABD8odRSBg3uoZUNKnMhtT7hTXNitUTUi4KIN2S6p9UhlYMJgzuptQlvmhNrn6pDtBxIyDP3ooCCyFxdR2puFAjwxF+UrIkYDM39VK8hz40rG6nFrFiT4eGxZmN5hhsFApw+1rQlt1JufcVdJxvSVmBspBZyYa/31ILM7I9NuVBgT0tk2vQpeuhcbxx+E1iG2SS1NZi9K6BA8ffg/ymbYXLSsvfK96T2ZLKTWhWYiD1w6fhruVCgJTT3qxRfM7zHiox8gNQA4kbd01dFgdWvnSbTbUOzM1zW1KHx3T96IYUeepfUFAnPBHh6UU6teeNGgV3dvGpxK/nqWqRLaomUgqRSihIkGSQ8t5Kv1R7+q1X4aoU8kXBirydUm9Q8thx5Bb5R8jpCeF0KnNRUaFIAotam2mWY6VOseWo0qXKdyJ6IQYcuw1yRqvNoi4nIPQLVCu/rDPF0/uT8ACAj19796C4xPzlFMBSRUGdGm3eV+Uu1GN78W39ec9u8NxR6c+wyjDudzE7ToUmIQLNvn2GuopN5aGqtgRe+c+JgSqb+aVMtZzqZh6ZDAxe2PPILG8NcRSfz0FhoFO+6roETAbbTJpczqplqLDSrxmBrOOsyzHV0Mg+NbmC5PkkKzBbdP23635Z806DwB7+J2BoI6J42XUEn89C/NCxFS1obziAAAAAidEVYdGNvbW1lbnQAUmVuZGVyZWQgYnkgUXVpY2tMYVRlWC5jb20gSdC2AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA4LTE5VDE2OjQ3OjI2KzA5OjAwMFMGdwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wOC0xOVQxNjo0NzoyNiswOTowMEEOvssAAAAASUVORK5CYII="},2712:(e,n,a)=>{a.d(n,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAkCAQAAABFoC58AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfoCBMQMDM4r3RqAAACPklEQVRYw+2X0XWiQBSGPz0UwFoCdIDZDkwHpgXoIKmBdKAdbEwHUkKwA0wFi3Rw94GRADM5jCgLOcd/Xq5z54z/jHDvJ0JjuLKSVLzW7GSHQ10BK44E/BjNpD3jcsLnOLYxO83HNnC3/3N1t3+331vO9VsMKK2qM+uyvwDcsX2bzepq2veICICYA384jO3e4nxy/R7fa81vMvxvr0LPuzwQ89To+qF6GrYU2g4DAtVK9irKjBCo5wN5lrVIY/VOQkGQVGJ9jyHtp7JWUSwb67zbsL+WVEWhBF3EeUu5BNWP/Zf1xflSMe8q2prSw9n3gFzFBd7F+fOqjGcKfPYk1WwI5Cx462d/Y/y6XeOGFlDdbg64rRevKw8QAI88AZARqQOEuLwCe3IHm9LTrr/RhcddXJE/16CEmCUASx5IOBBxnDOzGH2Utz4XF+bPc1kVn/8FbvBIOeENyTxHqB4x04PRlT+v0XXgF498sOv76u6MWLHntXFzh2qVz5u2uitfKsGvjli2tpQNWxI++OQ/t61A9rWabm5rnkitwgeSqeikZlNxVUcIZXBo8ChYslE3t2LHS60+tfMlc61IaswVEJHh1/bwyFkA2y/maXNFF630V2huQD1l5IouWuk/3AoUbjLMXNFFK/1HeNv3y0HnCjsa6af8+i3qctC5wo5G+un9+i2a9nWusKGRiajsunWuaKqLVka3X9DmChsamYjmBq6woZGJaI7OFXY0Mg0ZuWK4tnXjUUJDmyt0Gpmo/gEroldOb6L+BgAAACJ0RVh0Y29tbWVudABSZW5kZXJlZCBieSBRdWlja0xhVGVYLmNvbSBJ0LYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDgtMTlUMTY6NDg6NTErMDk6MDAOOmptAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA4LTE5VDE2OjQ4OjUxKzA5OjAwf2fS0QAAAABJRU5ErkJggg=="},8453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>s});var o=a(6540);const i={},r=o.createContext(i);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);