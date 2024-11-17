import ButtonFilled from "@/macro-components/ButtonFilled";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  return (
    <div className="bg-hero-pattern h-[100vh] w-full bg-no-repeat bg-cover text-white py-10 px-4 md:px-10 lg:px-20 relative">
      <HeaderLinks />
      <HeroContent />
      <Features />
    </div>
  );
};

export default Hero;

const HeaderLinks = () => {
  return (
    <div className="flex items-center justify-between">
      <img src="/icons/logo.svg" alt="logo" />
      <div className="hidden xl:flex items-center justify-center gap-8">
        <p>Shop All</p>
        <p>Shop by Benefits</p>
        <p>About</p>
        <p>Bundles</p>
        <p>Contact</p>
      </div>
      <div className="hidden xl:flex items-center justify-center gap-8">
        <img src="/icons/search.svg" alt="search icon" />
        <img src="/icons/shop.svg" alt="shop icon" />
        <img src="/icons/profile.svg" alt="profile icon" />
      </div>
      <Navbar />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="xl:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-2xl"
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-black/90 text-white p-8 rounded-lg">
          <div className="flex flex-col gap-6">
            <p>Shop All</p>
            <p>Shop by Benefits</p>
            <p>About</p>
            <p>Bundles</p>
            <p>Contact</p>
          </div>

          <div className="flex items-center gap-8 mt-8">
            <img src="/icons/search.svg" alt="search icon" />
            <img src="/icons/shop.svg" alt="shop icon" />
            <img src="/icons/profile.svg" alt="profile icon" />
          </div>
        </div>
      )}
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-20 sm:mt-24 lg:mt-[10rem]">
      <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
        <p className="text-sm sm:text-base font-medium uppercase">
          Microseconds Matter
        </p>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-tight lg:leading-[88px]">
          Win your horserace <br />
          with TTL supplements
        </p>
      </div>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-normal leading-normal lg:leading-[39px] max-w-[40ch]">
        Scientifically formulated racehorse supplements from the home of
        champions
      </p>
      <ButtonFilled bgColor="redPrimary" text="Discover" arrow={false} />
    </div>
  );
};

const Features = () => {
  return (
    <div className="absolute flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 -bottom-[30px] left-1/2 -translate-x-1/2 w-full px-4 sm:px-8 lg:px-0">
      {features.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-redSecondary p-2 flex items-center gap-2 text-black rounded-full w-full sm:w-[12rem] lg:w-[15rem] overflow-hidden"
          >
            <img
              src={`/icons/${item}.svg`}
              alt={item}
              className="p-1.5 sm:p-2 bg-white rounded-full w-[15%] flex-shrink-0"
            />
            <p className="text-[clamp(0.75rem,1.5vw,1.125rem)] font-medium truncate">
              {item}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const features = [
  "Never Got Returned Products",
  "Fast Delivery",
  "Customer Support",
  "Lorem Ipsum",
];
