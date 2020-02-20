const mongoose = require("mongoose");

const User = mongoose.model(
  "Users",
  new mongoose.Schema(
    {
      name: { type: String, unique: true },
      email: { type: String, unique: true },
      password: { type: String }
    },
    { versionKey: false }
  )
);

const Todo = mongoose.model(
  "Todos",
  new mongoose.Schema(
    {
      user: { type: String },
      title: { type: String },
      description: { type: String },
      status: { type: String },
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
