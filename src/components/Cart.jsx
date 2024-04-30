import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <button className="p-2 m-2 bg-black text-white rounded-lg">
          <Link to="/home">Go to Home</Link>
        </button>
      ) : (
        <div className="w-1/2 m-auto">
          <ItemList menu={cartItems}></ItemList>
        </div>
      )}
    </div>
  );
};

export default Cart;
