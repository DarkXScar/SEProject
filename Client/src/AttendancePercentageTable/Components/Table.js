import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Table.css";

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
      <table>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>%</th>
        </tr>
        {students.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.StudentName}</td>
              <td>{val.StudentID}</td>
              <td>{val.percentageStatus}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
