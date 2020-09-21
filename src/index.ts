import express from "express";
const app = express();
const port = 3000; // localhost:3000

app.get("/", (req, res) => {
  res.send("Hello :D");
});

app.listen(port, () => {
  // Next line purpose is to tell TSLint to skip console.log line
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
