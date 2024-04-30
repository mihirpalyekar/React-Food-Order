import { useContext, useState } from "react";
import { LOGO_URL } from "./../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStats = useOnlineStatus();
  const userData = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 gap-4">
          <li>Online Status: {onlineStats ? "Online" : "offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
