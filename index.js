require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const sequelize = require('./config/db.config');

const mainRoutes = require('./routes');

app.use('/api', mainRoutes);

app.get('/', (req, res) => {
  try {
    sequelize.authenticate();
    res.status(200).json({ 
      message: 'Connection has been established successfully.',
      node_version: process.version
    });
  } catch (err) {
    res.status(200).json({ 
      message: err,
      node_version: process.version
    });
  }
  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
