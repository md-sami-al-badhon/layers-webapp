"use client";
import Button from "@/components/Button";
import designExample1Image from "../../public/images/design-example-1.png";
import designExample2Image from "../../public/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";
import cursorImage from "../../public/images/cursor-you.svg";
export default function Hero() {
    const [leftCursorScope, leftCursorAnimate] = useAnimate();
    const [rightCursorScope, rightCursorAnimate] = useAnimate();
    useEffect(() => {
        leftCursorAnimate([
            [leftCursorScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftCursorScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftCursorScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightCursorAnimate([
            [
                rightCursorScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightCursorScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightCursorScope.current,
                { x: 0, y: [0, -10, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);
    return (
        <section
            className="py-24 overflow-x-clip "
            style={{ cursor: `url(${cursorImage.src}),auto` }}
        >
            <div className="container relative">
                {/* large device cursor and images */}
                <motion.div
                    drag
                    initial={{ opacity: 0, x: -100, y: 100 }}
                    animate={{
                        opacity: [0, 1, 1],
                        x: [-100, -100, 0],
                        y: [100, 100, 0],
                    }}
                    transition={{
                        duration: 1,
                        times: [0, 0.5, 1],
                    }}
                    className="absolute -left-35 top-16 hidden lg:block"
                >
                    <Image
                        draggable="false"
                        src={designExample1Image}
                        alt="Design Example 1 image"
                    />
                </motion.div>
                {/* cursor */}
                <motion.div
                    ref={leftCursorScope}
                    initial={{ opacity: 0, x: -200, y: 100 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Abdullah" />
                </motion.div>

                <motion.div
                    drag
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    animate={{
                        opacity: [null, 1, 1],
                        x: [null, null, 0],
                        y: [null, null, 0],
                    }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image
                        draggable="false"
                        src={designExample2Image}
                        alt="Design Example 2 image"
                    />
                </motion.div>
                <motion.div
                    ref={rightCursorScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4  hidden lg:block"
                >
                    <Pointer name="Sami" color="red" />
                </motion.div>
                {/* default content for all device */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-6 lg:text-8xl">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl max-w-2xl text-white/50 mt-8 mx-auto">
                    {" "}
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.{" "}
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full focus:outline-none
                        focus:border-none"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap "
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
