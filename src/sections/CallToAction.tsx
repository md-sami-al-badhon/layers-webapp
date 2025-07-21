"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>(null);
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, repeat: Infinity, ease: "linear" }
        );
    }, []);
    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    ref={scope}
                    className="flex flex-none pr-16  gap-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex gap-16 items-center ">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
