// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Create a route for the home page
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// Create a route for the comments page
app.get("/comments", (req, res) => {
  res.send("Welcome to the comments page!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});