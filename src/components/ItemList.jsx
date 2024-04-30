import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (menuList) => {
  const dispatch = useDispatch();
  const { menu } = menuList;
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {menu.map((item) => (
          <li
          data-testid = "foodItems"
            key={item?.card?.info?.id}
            className="border-b-2 p-4 flex justify-between"
          >
            <div className="w-10/12">
              <div className="bg-white shadow-lg p-4 flex justify-between gap-5">
                <div>{item?.card?.info?.name}</div>
                <div>
                  {item?.card?.info?.defaultPrice
                    ? item?.card?.info?.defaultPrice / 100
                    : item?.card?.info?.price / 100}{" "}
                  RS
                </div>
              </div>
              <div className="text-xs text-left mt-2 ">
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="w-2/12 p-4">
              <div className="">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
