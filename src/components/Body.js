import RestaurantCard from "./RestaurantCard";
import ResList from "../utils/mockData";
import FilterRestaurant from "./FilterRestaurant";

const Body = () => {
  return (
    <div className="body">
      <FilterRestaurant />
      <div className="res-container">
        {ResList.map((res, index) => {
          console.log(index);

          return <RestaurantCard key={res.info.id} resname={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
