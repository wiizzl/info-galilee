import { Bot } from "lucide-react";
import Link from "next/link";

import config from "@/config.json";

export default function Footer() {
    return (
        <footer className="z-50 select-none border-t py-8">
            <div className="container flex items-end justify-between">
                <div className="flex flex-col gap-3">
                    <Link href="/" className="flex items-center gap-2">
                        <Bot size={28} />
                        <h1 className="whitespace-nowrap text-sm font-bold md:text-lg lg:text-2xl">{config.sugar.title}</h1>
                    </Link>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-muted-foreground">
                            Construit par{" "}
                            <Link href={config.author[0].url} target="_blank" className="font-bold hover:underline">
                                @{config.author[0].name.toLocaleLowerCase()}
                            </Link>
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Code open source sur{" "}
                            <Link href={config.sugar.repo} target="_blank" className="font-bold hover:underline">
                                GitHub
                            </Link>
                        </p>
                    </div>
                </div>
                <nav className="flex flex-row space-x-3">
                    {config.socials.map((item, index: number) => (
                        <Link
                            href={item.href}
                            target="_blank"
                            className="text-sm text-muted-foreground hover:underline"
                            key={index}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
