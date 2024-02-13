const db = require('../utils/db');

const getAll = async () => {
    return await db.Tools.findMany();
}

const getById = async (id) => {
	return await db.Tools.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Tools.create({ data });
}

const update = async (data, id) => {
	return await db.Tools.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Tools.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}