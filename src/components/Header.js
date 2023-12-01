import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, Router, link } from "react-router-dom";
import useCheckconn from "../utils/useCheckconn";

const Header = () => {
  const [login, setLogin] = useState("login");
  const status = useCheckconn();
  // useEffect(() => {
  //   console.log("hello");
  // }, [login]);

  return (
    <div className="header">
      <div className="logocontainer">
        <Link to="/">
          <img src={LOGO_URL} alt="Food logo" className="logo" />
        </Link>
      </div>
      <div className="nav-links-container">
        <ul>
          <li>Online Status: {status ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
