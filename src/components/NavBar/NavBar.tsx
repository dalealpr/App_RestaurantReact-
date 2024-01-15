// Styles
import "./NavBar.scss";
// Components
import NavBarMovile from "./NavBarMovile/NavBarMovile";
import NavBarWeb from "./NavBarWeb/NavBarWeb";
// Librarys
import { useMedia } from "react-use";

function NavBar() {
  const isMobile = useMedia("(min-width: 900px)");

  const allowedRoutes = [
    "/",
    "/quienessomos",
    "/sedesyhorarios",
    "/contacto",
    "/sugerencias",
  ];
  const shouldShowNavBar = allowedRoutes.includes(location.pathname);

  return shouldShowNavBar ? (
    <div className="contNav">{isMobile ? <NavBarWeb /> : <NavBarMovile />}</div>
  ) : null;
}

export default NavBar;
