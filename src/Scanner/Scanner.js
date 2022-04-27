import { Container, Row, Col } from "react-bootstrap";
import Zxing from "./Components/Zxing";
import AddButton from "./Components/AddButton";
import PopUp from "./Components/PopUp";

const Scanner = () => {
	return (
		<>
			<Container>
				<Row>
					<Zxing />
					<Container className='w-50'>
						<Row>
							<Col>
								<div className='w-10 justify-content-end d-flex'>
									<AddButton item={"Add"} />
								</div>
							</Col>
							<Col>
								<div className='w-10 justify-content-end d-flex'>
									<AddButton item={"Done"} />
								</div>
							</Col>
						</Row>
					</Container>
				</Row>
			</Container>
		</>
	);
};

export default Scanner;
