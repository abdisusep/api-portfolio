const toolRepository = require('../repositories/tool');

const getTools = async () => {
	return await toolRepository.getAll();
}

const getToolById = async (id) => {
	return await toolRepository.getById(id);
}

const createTool = async (newTool) => {
	return await toolRepository.create(newTool);
}

const updateTool = async (editTool, id) => {
	return await toolRepository.update(editTool, id);
}

const deleteTool = async (id) => {
	return await toolRepository.destroy(id);
}

module.exports = {
	getTools, getToolById, createTool, updateTool, deleteTool
}