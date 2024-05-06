import { NavLink } from "react-router-dom";
import { Card, FileReader } from "../../tools";

import can from "../../assets/premiere/si/can.png";
import elec from "../../assets/premiere/si/electricite.jpg";
import energetique from "../../assets/premiere/si/energetique.jpeg";
import numeration from "../../assets/premiere/si/numeration.jpg";
import objets from "../../assets/premiere/si/objets.png";
import communication from "../../assets/premiere/si/protocole.jpg";
import signaux from "../../assets/premiere/si/signaux.webp";

// eslint-disable-next-line react-refresh/only-export-components
export function SI_Prem() {
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
                        l&apos;ingénieur niveau première.
                    </p>
                </div>
            </div>
            <div className="chapter-navlink">
                <NavLink to="electricite">
                    <Card
                        image={elec}
                        name="Electricité"
                        description="Ce chapitre comprend les lois de Kirshoff, c'est à dire la loi d'ohm, des mailles et des noeuds ainsi que tout ce qui en découle (diviseur de tension, de courant)."
                    />
                </NavLink>
                <NavLink to="signaux">
                    <Card
                        image={signaux}
                        name="Signaux électriques"
                        description="Ce chapitre montre les différents signaux électriques, qu'ils soient analogiques ou numériques, ainsi que leurs principales caractéristiques."
                    />
                </NavLink>
                <NavLink to="numeration">
                    <Card
                        image={numeration}
                        name="Numération"
                        description="Dans ce chapitre, nous allons voir les différentes conversions entre le binaire, le décimal et l'hexadécimal."
                    />
                </NavLink>
                <NavLink to="can">
                    <Card
                        image={can}
                        name="Conversion analogique/numérique"
                        description="Dans ce chapitre, nous allons étudier le principe d'échantillonage. C'est à dire la conversion d'une valeur analogique en valeur numérique."
                    />
                </NavLink>
                <NavLink to="communication">
                    <Card
                        image={communication}
                        name="Protocoles de communication"
                        description="Dans ce chapitre, nous allons étudier les différents protocole existants permettant aux capteurs, carte à microcontroleurs et actionneurs de communiquer entre eux."
                    />
                </NavLink>
                <NavLink to="energetique">
                    <Card
                        image={energetique}
                        name="Energétique"
                        description="Dans ce chapitre, nous allons particulièrement nous intéresser aux différents types d'énergies ainsi q u'à la façon dont on peut la stocker."
                    />
                </NavLink>
                <NavLink to="objetsconnectes">
                    <Card
                        image={objets}
                        name="Objets connectés"
                        description="Dans ce chapitre, nous allons étudier comment les objets captent, stockent, traitent et transmettent des données, recevoir et donner des instructions un réseau appelé Internet of Things (IoT)."
                    />
                </NavLink>
            </div>
        </main>
    );
}

export function Electricite() {
    return <FileReader folder={"premiere/si"} fileName={"Electricité"} />;
}

export function Signaux() {
    return <FileReader folder={"premiere/si"} fileName={"Signaux électriques"} />;
}

export function Numeration() {
    return <FileReader folder={"premiere/si"} fileName={"Numération"} />;
}

export function Can() {
    return <FileReader folder={"premiere/si"} fileName={"Conversion analogique/numérique"} />;
}

export function Communication() {
    return <FileReader folder={"premiere/si"} fileName={"Protocoles de communication"} />;
}

export function Energetique() {
    return <FileReader folder={"premiere/si"} fileName={"Energétique"} />;
}

export function ObjetsConnectes() {
    return <FileReader folder={"terminale/si"} fileName={"Objets connectés"} />;
}
