import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constant";
import { Link, Router, link } from "react-router-dom";
import useCheckconn from "../utils/useCheckconn";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("login");
  const status = useCheckconn();

  const { user } = useContext(UserContext);

  // subscribing to the store using the selector

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  // useEffect(() => {
  //   console.log("hello");
  // }, [login]);

  return (
    <div className="header flex flex-row justify-between">
      <div className="logocontainer">
        <Link to="/">
          <img src={LOGO_URL} alt="Food logo" className="logo w-1/3" />
        </Link>
      </div>
      <div className="nav-links-container flex items-center">
        <ul className="flex justify-between align-middle px-3 font-semibold text-lg ">
          <li className="px-3">Online Status: {status ? "✅" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/form">Form</Link>
          </li>
          <li className="px-3">
            <Link to="/abouty">About us</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart -({cartItems.length} items)</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery </Link>
          </li>
          <li className="px-3">{user}</li>
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
