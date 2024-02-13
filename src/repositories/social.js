const db = require('../utils/db');

const getAll = async () => {
    return await db.Socials.findMany();
}

const getById = async (id) => {
	return await db.Socials.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Socials.create({ data });
}

const update = async (data, id) => {
	return await db.Socials.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Socials.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}