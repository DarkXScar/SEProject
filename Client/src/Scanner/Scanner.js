//Bootstrap comonponents
import { Container, Row, Col } from "react-bootstrap";

//Components
import Zxing from "./Components/Zxing";
import ManualAdd from "./Components/ManualAdd";
import DoneButton from "./Components/DoneButton";

//style
import "./Components/scanner-style.css";

const Scanner = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Zxing />
					</Col>
				</Row>
				<Row>
					<div className='d-flex'>
						<div className='w-5 center-btn'>
							<ManualAdd />
						</div>

						<div className='w-5 right-btn'>
							<DoneButton />
						</div>
					</div>
				</Row>
			</Container>
		</>
	);
};

export default Scanner;
