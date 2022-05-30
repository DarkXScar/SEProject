const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const axios = require("axios");

const app = express();

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
app.use(bodyParser.urlencoded({ extended: true }));

let ProfName = "";
// Edin's part
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
      } else res.send({ message: "Wrong username/password!" });
    }
  );
});
// Nedim's part
app.post("/accordion", (req, res) => {
  let courses = req.body.courses;

  setTimeout(() => {
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
  }, Timer);
});

let courseCode = "";
app.post("/courseName", (req, res) => {
  let courseC = req.body.courseCode;
  console.log(courseC);

  courseCode = courseC.toLowerCase();

  console.log(courseCode);
});

let weekNo = "";
const Timer = 500;
app.get("/week", (req, res) => {
  let n = 1;
  setTimeout(() => {
    for (let i = 1; i <= 15; i++) {
      db.query(
        "SELECT * FROM ?? WHERE ?? IS NULL",
        [courseCode, "Week" + i],
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
  }, Timer);
  setTimeout(() => {
    weekNo = "Week" + n;
    res.send("Week" + n);
  }, 2 * Timer);
});

app.post("/attendance", (req, res) => {
  console.log(weekNo);
  const id = req.body.id;

  db.query(
    "UPDATE ?? SET ?? = 1 WHERE StudentID = ?",
    [courseCode, weekNo, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
  setTimeout(() => {
    db.query(
      "SELECT StudentName FROM ?? WHERE StudentID = ?",
      [courseCode, id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Invalid ID!" });
        }
      }
    );
  }, Timer);

  console.log("good");
});

const getName = (id, courseCode) => {
  db.query(
    "SELECT StudentName FROM ?? WHERE StudentID = ?",
    [courseCode, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        return result;
      }
    }
  );
};
// Edin's part
setTimeout(() => {
  app.post("/attendancetoday", (req, res) => {
    let data = req.body.data;

    db.query(
      "SELECT StudentName,?? FROM ??",
      [weekNo, courseCode],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          data = result;
          for (let i = 0; i < result.length; i++) {
            data[i].attendanceStatus = result[i][weekNo];
          }
          res.send(data);
        }
      }
    );
  });
}, 2 * Timer);
let studId = "";
app.post("/findid", (req, res) => {
  studId = req.body.id;
});

app.post("/attendanceindividual", (req, res) => {
  let data = req.body.data;
  console.log("Tu sam");
  db.query(
    "SELECT Week1, Week2, Week3, Week4, Week5, Week6, Week7, Week8, Week9, Week10, Week11, Week12, Week13, Week14, Week15 FROM ?? WHERE StudentID = ?",
    [courseCode, studId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        for (let i = 1; i <= 15; i++) {
          let currWeek = "Week" + i;

          data[i - 1] = {
            weekNumber: "Week " + i,
            attendanceStatus: result[0][currWeek],
          };
        }
        console.log(data);
        res.send(data);
      }
    }
  );
});

let percentage = 0;
// Nedim's part
app.post("/allstudentsweek", (req, res) => {
  let students = req.body.students;
  let data = req.body.data;

  db.query(
    "SELECT StudentName,StudentID FROM ??",
    [courseCode],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        students = result;
      }
    }
  );

  setTimeout(() => {
    db.query("SELECT * FROM ??", [courseCode], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        data = calc(result, students);
        console.log(data);
        res.send(data);
      }
    });
  }, Timer);
});

const calc = (result, students) => {
  for (let j = 0; j < students.length; j++) {
    let att = 0;
    let all = 0;
    for (let i = 1; i <= 15; i++) {
      let currWeek = "Week" + i;

      if (result[j][currWeek] != null) {
        if (result[j][currWeek] === 1) {
          att++;
          all++;
        } else {
          all++;
        }
        percentage = Math.round((att / all) * 100) + "%";
      }
    }
    students[j].percentageStatus = percentage;
  }
  return students;
};
// Edin's part
app.get("/allelse", (req, res) => {
  console.log("evo me");
  db.query("UPDATE ?? SET ?? = '0' WHERE ?? IS NULL", [
    courseCode,
    weekNo,
    weekNo,
  ]);
});

app.post("/allstudents", (req, res) => {
  let students = req.body.students;

  db.query("SELECT * FROM ??", [courseCode], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      students = result;
      res.send(result);
    }
  });
});

//Added confirmation message
var port = 3001;
app.listen(port, () => {
  console.log("Running on port " + port);
});
