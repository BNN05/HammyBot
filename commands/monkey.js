const { MessageAttachment } = require('discord.js');
googleTTS = require('google-tts-api')
module.exports = {
    name: 'monkey',
    description: 'oug oug',
    async execute(message, args) {
        if (message.member.voice.channel) {
            if (args.length === 1) {
                nbrougoug = parseInt(args[0], 10)
            } else {
                var nbrougoug = 20
            }
            var ougoug = ""
            var oug1 = "oug"
            var oug2 = "oug oug"
            var oug3 = "monki"
            var oug4 = "monkey"
            var oug5 = "ah ah ah"
            var nbroug = 0
            if (nbrougoug <= 1 || nbrougoug > 200) {
                return message.reply("Tu doit donner un nombre entre 1 et 200");
            } else {
                while (nbroug !== nbrougoug) {
                    var numoug = Math.floor(Math.random() * Math.floor(5)) + 1;

                    if (numoug === 1) {
                        var ougoug = (ougoug.concat(' ', oug1));
                    }
                    if (numoug === 2) {
                        var ougoug = (ougoug.concat(' ', oug2));
                    }
                    if (numoug === 3) {
                        var ougoug = (ougoug.concat(' ', oug3));
                    }
                    if (numoug === 4) {
                        var ougoug = (ougoug.concat(' ', oug4));
                    }
                    if (numoug === 5) {
                        var ougoug = (ougoug.concat(' ', oug5));
                    }
                    var nbroug = nbroug + 1
                }

                const connection = await message.member.voice.channel.join();
                let url = googleTTS.getAudioUrl(`${ougoug}`, {
                    lang: 'fr-FR',
                    slow: false,
                    host: 'https://translate.google.com',
                    timeout: 10000,
                });

                connection.play(url)
            }
        } else {
            message.reply('Rejoignez un salon !');
        }




    }
}