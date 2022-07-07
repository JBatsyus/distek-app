import "./template.scss";
import Subscription from "../../Subscription/index.jsx";
import CardsFourthSection from "./CardsFourthSection/index.jsx";
import { cards } from "../../Data/cards.js";
// import ButtonGray from "../Buttons/ButtonGray.jsx";
// import card_one from "../../assets/images/card_one.png";

const FourthSection = () => {
  return (
    <section className="fourthPage__wrap">
      <div className="fourthPage__title">
        <div className="fourthPage__title-left">
          <div className="fourthPage__title-up">Новости</div>
          <div className="title__bottom">
            самое актуальное на сегодняшний день в мире bim-проектирования
          </div>
        </div>
        <div className="fourthPage__title-right">
          <Subscription />
        </div>
      </div>
      <div className="container__four">
        {cards.map(card => (
          <CardsFourthSection key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default FourthSection;
