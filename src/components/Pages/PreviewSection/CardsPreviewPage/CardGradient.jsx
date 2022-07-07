import "./template.scss";
import two from "../../../../assets/images/two.png";
import btn_sectionone from "../../../../assets/images/btn_sectionone.png";
import arrow_btn_main from "../../../../assets/images/arrow_btn_main.png";
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
          <span>подробнее о решениях для ваших задач</span>
        </div>
      </div>
    </div>
  );
};

export default CardGradient;
