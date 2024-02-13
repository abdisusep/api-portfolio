const projectSkillRepository = require('../repositories/project_skill');

const getProjectSkills = async () => {
	return await projectSkillRepository.getAll();
}

const getProjectSkillById = async (id) => {
	return await projectSkillRepository.getById(id);
}

const createProjectSkill = async (newProjectSkill) => {
	return await projectSkillRepository.create(newProjectSkill);
}

const updateProjectSkill = async (editProjectSkill, id) => {
	return await projectSkillRepository.update(editProjectSkill, id);
}

const deleteProjectSkill = async (id) => {
	return await projectSkillRepository.destroy(id);
}

module.exports = {
	getProjectSkills, getProjectSkillById, createProjectSkill, updateProjectSkill, deleteProjectSkill
}