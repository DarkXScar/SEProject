import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./scanner-style.css";

const DoneButton = () => {
	return (
		<>
			<Link to='../home'>
				<Button variant='primary btn-fit' type='button'>
					Done
				</Button>
			</Link>
		</>
	);
};

export default DoneButton;
