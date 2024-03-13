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
    <div className="flex w-full justify-between bg-primary text-primary items-center p-8 md:px-16 md:py-4 font-primary">
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
      <div>
        <Link to={"/cart"} className="relative hidden lg:flex md:flex sm:flex">
          <FaCartShopping size={24} />
          <span className="absolute top-[-20px] right-[-15px] bg-gray6 text-white rounded-full h-[20px] w-[20px] flex justify-center items-center">
            {counter}
          </span>
        </Link>
      </div>
      <div className="flex lg:hidden md:hidden sm:hidden" onClick={openMenu}>
        <RxHamburgerMenu size={32} />
      </div>
    </div>
  );
};

export default Navbar;
