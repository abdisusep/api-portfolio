const getSkills = async () => {
	try {
		const skills = 1;

        if (skills === 0) {
            return {
                status: 'error',
                code: 404,
                message: 'Data Not Found'
            }
        }

        return {
            message: 'Data Skills',
            data: skills
        }
	} catch(err) {
		throw new Error(err);
	}
}

module.exports = {
	getSkills
}