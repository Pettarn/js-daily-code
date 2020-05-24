const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
    const query = url.parse(req.url).query
    const data = {}
    res.end(`${query[callback]}(${data})`)
})

server.listen(80)