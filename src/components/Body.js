import resList from "../utils/Data";
import RestaurantCard from "./RestaruantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filterlist = resList.filter((r) => r.info.avgRating > 4.5);
            setlistOfRestaurants(filterlist);
          }}
        >
          Filter Btn
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaruant) => {
          return (
            <RestaurantCard key={restaruant.info.id} resData={restaruant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
