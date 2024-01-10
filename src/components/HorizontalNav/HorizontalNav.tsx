// Libraryes
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import "./HorizontalNav.scss";
import datos from "../../json/Json";

function HorizontalNav() {
  const [isFixed, setIsFixed] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  // const [claseActivaRef, setClaseActivaRef] = useState("");

  console.log(datos);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const triggerOffset = 100;

      setIsFixed(offset > triggerOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.scrollTo(0, window.scrollY - 100);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cambiofirstClick = () => {
    if (firstClick) {
      setFirstClick(false);
    }
  };

  // useEffect(() => {
  //   const targetElement = document.getElementById("navUl");
  //   console.log("TE");

  //   if (targetElement != null) {
  //     const activeElement = [...targetElement.children].forEach(
  //       (child) => console.log(child.className)
  //       child.className === "active" ? setClaseActivaRef(child.id) : 0
  //     );
  //   }
  // }, []);

  const despHorizontal = (key: string) => {
    if (key != null) {
      const divUl = document.getElementById("navUl");
      const targetElement = document.getElementById(key);

      if (divUl != null && targetElement != null) {
        const containerWidth = divUl.clientWidth;
        const targetWidth = targetElement.clientWidth;
        const scrollLeftValue =
          targetElement.offsetLeft - (containerWidth - targetWidth) / 2;
        divUl.scrollTo({
          left: scrollLeftValue,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={`contHorNav ${isFixed ? "fixed" : ""}`}>
      <div>
        <ul className="navUl" id="navUl">
          {datos.secciones.map((seccion, index) => (
            <li className="nav-item" id={seccion.key} key={seccion.id}>
              <Link
                to={`categoria${index}`}
                spy={true}
                smooth={true}
                duration={400}
                offset={firstClick ? -162 : index === 0 ? -105 : -106}
                className="nav-link"
                onClick={() => {
                  cambiofirstClick();
                  despHorizontal(seccion.key);
                }}
              >
                {seccion.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HorizontalNav;
