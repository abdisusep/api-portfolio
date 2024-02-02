const express = require('express');
const router  = express.Router();

const serviceRoutes = require('./service.route');
const toolRoutes = require('./tool.route');

router.use('/', serviceRoutes);
router.use('/', toolRoutes);

module.exports = router;