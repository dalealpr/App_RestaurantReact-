import "./Secciones.scss";
import datos from "../../json/Json";
import Card from "../Card/Card";

function Secciones() {
  return (
    <div className="contSecciones">
      {datos.secciones.map((seccion, index: number) => (
        <div key={seccion.id} className="cont-Sec" id={`categoria${index}`}>
          <h3 className="titleSec">{seccion.nombre}</h3>
          {datos.carta[seccion.key as keyof typeof datos.carta]?.map(
            (plato) => (
              <Card
                key={plato.id}
                title={plato.nombre}
                description={plato.descripcion}
                price={plato.precio}
                imgSrc={plato.img}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default Secciones;
