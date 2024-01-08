// Libraryes
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "./HorizontalNav.scss";

// Array Categorias
const categorias = [
  "Entradas",
  "Carnes",
  "Pescados",
  "Postres",
  "Aperitivos y Cocteles",
  "Bebidas y cervezas",
];

function HorizontalNav() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const changeColor = (index: number) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      // Puedes ajustar este valor según sea necesario
      const triggerOffset = 100;

      setIsFixed(offset > triggerOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`contHorNav ${isFixed ? "fixed" : ""}`}>
      <div>
        <ul className="navUl">
          {
            // .map Categorias
            categorias.map((categoria, index) => {
              return (
                <Link
                  to={`categoria${index}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-108}
                  className="navLi"
                  key={categoria}
                  onSetActive={() => changeColor(index)}
                >
                  <button
                    className={`navLink ${
                      index === selectedIndex ? "active" : ""
                    }`}
                    onClick={() => changeColor(index)}
                  >
                    {categoria}
                  </button>
                </Link>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default HorizontalNav;

// className={`navLink ${
//   index === selectedIndex ? "actived" : ""
// }`}
// onClick={() => changeColor(index)}
