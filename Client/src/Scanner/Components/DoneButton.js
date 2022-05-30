import Axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./scanner-style.css";

const DoneButton = () => {
  // Faruk's part
  const allElse = () => {
    Axios.get("http://localhost:3001/allelse");
  };

  return (
    <>
      <Link to="/attendance-today">
        <Button
          variant="primary btn-fit"
          type="button"
          onClick={() => allElse()}
        >
          Done
        </Button>
      </Link>
    </>
  );
};

export default DoneButton;
