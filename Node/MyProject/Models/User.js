const bycrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }

})

User.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        next();
    }
    bycrypt.genSalt(10, (err, salt) => {

        bycrypt.hash(user.password, salt, (_, hash) => {
            user.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('User', User)