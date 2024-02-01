module.exports = {
    run: message => message.channel.send(`salut ${message.member}🙃`),
    name: 'salut',
    help:{
        description: "je te passe le bonjour"
    }
}