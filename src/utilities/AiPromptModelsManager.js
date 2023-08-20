const { textModels } = require('../models/AiPromptModels/openaiPromptModels.js')
const {openaiApiKey} = require('../config.json')
const {Configuration, OpenAIApi} = require('openai')

const openaiConfig = new Configuration({openaiApiKey: openaiApiKey})

class AskGPT3 extends OpenAIApi{
    constructor(){
        super(openaiConfig);
        this.name = 'gpt3';
        this.body = textModels[this.name].body;
        this.defaultPrompt = this.body.prompt;
    }

    async generateNewAnswer(prompt) {
        const question = `${this.body.stop[0]} ${prompt}\n${this.body.stop[1]} `
        this.body.prompt = this.defaultPrompt + question;

        try {
            const response = await super.createCompletion(this.body);
            const answer = response.data.choices[0].text.trim();
            if (!answer || answer.length > maxMessageLength) {
                throw new Error;
            }
                
            return answer;
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

class AskGPT4 extends OpenAIApi{
    constructor(){
        super(openaiConfig);
        this.name = 'gpt4';
        this.body = textModels[this.name].body;
        this.defaultPrompt = this.body.prompt;
    }

    async generateNewAnswer(prompt) {
        const question = `${this.body.stop[0]} ${prompt}\n${this.body.stop[1]} `
        this.body.prompt = this.defaultPrompt + question;

        try {
            const response = await super.createCompletion(this.body);
            const answer = response.data.choices[0].text.trim();
            if (!answer || answer.length > maxMessageLength) {
                throw new Error;
            }
                
            return answer;
        } catch (error) {
            console.log(error);
            return error
        }
    }
}

class AiPromptModelsManager {
    constructor() {
        this.models = {
            'model_gpt3': new AskGPT3(),
            'model_gpt4': new AskGPT4()
        };
    }

    getAvailableModels() {
        return Object.entries(this.models).map(([key, modelInstance]) => ({
            name: modelInstance.name,
            value: key
        }));
    }

    async ask(modelKey, prompt){
        
        try {
            if(this.models[modelKey]){
                return await this.models[modelKey].generateNewAnswer(prompt);
            } else {
                throw new Error('There is no such a model')
            }            
        } catch (error) {
            console.log(error);
            return error
        }
    }
}



module.exports = { AiPromptModelsManager }


