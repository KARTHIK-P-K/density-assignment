import Image from "next/image";
import Header from "@/components/Header";
import Main from "@/components/Main";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import SixthSection from "@/components/SixthSection";
import SeventhSection from "@/components/SeventhSection";
import EighthSection from "@/components/EighthSection";
import NinethSection from "@/components/NinethSection";
import TenthSection from "@/components/TenthSection";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Main />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinethSection />
      <TenthSection />
    </div>
  );
}
