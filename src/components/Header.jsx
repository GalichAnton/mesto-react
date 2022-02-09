import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта" className="logo" />
    </header>
  );
};

export default Header;
