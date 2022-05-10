import "../Table.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";

function Table() {
	return (
		<div className='App'>
			<NextPageBtn next='/home' />
			<div>
				<button
					type='button'
					className='fixed-top button btn btn-lg btn-danger'
				>
					Full table
				</button>
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
								<td>{val.name}</td>
								<td>{val.percentageStatus}</td>
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
