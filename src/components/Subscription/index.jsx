import "./template.scss";
import send from "../../assets/images/send.svg";

const Subscription = () => {
  return (
    <div className="news__wrap">
      <div className="h4">подпишитесь на наши новости </div>
      <div className="input__wrap">
        <input className="news" type="text" placeholder="your@email.ru" />
        <div className="btn__wrap">
          <p>подписаться</p>
          <button>
            <img src={send} alt="отправить" />
          </button>
        </div>
      </div>
      <div className="agreement">
        Отправляя заполненную форму, вы принимаете условия{" "}
        <a href="#">Политики обработки персональных данных</a> и подписываете{" "}
        <a href="#">Заявление-согласие субъекта </a> на передачу его
        персональных данных третьей стороне.
      </div>
    </div>
  );
};

export default Subscription;
