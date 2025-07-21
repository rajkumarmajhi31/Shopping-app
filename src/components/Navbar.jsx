<<<<<<< HEAD
import {FaShoppingCart} from "react-icons/fa"
=======
import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
<<<<<<< HEAD

  const {cart} = useSelector((state) => state);

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="h-14"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
=======
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-6">
          <img src={logo} className="h-14" alt="Logo" />
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
            Home Page
          </p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl " />
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>
    </div>
  );
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
};

export default Navbar;
