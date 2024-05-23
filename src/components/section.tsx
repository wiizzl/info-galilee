import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = {
    className?: string;
} & PropsWithChildren;

export function Section({ children, className }: SectionProps) {
    return <section className={cn("container min-h-screen ", className)}>{children}</section>;
}
