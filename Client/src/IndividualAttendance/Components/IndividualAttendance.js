import "../table-style.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import { Container, Row, Col } from "react-bootstrap";

const IndividualAttendance = () => {
  let [data, setData] = useState([{}]);
  useEffect(() => {
    // Edin's part
    Axios.post("http://localhost:3001/attendanceindividual", {
      data: data,
    }).then((response) => {
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      } else console.log("ERROR");
    });
  }, []);

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
            <div className="w-100">
              <table>
                <tr className="bg-danger text-light">
                  <th>Week</th>
                  <th>Attendance status</th>
                </tr>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td className="text-center">{val.weekNumber}</td>
                      <td className="text-center">
                        {didAttend(val.attendanceStatus)}
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndividualAttendance;
