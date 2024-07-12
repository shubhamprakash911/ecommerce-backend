const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sellerRoutes = require("./routes/sellerRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/seller", sellerRoutes);

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
