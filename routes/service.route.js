const express = require('express');
const router  = express.Router();

router.get('/services', (req, res) => {
	res.status(200).json({ 
		message: 'Services' 
	});
});

module.exports = router;