module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('tu n as pas la permission pour expulser des personnes.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('veuillez mentionner le membre a expulser.')
        if (member.id === message.guild.ownerID) return message.channel.send('tu ne peux pas expluser le propriétaire de ce serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest)<1 && message.author.id !== message.guild.ownerID) return message.channel.send('tu ne peux pas expulser ce membre')
        if (!member.kickable) return message.channel.send ('le bot ne peut pas expulser ce membre.')
        const reason = args.slice(1).join(' ') || 'aucune raison fournie.'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été expulser!`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
            .setAuthor(`[KICK] ${member.user.tag}`, member.user.displayAvatarURL())
            .addField('Utilisateur', member, true)
            .setColor('#00ff21')
            .addField('Modérateur', message.author, true)
            .addField('Raison', reason, true))

    },
    name: 'kick',
    guildOnly: true,
    help:{
        description: "expulser un membre du serveur"
    }
}