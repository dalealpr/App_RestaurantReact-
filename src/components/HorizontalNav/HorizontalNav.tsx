// Libraryes
import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import "./HorizontalNav.scss";
import secciones from "../../json/Json";

function HorizontalNav() {
  const [isFixed, setIsFixed] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const observerRef = useRef<null | MutationObserver>(null);

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

  useEffect(() => {
    const targetNode = document.getElementById("navUl");

    if (!targetNode) {
      return;
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const addedNodes = Array.from(mutation.addedNodes) as HTMLElement[];
        addedNodes.forEach((node) => {
          if (node.classList.contains("active")) {
            despHorizontal(node.id);
          }
        });
      });
    });

    const config = { childList: true, subtree: true };
    observer.observe(targetNode, config);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []); // Ejecutar el efecto solo una vez al montar el componente

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
          {secciones.map((seccion, index) => (
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
