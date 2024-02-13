const express = require('express');
const router  = express.Router();

const skillController = require('../controllers/skill');

router.get('/skills', skillController.getSkills);
router.get('/skills/:id', skillController.getSkillById);
router.post('/skills', skillController.createSkill);
router.put('/skills/:id', skillController.updateSkill);
router.delete('/skills/:id', skillController.deleteSkill);

module.exports = router;