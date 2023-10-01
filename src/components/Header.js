import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, Router, link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("login");
  // useEffect(() => {
  //   console.log("hello");
  // }, [login]);
  // console.log("hello");

  return (
    <div className="header">
      <div className="logocontainer">
        <img src={LOGO_URL} alt="Food logo" className="logo" />
      </div>
      <div className="nav-links-container">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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
