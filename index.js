const Discord = require('discord.js'),
     client = new Discord.Client({
         fetchAllMembers: true
     }),
     config = require('./config.json'),
    fs = require('fs')

     client.login(config.token)
     client.commands = new Discord.Collection()
     client.db = require('./db.json')

    fs.readdir('./commands', (err, files) => {
        if (err) throw err
        files.forEach(file =>{
           if (!file.endsWith('.js')) return
           const command = require(`./commands/${file}`)
           client.commands.set(command.name, command)
        })
    })

    client.on('message', message => {
        if (message.type !== 'DEFAULT' || message.author.bot) return

        const args = message.content.trim().split(/ +/g)
        const commandName = args.shift().toLowerCase()
        if (!commandName.startsWith(config.prefix)) return
        const command = client.commands.get(commandName.slice(config.prefix.length))
        if (!command) return
        if (command.guilsOnly && !message.guild) return message.channel.send('cette commande ne peut être utilisée que dans un serveur.')
        command.run(message, args, client)
    })

    client.on('guildMemberAdd', member =>{
        member.guild.channels.cache.get(config.greeting.channel).send(`${member} nous a rejoins grace a toi nous sommes désormais ${member.guild.memberCount} !❤️`)
        member.roles.add(config.greeting.role)
    })

    client.on('ready',() =>{
        client.user.setActivity('Développement', {type: 'PLAYING'})
        setInterval(()=>{
            const [bots, Members] = client.guilds.cache.first().members.cache.partition(member => member.user.bot)
            client.channels.cache.get(config.serverStats.Members).setName(`Members🤙: ${Members.size}`)
            client.channels.cache.get(config.serverStats.bots).setName(`Bots🤖: ${bots.size}`)
            client.channels.cache.get(config.serverStats.allMembers).setName(`AllMembers💯: ${client.guilds.cache.first().memberCount}`)
        }, 3e4)
    })

    client.on('channelCreate', channel => {
        if (!channel.guild) return
        const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
        if (!muteRole) return 
        channel.createOverwrite(muteRole, {
            SEND_MESSAGES: false,
            CONNECT: false,
            ADD_REACTIONS: false
        }) 
    })