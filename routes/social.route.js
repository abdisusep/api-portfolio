const express = require('express');
const router  = express.Router();

router.get('/socials', (req, res) => {
	res.status(200).json({ 
		message: 'Social Media' 
	});
});

module.exports = router;