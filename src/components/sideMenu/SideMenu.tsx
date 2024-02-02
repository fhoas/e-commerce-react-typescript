import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { ProductsContext } from "../../context/ProductsContext";

const SideMenu = () => {
  const { sideStatus } = useContext(MainContext) || {};
  const [dropDownStatus, setDropDownStatus] = useState<boolean>(false);
  const { activeCategory, setActiveCategory } =
    useContext(ProductsContext) || {};

  const handleDropDown = () => {
    setDropDownStatus(!dropDownStatus);
  };

  const handleActiveCategory = (category: string) => {
    if (setActiveCategory) setActiveCategory(category);
  };

  return (
    <div>
      {sideStatus ? (
        <aside className="fixed bg-deepPurple1 text-white flex flex-col gap-16 px-8 py-16 w-[60%] h-full top-0 text-lg duration-500 transform translate-x-0 md:translate-x-full lg:translate-x-full z-50 sm:translate-x-full md:hidden lg:hidden sm:hidden">
          <Link
            className="sidebar-link duration-500 hover:tracking-widest"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="sidebar-link duration-500 hover:tracking-widest"
            to={"/products"}
          >
            Products
          </Link>
          <Link
            className="sidebar-link duration-500 hover:tracking-widest"
            to={"/cart"}
          >
            Cart
          </Link>
          <div
            onClick={handleDropDown}
            className="flex flex-col justify-center gap-2 sidebar-link"
          >
            <span className="flex items-center gap-2 hover:tracking-widest  duration-500">
              Categories
              <FaChevronDown />
            </span>

            <div
              className={`flex flex-col ${
                dropDownStatus === true ? "flex" : "hidden"
              }`}
            >
              <span
                onClick={() => handleActiveCategory("all")}
                className="hover:tracking-widest duration-500"
              >
                All
              </span>
              <span
                onClick={() => handleActiveCategory("men's clothing")}
                className="hover:tracking-widest duration-500"
              >
                For Men
              </span>
              <span
                onClick={() => handleActiveCategory("jewelery")}
                className="hover:tracking-widest duration-500"
              >
                Jewelery
              </span>
              <span
                onClick={() => handleActiveCategory("electronics")}
                className="hover:tracking-widest duration-500"
              >
                Electronics
              </span>
              <span
                onClick={() => handleActiveCategory("women's clothing")}
                className="hover:tracking-widest duration-500"
              >
                For Women
              </span>
            </div>
          </div>
        </aside>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideMenu;
