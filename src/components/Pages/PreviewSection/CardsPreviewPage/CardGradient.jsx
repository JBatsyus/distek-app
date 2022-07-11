import "./template.scss";
import two from "../../../../assets/images/two.svg";
import btn_sectionone from "../../../../assets/images/btn_sectionone.svg";
import arrow_btn_main from "../../../../assets/images/arrow_btn_main.svg";
import gradi from "../../../../assets/images/gradi.svg";
import { Link } from "react-scroll";
const CardGradient = () => {
  return (
    <div className="card__box">
      <div className="card__header">
        <div className="header-left">
          <img src={two} alt="2" />
        </div>
        <div className="header-right">
          <p>пользователям</p>
        </div>
      </div>
      <div className="card__body">
        <img className="gradi" src={gradi}></img>
        <div className="card__btn-screen">
          <button>
            <img src={btn_sectionone} alt="" />
          </button>
        </div>
        <div className="card__btn-adptv">
          <button>
            <img src={arrow_btn_main} alt="" />
          </button>
        </div>
        <div className="card__content">
          <p>
            Подберите программные продукты для моделирования конструкции и
            визуализации проектов
          </p>
          <Link
            activeClass="yes"
            to="programm"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={500}
          >
            <span>подробнее о&nbsp;решениях для ваших задач</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardGradient;
