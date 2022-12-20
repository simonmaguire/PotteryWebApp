import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isUserAuth } from "../API";

const Banner = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<String | null>(null);
  useEffect(() => {
    console.log("check user");
    isUserAuth().then((res) => {
      setUsername(res.data.isLoggedIn ? res.data.username : null);
    });
  }, []);

  return (
    <div id="banner">
      <h1 onClick={() => navigate("/")}>Kiln Yard</h1>
      <div>
        <h3>
          hello <strong>{username}</strong>
        </h3>
        {username && (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setUsername(null);
            }}
          >
            Logout
          </button>
        )}
        {!username && (
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
