const getTools = async (req, res) => {
	res.status(200).json({ 
		message: 'All Tools' 
	});
}

module.exports = {
	getTools
}