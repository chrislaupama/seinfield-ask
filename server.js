var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')
var server = express()
const data = require('./data')

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use('/', routes)

module.exports = server
