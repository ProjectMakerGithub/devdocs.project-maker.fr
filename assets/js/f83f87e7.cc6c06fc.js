"use strict";(self.webpackChunkdocs_project_maker_fr=self.webpackChunkdocs_project_maker_fr||[]).push([[5477],{9937:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=i(4848),r=i(8453);const t={sidebar_position:1,title:"Premier pas",description:"Bien d\xe9buter avec son bot Discord"},o="Pr\xe9requis",l={id:"guide/website/intro",title:"Premier pas",description:"Bien d\xe9buter avec son bot Discord",source:"@site/docs/guide/website/intro.md",sourceDirName:"guide/website",slug:"/guide/website/intro",permalink:"/docs/guide/website/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Premier pas",description:"Bien d\xe9buter avec son bot Discord"},sidebar:"guideSidebar",previous:{title:"Introduction",permalink:"/docs/guide/intro"},next:{title:"Cr\xe9e son site",permalink:"/docs/guide/website/create_website"}},a={},d=[{value:"\xc9diteur de Code",id:"\xe9diteur-de-code",level:2},{value:"Choix du Langage de Programmation",id:"choix-du-langage-de-programmation",level:2},{value:"Installation des Langages",id:"installation-des-langages",level:3},{value:"HTML/CSS",id:"htmlcss",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Utilisation de PHP et Installation de Composer",id:"utilisation-de-php-et-installation-de-composer",level:4},{value:"\xc9tape 1 : Installer XAMPP",id:"\xe9tape-1--installer-xampp",level:5},{value:"\xc9tape 2 : Installer Composer",id:"\xe9tape-2--installer-composer",level:5},{value:"\xc9tape 3 : V\xe9rification",id:"\xe9tape-3--v\xe9rification",level:5},{value:"Node.js",id:"nodejs",level:4},{value:"Autres Langages",id:"autres-langages",level:3}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"pr\xe9requis",children:"Pr\xe9requis"}),"\n",(0,n.jsx)(s.p,{children:"Avant de commencer \xe0 d\xe9velopper un site web, vous aurez besoin de quelques \xe9l\xe9ments pr\xe9alables :"}),"\n",(0,n.jsx)(s.h2,{id:"\xe9diteur-de-code",children:"\xc9diteur de Code"}),"\n",(0,n.jsxs)(s.p,{children:["Un \xe9diteur de code est un logiciel qui vous permet de cr\xe9er et de modifier votre site web. Dans ce guide, nous allons utiliser ",(0,n.jsx)(s.strong,{children:"Visual Studio Code"})," (VSCode) :"]}),"\n",(0,n.jsx)(s.h2,{id:"choix-du-langage-de-programmation",children:"Choix du Langage de Programmation"}),"\n",(0,n.jsx)(s.p,{children:"Le choix du langage de programmation est crucial pour le d\xe9veloppement de votre site web. Voici quelques options populaires :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"HTML/CSS"})," : Utilis\xe9 pour la structure et le style. Faciles \xe0 apprendre. (Fonctionne sur tous les navigateurs)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"JavaScript"})," : Utilis\xe9 pour cr\xe9er des interactions dynamiques. Dispose d'un vaste \xe9cosyst\xe8me. (Fonctionne sur tous les navigateurs)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"PHP"})," : Utilis\xe9 pour la gestion des bases de donn\xe9es. Populaire pour le d\xe9veloppement web. (Requiert un serveur Apache ou Nginx, nous en parlerons plus tard)"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Lors du choix d'un langage, consid\xe9rez les besoins de votre projet, les comp\xe9tences de votre \xe9quipe, ainsi que la s\xe9curit\xe9 et les performances."}),"\n",(0,n.jsx)(s.h3,{id:"installation-des-langages",children:"Installation des Langages"}),"\n",(0,n.jsx)(s.h4,{id:"htmlcss",children:"HTML/CSS"}),"\n",(0,n.jsx)(s.p,{children:"Aucune installation requise pour HTML."}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez utiliser des biblioth\xe8ques pour vous faciliter la t\xe2che."}),"\n",(0,n.jsx)(s.h4,{id:"javascript",children:"JavaScript"}),"\n",(0,n.jsx)(s.p,{children:"L'installation d\xe9pend des plugins que vous pr\xe9voyez d'utiliser."}),"\n",(0,n.jsx)(s.h4,{id:"utilisation-de-php-et-installation-de-composer",children:"Utilisation de PHP et Installation de Composer"}),"\n",(0,n.jsx)(s.p,{children:"Lorsque vous travaillez avec PHP, vous devrez installer un environnement de d\xe9veloppement qui vous permet de cr\xe9er et de tester des applications PHP. Nous allons utiliser XAMPP, un ensemble d'outils qui inclut Apache (serveur web), MySQL (base de donn\xe9es) et PHP. De plus, pour g\xe9rer les d\xe9pendances de votre projet PHP, nous allons installer Composer."}),"\n",(0,n.jsx)(s.h5,{id:"\xe9tape-1--installer-xampp",children:"\xc9tape 1 : Installer XAMPP"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Rendez-vous sur le site officiel de XAMPP : ",(0,n.jsx)(s.a,{href:"https://www.apachefriends.org/fr/index.html",children:"T\xe9l\xe9charger XAMPP"})]}),"\n",(0,n.jsx)(s.li,{children:"Choisissez la version appropri\xe9e pour votre syst\xe8me d'exploitation (Windows, macOS, Linux) et t\xe9l\xe9chargez le fichier d'installation."}),"\n",(0,n.jsx)(s.li,{children:"Suivez les instructions d'installation pour configurer XAMPP sur votre ordinateur. Assurez-vous de d\xe9marrer les modules Apache et MySQL via le panneau de contr\xf4le XAMPP."}),"\n"]}),"\n",(0,n.jsx)(s.h5,{id:"\xe9tape-2--installer-composer",children:"\xc9tape 2 : Installer Composer"}),"\n",(0,n.jsx)(s.p,{children:"Composer est un gestionnaire de d\xe9pendances pour les projets PHP. Il vous permet d'ajouter et de g\xe9rer des biblioth\xe8ques externes n\xe9cessaires \xe0 votre application."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Rendez-vous sur le site officiel de Composer : ",(0,n.jsx)(s.a,{href:"https://getcomposer.org/download/",children:"T\xe9l\xe9charger Composer"})]}),"\n",(0,n.jsx)(s.li,{children:"Suivez les instructions pour t\xe9l\xe9charger l'ex\xe9cutable Composer."}),"\n",(0,n.jsx)(s.li,{children:"Installez Composer en suivant les \xe9tapes appropri\xe9es pour votre syst\xe8me d'exploitation."}),"\n"]}),"\n",(0,n.jsx)(s.h5,{id:"\xe9tape-3--v\xe9rification",children:"\xc9tape 3 : V\xe9rification"}),"\n",(0,n.jsx)(s.p,{children:"Pour v\xe9rifier que XAMPP et Composer sont correctement install\xe9s, suivez ces \xe9tapes :"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Ouvrez un terminal (ou invite de commandes) et ex\xe9cutez la commande suivante pour v\xe9rifier que PHP est install\xe9 :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"php -v\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Ex\xe9cutez la commande suivante pour v\xe9rifier que Composer est install\xe9 :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"composer --version\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Si les commandes ci-dessus renvoient des informations sur les versions de PHP et Composer, cela signifie que les installations se sont bien d\xe9roul\xe9es."}),"\n",(0,n.jsx)(s.p,{children:"Vous \xeates maintenant pr\xeat \xe0 commencer \xe0 d\xe9velopper des applications PHP en utilisant XAMPP et Composer. L'utilisation de ces outils vous permettra de cr\xe9er et de tester des projets PHP localement avant de les d\xe9ployer sur un serveur en ligne."}),"\n",(0,n.jsx)(s.h4,{id:"nodejs",children:"Node.js"}),"\n",(0,n.jsx)(s.p,{children:"Node.js est un outil utilis\xe9 pour ajouter des fonctionnalit\xe9s \xe0 votre site web."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["T\xe9l\xe9chargez Node.js depuis le site officiel : ",(0,n.jsx)(s.a,{href:"https://nodejs.org/fr/download",children:"T\xe9l\xe9charger Node.js"})]}),"\n",(0,n.jsx)(s.li,{children:"Installez la version LTS (version \xe0 support \xe0 long terme)."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"autres-langages",children:"Autres Langages"}),"\n",(0,n.jsx)(s.p,{children:"Lors de la s\xe9lection d'un langage pour votre site web, il existe d'autres options \xe0 consid\xe9rer en fonction de vos besoins et de votre \xe9quipe de d\xe9veloppement :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Python"})," : Langage simple et lisible, id\xe9al pour les prototypes. Peut \xeatre moins rapide que d'autres langages."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Ruby"})," : Poss\xe8de une syntaxe \xe9l\xe9gante, bien adapt\xe9e aux startups. Cependant, il peut \xeatre moins performant \xe0 grande \xe9chelle."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Java"})," : Langage robuste, parfait pour les applications complexes. Sa syntaxe peut \xeatre verbeuse, ce qui peut ralentir le d\xe9veloppement."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"C#"})," : Int\xe8gration fluide avec les produits Microsoft, utilis\xe9 pour les applications web Windows. Moins r\xe9pandu en dehors de cet \xe9cosyst\xe8me."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Go"})," : Offre des performances \xe9lev\xe9es, recommand\xe9 pour les services web. Cependant, il dispose de moins de biblioth\xe8ques par rapport \xe0 d'autres langages."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Swift/Kotlin"})," : Principalement utilis\xe9s pour les applications mobiles. \xc0 noter que cela limite votre audience aux utilisateurs d'iOS/Android."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Lorsque vous choisissez un langage, il est primordial de tenir compte des exigences sp\xe9cifiques de votre projet, des comp\xe9tences de votre \xe9quipe, ainsi que des consid\xe9rations relatives \xe0 la s\xe9curit\xe9 et aux performances."})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>l});var n=i(6540);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);