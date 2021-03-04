module.exports = {
    name: 'secret',
    description: 'Passage secret :)',
    execute(message) {
        var chand = message.member.voice.channel;
        console.log(message.member.voice)
        var user = message.author;
        if (chand.id==="777201997896089631"){
            message.guild.member(user).voice.setChannel("777203733598699561");
            message.channel.bulkDelete(1);
        }else{
            message.channel.send("Je ne vois pas de quoi tu parle ...");
        }
    }
};