import "./Card.scss";

interface CardProps {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
}

function Card({ title, description, price, imgSrc }: CardProps) {
  return (
    <div className="cardCont">
      <div className="cardText">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardP">{description}</p>
        <p className="cardPrice">${price}</p>
      </div>
      <div className="cardImgCont">
        <img className="cardImg" src={imgSrc} />
      </div>
    </div>
  );
}

export default Card;
