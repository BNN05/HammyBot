module.exports = {
    name: 'message',
    description: 'Send message dans un chann',
    execute(message, args) {
        if(message.author.id!=="208207211191730176" && message.author.id!=="300581520224026625"){
            message.reply("Tu n'as pas accès a la commande !")
            return
    }
        if(!args[0] || !args[1]){
            message.reply("```\nUtilisation : ?message <identifiant_channel> <message>```"); return
        }
        client.channels.cache.get(args[0]).send(args.slice(1).join(" "))
        message.react('✔')
    }
};