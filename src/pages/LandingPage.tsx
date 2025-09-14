import FirstSection from "@/components/app/FirstSection";
import Navbar from "../components/app/Navbar";
import SecondSection from "@/components/app/SecondSection";
import ThirdSection from "@/components/app/ThirdSection";
import FourthSection from "@/components/app/FourthSection";
import FifthSection from "@/components/app/FifthSection";
import SixthSection from "@/components/app/SixthSection";
import SeventhSection from "@/components/app/SeventhSection";

function LandingPage() {

  return (
    <div className="w-screen overflow-x-hidden">
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="h-[100dvh]">
          <FirstSection />
        </div>
      </div>

      <div className="min-h-[100dvh] flex items-center">
        <SecondSection />
      </div>

      <div className="min-h-[100dvh] flex items-center">
        <ThirdSection />
      </div>

      <div className="min-h-[100dvh] flex items-center">
        <FourthSection />
      </div>

      <div className="min-h-[100dvh] flex items-center">
        <FifthSection />
      </div>

      <div className="min-h-[100dvh] flex items-center">
        <SixthSection />
      </div>

      <div className="min-h-[100dvh] flex items-center">
        <SeventhSection />
      </div>
    </div>
  );
}

export default LandingPage;
