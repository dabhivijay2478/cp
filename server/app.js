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
app.get("/about", middlware, (req, res) => {
  res.send("Admindash");
});
app.get("/contact", (req, res) => {
  res.cookie("jwttoken","Vijay")
  res.send("contact server");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
