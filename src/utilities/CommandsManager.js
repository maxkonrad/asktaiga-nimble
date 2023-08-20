const { REST, Routes, Collection } = require('discord.js');
const { token, clientId, svId } = require('../config.json')

async function DeployCommands() {
    const commands = []
    const rest = new REST({ version: '10' }).setToken(token);
    try {
        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, svId),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { DeployCommands }