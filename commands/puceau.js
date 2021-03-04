const { MessageAttachment } = require('discord.js');
googleTTS = require('google-tts-api')
module.exports = {
    name: 'puceau',
    description: 'puceau moi ahahahahahahahahahhahah',
    async execute(message, args) {
        
        const ytdl = require('ytdl-core');
        const delay = require('delay');
        if (message.member.voice.channel) {
            
        const ytdl = require('ytdl-core');
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl("https://www.youtube.com/watch?v=-EvkgQAGKQQ"), {
          volume: 0.5,
        });

        dispatcher.on('start', () => {
          message.client.user.setActivity('Youtube', { type: 'LISTENING' })
        })
        dispatcher.on('finish', () => {
          (async () => {await delay(60000);
          
            dispatcher.destroy();
            message.member.voice.channel.leave();})();
      })
    }
}}