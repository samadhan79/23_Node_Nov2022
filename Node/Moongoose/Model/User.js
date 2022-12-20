const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    }
})
module.exports = mongoose.model('User', UserSchema)