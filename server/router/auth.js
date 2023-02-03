const bycrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const router = express.Router();
require("../db/connect");
const User = require("../models/useschema");
router.get("/", (req, res) => {
  res.send("vijay router");
});
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password ) {
    res.send(console.log("Error"))
    return res.sendStatus(422).json({ error: "Something Error" });
    
  }

  try {
    const userexits = await User.findOne({ email: email }).then(
      async (userexits) => {
        if (userexits) {
          console.log("Email Exits");
          return res.status(422).json({ error: "email exits" });
          // return res.status(422).send({ error: "email exits" });
        }

        const user = new User({ email, password });
        await user.save();

        // if (userRegister) {
        res.status(201).json({ message: "Sucess" });
        // }
        // else
        // {
        // res.status(201).json({message:"failed"})
        // }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "filled the data" });
    }
    const userlogin = await User.findOne({ email: email });

    if (userlogin) {
      const iMatch = await bycrypt.compare(
        password,
        userlogin.password
      );
      let token = await userlogin.generateAuthToken();
      console.log(token);

      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
    
      if (!iMatch) {
        res.status(400).json({ error: "Invalid Credientials" });
      } else {
        console.log(userlogin);
        res.status(200).json({ message: "login sucess" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/admindash", authenticate, (req, res) => {
  console.log("Admin Home");
  res.send(req.rootuser);
});

module.exports = router;
