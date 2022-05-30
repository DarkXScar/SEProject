//Bootstrap comonponents
import { Container, Row, Col } from "react-bootstrap";

//Components
import Zxing from "./Components/Zxing";
import ManualAdd from "./Components/ManualAdd";
import DoneButton from "./Components/DoneButton";
import BackButton from "./Components/BackButton";
//style
import "./Components/scanner-style.css";

const Scanner = () => {
  // Faruk's part
  return (
    <>
      <Container>
        <Row>
          <BackButton />
          <Zxing />
        </Row>
        <Row>
          <div className="d-flex">
            <div className="w-5 center-btn">
              <ManualAdd />
            </div>

            <div className="w-5 right-btn">
              <DoneButton />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Scanner;
