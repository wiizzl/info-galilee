import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/footer";

import { cn } from "@/lib/utils";

import config from "@/config.json";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: {
        default: config.sugar.title,
        template: `%s | ${config.sugar.title}`,
    },
    description: config.sugar.description,
    keywords: config.sugar.keywords,
    authors: config.author,
    creator: config.author[0].name,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <head />
            <body className={cn("font-sans antialiased selection:bg-primary/30", fontSans.variable)}>
                {/* <Header /> */}
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
