import "./Contacto.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import wasp from "../assets/img/wasp.png";

function Contacto() {
  return (
    <div className="contContacto">
      <h2 className="titleContacto">Siguenos en:</h2>

      <div className="contIconos">
        <button className="btnSocialN">
          <InstagramIcon className="socialIcon" />
        </button>
        <button className="btnSocialN">
          <FacebookIcon className="socialIcon" />
        </button>
        <button className="btnSocialN">
          <YouTubeIcon className="socialIcon" />
        </button>
      </div>

      <p>Tambien puedes escribirnos al siguiente WhatsApp:</p>

      <div className="contbtnWsp">
        <button className="btnWsp">
          <a className="aWsp" href="">
            WhatsApp
            <img src={wasp} className="waspIcon" alt="" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contacto;
