const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('API Portfolio')
})

app.get('/test', (req, res) => {
  res.send('Test Route')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
