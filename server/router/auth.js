const bycrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config({ path: "./email.env" });
dotenv.config({ path: "./config.env" });
const router = express.Router();
require("../db/connect");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const { check, validationResult } = require("express-validator");
const User = require("../models/useschema");
const data = require("../models/adduserchema");
const Contact = require("../models/contactusschema");

router.get("/", (req, res) => {
  res.send("vijay router");
});
router.post("/signupserver", async (req, res) => {
  const {
    Name,
    EnrollmentNo,
    Email,
    PhoneNO,
    Class,
    Batch,
    ClubName,
    FavTech,
    Role,
    Password,
  } = req.body;
  if (!Email || !Password) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const userexits = await User.findOne({ EnrollmentNo: EnrollmentNo }).then(
      async (userexits) => {
        if (userexits) {
          return res.status(422).json({ error: "User already exits" });
        }

        const user = new User({
          Name,
          EnrollmentNo,
          Email,
          PhoneNO,
          Class,
          Batch,
          ClubName,
          FavTech,
          Role,
          Password,
        });
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
    const { Password, Email } = req.body;
    if (!Email || !Password) {
      return res.status(400).json({ error: "filled the data" });
    }
    const userlogin = await User.findOne({ Email: Email });

    if (userlogin) {
      const iMatch = await bycrypt.compare(Password, userlogin.Password);
      let token = await userlogin.generateAuthToken();
      res.cookie("jwttokens", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      // console.log(token);
      if (!iMatch) {
        res.status(400).json({ error: "user error" });
      } else {
        res.status(200).send({ Role: userlogin.Role });
        res.status(200).json(`User role: ${userlogin.Role}`);
        res.status(200).json({ message: "login sucess" });

        return res.send({ Role: userlogin.Role });
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
  const { ClubName, EventName, HandlerName, Descrption, Venue, Certifiacate } =
    req.body;

  if (!EventName || !HandlerName || !Descrption || !Venue || !Certifiacate) {
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
        ClubName,
        EventName,
        HandlerName,
        Descrption,
        Venue,
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

router.get("/pdfs", (req, res) => {
  bucket.find({ contentType: "application/pdf" }).toArray((err, files) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching PDF files",
        error: err,
      });
    }
    res.set("Content-Type", "application/pdf");

    return res.send(files);
  });
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
      res.set("Content-Type", "application/pdf");
      bucket.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

// router.get("/fileinfo/:name", (req, res) => {
//   const { name } = req.params;
//   const downloadStream = bucket.openDownloadStreamByName(name);

//   downloadStream.on("error", (err) => {
//     res.status(404).send("PDF not found");
//   });

//   res.set("Content-Type", "application/pdf");
//   downloadStream.pipe(res);
// });

router.post("/upload", upload.array("file"), (req, res) => {
  res.status(200).send("File uploaded successfully");
});

// const csvtojson = require("csvtojson");

router.post("/addmutilpe", async (req, res) => {
  try {
    // const users = await csvtojson().fromString(req.body);
    const users = await req.body;
    for (let i = 0; i < users.length; i++) {
      const userExists = await User.findOne({ Email: users[i].Email });
      if (userExists) {
        console.log(`User with email ${users[i].Email} already exists`);
        continue;
      }

      const user = new User({
        Name: users[i].Name,
        EnrollmentNo: users[i].EnrollmentNo,
        Email: users[i].Email,
        PhoneNO: users[i].PhoneNO,
        Class: users[i].Class,
        Batch: users[i].Batch,
        ClubName: users[i].ClubName,
        FavTech: users[i].FavTech,
        Role: users[i].Role,
        Password: users[i].Password,
      });

      await user.save();
    }

    res.status(200).json({ message: "Users added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/sendemail", async (req, res) => {
  const FromEmail = process.env.MAIL_USERNAME;
  const Password = process.env.MAIL_PASSWORD;
  const { ToEmail, EnrollmentNo } = req.body;
  console.log(ToEmail);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: FromEmail,
      pass: Password,
    },
  });

  let mailOptions = {
    from: FromEmail,
    to: ToEmail,
    subject: "Your Account Has Been Created!",
    html: `
      <p>Dear ${ToEmail},</p>
      <p>We're excited to inform you that your account for our service has been successfully created! You can now log in and start using the service.</p>
      <p>To log in, please use the following credentials:</p>
      <ul>
        <li>Email: ${ToEmail}</li>
        <li>Password: ${EnrollmentNo}</li>
      </ul>
      <p>If you have any questions or need assistance, please don't hesitate to contact our support team at [support email address or phone number]. We're here to help you get started and answer any questions you may have.</p>
      <p>Before you start using the service, please take a moment to review our <a href="https://firebasestorage.googleapis.com/v0/b/cpprivacypolicy.appspot.com/o/Privacy%20Policy.pdf?alt=media&token=f121c1a3-854d-4d92-86cb-8707683296b2" target="_blank">privacy policy</a>  These documents explain your rights and responsibilities as a user of the service, and how we handle your personal information.</p>
      <p>We're looking forward to helping you achieve your goals with our service. Thank you for choosing us!</p>
      <p>Best regards,<br>[Dabhi Vijay]</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/data", async (req, res) => {
  const result = await data.find({});

  res.send(result);
});

router.post("/Contactus", async (req, res) => {
  const { Name, EnrollmentNo, Email, ClubName, Subject, Message } = req.body;

  try {
    const Contactus = new Contact({
      Name,
      EnrollmentNo,
      Email,
      ClubName,
      Subject,
      Message,
    });
    await Contactus.save();

    // if (userRegister) {
    res.status(201).json({ message: "Sucess" });
    // }
    // else
    // {
    // res.status(201).json({message:"failed"})
    // }
  } catch (error) {
    console.log(error);
  }
});

router.get("/contactusreport", async (req, res) => {
  const result = await Contact.find({});

  res.send(result);
});

router.get("/Eventreport", async (req, res) => {
  const result = await Addeventschema.find({});

  res.send(result);
});

router.put("/changepassword", async (req, res) => {
  try {
    const { Password, Email, newPassword } = req.body;
    if (!Email || !Password || !newPassword) {
      return res.status(400).json({ error: "filled the data" });
    }
    const userlogin = await User.findOne({ Email: Email });

    if (userlogin) {
      const isMatch = await bycrypt.compare(Password, userlogin.Password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      } else {
        userlogin.Password = newPassword;
        await userlogin.save();
        res.status(200).json({ message: "Password changed successfully" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
