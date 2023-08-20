const {mongoose} = require('mongoose')

const UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    hasAccepted: {
        type: Boolean,
        default: false
    },
    apiKey: {
        type: String,
        required: false,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = {User};