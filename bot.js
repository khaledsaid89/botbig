const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598822293237661697")
setInterval(function() {
channel.send(`khaled xd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);