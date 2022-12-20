const MongoClient = require('mongodb').MongoClient
//  Created Db
//  MongoClient.connect("mongodb:127.0.0.1:27017/DhruvanDb", function (err, client) {
//      console.log('DataBase Created Succefully...!!')
//  })


// Create Collection

//  MongoClient.connect("mongodb:127.0.0.1:27017/",function(err,client){
//      const user = client.db('DhruvanDb')
//      user.createCollection('users',function(err,data){
//          console.log('Collection Created Successfully..!!')
//      })

//  })

// INsert Single Recordd....
//  MongoClient.connect("mongodb:127.0.0.1:27017/",function(err,client){
//      const user = client.db('DhruvanDb')
//      const mydata = {'name':'raj','email':'raj@gmail.com','address':'baroda'}
//      user.collection('users').insertOne(mydata,function(err,data){
//          console.log('Inserted Successfully...!!')
//      })


//  })


//  Insert Many
//  MongoClient.connect("mongodb:127.0.0.1:27017/", function (err, client) {
//      const user = client.db('DhruvanDb')
//      const mydata = [
//          { 'name': 'sam', 'email': 'sam@gmail.com', 'address': 'pune' },
//          { 'name': 'jay', 'email': 'jay@gmail.com', 'address': 'baroda' }
//      ]
//      user.collection('users').insertMany(mydata, function (err, data) {
//          console.log('Inserted Successfully...!!')
//      })

//  })

// Select All
 MongoClient.connect("mongodb:127.0.0.1:27017/", function (err, client) {
     const user = client.db('DhruvanDb')
     user.collection('users').find({}).toArray(function(err,data){
         console.log(data)
     })
 })


//  Find One
//  MongoClient.connect("mongodb:127.0.0.1:27017/", function (err, client) {
//      const user = client.db('DhruvanDb')
//      user.collection('users').find({name:'jay'}).toArray(function(err,data){
//          console.log(data)
//      })
//  })

//  Delete One
//  MongoClient.connect("mongodb:127.0.0.1:27017/", function (err, client) {
//      const user = client.db('DhruvanDb')
//      user.collection('users').deleteOne({ name: 'jay' }, function (err, data) {
//          console.log("sucessfuly deleted....")
//      })
//  })

// Update
// MongoClient.connect("mongodb:127.0.0.1:27017/", function (err, client) {
//     const user = client.db('DhruvanDb')

//     const searchname = {name:'kushal'}
//     const newname = {$set:  {name: "Kaushal1-"} }

//     user.collection('users').updateOne(searchname, newname, function (err, data) {
//         console.log("sucessfuly updated....")
//     })
// })


// MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
//     const user = client.db('DhruvanDb')
//     var products = [{ name: "lg" }, { name: "nokia" }]
//     user.collection('products').insertMany(products, function (err, data) {
//         console.log('Data inserted successfully ...')

//     })
// })


// MongoClient.connect('mongodb://127.0.0.1:27017',function(err,db){
//   const user = db.db('DhruvanDb')
//   var orders = [ { status: "pending",product_id:2 }, { status: "complet",product_id:1 }]
//   user.collection('orders').insertMany(orders,function(err,data){
//     console.log('Data inserted successfully ...')

//   })  
// })


// MongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {
//     const user = db.db('DhruvanDb')
//     user.collection('orders').aggregate([
//         {
//             $lookup: {
//                 from: 'products',
//                 localField: 'id',
//                 foreignField: 'product_id',
//                 as: 'orderdetails'


//             }
//         }
//     ]).toArray(function (err, data) {
//         console.log(JSON.stringify(data))
//     })


// })
