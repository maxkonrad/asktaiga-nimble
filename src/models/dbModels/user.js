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
    isAdmin: {
        type: Boolean,
        default: false
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = User;