const express = require("express");
const router = express.Router();

const Addnewuser = require("../models/adduserchema");
router.get("/vijay", (req, res) => {
  res.send("vijay router2");
});
router.post("/addnewuser", async (req, res) => {
  const { Name, Password, Email, PhoneNO, Class, Batch, ClubName, FavTech } =
    req.body;

  if (
    !Name ||
    !Password ||
    !Email ||
    !PhoneNO ||
    !Class ||
    !Batch ||
    !ClubName ||
    !FavTech
  ) {
    return res.status(422).json({ error: "Something Error" });
  }

  try {
    const userexits = await Addnewuser.findOne({ Email: Email }).then(
      async (userexits) => {
        if (userexits) {
          return res.status(422).json({ error: "User Already Exits" });
        }

        const user = new Addnewuser({
          Name,
          Password,
          Email,
          PhoneNO,
          Class,
          Batch,
          ClubName,
          FavTech,
        });
        await user.save();

        // if (userRegister) {
        res.status(201).json({ message: "Add User SucessFully Added!@@" });
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

module.exports = router;
