const db = require('../utils/db');

const getAll = async () => {
    return await db.Category.findMany();
}

const getById = async (id) => {
	return await db.Category.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Category.create({ data });
}

const update = async (data, id) => {
	return await db.Category.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Category.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}