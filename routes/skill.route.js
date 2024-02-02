const express = require('express');
const router  = express.Router();

router.get('/skills', (req, res) => {
	res.status(200).json({ 
		message: 'Skills' 
	});
});

module.exports = router;