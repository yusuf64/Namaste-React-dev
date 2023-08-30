import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import ResList from "../utils/mockData";
import FilterRestaurant, { ResList } from "./FilterRestaurant";
import DoorDashFavorite from "./DoorDashFavorite";

const Body = () => {
  const [list, setList] = useState([]);

  if (list.length === 0) {
    <DoorDashFavorite />;
  }

  useEffect(() => {
    // fetchData();
    setTimeout(fetchData(), 7000);
    // fetchData();
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

    // console.log(jsonData);

    return cardss;
  };

  // const newData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0738955&lng=72.886596&collection=94109&isNewCollectionFlow=true&tags=layout_ux4&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //   );
  //   const newd = await data.json();

  //   const dd = await newd.data;

  //   console.log(newd);

  //   // const sldata = dd.slice(2);

  //   // const newarr = [];

  //   // const newArray = sldata
  //   //   .filter((e) => e.card && e.card.card && e.card.card.info)
  //   //   .map((e) => e.card.card);

  //   // console.log(newArray);

  //   // setList(newArray);

  //   // return newArray;
  // };

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
