const fs = require('fs')
// fs.mkdir('Tops',function(){
//     console.log('Directorey is Created....')
// })

// fs.writeFile('Tops/krupali.txt','Hello Krupali',function(){
//     console.log('Data Successfully inserted....')
// })

// fs.appendFile('Tops/krupali.txt','I am NodeJs Student',function(){
//     console.log('Data Successfully inserted....')
// })

// fs.readFile('Tops/krupali.txt','UTF-8',function(err,data){
//     console.log(data)
// })

// fs.readFile('Tops/krupali.txt',function(err,data){
//     console.log(data.toString())
// })

// fs.rename('Tops/krupali.txt','Tops/drumin.txt',function(err,data){
//     console.log('File Renamed..')
// })

// fs.truncate('Tops/drumin.txt',function(err,data){
//     console.log('File Truncate successfullly,....')
// })

// fs.unlink('Tops/drumin.txt',function(){
//     console.log('Unlink successfullly,....')
// })

fs.rmdir('Tops',function(){
    console.log('Remove Directory successfullly,....')
})


