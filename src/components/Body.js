import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import ResList from "../utils/mockData";
import FilterRestaurant, { ResList } from "./FilterRestaurant";
import Shimmer from "./DoorDashFavorite";
import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constant";
import useFetch from "../utils/useFetch";
import useCheckconn from "../utils/useCheckconn";

const Body = () => {
  const check = useCheckconn();
  console.log(check);

  const [value, setValue] = useState("");

  const { list, filterRes } = useFetch(RES_URL);

  if (list.length === 0) {
    const arshimmer = [];

    let c = 20;

    for (let i = 0; i < c; i++) {
      arshimmer.push(<Shimmer key={i} />);
    }

    return <div style={{ display: "flex", flexWrap: "wrap" }}>{arshimmer}</div>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          id="filter-btn"
          onClick={(e) => {
            const filteredList = list.filter((res) => {
              return res.info.avgRating > 4.2;
            });

            setFilterRes(filteredList);
          }}
        >
          Top Restaurant
        </button>
        <div className="searchbar">
          <input
            type="search"
            aria-label="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => {
              const newList = list.filter((res) => {
                return res.info.name
                  .split(/\s+/g)
                  .join("")
                  .toLowerCase()
                  .includes(value.toLowerCase());
              });
              console.log(filterRes.length);

              setFilterRes(newList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filterRes.map((res, index) => {
          return (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard key={res.info.id} resname={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
