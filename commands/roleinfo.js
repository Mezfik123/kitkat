const Discord = require('discord.js');

module.exports = {
    name: "roleinfo",
    desciption: "roleinfo command",

    async run (client, message, args) {
        let therole = message.mentions.roles.first();
        if(!therole) return message.reply(`No Role Mentioned !`)
        
        let theroleembed = new Discord.MessageEmbed()
        .setTitle(`Roleinfo of  __${therole.name}__ ✔️ `)
        .setColor(`RANDOM`)
        .addField(`Name`,`${therole.name}`)
        .addField(`Role Id`,`${therole.id}`)
        .addField(`Color`,`${therole.hexColor}`)
        .addField(`Hoisted`,`${therole.hoist}`)
        .setTimestamp()
        
        message.channel.send(theroleembed);
        
    }
}