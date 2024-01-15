import Login from "./pages/Login";
//import HomeLogin from "./pages/HomeDashboard";
import "./Auth.scss";

function Auth() {
  //const [usuario, setUsuario] = useState(null);

  return <div className="authCont">{<Login />}</div>;
}

export default Auth;
