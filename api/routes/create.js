const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const models = require("../models");

const User = models.User;
const Todo = models.Todo;

router.post("/users", async (req, res, next) => {
  console.log("creating new User");

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = await User.create({
    name: name,
    email: email,
    password: password
  });
});

router.post("/todos", async (req, res, next) => {
  console.log("creating new Todo");

  const user = req.body.user;
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;
  const userID = req.body.userID;

  const newTodo = await Todo.create({
    user: user,
    title: title,
    description: description,
    status: status,
    userID: userID
  });
});

module.exports = router;
