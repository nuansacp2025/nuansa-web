"use client";

import {useEffect} from "react";
import {useAnimationControls, useScroll, motion, Variants} from "framer-motion";
import {FaArrowUp} from "react-icons/fa"

const isBrowser = () => typeof window != 'undefined';

const ScrollToTopContainerVariants: Variants = {
    hide: {opacity: 0, y: 100},
    show: {opacity: 1, y: 0},
}

const scrollToTop = () => {
    if (!isBrowser()) {
        return;
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
};

const ScrollToTopButton = () => {
    const {scrollYProgress} = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            className="fixed bottom-10 right-0 p-10 accent-orange-500"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <FaArrowUp />
        </motion.button>
    );
};

export default ScrollToTopButton;