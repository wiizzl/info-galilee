"use client";

import { Bot, ChevronRight, Github, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

import config from "@/config.json";

function Command() {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <div className="hidden lg:block">
            <div>
                <Button variant="outline" className="p-3" onClick={() => setOpen((open: boolean) => !open)}>
                    <div className="flex gap-14">
                        <div className="flex items-center gap-2">
                            <Search size={18} className="text-muted-foreground" />
                            <p className="text-muted-foreground">Rechercher...</p>
                        </div>
                        <kbd className="inline-flex items-center rounded bg-muted px-1.5 text-muted-foreground">
                            <span className="text-xs">CTRL K</span>
                        </kbd>
                    </div>
                </Button>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Entrez une commande ou faites une recherche..." />
                <CommandList>
                    <CommandEmpty>Aucun résultat trouvé...</CommandEmpty>
                    <CommandGroup heading="Liens">
                        {config.link.map((item, index) => (
                            <CommandItem onSelect={() => router.push(`/${item.href}`)} className="flex gap-2" key={index}>
                                <ChevronRight />
                                {item.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    );
}

export default function Header() {
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setVisible(true);
            } else setVisible(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 select-none py-3 ${visible && "border-b bg-background/60 backdrop-blur-md"}`}>
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-5 lg:gap-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Bot size={28} />
                        <h1 className="whitespace-nowrap text-sm font-bold md:text-lg lg:text-2xl">{config.sugar.title}</h1>
                    </Link>
                    <nav className="flex space-x-3 lg:space-x-8">
                        {config.link.map((item, index: number) => (
                            <Link
                                href={`/${item.href}`}
                                className="text-sm text-muted-foreground transition-all hover:text-accent-foreground/80"
                                key={index}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center">
                    <nav className="flex space-x-2">
                        <Command />
                        <Link
                            href={config.sugar.repo}
                            target="_blank"
                            className={buttonVariants({ variant: "outline", size: "icon" })}
                        >
                            <Github size={20} className="text-muted-foreground" />
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
