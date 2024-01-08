// Styles
import "./NavBar.scss";
// Components
import NavBarMovile from "./NavBarMovile/NavBarMovile";
import NavBarWeb from "./NavBarWeb/NavBarWeb";
// Librarys
import { useMedia } from "react-use";

function NavBar() {
  const isMobile = useMedia("(min-width: 900px)");

  return (
    <div className="contNav">{isMobile ? <NavBarWeb /> : <NavBarMovile />}</div>
  );
}

export default NavBar;
