module.exports = {
    name: 'server',
    aliases: ['serveur'],
    description: 'Affich infos server',
    execute(message) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\nNombre d'utilisateurs : ${message.guild.memberCount}`);
    }
};