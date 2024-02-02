const express = require('express');
const router  = express.Router();

const socialController = require('../controllers/social.controller');

router.get('/socials', socialController.getSocials);

module.exports = router;