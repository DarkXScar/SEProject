import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./scanner-style.css";

const BackButton = () => {
  // Faruk's part
  return (
    <div>
      <Link to="/home">
        <Button variant="secondary" className="btn-fit">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;
