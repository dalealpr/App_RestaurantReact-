import Header from "../components/Header/Header";
import HorizontalNav from "../components/HorizontalNav/HorizontalNav";
import Secciones from "../components/Secciones/Secciones";
import "./Home.scss";

function Home() {
  return (
    <div className="homeCont">
      <Header />
      <HorizontalNav />
      <Secciones />
    </div>
  );
}

export default Home;
