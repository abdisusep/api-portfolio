const toolService = require('../services/tool');

const getTools = async (req, res) => {
	try {
		const tools = await toolService.getTools();
   	res.json(tools);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const getToolById = async (req, res) => {
	try {
		const id = req.params.id;
		const tool = await toolService.getToolById(parseInt(id));
    res.json(tool);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createTool = async (req, res) => {
	try {
      const newTool = req.body;
      const createdTool = await toolService.createTool(newTool);
      res.status(201).json(createdTool);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const updateTool = async (req, res) => {
	try {
		const id = req.params.id;
      	const editTool = req.body;
      	const updatedTool = await toolService.updateTool(editTool, parseInt(id));
      	res.status(200).json(updatedTool);
    } catch (err) {
      	res.status(500).json({ error: err.message });
    }
}

const deleteTool = async (req, res) => {
	try {
		const id = req.params.id;
		const tool = await toolService.deleteTool(parseInt(id));
    res.json(tool);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

module.exports = { 
	getTools, getToolById, createTool, updateTool, deleteTool
}