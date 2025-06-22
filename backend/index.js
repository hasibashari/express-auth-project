// 1. Import the necessary modules
require("dotenv").config();
const express = require("express");

// 2. Initialize the Express application
const app = express();

// 3. Specify the port
const PORT = process.env.PORT || 3001;

// 4. Create a simple route
app.get("/", (req, res) => {
   res.send("Hello, World! Your backend is running.");
});

// 5. Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
