import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import RugbyPlayer1 from "../../assets/RugbyPlayer.png";
import RugbyPlayer2 from "../../assets/SoccerLeague.png";
import RugbyPlayer3 from "../../assets/IceSkating.png";
import RugbyPlayer4 from "../../assets/ShuttleCock.png";

const images = [RugbyPlayer1, RugbyPlayer2, RugbyPlayer3, RugbyPlayer4];

function SeventhSection() {
    const [index, setIndex] = useState(0);
    const totalPages = images.length;

    const nextSlide = () => {
        if (index < totalPages - 1) setIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (index > 0) setIndex((prev) => prev - 1);
    };

    return (
        <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-10">

            <div className="bg-[#EBEEF3] w-full rounded-2xl flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-6 md:px-12 py-10">
                <div className="flex-1 w-full flex flex-col gap-6 relative z-10">
                    <motion.h1
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
              bg-gradient-to-b from-[#262626] to-[#B8C2CE] bg-clip-text text-transparent"
                        initial={{ x: -100, scale: 0.8, opacity: 0 }}
                        animate={{ x: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        NEWSLETTER <br /> SUBSCRIPTION
                    </motion.h1>


                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="yourmail@example.com"
                            className="flex-1 p-3 rounded-l-md border border-gray-300 outline-none text-sm sm:text-base"
                        />
                        <button className="px-4 bg-black text-white rounded-r-md hover:bg-gray-800 transition">
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>


                <div className="flex-1 flex items-center justify-center md:justify-end relative mt-8 md:mt-0 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={images[index]}
                            alt="Rugby Player"
                            className="absolute w-auto max-h-full object-contain"
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -200, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-6">
                <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded bg-black text-white font-bold"><SlSocialFacebook /></div>
                    <div className="w-10 h-10 flex items-center justify-center rounded bg-black text-white font-bold"><FaInstagram /></div>
                    <div className="w-10 h-10 flex items-center justify-center rounded bg-black text-white font-bold"><FiTwitter /></div>
                </div>

                <div className="hidden md:flex gap-3 items-center">
                    <button
                        onClick={prevSlide}
                        disabled={index === 0}
                        className={`w-10 h-10 flex items-center justify-center rounded
              ${index === 0
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-gray-200 hover:bg-gray-300"}`}
                    >
                        <FaArrowLeftLong />
                    </button>

                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full
                ${index === i
                                    ? "bg-black text-white"
                                    : "bg-[#EBEEF3] text-black"}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={nextSlide}
                        disabled={index === totalPages - 1}
                        className={`w-10 h-10 flex items-center justify-center rounded
              ${index === totalPages - 1
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-black text-white hover:bg-gray-800"}`}
                    >
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

        </section>
    );
}

export default SeventhSection;
