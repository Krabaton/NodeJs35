const express = require('express')
const router = express.Router()

router.put('/', function (req, res) {
  res.send('Got a PUT request at /user')
})

router.delete('/', function (req, res) {
  res.send('Got a DELETE request at /user')
})

module.exports = router
