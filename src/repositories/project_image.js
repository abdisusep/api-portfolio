const db = require('../utils/db');

const getAll = async () => {
    return await db.Project_images.findMany();
}

const getById = async (id) => {
	return await db.Project_images.findUnique({ where: { id } });
}

const create = async (data) => {
	return await db.Project_images.create({ data });
}

const update = async (data, id) => {
	return await db.Project_images.update({ where: { id }, data });
}

const destroy = async (id) => {
	return await db.Project_images.delete({ where: { id } });
}

module.exports = {
	getAll, getById, create, update, destroy
}