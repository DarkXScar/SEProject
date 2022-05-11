//libraries
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
//style
import "./scanner-style.css";
//components
import PopUp from "./PopUp";

const ManualAdd = () => {
	const [show, setShow] = useState(false);
	const [inputId, setInputId] = useState("");
	const [showToast, setShowToast] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const onButtonClick = () => {
		handleClose();
		setShowToast(true);
	};

	return (
		<>
			<div className='popup-top'>
				<PopUp
					show={showToast}
					onClose={(() => setShowToast(false), (header = "Student added"))}
				>
					{inputId}
				</PopUp>
			</div>

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
							<Form.Control
								type='text'
								placeholder='190302000'
								value={inputId}
								onChange={(e) => setInputId(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' className='btn-fit' onClick={handleClose}>
						Close
					</Button>
					<Button
						variant='primary'
						type='submit'
						className='btn-fit'
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
