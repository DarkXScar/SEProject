import './Table.css';

function Table() {
  return (
    <div className="App">
    <table>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>%</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.id}</td>
              <td>{val.percentageStatus}</td>
          </tr>
          )
        })}
      </table>
    </div>
  );
}
const data = [
  { name: "Mirza Redzepovic", id: 190302033, percentageStatus: "10%" },
  { name: "Megha", id: 190305802, percentageStatus: "50%" },
  { name: "Subham", id: 201222333, percentageStatus: "75%"},
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
  { name: "Megha", id: 190305802, percentageStatus: "50%" }
]
  

export default Table;