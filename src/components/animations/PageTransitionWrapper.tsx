import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransitionOverlay } from "@/components/animations/PageTransitionOverlay";
import { Button } from "@/components/ui/button";



export const PageTransitionWrapper = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            navigate("/");
            setIsAnimating(false);
        }, 600);
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <AnimatePresence>
                {isAnimating && <PageTransitionOverlay />}
            </AnimatePresence>

            <Button onClick={handleClick}>Go to Landing Page</Button>
        </div>
    );
};
