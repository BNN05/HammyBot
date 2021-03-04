const { MessageAttachment } = require('discord.js');
module.exports = {
    name: 'dance',
    description: 'danse avec tes heros préféré :P',
    execute(message, args) {
        console.log(args.length)
        console.log(args)
        if (args.length===1){
            numdance=parseInt(args[0],10)
            console.log(args[0])
        }else{
            var numdance = Math.floor(Math.random() * Math.floor(7)) + 1;
            console.log(numdance)
        }
        if (numdance === 1) {
            message.channel.send("Tu a de la chance ! Reaper est un super danseur !");
            const attachment = new MessageAttachment('./dance/dance1.gif');
            message.channel.send(attachment);
        }
        if (numdance === 2) {
            message.channel.send("Bouge tes fesses avec Hammy !");
            const attachment = new MessageAttachment('./dance/dance2.gif');
            message.channel.send(attachment);
        }
        if (numdance === 3) {
            message.channel.send("Le gars sur Torb t'apprend a danser , Danse avec lui ! !");
            const attachment = new MessageAttachment('./dance/dance3.gif');
            message.channel.send(attachment);
        }
        if (numdance === 4) {
            message.channel.send("Une danse fortnite ? Pourquoi pas !!");
            const attachment = new MessageAttachment('./dance/dance4.gif');
            message.channel.send(attachment);
        }
        if (numdance === 5) {
            message.channel.send("Le gros porc a une reputation a tenir !");
            const attachment = new MessageAttachment('./dance/dance5.gif');
            message.channel.send(attachment);
        }
        if (numdance === 6) {
            message.channel.send("Shuffle time !!");
            const attachment = new MessageAttachment('./dance/dance6.gif');
            message.channel.send(attachment);
        }
        if (numdance === 7) {
            message.channel.send("Elle est bonne mais dance plutot mal ...");
            const attachment = new MessageAttachment('./dance/dance7.gif');
            message.channel.send(attachment);
        }



        
    }
};