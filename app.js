const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./util/database");
const User = require("./models/user");
const Form = require("./models/form");
const userRoutes = require("./routes/user");
const formRoutes = require("./routes/form");
const multer = require("multer");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const upload = multer({ storage: multer.memoryStorage });

// Define associations in the app.js file
// Comment out associations temporarily
User.hasMany(Form);
Form.belongsTo(User);

// Set up your routes
app.post("/submit-form", upload.single("profile_pic"), (req, res, next) => {
  console.log("We have reached this middleware where we are trying to print the uploaded image!!!!");
  const image = req.file;
  console.log(image);
  next();
});
app.use("/", (req, res, next) => {
  res.render("addForm");
  next();
});

app.use("/user", userRoutes);
app.use("/form", formRoutes);

// Sync the database
sequelize.sync().then(() => {
  // Uncomment associations after tables are created
  User.hasMany(Form);
  Form.belongsTo(User);
  console.log("Database synced successfully");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
