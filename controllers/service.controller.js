const getServices = async (req, res) => {
	res.status(200).json({ 
		message: 'All Services' 
	});
}

module.exports = {
	getServices
}