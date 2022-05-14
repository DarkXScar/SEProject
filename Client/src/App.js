import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Scanner from "./Scanner/Scanner";
import LogIn from "./LogIn/Components/LogIn";
import Accordion from "./CourseList/Components/Accordion";
import Table from "./AttendanceTable/Components/Table";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />

          <Route path="/scanner" element={<Scanner />} />

          <Route path="/home" element={<Accordion />} />

          <Route path="/attendance-table" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
