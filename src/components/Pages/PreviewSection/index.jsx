import "./template.scss";
import NavBody from "../../NavBody/index.jsx";
import { navi } from "../../Data/navi.js";

import CardGradient from "./CardsPreviewPage/CardGradient.jsx";
import CardMain from "./CardsPreviewPage/CardMain.jsx";

const PreviewSection = () => {
  return (
    <section className="screen__wrap">
      <div className="screen__title">
        <div className="title-up">
          <div className="title__left">
            Distek – дистрибьютор программного обеспечения
          </div>
          <div className="title__right">решения для BIM- моделирования</div>
        </div>
        <div className="navi">
          {navi.map(nav => (
            <NavBody key={nav.id} {...nav} />
          ))}
        </div>
      </div>
      <div className="screen__content">
        <div className="card__wrap">
          <div className="card__one">
            <CardMain />
          </div>
          <div className="card__two">
            <CardGradient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
