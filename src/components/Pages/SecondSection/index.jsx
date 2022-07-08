import "./template.scss";
import CardSecondSection from "./CardsSecondSection/index.jsx";
import { cardsContent } from "../../Data/cardsSecondPade";

const SecondSection = () => {
  return (
    <section className="secondPage__wrap" id="programm">
      <div className="secondPage__title">
        <div className="secondPage__title-up">
          {" "}
          Программное обеспечение для ваших задач
        </div>
      </div>
      <div className="container__sp">
        {cardsContent.map(cardContent => (
          <CardSecondSection key={cardContent.id} {...cardContent} />
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
