const mysql = require("mysql");

const mysqlcollection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abhishek@123",
  database: "student",
});

mysqlcollection.connect((err) => {
  if (!err) {
    console.log("db is fine");
  } else {
    console.log("db failed" + JSON.stringify(err));
  }
});

module.exports = mysqlcollection;
