const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Twitch de ju\'')
            .setDescription('[jujuu_2108](https://www.twitch.tv/jujuu_2108) <--mon twitch')
            .setColor('00ff21')
            .addField('Champ 1 **bonjour**', 'Bonjour c\'est moi **bonjour**', true)
            .addField('Champ 2', 'Blabla', true)
            .setAuthor('Ju\' salut :)', 'https://i.pinimg.com/originals/ac/ac/83/acac831367da3fb5936a243cae4aa153.jpg', 'https://www.twitch.tv/jujuu_2108')
            .setImage('https://media0.giphy.com/media/KDbMRuO770llLewpZ4/giphy.gif')
            .setThumbnail('https://cdn.dribbble.com/users/527354/screenshots/5057270/bouncing_twitch.gif')
            .setFooter('ju\'© 2021.', 'https://i.pinimg.com/originals/ac/ac/83/acac831367da3fb5936a243cae4aa153.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed',
    help:{
        desciption: "te ramene d'une façon stylé a mon twitch"
    }
}