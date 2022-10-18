import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();

  return (
    <div id="gallery-options">
      <Button onClick={() => navigate("/pot/new")}>Add Pot</Button>
    </div>
  );
};

export default Options;
