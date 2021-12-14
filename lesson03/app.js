const express = require('express')
const morgan = require('morgan')
const app = express()

// app.use((req, res, next) => {
//   const start = performance.now()
//   next()
//   console.log(performance.now() - start)
// })

app.use(morgan('short'))

// Routing

app.use('/', require('./routes/main'))
app.use('/user', require('./routes/users'))
app.use('/weather', require('./routes/weather'))

app.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' })
})

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
