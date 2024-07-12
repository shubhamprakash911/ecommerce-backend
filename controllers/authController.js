const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const user = await User.create({ username, email, password, role });

    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password } });
    if (!user)
      return res.status(400).send({ error: "Invalid email or password." });

    if (!validPassword)
      return res.status(400).send({ error: "Invalid email or password." });

    const token = jwt.sign({ id: user.id, role: user.role }, "secretKey", {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (err) {
    res.status(500).send({ error: "Something went wrong" });
  }
};
