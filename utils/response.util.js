const successResponse = (res, result) => {
  const { code = 200, status = 'success', message, data } = result;
  res.status(code).json({ status, code, message, data });
};

const errorResponse = (res, err, code = 500) => {
  const message = err.message || 'Internal server error';
  res.status(code).json({ status: 'error', code, message });
};

module.exports = { 
	successResponse, 
	errorResponse 
};