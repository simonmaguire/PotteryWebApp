import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { addPot } from "../../API";

const Options: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/new")}>Add Pot</Button>
    </div>
  );
};

export default Options;
