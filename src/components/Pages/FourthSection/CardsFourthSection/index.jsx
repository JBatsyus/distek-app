import "./template.scss";
import ButtonGray from "../../../Buttons/ButtonGray.jsx";
import Detail from "../Detail/index.jsx";
const CardsFourthSection = props => {
  const { date, image, text } = props;
  return (
    <div className="card__wrapFs">
      <div
        className=" card__bgi"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="header__cd">
          <div className="btn">
            <ButtonGray>{date}</ButtonGray>
          </div>
          <div className="header__radius"></div>
        </div>
        <div className="border__wrap">
          <div className="border-left"></div>
          <div className="card__body">
            <div className="content">
              <div className="card__text">{text}</div>

              <Detail>
                подробнее на <a>distek.tekla.ru</a>
              </Detail>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsFourthSection;
