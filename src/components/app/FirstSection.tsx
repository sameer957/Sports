import { motion, useMotionValue, useSpring } from "framer-motion";
import { BasketBall, BasketBallPlayer, Ethiopia, Indicar } from "@/assets";
import bbp from "../../assets/bbp.png";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { LABELS } from "@/utils/Labels";

function useMouseSpring(offset = 350) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveBall = (e: MouseEvent) => {
      x.set(e.clientX - offset);
      y.set(e.clientY - offset);
    };
    window.addEventListener("mousemove", moveBall);
    return () => window.removeEventListener("mousemove", moveBall);
  }, [x, y, offset]);

  return { springX, springY };
}

function FirstSection() {
  const { springX, springY } = useMouseSpring();

  return (
    <section className="bg-gray-50 flex-1 h-screen relative overflow-hidden">
   
      <div className="hidden md:flex w-full h-full relative">
     
        <motion.div
          style={{ x: springX, y: springY }}
          initial={{ y: -900, opacity: 1 }}
          animate={{ y: [0, 300, -100, -50], opacity: 1 }}
          transition={{ duration: 2, ease: "easeIn", times: [0, 0.5, 0.8, 1] }}
          whileHover={{
            rotate: -360,
            transition: { duration: 1, repeat: Infinity, ease: "linear" },
          }}
        >
          <BasketBall className="w-[700px] h-[700px]" />
        </motion.div>


        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ y: 800, scale: 0.8, opacity: 0 }}
          animate={{ y: -50, scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
        >
          <BasketBallPlayer className="w-[800px] h-[800px]" />
        </motion.div>

     
        <motion.div
          className="absolute bottom-0 text-lg flex flex-col gap-5 font-medium left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ y: 800, scale: 0.8, opacity: 0 }}
          animate={{ y: -50, scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
        >
          The EuroLeague Finals Top Scorer is the <br />
          individual award for the player that gained <br />
          the highest points in the EuroLeague Finals
   
          <Button className="py-8 text-2xl bg-black">{LABELS.FIRST_SECTION.BTN}</Button>
        </motion.div>

    
        <motion.h1
          className="absolute text-6xl md:text-8xl font-extrabold top-30 left-20 
            bg-gradient-to-b from-[#262626] to-[#B8C2CE] 
            bg-clip-text text-transparent 
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          initial={{ x: -100, scale: 0.8, opacity: 0 }}
          animate={{ x: 50, y: -75, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          TOP <br /> SCORER TO <br /> THE FINAL <br /> MATCH
        </motion.h1>

       
        <div className="absolute right-10 top-2 flex flex-col">
          <Button className="bg-[#E1E8F0] w-fit">
            <p className="text-[#B8C2CE]">Today</p>
          </Button>
          <div className="gap-5">
            {[Ethiopia, Indicar].map((Icon, i) => (
              <motion.div
                key={i}
                className="w-80 rounded-2xl cursor-pointer"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 1 + i * 0.3,
                }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Icon className="w-full h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="md:hidden w-full h-screen relative bg-gray-100">
        <motion.h1
          className="text-3xl font-extrabold text-gray-900 text-center pt-6
            bg-gradient-to-b from-[#262626] to-[#B8C2CE] 
            bg-clip-text text-transparent 
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {LABELS.FIRST_SECTION.FINAL}
        </motion.h1>

        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ y: 200, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.8 }}
        >
          <img src={bbp} alt="Basketball Player" className="w-1200 h-80" width={1200} />
        </motion.div>

        <motion.div
          className="absolute bottom-10 px-10 text-lg flex flex-col w-full gap-5 font-medium left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ y: 800, scale: 0.8, opacity: 0 }}
          animate={{ y: -50, scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1 }}
        >
          The EuroLeague Finals Top Scorer is the
          individual award for the player that gained
          the highest points in the EuroLeague Finals
          <Button>{LABELS.FIRST_SECTION.BTN}</Button>
        </motion.div>
      </div>
    </section>



  );
}

export default FirstSection;
