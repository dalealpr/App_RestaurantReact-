//Styles
import "./NavBarMovile.scss";
// Library Animated hamburger
import { Squash as Hamburger } from "hamburger-react";
//Icons
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef, useEffect } from "react";

function NavBarMovile() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

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

        {/* Barra de busqueda */}
        <div className={`buscadorCont ${isSearchVisible ? "" : "visible"}`}>
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
            style={{ display: isSearchVisible ? "none" : "block" }}
          >
            <CloseIcon
              style={{ color: "white", paddingRight: "10px" }}
              className="iconClose"
            />
          </button>
        </div>

        {/* Boton Buscar */}
        <button
          className="btn-search"
          onClick={handleSearchButtonClick}
          style={{ display: isSearchVisible ? "block" : "none" }}
        >
          <SearchIcon style={{ color: "white" }} className="iconSearch" />
        </button>

        {/* Menu Desplegable */}
        <div className={`contUl ${isNavVisible ? "visible" : ""}`}>
          <ul>
            <li className="contLi">
              <a className="contA" onClick={handleNavButtonClick} href="#">
                Inicio
              </a>
            </li>
            <li className="contLi">
              <a className="contA" onClick={handleNavButtonClick} href="#">
                Quienes somos
              </a>
            </li>
            <li className="contLi">
              <a className="contA" onClick={handleNavButtonClick} href="#">
                Sedes y Horarios
              </a>
            </li>
            <li className="contLi">
              <a className="contA" onClick={handleNavButtonClick} href="#">
                Contacto
              </a>
            </li>
            <li className="contLi">
              <a className="contA" onClick={handleNavButtonClick} href="#">
                Sugerencias
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarMovile;
