import Registration from "./Registration";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const storedPerson = localStorage.getItem("person");
  const user = storedPerson ? JSON.parse(storedPerson) : null;

  function tictic() {
    console.log(storedPerson);
  }

  return (
    <>
      <div className="login-containier">
        <span>Username</span>

        <input className="logUsername" type="text" placeholder="Username" />
        <br />
        <span>Password</span>
        <input className="logPassword" type="text" placeholder="Password" />
        <button className="logbtn" onClick={tictic}>Login</button>
        <br />
        <div className="logText">
          <button
            onClick={() => navigate("/registration")}
          >
            Create an account
          </button>{" "}
        </div>
      </div>
    </>
  );
}
export default Login;
