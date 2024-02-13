const db = require('../utils/db');

const getAll = async () => {
    return await db.Skills.findMany();
}

const getById = async (id) => {
	return await db.Skills.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Skills.create({ data });
}

const update = async (data, id) => {
	return await db.Skills.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Skills.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}