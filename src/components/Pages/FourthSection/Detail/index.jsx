import "./template.scss";
import send from "../../../../assets/images/send.png";

const Detail = ({ children }) => {
  return (
    <div className="datail__box">
      <div className="text">{children}</div>
      <button className="send">
        <img src={send} alt="отправить" />
      </button>
    </div>
  );
};

export default Detail;
