//libraries
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
//style
import "./scanner-style.css";
//components
import PopUp from "./PopUp";
import Axios from "axios";

const ManualAdd = () => {
  // Faruk's part
  const [show, setShow] = useState(false);
  const [inputId, setInputId] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [studentName, setStudentName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onButtonClick = () => {
    handleClose();
    setShowToast(true);
    addStudent(inputId);
  };

  const addStudent = (id) => {
    // Nedim's part
    Axios.post("http://localhost:3001/attendance", {
      id: id,
    }).then((response) => {
      if (response.data.message) {
        setStudentName(response.data.message);
      } else {
        console.log(response.data);
        setStudentName(response.data[0].StudentName);
      }
    });
    //Notification is triggered
    setShowToast(true);
  };

  return (
    // Faruk's part
    <>
      <div className="popup-top">
        <PopUp
          show={showToast}
          onClose={() => setShowToast(false)}
          header={
            studentName === "Invalid ID!"
              ? "Student was not added."
              : "Student added."
          }
        >
          {studentName}
        </PopUp>
      </div>

      <Button variant="primary btn-fit" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student by ID</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="studentID">
              <Form.Label>ID: </Form.Label>
              <Form.Control
                type="text"
                placeholder="190302000"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="btn-fit" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="btn-fit"
            onClick={onButtonClick}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ManualAdd;
