const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express(); //express server variable

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "NedimRoot4252!?",
  database: "projdata",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //generic form for activating body-parser

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM accdet WHERE Username = ? AND Password = ?",
    [username, password],
    (err, result) => {
      if (err) res.send({ err: err });

      if (result.length > 0) res.send(result);
      else res.send({ message: "Wrong username/password combination!" });
    }
  );
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
