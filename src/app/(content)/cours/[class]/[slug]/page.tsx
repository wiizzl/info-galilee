import "katex/dist/katex.css";

import { allOutils, allPremieres, allSecondes, allTerminales } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx";

async function getCoursFromParams(slug: string) {
    const allCours = [...allSecondes, ...allPremieres, ...allTerminales, ...allOutils]; // Combine all courses into one array

    const cours = allCours.find((cours) => cours.slugAsParams === slug);

    if (!cours) return notFound();

    return cours;
}

export default async function MdxCours({ params }: { params: { slug: string } }) {
    const cours = await getCoursFromParams(params.slug);

    return <Mdx code={cours.body.code} />;
}
