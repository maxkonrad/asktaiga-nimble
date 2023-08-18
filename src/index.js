const {Client, IntentsBitField} = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
})

client.on('messageCreate', (msg) => {
    if(msg.content == "hello"){
        msg.reply('hey!')
    }
})


client.login(process.env.token)

