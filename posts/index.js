const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto')

const app = express()
app.use(express.json())

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title,
  }

  res.status(201).send(posts[id])
})

/// Dynamics ports
const ports = 4000
app.listen(ports, () => {
  console.log('Listening on port: ' + ports)
})
