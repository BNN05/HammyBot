module.exports = {
    name: 'stat',
    description: 'Test command',
    execute(message, args) {
        const Discord = require('discord.js');
        const overwatch = require('overwatch-api');

        if(args.length===0){
            message.reply("Entre un pseudo + son Btag")
            return
        }

        const platform = 'pc'; // pc/xbl/psn/nintendo-switch
        const region = 'eu';
        const tag = args[0].replace('#','-')

        overwatch.getProfile(platform, region, tag, (err, json) => {
            console.log(json.private)
            overwatch.getStats(platform, region, tag, (err, jsonstat) => {
                if (json.private){
                    author.reply('Le joueur est en privé !')
                    return
                }
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#990099')
            .setTitle(`${args[0]}`)
            .setURL(`https://playoverwatch.com/fr-fr/career/pc/${tag}`)
            .setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.displayAvatarURL({format: 'png'})}`, `https://playoverwatch.com/fr-fr/career/pc/${tag}`)
            .setDescription(`lvl ${json.level}🔅`)
            .setThumbnail(`${json.portrait}`)
            .addFields(
                { name: 'Top 3 Héros cette saison', value: `1️⃣${jsonstat.stats.top_heroes.competitive.played[0].hero}  **${jsonstat.stats.top_heroes.competitive.played[0].played}**\n
                2️⃣${jsonstat.stats.top_heroes.competitive.played[1].hero}  **${jsonstat.stats.top_heroes.competitive.played[1].played}**\n
                3️⃣${jsonstat.stats.top_heroes.competitive.played[2].hero}  **${jsonstat.stats.top_heroes.competitive.played[2].played}** `},
                { name: 'Tank', value: `${json.competitive.tank.rank}`, inline: true },
                { name: 'DPS', value: `${json.competitive.damage.rank}`, inline: true },
                { name: 'Heal', value: `${json.competitive.support.rank}`, inline: true },
            )
            .setTimestamp()
            .setFooter('HammyBot©', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2c8HIPq1T0KLMQ2CO7kzBLjqWiOWbzdB0A&usqp=CAU');

        message.channel.send(exampleEmbed);}
        )}
        
        );}
};