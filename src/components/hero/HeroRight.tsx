const HeroRight = () => {
  return (
    <div className="hidden lg:flex md:flex sm:flex justify-between items-end">
      <div className="h-[450px] bg-deepPurple1 w-[100px] right-0 bottom-0"></div>
      <img
        className="h-[550px] w-[350px] rounded border-0	"
        src="./assets/t.gif"
        alt="hero-image"
      />
    </div>
  );
};

export default HeroRight;
