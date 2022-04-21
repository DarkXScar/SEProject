import React from "react";
import { Button } from "react-bootstrap";

const addStudent = ({ item }) => {
	return (
		<>
			<Button variant='primary'> {item} </Button>
		</>
	);
};

export default addStudent;
