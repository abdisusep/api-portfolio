const service = require('../services/service.service');
const { successResponse, errorResponse } = require('../utils/response.util');

const getServices = async (req, res) => {
	try {
		const result = await service.getServices();
		successResponse(res, result);
	} catch(err) {
		errorResponse(res, err, 400);
	}
}

const getService = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const result = await service.getService(id);
		successResponse(res, result);
	} catch (err) {
		errorResponse(res, err, 400);
	}
}

const createService = async (req, res) => {
	try {
        const data = req.body;
        const result = await service.createService(data);
        successResponse(res, result);
    } catch (err) {
        errorResponse(res, err, 400);
    }
}

const updateService = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
        const data = req.body;
        const result = await service.updateService(data, id);
        successResponse(res, result);
    } catch (err) {
        errorResponse(res, err, 400);
    }
}

const deleteService = async (req, res) => {
	try {
        const id = parseInt(req.params.id);
        const result = await service.deleteService(id);
        successResponse(res, result);
    } catch (err) {
        errorResponse(res, err, 400);
    }
}

module.exports = {
	getServices, getService, createService, updateService, deleteService
}