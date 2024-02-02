const express = require('express');
const router  = express.Router();

const controller = require('../controllers/service.controller');

router.get('/services', controller.getServices);
router.get('/service/:id', controller.getService);
router.post('/service', controller.createService);
router.put('/service/:id', controller.updateService);
router.delete('/service/:id', controller.deleteService);

module.exports = router;