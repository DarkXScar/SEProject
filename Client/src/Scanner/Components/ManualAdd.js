import { useState } from "react";
import {
	Modal,
	Button,
	ModalBody,
	ModalTitle,
	ModalHeader,
	Form,
} from "react-bootstrap";
import "./scanner-style.css";

const ManualAdd = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='primary btn-fit' onClick={handleShow}>
				Add
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Student by ID</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3' controlId='studentID'>
							<Form.Label>ID: </Form.Label>
							<Form.Control type='text' placeholder='190302000' autoFocus />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' className='btn-fit' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' className='btn-fit' onClick={handleClose}>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ManualAdd;
