import { useState } from "react";
import "../accordion-style.css";

const Accordion = () => {
	const [selected, setSelected] = useState(null);
	const toggle = (i) => {
		if (selected == i) {
			return setSelected(null);
		}
		setSelected(i);
	};
	return (
		<div className='wrapper'>
			<div className='accordion'>
				{data.map((item, i) => (
					<div className='item'>
						<div className='title' onClick={() => toggle(i)}>
							<h2>{item.question}</h2>
							<span>
								<div class='btnDiv'>
									<button class='regBtn' type='submit'>
										Scan
									</button>
									<button class='regBtn' type='submit'>
										{" "}
										%
									</button>
								</div>
								{selected == i ? "-" : "+"}
							</span>
						</div>
						<div className={selected == i ? "content show" : "content"}>
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;

const data = [
	{
		question: "Course name:",
		answer: "Course id:",
	},
	{
		question: "Course name:",
		answer: "Course id:</br>",
	},
	{
		question: "Sta je bilo oko",
		answer: "Nije nista okano",
	},
];
