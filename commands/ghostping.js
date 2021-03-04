const delay = require("delay");

module.exports = {
    name: 'ghostping',
    description: 'Ghostping',

    

    async execute(message, args ) {

        var argsM=args[0]
        if(args[0]!=='<@!300581520224026625>'){
        message.channel.send(`${argsM}` );
        await delay(100);
        message.channel.bulkDelete(2)
        messages => console.log(`${message.author} ghostpinged `)
    }else{
        message.reply(`Tu n'as pas la puissance pour ghostping notre dieu`)
    }}

};