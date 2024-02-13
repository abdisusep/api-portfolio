const express = require('express');
const router  = express.Router();

const serviceController = require('../controllers/service');

router.get('/services', serviceController.getAllServices);
// router.get('/services/:id', serviceController.getService);
// router.post('/services', serviceController.addService);
// router.put('/services/:id', serviceController.updateService);
// router.delete('/services/:id', serviceController.deleteService);

module.exports = router;