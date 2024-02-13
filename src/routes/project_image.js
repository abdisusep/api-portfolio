const express = require('express');
const router  = express.Router();

const projectImageController = require('../controllers/project_image');

router.get('/project_images', projectImageController.getProjectImages);
router.get('/project_images/:id', projectImageController.getProjectImageById);
router.post('/project_images', projectImageController.createProjectImage);
router.put('/project_images/:id', projectImageController.updateProjectImage);
router.delete('/project_images/:id', projectImageController.deleteProjectImage);

module.exports = router;