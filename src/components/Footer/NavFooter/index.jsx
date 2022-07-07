import "./template.scss";

const NavFooter = props => {
  const { href, src, alt, text } = props;
  return (
    <div className="nv__footer">
      <a href={href} className="link">
        {text} <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default NavFooter;
