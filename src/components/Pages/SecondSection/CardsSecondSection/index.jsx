import "./template.scss";

import check from "../../../../assets/images/check.png";
import NavBody from "../../../NavBody/index.jsx";

const CardSecondSection = props => {
  const { navi, number, alt, header, gif, items } = props;
  return (
    <div className="col">
      <div className="card__headerSp">
        <div className="header-leftSp">
          <img src={number} alt={alt} />
        </div>
        <div className="header-rightSp">
          <p>{header}</p>
          <div className="card__navSp-header">
            {navi.map(nav => (
              <NavBody key={nav.id} {...nav} />
            ))}
          </div>
        </div>
      </div>
      <div className="card__bodySp">
        <div className="card__boxSp">
          <div className="card__gifSp">
            <img src={gif}></img>
          </div>
          <div className="card__navSp">
            {navi.map(nav => (
              <NavBody key={nav.id} {...nav} />
            ))}
          </div>
        </div>
        <div className="card__contentSp">
          {items.map(item => (
            <div className="items__cardSp" key={item.id}>
              <img src={check} alt="" />
              <div>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSecondSection;
