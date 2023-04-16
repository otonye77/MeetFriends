const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;
    const userExists = await User.exists({ mail });
    if (userExists) {
      return res.status(400).send("Email is already in user");
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });
    const token = "JWT TOKEN";
    return res.status(201).json({
      userDetails: {
        mail: user.mail,
        token,
        username: user.username
      }
    })
  } catch (err) {
    return res.status(500).send("Error occured please try again");
  }
};

module.exports = postRegister;
