const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
  try {
    const {mail, password} = req.body;
    const user = await User.findOne({mail: mail.toLowerCase()})
    if(!user){
      return res.status(400).send("You have no account with us")
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      //send token
    }
  } catch (err) {
    return res.status(500).send("Something went wrong with the server");
  }
};

module.exports = postLogin;
