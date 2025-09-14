import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Karate } from "@/assets";
import Baku from "../../assets/Baku.png";
import Golf from "../../assets/Golf.png";
import Cricket from "../../assets/Cricket.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Liverpool from "../../assets/Liverpool.png";
import ManCity from "../../assets/ManCity.png";
import Chelsea from "../../assets/Chelsea.png";
import Totten from "../../assets/Totten.png";
import Arsenal from "../../assets/Arsenal.png";
import MnUnited from "../../assets/MnUnited.png";

function NewsCard({
    image,
    title,
    subtitle,
    type = "large",
}: {
    image: any;
    title: string;
    subtitle: string;
    type?: any;
}) {
    if (type === "large") {
        return (
            <div className="relative w-[270px] h-[300px] rounded-lg overflow-hidden shadow-md">
                <Karate className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full backdrop-blur-md p-4 rounded-b-lg">
                    <p className="text-sm text-gray-200">{subtitle}</p>
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-3 h-[85px] items-center bg-gray-100 p-3">
            <img src={image} alt={title} className="w-14 h-14 rounded-md object-cover" />
            <div>
                <p className="text-xs text-gray-500">{subtitle}</p>
                <h4 className="text-sm font-medium">{title}</h4>
            </div>
        </div>
    );
}


function ShutterOverlay({ onComplete }: { onComplete: () => void }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            onComplete();
        }, 600);
    };

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: clicked ? "100%" : 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute  w-screen h-screen inset-0 z-50 bg-gradient-to-b from-gray-900 via-black to-gray-800 flex items-center justify-center"
        >
            <button
                onClick={handleClick}
                className="text-white text-lg font-semibold bg-blue-600 px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition"
            >
                Click to see latest ranking and recent news
            </button>
        </motion.div>
    );
}


function FifthSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [triggered, setTriggered] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !triggered) {
                    setTriggered(true);
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [triggered]);

    const newsItems = [
        { id: 1, image: Karate, subtitle: "Day 5 Highlights", title: "Baku 2023 World Taekwondo Championships", type: "large" },
        { id: 2, image: Baku, subtitle: "#Pollar. 87 – 12 July 2023", title: "Baku 2023 Taekwondo Championships", type: "small" },
        { id: 3, image: Golf, subtitle: "#Golf. Toni – 20 July 2023", title: "Open Championship Royal Liverpool Golf", type: "small" },
        { id: 4, image: Cricket, subtitle: "#Cricket. Toni – 27 July 2023", title: "Ireland Tour of England Test 2023", type: "small" },
    ];

    const clubs = [
        { club: "Manchester City", logo: ManCity, gp: 38, w: 29, d: 6, l: 3, f: 99, a: 26, gd: 73 },
        { club: "Liverpool", logo: Liverpool, gp: 38, w: 28, d: 8, l: 2, f: 94, a: 26, gd: 68 },
        { club: "Chelsea", logo: Chelsea, gp: 38, w: 21, d: 11, l: 6, f: 76, a: 33, gd: 43 },
        { club: "Tottenham Hotspur", logo: Totten, gp: 38, w: 22, d: 5, l: 11, f: 69, a: 40, gd: 29 },
        { club: "Arsenal", logo: Arsenal, gp: 38, w: 22, d: 3, l: 13, f: 61, a: 48, gd: 13 },
        { club: "Manchester United", logo: MnUnited, gp: 38, w: 16, d: 10, l: 12, f: 57, a: 57, gd: 0 },
    ];

    return (
        <div ref={sectionRef} className="relative min-h-[100dvh] flex items-center justify-center">

            <AnimatePresence>
                {triggered && !showContent && <ShutterOverlay onComplete={() => setShowContent(true)} />}
            </AnimatePresence>

            {showContent && (
                <div className="w-full px-4 md:px-8 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Recent News</h2>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <NewsCard {...newsItems[0]} />
                            <div className="flex flex-col">
                                {newsItems.slice(1).map((news) => (
                                    <div key={news.id}>{NewsCard(news)}</div>
                                ))}
                                <button className="bg-gray-100 px-4 py-2 text-sm font-medium flex items-center justify-center">
                                    <p className="bg-[#B8C2CE] cursor-pointer px-2 py-1 text-white rounded-sm flex items-center gap-1">
                                        More <FaArrowRightLong />
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Clubs Ranking</h2>
                        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <table className="w-full h-[300px] text-xs sm:text-sm">
                                <thead className="bg-gray-200 text-gray-600">
                                    <tr>
                                        <th className="py-2 px-3">Club</th>
                                        <th className="py-2 px-3">GP</th>
                                        <th className="py-2 px-3">W</th>
                                        <th className="py-2 px-3">D</th>
                                        <th className="py-2 px-3">L</th>
                                        <th className="py-2 px-3">F</th>
                                        <th className="py-2 px-3">A</th>
                                        <th className="py-2 px-3">GD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clubs.map((club, i) => (
                                        <tr key={i} className="border-t hover:bg-gray-50 transition text-gray-800">
                                            <td className="py-2 px-3 font-medium flex items-center gap-2">
                                                <span>{i + 1}.</span>
                                                <img src={club.logo} alt={club.club} className="w-6 h-6 rounded-full" />
                                                {club.club}
                                            </td>
                                            <td className="py-2 px-3">{club.gp}</td>
                                            <td className="py-2 px-3">{club.w}</td>
                                            <td className="py-2 px-3">{club.d}</td>
                                            <td className="py-2 px-3">{club.l}</td>
                                            <td className="py-2 px-3">{club.f}</td>
                                            <td className="py-2 px-3">{club.a}</td>
                                            <td className="py-2 px-3">{club.gd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FifthSection;
