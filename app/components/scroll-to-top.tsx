"use client";

import {useEffect} from "react";
import {useAnimationControls, useScroll, motion, Variants} from "motion/react";
import {FaArrowAltCircleUp, FaArrowCircleUp, FaArrowUp} from "react-icons/fa"

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
    const {scrollY} = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollY.on('change', (latestValue) => {
            if (latestValue > window.innerHeight) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });

    return (
        <motion.button
            data-testid="scroll-to-top"
            className="fixed bottom-10 right-0 p-10 z-10"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <FaArrowCircleUp className="text-4xl text-white" />
        </motion.button>
    );
};

export default ScrollToTopButton;