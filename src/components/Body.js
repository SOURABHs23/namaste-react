// import resList from "../utils/Data";
import RestaurantCard from "./RestaruantCard";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  // const [filterRestaurants, setfilterRestaurants] = useState([]);
  
  const [searchVal, setsearchVal] = useState("");

  const isOnline = useOnlineStatus();
  console.log("in body");
  useEffect(() => {
    fetchData();
    console.log("dd");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(listOfRestaurants);

  if (!isOnline) return <h1>you are offline</h1>;

  return listOfRestaurants.length == 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchVal}
            onChange={(e) => setsearchVal(e.target.value)}
          />
          <button
            // className="filter-btn"
            onClick={() => {
              console.log(searchVal);

              const filterRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchVal.toLowerCase())
              );
              setfilterRestaurants(filterRestaurants);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = resList.filter((r) => r.info.avgRating > 4.5);
            setlistOfRestaurants(filterlist);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((restaruant) => {
          return (
            <Link
              key={restaruant.info.id}
              to={"/restaruants/" + restaruant.info.id}
            >
              <RestaurantCard resData={restaruant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;


