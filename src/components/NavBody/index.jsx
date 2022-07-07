import "./template.scss";

const NavBody = props => {
  const { href, src, alt, text, src2, alt2 } = props;
  return (
    <div className="nv__body">
      <img src={src} alt={alt} />

      <a href={href} className="link">
        {text} <img src={src2} alt={alt2} />
      </a>
    </div>
  );
};

export default NavBody;
