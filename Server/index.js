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

let ProfName = "";
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM accdet WHERE Username = ? AND Password = ?",
    [username, password],
    (err, result) => {
      if (err) res.send({ err: err });

      if (result.length > 0) {
        res.send(result);
        ProfName = result[0].ProfessorName;
      } else res.send({ message: "Wrong username/password combination!" });
    }
  );
});

app.post("/accordion", (req, res) => {
  let courses = req.body.courses;
  db.query(
    "SELECT * FROM courses WHERE CourseProfessor = ?",
    [ProfName],
    (err, result) => {
      if (err) console.log(err);

      if (result.length > 0) {
        res.send(result);
      } else console.log("Ne");
    }
  );
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
