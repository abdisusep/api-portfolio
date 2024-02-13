const skillRepository = require('../repositories/skill');

const getSkills = async () => {
	return await skillRepository.getAll();
}

const getSkillById = async (id) => {
	return await skillRepository.getById(id);
}

const createSkill = async (newSkill) => {
	return await skillRepository.create(newSkill);
}

const updateSkill = async (editSkill, id) => {
	return await skillRepository.update(editSkill, id);
}

const deleteSkill = async (id) => {
	return await skillRepository.destroy(id);
}

module.exports = {
	getSkills, getSkillById, createSkill, updateSkill, deleteSkill
}