const express = require('express');
const router  = express.Router();

const controller = require('../controllers/skill.controller');

router.get('/skills', controller.getSkills);

module.exports = router;