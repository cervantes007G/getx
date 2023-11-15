"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[467],{7775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(5893),r=n(1151);const i={sidebar_position:1},a="Commencer",o={id:"intro",title:"Commencer",description:"Tests en cours",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/getx/fr/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/jonataslaw/getx/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\xc0 propos de GetX",permalink:"/getx/fr/docs/about"}},l={},c=[{value:"Tests en cours",id:"tests-en-cours",level:2},{value:"Installation en cours",id:"installation-en-cours",level:3},{value:"Compteur d&#39;application avec GetX",id:"compteur-dapplication-avec-getx",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"commencer",children:"Commencer"}),"\n",(0,s.jsx)(t.h2,{id:"tests-en-cours",children:"Tests en cours"}),"\n",(0,s.jsx)(t.h3,{id:"installation-en-cours",children:"Installation en cours"}),"\n",(0,s.jsx)(t.p,{children:"Ajouter \xe0 votre fichier pubspec.yaml :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yml",children:"dependencies:\n  get:\n"})}),"\n",(0,s.jsx)(t.p,{children:"Importer dans les fichiers qu'il sera utilis\xe9 :"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"import 'package:get/get.dart';\n"})}),"\n",(0,s.jsx)(t.h3,{id:"compteur-dapplication-avec-getx",children:"Compteur d'application avec GetX"}),"\n",(0,s.jsx)(t.p,{children:'Le projet "compteur" cr\xe9\xe9 par d\xe9faut sur le nouveau projet sur Flutter a plus de 100 lignes (avec commentaires). Pour montrer la puissance de Get, je vais montrer comment faire un "compteur" en changeant l\'\xe9tat \xe0 chaque clic, basculer entre les pages et partager l\'\xe9tat entre les \xe9crans, de fa\xe7on organis\xe9e, s\xe9parant la logique commerciale de la vue, en SEULEMENT 26 Lignes CODE INCLUANT LES COMMENTS.'}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'\xc9tape 1 :\nAjouter "Obtenir" avant votre MaterialApp, en la transformant en GetMaterialApp'}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"void main() => runApp(GetMaterialApp(home: Home()));\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Remarque : cela ne modifie pas le MaterialApp du Flutter, GetMaterialApp n'est pas une application mat\xe9rielle modifi\xe9e, il s'agit juste d'un Widget pr\xe9-configur\xe9, qui a le MaterialApp par d\xe9faut en tant qu'enfant. Vous pouvez configurer cela manuellement, mais ce n'est absolument pas n\xe9cessaire. GetMaterialApp va cr\xe9er des routes, les injecter, injecter des traductions, injecter tout ce dont vous avez besoin pour la navigation sur route. Si vous utilisez Get uniquement pour la gestion des \xe9tats ou la gestion des d\xe9pendances, il n'est pas n\xe9cessaire d'utiliser GetMaterialApp. GetMaterialApp est n\xe9cessaire pour les routes, snackbars, internationalisation, bottomSheets, dialogues et apis de haut niveau li\xe9s aux routes et \xe0 l'absence de contexte."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Note2: Cette \xe9tape n'est n\xe9cessaire que si vous allez utiliser la gestion des routes (",(0,s.jsx)(t.code,{children:"Get.to()"}),", ",(0,s.jsx)(t.code,{children:"Get.back()"})," et ainsi de suite). Si vous ne allez pas l'utiliser, alors il n'est pas n\xe9cessaire de faire l'\xe9tape 1"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"\xc9tape 2:\nCr\xe9ez votre classe de logique m\xe9tier et placez toutes les variables, m\xe9thodes et contr\xf4leurs \xe0 l'int\xe9rieur.\nVous pouvez rendre n'importe quelle variable observable en utilisant un simple \".obs\"."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:"class Controller extends GetxController{\n  var count = 0.obs;\n  increment() => count++;\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\xc9tape 3:\nCr\xe9ez votre vue, utilisez StatelessWidget et enregistrez de la RAM, avec Get vous n'aurez peut-\xeatre plus besoin d'utiliser StatefulWidget."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-dart",children:'class Home extends StatelessWidget {\n\n  @override\n  Widget build(context) {\n\n    // Instantiate your class using Get.put() to make it available for all "child" routes there.\n    final Controller c = Get.put(Controller());\n\n    return Scaffold(\n      // Use Obx(()=> to update Text() whenever count is changed.\n      appBar: AppBar(title: Obx(() => Text("Clicks: ${c.count}"))),\n\n      // Replace the 8 lines Navigator.push by a simple Get.to(). You don\'t need context\n      body: Center(child: ElevatedButton(\n              child: Text("Go to Other"), onPressed: () => Get.to(Other()))),\n      floatingActionButton:\n          FloatingActionButton(child: Icon(Icons.add), onPressed: c.increment));\n  }\n}\n\nclass Other extends StatelessWidget {\n  // You can ask Get to find a Controller that is being used by another page and redirect you to it.\n  final Controller c = Get.find();\n\n  @override\n  Widget build(context){\n     // Access the updated count variable\n     return Scaffold(body: Center(child: Text("${c.count}")));\n  }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"R\xe9sultat:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://raw.githubusercontent.com/jonataslaw/getx-community/master/counter-app-gif.gif",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Il s'agit d'un projet simple, mais il montre d\xe9j\xe0 clairement \xe0 quel point Get est puissant. Au fur et \xe0 mesure que votre projet se d\xe9veloppe, cette diff\xe9rence deviendra plus importante."}),"\n",(0,s.jsx)(t.p,{children:"Get a \xe9t\xe9 con\xe7u pour travailler avec des \xe9quipes, mais cela simplifie le travail d'un d\xe9veloppeur individuel."}),"\n",(0,s.jsx)(t.p,{children:"Am\xe9liorez vos d\xe9lais, livrez tout \xe0 temps sans perdre vos performances. Get n'est pas pour tout le monde, mais si vous avez identifi\xe9 avec cette phrase, Get est pour vous!"})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(7294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);