const {Client, GatewayIntentBits, REST} = require('discord.js')
const {token, clientId, svId } = require('./config.json')
const { DeployCommands } = require('./utilities/CommandsManager.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
})

client.on('messageCreate', (msg) => {
    if(msg.content == "hello"){
        msg.reply('hey!')
    }
})


DeployCommands()


client.login(token)

