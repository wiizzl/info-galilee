import "katex/dist/katex.css";

import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx";

async function getCoursFromParams(slug: string) {
    const cours = allDocuments.find((cours) => cours.slugAsParams === slug);

    if (!cours) return notFound();

    return cours;
}

export default async function MdxCours({ params }: { params: { slug: string } }) {
    const cours = await getCoursFromParams(params.slug);

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-semibold">{cours.title}</h1>
                <p className="text-muted-foreground">{cours.description}</p>
            </div>
            <Mdx code={cours.body.code} />
        </div>
    );
}
