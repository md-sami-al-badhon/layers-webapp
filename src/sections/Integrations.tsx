import Tag from "@/components/Tag";

import figmaIcon from "../../public/images/figma-logo.svg";
import NotionIcon from "../../public/images/notion-logo.svg";
import SlackIcon from "../../public/images/slack-logo.svg";
import RelumeIcon from "../../public/images/relume-logo.svg";
import FramerIcon from "../../public/images/framer-logo.svg";
import GithubIcon from "../../public/images/github-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
    },
    {
        name: "Notion",
        icon: NotionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: SlackIcon,
        description: "Slack is a powerful team communication platform.",
    },
    {
        name: "Relume",
        icon: RelumeIcon,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: FramerIcon,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: GithubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
];
export type IntegrationsType = typeof integrations;
export default function Integrations() {
    return (
        <section id="integrations" className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Plays well with{" "}
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-lg mt-4 text-white/50">
                            Layers seamlessly connects with your favorite tools,
                            making it easy to plug into any workflow and
                            collaborate across platforms.
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px]  mt-8 lg:mt-0 overflow-hidden mask-b-from-90% mask-t-from-90% grid md:grid-cols-2 gap-4">
                            <IntegrationsColumn
                                integrations={integrations}
                                reverse={true}
                            />
                            <IntegrationsColumn
                                reverse={false}
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
