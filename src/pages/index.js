import {
  About,
  Articles,
  Banner1,
  Banner2,
  ContactUs,
  Features,
  Footer,
  Hero,
  Notification,
  Products,
  Subscribe,
  Support,
} from "@/components";

import { Montserrat } from "next/font/google";

const mon = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={mon.className}>
      <Notification />
      <Hero />
      <div className="flex flex-col gap-[10rem] mt-20">
        <About />
        <Products />
        <Banner1 />
        <Support />
        <Articles />
        <Banner2 />
        <Features />
        <Subscribe />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
