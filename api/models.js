const mongoose = require("mongoose");

const User = mongoose.model(
  "Users",
  new mongoose.Schema(
    {
      name: String,
      email: String,
      password: String
    },
    { versionKey: false }
  )
);

const Todo = mongoose.model(
  "Todos",
  new mongoose.Schema(
    {
      user: String,
      title: String,
      description: String,
      status: String,
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
    },
    { versionKey: false }
  )
);

module.exports = { User, Todo };
