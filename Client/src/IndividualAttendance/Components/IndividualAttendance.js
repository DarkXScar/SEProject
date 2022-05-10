import "../table-style.css";

const IndividualAttendance = () => {
	return (
		<div className='App'>
			<table>
				<tr className='bg-danger text-light'>
					<th>Week</th>
					<th>Attendance status</th>
				</tr>
				{data.map((val, key) => {
					return (
						<tr key={key}>
							<td>{val.week}</td>
							<td>{val.attendanceStatus}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

const data = [
	{ week: "Week 1 ", attendanceStatus: "present" },
	{ week: "Week 2", attendanceStatus: "absent" },
	{ week: "Week 3", attendanceStatus: "absent" },
	{ week: "Week 5", attendanceStatus: "present" },
	{ week: "Week 7", attendanceStatus: "absent" },
	{ week: "Week 8", attendanceStatus: "absent" },
	{ week: "Week 9", attendanceStatus: "present" },
	{ week: "Week 11", attendanceStatus: "absent" },
	{ week: "Week 12", attendanceStatus: "present" },
	{ week: "Week 13", attendanceStatus: "present" },
	{ week: "Week 15", attendanceStatus: "present" },
];

export default IndividualAttendance;
