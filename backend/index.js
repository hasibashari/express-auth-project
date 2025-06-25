// Import the necessary modules
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const passport = require("passport");
require("./config/passport-setup");
const frontendRoutes = require("./routes/frontendRoutes");

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(cors())
app.use(express.json());
app.use(passport.initialize());
app.use('/css', express.static(__dirname + '/../frontend/css'));
app.use('/js', express.static(__dirname + '/../frontend/js'));
app.use('/pages', express.static(__dirname + '/../frontend/pages'));

// Specify the port
const PORT = process.env.PORT || 3001;

// Create a simple route
app.get("/", (req, res) => {
   res.send("Hello, World! Your backend is running.");
});

// Use the auth routes
app.use("/auth", authRoutes);
app.use("/", frontendRoutes);


// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
