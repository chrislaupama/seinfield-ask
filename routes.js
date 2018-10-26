const express = require('express')
const router = express.Router()
const server = express()

const data = require('./data')

const fs = require('fs')

module.exports = router

// MAIN ROOT
router.get('/', (req, res) => {
  res.render('./students/index', data)
})

// STUDENT PROFILE
router.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  let array = Array.from(data.students)
  let student = array.find(function (students) {
    return id === students.id
  })
  res.render('./students/profile', student)
})

// ASK ROUTE
router.get('/ask', (req, res) => {
  res.render('./students/ask', data)
})

// ASK SUBMIT FORM
router.post('/ask', (req, res) => {
  let inputId = Number(req.body.id)
  let inputFeedback = req.body.feedback
  let sender = req.body.sender
  const student = data.students.find(student => student.id === inputId)
  data.students[inputId - 1] = student
  student.feedback = inputFeedback
  student.sender = sender
  fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    // eslint-disable-next-line no-console
    if (err) { console.error(err) }
  })
  res.redirect('/students/' + inputId)
})
