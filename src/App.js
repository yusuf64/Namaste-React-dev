import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import SearchComponent from "./components/SearchComponent";
import RestaurantCard from "./components/RestaurantCard";

const stylecard = {
  backgroundColor: "white",
  color: "black",
};

console.log(<Body />);
const AppLayout = () => {
  return (
    <div className="App">
      <Header />

      <Body />
    </div>
  );
};

console.log(<AppLayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
