const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const models = require("../models");

const User = models.User;

router.get("/login/:userId", (req, res) => {
  req.session.user_id = req.params.userId;
  console.log(req.session);
  res.send(req.session);
});

router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email);
  console.log(password);
  User.find({ email: email }).then(user => {
    console.log(user[0]);
    if (password === user[0].password) {
      req.session.user = user[0].id;
      console.log(req.session.user);
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  });
});

module.exports = router;
