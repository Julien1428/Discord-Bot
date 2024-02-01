const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment', 'je t\' en pose des questions?']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor('#00ff21')
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: '8ball',
    help:{
        description: "apres avoir poser ta question il te repond de façon aléatoire"
    }
}