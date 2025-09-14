import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SoccerLeague from "../../assets/SoccerLeague.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const images = [SoccerLeague, SoccerLeague, SoccerLeague, SoccerLeague];

function FourthSection() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < images.length - 1) {
            setIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="w-full h-full px-4 sm:px-10 md:px-16 lg:px-28 flex flex-col items-center">
          
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden ">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        alt="carousel"
                        className="w-full h-full"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </AnimatePresence>

                <button
                    onClick={prevSlide}
                    disabled={index === 0}
                    className={`absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 p-2 sm:p-3 rounded-full text-sm sm:text-base
            ${index === 0
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-gray-800 text-white hover:bg-gray-600"}`}
                >
                    <FaArrowLeftLong />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={index === images.length - 1}
                    className={`absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 p-2 sm:p-3 rounded-full text-sm sm:text-base
            ${index === images.length - 1
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-gray-800 text-white hover:bg-gray-600"}`}
                >
                    <FaArrowRightLong />
                </button>
            </div>

         
            <div className="flex gap-2 sm:gap-3 bg-[#EBEEF3] py-2 sm:py-4 w-full items-center justify-center sm:justify-end pr-2 sm:pr-10 ">
                <button
                    onClick={prevSlide}
                    disabled={index === 0}
                    className={`p-2 sm:p-3 rounded-full text-xs sm:text-sm
            ${index === 0
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-black text-white hover:bg-gray-600"}`}
                >
                    <FaArrowLeftLong />
                </button>

                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-base
              ${index === i ? "bg-black text-white" : "bg-[#EBEEF3] text-black"}`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={nextSlide}
                    disabled={index === images.length - 1}
                    className={`p-2 sm:p-3 rounded-full text-xs sm:text-sm
            ${index === images.length - 1
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-black text-white hover:bg-gray-600"}`}
                >
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
}

export default FourthSection;
