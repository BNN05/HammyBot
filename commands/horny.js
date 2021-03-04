const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'horny',
    description: 'keanu reeves get horny grrrr',
    execute(message) {
        var numhorny = Math.floor(Math.random() * Math.floor(6)) + 1;
        const attachment = new MessageAttachment(`./horny/horny ${numhorny}.PNG`);
        message.channel.send(attachment);



    }}