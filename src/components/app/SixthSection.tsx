import { useState } from "react";
import BasketballEquipment from "../../assets/BasketballEquipment.png";
import IceSkating from "../../assets/IceSkating.png";
import ShuttleCock from "../../assets/ShuttleCock.png";
import Jake from "../../assets/Jake.png";
import Foxi from "../../assets/Foxi.png";
import Bong from "../../assets/Bong.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function ArticleCard({ image, tag, authorImg, author, date, title, desc }: any) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 w-full"
        >

            <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded">
                    {tag}
                </span>
            </div>

            <div className="flex items-center gap-3">
                <img src={authorImg} alt={author} className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-sm font-medium">{author}</p>
                    <p className="text-xs text-gray-500">{date}</p>
                </div>
            </div>

            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </motion.div>
    );
}

function SixthSection() {
    const articles = [
        {
            image: BasketballEquipment,
            tag: "Basketball",
            authorImg: Jake,
            author: "Jake Will.",
            date: "04 June 2023",
            title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
            desc: "This article was written by Jake Willihoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
        },
        {
            image: IceSkating,
            tag: "Hockey",
            authorImg: Foxi,
            author: "Foxi.zacon",
            date: "03 June 2023",
            title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
            desc: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
        },
        {
            image: ShuttleCock,
            tag: "Badminton",
            authorImg: Bong,
            author: "Bong Lozada",
            date: "01 June 2023",
            title: "‘Outdoor’ Badminton Gets Support From Local Federation",
            desc: "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);


    const handlePrev = () => {
        setStartIndex((prev) => (prev + 1) % articles.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev - 1 + articles.length) % articles.length);
    };

    const getVisibleArticles = () => {
        const screenWidth =
            typeof window !== "undefined" ? window.innerWidth : 1200;

        let visibleCount = 3;
        if (screenWidth < 768) visibleCount = 1;
        else if (screenWidth < 1024) visibleCount = 2;

        return Array.from({ length: visibleCount }, (_, i) => {
            const index = (startIndex + i) % articles.length;
            return articles[index];
        });
    };

    return (
        <section className="w-full px-6 md:px-10 lg:px-28 py-10">
            <h2 className="text-2xl font-bold mb-8">Sports Article</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <AnimatePresence mode="popLayout">
                    {getVisibleArticles().map((article, idx) => (
                        <ArticleCard key={idx} {...article} />
                    ))}
                </AnimatePresence>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={handlePrev}
                    className="w-10 h-10 flex items-center justify-center rounded bg-black text-white hover:bg-gray-800 transition"
                >
                    <FaArrowLeftLong />
                </button>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center rounded bg-black text-white hover:bg-gray-800 transition"
                >
                    <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
}

export default SixthSection;
