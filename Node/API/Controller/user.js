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

module.exports.Login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const verifyEmail = await User.find({ email: email })
    if (verifyEmail) {

        if (verifyEmail[0].password == password) {
            const token = jwt.sign(req.body, 'web', { expiresIn: '24h' })
            res.send({ user: verifyEmail, token: token })
        }
    }


}



module.exports.singleUser = async (req, res) => {

    const id = req.params.id;
    const user = await User.findById({ _id: id })
    res.send(user)
}


module.exports.deleteUser = async (req, res) => {

    const id = req.params.id;

    const user = await User.findByIdAndDelete({ _id: id })

    res.send("delted success....")
}
module.exports.updateUser = async (req, res) => {

    const id = req.params.id;
    const user = await User.findByIdAndUpdate({ _id: id }, req.body)
    res.send("updated success....")
}