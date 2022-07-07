import "./template.scss";
import arrow from "../../assets/images/icons/arrow.svg";
const NavHeader = props => {
  const { href, text } = props;
  return (
    <a href={href} className="nav__item">
      {text}
      <img src={arrow} alt="вниз" className="img" />
    </a>
  );
};

export default NavHeader;
