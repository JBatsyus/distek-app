import "./template.scss";

const ButtonSocial = props => {
  const { href, src, alt } = props;
  return (
    <button className="btn__social">
      <div className="btns__wrap">
        <a href={href}>
          <img src={src} alt={alt} className="icon" />
        </a>
      </div>
    </button>
  );
};

export default ButtonSocial;
