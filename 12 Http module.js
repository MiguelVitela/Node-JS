const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to my home page")
    }
    if(req.url === '/about') {
        res.end("Here ir our short history")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href = "/">Back home</a>
    `)
})

server.listen(5000)