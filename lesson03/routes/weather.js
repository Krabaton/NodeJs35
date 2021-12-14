const express = require('express')
const router = express.Router()
require('dotenv').config()

router.get('/', async (req, res) => {
  const { got } = await import('got')
  const appid = process.env.API_KEY_WEATHER
  console.log(req.query)
  const { lat, lon } = req.query

  const response = await got(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      searchParams: {
        lat,
        lon,
        appid,
      },
    },
  ).json()

  res.json(response)
})

module.exports = router
