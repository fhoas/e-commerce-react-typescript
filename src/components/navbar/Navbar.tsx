import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext) || {};
  const { sideStatus, setSideStatus } = useContext(MainContext) || {};

  const counter = cartItems?.length;


  const openMenu = () => {
    if (setSideStatus) setSideStatus(!sideStatus);
  };

  return (
    <div className="flex w-full justify-between bg-primary text-primary items-center py-4 px-8 md:px-16 md:py-4 font-primary">
      <div className="text-heading flex gap-4">
        <Link to={"/"}>
          <img
            className="w-[60px] h-[60px]"
            src="/assets/logo-wired.gif"
            alt="logo"
          />
        </Link>
        <NavLinks />
      </div>
      <div className="flex justify-center items-center gap-6">
        <Link to={"/cart"} className="relative sm:flex">
          <FaCartShopping size={24} />
          <div className="absolute top-[-15px] right-[-15px] border bg-gray9 border-gray6 hover:bg-gray8 hover:border-gray5 text-white rounded-full h-[25px] w-[25px] flex justify-center items-center overflow-hidden">
            <span className="flex justify-center items-center mt-[2px]">{counter}</span>
          </div>
        </Link>
      <div className="flex sm:hidden" onClick={openMenu}>
        <RxHamburgerMenu size={32} />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
