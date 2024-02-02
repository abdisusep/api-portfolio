const getServices = async () => {
	try {
		const services = 1;

        if (services === 0) {
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

module.exports = {
	getServices
}