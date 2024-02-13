const socialService = require('../services/social');

const getSocials = async (req, res) => {
	try {
		const socials = await socialService.getSocials();
   	res.json(socials);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getSocialById = async (req, res) => {
	try {
		const id = req.params.id;
		const social = await socialService.getSocialById(parseInt(id));
    res.json(social);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createSocial = async (req, res) => {
	try {
      const newSocial = req.body;
      const createdSocial = await socialService.createSocial(newSocial);
      res.status(201).json(createdSocial);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateSocial = async (req, res) => {
	try {
		const id = req.params.id;
      	const editSocial = req.body;
      	const updatedSocial = await socialService.updateSocial(editSocial, parseInt(id));
      	res.status(200).json(updatedSocial);
    } catch (err) {
      	res.status(500).json({ error: err.message });
    }
}

const deleteSocial = async (req, res) => {
	try {
		const id = req.params.id;
		const social = await socialService.deleteSocial(parseInt(id));
    res.json(social);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getSocials, getSocialById, createSocial, updateSocial, deleteSocial
}