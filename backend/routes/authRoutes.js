// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Definisikan route untuk POST /auth/register
router.post('/register', authController.register);
// Definisikan route untuk POST /auth/login
router.post('/login', authController.login);

// Definisikan route untuk GET /auth/me yang dilindungi oleh middleware 'protect'
router.get('/me', protect, authController.getMe);

module.exports = router;
