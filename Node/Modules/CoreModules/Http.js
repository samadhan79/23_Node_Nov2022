const http = require('http');
const server = http.createServer((req, res) => {
    // console.log('Hello...')
    // res.end('Hello')
    if (req.url == '/login') {
        res.end('<h1>Login</h1>')
    } else if (req.url == '/signup') {
        res.end('<h1>Signup</h1>')
    } else {
        res.end('<h1>Home</h1>')
    }

});
server.listen(8000, function () {
    console.log('Server is Runing on ', 8000)
})