import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata & { verification: { ahrefs: string } } = {
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
    verification: {
        google: "JDqk20Q6vdJ3_y0u2--KEDQogny0dB7-syNnw41WhAk",
        ahrefs: "0d31de2d841854b704d6d7a6c86c3446f0a6fab3217ed12aa8c2209b176add17",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-4CE9VEFD1C" />
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
