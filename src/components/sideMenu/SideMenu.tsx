import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";

const SideMenu = () => {
  const { sideStatus, setSideStatus } = useContext(MainContext) || {};
  const [dropDownStatus, setDropDownStatus] = useState<boolean>(false);

  // const { setActiveCategory } = useContext(ProductsContext) || {};

  const handleDropDown = () => {
    setDropDownStatus(!dropDownStatus);
  };

  // const handleActiveCategory = (category: string) => {
  //   if (setActiveCategory) setActiveCategory(category);
  // };

  const closeSideMenu = () => {
    if (setSideStatus) setSideStatus(!sideStatus);
  };

  return (
    <div>
      {sideStatus ? (
        <aside className="fixed bg-gray9 text-white flex flex-col gap-16 px-8 py-16 w-[60%] h-full top-0 text-lg duration-500 transform translate-x-0 md:translate-x-full lg:translate-x-full z-50 sm:translate-x-full md:hidden lg:hidden sm:hidden">
          <Link
            className="sidebar-link duration-500 hover:tracking-widest"
            to={"/"}
            onClick={closeSideMenu}
          >
            Home
          </Link>
          <Link
            className="sidebar-link duration-500 hover:tracking-widest"
            to={"/products"}
            onClick={closeSideMenu}
          >
            Products
          </Link>
          <Link
            className="sidebar-link duration-500 hover:tracking-widest"
            to={"/cart"}
            onClick={closeSideMenu}
          >
            Cart
          </Link>
          <div
            onClick={handleDropDown}
            className="flex flex-col justify-center gap-2 sidebar-link"
          ></div>
        </aside>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideMenu;
