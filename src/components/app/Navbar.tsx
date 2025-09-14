import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { NavIcon } from "@/assets";
import { LABELS } from "@/utils/Labels";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { PageTransitionOverlay } from "../animations/PageTransitionOverlay";
import { PATHS } from "@/routes/Paths";

const navItems = [
  { label: LABELS.NAVBAR.HOME, path: PATHS.HOME },
  { label: LABELS.NAVBAR.CATEGORY, path: PATHS.CATEGORY },
  { label: LABELS.NAVBAR.TRENDING_NEWS, path: PATHS.TRENDING },
  { label: LABELS.NAVBAR.RECENT_NEWS, path: PATHS.RECENT },
  { label: LABELS.NAVBAR.CLUBS_RANKING, path: PATHS.CLUBS },
  { label: LABELS.NAVBAR.SPORTS_ARTICLE, path: PATHS.ARTICLES },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const MotionNavItem = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <motion.li
    variants={item}
    whileHover={{ scale: 1.05 }}
    className="cursor-pointer hover:text-black"
    onClick={onClick}
  >
    {children}
  </motion.li>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const navigate = useNavigate();


  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const handleNavigation = (path: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate(path);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <>

      <AnimatePresence>
        {isAnimating && (
          <PageTransitionOverlay />
        )}
      </AnimatePresence>

      <nav className="w-full bg-white shadow-sm px-6 py-1 flex justify-between items-center">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavIcon className="w-24 h-16" />
        </motion.div>


        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-8 text-gray-600 font-medium"
        >
          {navItems.map((itemObj, idx) => (
            <MotionNavItem
              key={idx}
              onClick={() => handleNavigation(itemObj.path)}
            >
              {itemObj.label}
            </MotionNavItem>
          ))}
        </motion.ul>


        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="hidden md:flex items-center"
        >
          <div className="relative w-64">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder={LABELS.COMMON.SEARCH_PLACEHOLDER}
              className="pl-10 pr-4"
            />
          </div>
        </motion.div>


        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:hidden"
        >
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>


        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 flex flex-col p-6 gap-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end mb-4"
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </button>

              {navItems.map((itemObj, idx) => (
                <motion.p
                  key={idx}
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    setMobileOpen(false);
                    handleNavigation(itemObj.path);
                  }}
                  className="text-lg font-medium text-gray-700 cursor-pointer hover:text-black"
                >
                  {itemObj.label}
                </motion.p>
              ))}

              <div className="relative w-full mt-auto">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <Input
                  type="text"
                  placeholder={LABELS.COMMON.SEARCH_PLACEHOLDER}
                  className="pl-10 pr-4"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
