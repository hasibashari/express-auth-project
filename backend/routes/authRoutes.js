// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Definisikan route untuk POST /auth/register
router.post('/register', authController.register);

module.exports = router;
