import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./restaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const list =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(list);
    setFilteredRestaurants(list);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!! Please check you internet connection.
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-4 bg-green-100  rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((ele) =>
                ele.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 ">
          <button
            className="px-3 py-1 m-4 bg-gray-100 rounded-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (ele) => ele.info.avgRating >= 4.4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>UserName :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
