import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const cl = () => {
    dispatch(clearCart(cartItems));
  };

  console.log(cartItems);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <button
        className="py-2 px-2 rounded-md bg-black text-white"
        onClick={() => cl()}
      >
        Clear Cart
      </button>
      <div>
        <ItemList e={cartItems} />
      </div>
      {cartItems.length === 0 && (
        <h1 className="text-bold text-3xl">
          Your Cart is empty, add somthing and come again...
        </h1>
      )}
    </div>
  );
};

export default Cart;
