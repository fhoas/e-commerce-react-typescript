import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const Categories = () => {
  const { activeCategory, setActiveCategory } =
    useContext(ProductsContext) || {};

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleActiveCategory = (category: string) => {
    if (setActiveCategory) setActiveCategory(category);
    if (isMobile) setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="justify-between items-center gap-4 px-8 py-4 md:px-16 text-xs md:text-base sm:flex md:flex">
      {isMobile ? (
        <div className="relative w-full">
          <span
            onClick={toggleDropdown}
            className={`cursor-pointer bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg border-[1px] flex justify-center items-center ${
              showDropdown ? "border-gray5" : "border-gray6"
            }`}
          >
            Categories
          </span>
          {showDropdown && (
            <div className="absolute z-11 top-full left-0 bg-gray9 text-white py-2 w-full">
              <span
                onClick={() => handleActiveCategory("all")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                All
              </span>
              <span
                onClick={() => handleActiveCategory("smartphones")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Smartphones
              </span>
              <span
                onClick={() => handleActiveCategory("laptops")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Laptops
              </span>
              <span
                onClick={() => handleActiveCategory("fragrances")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Fragrances
              </span>
              <span
                onClick={() => handleActiveCategory("skincare")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Skincare
              </span>
              <span
                onClick={() => handleActiveCategory("groceries")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Groceries
              </span>
              <span
                onClick={() => handleActiveCategory("home-decoration")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Home Decoration
              </span>
            </div>
          )}
        </div>
      ) : (
        <>
          <span
            onClick={() => handleActiveCategory("all")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg border-[1px] flex justify-center items-center ${
              activeCategory === "all" ? "border-gray5" : "border-gray6"
            }`}
          >
            All
          </span>
          <span
            onClick={() => handleActiveCategory("smartphones")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "smartphones" ? "border-white" : "border-gray6"
            }`}
          >
            Smartphones
          </span>
          <span
            onClick={() => handleActiveCategory("laptops")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "laptops" ? "border-gray5" : "border-gray6"
            }`}
          >
            Laptops
          </span>
          <span
            onClick={() => handleActiveCategory("fragrances")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "fragrances" ? "border-gray5" : "border-gray6"
            }`}
          >
            Fragrances
          </span>
          <span
            onClick={() => handleActiveCategory("skincare")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "skincare" ? "border-gray5" : "border-gray6"
            }`}
          >
            Skincare
          </span>
          <span
            onClick={() => handleActiveCategory("groceries")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "groceries" ? "border-gray5" : "border-gray6"
            }`}
          >
            Groceries
          </span>
          <span
            onClick={() => handleActiveCategory("home-decoration")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "home-decoration"
                ? "border-gray5"
                : "border-gray6"
            }`}
          >
            Decoration
          </span>
        </>
      )}
    </div>
  );
};

export default Categories;
