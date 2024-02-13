const serviceService = require('../services/service');

const getAllServices = async (req, res) => {
	try {
		const services = await serviceService.getAllServices();
      	res.json(services);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { getAllServices }