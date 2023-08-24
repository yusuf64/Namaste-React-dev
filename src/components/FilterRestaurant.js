import ResList from "../utils/mockData";

const FilterRestaurant = () => {
  return (
    <button
      id="filter-btn"
      onClick={(e) => {
        let newList = ResList.filter((res) => {
          return res.info.avgRating > 4;
        });
        console.log(newList);
      }}
    >
      Top Restaurant
    </button>
  );
};

export default FilterRestaurant;
