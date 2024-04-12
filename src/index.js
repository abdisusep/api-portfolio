require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4000;
const db = require('./utils/db');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'API Portfolio - Susep Sp'
  });
});

db.$connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch((err) => {
  console.error('Error connecting to database:', err);
});