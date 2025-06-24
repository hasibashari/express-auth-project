// Import the necessary modules
require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Specify the port
const PORT = process.env.PORT || 3001;

// Create a simple route
app.get("/", (req, res) => {
   res.send("Hello, World! Your backend is running.");
});

// Use the auth routes
app.use("/auth", authRoutes);



// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
