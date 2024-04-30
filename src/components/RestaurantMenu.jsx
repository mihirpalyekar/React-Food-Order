import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [activeIndex, setActiveIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ele) =>
        ele?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <h3 className="text-lg font-bold">{cuisines.join(", ")}</h3>
      <h3 className="text-m">{costForTwoMessage}</h3>
      <h3>Menu</h3>
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showMenu={index == activeIndex && true}
          setActiveIndex={() => {
            if (activeIndex == index) {
              setActiveIndex(null);
            } else {
              setActiveIndex(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
