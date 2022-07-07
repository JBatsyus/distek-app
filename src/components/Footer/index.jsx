import "./template.scss";
import ButtonOne from "../Buttons/ButtonOne.jsx";
import ButtonSocial from "../Buttons/ButtonSocial.jsx";
import { icons } from "../Data/buttonSocial.js";
import sagirov from "../../assets/images/sagirov.svg";
import arrowUp from "../../assets/images/icons/arrowUp.svg";
import Subscription from "../Subscription/index.jsx";
import NavFooter from "./NavFooter/index.jsx";
import { items } from "../Data/itemsFooter.js";
import arrowRight from "../../assets/images/icons/arrowRight.svg";
import logo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer__wrap">
        <div className="col-1">
          <img className="header__logo" src={logo} alt={"logo"} />
          <div className="text-logo">
            ооо «дистек» <br /> все права защищены
          </div>
        </div>
        <div className="col-2">
          <div className="footer__nav">
            <div className="h3">
              программное обеспечение{" "}
              <img className="arrowUp" src={arrowUp} alt={"arrowUp"} />
            </div>
            <div className="items__wrap">
              {items.map(item => (
                <NavFooter key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className="footer__nav pad">
            <div className="h3">
              о нас <img className="arrowUp" src={arrowUp} alt={"arrowUp"} />
            </div>
            <div className="items__wrap">
              <div className="nv__footer">
                <a href="javascript:void(0)" className="link">
                  новости <img src={arrowRight} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <Subscription />
        </div>
      </div>
      <div className="footer__contacts">
        <div className="btn_wrap">
          <ButtonOne>
            {" "}
            <a href="tel:+74956609370">+7 495 660 93 70</a>
          </ButtonOne>
          <div className="footer__icons">
            {icons.map(icon => (
              <ButtonSocial key={icon.alt} {...icon} />
            ))}
          </div>
        </div>
        <div className="contacts-right">
          <div className="info">
            <span className="town">москва</span>{" "}
            <span className="number">
              <a href="tel:+74956609370">+7 495 660 93 70</a>
            </span>
            <span className="email">
              <a href="mailto:info@distek.ru">info@distek.ru</a>
            </span>
          </div>
          <div className="sagirov">
            <span className="text__sgrv">сделано в</span>
            <img src={sagirov} alt="sagirov" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
