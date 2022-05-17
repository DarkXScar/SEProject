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
      students: students,
      data: data,
    }).then((response) => {
      if (response) {
        console.log(response.data);
        setStudents(response.data);
        //data = response.data;
        //calcPercentage(data);
      } else {
        console.log("Error");
      }
    });
  }, []);

  return (
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
                    >
                      <td className="text-center">{val.name}</td>
                    </Link>
                    <td className="text-center">{val.percentageStatus}</td>
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
