import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Scanner from "./Scanner/Scanner";
import LogIn from "./LogIn/Components/LogIn";
import Accordion from "./CourseList/Components/Accordion";
import Table from "./AttendancePercentageTable/Components/Table";
import AttendanceToday from "./AttendanceToday/Components/AttendanceToday";
import IndividualAttendance from "./IndividualAttendance/Components/IndividualAttendance";
import WeekTable from "./WeeklyAttendance/Components/WeekTable";

function App() {
  // Faruk's part
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />

          <Route path="/scanner" element={<Scanner />} />

          <Route path="/home" element={<Accordion />} />

          <Route path="/attendance-table" element={<Table />} />

          <Route path="/attendance-today" element={<AttendanceToday />} />

          <Route
            path="/attendance-individual"
            element={<IndividualAttendance />}
          />

          <Route path="/attendance-all-weeks" element={<WeekTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
