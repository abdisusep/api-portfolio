const projectRepository = require('../repositories/project');

const getProjects = async () => {
	return await projectRepository.getAll();
}

const getProjectById = async (id) => {
	return await projectRepository.getById(id);
}

const createProject = async (newProject) => {
	return await projectRepository.create(newProject);
}

const updateProject = async (editProject, id) => {
	return await projectRepository.update(editProject, id);
}

const deleteProject = async (id) => {
	return await projectRepository.destroy(id);
}

module.exports = {
	getProjects, getProjectById, createProject, updateProject, deleteProject
}