module.exports = {
    name: 'skip',
    description: 'kick le bot',
    execute(message) {
        message.member.voice.channel.leave();
    }
};