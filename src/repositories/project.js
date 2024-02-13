const db = require('../utils/db');

const getAll = async () => {
    return await db.Projects.findMany();
}

const getById = async (id) => {
	return await db.Projects.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Projects.create({ data });
}

const update = async (data, id) => {
	return await db.Projects.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Projects.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}