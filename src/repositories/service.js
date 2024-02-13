const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async () => {
    return await prisma.Services.findMany();
}

const getById = async (id) => {
	return await prisma.Services.findUnique({ where: { id: parseInt(id) } });
}

module.exports = {
	getAll, getById
}