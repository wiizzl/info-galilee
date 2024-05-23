"use client";

import { allOutils, allPremieres, allSecondes, allTerminales } from "contentlayer/generated";
import Link from "next/link";

import config from "@/config.json";

export function Nav() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h2 className="select-none font-semibold">Seconde</h2>
                <div className="flex flex-col gap-1">
                    {allSecondes.map((item, index) => (
                        <Link href={`/${config.link[0].href}${item.slug}`} key={index}>
                            <h3 className="text-muted-foreground transition-all hover:ml-1 hover:text-primary/80">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="select-none font-semibold">Première</h2>
                <div className="flex flex-col gap-1">
                    {allPremieres.map((item, index) => (
                        <Link href={`/${config.link[0].href}${item.slug}`} key={index}>
                            <h3 className="text-muted-foreground transition-all hover:ml-1 hover:text-primary/80">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="select-none font-semibold">Terminale</h2>
                <div className="flex flex-col gap-1">
                    {allTerminales.map((item, index) => (
                        <Link href={`/${config.link[0].href}${item.slug}`} key={index}>
                            <h3 className="text-muted-foreground transition-all hover:ml-1 hover:text-primary/80">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="select-none font-semibold">Outils</h2>
                <div className="flex flex-col gap-1">
                    {allOutils.map((item, index) => (
                        <Link href={`/${config.link[0].href}${item.slug}`} key={index}>
                            <h3 className="text-muted-foreground transition-all hover:ml-1 hover:text-primary/80">
                                {item.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
