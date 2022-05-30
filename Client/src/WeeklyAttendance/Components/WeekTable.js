import "../WeekTable-style.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import BackButton from "./BackButton";

function WeekTable() {
  let [students, setStudents] = useState([{}]);

  useEffect(() => {
    // Edin's part
    Axios.post("http://localhost:3001/allstudents", {
      students: students,
    }).then((response) => {
      if (response) {
        setStudents(response.data);
      } else {
        console.log("Error");
      }
    });
  });

  const didAttend = (val) => {
    if (val === null) return "";
    else if (val) return "+";
    else return "-";
  };

  return (
    // Mirza's part
    <div>
      <div className="App">
        <BackButton />
        <Container className="spacing">
          <Row>
            <Col>
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr className="bg-danger">
                      <th>Name</th>
                      <th>Week 1</th>
                      <th>Week 2</th>
                      <th>Week 3</th>
                      <th>Week 4</th>
                      <th>Week 5</th>
                      <th>Week 6</th>
                      <th>Week 7</th>
                      <th>Week 8</th>
                      <th>Week 9</th>
                      <th>Week 10</th>
                      <th>Week 11</th>
                      <th>Week 12</th>
                      <th>Week 13</th>
                      <th>Week 14</th>
                      <th>Week 15</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td className="text-center">{val.StudentName}</td>
                          <td className="text-center">
                            {didAttend(val.Week1)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week2)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week3)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week4)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week5)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week6)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week7)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week8)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week9)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week10)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week11)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week12)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week13)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week14)}
                          </td>
                          <td className="text-center">
                            {didAttend(val.Week15)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <NextPageBtn next="/home" />
    </div>
  );
}

export default WeekTable;
