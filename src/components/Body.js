import RestaurantCard, { VegRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import UserList from "./UserList";
import ResList from "../utils/mockData";
import FilterRestaurant, { ResList } from "./FilterRestaurant";
import Shimmer from "./DoorDashFavorite";
import SearchComponent from "./SearchComponent";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constant";
import useFetch from "../utils/useFetch";
import useCheckconn from "../utils/useCheckconn";
import UserContext from "../utils/UserContext";

const Body = () => {
  const check = useCheckconn();

  const { setUserName, username } = useContext(UserContext);

  const [value, setValue] = useState("");

  const { list, filterRes, setFilterRes } = useFetch(RES_URL);

  console.log(list);

  const Veg = VegRestaurant(<RestaurantCard />);

  if (list.length === 0) {
    const arshimmer = [];

    let c = 20;

    for (let i = 0; i < c; i++) {
      arshimmer.push(<Shimmer key={i} />);
    }

    return <div style={{ display: "flex", flexWrap: "wrap" }}>{arshimmer}</div>;
  }

  if (check === false)
    return (
      <h1>
        Looks like you are Offline!!, please check your internet connection
      </h1>
    );

  return (
    <div className="body ">
      <div className="filter flex flex-row-reverse justify-center  text-white py-11">
        <button
          className="shadow-md rounded-md bg-slate-400 px-6 py-2 mx-3"
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
        <div className="search-bar">
          <span className="text-black">Change Username:</span>
          <input
            type="text"
            className="border text-black px-3 py-2"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="searchbar text-white ">
          <input
            className="py-2 rounded-bl-md rounded-tl-md border-slate-400  text-slate-400 border-2 rounded w-[500px]"
            type="search"
            aria-label="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="border-slate-400 border-2  text-white shadow-md rounded-tr-md rounded-br-md bg-slate-400 px-6 py-2"
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

      <div className="res-container flex flex-wrap">
        {filterRes.map((res, index) => {
          return (
            <Link
              className="basis-1/5 px-5 pb-5 h-auto flex"
              key={res.info.id}
              to={"/restaurants/" + res.info.id}
            >
              {res.info.isOpen ? (
                <Veg key={res.info.id} resname={res} />
              ) : (
                <RestaurantCard key={res.info.id} resname={res} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
