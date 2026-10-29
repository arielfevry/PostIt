const express = require('express');

const router = express.Router();

const { login, register } = require('../controllers/authController');

// Login endpoint
router.post('/login', login);

// Register endpoint
router.post('/register', register);

module.exports = router;