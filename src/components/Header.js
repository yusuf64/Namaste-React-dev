import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [login, setLogin] = useState("login");
  console.log(useState());
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
          <button
            className="Log"
            onClick={() => {
              // setLogin("Logout");
              login === "login" ? setLogin("Logout") : setLogin("login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
