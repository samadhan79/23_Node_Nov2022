const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/DhruvanDb')
const express = require('express')
const path = require('path')
const hbs = require('hbs');
const Product = require('./Models/Product');

const app = express()
const PORT = 8000


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'Template/Views'))

const usePartialPath = path.join(__dirname, 'Template/Partials')
hbs.registerPartials(usePartialPath)
var bodyParser = require('body-parser');
const { findByIdAndDelete } = require('./Models/Product');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', async (req, res) => {

    res.render('Home')
})
app.get('/about', function (req, res) {
    res.render('About')
})
app.get('/products', async function (req, res) {
    const products = await Product.find()

    res.render('Products', { Products: products })
})
app.get('/addproduct', async function (req, res) {


    res.render('AddProudct')
})
app.post('/addproduct', async function (req, res) {
    console.log(req.body)
    const product = await new Product(req.body)
    product.save()
    res.redirect('/products')
})
app.get('/deleteproduct/:id', async function (req, res) {
        const id = req.path.split('/')
        const _id = id[2]
        const product = await  Product.findByIdAndDelete({_id:_id})
        res.redirect('/products')
        
})
app.get('/contact', function (req, res) {
    res.render('Contact')
})
app.listen(PORT, () => {
    console.log('Server is Running on ', PORT)
})