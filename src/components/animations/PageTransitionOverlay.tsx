import { motion } from "framer-motion";

export const PageTransitionOverlay = () => {
    return (
        <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
        />
    );
};
