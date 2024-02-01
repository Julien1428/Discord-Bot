const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Cette commande n\'existe pas.')
            message.channel.send(new Discord.MessageEmbed()
                .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``))
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('Commandes de Ju\' pour')
                .setDescription(`\`Prefix💢: j!\`\n\n \`Modération🔐:\`\n\n \`j!Ban\`,\`j!Kick\`,\`j!Clear\`,\`j!say\`, \`j!poll\`\n\n\n \`Basique/Amusant💬:\`\n\n\`j!Salut\`,\`j!embed\`,\`j!paypal\`,\`j!8ball\` \n\n \`Info😀:\`\n \`j!server-info\`,\`j!user-info\`,\`j!role-info\n\n Help💫: \n j!ticket,j!close\` \n\n\n Pour plus d'informations sur une commande, tapez ${config.prefix}help [nom de la commande]\``)
                .setColor('#00ff21')
                .setThumbnail('https://wprock.fr/wp-content/themes/wprock-theme/img/emoji/joypixels/512/1f6e0.png')
                .setFooter('ju\'© 2021.', 'https://i.pinimg.com/originals/ac/ac/83/acac831367da3fb5936a243cae4aa153.jpg'))
        }
    },
    name: 'help',
    help: {
        description: 'Cette commande permet d\'avoir de l\'aide.',
        syntax: '[nom de la commande]'
    }
}