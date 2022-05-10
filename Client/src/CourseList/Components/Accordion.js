import Axios from "axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../accordion-style.css";

const Accordion = () => {
	let [data, setCourses] = useState([{}]);

	const [selected, setSelected] = useState(null);
	const toggle = (i) => {
		if (selected == i) {
			return setSelected(null);
		}
		setSelected(i);
	};

	useEffect(() => {
		Axios.post("http://localhost:3001/accordion", {
			courses: data,
		}).then((response) => {
			if (response) {
				setCourses(response.data);
			} else {
				console.log("Not working");
			}
		});
	});

	return (
		<div className='wrapper'>
			<div className='accordion'>
				{data.map((item, i) => (
					<div className='item'>
						<div className='title' onClick={() => toggle(i)}>
							<h2>{item.CourseName}</h2>
							<span>
								<div class='btnDiv'>
									<Link to='/scanner'>
										<button class='regBtn' type='submit'>
											Scan
										</button>
									</Link>
									<Link to='/attendance-table'>
										<button class='regBtn' type='submit'>
											%
										</button>
									</Link>
								</div>
								{selected == i ? "-" : "+"}
							</span>
						</div>
						<div className={selected == i ? "content show" : "content"}>
							{item.CourseProfessor}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
