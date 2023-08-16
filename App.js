import React from "react";
import ReactDOM from "react-dom/client";

/* 
Header
   - Logo
   - Navlinks
Body
   - Search
   - Restuarent Container
   - Restaurant Card
Footer
   - Copyright
   - quicklinks
   - Address
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="Food logo"
          className="logo"
        />
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

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
