const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const app = express();
require("./db/connect")
const User=require('./models/useschema')
app.use(express.json())
//Middelware
app.use(require('./router/auth'))
const port=process.env.port
const middlware = (req, res, next) => {
  console.log("Hellos");
  next();
};

app.get("/", (req, res) => {
  res.send("vijay");
});
app.get("/home", middlware, (req, res) => {
  res.send("home");
});
app.get("/contact", (req, res) => {
  res.send("contact");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
