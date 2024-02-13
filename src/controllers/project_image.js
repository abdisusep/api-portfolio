const projectImageService = require('../services/project_image');

const getProjectImages = async (req, res) => {
	try {
		const project_images = await projectImageService.getProjectImages();
   	res.json(project_images);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getProjectImageById = async (req, res) => {
	try {
		const id = req.params.id;
		const project_image = await projectImageService.getProjectImageById(parseInt(id));
    res.json(project_image);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createProjectImage = async (req, res) => {
	try {
      const newProjectImage = req.body;
      const created = await projectImageService.createProjectImage(newProjectImage);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateProjectImage = async (req, res) => {
	try {
			const id = req.params.id;
      const editProjectImage = req.body;
      const updated = await projectImageService.updateProjectImage(editProjectImage, parseInt(id));
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const deleteProjectImage = async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await projectImageService.deleteProjectImage(parseInt(id));
    res.json(deleted);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getProjectImages, getProjectImageById, createProjectImage, updateProjectImage, deleteProjectImage
}