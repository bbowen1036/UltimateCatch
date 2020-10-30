const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const path = require('path');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
// const files = require("./routes/api/files");
const regions = require("./routes/api/regions")

const passport = require('passport');
const bodyParser = require('body-parser');

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello Wdddorld"));

app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/regions", regions);

// app.use("/api/files", files);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server is running on port ${port}`));
