import resList from "../utils/Data";
import RestaurantCard from "./RestaruantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        {resList.map((restaruant) => {
          return (
            <RestaurantCard key={restaruant.info.id} resData={restaruant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
