const express = require('express');
const router  = express.Router();

const controller = require('../controllers/tool.controller');

router.get('/tools', controller.getTools);

module.exports = router;