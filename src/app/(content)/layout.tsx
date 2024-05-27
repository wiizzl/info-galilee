import { PropsWithChildren } from "react";

import Header from "@/components/header";
import { Nav } from "@/components/nav";
import { Section } from "@/components/section";

export default function CoursLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header solid />
            <Section>
                <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
                    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
                        <Nav />
                    </aside>
                    <main className="min-h-screen py-10">{children}</main>
                </div>
            </Section>
        </div>
    );
}
