const db = require('../utils/db');

const getAll = async () => {
    return await db.Services.findMany();
}

const getById = async (id) => {
	return await db.Services.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Services.create({ data });
}

const update = async (data, id) => {
	return await db.Services.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Services.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}