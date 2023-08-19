const {mongoose} = require('mongoose')
const {mongoUri} = require('../config.json')


mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    