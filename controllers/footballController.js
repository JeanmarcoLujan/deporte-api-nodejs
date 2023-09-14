
const {FootballField } = require("../models/basedatos"); 

// Get all footballs
exports.getAllFoot = async (req, res) => {
  try {
    const foots = await FootballField.find();
    res.json(foots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new foot
exports.createFoot = async (req, res) => {
  try {
    const { fieldName, fieldDescription } = req.body;
    const foot = new FootballField({ fieldName, fieldDescription });
    const newFoot = await foot.save();
    res.status(201).json(newFoot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFoot = async (req, res) => {
  try {
    const deleteFoot = await FootballField.findByIdAndDelete(req.params.id);
    if (!deleteFoot) {
      return res.status(404).json({ message: "Campo not found" });
    }
    res.json({ message: "Campo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFootById = async (req, res) => {
  try {
    const foot = await FootballField.findById(req.params.id);
    if (!foot) {
      return res.status(404).json({ message: "Campo not found" });
    }
    res.json(foot);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateFoot = async (req, res) => {
  try {
    const {
      fieldName,
      fieldDescription
    } = req.body;
    const updatedFoot= await FootballField.findByIdAndUpdate(
      req.params.id,
      {
        fieldName,
        fieldDescription
      },
      { new: true }
    );
    if (!updatedFoot) {
      return res.status(404).json({ message: "Campo not found" });
    }
    res.json(updatedFoot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
