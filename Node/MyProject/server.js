const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/DhruvanDb')
const express = require('express')
const path = require('path')
const hbs = require('hbs');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs')
const cookieParser = require('cookie-parser');
const multer = require('multer')
const Product = require('./Models/Product');
const User = require('./Models/User')

const app = express()
const PORT = 8000


app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'Template/Views'))

const usePartialPath = path.join(__dirname, 'Template/Partials')
hbs.registerPartials(usePartialPath)

publicPath = path.join(__dirname, 'Upload')
console.log(publicPath)
app.use(express.static(publicPath))

var bodyParser = require('body-parser');
const { findByIdAndDelete } = require('./Models/Product');
const bcrypt = require('bcryptjs/dist/bcrypt');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './Upload');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
})
const upload = multer({ storage: storage }).array('image')

app.get('/', async (req, res) => {
    const currentUser = req;

    const products = await Product.find()
    res.render('Home', { Products: products, currentUser })
})
app.get('/about', function (req, res) {
    res.render('About')
})
app.get('/products', async function (req, res) {
    const currentUser = req;
    const products = await Product.find()

    res.render('Products', { Products: products,currentUser })
})
app.get('/addproduct', async function (req, res) {

    const currentUser = req;
    res.render('AddProudct',{currentUser })
})
app.post('/addproduct', async function (req, res) {
    
    upload(req, res, async function (err) {
        const filename = req.files[0].filename
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description

        const data = { name: name, price: price, description: description, image: filename }

        const product = await new Product(data)
        product.save()
        res.redirect('/products')
    })



    // const product = await new Product(req.body)
    //     product.save()
    //     res.redirect('/products')


})
app.get('/deleteproduct/:id', async function (req, res) {
    const id = req.path.split('/')
    const _id = id[2]
    const product = await Product.findByIdAndDelete({ _id: _id })
    res.redirect('/products')

})

app.get('/editproduct', async function (req, res) {
    const _id = req.query.eid
    const product = await Product.findById({ _id: _id })
    res.render('AddProudct', { product: product })


})
app.post('/editproduct', async function (req, res) {
    const _id = req.query.eid

    const product = await Product.findByIdAndUpdate(_id, req.body)
    res.redirect('products')
})
app.get('/contact', function (req, res) {
    res.render('Contact')
})
app.get('/login', function (req, res) {
    res.render('Login')
})
app.post('/login', function (req, res) {
    const { name, email, password } = req.body
    User.findOne({ email }, 'name email password').then((user) => {

        if (!user) {
            res.send('No user Found...')
        }
        bycrypt.compare(password, user.password, (err, isMatch) => {
            if (!isMatch) {
                console.log('Password Not Match,....')
            }
            const token = jwt.sign({ _id: user._id, name: user.name }, 'secretekey', {
                expiresIn: '60 days',
            });

            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
            res.redirect('/')

        })
    }).catch((err) => {

    })

})
app.get('/signup', function (req, res) {
    res.render('Signup')
})
app.post('/signup', async function (req, res) {
    const user = await new User(req.body)
    user.save().then((user) => {
        const token = jwt.sign({ _id: user._id }, 'secretekey', { expiresIn: '60 days' });
        res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
        res.redirect('/login');
    }).catch((err) => {

    })
    //res.redirect('/')
})

app.get('/logout', function (req, res) {
    res.clearCookie('nToken');
    return res.redirect('/login');
})
app.listen(PORT, () => {
    console.log('Server is Running on ', PORT)
})