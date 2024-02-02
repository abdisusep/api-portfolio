require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const mainRoutes = require('./routes');

app.use('/api', mainRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ 
    name: process.env.BASE_URL,
    node_version: process.version
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
