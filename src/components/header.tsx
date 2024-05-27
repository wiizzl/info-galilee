"use client";

import { allDocuments } from "contentlayer/generated";
import { Bot, ChevronRight, Dot, Github, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

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
        <>
            <div>
                <Button variant="outline" className="p-3" onClick={() => setOpen((open: boolean) => !open)}>
                    <div className="flex gap-14">
                        <div className="flex items-center gap-2">
                            <Search size={18} className="text-muted-foreground" />
                            <p className="text-muted-foreground">Rechercher...</p>
                        </div>
                        <kbd className="hidden items-center rounded bg-muted px-1.5 text-muted-foreground md:inline-flex lg:inline-flex">
                            <span className="text-xs">CTRL K</span>
                        </kbd>
                    </div>
                </Button>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Entrez le contenu de votre recherche..." />
                <CommandList>
                    <CommandEmpty>Aucun résultat trouvé...</CommandEmpty>
                    <CommandGroup heading="Accueil">
                        {config.link.map((item, index) => (
                            <CommandItem onSelect={() => router.push(`/${item.href}`)} className="flex gap-2" key={index}>
                                <ChevronRight />
                                {item.title}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    {Array.from(new Set(allDocuments.map((item) => item.type))).map((item, index) => (
                        <CommandGroup heading={item} key={index}>
                            {allDocuments
                                .filter((doc) => doc.type === item)
                                .map((item, index) => (
                                    <CommandItem
                                        onSelect={() => router.push(`/${config.link[0].href}${item.slug}`)}
                                        className="flex gap-2"
                                        key={index}
                                    >
                                        <Dot />
                                        {item.title}
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}

function NavDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className="max-h-screen" side="left">
                <SheetHeader className="mb-3">
                    <SheetTitle>
                        <Link href="/" className="flex items-center gap-2">
                            <Bot />
                            <h1 className="whitespace-nowrap text-lg font-bold">{config.sugar.title}</h1>
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <div className="ml-8 flex flex-col gap-8">
                    {Array.from(new Set(allDocuments.map((item) => item.type))).map((item, index) => (
                        <div className="flex flex-col gap-1" key={index}>
                            <h2 className="select-none font-semibold">{item}</h2>
                            <div className="flex flex-col gap-1">
                                {allDocuments
                                    .filter((doc) => doc.type === item)
                                    .map((item, index) => (
                                        <SheetClose asChild key={index}>
                                            <Link href={`/${config.link[0].href}${item.slug}`}>
                                                <h3 className="text-muted-foreground transition-all hover:ml-1 hover:text-primary/80">
                                                    {item.title}
                                                </h3>
                                            </Link>
                                        </SheetClose>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}

export function Header({ solid }: { solid: boolean }) {
    const pathname = usePathname();

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
        <header
            className={`sticky top-0 z-50 select-none py-3 transition-all ${
                solid ? "border-b bg-background" : visible && "border-b bg-background/60 backdrop-blur-md"
            }`}
        >
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-5 lg:gap-16">
                    <div className="flex items-center">
                        <div className="block md:hidden lg:hidden">
                            <NavDrawer />
                        </div>
                        <Link href="/" className="hidden items-center gap-2 md:flex lg:flex">
                            <Bot size={28} />
                            <h1 className="whitespace-nowrap text-sm font-bold md:text-lg lg:text-2xl">{config.sugar.title}</h1>
                        </Link>
                    </div>
                    <nav className="hidden space-x-5 md:flex lg:flex lg:space-x-8">
                        {config.link.map((item, index: number) => (
                            <Link
                                href={`/${item.href}`}
                                className={cn(
                                    "text-sm text-muted-foreground transition-all hover:text-accent-foreground/80",
                                    pathname === `/${item.href}` && "text-accent-foreground/80",
                                )}
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
