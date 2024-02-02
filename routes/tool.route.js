const express = require('express');
const router  = express.Router();

const toolController = require('../controllers/tool.controller');

router.get('/tools', toolController.getTools);

module.exports = router;