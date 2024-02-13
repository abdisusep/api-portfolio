const express = require('express');
const router  = express.Router();

const projectSkillController = require('../controllers/project_skill');

router.get('/project_skills', projectSkillController.getProjectSkills);
router.get('/project_skills/:id', projectSkillController.getProjectSkillById);
router.post('/project_skills', projectSkillController.createProjectSkill);
router.put('/project_skills/:id', projectSkillController.updateProjectSkill);
router.delete('/project_skills/:id', projectSkillController.deleteProjectSkill);

module.exports = router;