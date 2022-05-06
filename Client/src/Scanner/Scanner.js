//Bootstrap comonponents
import { Container, Row, Col } from "react-bootstrap";

//Components
import Zxing from "./Components/Zxing";
import AddButton from "./Components/AddButton";
import PopUp from "./Components/PopUp";

const Scanner = () => {
	return (
		<>
			<Container>
				<Row>
					<Zxing />
				</Row>
				<Row>
					<div className='w-5 d-flex justify-content-center'>
						<AddButton item={"Add"} />
					</div>
				</Row>
			</Container>
		</>
	);
};

export default Scanner;
