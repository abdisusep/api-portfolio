const express = require('express');
const router  = express.Router();

const serviceController = require('../controllers/service');

router.get('/services', serviceController.getServices);
router.get('/services/:id', serviceController.getServiceById);
router.post('/services', serviceController.createService);
router.put('/services/:id', serviceController.updateService);
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;