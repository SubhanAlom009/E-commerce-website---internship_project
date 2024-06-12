import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GiCrossMark } from "react-icons/gi";
import { CartContext } from "../../Context/CartContext/CartContext";
import { products } from "../../constants/Constants";

function Cart() {
  const { cart, handleRemove, updateQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="flex justify-center h-screen mt-24 mb-16">Cart is Empty</div>;
  }

  const { productId } = useParams();
  const product = products.find((pd) => pd.id === parseInt(productId) || pd.name === productId);

  return (
    <div className="flex justify-between mx-8 mt-24 mb-16 space-x-12">
      <div className="w-1/2 p-6 border-2 overflow-y-auto max-h-[500px] rounded-xl border-slate-400">
        <h1 className="font-mono text-2xl font-bold underline underline-offset-8">
          Cart <span className="text-slate-500">({cart.length} product(s))</span>
        </h1>
        <div className="px-4 py-4">
          <div className="space-y-4">
            {cart.map((pd, index) => (
              <div key={index} className="flex items-center justify-between px-4 py-2 border-2 bg-[#d9f4ff] border-slate-400 rounded-xl">
                <Link to={`../${pd.id}/${pd.name}`} className="flex items-center gap-5">
                  <img className="w-[150px] rounded-xl" src={pd.image} alt={pd.name} />
                  <h1 className="font-mono text-xl">{pd.name}</h1>
                </Link>
                <div>
                  <button onClick={() => updateQuantity(pd.id, pd.quantity - 1)} className="px-4 py-2 text-white bg-blue-600 rounded-full">
                    -
                  </button>
                  <span className="px-4 py-2">{pd.quantity}</span>
                  <button onClick={() => updateQuantity(pd.id, pd.quantity + 1)} className="px-4 py-2 text-white bg-blue-600 rounded-full">
                    +
                  </button>
                </div>
                <p>₹ {pd.price * pd.quantity}</p>
                <GiCrossMark onClick={() => handleRemove(pd)} className="text-xl text-red-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col min-w-1/3 justify-between p-6 border-2 rounded-xl bg-[#d9f4ff]">
        <div className="px-4 py-2 h-1/2">
          <h1 className="font-mono text-xl font-medium">Total items: {cart.length}</h1>
          <h1 className="font-mono text-xl font-medium">
            Subtotal: ₹{cart.reduce((total, pd) => total + pd.price * pd.quantity, 0)}
          </h1>
          <h1 className="font-mono text-xl font-medium">Discount: ₹ 0</h1>
          <h1 className="font-mono text-xl font-medium">
            Total price: ₹{cart.reduce((total, pd) => total + pd.price * pd.quantity, 0)}
          </h1>
          <Link to="/checkout">
            <button className="w-full px-4 py-2 mt-12 font-mono text-xl font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
