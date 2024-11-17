// import ButtonOutline from "@/macro-components/ButtonOutline";
// import Image from "next/image";

// const Support = () => {
//   return (
//     <div className="flex flex-col gap-8 px-20">
//       <div>
//         <p className="text-[43px] font-bold">
//           <span className="text-redPrimary">Support</span> Your Horse, Head to
//           Hoof
//         </p>
//         <p className="text-xl font-normal">
//           Click to learn how our products enhance specific areas.
//         </p>
//       </div>

//       <div className="flex items-center justify-between gap-8 w-full h-full">
//         <div className="w-[20%] min-w-[350px] h-full flex-shrink-0">
//           {products.map((product) => (
//             <Product
//               title={product.title}
//               description={product.description}
//               supports={product.supports}
//               price={product.price}
//               perDayPrice={product.perDayPrice}
//             />
//           ))}
//         </div>

//         <div className="w-full min-h-[586px] h-full flex flex-col gap-4">
//           <div className="flex-1 w-full h-full bg-support bg-cover bg-center bg-no-repeat rounded-lg"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Support;

// const Product = ({ title, description, supports, price, perDayPrice }) => {
//   return (
//     <div className="border-[1px] border-solid border-[#D9D9D9] p-4 rounded-xl min-w-[350px] h-full flex flex-col gap-4">
//       <Image
//         src={`/images/${title}.png`}
//         alt={title}
//         width={300}
//         height={300}
//         className="bg-[#EBEBEB] p-4 w-full"
//         style={{
//           borderTopLeftRadius: "10px",
//           borderTopRightRadius: "10px",
//         }}
//       />
//       <div className="flex flex-col gap-2">
//         <p className="text-2xl font-medium">{title}</p>
//         <p className="font-normal text-base">{description}</p>
//         <p className="font-normal text-sm">
//           Supports:{" "}
//           <span className="ml-2 font-bold">{supports.join(", ")}</span>
//         </p>

//         <div className="flex items-center justify-between gap-4">
//           <div className="flex flex-col gap-2">
//             <p className="font-extrabold text-xl text-redPrimary">{price}</p>
//             <p className="bg-[#EBEBEB] font-normal text-sm p-2 rounded-md">
//               {perDayPrice} per day
//             </p>
//           </div>
//           <ButtonOutline color="redPrimary" text="Shop Now" />
//         </div>
//       </div>
//     </div>
//   );
// };

import ButtonOutline from "@/macro-components/ButtonOutline";
import Image from "next/image";

const Support = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 px-4 md:px-10 lg:px-20">
      <div>
        <p className="text-2xl md:text-3xl lg:text-[43px] font-bold">
          <span className="text-redPrimary">Support</span> Your Horse, Head to
          Hoof
        </p>
        <p className="text-base md:text-lg lg:text-xl font-normal">
          Click to learn how our products enhance specific areas.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full h-full">
        <div className="w-full md:w-[20%] min-w-[280px] md:min-w-[320px] lg:min-w-[350px] h-full flex-shrink-0">
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

        <div className="w-full h-[600px] xl:h-[586px] flex flex-col gap-4">
          <div className="w-full h-full bg-support bg-cover bg-center bg-no-repeat rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const Product = ({ title, description, supports, price, perDayPrice }) => {
  return (
    <div className="border-[1px] border-solid border-[#D9D9D9] p-3 md:p-4 rounded-xl min-w-[280px] md:min-w-[320px] lg:min-w-[350px] h-full flex flex-col gap-3 md:gap-4">
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

export default Support;

const products = [
  {
    title: "UN-LOCK+",
    description:
      "Horserace performance muscle formula for endurance, fatigue and recovery",
    supports: ["Endurance", "Recovery"],
    price: "$149.00",
    perDayPrice: "$0.75",
  },
];
