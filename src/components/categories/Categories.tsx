import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const Categories = () => {
  const { activeCategory, setActiveCategory } =
    useContext(ProductsContext) || {};

  const handleActiveCategory = (category: string) => {
    if (setActiveCategory) setActiveCategory(category);
  };

  return (
    <div className="justify-between hidden items-center gap-4 px-8 py-4 md:px-16 text-xs md:text-base sm:flex md:flex">
      <span
        onClick={() => handleActiveCategory("all")}
        className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg border-[1px] flex justify-center items-center ${
          activeCategory === "all" ? "border-gray5" : "border-gray6"
        }`}
      >
        All
      </span>
      <span
        onClick={() => handleActiveCategory("men's clothing")}
        className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
          activeCategory === "men's clothing"
            ? "border-gray5"
            : "border-gray6"
        }`}
      >
        For Men
      </span>
      <span
        onClick={() => handleActiveCategory("jewelery")}
        className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
          activeCategory === "jewelery" ? "border-gray5" : "border-gray6"
        }`}
      >
        Jewelery
      </span>
      <span
        onClick={() => handleActiveCategory("electronics")}
        className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
          activeCategory === "electronics" ? "border-gray5" : "border-gray6"
        }`}
      >
        Electronics
      </span>
      <span
        onClick={() => handleActiveCategory("women's clothing")}
        className={`flex-1 md:p-2 bg-gray9 hover:bg-gray8 hover:border-gray5 px-6 py-4 rounded-lg  border-[1px] flex justify-center items-center ${
          activeCategory === "women's clothing"
            ? "border-gray5"
            : "border-gray6"
        }`}
      >
        For Women
      </span>
    </div>
  );
};

export default Categories;
