/*
+------------------+
+----To-Do List----+
+------------------+
+1. Add/Remove Role+
+------------------+
*/




/*
+---------------------------+
+----Variables/Constants----+
+---------------------------+
*/

//const botconfig = require("./botconfig.json");//gives link to the prefix of the bot

const Discord = require("discord.js");//access Discord.js

const bot = new Discord.Client({disableEveryone: true});//Defines Bot

function get_random_color() {
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}



/*
+----------------------------+
+------Bot On Functions------+
+----------------------------+
*/

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on Nitrotainment!`)
    bot.user.setActivity("Nitro Type | nitro/help", {type: "PLAYING"});
});

/*
+----------------------------+
+--------Bot Commands--------+
+----------------------------+
*/

bot.on("message", async message => {
    let prefix = "nitro/";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("You just DMed me! You must go back, and try this in the server. Don't be such a bad BOIIIIIIII. XD just kidding, but nothing will work here.");
    
    
    /*if(cmd === `${prefix}change-prefix`) {
        let prefix = args[0]
        bot.user.setActivity(`Nitro Type | ${prefix}help`)
    }*/
    if(cmd === `${prefix}ping`) {       
        let m = await message.channel.send("_ _");
        let pingEmbed = new Discord.RichEmbed()
        .setDescription(":ping_pong: PIIIING! POOOONG!")
        .setColor(get_random_color())
        .addField("Latency:", `${m.createdTimestamp - message.createdTimestamp}ms`)
        .addField("This may not be accurate, as larger commands will take longer to process and respond.", ":shrug:")
        return message.channel.send(pingEmbed)
        
    }
    
    if(cmd === `spam`) {
        while(Number(args[0]) < 20) {
            return message.channel.send("test")
            Number(args[0]) = Number(args[0]) + 1
        }
    }
    
    if(cmd === `${prefix}help`) {
        let helpEmbed = new Discord.RichEmbed()
        .setDescription("Help Command")
        .setColor("#ffffff")
        .addField(`${prefix}ping`, "Check the Latency of the Bot!")
        //do a footer command
        
        message.channel.send(helpEmbed)
    }
  /*  if(cmd === `${prefix}announce`) {
        let announcementsChannel = message.guild.channels.find(`name`, "annoucements")
        
        message.channel.send("Hey guys, It's Sapphire here with a big announcement, I've made a bot for this server! I'm currently working on 3 bots right now -- :O -- but I'm glad to be working on another one. This one will server as the replacement of xmoreno's old bots, which he has said he will not work on anymore. Try the new `nitro/ping` command when I'm online now! @Ping ")
    }*/
    
});

bot.login("NDc4NzcyMTIyNzI2OTU3MDU2.DlPj0g.9dOEZr-bT9FF0V5NqX09no7cOwg")
