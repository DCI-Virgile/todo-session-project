/** EXTERNAL DEPENDENCIES */
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

/** INIT */
const api = express();

/** REQUEST PARSERS */
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

/** START SERVER*/
api.listen(3200, () => console.log("Started on 3200"));

/** STATIC FILES*/
api.use(express.static(path.join(__dirname, "pages")));

/** CONNECT TO DATABASE */
const atlas = process.env.ATLAS;

mongoose
  .connect(atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => {
    console.log(err);
  });

/** ROUTES */
const middleware = require("./middleware");
const read = require("./routes/read");
const create = require("./routes/create");
const login = require("./routes/login");

api.use(middleware.cors);
api.use(middleware.sesh);
api.use(read);
api.use(create);
api.use(login);

/** EXPORT PATH */
module.exports = api;
