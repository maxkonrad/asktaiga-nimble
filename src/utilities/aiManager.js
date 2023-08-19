const {aiModels} = require('../models/aiModels/aiModels.js')
const {openaiApiKey} = require('../config.json')
const {Configuration, OpenAIApi} = require('openai')

const openaiConfig = new Configuration({openaiApiKey: openaiApiKey})

class AskGPT3 extends OpenAIApi{
    constructor(){
        super(openaiConfig);
        this.name = 'gpt3';
        this.body = aiModels[this.name].body;
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
        this.body = aiModels[this.name].body;
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



module.exports = {AskGPT3, AskGPT4}


