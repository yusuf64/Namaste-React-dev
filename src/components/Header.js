import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img src={LOGO_URL} alt="Food logo" className="logo" />
      </div>
      <div className="nav-links-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
