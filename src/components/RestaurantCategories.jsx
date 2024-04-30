import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategories = ({ data, showMenu, setActiveIndex }) => {
  const handleClick = () => {
    setActiveIndex();
  };
  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>Arrow</span>
        </div>
        {showMenu && <ItemList menu={data?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategories;
