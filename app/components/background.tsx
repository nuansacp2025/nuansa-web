'use client'

import Image from "next/image";
import { useScroll } from "motion/react";
import React, { useEffect, useState } from "react";

interface BackgroundProps {
    src: string;
    width: number;
    height: number;
}

export const ScrollableBackground: React.FC<BackgroundProps> = ({ src, width, height }) => {
    const {scrollY} = useScroll();
    const [marginTop, setMarginTop] = useState('0px');
    const [marginBot, setMarginBot] = useState('0px');
    const [windowWidth, setWidth] = useState(0);
    useEffect(() => {
        const backgroundHeight = height * window.innerWidth / width;
        if (backgroundHeight < window.innerHeight) {
            setMarginTop('0px');
            setMarginBot('0px');
        }
        const temp = -1 * window.scrollY / (document.body.scrollHeight - window.innerHeight) * (backgroundHeight - window.innerHeight);
        setMarginTop(`${temp}px`);
        setMarginBot(`${window.innerHeight - backgroundHeight - temp}px`);
        setWidth(window.innerWidth);
    }, [height, width]);
    useEffect(() => {
        return scrollY.on('change', (latestValue) => {
            const backgroundHeight = height * window.innerWidth / width;
            if (backgroundHeight < window.innerHeight) {
                setMarginTop('0px');
                setMarginBot('0px');
            }
            const temp = -1 * latestValue / (document.body.scrollHeight - window.innerHeight) * (backgroundHeight - window.innerHeight);
            setMarginTop(`${temp}px`);
            setMarginBot(`${window.innerHeight - backgroundHeight - temp}px`);
            setWidth(window.innerWidth);
        });
    }, [height, scrollY, width]);
    return (
        <>
            <style jsx>
            {`
                .img {
                    margin-top: ${marginTop};
                    margin-bottom: ${marginBot}
                }
            `}
            </style>
            <div className="fixed inset-0 -z-10 overflow-hidden img">
                <Image src={src} alt="Background" fill priority={false} />
            </div>
        </>
    );
};