import "../table-style.css";
import { useEffect, useState } from "react";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "axios";

const AttendanceToday = () => {
  let [data, setData] = useState([{}]);

  useEffect(() => {
    // Edin's part
    Axios.post("http://localhost:3001/attendancetoday", {
      data: data,
    }).then((response) => {
      if (response.data) {
        setData(response.data);
      } else console.log("ERROR");
    });
  });

  const didAttend = (val) => {
    if (val === null) return "";
    else if (val) return "+";
    else return "-";
  };

  return (
    // Mirza's part
    <div className="App">
      <NextPageBtn next="/home" />
      <Container>
        <Row>
          <Col>
            <table>
              <tr className="bg-danger text-light">
                <th>Name</th>
                <th>Attendance status</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className="text-center">{val.StudentName}</td>
                    <td className="text-center">
                      {didAttend(val.attendanceStatus)}
                    </td>
                  </tr>
                );
              })}
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AttendanceToday;
