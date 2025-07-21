import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import { randomUUID } from "crypto";
import avatar1 from "../../public/images/avatar-ashwin-santiago.jpg";
import avatar2 from "../../public/images/avatar.jpeg";
import avatar3 from "../../public/images/avatar-owen-garcia.jpg";

import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section id="features" className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <div className="flex justify-center">
                    <h2 className=" text-6xl font-medium text-center mt-6 max-w-2xl">
                        Where power meets{" "}
                        <span className="text-lime-400">simplicity</span>
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 ">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description=" Work together seamlessly with conflict-free team editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        {" "}
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="border-blue-500 z-40  group-hover:drop-shadow-lg   group-hover:drop-shadow-amber-200/75 transition-all group-hover:translate-y-1  duration-500">
                                <Image
                                    className="rounded-full"
                                    src={avatar1}
                                    alt="Avatar 1"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30 group-hover:drop-shadow-lg   group-hover:drop-shadow-amber-200/75 transition-all group-hover:translate-y-1 duration-500 delay-200">
                                <Image
                                    className="rounded-full"
                                    src={avatar2}
                                    alt="Avatar 2"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20 group-hover:drop-shadow-lg   group-hover:drop-shadow-amber-200/75 transition-all group-hover:translate-y-1 duration-500 delay-400">
                                <Image
                                    className="rounded-full"
                                    src={avatar3}
                                    alt="Avatar 3"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1  transition-all group-hover:translate-y-1 duration-500 delay-600 ">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            key={i}
                                            className="size-1.5 rounded-full bg-white"
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>{" "}
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        {" "}
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative ">
                                    <span>incredible</span>
                                    <video
                                        src="videos/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className=" absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                    />
                                </span>{" "}
                                growth this year{" "}
                            </p>{" "}
                        </div>{" "}
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="w-28 outline-2 outline-transparent group-hover:outline-lime-400 outline-offset-4 group-hover:translate-y-1  transition-all duration-500">
                                shift
                            </Key>
                            <Key className="outline-2 outline-transparent group-hover:outline-lime-400 outline-offset-4 group-hover:translate-y-1  transition-all duration-500 delay-150">
                                alt
                            </Key>
                            <Key className="outline-2 outline-transparent group-hover:outline-lime-400 outline-offset-4 group-hover:translate-y-1  transition-all duration-500 delay-300">
                                C
                            </Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={randomUUID()}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center justify-center hover:scale-105 transition duration-500 group"
                        >
                            <span className="bg-lime-400 text-neutral-950 rounded-full size-5 inline-flex justify-center items-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}{" "}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
