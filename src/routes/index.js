const express = require('express');
const router  = express.Router();

const socialRoutes = require('./social');
const skillRoutes = require('./skill');
const projectRoutes = require('./project');
const projectSkillRoutes = require('./project_skill');
const categoryRoutes = require('./category');

router.use('/', socialRoutes);
router.use('/', skillRoutes);
router.use('/', projectRoutes);
router.use('/', projectSkillRoutes);
router.use('/', categoryRoutes);

router.get('/', async (req, res) => {
    res.status(200).json({
      message: 'API Portfolio - Susep Sp'
    });
});

module.exports = router;