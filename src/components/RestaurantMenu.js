import { useEffect, useState } from "react";
import Shimmer from "./DoorDashFavorite";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import useFetchData from "../utils/useFetchData";

const RestaurantMenu = (props) => {
  const { resName } = useParams();

  const res = useFetchData(resName);

  console.log(resName);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   console.log(MENU_URL + resName);
  //   const data = await fetch(MENU_URL + resName);

  //   const j = await data.json();

  //   const json = j.data;
  //   setres(json);
  // };

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

  debugger;
  // const { accordionTitle } = accordionMenu.card.card.title;

  console.log(accordionMenu, "accordionmenu");

  return (
    <div className="md:container flex justify-center flex-col items-center">
      <h1 className=" text-4xl font-bold">{name}</h1>
      <h2>{cuisines.join(",")}</h2>

      <p>{costForTwoMessage}</p>

      <ul className=" ">
        {itemCards.map((e) => {
          return (
            <div className="flex justify-between shadow-lg my-3 rounded-md px-3 items-center font-bold font-mono ">
              <li className="fw-bold" key={e.card.info.id}>
                {e.card.info.name} - ₹
                {parseInt(e.card.info.price || e.card.info.defaultPrice) / 100}
              </li>
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  e.card.info.imageId
                }
                alt=""
              />
            </div>
          );
        })}
      </ul>

      <div className="accordion-box py-3  w-1/2 flex justify-center items-center flex-col">
        {accordionMenu.map((e) => {
          return (
            <div className="accordion-inner-box">
              <h1 className="title py-3 my-3 shadow-lg rounded-md w-1/2 block">
                {e?.card?.card?.title}
              </h1>

              <div className="accordioninner">
                {e?.card?.card?.itemCards.map((e) => {
                  return (
                    <div className="details">
                      <h2>
                        {e.card.info.name} - ₹
                        {parseInt(
                          e.card.info.price || e.card.info.defaultPrice
                        ) / 100}
                      </h2>
                      <img
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                          e.card.info.imageId
                        }
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
