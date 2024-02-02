const getSocials = async (req, res) => {
	res.status(200).json({ 
		message: 'All Social Media' 
	});
}

module.exports = {
	getSocials
}