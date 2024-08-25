import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/slices/cart-slice";

/* eslint-disable react/prop-types */
const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div>
      <div className="group flex flex-col items-center border-2 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl border-red-500">
        <div className="h-[180px]">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-2 text-gray-600 font-bold text-lg">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.find((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-red-950 text-white border-2 rounded-lg font-semibold p-4 hover:bg-red-900"
          >
            {cart.find((item) => item.id === product.id)
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
