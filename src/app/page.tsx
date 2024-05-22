import { Book } from "lucide-react";
import Link from "next/link";

import { WordRotate } from "@/components/magicui/word-rotate";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";

import Header from "@/components/header";
import config from "@/config.json";

export default function Home() {
    return (
        <div className="bg-grid-white/[0.03]">
            <Header />
            <Section>
                <div className="flex flex-col gap-6">
                    <WordRotate
                        className="text-3xl font-bold md:text-5xl lg:text-7xl"
                        words={[
                            "efficaces",
                            "rapides",
                            "intéressantes",
                            "productives",
                            "efficaces",
                            "utiles",
                            "mémorables",
                            "stimulantes",
                            "captivantes",
                            "instructives",
                            "enrichissantes",
                        ]}
                        before="10x plus"
                    >
                        Rendez vos révisions <br />
                    </WordRotate>
                    <p className="text-base text-muted-foreground md:text-lg lg:text-lg">{config.sugar.description}</p>
                    <div className="flex gap-4">
                        <Link href={`/${config.link[0].href}`} className={buttonVariants()}>
                            Accèder aux cours
                        </Link>
                        <Link href={config.socials[0].href} target="_blank" className={buttonVariants({ variant: "secondary" })}>
                            Rejoindre le discord
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <Book size={30} className="text-muted-foreground" />
                        <p className="text-xs text-muted-foreground md:text-sm lg:text-sm">
                            Des cours de Seconde, Première et de Terminale !
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
