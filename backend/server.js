const express = require('express')
const cors = require('cors')

const countriesRouter = require('./routes/countries')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/countries', countriesRouter)

app.get('/', (req, res) => {
  res.send('Countries API is running')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})