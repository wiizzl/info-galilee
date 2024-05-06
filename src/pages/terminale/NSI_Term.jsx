import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import arbre from "../../assets/terminale/nsi/arbre.jpg";
import cryptographie from "../../assets/terminale/nsi/cryptographie.jpg";
import diviser from "../../assets/terminale/nsi/diviser.png";
import graphe from "../../assets/terminale/nsi/graphe.jpg";
import modularite from "../../assets/terminale/nsi/modularite.png";
import processus from "../../assets/terminale/nsi/processus.jpg";
import routage from "../../assets/terminale/nsi/routage.png";
import soc from "../../assets/terminale/nsi/soc.png";

// eslint-disable-next-line react-refresh/only-export-components
export function NSI_Term() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Numérique et Sciences Informatiques</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des chapitres qui constituent le programme de numérique et sciences
                        informatiques
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="routage">
                    <Card
                        image={routage}
                        name="Le Routage"
                        description="Dans ce chapitre, nous allons voir comment les informations envoyées ou issues d'un réseau passent de routeur en routeur."
                    />
                </NavLink>
                <NavLink to="processus">
                    <Card
                        image={processus}
                        name="Processus et Ordonnancement"
                        description="Dans ce chapitre, nous allons voir comment les différents programmes informatiques fonctionnent sur un PC."
                    />
                </NavLink>
                <NavLink to="puce">
                    <Card
                        image={soc}
                        name="Système sur puce"
                        description="Dans ce chapitre, nous allons étudier comment les objets captent, stockent, traitent et transmettent des données, recevoir et donner des instructions un réseau appelé Internet of Things (IoT)."
                    />
                </NavLink>
                <NavLink to="modularite">
                    <Card
                        image={modularite}
                        name="Modularité"
                        description="Dans ce chapitre, nous allons tenter de comprendre pourquoi et comment bien documenter un programme informatique"
                    />
                </NavLink>
                <NavLink to="graphes">
                    <Card
                        image={graphe}
                        name="Les Graphes"
                        description="De nombreuses éléments peuvent être représentés sous forme de graphes. Nous allons ici étudier ce qu'est un graphe et comment le modéliser informatiquement."
                    />
                </NavLink>
                <NavLink to="arbres">
                    <Card
                        image={arbre}
                        name="Arbres binaires"
                        description="Dans ce chapitre, nous allons étudier ce qu'est un arbre binaire et nous intéresser plus particulièrement aux arbres binaires de recherche."
                    />
                </NavLink>
                <NavLink to="cryptographie">
                    <Card
                        image={cryptographie}
                        name="Cryptographie"
                        description="Dans ce chapitre, nous allons tenter d'étudier les différents éléments de cryptographie, comment ça fonctionne, de la machine de Turing à nos jours."
                    />
                </NavLink>
                <NavLink to="diviser">
                    <Card
                        image={diviser}
                        name="Diviser pour régner"
                        description="Dans ce chapitre, nous allons étudier le principe 'Diviser pour régner', c'est à dire le tri fusion."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Routage() {
    return <FileReader folder={"terminale/nsi"} fileName={"Le Routage"} />;
}

export function Processus() {
    return <FileReader folder={"terminale/nsi"} fileName={"Processus et Ordonnancement"} />;
}

export function Puce() {
    return <FileReader folder={"terminale/nsi"} fileName={"Système sur puce"} />;
}

export function Modularite() {
    return <FileReader folder={"terminale/nsi"} fileName={"Modularité"} />;
}

export function Graphes() {
    return <FileReader folder={"terminale/nsi"} fileName={"Les Graphes"} />;
}

export function Arbres() {
    return <FileReader folder={"terminale/nsi"} fileName={"Arbres binaires"} />;
}

export function Cryptographie() {
    return <FileReader folder={"terminale/nsi"} fileName={"Cryptographie"} />;
}

export function Diviser() {
    return <FileReader folder={"terminale/nsi"} fileName={"Diviser pour régner"} />;
}
