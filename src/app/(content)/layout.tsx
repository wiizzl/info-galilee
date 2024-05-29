"use client";

import { allDocuments } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

import { Header } from "@/components/header";
import { Section } from "@/components/section";

import { cn } from "@/lib/utils";

import config from "@/config.json";

export default function CoursLayout({ children }: PropsWithChildren) {
    const pathname = usePathname();

    return (
        <>
            <Header solid />
            <Section>
                <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
                    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
                        <div className="flex flex-col gap-8">
                            {Array.from(new Set(allDocuments.map((item) => item.type))).map((item, index) => (
                                <div className="flex flex-col gap-1" key={index}>
                                    <h2 className="select-none font-semibold">{item}</h2>
                                    <div className="flex flex-col gap-1">
                                        {allDocuments
                                            .filter((doc) => doc.type === item)
                                            .map((item, index) => (
                                                <Link href={`/${config.link[0].href}${item.slug}`} key={index}>
                                                    <h3
                                                        className={cn(
                                                            "transition-all hover:ml-1 hover:text-primary/80",
                                                            pathname.endsWith(item.slug)
                                                                ? "text-accent-foreground/80"
                                                                : "text-muted-foreground",
                                                        )}
                                                    >
                                                        {item.title}
                                                    </h3>
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>
                    <main className="min-h-screen py-10">{children}</main>
                </div>
            </Section>
        </>
    );
}
