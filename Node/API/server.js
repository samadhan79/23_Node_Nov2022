const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/DhruvanDb")
const express = require('express')
const app = express()
const PORT = 3000
const User = require('./Models/User')
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const UserRoute = require('./Router/users')
app.use('/', UserRoute)

app.listen(PORT, function () {
    console.log('SErver is running on ', PORT)
})
