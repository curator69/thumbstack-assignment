const features = [
  {
    title: "Returns Policy",
    description: "We've never had a return. That's how confident we are.",
  },
  {
    title: "Fast Delivery",
    description:
      "Guaranteed next-day shipping across New Zealand and Australia.",
  },
  {
    title: "Customer Support",
    description: "Contact us for personalised recommendations.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-between mx-4 md:mx-10 lg:mx-20 px-4 md:px-10 lg:px-20 py-10 md:py-20">
      {features.map((feature, index) => (
        <Feature
          title={feature.title}
          description={feature.description}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

const Feature = ({ title, description, index }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-center w-full md:w-auto">
      <img
        src={`/icons/feature-${index + 1}.svg`}
        alt="feature"
        className="w-16 md:w-20 lg:w-24"
      />
      <p className="text-xl md:text-2xl lg:text-[28px] font-medium">{title}</p>
      <p className="text-base md:text-lg lg:text-xl font-normal">
        {description}
      </p>
    </div>
  );
};

export default Features;
