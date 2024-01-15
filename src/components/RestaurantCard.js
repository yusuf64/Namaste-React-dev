import { CONT_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resname } = props;
  const {
    id,
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,

    cuisines,
  } = resname?.info;

  const { slaString } = resname.info?.sla;

  return (
    <div
      className="res-card border shadow-lg  hover:shadow-2xl hover:scale-125 transition duration-250 ease-in-out flex-1 rounded-2xl"
      id={id}
    >
      <div>
        <img
          src={CONT_URL + cloudinaryImageId}
          className="w-[100%] object-cover h-[200px] rounded-tl-2xl rounded-tr-2xl"
        />
      </div>

      <div className="content-box px-4 py-2">
        <h3 className="font-semibold  text-lg text-[#02060cbf]">{name}</h3>
        <p style={{ color: "red" }}>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{costForTwo}</p>
        <p>{slaString}</p>
      </div>
    </div>
  );
};

export const VegRestaurant = (rescard) => {
  return (props) => {
    return (
      <div className="w-full">
        <label>Veg</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
