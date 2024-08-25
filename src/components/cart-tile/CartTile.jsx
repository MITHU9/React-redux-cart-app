import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cart-slice";

/* eslint-disable react/prop-types */
const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeItem(cartItem.id));
  };

  return (
    <div className=" flex items-center px-6 py-4 justify-between bg-red-600 mt-2 mb-2 rounded-xl gap-3">
      <div className="flex py-3 px-5 items-center">
        <img
          className="h-28 rounded-2xl px-3"
          src={cartItem?.image}
          alt={cartItem?.title}
        />
        <p className="text-white font-extrabold">${cartItem?.price}</p>
      </div>
      <div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rounded-lg font-semibold p-4 hover:bg-red-900"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartTile;
