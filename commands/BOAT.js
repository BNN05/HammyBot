const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'boat',
    description: 'Ball Of All Time',
    execute(message) {
        message.channel.send(" La meilleur ball du monde est bien evidemment <@300581520224026625> ");
        const attachment = new MessageAttachment('./hammy_gif.gif');
        message.channel.send(attachment);
    }
};