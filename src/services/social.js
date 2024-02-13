const socialRepository = require('../repositories/social');

const getSocials = async () => {
	return await socialRepository.getAll();
}

const getSocialById = async (id) => {
	return await socialRepository.getById(id);
}

const createSocial = async (newSocial) => {
	return await socialRepository.create(newSocial);
}

const updateSocial = async (editSocial, id) => {
	return await socialRepository.update(editSocial, id);
}

const deleteSocial = async (id) => {
	return await socialRepository.destroy(id);
}

module.exports = {
	getSocials, getSocialById, createSocial, updateSocial, deleteSocial
}