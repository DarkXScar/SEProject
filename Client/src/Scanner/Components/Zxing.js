import "../scanner-style.css";
import { BrowserMultiFormatReader, BarcodeFormat } from "@zxing/browser";
import DecodeHintType from "@zxing/library/cjs/core/DecodeHintType";
import { useEffect, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import useWindowDimensions from "./useWindowDimensions";
import PopUp from "./PopUp";
import { useState } from "react";

const Zxing = ({ children }) => {
  //used to show notification
  const [showToast, setShowToast] = useState(false);
  //student ID which is scanned
  const [id, setId] = useState("");
  const video = useRef();
  const { width } = useWindowDimensions();

  useEffect(() => {
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
        setId(result.text);
        //Notification is triggered
        setShowToast(true);
      }
    });
  }, []);
  // For testing purposes
  // console.log(`this is my ID: ${id}`);

  return (
    <div className="App">
      <PopUp show={showToast} onClose={() => setShowToast(false)}>
        {id}
      </PopUp>
      <Container className="d-flex justify-content-center w-85 p-3">
        <Col className="d-flex w-85 justify-content-center">
          <Row>
            <video ref={video} width={width} muted></video>
          </Row>
        </Col>
      </Container>
    </div>
  );
};
export default Zxing;
