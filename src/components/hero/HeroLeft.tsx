import { Link } from "react-router-dom";

const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <span className="text-6xl font-bold text-white">High Quality</span>
      <span className="text-6xl">Product For You.</span>
      <p className="text-gray5">
        Quality products imported from Japan, Europe and USA for you.
      </p>
      <Link
        className="bg-gray9 border-gray6 hover:bg-gray8 hover:border-gray5 px-4 py-2 border-[1px] duration-200 text-primary rounded w-fit"
        to={"/products"}
      >
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default HeroLeft;