import "./template.scss";

const Segment = ({ number, href1, title, data, href2 }) => {
  return (
    <div className="segment__item">
      <div className="left">
        <div className="item__number">{number}</div>
        <div className="item__content">
          <p className="content__h">
            <a href={href1}>{title}</a>
          </p>
        </div>
      </div>
      <div className="right">
        <a href={href2}>{data}</a>
      </div>
    </div>
  );
};
export default Segment;
