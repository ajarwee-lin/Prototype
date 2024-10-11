// routes/authRoutes.js
const express = require('express');
const { login, signUp } = require('../controllers/authController'); // You’ll create the controllers next
const router = express.Router();

// POST /api/auth/signup - User signup route
router.post('/signup', signUp);

// POST /api/auth/login - User login route
router.post('/login', login);

module.exports = router;
