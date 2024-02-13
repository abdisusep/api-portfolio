const express = require('express');
const router  = express.Router();

const toolController = require('../controllers/tool');

router.get('/tools', toolController.getTools);
router.get('/tools/:id', toolController.getToolById);
router.post('/tools', toolController.createTool);
router.put('/tools/:id', toolController.updateTool);
router.delete('/tools/:id', toolController.deleteTool);

module.exports = router;