const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'convocation',
    description: 'Spam dm de convocation',



    execute(message, args) {
        var nbrconvo = 25
        if (args.length===2){
            var nbrconvo =parseInt(args[1],10)
        }
        var argsM = args[0]
        console.log(message.author.id)
        if (args[0] !== '<@!300581520224026625>' && message.author.id==='<@!300581520224026625>') {
            console.log(`${argsM}`)
            mentiondm = message.mentions.users.first();
            mentionMessage = message.content.slice(3);
            for (let pas = 0; pas < nbrconvo; pas++) {
                if(message.author.id==='<@!300581520224026625>'){
                    mentiondm.send(`LE DIEU BN TE CONVOQUE SUR ${message.guild.name}`);
                }else{
                    mentiondm.send(`${message.author} te convoque sur ${message.guild.name}`)
                }
            }
            // message.author.send("Your message here.")
            message.channel.send(`${argsM} A bien été convoqué ...`);
            //const user = message.author(user =>{
            //    console.log(`${user.username} issued command viensdm`);  
            //});
        } else {
            if(args[0] === '<@!300581520224026625>'){
                message.reply(`Tu n'as pas la puissance pour invoquer notre dieu !`)
            }else{
                message.reply("Tu n'es pas authorisé a utiliser cet commande !")
            }
        }
    }
};