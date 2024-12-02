import { CDN_LINK } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  console.log(props);

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="kk" src={CDN_LINK + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4> {sla.deliveryTime} minates</h4>
    </div>
  );
};

export default RestaurantCard;
