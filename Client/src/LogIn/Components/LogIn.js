//Libraries
import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
//Style
import "../login-style.css";
//Images
import user from "../Images/user.png";
import email from "../Images/email.png";
import unlock from "../Images/unlock.png";

function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logInStatus, setLogInStatus] = useState("");

  const login = () => {
    // Edin's part
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLogInStatus(response.data.message);
      } else {
        console.log(response);
        navigate("/home");
      }
    });
  };

  return (
    // Mirza's part
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="log-in-image">
            <div className="image-container">
              <img src={user} alt="user icon" className="user" />
            </div>
          </div>
          <div>
            <h1>Log-in page</h1>

            <div>
              <img src={email} alt="Mail icon" className="email" />
              <input
                type="text"
                placeholder="Username"
                className="name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="pass-input">
              <img src={unlock} alt="Password icon" className="password" />
              <input
                type="password"
                placeholder="Password"
                className="name"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="log-in-btn">
              <h6>{logInStatus}</h6>
              <button onClick={login}>Log-in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
