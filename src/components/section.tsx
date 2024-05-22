import { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {
    return <section className="container min-h-screen py-40">{children}</section>;
}
