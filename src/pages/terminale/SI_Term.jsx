import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import asservissement from "../../assets/terminale/si/asservissement.jpg";
import modulation from "../../assets/terminale/si/modulation.png";
import reseaux from "../../assets/terminale/si/reseau.jpeg";
import graphe from "../../assets/terminale/si/uml.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export function SI_Term() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Sciences de l&apos;Ingénieur</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des chapitres qui constituent le programme des sciences de
                        l&apos;ingénieur niveau terminale.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="asservissement">
                    <Card
                        image={asservissement}
                        name="Asservissement"
                        description="Dans ce chapitre, nous allons nous intéresser aux systèmes régulés en boucle ouverte et boucle fermée, leur fonctions de transfert et les différents types de correcteurs."
                    />
                </NavLink>
                <NavLink to="reseaux">
                    <Card
                        image={reseaux}
                        name="Réseaux"
                        description="Dans ce chapitre, nous allons voir comment des ordinateurs ou autres périphériques sont capables dans un réseau de communiquer entre eux."
                    />
                </NavLink>
                <NavLink to="modulation">
                    <Card
                        image={modulation}
                        name="Modulation"
                        description="Dans ce chapitre, nous allons nous intéresser au principe de fonctionnement de modulation et démodulation pour le transport des signaux."
                    />
                </NavLink>
                <NavLink to="graphesetats">
                    <Card
                        image={graphe}
                        name="Graphe d'états"
                        description="Dans ce chapitre, nous allons nous intéresser à la modélsation des états dans lesquels se trouvent les objets techniques."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Asservissement() {
    return <FileReader folder={"terminale/si"} fileName={"Asservissement"} />;
}

export function Reseaux() {
    return <FileReader folder={"terminale/si"} fileName={"Réseaux"} />;
}

export function Modulation() {
    return <FileReader folder={"terminale/si"} fileName={"Modulation"} />;
}

export function GraphesEtats() {
    return <FileReader folder={"terminale/si"} fileName={"Graphe d'états"} />;
}
