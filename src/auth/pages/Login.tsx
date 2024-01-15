import "./Login.scss";

function Login() {
  return (
    <div>
      <div className="loginCont">
        <form className="loginForm" action="">
          <h2 className="titleLogin">Inicia sesión</h2>
          <div className="contLabelInput">
            <label className="labelFormS" htmlFor="">
              Usuario:
            </label>
            <input className="inputFormS" type="email" />
          </div>
          <div className="contLabelInput">
            <label className="labelFormS" htmlFor="">
              Contraseña:
            </label>
            <input className="inputFormS" type="password" />
          </div>
          <button className="btnFormLogin">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
