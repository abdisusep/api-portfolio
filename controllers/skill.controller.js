const service = require('../services/skill.service');
const { successResponse, errorResponse } = require('../utils/response.util');

const getSkills = async (req, res) => {
	try {
		const result = await service.getSkills();
		successResponse(res, result);
	} catch(err) {
		errorResponse(res, err, 400);
	}
}

module.exports = {
	getSkills
}