const {User} = require("../models/basedatos");
const jwt = require('jsonwebtoken');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {

    const { firstName, lastName, email, password, phone, address } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      phone,
      address
    });
    console.log(user);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message + "234234" });
  }
};

// Update an existing user by ID
exports.updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, address} = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, password, phone, address },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// User login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign({ userId: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
