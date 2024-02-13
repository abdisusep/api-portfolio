const serviceService = require('../services/service');

const getServices = async (req, res) => {
	try {
		const services = await serviceService.getServices();
      	res.json(services);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getServiceById = async (req, res) => {
	try {
		const id = req.params.id;
		const service = await serviceService.getServiceById(parseInt(id));
      	res.json(service);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createService = async (req, res) => {
	try {
      const newService = req.body;
      const createdService = await serviceService.createService(newService);
      res.status(201).json(createdService);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateService =  async (req, res) => {
	try {
		const id = req.params.id;
      	const editService = req.body;
      	const updatedService = await serviceService.updateService(editService, parseInt(id));
      	res.status(200).json(updatedService);
    } catch (err) {
      	res.status(500).json({ error: err.message });
    }
}

const deleteService =  async (req, res) => {
	try {
		const id = req.params.id;
		const service = await serviceService.deleteService(parseInt(id));
      	res.json(service);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getServices, getServiceById, createService, updateService, deleteService
}