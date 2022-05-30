//style
import "../scanner-style.css";
import { Container } from "react-bootstrap";
//libraries and functions
import { BrowserMultiFormatReader, BarcodeFormat } from "@zxing/browser";
import DecodeHintType from "@zxing/library/cjs/core/DecodeHintType";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
import Axios from "axios";
//Components
import PopUp from "./PopUp";

const Zxing = () => {
  //used to show notification
  const [studentName, setStudentName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const video = useRef();
  const { width } = useWindowDimensions();

  useEffect(() => {
    // Nedim's part
    Axios.get("http://localhost:3001/week").then((response) => {
      if (response) {
        console.log(response.data);
        Scanner();
      } else {
        console.log("NE MOZE");
      }
    });
  });

  let id = 0;
  const Scanner = () => {
    // Faruk's part
    const hints = new Map();
    //added code_39 format just in case
    const formats = [BarcodeFormat.QR_CODE, BarcodeFormat.CODE_39];
    hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
    const codeReader = new BrowserMultiFormatReader(hints, {
      delayBetweenScanAttempts: 2000,
      delayBetweenScanSuccess: 3000,
    });
    codeReader.decodeFromVideoDevice(undefined, video.current, (result) => {
      //here we will query the code scanned
      if (typeof result !== "undefined") {
        //here the ID is set to the scanned value
        id = result.text;
        attendance();
      }
    });
  };

  const attendance = () => {
    // Nedim's part
    console.log(id);
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
    <div>
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
      <Container className="d-flex justify-content-center w-100 p-3">
        <video
          ref={video}
          width={width}
          muted
          className="border border-danger border-width-3"
        ></video>
      </Container>
    </div>
  );
};
export default Zxing;
