const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysqlconnections = require("./connection");
const personRoute = require("./routes/person");
app.use(bodyParser.json());

app.use("/people", personRoute);

app.listen(3000, () => {
  console.log("sever is fine");
});

// app.get("/user", (req, res) => {});
