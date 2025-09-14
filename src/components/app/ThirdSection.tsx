import React, { useRef, useState } from "react";
import { Boxing, Cyclist, RaceHorse, CyclingBenefit } from "@/assets";
import { motion, useMotionValue, useSpring } from "framer-motion";
import NewsCard from "../cards/NewsCard";

export default function ThirdSection() {
    const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const rSpringX = useSpring(rx, { stiffness: 200, damping: 30 });
    const rSpringY = useSpring(ry, { stiffness: 200, damping: 30 });

    const onRightPointerMove = (e: React.PointerEvent) => {
        if (!rightRef.current) return;
        const rect = rightRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        rx.set((px - 0.5) * -18);
        ry.set((py - 0.5) * 10);
    };
    const onRightLeave = () => {
        rx.set(0);
        ry.set(0);
    };

    return (
        <div className="w-full md:px-10 lg:px-28 py-10 h-full">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                className="flex flex-col xl:flex-row gap-6 items-stretch"
            >


                <motion.div
                    onPointerEnter={() => setHoveredSide("left")}
                    onPointerLeave={() => setHoveredSide(null)}
                    className="flex-1 bg-[#EBEEF3] p-6 rounded-xl flex flex-col"
                    animate={{
                        scale: hoveredSide === "left" ? 0.985 : hoveredSide === "right" ? 1.015 : 1,
                        filter: hoveredSide === "left" ? "brightness(0.95) saturate(0.95)" : "none",
                    }}
                    transition={{ duration: 0.35 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-bold mb-6"
                    >
                        Trending News
                    </motion.h2>

                    <NewsCard
                        image={RaceHorse}
                        author="Race98"
                        date="03 June 2023"
                        title="6-Year-Old Horse Dies at Belmont Park After Race Injury"
                        desc="NEW YORK—A 6-year-old horse died after being injured in a race at Belmont Park ahead of next week’s"
                        index={0}
                    />

                    <NewsCard
                        image={Cyclist}
                        author="Jony.Ls"
                        date="03 June 2023"
                        title="Savilia Blunk Embraces Longer Season With World Cup"
                        desc="Last year, Savilia Blunk took a more conservative approach to her first season as an Elite Class athlete, skipping some"
                        index={1}
                    />

                    <NewsCard
                        image={Boxing}
                        author="King.F"
                        date="03 June 2023"
                        title="Ryan Garcia is fighting again, this time on social media"
                        desc="Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on"
                        index={2}
                    />
                </motion.div>


                <motion.div
                    ref={rightRef}
                    onPointerMove={onRightPointerMove}
                    onPointerEnter={() => setHoveredSide("right")}
                    onPointerLeave={() => {
                        setHoveredSide(null);
                        onRightLeave();
                    }}
                    className="flex-1 relative rounded-xl overflow-hidden min-h-[420px] md:min-h-[520px]"
                    style={{
                        perspective: 1200,
                    }}
                    animate={{
                        scale: hoveredSide === "right" ? 0.985 : hoveredSide === "left" ? 1.015 : 1,
                        filter: hoveredSide === "right" ? "brightness(0.96) saturate(0.98)" : "none",
                    }}
                    transition={{ duration: 0.35 }}
                >
                    <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.07 }}
                        transition={{ duration: 1, ease: "linear" }}
                        style={{
                            rotateX: rSpringY,
                            rotateY: rSpringX,
                            transformStyle: "preserve-3d",
                        } as any}
                    >
                        <CyclingBenefit className="w-full h-full object-cover" />
                    </motion.div>


                </motion.div>
            </motion.div>
        </div>
    );
}
