// import FirstSection from "@/components/app/FirstSection"
// import Navbar from "../components/app/Navbar"
// import SecondSection from "@/components/app/SecondSection"


// function LandingPage() {
//   return (
//      <div className='h-screen w-screen overflow-auto'>
//         <div className="w-full h-full flex flex-col">
//           <span>

//           <Navbar/>
//           </span>
//           <span className="flex-1">

//           <FirstSection/>


//           </span>

//         </div>
//         <div>

//           <SecondSection/>
//         </div>

//         </div>
//   )
// }

// export default LandingPage

// import FirstSection from "@/components/app/FirstSection"
// import Navbar from "../components/app/Navbar"
// import SecondSection from "@/components/app/SecondSection"
// import ThirdSection from "@/components/app/ThirdSection"

// function LandingPage() {
//   return (
//     <div className="w-screen overflow-auto">
//       <div className="w-full flex flex-col">
//         <Navbar />

//         {/* First Section should fill screen */}
//         <div className="h-screen">
//           <FirstSection />
//         </div>
//       </div>

//       {/* Second Section comes after */}
//       <div className="h-screen">
//         <SecondSection />
//       </div>

//        <div className="h-screen">
//         <ThirdSection />
//       </div>

//     </div>
//   )
// }

// export default LandingPage

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
      {/* Navbar + First Section */}
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="h-[100dvh]">
          <FirstSection />
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-[100dvh] flex items-center">
        <SecondSection />
      </div>

      {/* Third Section */}
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
