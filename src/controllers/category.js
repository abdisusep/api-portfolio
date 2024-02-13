const categoryService = require('../services/category');

const getCategories = async (req, res) => {
	try {
		const categories = await categoryService.getCategories();
   		res.json(categories);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getCategoryById = async (req, res) => {
	try {
		const id = req.params.id;
		const category = await categoryService.getCategoryById(parseInt(id));
    	res.json(category);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createCategory = async (req, res) => {
	try {
      const newCategory = req.body;
      const created = await categoryService.createCategory(newCategory);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateCategory = async (req, res) => {
	try {
		const id = req.params.id;
      	const editCategory = req.body;
      	const updated = await categoryService.updateCategory(editCategory, parseInt(id));
      	res.status(200).json(updated);
    } catch (err) {
      	res.status(500).json({ error: err.message });
    }
}

const deleteCategory = async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await categoryService.deleteCategory(parseInt(id));
    	res.json(deleted);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getCategories, getCategoryById, createCategory, updateCategory, deleteCategory
}