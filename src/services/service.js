const serviceRepository = require('../repositories/service');

const getServices = async () => {
	return await serviceRepository.getAll();
}

const getServiceById = async (id) => {
	return await serviceRepository.getById(id);
}

const createService = async (newService) => {
	return await serviceRepository.create(newService);
}

const updateService = async (editService, id) => {
	return await serviceRepository.update(editService, id);
}

const deleteService = async (id) => {
	return await serviceRepository.destroy(id);
}

module.exports = {
	getServices, getServiceById, createService, updateService, deleteService
}