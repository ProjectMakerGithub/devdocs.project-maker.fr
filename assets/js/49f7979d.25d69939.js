"use strict";(self.webpackChunkdocs_project_maker_fr=self.webpackChunkdocs_project_maker_fr||[]).push([[7180],{7002:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var r=s(4848),i=s(8453);const a={},t=void 0,m={id:"guidew/Bot discord/discord.js/Mod\xe9ration",title:"Mod\xe9ration",description:"Commandes de Mod\xe9ration",source:"@site/docs/guidew/Bot discord/discord.js/Mod\xe9ration.md",sourceDirName:"guidew/Bot discord/discord.js",slug:"/guidew/Bot discord/discord.js/Mod\xe9ration",permalink:"/docs/guidew/Bot discord/discord.js/Mod\xe9ration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},l=[{value:"Commandes de Mod\xe9ration",id:"commandes-de-mod\xe9ration",level:2},{value:"Expulser (Kick)",id:"expulser-kick",level:3},{value:"Bannir (Ban)",id:"bannir-ban",level:3},{value:"Rendre muet et D\xe9sactiver le mode muet",id:"rendre-muet-et-d\xe9sactiver-le-mode-muet",level:3},{value:"Supprimer des messages",id:"supprimer-des-messages",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"commandes-de-mod\xe9ration",children:"Commandes de Mod\xe9ration"}),"\n",(0,r.jsx)(n.p,{children:"Dans cette section, nous couvrirons les commandes de mod\xe9ration qui vous permettent de g\xe9rer les membres et les messages sur votre serveur Discord. Ces commandes sont con\xe7ues pour aider les mod\xe9rateurs \xe0 maintenir un environnement positif et respectueux."}),"\n",(0,r.jsx)(n.h3,{id:"expulser-kick",children:"Expulser (Kick)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"if (command === 'kick') {\n    // V\xe9rifier les permissions de l'utilisateur\n    if (!message.member.permissions.has('KICK_MEMBERS')) {\n        await message.reply(\"Vous n'avez pas la permission d'expulser des membres.\");\n        return;\n    }\n\n    const member = message.mentions.members.first();\n    if (!member) {\n        await message.reply(\"Veuillez mentionner le membre \xe0 expulser.\");\n        return;\n    }\n\n    await member.kick();\n    await message.reply(`${member.user.tag} a \xe9t\xe9 expuls\xe9.`);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explication :"}),' Cette commande permet aux mod\xe9rateurs d\'expulser un membre du serveur. Ils doivent avoir la permission "Expulser des membres" pour utiliser cette commande. En tapant ',(0,r.jsx)(n.code,{children:"!kick @membre"}),", le bot expulsera le membre mentionn\xe9 et enverra un message de confirmation."]}),"\n",(0,r.jsx)(n.h3,{id:"bannir-ban",children:"Bannir (Ban)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"if (command === 'ban') {\n    // V\xe9rifier les permissions de l'utilisateur\n    if (!message.member.permissions.has('BAN_MEMBERS')) {\n        await message.reply(\"Vous n'avez pas la permission de bannir des membres.\");\n        return;\n    }\n\n    const member = message.mentions.members.first();\n    if (!member) {\n        await message.reply(\"Veuillez mentionner le membre \xe0 bannir.\");\n        return;\n    }\n\n    await member.ban();\n    await message.reply(`${member.user.tag} a \xe9t\xe9 banni.`);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explication :"}),' Cette commande permet aux mod\xe9rateurs de bannir un membre du serveur. Ils doivent avoir la permission "Bannir des membres" pour utiliser cette commande. En tapant ',(0,r.jsx)(n.code,{children:"!ban @membre"}),", le bot bannira le membre mentionn\xe9 et enverra un message de confirmation."]}),"\n",(0,r.jsx)(n.h3,{id:"rendre-muet-et-d\xe9sactiver-le-mode-muet",children:"Rendre muet et D\xe9sactiver le mode muet"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'if (command === \'mute\') {\n    // V\xe9rifier les permissions de l\'utilisateur\n    if (!message.member.permissions.has(\'MANAGE_ROLES\')) {\n        await message.reply("Vous n\'avez pas la permission de g\xe9rer les r\xf4les.");\n        return;\n    }\n\n    const member = message.mentions.members.first();\n    if (!member) {\n        await message.reply("Veuillez mentionner le membre \xe0 rendre muet.");\n        return;\n    }\n\n    let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");\n    if (!muteRole) {\n        try {\n            muteRole = await message.guild.roles.create({\n                name: "Muted",\n                color: "#000000",\n                permissions: []\n            });\n            message.guild.channels.cache.forEach(async (channel) => {\n                await channel.createOverwrite(muteRole, {\n                    SEND_MESSAGES: false,\n                    ADD_REACTIONS: false\n                });\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }\n\n    member.roles.add(muteRole);\n    await message.reply(`${member.user.tag} a \xe9t\xe9 rendu muet.`);\n}\n\nif (command === \'unmute\') {\n    // V\xe9rifier les permissions de l\'utilisateur\n    if (!message.member.permissions.has(\'MANAGE_ROLES\')) {\n        await message.reply("Vous n\'avez pas la permission de g\xe9rer les r\xf4les.");\n        return;\n    }\n\n    const member = message.mentions.members.first();\n    if (!member) {\n        await message.reply("Veuillez mentionner le membre \xe0 d\xe9sactiver le mode muet.");\n        return;\n    }\n\n    let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");\n    if (!muteRole) {\n        await message.reply("Le r\xf4le \'Muted\' n\'a pas \xe9t\xe9 trouv\xe9.");\n        return;\n    }\n\n    member.roles.remove(muteRole);\n    await message.reply(`${member.user.tag} n\'est plus en mode muet.`);\n}\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explication :"})," Ces commandes permettent aux mod\xe9rateurs de rendre muet ou de d\xe9sactiver le mode muet pour un membre. Lorsque la commande ",(0,r.jsx)(n.code,{children:"mute"})," est utilis\xe9e, le bot v\xe9rifie d'abord si le r\xf4le \"Muted\" existe. Si le r\xf4le n'existe pas, il le cr\xe9e avec les autorisations appropri\xe9es pour emp\xeacher le membre de parler. Ensuite, le bot attribue ce r\xf4le au membre mentionn\xe9."]}),"\n",(0,r.jsxs)(n.p,{children:["Lorsque la commande ",(0,r.jsx)(n.code,{children:"unmute"})," est utilis\xe9e, le bot v\xe9rifie \xe9galement si le r\xf4le \"Muted\" existe. S'il n'existe pas, le bot informe que le r\xf4le n'a pas \xe9t\xe9 trouv\xe9. Si le r\xf4le existe, le bot retire ce r\xf4le du membre mentionn\xe9 pour lui permettre de parler \xe0 nouveau."]}),"\n",(0,r.jsx)(n.p,{children:"Ces commandes sont utiles pour g\xe9rer les comportements ind\xe9sirables et maintenir la discipline dans le serveur en contr\xf4lant la capacit\xe9 des membres \xe0 communiquer dans les salons."}),"\n",(0,r.jsx)(n.h3,{id:"supprimer-des-messages",children:"Supprimer des messages"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"if (command === 'clear') {\n    // V\xe9rifier les permissions de l'utilisateur\n    if (!message.member.permissions.has('MANAGE_MESSAGES')) {\n        await message.reply(\"Vous n'avez pas la permission de g\xe9rer les messages.\");\n        return;\n    }\n\n    const amount = parseInt(args[0]);\n    if (isNaN(amount) || amount < 1 || amount > 100) {\n        await message.reply(\"Veuillez sp\xe9cifier un nombre de messages \xe0 supprimer entre 1 et 100.\");\n        return;\n    }\n\n    await message.channel.bulkDelete(amount + 1);\n    await message.reply(`${amount} messages ont \xe9t\xe9 supprim\xe9s.`);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Explication :"}),' Cette commande permet aux mod\xe9rateurs de supprimer un certain nombre de messages dans un canal. Ils doivent avoir la permission "G\xe9rer les messages" pour utiliser cette commande. En tapant ',(0,r.jsx)(n.code,{children:"!clear [nombre]"}),", le bot supprimera les messages et enverra un message de confirmation."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Ces commandes de mod\xe9ration sont essentielles pour maintenir un environnement convivial et bien g\xe9r\xe9 sur votre serveur Discord. Elles offrent aux mod\xe9rateurs les outils n\xe9cessaires pour r\xe9agir aux situations appropri\xe9es et pour maintenir un espace positif pour tous les membres."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>m});var r=s(6540);const i={},a=r.createContext(i);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);