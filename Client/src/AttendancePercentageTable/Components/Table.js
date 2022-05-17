import "../Table.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Table() {
	return (
		<div className='App'>
			<NextPageBtn next='/home' />
			<div className='center-button'>
				<Link to='/attendance-all-weeks'>
					<button
						type='button'
						className='fixed-top button btn btn-lg btn-danger'
					>
						Full table
					</button>
				</Link>
			</div>
			<Container className='d-flex justify-content-center'>
				<div className='button-margin'>
					<table className='table w-100'>
						<thead>
							<tr className='bg-danger text-light'>
								<th scope='col'>Name</th>
								<th scope='col'>%</th>
							</tr>
						</thead>
						<tbody>
							{data.map((val, key) => {
								return (
									<tr key={key}>
										<Link
											to='../attendance-individual'
											className='link-secondary'
										>
											<td className='text-center'>{val.name}</td>
										</Link>
										<td className='text-center'>{val.percentageStatus}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Container>
		</div>
	);
}
const data = [
	{ name: "Mirza Redzepovic", id: 190302033, percentageStatus: "10%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Subham", id: 201222333, percentageStatus: "75%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
	{ name: "Megha", id: 190305802, percentageStatus: "50%" },
];

export default Table;
