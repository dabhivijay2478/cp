const jwt = require("jsonwebtoken");
const User = require("../models/useschema");
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    const verfiytoken = jwt.verify(token, process.env.SECRET_KEY);

    const rootuser = await User.findOne({
      _id: verfiytoken._id,
      "tokens.token": token,
    });
    if (!rootuser) {
      throw new Error("user not found");

      req.token = token;
      req.rootuser = rootuser;
      req.userid = rootuser._id;

      next();
    }
  } catch (err) {
    res.status(401).send("token");
    console.log(err);
  }
};

module.exports = authenticate;
