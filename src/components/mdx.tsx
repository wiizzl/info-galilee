import { YouTubeEmbed } from "@next/third-parties/google";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

type Components = {
    h1: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h2: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h3: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h4: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h5: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h6: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    a: React.FC<React.HTMLProps<HTMLAnchorElement>>;
    p: React.FC<React.HTMLProps<HTMLParagraphElement>>;
    ul: React.FC<React.HTMLProps<HTMLUListElement>>;
    ol: React.FC<React.HTMLProps<HTMLOListElement>>;
    li: React.FC<React.HTMLProps<HTMLLIElement>>;
    blockquote: React.FC<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    hr: React.FC<React.HTMLProps<HTMLHRElement>>;
    table: React.FC<React.TableHTMLAttributes<HTMLTableElement>>;
    tr: React.FC<React.HTMLAttributes<HTMLTableRowElement>>;
    td: React.FC<React.HTMLProps<HTMLTableCellElement>>;
    code: React.FC<React.HTMLProps<HTMLElement>>;
    Image: React.FC<{ className?: string; src: string; alt: string; width: number; height: number }>;
    Link: React.FC<{ className?: string; href: string }>;
    Video: React.FC<{ id: string }>;
};

const components: Record<string, React.ComponentType<any>> = {
    h1: ({ className, ...props }) => <h1 className={cn("text-3xl font-bold ", className)} {...props} />,
    h2: ({ className, ...props }) => (
        <h2 className={cn("border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0", className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
        <h3 className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
    ),
    h4: ({ className, ...props }) => (
        <h4 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
    ),
    h5: ({ className, ...props }) => (
        <h5 className={cn("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className)} {...props} />
    ),
    h6: ({ className, ...props }) => (
        <h6 className={cn("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className)} {...props} />
    ),
    a: ({ className, ...props }) => <a className={cn("font-medium underline underline-offset-4", className)} {...props} />,
    p: ({ className, ...props }) => <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />,
    ul: ({ className, ...props }) => <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />,
    ol: ({ type, className, ...props }) => <ol type="1" className={cn("my-6 ml-6 list-decimal", className)} {...props} />,
    li: ({ className, ...props }) => <li className={cn("mt-2", className)} {...props} />,
    blockquote: ({ className, cite, ...props }) => (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground", className)} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
        <table className={cn("border", className)} {...props} />
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => <tr className={cn("", className)} {...props} />,
    td: ({ className, ...props }) => <td className={cn("px-4 py-2 border", className)} {...props} />,
    code: ({ className, ...props }) => <code className={cn("px-3", className)} {...props} />,
    Image: ({ className, src, alt, width, height, ...props }) => (
        <Image className={cn("rounded-md", className)} src={src} alt="Image du cours" width={width} height={height} {...props} />
    ),
    Link: ({ className, href, ...props }) => <Link className="underline" href={href} {...props} />,
    Video: ({ id, ...props }) => <YouTubeEmbed videoid={id} {...props} />,
};

export function Mdx({ code }: { code: string }) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
