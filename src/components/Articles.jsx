import Image from "next/image";

const Articles = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-4 md:px-10 lg:px-20">
      <p className="text-2xl md:text-3xl lg:text-[43px] font-bold text-redPrimary">
        Trusted by trainers
      </p>
      <p className="text-2xl md:text-3xl lg:text-[43px] font-bold">
        across New Zealand and Australia
      </p>
      <p className="text-base md:text-lg lg:text-xl font-normal w-full md:w-[70%] lg:w-[60%]">
        Outperform the competition. Your horse's energy, stamina, and recovery
        can be the 1% difference between first and second place. Combat fatigue,
        muscle stiffness, and cramping with TTL's top-selling products,
        formulated for optimal performance and endurance.
      </p>

      <div className="flex gap-4 overflow-scroll scrollbar-hide pb-8">
        {articles.map((_, index) => (
          <Article key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

const Article = ({ index }) => {
  return (
    <div className="shadow-lg p-3 md:p-4 flex flex-col gap-10 md:gap-14 min-w-[300px] md:min-w-[375px] lg:min-w-[425px] h-[400px] md:h-[460px] rounded-lg">
      <div className="flex flex-col gap-4 w-full">
        <Image
          src={`/images/article-1.png`}
          alt={`support-${index}`}
          width={300}
          height={300}
          className="w-full"
        />
        <p className="text-sm md:text-base font-medium">
          At The Trainer Locker, I focus on building trust and communication
          between horse and rider, With over 15 years of experience.
        </p>
      </div>

      <div className="flex gap-4 items-center bg-[#F5F5F5] p-3 md:p-4 rounded-xl">
        <Image
          src="/images/article-profile.png"
          alt="profile"
          width={50}
          height={50}
        />

        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-medium">James Morgan</p>
          <p className="text-xs md:text-sm font-medium">
            Certificate IV in Horse Racing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;

const articles = [1, 2, 3, 4];
