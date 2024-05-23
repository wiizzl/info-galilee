import { allPremieres, Premiere } from "contentlayer/generated";
import Link from "next/link";

import Header from "@/components/header";
import { SideBar } from "@/components/sidebar";

import { Section } from "@/components/section";
import config from "@/config.json";

export default function Cours() {
    return (
        <>
            <Header solid />
            <Section>
                <div className="md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
                    <aside className="fixed hidden h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r md:sticky md:block">
                        <SideBar />
                    </aside>
                    <div>
                        {allPremieres.map((item: Premiere, index) => (
                            <Link href={`/${config.link[0].href}/${item.slug}`} key={index}>
                                <p>{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
