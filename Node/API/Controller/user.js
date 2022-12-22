const User = require('../Models/User')
module.exports.getUser = async (req, res) => {
    const user = await User.find()
    res.send(user)
}
module.exports.Register = async (req, res) => {

    const user = await new User(req.body)
    user.save()
    res.send(user)
}
module.exports.singleUser = async (req, res) => {

    const id = req.params.id;
    const user = await User.findById({ _id: id })
    res.send(user)
}