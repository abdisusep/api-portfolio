const getSkills = async (req, res) => {
	res.status(200).json({ 
		message: 'All Skills' 
	});
}

module.exports = {
	getSkills
}