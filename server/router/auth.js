const bycrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("../db/connect");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const User = require("../models/useschema");
const data = require("../models/adduserchema");

router.get("/", (req, res) => {
  res.send("vijay router");
});
router.post("/signupserver", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const userexits = await User.findOne({ email: email }).then(
      async (userexits) => {
        if (userexits) {
          return res.status(422).json({ error: "email exits" });
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

router.post("/loginserver", async (req, res) => {
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

const Addeventschema = require("../models/addeventschema");

router.post("/addnewevent", async (req, res) => {
  const { EventName, HandlerName, Descrption, Contact, Certifiacate } =
    req.body;

  if (!EventName || !HandlerName || !Descrption || !Contact || !Certifiacate) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const eventexsits = await Addeventschema.findOne({
      EventName: EventName,
    }).then(async (eventexsits) => {
      if (eventexsits) {
        return res.status(422).json({ error: "Event Already Exits" });
      }

      const Event = new Addeventschema({
        EventName,
        HandlerName,
        Descrption,
        Contact,
        Certifiacate,
      });
      await Event.save();

      // if (userRegister) {
      res.status(201).json({ message: "Add Event SucessFully Added!" });
      // }
      // else
      // {
      // res.status(201).json({message:"failed"})
      // }
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/data", async (req, res) => {
  const result = await data.find({});

  res.send(result);
});

const mongouri = "mongodb://0.0.0.0:27017/cp";
try {
  mongoose.connect(mongouri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
} catch (error) {
  handleError(error);
}
process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

//creating bucket
let bucket;
mongoose.connection.on("connected", () => {
  var client = mongoose.connections[0].client;
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket",
  });
  console.log(bucket);
});

const storage = new GridFsStorage({
  url: mongouri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: "newBucket",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({
  storage,
});

router.get("/fileinfo/:filename", (req, res) => {
  const file = bucket
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist",
        });
      }
      bucket.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

router.post("/upload", upload.array("file"), (req, res) => {
  res.status(200).send("File uploaded successfully");
});

module.exports = router;
