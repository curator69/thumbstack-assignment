import ButtonFilled from "@/macro-components/ButtonFilled";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-[6rem] px-4 md:px-10 lg:px-20 pt-10 md:pt-20 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <div className="flex flex-col gap-4 w-full md:w-[50%] xl:pr-[10rem]">
          <p className="text-2xl md:text-[36px] font-semibold leading-tight md:leading-[45px] max-w-[20ch]">
            Uniquely formulated for horse trainers
          </p>
          <p className="text-3xl md:text-[43px] font-bold text-redPrimary leading-tight md:leading-[56px]">
            Who Want to Win
          </p>
          <p className="text-base md:text-[21px] font-normal leading-relaxed md:leading-[30px] mb-4 md:mb-8">
            From joint health to muscle strength, our products keep your horse
            fit, fast, and ready to win. With advanced formulations trusted by
            top trainers, you can push past the competition and achieve the
            results you've been aiming for.
          </p>
          <ButtonFilled bgColor="redPrimary" text="Get Race Ready" arrow />
        </div>

        <Image
          src="/images/about-1.png"
          alt="about-1"
          width={500}
          height={500}
          className="rounded-[10px] w-full md:w-[50%] h-auto"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full">
        <Image
          src="/images/about-2.png"
          alt="about-2"
          width={500}
          height={500}
          className="rounded-[10px] w-full md:w-[50%] h-auto"
        />

        <div className="flex flex-col gap-4 w-full md:w-[50%] xl:pl-[10rem]">
          <p className="text-2xl md:text-[36px] font-semibold leading-tight md:leading-[45px] max-w-[20ch]">
            Natural
          </p>
          <p className="text-3xl md:text-[43px] font-bold text-redPrimary leading-tight md:leading-[56px]">
            Bleeder Remedy
          </p>
          <p className="text-base md:text-[21px] font-normal leading-relaxed md:leading-[30px] mb-4 md:mb-8">
            While more than 95% of racehorses experience exercise-induced
            pulmonary haemorrhage (EIPH), commonly known as bleeders, you want
            to avoid exposing them to side effects like dehydration from potent
            drugs. TTL's BleederShield can help strengthen capillaries in the
            lungs, reduce oxidative stress, and improve blood flow.
          </p>
          <ButtonFilled bgColor="redPrimary" text="Get Race Ready" arrow />
        </div>
      </div>
    </div>
  );
};

export default About;
