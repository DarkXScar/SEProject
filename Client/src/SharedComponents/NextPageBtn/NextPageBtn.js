import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./style.css";
const NextPageBtn = ({ next }) => {
  // Faruk's part
  return (
    <div className="bottom-right">
      <Link to={next}>
        <Button variant="primary btn-fit">Done</Button>
      </Link>
    </div>
  );
};

export default NextPageBtn;
