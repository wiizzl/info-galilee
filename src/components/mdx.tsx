import { YouTubeEmbed } from "@next/third-parties/google";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Components = {
    h1: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h2: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h3: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    h4: React.FC<React.HTMLProps<HTMLHeadingElement>>;
    p: React.FC<React.HTMLProps<HTMLParagraphElement>>;
    ul: React.FC<React.HTMLProps<HTMLUListElement>>;
    ol: React.FC<React.HTMLProps<HTMLOListElement>>;
    li: React.FC<React.HTMLProps<HTMLLIElement>>;
    blockquote: React.FC<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>>;
    table: React.FC<React.TableHTMLAttributes<HTMLTableElement>>;
    tr: React.FC<React.HTMLAttributes<HTMLTableRowElement>>;
    td: React.FC<React.HTMLProps<HTMLTableCellElement>>;
    code: React.FC<React.HTMLProps<HTMLElement>>;
    Image: React.FC<{ className?: string; src: string; size: number }>;
    Link: React.FC<{ className?: string; href: string }>;
    Video: React.FC<{ id: string }>;
};

const components: Components = {
    h1: ({ className, ...props }) => (
        <h1 className={cn("my-5 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props} />
    ),
    h2: ({ className, ...props }) => (
        <h2 className={cn("my-5 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight", className)} {...props} />
    ),
    h3: ({ className, ...props }) => (
        <h3 className={cn("my-5 scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
    ),
    h4: ({ className, ...props }) => (
        <h4 className={cn("my-5 scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
    ),
    p: ({ className, ...props }) => <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />,
    ul: ({ className, ...props }) => <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />,
    ol: ({ type, className, ...props }) => <ol type="1" className={cn("my-6 ml-6 list-decimal", className)} {...props} />,
    li: ({ className, ...props }) => <li className={className} {...props} />,
    blockquote: ({ className, cite, ...props }) => (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
    ),
    table: ({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
        <table className={cn("w-full border-x", className)} {...props} />
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className={cn("m-0 border-t p-0", className)} {...props} />
    ),
    td: ({ className, ...props }) => (
        <td
            className={cn(
                "border-x border-b px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
                className,
            )}
            {...props}
        />
    ),
    code: ({ className, ...props }) => <code className={cn("p-3 my-5", className)} {...props} />,
    Image: ({ className, src, size, ...props }) => (
        <Image
            className={cn("rounded-lg bg-accent-foreground p-2 my-5", className)}
            src={src}
            alt="Image du cours"
            width={size}
            height={size / 2}
            {...props}
        />
    ),
    Link: ({ className, href, ...props }) => <Link className="underline underline-offset-4" href={href} {...props} />,
    Video: ({ id, ...props }) => <YouTubeEmbed videoid={id} {...props} />,
};

export function Mdx({ code }: { code: string }) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
