const getTools = async () => {
	try {
		const tools = 1;

        if (tools === 0) {
            return {
                status: 'error',
                code: 404,
                message: 'Data Not Found'
            }
        }

        return {
            message: 'Data Tools',
            data: tools
        }
	} catch(err) {
		throw new Error(err);
	}
}

module.exports = {
	getTools
}