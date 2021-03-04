module.exports = {
    name: 'pingage',
    description: 'Spam ping de convocation',



    execute(message, args) {

        var argsM = args[0]
        if (args[0] !== '<@!300581520224026625>' && message.author.id==='<@!300581520224026625>') {
            console.log(`${argsM}`)
            mentiondm = message.mentions.users.first();
            mentionMessage = message.content.slice(3);
            for (let pas = 0; pas < 25; pas++) {
                message.channel.send(`${argsM}`);
            }
        } else {
            message.reply(`Tu n'as pas la permission d'utilisé cet commande !`)
        }
    }
};