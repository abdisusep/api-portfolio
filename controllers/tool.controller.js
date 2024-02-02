const service = require('../services/tool.service');
const { successResponse, errorResponse } = require('../utils/response.util');

const getTools = async (req, res) => {
	try {
		const result = await service.getTools();
		successResponse(res, result);
	} catch(err) {
		errorResponse(res, err, 400);
	}
}

module.exports = {
	getTools
}