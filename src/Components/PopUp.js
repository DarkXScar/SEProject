import React from "react";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";
import { useState } from "react";

const PopUp = ({ item }) => {
	const [show, setShow] = useState(false);
	return (
		<Toast
			onClose={() => setShow(false)}
			show={show}
			title='Bootstrap React'
			autohide={true}
			visible={true}
			animation={true}
			delay={2000}
		>
			<ToastHeader close>
				<svg
					className='rounded me-2'
					width='20'
					height='20'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='xMidYMid slice'
					focusable='false'
					role='img'
				>
					<rect width='100%' height='100%' fill='#007aff'></rect>
				</svg>
				<strong className='me-auto'>Student Added</strong>
			</ToastHeader>
			<ToastBody>{item}</ToastBody>
		</Toast>
	);
};

export default PopUp;
