//Styles
import "./NavBarMovile.scss";
// Library Animated hamburger
import { Link, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
//Icons
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef, useEffect } from "react";

function NavBarMovile() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Localizacion ruta
  const location = useLocation();

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsSearchVisible(location.pathname === "/");
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // FUNCIONES //
  const handleSearchButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleNavButtonClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      navRef.current &&
      event.target instanceof Node &&
      !navRef.current.contains(event.target)
    ) {
      setIsNavVisible(false);
    }
  };

  return (
    <div>
      <nav ref={navRef} className="NavBar-Movile">
        {/* Menu Hamburguesa */}
        <button className="hambMenu" onClick={handleNavButtonClick}>
          <Hamburger size={23} color="white" toggled={isNavVisible} />
        </button>

        {location.pathname === "/" ? (
          <>
            <div
              className={`buscadorCont ${!isSearchVisible ? "" : "visible"}`}
            >
              <SearchIcon style={{ color: "white", paddingLeft: "10px" }} />
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                className="inputSearch"
                autoComplete="off"
              />
              <button
                onClick={handleSearchButtonClick}
                style={{ display: !isSearchVisible ? "none" : "block" }}
              >
                <CloseIcon
                  style={{ color: "white", paddingRight: "10px" }}
                  className="iconClose"
                />
              </button>
              {/* Boton Buscar */}
            </div>
            <button
              className="btn-search"
              onClick={handleSearchButtonClick}
              style={{ display: !isSearchVisible ? "block" : "none" }}
            >
              <SearchIcon style={{ color: "white" }} className="iconSearch" />
            </button>
          </>
        ) : (
          <Link to="/" className="homeButton">
            <p className="cartaBtn">Carta</p>
          </Link>
        )}

        {/* Menu Desplegable */}
        <div className={`contUl ${isNavVisible ? "visible" : ""}`}>
          <ul>
            <li className="contLi">
              <Link className="contA" onClick={handleNavButtonClick} to="/">
                Inicio
              </Link>
            </li>
            <li className="contLi">
              <Link
                className="contA"
                onClick={handleNavButtonClick}
                to="/quienessomos"
              >
                Quienes somos
              </Link>
            </li>
            <li className="contLi">
              <Link
                className="contA"
                onClick={handleNavButtonClick}
                to="/sedesyhorarios"
              >
                Sedes y Horarios
              </Link>
            </li>
            <li className="contLi">
              <Link
                className="contA"
                onClick={handleNavButtonClick}
                to="/contacto"
              >
                Redes Sociales
              </Link>
            </li>
            <li className="contLi">
              <Link
                className="contA"
                onClick={handleNavButtonClick}
                to="/sugerencias"
              >
                Sugerencias
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarMovile;
