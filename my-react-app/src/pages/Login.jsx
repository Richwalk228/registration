import Registration from "./Registration";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const storedperson = localStorage.getItem('person');
    const user = storedperson ? JSON.parse(person.username) : null;
    return (
      <>
      

  <div className="login-containier">
    
    
    <span>Username</span>

<input className="logUsername" type="text" placeholder="Username"/>
<br/>
<span>Password</span>
<input className="logPassword" type="text" placeholder="Password"/>
<button className="logbtn" >Login</button>
<br />
<div className="logText"><button onClick={() => navigate("/registration")}>Create an account</button> </div>


  </div>

  </>
    );
}
  export default Login;
  