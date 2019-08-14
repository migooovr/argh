const Discord = require('discord.js')
const client = new Discord.Client 



client.on('ready', () => {
  client.user.setGame('Horario - Serveur Minecraft' , 'https://twitch.tv/twitch%22')
});


  client.on('message', message => {
    if (message.content === 'k.ping') {
    message.channel.sendMessage('Sérieusement ? Non, tu ne seras rien euhhh :3 ');
  }
});
    

client.on('messsage', async message => { 
if(message.content.startsWith("k.mpall")) {
 
  var args = message.content.split(" ").slice(1);
  var msge = args.join(' ');

  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
  if(!msge) return message.channel.send("Precise un message")

  var mpall = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setColor("RANDOM")
  .addField("Annonce a lire", msge);
  message.delete()
  message.guild.members.map(m => m.send(mpall))
}

});



client.login("NjEwMTM0OTk2ODcwNjI3MzMy.XVA2mA.Te3MxmeUHGeJT6lx5WiSXidfaBk")
