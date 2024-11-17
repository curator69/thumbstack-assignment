import ButtonOutline from "@/macro-components/ButtonOutline";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="bg-[#FFF2F1] flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-10 lg:px-20 py-10 md:py-20">
      <div className="flex flex-col gap-8 md:gap-[8rem] w-full md:w-auto">
        <div className="flex flex-col gap-2">
          <p className="text-2xl md:text-3xl lg:text-[43px] font-bold text-redPrimary">
            Subscribe <span className="text-black">& Save</span>
          </p>
          <p className="text-base md:text-lg lg:text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <li className="text-lg md:text-xl lg:text-2xl font-medium">
            Save Upto 20%
          </li>
          <li className="text-lg md:text-xl lg:text-2xl font-medium">
            From as little as $0.70 a day
          </li>
          <li className="text-lg md:text-xl lg:text-2xl font-medium">
            Pause or cancel anytime
          </li>
          <ButtonOutline text="Shop Now" />
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <Image
          src="/images/subscribe.png"
          width={1440}
          height={400}
          alt="subscribe"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Subscribe;
