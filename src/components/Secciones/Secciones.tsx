import "./Secciones.scss";

function Secciones() {
  return (
    <div className="contSecciones">
      <div className="cont-Sec" id="categoria0">
        <h3 className="titleSec">Entradas</h3>
        <p style={{ color: "white" }}>entrada 1</p>
        <p style={{ color: "white" }}>entrada 2</p>
        <p style={{ color: "white" }}>entrada 3</p>
      </div>
      <div className="cont-Sec">
        <h3 className="titleSec" id="categoria1">
          Carnes
        </h3>
      </div>
      <div className="cont-Sec">
        <h3 className="titleSec" id="categoria2">
          Pescados
        </h3>
      </div>
      <div className="cont-Sec">
        <h3 className="titleSec" id="categoria3">
          Postres
        </h3>
      </div>
      <div className="cont-Sec">
        <h3 className="titleSec" id="categoria4">
          Aperitivos y Cocteles
        </h3>
      </div>
      <div className="cont-Sec">
        <h3 className="titleSec" id="categoria5">
          Bebidas y Cervezas
        </h3>
      </div>
    </div>
  );
}

export default Secciones;
