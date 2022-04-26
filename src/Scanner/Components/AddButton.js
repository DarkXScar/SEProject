import React from "react";
import { Button } from "react-bootstrap";

const AddButton = ({ item }) => {
	return (
		<>
			<Button variant='primary'> {item} </Button>
		</>
	);
};

export default AddButton;
