import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Soccer, BasketBallonFloor, SportsCar, TableTennis } from "@/assets";
import { LABELS } from "@/utils/Labels";

const itemVariants = {
    hiddenLeft: { x: -120, opacity: 0 },
    hiddenRight: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exitLeft: { x: -150, opacity: 0 },
    exitRight: { x: 150, opacity: 0 },
};

export default function SecondSection() {

    const columns = [
        [
            { type: "card", title: LABELS.SECOND_SECTION.FOOTBALL, alt: "football" },
            { type: "image", img: Soccer, alt: "football" },
        ],
        [
            { type: "image", img: BasketBallonFloor, alt: "basketball" },
            { type: "card", title: LABELS.SECOND_SECTION.BASKET_BALL },
        ],
        [
            { type: "card", title: LABELS.SECOND_SECTION.CAR_SPORT },
            { type: "image", img: SportsCar, alt: "sports car" },
        ],
        [
            { type: "image", img: TableTennis, alt: "table tennis" },
            { type: "card", title: LABELS.SECOND_SECTION.TABLE_TENNIS},
        ],
    ];

    return (
        <section className="bg-gray-50 py-10 px-5 md:px-20 w-full h-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">{LABELS.SECOND_SECTION.HEADING}</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {columns.map((col, colIdx) => {
                    const isLeftHalf = colIdx < 2;


                    return (
                        <div key={colIdx} className="flex flex-col gap-6 md:gap-6">


                            {col.map((item, idx) => {
                                const ref = useRef(null);
                                const inView = useInView(ref, { amount: 0.3 });

                                const animateVariant = inView
                                    ? "visible"
                                    : isLeftHalf
                                        ? "exitLeft"
                                        : "exitRight";

                                const initialVariant = isLeftHalf ? "hiddenLeft" : "hiddenRight";

                                const Img = item.type === "image" ? item.img : null;

                                return (
                                    <motion.div
                                        key={idx}
                                        ref={ref}
                                        className={`rounded-xl overflow-hidden flex items-center justify-center ${item.type === "card"
                                            ? "h-32 bg-gray-100 shadow-md md:h-40"
                                            : "h-48 md:h-80"
                                            }`}
                                        initial={initialVariant}
                                        animate={animateVariant}
                                        variants={itemVariants}
                                        transition={{ duration: 0.55, ease: "easeInOut" }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.type === "card" ? (
                                            <span className="text-xl md:text-2xl font-extrabold text-gray-800 text-center select-none">
                                                {item.title}
                                            </span>
                                        ) : (
                                            Img && <Img className="w-full h-full object-cover" />
                                        )}
                                    </motion.div>
                                );
                            })}

                        </div>
                    );
                })}
            </div>
        </section>
    );
}
