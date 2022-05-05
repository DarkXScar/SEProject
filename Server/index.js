const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const { query } = require("express");

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

//Da se zna da sam nesto uradio
//Added confirmation message
var port = 3001;
app.get("/", function (request, response, next) {
  response.send("Running on port " + port);
});

app.listen(port, () => {
  console.log("Running on port" + port);
});

//----------------------------------------------------------------------------------------------------
//Ziga's work

//Testing Variables
var inputID = 190302192;

var NameList = [];
NameList.push("Faruk");
NameList.push("Nedim");
NameList.push("Edin");
NameList.push("Mirza");
var weekNo = 0;

//Finds which week the class is in based on data filled so far
function WeekFinder() {
  var n = 0;
  for (let i = 1; i <= 15; i++) {
    db.query(
      "SELECT * FROM attrec WHERE ?? = 'null'",
      ["Week" + i],
      function (err, result, fields) {
        if (err) throw err;
        if (result.length == 0) {
          n++;
        }
        weekNo = n;
        console.log("Week " + weekNo);
      }
    );
  }
}

//Sets everyone as absent for certain week, takes week number
//Meant to be used just before scanning
function All0(weekCount) {
  db.query(
    "UPDATE attrec SET ?? = '0'",
    ["Week" + weekCount],
    function (err, result, fields) {
      if (err) throw err;
    }
  );
}

//Marks the scanned students as present in the database
//Takes arr input (containing student names), and week number
function Inserter(input, weekCount) {
  for (let i = 0; i < input.length; i++) {
    db.query(
      "UPDATE attrec SET ?? = '1' WHERE studentName = ?",
      ["Week" + weekCount, input[i]],
      function (err, result, fields) {
        if (err) throw err;
      }
    );
  }
}

//Check if given id is in the database, if yes, stores name linked to ID in arr
function checkAndStore(inputID) {
  db.query(
    "SELECT studentID FROM students WHERE studentID = ?",
    [inputID],
    function (err, result, fields) {
      if (err) throw err;
      if (result.length == 0) {
        console.log("No student with that ID");
      } else {
        console.log("Student Found!");
        NameList.push(result[0].studentName);
      }
    }
  );
}
