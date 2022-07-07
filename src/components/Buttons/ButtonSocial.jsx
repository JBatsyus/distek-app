import "./template.scss";

const ButtonSocial = props => {
  const { href, src, alt } = props;
  return (
    <button className="btn__social">
      <a href={href}>
        <img src={src} alt={alt} className="icon" />
      </a>
    </button>
  );
};

export default ButtonSocial;
