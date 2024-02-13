const express = require('express');
const router  = express.Router();

const socialController = require('../controllers/social');

router.get('/socials', socialController.getSocials);
router.get('/socials/:id', socialController.getSocialById);
router.post('/socials', socialController.createSocial);
router.put('/socials/:id', socialController.updateSocial);
router.delete('/socials/:id', socialController.deleteSocial);

module.exports = router;