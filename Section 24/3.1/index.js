import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Main Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
