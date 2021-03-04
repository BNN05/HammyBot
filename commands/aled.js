const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'aled',
    description: 'Shrek save us',
    async execute(message, args) {
        const delay = require('delay');
        message.channel.send("SHREK ARRIVE A LA RESCOUSSE !!!!!");
        const attachment = new MessageAttachment('./shreksophone.gif');
        message.channel.send(attachment);
        const ytdl = require('ytdl-core');
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=_S7WEVLbQ-Y&'), {
          volume: 0.5,
        });

        dispatcher.on('start', () => {
          message.client.user.setActivity('Youtube', { type: 'LISTENING' })})
          dispatcher.on('finish', () => {
            (async () => {await delay(60000);
            dispatcher.destroy();
            message.member.voice.channel.leave();
            })();})
    }
};
        