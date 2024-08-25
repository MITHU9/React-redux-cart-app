import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state);

  //console.log(cart);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  //console.log(totalPrice);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div>
            <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center items-center p-3">
                {cart.map((cartItem) => (
                  <CartTile key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
            <h1 className="font-bold text-lg text-red-800">
              Your Cart summary
            </h1>
            <p>
              <span className="text-gray-800 font-bold">Total Item: </span>
              <span className=" text-gray-800 font-bold">{cart.length}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Total Amount: </span>
              <span className="font-bold text-lg">{totalPrice}</span>
            </p>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Cart is empty
          </h1>
          <p className="text-gray-600 font-semibold">
            Add some products to your cart
          </p>
          <Link to={"/"}>
            <button className="mt-5 text-lg py-3 px-7 border-2 border-red-950 bg-red-900 text-white font-semibold rounded-md">
              Go to Shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
