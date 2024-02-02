const service = require('../services/social.service');
const { successResponse, errorResponse } = require('../utils/response.util');

const getSocials = async (req, res) => {
	try {
		const result = await service.getSocials();
		successResponse(res, result);
	} catch(err) {
		errorResponse(res, err, 400);
	}
}

module.exports = {
	getSocials
}