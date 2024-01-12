import "./QuienesSomos.scss";
import imgRestaurante from "../assets/img/restaurant.png";

function QuienesSomos() {
  return (
    <div className="contQuienesSomos">
      <h2 className="titleQS">Quienes Somos</h2>
      <img className="imgQS" alt="" src={imgRestaurante} />
      <p className="textQS">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
        veritatis, similique mollitia unde necessitatibus itaque iste quas dolor
        cum architecto numquam deleniti perferendis exercitationem odit? Dolorem
        neque reiciendis eum earum!
      </p>
      <p className="textQS">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
        veritatis, similique mollitia unde necessitatibus itaque iste quas dolor
        cum architecto numquam deleniti perferendis exercitationem odit? Dolorem
        neque reiciendis eum earum!
      </p>
    </div>
  );
}

export default QuienesSomos;
