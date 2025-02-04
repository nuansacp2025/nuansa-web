'use client'

import Image from "next/image";
import { useScroll } from "motion/react";
import { useEffect, useState } from "react";

export const ScrollableBackground = ({ src, height }) => {
    const {scrollY} = useScroll();
    const [marginTop, setMarginTop] = useState('0px');
    const [marginBot, setMarginBot] = useState('0px');
    const [width, setWidth] = useState(0);
    useEffect(() => {
        var temp = window.scrollY / (document.body.scrollHeight - window.innerHeight) * (height - window.innerHeight);
        setMarginTop(`-${temp}px`);
        setMarginBot(`-${height - window.innerHeight - temp}px`);
        setWidth(window.innerWidth);
    })
    useEffect(() => {
        return scrollY.on('change', (latestValue) => {
            var temp = latestValue / (document.body.scrollHeight - window.innerHeight) * (height - window.innerHeight);
            setMarginTop(`-${temp}px`);
            setMarginBot(`-${height - window.innerHeight - temp}px`);
            setWidth(window.innerWidth);
        });
    });
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
                <Image src={src} alt="Background" fill priority={true} />
            </div>
        </>
    );
};