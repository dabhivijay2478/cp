const bycrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("../db/connect");
const User = require("../models/useschema");
router.get("/", (req, res) => {
  res.send("vijay router");
});
router.post("/register", async (req, res) => {
  const { name, email, phone, password, Proffesion } = req.body;
  if (!name || !email || !phone || !password || !Proffesion) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const userexits = await User.findOne({ email: email }).then(
      async (userexits) => {
        if (userexits) {
          return res.status(422).json({ error: "email exits" });
        }

        const user = new User({ name, email, phone, password, Proffesion });
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

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "filled the data" });
    }
    const userlogin = await User.findOne({ email: email });

    if (userlogin) {
      const iMatch = await bycrypt.compare(password, userlogin.password);
      let token = await userlogin.generateAuthToken();
      res.cookie("jwttokens", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      console.log(token);
      if (!iMatch) {
        res.status(400).json({ error: "user error" });
      } else {
        console.log(userlogin);
        res.status(200).json({ message: "login sucess" });
      }
    } else {
      res.status(400).json({ error: "user error" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
