const geocode = require('./Util/Geocode')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()
const PORT = 8000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'Template/Views'))

const partialPath = path.join(__dirname, 'Template/Partial')
hbs.registerPartials(partialPath)

const publicPath = path.join(__dirname, 'Public')

app.use(express.static(publicPath))

app.get('/', function (req, res) {
    // res.end('Hello Express')
    // console.log('Welcome....!')
    res.render('Home')
})

app.get('/Wheather', function (req, res) {
    // res.end('Hello Express')
    // console.log('Welcome....!')
    const city = req.query.location;

    geocode(city, (result) => {
        console.log(result.temp, result.city, result.pressure)
        res.json(result)
    })
})

app.listen(PORT, function () {
    console.log('Server is Running on ', PORT)
});