import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userPassword = "";
var isUserAuthorized = false;
const systemPassword = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
  userPassword = req.body["password"];
  if (userPassword === systemPassword) {
    isUserAuthorized = true;
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isUserAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
    userPassword = false;
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
