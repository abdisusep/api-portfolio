const categoryRepository = require('../repositories/category');

const getCategories = async () => {
	return await categoryRepository.getAll();
}

const getCategoryById = async (id) => {
	return await categoryRepository.getById(id);
}

const createCategory = async (newTool) => {
	return await categoryRepository.create(newTool);
}

const updateCategory = async (editTool, id) => {
	return await categoryRepository.update(editTool, id);
}

const deleteCategory = async (id) => {
	return await categoryRepository.destroy(id);
}

module.exports = {
	getCategories, getCategoryById, createCategory, updateCategory, deleteCategory
}