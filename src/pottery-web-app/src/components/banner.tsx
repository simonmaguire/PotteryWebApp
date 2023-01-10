import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserAuth } from "../API";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div id="banner">
      <h1 onClick={() => navigate("/")}>Kiln Yard</h1>
      <div className="auth-buttons">
        {localStorage.getItem("token") && (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
        {!localStorage.getItem("token") && (
          <div>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
