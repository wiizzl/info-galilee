import Link from "next/link";

import { Header } from "@/components/header";
import { Section } from "@/components/section";

import config from "@/config.json";

export default function Contribute() {
    return (
        <div className="bg-grid-white/[0.03]">
            <Header solid={false} />
            <Section className="my-8">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">Vous souhaitez aider ?</h1>
                            <p className="text-muted-foreground">Contribuer est le meilleur moyen de progresser.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p>
                                Vous avez la possibilité de modifier ou de compléter un chapitre directement depuis le{" "}
                                <Link href={config.sugar.repo} target="_blank" className="underline">
                                    dépôt GitHub
                                </Link>
                                .
                            </p>
                            <p>
                                Les cours sont rédigé en{" "}
                                <Link href="https://lc.cx/pKebpi" target="_blank" className="underline">
                                    Markdown
                                </Link>
                                , ce qui vous facilitera la rédaction. Afin de visualiser directement l'affichage markdown quand
                                vous tapez, vous pouvez utiliser un éditeur Markdown comme{" "}
                                <Link href="https://obsidian.md/" target="_blank" className="underline">
                                    Obsidian
                                </Link>{" "}
                                (avancé) ou{" "}
                                <Link href="https://www.marktext.cc/" target="_blank" className="underline">
                                    Marktext
                                </Link>{" "}
                                (simpliste).
                            </p>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <p>
                                        Maintenant que vous avez un éditeur, vous pouvez récupérer le code en clonant le dépôt
                                        grâce à la commande :
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        PS : Vous devez avoir{" "}
                                        <Link href="https://git-scm.com/" target="_blank" className="underline">
                                            GIT
                                        </Link>{" "}
                                        sur votre machine.
                                    </p>
                                </div>
                                <code className="rounded-lg bg-secondary p-3">git clone {config.sugar.repo}</code>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p>
                                    Les fichiers Markdown se trouvent dans le dossier{" "}
                                    <Link
                                        href={`${config.sugar.repo}/tree/main/src/content/`}
                                        target="_blank"
                                        className="underline"
                                    >
                                        src/content
                                    </Link>
                                    .
                                </p>
                            </div>
                            <p>Vous pourrez alors ouvrir le fichier Markdown de votre choix pour le modifier.</p>
                            <p>
                                Une fois vos modifications effectuées, vous allez devoir{" "}
                                <Link href="https://lc.cx/gQHQ1n" target="_blank" className="underline">
                                    soumettre une demande de tirage
                                </Link>{" "}
                                que je devrais par la suite valider. Une fois votre demande validée, les modifications se
                                publieront automatiquement sur le site.
                            </p>
                            <p>
                                Pour toutes questions ou demande d'aide, n'hésitez pas à vous renseigner sur le{" "}
                                <Link href={config.socials[0].href} target="_blank" className="underline">
                                    {config.socials[0].title}
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
