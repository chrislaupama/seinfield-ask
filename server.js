var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')
var server = express()

module.exports = server

// Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/', routes)

server.get('/', (req, res) => {
    res.send('display me for now...')
    console.log("hitting / route")
})
