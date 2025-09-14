import React, { useRef, useState } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export default function NewsCard({ image: Image, date, author, title, desc, index }: any) {
    const ref = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });

    const imgTranslateX = useTransform(springX, (v) => v * 4);
    const imgTranslateY = useTransform(springY, (v) => v * 3);

    const [isHover, setIsHover] = useState(false);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        const rotateY = (px - 0.5) * -16;
        const rotateX = (py - 0.5) * 12;
        x.set(rotateY);
        y.set(rotateX);
    };

    const handlePointerLeave = () => {
        x.set(0);
        y.set(0);
        setIsHover(false);
    };

    return (
        <motion.div
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => setIsHover(true)}
            onPointerLeave={handlePointerLeave}
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.12, duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row gap-4 border-b border-gray-300 mb-6 rounded-lg p-2"
            style={{
                transformStyle: "preserve-3d",
                perspective: 1200,
                rotateX: springY,
                rotateY: springX,
            } as any}
        >

            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-lg"
                animate={{
                    opacity: isHover ? 0.18 : 0,
                    scale: isHover ? 1.02 : 1,
                }}
                transition={{ duration: 0.35 }}
                style={{
                    background:
                        "linear-gradient(120deg, rgba(99,102,241,0.15), rgba(236,72,153,0.12), rgba(56,189,248,0.08))",
                    mixBlendMode: "screen",
                    filter: "blur(12px)",
                } as any}
            />

            <motion.div
                className="w-full md:w-[234px] h-[180px] md:h-[150px] flex-shrink-0 rounded-lg overflow-hidden "
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220 }}
                style={{

                    translateX: imgTranslateX,
                    translateY: imgTranslateY,
                    translateZ: 0,
                } as any}
            >

                <Image className="w-full h-full object-cover" style={{ transformStyle: "preserve-3d" }} />
            </motion.div>

            <div className="flex flex-col justify-between mt-1 md:mt-0 px-1 md:px-0">
                <p className="text-xs text-gray-500">
                    {author} – {date}
                </p>
                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
            </div>
        </motion.div>
    );
}

