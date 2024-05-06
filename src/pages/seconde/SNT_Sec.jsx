import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import carto from "../../assets/seconde/snt/cartographie.jpeg";
import donnes from "../../assets/seconde/snt/donnees.jpg";
import histoire from "../../assets/seconde/snt/histoire.jpg";
import internet from "../../assets/seconde/snt/internet.jpg";
import objets from "../../assets/seconde/snt/objets_connectes.jpg";
import photo from "../../assets/seconde/snt/photographie.jpg";
import reseaux from "../../assets/seconde/snt/reseaux_sociaux.jpg";
import web from "../../assets/seconde/snt/web.jpg";

// eslint-disable-next-line react-refresh/only-export-components
export function SNT_Sec() {
    return (
        <main className="background">
            <div>
                <div className="title">
                    <h1>
                        <u>Sciences numériques et technologie</u>
                    </h1>
                </div>
                <div className="desc">
                    <p>
                        Vous retrouverez ici l&apos;ensemble des chapitres qui constituent le programme des sciences numériques et
                        technologie niveau première et terminale.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="internet">
                    <Card
                        image={internet}
                        name="Internet"
                        description="Dans ce chapitre, nous allons étudier le principe de fonctionnement d'Internet."
                    />
                </NavLink>
                <NavLink to="web">
                    <Card
                        image={web}
                        name="Le web"
                        description="Dans ce chapitre, nous allons apprendre comment est né le web et tenter de bien comprendre la différence entre web et Internet"
                    />
                </NavLink>
                <NavLink to="donnees">
                    <Card
                        image={donnes}
                        name="Données structurées"
                        description="Dans ce chapitre, nous allons travailler sur des données en grand nombre mais aussi travailler sur les données personnelles."
                    />
                </NavLink>
                <NavLink to="photographie">
                    <Card
                        image={photo}
                        name="Photographie numérique"
                        description="Dans ce chapitre, nous allons étudier le fonctionnement de la photographie numérique, les pixels, et les métadonnées."
                    />
                </NavLink>
                <NavLink to="cartographie">
                    <Card
                        image={carto}
                        name="Cartographie"
                        description="Dans ce chapitre, nous allons étudier le fonctionnement du GPS, des trames NMEA et du principe de triangulation."
                    />
                </NavLink>
                <NavLink to="reseauxsociaux">
                    <Card
                        image={reseaux}
                        name="Réseaux sociaux"
                        description="Dans ce chapitre, nous allons étudier l'impact des réseaux sociaux sur notre monde actuel et le modéliser selon le principe des graphes orientés."
                    />
                </NavLink>
                <NavLink to="objets">
                    <Card
                        image={objets}
                        name="Objets connectés"
                        description="Dans ce chapitre, nous allons étudier l'impact des objetx connectés dans notre monde actuel et leur principe de fonctionnement."
                    />
                </NavLink>
                <NavLink to="histoire">
                    <Card
                        image={histoire}
                        name="Histoire de l'informatique"
                        description="Dans ce chapitre, vous trouverez quelques petites vidéos retraçant l'hitoire de l'informatique."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Internet() {
    return <FileReader folder={"seconde/snt"} fileName={"Internet"} />;
}

export function Web() {
    return <FileReader folder={"seconde/snt"} fileName={"Le Web"} />;
}

export function Donnees() {
    return <FileReader folder={"seconde/snt"} fileName={"Données structurées"} />;
}

export function Photographie() {
    return <FileReader folder={"seconde/snt"} fileName={"Photographie numérique"} />;
}

export function Cartographie() {
    return <FileReader folder={"seconde/snt"} fileName={"Cartographie"} />;
}

export function ReseauxSociaux() {
    return <FileReader folder={"seconde/snt"} fileName={"Réseaux sociaux"} />;
}

export function Objets() {
    return <FileReader folder={"seconde/snt"} fileName={"Objets connectés"} />;
}

export function Histoire() {
    return <FileReader folder={"seconde/snt"} fileName={"Histoire de l'informatique"} />;
}
