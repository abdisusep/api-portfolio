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

module.exports = {
	getServices
}