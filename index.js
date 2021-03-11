const fs = require('fs')
const Discord = require('discord.js');
const { prefix, token} = require('./config.json');
const { fileURLToPath } = require('url');
const ytdl = require('ytdl-core');

global.client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready',()=>{
    console.log('Ready!');
});
client.on('guildCreate', guild => {
    guild.systemChannel.send(`Yooooo, je suis le merveilleux bot developpé part BNN !!`)
    client.channels.cache.get("809491264688357377").send(`Hammy Bot a été ajouté sur le serveur : ${guild.name}`)

});

client.on('message',message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();
        if (!client.commands.has(command)) return;
        try {
            client.commands.get(command).execute(message, args) ;
        }catch (error){
            console.error(error);
            message.reply("une erreur c'est produite pendant l'execution de la commande");
        }
})

client.login(token);