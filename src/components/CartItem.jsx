import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove, removeCompletely } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeOneFromCart = () => {
    dispatch(remove(item.id));
    toast.success("One quantity removed");
  };

  const removeEntireItem = () => {
    dispatch(removeCompletely(item.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover" src={item.images[0]} />
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-700 font-medium">{item.description}</p>

          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <p className="font-bold text-sm text-gray-700">Qty: {item.quantity}</p>

            <div
              title="Remove One"
              className="text-yellow-800 bg-yellow-200 hover:bg-yellow-300 rounded-full p-2 cursor-pointer mr-2"
              onClick={removeOneFromCart}
            >
              ➖
            </div>

            <div
              title="Remove All"
              className="text-red-800 bg-red-200 hover:bg-red-400 rounded-full p-3 cursor-pointer"
              onClick={removeEntireItem}
            >
              <AiFillDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
