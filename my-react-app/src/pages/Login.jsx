import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Login() {
  const navigate = useNavigate();
  const storedPerson = localStorage.getItem("person");
  const user = storedPerson ? JSON.parse(storedPerson) : null;

  const isLightTheme = useTheme((x) => x.isLightTheme);
  const setIsLightTheme = useTheme((x) => x.setIsLightTheme);
  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function checkLogin() {
    setError(null);
    const people = JSON.parse(localStorage.getItem("people")) ?? [];
    const match = people.find(
      (x) => x.username === username && x.password === password
    );
    if (match) {
      localStorage.setItem("currentUser", JSON.stringify(match));
      navigate("/market");
    } else {
      setError("Wrong credentials brah. Try again.");
    }
  }

  return (
    <>
      <button className="ld-btn" onClick={toggleTheme}>
        {isLightTheme ? <SunIcon /> : <MoonIcon />}
      </button>
      {error ? <div>{error}</div> : null}
      <div
        className={isLightTheme ? "login-containier" : "login-container-dark"}
      >
        <span>Username</span>
        <input
          className="logUsername"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <span>Password</span>
        <input
          className="logPassword"
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="logbtn" onClick={checkLogin}>
          Login
        </button>
        <br />
        <div className="logText">
          <button onClick={() => navigate("/registration")}>
            Create an account
          </button>{" "}
        </div>
      </div>
    </>
  );
}
export default Login;
