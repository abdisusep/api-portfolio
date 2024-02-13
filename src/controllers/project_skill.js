const projectSkillService = require('../services/project_skill');

const getProjectSkills = async (req, res) => {
	try {
		const project_images = await projectSkillService.getProjectSkills();
   	res.json(project_images);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getProjectSkillById = async (req, res) => {
	try {
		const id = req.params.id;
		const project_image = await projectSkillService.getProjectSkillById(parseInt(id));
    res.json(project_image);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createProjectSkill = async (req, res) => {
	try {
      const newProjectSkill = req.body;
      const created = await projectSkillService.createProjectSkill(newProjectSkill);
      res.status(201).json(created);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateProjectSkill = async (req, res) => {
	try {
			const id = req.params.id;
      const editProjectSkill = req.body;
      const updated = await projectSkillService.updateProjectSkill(editProjectSkill, parseInt(id));
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const deleteProjectSkill = async (req, res) => {
	try {
		const id = req.params.id;
		const deleted = await projectSkillService.deleteProjectSkill(parseInt(id));
    res.json(deleted);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getProjectSkills, getProjectSkillById, createProjectSkill, updateProjectSkill, deleteProjectSkill
}