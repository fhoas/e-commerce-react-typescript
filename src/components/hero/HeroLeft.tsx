import { Link } from "react-router-dom";

const HeroLeft = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-heading text-4xl">
        High Quality Product For You.
      </span>
      <p>Quality products imported from Japan, Europe and USA for you.</p>
      <button className="bg-primaryWhite text-primaryBlack p-4 rounded w-fit">
        <Link to={"/products"}>Shop Now</Link>
      </button>
    </div>
  );
};

export default HeroLeft;
