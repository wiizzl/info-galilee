import { defineDocumentType, makeSource } from "contentlayer2/source-files";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Seconde = defineDocumentType(() => ({
    name: "Seconde",
    filePathPattern: `seconde/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        category: {
            type: "string",
            required: true,
        },
    },
    computedFields,
}));

export const Premiere = defineDocumentType(() => ({
    name: "Premiere",
    filePathPattern: `premiere/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        category: {
            type: "string",
            required: true,
        },
    },
    computedFields,
}));

export const Terminale = defineDocumentType(() => ({
    name: "Terminale",
    filePathPattern: `terminale/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        category: {
            type: "string",
            required: true,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "src/content",
    documentTypes: [Seconde, Premiere, Terminale],
    mdx: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
            rehypeKatex,
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    onVisitLine(node) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [rehypeAutolinkHeadings, { properties: { className: ["anchor"] } }],
        ],
    },
});
