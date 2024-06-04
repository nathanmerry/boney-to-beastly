require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
app.use(cors());
app.use('/', routes)

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid token');
  }
})

module.exports = app