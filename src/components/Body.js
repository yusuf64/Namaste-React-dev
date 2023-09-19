import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import ResList from "../utils/mockData";
import FilterRestaurant, { ResList } from "./FilterRestaurant";
import Shimmer from "./DoorDashFavorite";
import SearchComponent from "./SearchComponent";

const Body = () => {
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [value, setValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0738955&lng=72.886596&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    console.log(jsonData);

    const cardss = await jsonData?.data?.cards[2]?.card?.card?.gridElements
      ?.infoWithStyle.restaurants;

    console.log(cardss);
    setList(cardss);
    setFilterRes(cardss);

    // console.log(jsonData);

    return cardss;
  };

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
          return <RestaurantCard key={res.info.id} resname={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
