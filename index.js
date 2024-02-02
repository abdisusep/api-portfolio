require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const prisma = require('./db/prisma');

const mainRoutes = require('./routes');

app.use('/api', mainRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'API Portfolio - Susep Sp'
  });
});

prisma.$connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to database:', err);
});