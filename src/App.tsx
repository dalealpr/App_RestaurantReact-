import "./App.scss";
import Header from "./components/Header/Header";
import HorizontalNav from "./components/HorizontalNav/HorizontalNav";
import NavBar from "./components/NavBar/NavBar";
import Secciones from "./components/Secciones/Secciones";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <HorizontalNav />
      <Secciones />
    </>
  );
}

export default App;
