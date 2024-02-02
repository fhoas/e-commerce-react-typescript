import { Link } from "react-router-dom";

const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <span className="text-6xl font-bold text-white">High Quality</span>
      <span className="text-6xl">Product For You.</span>
      <p>Quality products imported from Japan, Europe and USA for you.</p>
      <Link
        className="bg-deepPurple1 hover:bg-deepPurple2 duration-200 text-primary p-4 rounded w-fit"
        to={"/products"}
      >
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default HeroLeft;
