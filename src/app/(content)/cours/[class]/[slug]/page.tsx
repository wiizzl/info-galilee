import "katex/dist/katex.css";

import { allDocuments } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "@/components/mdx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import config from "@/config.json";

async function getCoursFromParams(slug: string) {
    const cours = allDocuments.find((cours) => cours.slugAsParams === slug);

    if (!cours) return notFound();

    return cours;
}

export default async function MdxCours({ params }: { params: { slug: string } }) {
    const cours = await getCoursFromParams(params.slug);

    return (
        <>
            <div className="flex flex-col gap-2">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${config.link[0].href}`}>{config.link[0].title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>{cours.type}</BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{cours.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-5xl font-extrabold">{cours.title}</h1>
                <p className="text-muted-foreground">{cours.description}</p>
            </div>
            <div>
                <Mdx code={cours.body.code} />
            </div>
        </>
    );
}
