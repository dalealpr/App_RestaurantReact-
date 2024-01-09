import "./Secciones.scss";
import secciones from "../../json/Json";

function Secciones() {
  return (
    <div className="contSecciones">
      {secciones.map((seccion, index: number) => (
        <div key={seccion.id} className="cont-Sec" id={`categoria${index}`}>
          <h3 className="titleSec">{seccion.nombre}</h3>
          <p style={{ color: "white", fontSize: "16px", marginTop: "15px" }}>
            Plato 1
          </p>
          <p style={{ color: "white", fontSize: "16px" }}>Plato 2</p>
          <p style={{ color: "white", fontSize: "16px" }}>Plato 3</p>
          <p style={{ color: "white", fontSize: "16px" }}>Plato 4</p>
        </div>
      ))}
    </div>
  );
}

export default Secciones;
