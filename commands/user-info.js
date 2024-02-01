const Discord = require('discord.js'),
    moment = require('moment')
const help = require('./help')
 
module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .addField('Membre', member, true)
            .addField('Tag', member.user.tag, true)
            .addField('Date de création du compte', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date d\'arrivée sur le serveur', moment(member.joinedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Date de début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss') : 'Ne boost pas', true)
            .addField('Infractions', client.db.warns[member.id] ? client.db.warns[member.id].length : 'Aucune', true)
            .setColor('00ff21')
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter(`ID : ${member.id}`))
    },
    name: 'user-info',
    guildOnly: true,
    help:{
        description: "les informations sur ton compte discord"
    }
}