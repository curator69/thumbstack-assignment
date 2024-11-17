import ButtonFilled from "@/macro-components/ButtonFilled";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col gap-2 w-full md:w-[50%]">
        <div className="flex gap-2">
          <Image
            src="/images/contactus-1.png"
            alt="contactus-1"
            width={150}
            height={150}
            className="w-[30%] object-cover"
          />
          <Image
            src="/images/contactus-2.png"
            alt="contactus-1"
            width={150}
            height={150}
            className="w-[40%] object-cover"
          />
          <Image
            src="/images/contactus-3.png"
            alt="contactus-1"
            width={150}
            height={150}
            className="w-[30%] object-cover"
          />
        </div>
        <div className="flex gap-2">
          <Image
            src="/images/contactus-4.png"
            alt="contactus-1"
            width={150}
            height={150}
            className="w-[30%] object-cover"
          />
          <Image
            src="/images/contactus-5.png"
            alt="contactus-1"
            width={150}
            height={150}
            className="w-[30%] object-cover"
          />
          <Image
            src="/images/contactus-6.png"
            alt="contactus-1"
            width={150}
            height={150}
            className="w-[40%] object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center text-left w-full md:w-[50%]">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-2xl md:text-3xl lg:text-[43px] font-bold text-redPrimary">
            Stay Ahead of the Pack
          </p>
          <p className="text-base md:text-lg font-medium">
            Sign up for tips, offers, and more
          </p>
          <input
            type="text"
            placeholder="Type your email"
            className="rounded-full px-6 md:px-8 py-3 md:py-4 border-[1px] border-solid border-black w-full"
          />
          <ButtonFilled bgColor="redPrimary" text="Subscribe Now" />
          <div className="flex gap-6 md:gap-8">
            <img
              src="/icons/facebook.svg"
              alt="facebook icon"
              className="w-6 md:w-8"
            />
            <img
              src="/icons/instagram.svg"
              alt="instagram icon"
              className="w-6 md:w-8"
            />
            <img
              src="/icons/twitter.svg"
              alt="twitter icon"
              className="w-6 md:w-8"
            />
            <img
              src="/icons/youtube.svg"
              alt="youtube icon"
              className="w-6 md:w-8"
            />
            <img
              src="/icons/linkedin.svg"
              alt="linkedin icon"
              className="w-6 md:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
