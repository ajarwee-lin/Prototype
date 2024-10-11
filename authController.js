// authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // assuming you have a user model
const bcrypt = require('bcryptjs');

// Secret key for signing JWT
const JWT_SECRET = "your_jwt_secret_key";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { login, signUp };
