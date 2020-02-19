const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const models = require("../models");

const User = models.User;
const Todo = models.Todo;

router.get("/users", (req, res, next) => {
  User.find().then(users => {
    res.send(users);
  });
});

router.get("/todos", (req, res, next) => {
  Todo.find().then(todos => {
    res.send(todos);
  });
});

module.exports = router;
