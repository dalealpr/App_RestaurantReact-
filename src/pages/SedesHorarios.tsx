import "./SedesHorarios.scss";

function SedesHorarios() {
  return (
    <div className="contSedesHorarios">
      <h2 className="titleSH">Sedes y Horarios</h2>

      <div className="contCardSO">
        <h3>Sede Oriente</h3>
        <p>Calle 123, Las Condes</p>
        <p>Lunes a Domingo 11:00Hrs - 23:00Hrs</p>
        <p className="openCloseBtn">• Abierto</p>
      </div>

      <div className="contCardSO">
        <h3>Sede Norte</h3>
        <p>Calle 123, Huechuraba</p>
        <p>Lunes a Domingo 11:00Hrs - 23:00Hrs</p>
        <p className="openCloseBtn">• Abierto</p>
      </div>

      <div className="contCardSO">
        <h3>Sede Sur</h3>
        <p>Calle 123, Puente Alto</p>
        <p>Lunes a Domingo 11:00Hrs - 23:00Hrs</p>
        <p className="openCloseBtn">• Abierto</p>
      </div>
    </div>
  );
}

export default SedesHorarios;
