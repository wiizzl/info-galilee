"use client";

import { allDocuments } from "contentlayer/generated";
import Link from "next/link";

import config from "@/config.json";

export function Nav() {
    return (
        <div className="flex flex-col gap-8">
            {Array.from(new Set(allDocuments.map((item) => item.type))).map((item, index) => (
                <div className="flex flex-col gap-1" key={index}>
                    <h2 className="select-none font-semibold">{item}</h2>
                    <div className="flex flex-col gap-1">
                        {allDocuments
                            .filter((doc) => doc.type === item)
                            .map((item, index) => (
                                <Link href={`/${config.link[0].href}${item.slug}`} key={index}>
                                    <h3 className="text-muted-foreground transition-all hover:ml-1 hover:text-primary/80">
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
