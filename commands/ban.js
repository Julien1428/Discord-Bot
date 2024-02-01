const Discord = require ('discord.js')
    config = require ('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('tu n as pas la permission pour Bannir des personnes.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('veuillez mentionner le membre à bannir.')
        if (member.id === message.guild.ownerID) return message.channel.send('tu ne peux pas bannir le propriétaire de ce serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest)<1 && message.author.id !== message.guild.ownerID) return message.channel.send('tu ne peux pas bannir ce membre')
        if (!member.bannable) return message.channel.send ('le bot ne peut pas expulser ce membre.')
        const reason = args.slice(1).join(' ') || 'aucune raison fournie.'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été Banni!`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[BAN] ${member.user.tag}`, member.user.displayAvatarURL())
        .addField('Utilisateur', member, true)
        .setColor('#0ff21')
        .addField('Modérateur', message.author, true)
        .addField('Raison', reason, true)
        .addField('Durée', '∞', true))

    },
    name: 'ban',
    guildOnly: true,
    help: {
        description: "bannir une personne"
    }
}     