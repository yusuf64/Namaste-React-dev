import { CONT_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resname } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,

    cuisines,
  } = resname?.info;

  const { slaString } = resname.info?.sla;

  return (
    <div className="res-card">
      <img src={CONT_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p style={{ color: "red" }}>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{costForTwo}</p>
      <p>{slaString}</p>
    </div>
  );
};

export default RestaurantCard;
