const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import { randomUUID } from "crypto";

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image src={logo} alt="Layers logo" />{" "}
                    </div>
                    <div>
                        {" "}
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <Link
                                    key={randomUUID()}
                                    href={link.href}
                                    className="text-white/50 text-sm"
                                >
                                    {link.label}{" "}
                                </Link>
                            ))}{" "}
                        </nav>{" "}
                    </div>
                </div>
            </div>
        </section>
    );
}
