import "../table-style.css";

const Table = () => {
	return (
		<div className='App'>
			<table>
				<tr className='bg-danger text-light'>
					<th>Name</th>
					<th>Attendance status</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.name}</td>
							<td>{val.attendanceStatus}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};
const data = [
	{ name: "Mirza Redzepovic", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Subham", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "present" },
	{ name: "Megha", attendanceStatus: "absent" },
	{ name: "Megha", attendanceStatus: "present" },
];

export default Table;
