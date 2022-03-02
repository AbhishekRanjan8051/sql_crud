const express = require("express");
const Router = express.Router();
const mysqlconnection = require("../connection");

Router.get("/", function (req, res) {
  // writes something
  mysqlconnection.query("SELECT * from persons", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
