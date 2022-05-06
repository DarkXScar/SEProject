import React from "react";
import { Button } from "react-bootstrap";
import "./scanner-style.css";

const AddButton = ({ item }) => {
	return (
		<>
			<Button variant='primary btn-fit'>{item}</Button>
		</>
	);
};

export default AddButton;
