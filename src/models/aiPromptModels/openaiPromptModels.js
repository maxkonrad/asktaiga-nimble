const textModels = {
    gpt3: {
        body: {
            model: 'text-davinci-003',
            prompt: 'The following is a question from a USER. As GPT, your goal is to provide the very best and the cleverest answer.\n\n',
            max_tokens: 2000, 
            temperature: 0.5,
            stream: false,
            stop: ['USER:', 'GPT:']
        }
    },
    gpt4: {
        body: {
            model: 'gpt-3.5-turbo',
            prompt: 'The following is a question from a USER. As GPT, your goal is to provide the very best and the cleverest answer.\n\n',
            max_tokens: 2000, 
            temperature: 0.5,
            stream: false,
            stop: ['USER:', 'GPT:']
        }
    },
}

module.exports = {textModels}