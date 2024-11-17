import ButtonOutline from "@/macro-components/ButtonOutline";
import Image from "next/image";

const Products = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 w-full">
      <div className="flex flex-col gap-4 px-4 md:px-10 lg:px-20">
        <p className="text-2xl md:text-3xl lg:text-[43px] font-bold">
          Our Core Products
        </p>
        <p className="text-base md:text-lg lg:text-[20px] font-normal max-w-[40ch]">
          Keep your horse race-ready with our all-natural, performance-enhancing
          solutions.
        </p>
      </div>
      <div className="flex gap-4 overflow-scroll scrollbar-hide px-4 md:px-10 lg:px-20 pb-8">
        {products.map((product) => (
          <Product
            key={product.title}
            title={product.title}
            description={product.description}
            supports={product.supports}
            price={product.price}
            perDayPrice={product.perDayPrice}
          />
        ))}
      </div>
    </div>
  );
};

const Product = ({ title, description, supports, price, perDayPrice }) => {
  return (
    <div className="border-[1px] border-solid border-[#D9D9D9] p-3 md:p-4 rounded-xl min-w-[280px] md:min-w-[320px] lg:min-w-[350px] flex flex-col gap-3 md:gap-4">
      <Image
        src={`/images/${title}.png`}
        alt={title}
        width={300}
        height={300}
        className="bg-[#EBEBEB] p-4 w-full"
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl md:text-2xl font-medium">{title}</p>
        <p className="text-sm md:text-base font-normal">{description}</p>
        <p className="text-xs md:text-sm font-normal">
          Supports:{" "}
          <span className="ml-2 font-bold">{supports.join(", ")}</span>
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-extrabold text-lg md:text-xl text-redPrimary">
              {price}
            </p>
            <p className="bg-[#EBEBEB] text-xs md:text-sm font-normal p-2 rounded-md">
              {perDayPrice} per day
            </p>
          </div>
          <ButtonOutline color="redPrimary" text="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Products;

const products = [
  {
    title: "UN-LOCK+",
    description:
      "Horserace performance muscle formula for endurance, fatigue and recovery",
    supports: ["Endurance", "Recovery"],
    price: "$149.00",
    perDayPrice: "$0.75",
  },
  {
    title: "Flexify-HA",
    description:
      "Joint support formula for cartilage, flexibility and joint health",
    supports: ["Joint Health"],
    price: "$149.00",
    perDayPrice: "$0.75",
  },
  {
    title: "EPO-Equine",
    description:
      "All-natural blood builder optimises oxygen levels for peak performance",
    supports: ["Endurance", "Recovery"],
    price: "$149.00",
    perDayPrice: "$0.75",
  },
  {
    title: "Bleeder Shield",
    description: "One-of-a-kind respiratory formula. Now comes in a powder",
    supports: ["Endurance", "Recovery"],
    price: "$149.00",
    perDayPrice: "$0.75",
  },
  {
    title: "UN-LOCK+",
    description:
      "Natural blood builder focused on optimising performance for equestrian horses.",
    supports: ["Endurance", "Recovery"],
    price: "$149.00",
    perDayPrice: "$0.75",
  },
];
