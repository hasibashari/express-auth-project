// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Definisikan route untuk POST /auth/register
router.post('/register', authController.register);
// Definisikan route untuk POST /auth/login
router.post('/login', authController.login);

module.exports = router;
