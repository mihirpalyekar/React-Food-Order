import { CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = info;
  const { deliveryTime } = sla;
  return (
    <div  data-testid="resCard"  className="m-4 p-4 w-[220px] flex flex-wrap bg-gray-100 h-[100%] rounded-lg">
      <img
        className="h-[200px] w-[200px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-2 p-2 rounded-xl">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
