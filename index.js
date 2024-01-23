const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.status(200).json({ 
    name: 'Susep Sp',
    node_version: require('express/package').version
  });
})

app.get('/test', (req, res) => {
   res.status(200).json({ message: 'Test' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
