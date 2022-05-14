import Axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import "../accordion-style.css";

const Accordion = () => {
  let [data, setCourses] = useState([{}]);

  const [selected, setSelected] = useState(null);
  /*const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };*/

  useEffect(() => {
    Axios.post("http://localhost:3001/login", {
      username: "kanita.h",
      password: "kanita1234",
    }).then((response) => {
      if (response.data.message) {
        console.log(response);
        //setLoginStatus(response.data.message);
      } else {
        console.log(response);
        //setLoginStatus(response.data[0].ProfessorName);
      }
    });
  });
  useEffect(() => {
    Axios.post("http://localhost:3001/accordion", {
      courses: data,
    }).then((response) => {
      if (response.data) {
        setCourses(response.data);
      } else {
        console.log("Not working");
      }
    });
  });

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className=" title accordion-button bg-dark text-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {item.CourseName}
                <div className="button1-box col-lg-12 ">
                  <button
                    className="btn-primary-spacing btn-space btn btn-light btn-block"
                    role="button"
                  >
                    {" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3126/3126571.png"
                      width="20"
                    />
                  </button>
                  <button
                    className="btn-primary-spacing btn btn-light"
                    role="button"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/103/103091.png"
                      width="20"
                    />
                  </button>
                </div>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show bg-danger text-light"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>{item.CourseCode}</p> <br></br>
                <p>{item.RoomNumber}</p>
                <br></br>
                <p>{item.CourseProfessor}</p>
                <br></br>
                <p>description</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
