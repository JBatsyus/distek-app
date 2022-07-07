import "./template.scss";
import check_tp from "../../../../assets/images/check_tp.svg";

const Cities = ({ city }) => {
  return (
    <div className="city__content">
      <div className="city__items">
        <img src={check_tp} alt="" />
        <div className="city">{city}</div>
      </div>
    </div>
  );
};

export default Cities;
