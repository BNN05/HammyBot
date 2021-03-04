module.exports = {
  name: 'play',
  description: 'Joue un son demandé',
  async execute(message, args) {
    const ytdl = require('ytdl-core');
    if (!message.guild) return;
    

    const delay = require('delay');

    function isUrl(s) {
      var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      return regexp.test(s);
    }

    if (message.member.voice.channel) {
      if (isUrl(args)) {
        const ytdl = require('ytdl-core');
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play(ytdl(args[0]), {
          volume: 0.5,
        });

        dispatcher.on('start', () => {
          message.client.user.setActivity('Youtube', { type: 'LISTENING' })
        })
        
        message.reply(`Je lance cet musique : ${args[0]}`);

        dispatcher.on('finish', () => {
          (async () => {await delay(60000);
          
            dispatcher.destroy();
            message.member.voice.channel.leave();})();
      })
      } else {
        const ytdl = require('ytdl-core');
        const yts = require('yt-search')
        
        var nbrarg = args.length
        var i = 0
        var argument = ""
        while (i !== nbrarg){
          var argument = argument + args[i] + " "
          var i = i + 1
        }
        const r = await yts(argument)
        const videos = r.videos.slice(0, 1)
        var url =videos[0].url ;
        const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play(ytdl(url), {
          volume: 0.5,
        });
        
        message.reply(`Je lance cet musique : ${url}`);
        
        dispatcher.on('finish', () => {
          (async () => {await delay(60000);
          
            dispatcher.destroy();
            message.member.voice.channel.leave();
          })();
      })
      }


    } else {
      message.reply('Rejoignez un salon !');
    }
    
    //dispatcher.on('error', () => {
    //  message.reply("Je n'ai pas reussi a lire cet video");
    //  dispatcher.destroy();
    //  message.member.voice.channel.leave();
    //})

    
  }
};