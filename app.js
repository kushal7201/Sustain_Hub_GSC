const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./util/database");
const userRoutes = require("./routes/user"); // Import your user routes
const formRoutes = require("./routes/form"); // Import your form routes
const imageRoutes = require("./routes/image"); // Import your image routes

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., images) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set up your routes
app.use("/", (req, res, next) => {
  res.render("addForm");
});
app.use("/user", userRoutes);
app.use("/form", formRoutes);
app.use("/image", imageRoutes);

// Sync the database
sequelize.sync().then(() => {
  console.log("Database synced successfully");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
