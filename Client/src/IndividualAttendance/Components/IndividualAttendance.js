import "../table-style.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
import { Container, Row, Col } from "react-bootstrap";

const IndividualAttendance = () => {
	return (
		<div className='App'>
			<NextPageBtn next='/home' />
			<Container>
				<Row>
					<Col>
						<div className='w-100'>
							<table>
								<tr className='bg-danger text-light'>
									<th>Week</th>
									<th>Attendance status</th>
								</tr>
								{data.map((val, key) => {
									return (
										<tr key={key}>
											<td className='text-center'>{val.week}</td>
											<td className='text-center'>{val.attendanceStatus}</td>
										</tr>
									);
								})}
							</table>
						</div>
					</Col>
				</Row>
			</Container>
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
