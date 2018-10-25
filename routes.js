const express = require('express')
const router = express.Router()
const server = express()

const data = require('./data')

const fs = require('fs')

module.exports = router

server.get('/', (req, res) => {
  res.render('home', data)
})

server.get('/ask', (req, res) => {
  console.log('Hitting /ask')
  res.render('./ask', data)
})
