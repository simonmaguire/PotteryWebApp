import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Options: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/pot/new")}>Add Pot</Button>
    </div>
  );
};

export default Options;
