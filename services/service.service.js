const prisma = require('../db/prisma');

const getServices = async () => {
	try {
		const services = await prisma.services.findMany();

        if (services.length === 0) {
            return {
                status: 'error',
                code: 404,
                message: 'Data Not Found'
            }
        }

        return {
            message: 'Data Services',
            data: services
        }
	} catch(err) {
		throw new Error(err);
	}
}

const getService = async (id) => {
    try {
        const service = await prisma.services.findUnique({
            where: { id }
        });

        if (!service) {
            return {
                status: 'error',
                code: 404,
                message: 'Data Not Found'
            }
        }

        return {
            message: 'Detail Service',
            data: service
        }
    } catch (err) {
        throw new Error(err);
    }
}

const createService = async (data) => {
    try {
        const create = await prisma.services.create({ data });

        return {
            code: 201,
            message: 'Created',
            data: create
        }
    } catch (err) {
        throw new Error(err);
    }
}

const updateService = async (data, id) => {
    try {
        const existing = await prisma.services.findUnique({
            where: { id },
        });

        if (!existing) {
            return {
                status: 'error',
                code: 404,
                message: 'Service Not Found',
            };
        }

        const updated = await prisma.services.update({
            where:{ id },
            data
        });

        return {
            code: 200,
            message: 'Updated',
            data: updated
        }
    } catch (err) {
        throw new Error(err);
    }
}

const deleteService = async (id) => {
    try {
        const existing = await prisma.services.findUnique({
            where: { id },
        });

        if (!existing) {
            return {
                status: 'error',
                code: 404,
                message: 'Service Not Found',
            };
        }

        await prisma.services.delete({
            where: { id }
        });

        return {
            code: 200,
            message: 'Deleted',
            data: deleted
        }
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
	getServices, getService, createService, updateService, deleteService
}