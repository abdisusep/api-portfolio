const serviceRepository = require('../repositories/service');

const getAllServices = async () => {
	return await serviceRepository.getAll();
}

module.exports = {
	getAllServices
}