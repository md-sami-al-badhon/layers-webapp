"use client";
import quantumLogo from "../../public/images/quantum.svg";
import acmeLogo from "../../public/images/acme-corp.svg";
import echoValleyLogo from "../../public/images/echo-valley.svg";
import pulseLogo from "../../public/images/pulse.svg";
import outsideLogo from "../../public/images/outside.svg";
import apexLogo from "../../public/images/apex.svg";
import celestialLogo from "../../public/images/celestial.svg";
import twiceLogo from "../../public/images/twice.svg";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { motion } from "motion/react";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip ">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Already chosen by these market leaders
                </h3>
                <div className="flex  overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, index) => (
                            <React.Fragment key={index}>
                                {logos.map((logo) => (
                                    <Image
                                        src={logo.image}
                                        alt={logo.name}
                                        key={uuidv4()}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
