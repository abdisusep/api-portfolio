const getSocials = async () => {
	try {
		const socials = 1;

        if (socials === 0) {
            return {
                status: 'error',
                code: 404,
                message: 'Data Not Found'
            }
        }

        return {
            message: 'Data Socials',
            data: socials
        }
	} catch(err) {
		throw new Error(err);
	}
}

module.exports = {
	getSocials
}