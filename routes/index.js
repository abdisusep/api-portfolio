const express = require('express');
const router  = express.Router();

const serviceRoutes = require('./service.route');
const toolRoutes = require('./tool.route');
const socialRoutes = require('./social.route');
const skillRoutes = require('./skill.route');

router.use('/', serviceRoutes);
router.use('/', toolRoutes);
router.use('/', socialRoutes);
router.use('/', skillRoutes);

module.exports = router;