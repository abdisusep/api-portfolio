const projectService = require('../services/project');

const getProjects = async (req, res) => {
	try {
		const projects = await projectService.getProjects();
   	res.json(projects);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getProjectById = async (req, res) => {
	try {
		const id = req.params.id;
		const project = await projectService.getProjectById(parseInt(id));
    res.json(project);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createProject = async (req, res) => {
	try {
      const newProject = req.body;
      const created = await projectService.createProject(newProject);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateProject = async (req, res) => {
	try {
		const id = req.params.id;
    const editProject = req.body;
   	const updated = await projectService.updateProject(editProject, parseInt(id));
   	res.status(200).json(updated);
 	} catch (err) {
   	res.status(500).json({ error: err.message });
  }
}

const deleteProject = async (req, res) => {
	try {
		const id = req.params.id;
		const project = await projectService.deleteProject(parseInt(id));
    res.json(project);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getProjects, getProjectById, createProject, updateProject, deleteProject
}