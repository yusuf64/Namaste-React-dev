import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import UserList from "./UserList";
import ResList from "../utils/mockData";
import FilterRestaurant, { ResList } from "./FilterRestaurant";

const Body = () => {
  const [list, setList] = useState(ResList);

  return (
    <div className="body">
      <button
        id="filter-btn"
        onClick={(e) => {
          const filteredList = list.filter((res) => {
            return res.info.avgRating > 4.2;
          });

          setList(filteredList);
        }}
      >
        Top Restaurant
      </button>

      <div className="res-container">
        {list.map((res, index) => {
          return <RestaurantCard key={res.info.id} resname={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
