const express = require("express");
const app = express();

const User = require("./models/User");

app.get("/", (req, res) => {
  User.find({})
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(3000);
