const express = require('express')
const router = express.Router()
const server = express()

const data = require('./data')

const fs = require('fs')

module.exports = router
router.get('/', (req, res) => {
  res.render ('./students/index', data)
})
router.get('/students/:id', (req, res) => {
  const id =parseInt(req.params.id, 10)
  Let array=Array.from(data.students)
  Let student=array.find(function(students) {
    return id ===students.id
  })
  res.render('./students/veiw', student)
})

server.get('/', (req, res) => {
  res.render('home', data)
})

server.get('/ask', (req, res) => {
  res.render('ask', data) 
})

server.get('/ask', (req, res) => {
  res.render('ask', data) 
}

