"use client";
import Image from "next/image";
import LogoImage from "../../public/images/logo.svg";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import Button from "@/components/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-[100]">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/75 backdrop-blur-sm ">
                        <div className="grid grid-cols-2 lg:grid-cols-3  justify-evenly  py-2 px-4 md:pr-2 items-center  ">
                            <Link href="/">
                                <Image
                                    src={LogoImage}
                                    alt="logo image"
                                    className="h-9 w-auto md:h-auto"
                                />
                            </Link>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex justify-center items-center gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <Link key={uuidv4()} href={link.href}>
                                            {link.label}{" "}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            {/* hamburger */}

                            <div className="flex justify-end gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={`origin-left transition ${
                                            isOpen && "rotate-45 -translate-y-1"
                                        }`}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={` transition ${
                                            isOpen && "opacity-0"
                                        }`}
                                    ></line>
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={`origin-left transition ${
                                            isOpen && "-rotate-45 translate-y-1"
                                        }`}
                                    ></line>
                                </svg>
                                <Button
                                    className="hidden md:inline-flex items-center"
                                    variant="secondary"
                                >
                                    Log In
                                </Button>

                                <Button
                                    className="hidden md:inline-flex items-center"
                                    variant="primary"
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-2 ">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={uuidv4()}
                                                href={link.href}
                                            >
                                                {link.label}{" "}
                                            </Link>
                                        ))}
                                        <Button variant="secondary">
                                            Log In
                                        </Button>
                                        <Button variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
    );
}
