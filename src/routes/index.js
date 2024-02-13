const express = require('express');
const router  = express.Router();

const serviceRoute = require('./service');
const toolRoutes = require('./tool');
const socialRoutes = require('./social');
const skillRoutes = require('./skill');

router.use('/', serviceRoute);
router.use('/', toolRoutes);
router.use('/', socialRoutes);
router.use('/', skillRoutes);

router.get('/', async (req, res) => {
    res.status(200).json({
      message: 'API Portfolio - Susep Sp'
    });
});

module.exports = router;