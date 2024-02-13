const projectImageRepository = require('../repositories/project_image');

const getProjectImages = async () => {
	return await projectImageRepository.getAll();
}

const getProjectImageById = async (id) => {
	return await projectImageRepository.getById(id);
}

const createProjectImage = async (newProjectImage) => {
	return await projectImageRepository.create(newProjectImage);
}

const updateProjectImage = async (editProjectImage, id) => {
	return await projectImageRepository.update(editProjectImage, id);
}

const deleteProjectImage = async (id) => {
	return await projectImageRepository.destroy(id);
}

module.exports = {
	getProjectImages, getProjectImageById, createProjectImage, updateProjectImage, deleteProjectImage
}