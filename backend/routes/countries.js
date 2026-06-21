const express = require('express')
const countries = require('../data/countries.json')

const router = express.Router()

router.get('/', (req, res) => {
  res.json(countries)
})

router.get('/name/:name', (req, res) => {
  const country = countries.find(
    (country) =>
      country.name.common.toLowerCase() === req.params.name.toLowerCase()
  )

  res.json([country])
})

router.get('/code/:code', (req, res) => {
  const country = countries.find(
    (country) => country.cca3.toLowerCase() === req.params.code.toLowerCase()
  )

 res.json([country])
})

module.exports = router
