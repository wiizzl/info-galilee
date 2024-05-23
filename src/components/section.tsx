import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = {
    className?: string;
} & PropsWithChildren;

export function Section({ children, className }: SectionProps) {
    return <section className={cn("container", className)}>{children}</section>;
}
