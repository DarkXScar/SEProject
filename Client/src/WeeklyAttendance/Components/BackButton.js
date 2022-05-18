import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../WeekTable-style.css";

const BackButton = () => {
	return (
		<div>
			<Link to='/attendance-table'>
				<Button variant='secondary' className='top-left btn-fit'>
					Back
				</Button>
			</Link>
		</div>
	);
};

export default BackButton;
