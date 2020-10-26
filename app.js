const express = require("express");
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;

app.use("/api/users", users);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server is running on port ${port}`));