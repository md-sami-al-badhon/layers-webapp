"use client";
import React from "react";
import Image from "next/image";
import { v4 as uuid4 } from "uuid";
import { IntegrationsType } from "@/sections/Integrations";
import { motion } from "motion/react";

const IntegrationsColumn = ({
    integrations,
    className,
    reverse,
}: {
    integrations: IntegrationsType;
    className?: string;
    reverse: boolean;
}) => {
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{ y: reverse ? 0 : "-50%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className={`flex flex-col gap-4 pb-4 ${className}`}
        >
            {Array.from({ length: 2 }).map((_, index) => (
                <React.Fragment key={index}>
                    {integrations.map((integration) => (
                        <div
                            key={uuid4()}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={integration.icon}
                                    alt={`${integration.name} icon`}
                                    className="size-24"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">
                                {integration.name}{" "}
                            </h3>
                            <p className="mt-2 text-center text-white/50">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationsColumn;
