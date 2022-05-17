import "../table-style.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";

const AttendanceToday = () => {
	return (
		<div className='App'>
			<NextPageBtn next='/home' />
			<table>
				<tr className='bg-danger text-light'>
					<th>Name</th>
					<th>Attendance status</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td className='text-center'>{val.name}</td>
							<td className='text-center'>{val.attendanceStatus}</td>
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

export default AttendanceToday;