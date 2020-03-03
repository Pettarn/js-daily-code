const http = require('http')

http.createServer((req, res) => {
    req.on('getName?callback=requestJsonp', () => {
        
    }) 
})

server.listen(3000)