import "../Table.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import { Link } from "react-router-dom";

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
			<div className='button-margin'>
				<br></br>
				<br></br>
				<table>
					<tr className='bg-danger text-light'>
						<th>Name</th>
						<th>%</th>
					</tr>
					{data.map((val, key) => {
						return (
							<tr key={key}>
								<Link to='../attendance-individual' className='link-secondary'>
									<td className='text-center'>{val.name}</td>
								</Link>
								<td className='text-center'>{val.percentageStatus}</td>
							</tr>
						);
					})}
				</table>
			</div>
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
