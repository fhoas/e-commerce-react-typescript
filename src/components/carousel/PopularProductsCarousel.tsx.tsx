import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const carouselProducts = [
  {
    id: 7,
    name: "Chanel Coco Noir Eau De",
    price: "$1049 USD",
    imageUrl:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
  },
  {
    id: 8,
    name: "Dior J'adore",
    price: "$1049 USD",
    imageUrl:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png",
  },
  {
    id: 5,
    name: "Red Nail Polish",
    price: "$349 USD",
    imageUrl:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
  },
];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = carouselProducts.length;
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const navigate = useNavigate();

  const updateSlide = (direction: any) => {
    let newSlideIndex = slideIndex + direction;
    if (newSlideIndex < 0) {
      newSlideIndex = 0;
    } else if (newSlideIndex >= totalSlides) {
      newSlideIndex = totalSlides - 1;
    }
    setSlideIndex(newSlideIndex);
    set({ x: -newSlideIndex * 100 });
  };

  const handleDrag = (mx: any) => {
    if (mx < -100 && slideIndex < totalSlides - 1) {
      updateSlide(1);
    } else if (mx > 100 && slideIndex > 0) {
      updateSlide(-1);
    }
  };

  const handleProductClick = (id: number) => {
    navigate(`/products/details/${id}`);
  };

  return (
    <div className="hidden sm:block w-full cursor-grab overflow-hidden pb-6 pt-1 relative bg-gray9 mt-10 rounded-[5px]">
      <h2 className="flex gap-2 items-center text-white text-lg sm:text-2xl font-bold mx-4 mt-4 sm:mx-6 sm:mt-6">
        Popular Products
        <img
          className="h-[35px] w-[35px] mb-2"
          src="../../assets/fire.svg"
          alt=""
        />
      </h2>

      <animated.ul
        className="animate-carousel flex gap-1 sm:gap-2 p-4 sm:p-6 flex-row rounded-[5px] justify-center items-center"
        style={{ transform: x.to((x) => `translateX(${x}%)`) }}
        onMouseDown={(e) => handleDrag(e.movementX)}
        onTouchStart={(e) => handleDrag(e.touches[0].clientX)}
      >
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.id}-${i}`}
            className="flex justify-center items-center group relative transition-all ease-in-out duration-500 bg-transparent aspect-square h-[75px] sm:h-[125px] md:h-[250px] max-h-[275px] max-w-[475px] flex-none w-1/3"
          >
            <div
              className="relative h-full w-full cursor-pointer flex justify-center items-center"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                alt={product.name}
                src={product.imageUrl}
                className="w-[95%] h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 rounded-[5px]"
              />
              <div className="absolute bottom-[-6px] left-0 right-0 p-4 bg-gray9/70 text-white opacity-1 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <p className="text-sm">{product.name}</p>
              </div>
            </div>
          </li>
        ))}
      </animated.ul>
    </div>
  );
};

export default Carousel;
