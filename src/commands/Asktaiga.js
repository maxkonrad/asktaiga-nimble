const { SlashCommandBuilder } = require('discord.js')
const { AiPromptModelsManager } = require('../utilities/AiPromptModelsManager.js')

const aiPromptModelManager = new AiPromptModelsManager()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('asktaiga')
        .setDescription('Ask a question related to programming to Taiga!')
        .addStringOption(option =>
            option.setName('prompt').setDescription('Your question here').setRequired(true).choices())
        .addStringOption(option =>
            option.setName('chatModel').setDescription('Which Chat Model do you want to use? (Be careful when using GPT4 so, due to cost issues)')
                .setRequired(true).addChoices(aiPromptModelManager.getAvailableModels()))
    ,

    async execute(interaction) {
        await interaction.deferReply()
        const user = interaction.user
        const userInput = interaction.options.getString('prompt');
        const userAiModel = interaction.options.getString('chatModel')
        aiPromptModelManager.ask(userAiModel, userInput)
        await interaction.editReply(response)
    }
}

