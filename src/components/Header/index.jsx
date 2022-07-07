import logo from "../../assets//images/logo.svg";
import "./template.scss";
import ButtonOne from "../Buttons/ButtonOne.jsx";
import NavHeader from "../NavHeader/index.jsx";
import { naviHead } from "../Data/naviHead";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const headerHeight = document.querySelector(".header").offsetHeight;
    console.log(headerHeight);
    document.documentElement.style.setProperty(
      "--headerHeight",
      headerHeight + "px",
    );
    function handleResize() {
      // console.log(headerHeight);
      document.documentElement.style.setProperty(
        "--headerHeight",
        document.querySelector(".header").offsetHeight + "px",
      );
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__logo" src={logo} alt={"logo"} />
        <div className="header__nav">
          {naviHead.map(nav => (
            <NavHeader key={nav.id} {...nav} />
          ))}
        </div>
      </div>
      <ButtonOne>
        <a href="tel:+74956609370">+7 495 660 93 70</a>
      </ButtonOne>
    </header>
  );
};

export default Header;
