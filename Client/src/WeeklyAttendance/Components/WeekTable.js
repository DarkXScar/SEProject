import "../WeekTable-style.css";
import NextPageBtn from "../../SharedComponents/NextPageBtn/NextPageBtn";
function WeekTable() {
	return (
		<div>
			<NextPageBtn next='/home' />
			<div className='App'>
				<table>
					<tr className='bg-danger'>
						<th>Name</th>
						<th>Week 1</th>
						<th>Week 2</th>
						<th>Week 3</th>
						<th>Week 4</th>
						<th>Week 5</th>
						<th>Week 6</th>
						<th>Week 7</th>
						<th>Week 8</th>
						<th>Week 9</th>
						<th>Week 10</th>
						<th>Week 11</th>
						<th>Week 12</th>
						<th>Week 13</th>
						<th>Week 14</th>
						<th>Week 15</th>
					</tr>
					{data.map((val, key) => {
						return (
							<tr key={key}>
								<td className='text-center'>{val.name}</td>
								<td className='text-center'>{val.week1}</td>
								<td className='text-center'>{val.week2}</td>
								<td className='text-center'>{val.week3}</td>
								<td className='text-center'>{val.week4}</td>
								<td className='text-center'>{val.week5}</td>
								<td className='text-center'>{val.week6}</td>
								<td className='text-center'>{val.week7}</td>
								<td className='text-center'>{val.week8}</td>
								<td className='text-center'>{val.week9}</td>
								<td className='text-center'>{val.week10}</td>
								<td className='text-center'>{val.week11}</td>
								<td className='text-center'>{val.week12}</td>
								<td className='text-center'>{val.week13}</td>
								<td className='text-center'>{val.week14}</td>
								<td className='text-center'>{val.week15}</td>
							</tr>
						);
					})}
				</table>
			</div>
		</div>
	);
}
const data = [
	{ name: "Mirza", week1: "+", week2: "-" }, //Dodajes vrijednosti sve do week15//
	{ name: "Megha", week1: "+", week2: "+" },
	{ name: "Subham", week1: "-", week2: "+" },
	{ name: "Megha", week1: "-", week2: "-" },
	{ name: "Megha", week1: "+", week2: "+" },
];

export default WeekTable;
