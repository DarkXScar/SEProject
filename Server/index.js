const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const axios = require("axios");

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

let weekNo = "";
const Timer = 100;
app.get("/week", (req, res) => {
  let n = 1;
  for (let i = 1; i <= 15; i++) {
    db.query(
      "SELECT * FROM attrec WHERE ?? IS NULL",
      ["Week" + i],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result.length == 0) {
          n = ++i;
        }
      }
    );
  }
  setTimeout(() => {
    weekNo = "Week" + n;
    res.send("Week" + n);
  }, Timer);
});

app.post("/attendance", (req, res) => {
  console.log(weekNo);
  const id = req.body.id;
  console.log(id);
  db.query(
    "UPDATE attrec SET ?? = 1 WHERE StudentID = ?",
    [weekNo, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
        console.log("good");
      }
    }
  );
});

//Da se zna da sam nesto uradio
//Added confirmation message
var port = 3001;
app.listen(port, () => {
  console.log("Running on port " + port);
});
