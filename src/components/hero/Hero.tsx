import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-between items-center gap-4 md:w-[80%]">
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;