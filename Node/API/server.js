const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/DhruvanDb")
const express = require('express')
const app = express()
const PORT = 3000
const User = require('./Models/User')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const UserRoute = require('./Router/users')

const Auth = (req, res, next) => {
    const token = req.headers.token
    if (token == undefined) {
        res.send('Unauthorise Token...')
    }
    if (jwt.verify(token, 'web')) {
        next();
    }
}
app.use(Auth)


app.use('/', UserRoute)

app.listen(PORT, function () {
    console.log('SErver is running on ', PORT)
})
