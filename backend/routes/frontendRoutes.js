const express = require("express");
const router = express.Router();
const path = require("path");
const { ensureAuthenticated } = require('../middleware/authMiddleware');

const basePath = path.join(__dirname, "../../frontend/pages");

// Route 
router.get("/login", (req, res) => {
    res.sendFile(path.join(basePath, "login.html"));
});

router.get("/register", (req, res) => {
    res.sendFile(path.join(basePath, "register.html"));
});

router.get("/auth-success", (req, res) => {
    res.sendFile(path.join(basePath, "auth-success.html"));
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.sendFile(path.join(basePath, "dashboard.html"));
});

module.exports = router;