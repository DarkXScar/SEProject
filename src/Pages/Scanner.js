import { Container, Row, Col } from "react-bootstrap";
import Zxing from "../Components/Zxing";
import AddStudent from "../Components/AddStudent";
import PopUp from "../Components/PopUp";

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
									<AddStudent item={"Add"} />
								</div>
							</Col>
							<Col>
								<div className='w-10 justify-content-end d-flex'>
									<AddStudent item={"Done"} />
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
