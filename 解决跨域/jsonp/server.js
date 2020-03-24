const express = require('express')
const app = express()

app.get('/', function (req, res) {
    let { a, b, callback } = req.query

    res.end(`${callback}('数据包')`)
})

app.listen(3000)