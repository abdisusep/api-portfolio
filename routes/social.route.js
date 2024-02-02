const express = require('express');
const router  = express.Router();

const controller = require('../controllers/social.controller');

router.get('/socials', controller.getSocials);

module.exports = router;