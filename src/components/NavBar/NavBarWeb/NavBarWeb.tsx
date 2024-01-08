//Styles
import { useState } from "react";
import "./NavBarWeb.scss";
//Icons
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function NavBarWeb() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  //F FUNCIONES
  const handleSearchButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="navCont">
      <div className="navLinksCont">
        <img className="logo" alt="logo principal" />
        <ul className="navLinks">
          <li className="navLinks-li">
            <a className="navLinks-a" href="#">
              Inicio
            </a>
          </li>
          <li className="navLinks-li">
            <a className="navLinks-a" href="#">
              Quienes somos
            </a>
          </li>
          <li className="navLinks-li">
            <a className="navLinks-a" href="#">
              Sedes y Horarios
            </a>
          </li>
          <li className="navLinks-li">
            <a className="navLinks-a" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Barra de busqueda */}
      <div className={`buscadorCont ${isSearchVisible ? "visible" : ""}`}>
        <SearchIcon />
        <input
          type="text"
          name="search"
          placeholder="Buscar..."
          className="inputSearch"
          autoComplete="off"
        />
        <button
          onClick={handleSearchButtonClick}
          style={{ display: isSearchVisible ? "block" : "none" }}
        >
          <CloseIcon className="iconClose" />
        </button>
      </div>

      <button
        className="btn-search"
        onClick={handleSearchButtonClick}
        style={{ display: isSearchVisible ? "none" : "block" }}
      >
        <SearchIcon className="iconSearch" />
      </button>
    </nav>
  );
}

export default NavBarWeb;
