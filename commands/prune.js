module.exports = {
    name: 'prune',
    description: 'Supprime des messages',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply("Ce n'est pas un nombre valide !");
        }
        else if (amount <= 1 || amount > 100) {
            return message.reply("Tu doit donner un nombre entre 1 et 100");
        }

        message.channel.bulkDelete(amount)
        .then(messages => console.log(`${messages.size - 1} message supprimé !`))
    }
};