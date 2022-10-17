import React from "react";
import { useNavigate } from "react-router-dom";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="banner">
      <h1 onClick={() => navigate("/")}>Kiln Yard</h1>
    </div>
  );
};

export default Banner;
