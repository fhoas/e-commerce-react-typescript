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
            <div className="absolute z-20 top-full left-0 bg-gray9 text-white py-2 w-full">
              <span
                onClick={() => handleActiveCategory("all")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                All
              </span>
              <span
                onClick={() => handleActiveCategory("beauty")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Beauty
              </span>
              <span
                onClick={() => handleActiveCategory("furniture")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Furniture
              </span>
              <span
                onClick={() => handleActiveCategory("fragrances")}
                className="block px-6 py-2 hover:bg-gray8 cursor-pointer"
              >
                Fragrances
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
                Decoration
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
            onClick={() => handleActiveCategory("beauty")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "beauty" ? "border-white" : "border-gray6"
            }`}
          >
            Beauty
          </span>
          <span
            onClick={() => handleActiveCategory("furniture")}
            className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
              activeCategory === "furniture" ? "border-gray5" : "border-gray6"
            }`}
          >
            Furniture
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
