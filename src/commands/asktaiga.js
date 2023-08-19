const {SlashCommandBuilder} = require('discord.js')
const {AskGPT3} = require('../utilities/aiManager.js')

const asktaiga = new AskGPT3();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('asktaiga')
        .setDescription('Ask a question related to programming to Taiga!')
        .addStringOption(option => 
            option.setName('prompt').setDescription('Your question here').setRequired(true))
        ,
    
    async execute(interaction){
        await interaction.deferReply()
        const userInput = interaction.options.getString('prompt');
        const response = await asktaiga.generateNewAnswer(userInput);
        await interaction.editReply(response);
    }
}

