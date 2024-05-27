import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import config from "@/config.json";

export default function Cours() {
    const faq = [
        {
            title: "Qu'est-ce que les Sciences de l'Ingénieur ?",
            content:
                "Les Sciences de l'Ingénieur couvrent l'étude et l'application des principes scientifiques et mathématiques pour concevoir, construire et maintenir des infrastructures, des systèmes et des produits. Elles englobent des domaines variés tels que la mécanique, l'électricité, l'électronique, l'informatique, et plus encore.",
        },
        {
            title: "Quels sont les principaux sujets étudiés dans les cours de sciences de l'ingénieur ?",
            content:
                "Les principaux chapitres sont la mécanique (statique, dynamique, résistance des matériaux), l'électricité et l'électronique (circuits électriques, composants, systèmes de communication), l'automatique, l'informatique (programmation, systèmes embarqués), et la conception assistée par ordinateur (CAO).",
        },
        {
            title: "Je suis élève en SI. En quoi ce site peut m'être utile ?",
            content:
                "Ce site vous permettra d'accèder aux différents chapitres étudiés en classe. Il peut vous servir pour vos diverses raisons comme par exemple des révisions.",
        },
    ];

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${config.link[0].href}`}>{config.link[0].title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Introduction</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h1 className="text-5xl font-extrabold">Introduction</h1>
                <p className="text-muted-foreground">Accèdez aux cours du programme de SI du lycée Galilée.</p>
                <div className="flex flex-col gap-2">
                    <p>
                        Ce site a pour objectif de fournir aux élèves en Sciences de l'Ingénieur un accès facilité aux ressources
                        nécessaires pour leurs études. Vous trouverez ici des cours détaillés, des exercices corrigés, ainsi que
                        des ressources supplémentaires pour approfondir vos connaissances.
                    </p>
                    <p>
                        Les cours de ce site ont tous été rédigé par l'actuelle professeure des Sciences de l'Ingénieur au lycée
                        Galilée. Je n'ai fait que reprendre le contenu de l'ancien site.
                    </p>
                    <p>
                        J'espère que ce site sera une aide précieuse dans votre parcours en SI et qu'il contribuera à votre succès
                        dans cette matière passionnante.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-semibold">Foire aux Questions</h2>
                <hr />
                <Accordion type="single" collapsible className="w-full">
                    {faq.map((item, index) => (
                        <AccordionItem value={index.toString()} key={index}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
