import "./template.scss";
import Cities from "./Cities/index.jsx";
import ButtonCall from "../../Buttons/ButtonCall.jsx";
import { cities } from "../../Data/cities";
import { items } from "../../Data/segmentTp.js";
import Segment from "./Segment.jsx";

const ThirdSection = () => {
  return (
    <section className="thirdPage__wrap" id="about">
      <div className="content__wrap">
        <div className="thirdPage__content">
          <div className="thirdPage__title">
            Дилерская сеть – более 30 партнёров
          </div>
          <div className="cities">
            {cities.map(city => (
              <Cities key={city.id} {...city} />
            ))}
          </div>
        </div>
        <div className="thirdPage__segment">
          <div className="segment__wrap">
            <div className="segment__item">
              <div className="left">
                <div className="item__number">01</div>
                <div className="item__content">
                  <p className="content__h">хотите стать партнером?</p>
                  <p className="content__text">
                    оставьте заявку для консультации
                  </p>
                </div>
              </div>
              <div className=" item__end">
                <ButtonCall>закажите звонок</ButtonCall>
              </div>
            </div>
            {items.map(item => (
              <Segment key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
