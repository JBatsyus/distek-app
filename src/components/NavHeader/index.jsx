import "./template.scss";
import arrow from "../../assets/images/icons/arrow.svg";
import { Link } from "react-scroll";

const NavHeader = props => {
  const { href, text } = props;
  return (
    // <a href={href} className="nav__item">
    //   {text}
    //   <img src={arrow} alt="вниз" className="img" />
    // </a>
    <Link
      activeClass="yes"
      to={href}
      spy={true}
      smooth={true}
      // offset={-70}
      duration={500}
      className="nav__item"
    >
      {text}
      <img src={arrow} alt="вниз" className="img" />
    </Link>
  );
};

export default NavHeader;
