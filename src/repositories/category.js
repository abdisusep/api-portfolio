const db = require('../utils/db');

const getAll = async () => {
    return await db.Categories.findMany();
}

const getById = async (id) => {
	return await db.Categories.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Categories.create({ data });
}

const update = async (data, id) => {
	return await db.Categories.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Categories.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}