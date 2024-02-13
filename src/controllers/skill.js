const skillService = require('../services/skill');

const getSkills = async (req, res) => {
	try {
		const skills = await skillService.getSkills();
   	res.json(skills);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getSkillById = async (req, res) => {
	try {
		const id = req.params.id;
		const Skill = await skillService.getSkillById(parseInt(id));
    res.json(Skill);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createSkill = async (req, res) => {
	try {
      const newSkill = req.body;
      const createdSkill = await skillService.createSkill(newSkill);
      res.status(201).json(createdSkill);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateSkill = async (req, res) => {
	try {
		const id = req.params.id;
      	const editSkill = req.body;
      	const updatedSkill = await skillService.updateSkill(editSkill, parseInt(id));
      	res.status(200).json(updatedSkill);
    } catch (err) {
      	res.status(500).json({ error: err.message });
    }
}

const deleteSkill = async (req, res) => {
	try {
		const id = req.params.id;
		const Skill = await skillService.deleteSkill(parseInt(id));
    res.json(Skill);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getSkills, getSkillById, createSkill, updateSkill, deleteSkill
}