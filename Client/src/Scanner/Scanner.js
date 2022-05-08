//Bootstrap comonponents
import { Container, Row, Col } from "react-bootstrap";

//Components
import Zxing from "./Components/Zxing";
import ManualAdd from "./Components/ManualAdd";

const Scanner = () => {
	return (
		<>
			<Container>
				<Row>
					<Zxing />
				</Row>
				<Row>
					<div className='w-5 d-flex justify-content-center'>
						<ManualAdd />
					</div>
				</Row>
			</Container>
		</>
	);
};

export default Scanner;
