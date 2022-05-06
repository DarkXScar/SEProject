import { useState } from "react";

const ManualAdd = () => {
	const submitHandler = (e) => {};

	return (
		<div>
			<h2>Add Student Manually</h2>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor='studentId'>ID: </label>
					<input type='text' required id='studentId' />
				</div>
				<div>
					<button>Cancel</button>
					<button>Add</button>
				</div>
			</form>
		</div>
	);
};

export default ManualAdd;
