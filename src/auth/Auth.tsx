import React, { useState } from "react";
import Login from "./pages/Login";
import HomeLogin from "./pages/HomeDashboard";
import "./Auth.scss";

function Auth() {
  const [usuario, setUsuario] = useState(null);

  return <div className="authCont">{usuario ? <HomeLogin /> : <Login />}</div>;
}

export default Auth;
