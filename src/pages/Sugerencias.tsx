import "./Sugerencias.scss";

function Sugerencias() {
  return (
    <div className="contSugerencias">
      <h2 className="titleSugerencias">Sugerencias</h2>

      <form action="" className="formSugerencias">
        <div className="contLabelInput">
          <label className="labelFormS" htmlFor="">
            Nombres *
          </label>
          <input className="inputFormS" type="text" />
        </div>
        <div className="contLabelInput">
          <label className="labelFormS" htmlFor="">
            Correo *
          </label>
          <input className="inputFormS" type="text" />
        </div>
        <div className="contLabelInput">
          <label className="labelFormS" htmlFor="">
            Sucursal *
          </label>
          <input className="inputFormS" type="text" />
        </div>
        <div className="contLabelInput">
          <label className="labelFormS" htmlFor="">
            Sugerencias *
          </label>
          <textarea className="textAFormS" name="" id=""></textarea>
        </div>
        <button className="btnFormSugerencias">Enviar</button>
      </form>
    </div>
  );
}

export default Sugerencias;
