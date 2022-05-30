import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Table.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Table() {
  let data = [{}];
  let [students, setStudents] = useState([{}]);

  useEffect(() => {
    Axios.post("http://localhost:3001/allstudentsweek", {
      // Nedim's part
      students: students,
      data: data,
    }).then((response) => {
      if (response) {
        console.log(response.data);
        setStudents(response.data);
      } else {
        console.log("Error");
      }
    });
  }, []);

  const sendID = (id) => {
    console.log(id);
    Axios.post("http://localhost:3001/findid", {
      id: id,
    });
  };

  const markAttendance = (item) => {
    console.log(item);
    if (parseInt(item) >= 70) return "good-attendance";
    else return "bad-attendance";
  };

  return (
    // Mirza's part
    <div className="App">
      <NextPageBtn next="/home" />
      <div className="center-button">
        <Link to="/attendance-all-weeks">
          <button
            type="button"
            className="fixed-top button btn btn-lg btn-danger"
          >
            Full table
          </button>
        </Link>
      </div>
      <Container>
        <div className="button-margin">
          <table className="table">
            <thead>
              <tr className="bg-danger text-light">
                <th scope="col">Name</th>
                <th scope="col">%</th>
              </tr>
            </thead>
            <tbody>
              {students.map((val, key) => {
                return (
                  <tr key={key}>
                    <Link
                      to="../attendance-individual"
                      className="link-secondary"
                      onClick={() => {
                        console.log(val.StudentID);
                        sendID(val.StudentID);
                      }}
                    >
                      <td className="text-center">{val.StudentName}</td>
                    </Link>
                    <td className={markAttendance(val.percentageStatus)}>
                      {val.percentageStatus}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

export default Table;
