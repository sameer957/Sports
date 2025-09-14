// ShutterOverlay.tsx
import { motion } from "framer-motion";

export const ShutterOverlay = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <motion.h1
        className="text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Click to See Latest Ranking
      </motion.h1>
    </motion.div>
  );
};
