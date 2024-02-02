import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const Categories = () => {
  const { activeCategory, setActiveCategory } =
    useContext(ProductsContext) || {};

  const handleActiveCategory = (category: string) => {
    if (setActiveCategory) setActiveCategory(category);
  };

  return (
    <div className="justify-between hidden items-center gap-4 p-8 md:px-16 md:py-8 text-xs md:text-base sm:flex md:flex">
      <span
        onClick={() => handleActiveCategory("all")}
        className={`flex-1 py-2 md:p-4 border-[#4200FE  border-2 flex justify-center items-center ${
          activeCategory === "all" ? "border-[#4200FE]" : "border-[#fff]"
        }`}
      >
        All
      </span>
      <span
        onClick={() => handleActiveCategory("men's clothing")}
        className={`flex-1 py-2 md:p-4 border-[#4200FE] border-2 flex justify-center items-center ${
          activeCategory === "men's clothing"
            ? "border-[#4200FE]"
            : "border-[#fff]"
        }`}
      >
        For Men
      </span>
      <span
        onClick={() => handleActiveCategory("jewelery")}
        className={`flex-1 py-2 md:p-4 border-[#4200FE] border-2 flex justify-center items-center ${
          activeCategory === "jewelery" ? "border-[#4200FE]" : "border-[#fff]"
        }`}
      >
        Jewelery
      </span>
      <span
        onClick={() => handleActiveCategory("electronics")}
        className={`flex-1 py-2 md:p-4 border-[#4200FE] border-2 flex justify-center items-center ${
          activeCategory === "electronics"
            ? "border-[#4200FE]"
            : "border-[#fff]"
        }`}
      >
        Electronics
      </span>
      <span
        onClick={() => handleActiveCategory("women's clothing")}
        className={`flex-1 py-2 md:p-4 border-[#4200FE] border-2 flex justify-center items-center ${
          activeCategory === "women's clothing"
            ? "border-[#4200FE]"
            : "border-[#fff]"
        }`}
      >
        For Women
      </span>
    </div>
  );
};

export default Categories;
