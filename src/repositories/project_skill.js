const db = require('../utils/db');

const getAll = async () => {
    return await db.Project_skills.findMany();
}

const getById = async (id) => {
	return await db.Project_skills.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Project_skills.create({ data });
}

const update = async (data, id) => {
	return await db.Project_skills.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Project_skills.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}