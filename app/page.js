import Image from "next/image";
import Header from "@/components/Header";
import Main from "@/components/Main";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Main />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
