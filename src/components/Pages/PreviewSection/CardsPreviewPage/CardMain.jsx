import "./template.scss";
import one from "../../../../assets/images/one.png";
import main_gif from "../../../../assets/images/main_gif.gif";
import main_gif_tablet from "../../../../assets/images/main_gif_tablet.gif";
import email from "../../../../assets/images/email.png";
import Accordion from "../../../Accordion/index.jsx";
import { items } from "../../../Data/accordion.js";

const CardMain = () => {
  return (
    <div className="cardMain__box">
      <div className="cardMain__header">
        <div className="headerMain-left">
          <img src={one} alt="1" />
        </div>
        <div className="headerMain-right">
          <p>партнерам и вендорам</p>
          <div>
            <img src={email} alt="почта" />
            <a href="mailto: info@distek.ru"> info@distek.ru </a>
          </div>
        </div>
      </div>
      <div className="cardMain__body">
        <div className="block_info">
          <img src={email} alt="почта" />
          <a href="mailto: info@distek.ru"> info@distek.ru </a>
        </div>
        <div className="cardMain__content">
          <p>преимущества</p>
          <div className="dropdown-row">
            <Accordion items={items} />
          </div>
        </div>
        <div className="gif">
          <img src={main_gif}></img>
        </div>
        <div className="gif-tablet">
          <img src={main_gif_tablet}></img>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
