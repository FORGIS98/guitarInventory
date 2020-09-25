import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();
const port = process.env.SERVER_PORT; // localhost:3000

const app = express();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Define a route handler for the default home page
app.get("/", (req, res) => {
  // Render the index template
  res.render("index");
});

// Start the express server
app.listen(port, () => {
  // Next line purpose is to tell TSLint to skip console.log line
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
