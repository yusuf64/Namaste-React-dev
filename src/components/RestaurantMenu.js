import { useEffect, useState } from "react";
import Shimmer from "./DoorDashFavorite";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useFetchData from "../utils/useFetchData";
import ItemList from "./ItemList";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = (props) => {
  const { resName } = useParams();

  
  const res = useFetchData(resName);

  console.log(resName);

  if (res === null) {
    return <Shimmer />;
  }

  let mu = res?.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  // debugger;
  console.log(res?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const { itemCards } =
    res?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards, "dd");

  const { name, cuisines, costForTwoMessage, imageId } =
    res?.cards[0]?.card?.card?.info;

  const accordionMenu = mu.filter((e) => {
    return (
      e.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

 

  // const { accordionTitle } = accordionMenu.card.card.title;

  return (
    <div className="md:container flex justify-center flex-col items-center">
      <h1 className=" text-4xl font-bold">{name}</h1>
      <h2>{cuisines.join(",")}</h2>

      <p>{costForTwoMessage}</p>

      <div className="accordion-box py-3  w-1/2 flex justify-center items-center flex-col ">
        {accordionMenu.map((e) => {
          return (
           <ItemCategory e={e} key={e?.card?.card?.title}/>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
