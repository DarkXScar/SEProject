import Axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../accordion-style.css";

const Accordion = () => {
  const navigate = useNavigate();
  let [data, setCourses] = useState([{}]);

  const cont = (courseCode) => {
    // Nedim's part
    console.log(courseCode);
    Axios.post("http://localhost:3001/courseName", {
      courseCode: courseCode,
    });
  };

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

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
  }, []);

  return (
    // Mirza's part
    <div className="wrapper pt-5">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item ">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.CourseName}</h2>
              <span>
                <div className="btnDiv ">
                  <button
                    className="regBtn bg-light"
                    type="submit"
                    onClick={() => {
                      cont(item.CourseCode);
                      navigate("/scanner");
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3126/3126571.png"
                      width="20"
                    />
                  </button>
                  <button
                    className="regBtn bg-light"
                    type="submit"
                    onClick={() => {
                      cont(item.CourseCode);
                      navigate("/attendance-table");
                    }}
                  >
                    {" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/103/103091.png"
                      width="20"
                    />
                  </button>
                </div>
              </span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              <div className="text-light">
                Course code: {item.CourseCode} <br></br>
                Classroom: {item.RoomNumber}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
